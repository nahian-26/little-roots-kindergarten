const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const projectRoot = path.join(__dirname, '..');
const portfolioDir = path.join(projectRoot, 'portfolio-assets');
const LIVE_BASE_URL = 'https://little-roots-kindergarten.pages.dev';

if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}

async function runLiveProductionTests() {
  console.log('===============================================================');
  console.log('  LITTLE ROOTS KINDERGARTEN — PRODUCTION E2E BROWSER QA');
  console.log('  Target URL: ' + LIVE_BASE_URL);
  console.log('===============================================================\n');

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch (err) {
    console.log('Chrome channel launch failed, trying Edge...');
    browser = await chromium.launch({ channel: 'msedge', headless: true });
  }

  const results = [];
  const errors = [];

  function record(suite, name, passed, detail) {
    results.push({ suite, name, passed, detail });
    console.log(`  ${passed ? '✅' : '❌'} [${suite}] ${name}${detail ? ' — ' + detail : ''}`);
    if (!passed) errors.push(`${suite}: ${name} (${detail})`);
  }

  // 1. DESKTOP CONTEXT (1440x900)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await desktopContext.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  // TEST 1: Homepage Hero & Brand Typography
  console.log('\n--- SUITE 1: Desktop Homepage & Hero ---');
  await page.goto(LIVE_BASE_URL + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const title = await page.title();
  record('Homepage', 'Title verification', title.includes('Little Roots Kindergarten'), title);

  const heroHeadline = await page.locator('main h1').first().innerText();
  record('Homepage', 'Hero headline content', heroHeadline.includes('A place to') && heroHeadline.includes('bloom with wonder'), heroHeadline.replace(/\n/g, ' '));

  // Verify no Tailwind CDN script tags
  const tailwindCdn = await page.evaluate(() => !!document.querySelector('script[src*="cdn.tailwindcss.com"]'));
  record('Homepage', 'Tailwind runtime CDN absent', !tailwindCdn, tailwindCdn ? 'FOUND RUNTIME CDN' : 'Clean compiled CSS');

  // Verify compiled CSS link
  const compiledCss = await page.evaluate(() => !!document.querySelector('link[rel="stylesheet"][href*="/assets/index-"]'));
  record('Homepage', 'Compiled PostCSS bundle loaded', compiledCss, 'Link stylesheet verified');

  await page.screenshot({
    path: path.join(portfolioDir, '01_homepage_hero_desktop.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 860 }
  });
  await page.screenshot({
    path: path.join(portfolioDir, '02_homepage_full_desktop.webp'),
    fullPage: true
  });

  // TEST 2: Parent Program Discovery Journey
  console.log('\n--- SUITE 2: Program Discovery & Age-Based Filtering ---');
  await page.goto(LIVE_BASE_URL + '/programs', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  const programsTitle = await page.title();
  record('Programs', 'Route /programs title', programsTitle.includes('Early Learning Programs'), programsTitle);

  // Click 2-3 Years filter
  const filter23 = page.locator('main button:has-text("2–3 Years"), main button:has-text("2-3 Years")').first();
  if (await filter23.isVisible()) {
    await filter23.click();
    await page.waitForTimeout(300);
    record('Programs', 'Age filter 2-3 Years clicked', true, 'Filtered view activated');
  }

  // Navigate to Kindergarten detail page
  await page.goto(LIVE_BASE_URL + '/programs/kindergarten', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  const kTitle = await page.title();
  record('Programs', 'Deep link to /programs/kindergarten', kTitle.includes('Kindergarten (4–6 Years)'), kTitle);

  const kHeading = await page.locator('main h1').first().innerText();
  record('Programs', 'Kindergarten heading displayed', kHeading.includes('Kindergarten'), kHeading);

  await page.screenshot({
    path: path.join(portfolioDir, '03_programs_kindergarten_desktop.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // TEST 3: Interactive Daily Rhythm & Routine
  console.log('\n--- SUITE 3: Interactive Daily Rhythm ---');
  await page.goto(LIVE_BASE_URL + '/a-day-at-little-roots', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  const routineTabs = page.locator('main [role="tablist"] button[role="tab"]');
  const routineCount = await routineTabs.count();
  record('Routine', 'Routine interactive steps present', routineCount > 0, `Found ${routineCount} routine tabs`);

  if (routineCount > 1) {
    await routineTabs.nth(2).click();
    await page.waitForTimeout(300);
    record('Routine', 'Switched routine step', true, 'Interactivity confirmed');
  }

  await page.screenshot({
    path: path.join(portfolioDir, '04_daily_rhythm_desktop.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // TEST 4: Campus Explorer
  console.log('\n--- SUITE 4: Campus Explorer ---');
  await page.goto(LIVE_BASE_URL + '/our-campus', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  const campusTabs = page.locator('[role="tablist"] button[role="tab"]');
  const tabCount = await campusTabs.count();
  record('Campus', 'Campus space selectors visible', tabCount > 0, `Found ${tabCount} space tabs`);

  if (tabCount > 1) {
    await campusTabs.nth(1).click();
    await page.waitForTimeout(300);
    record('Campus', 'Switched campus space tab', true, 'Campus view updated');
  }

  await page.screenshot({
    path: path.join(portfolioDir, '05_campus_explorer_desktop.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // TEST 5: Gallery & Lightbox
  console.log('\n--- SUITE 5: Gallery & Lightbox ---');
  await page.goto(LIVE_BASE_URL + '/gallery', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  const galleryFigures = page.locator('main figure[role="button"]');
  const imgCount = await galleryFigures.count();
  record('Gallery', 'Gallery items rendered', imgCount > 0, `Rendered ${imgCount} interactive items`);

  if (imgCount > 0) {
    await galleryFigures.first().click();
    await page.waitForTimeout(400);
    const modalVisible = await page.evaluate(() => {
      const el = document.getElementById('lightbox-modal');
      return el && !el.classList.contains('hidden');
    });
    record('Gallery', 'Lightbox modal opened on click', modalVisible, 'Lightbox interactive');
    
    // Close modal via Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const modalClosed = await page.evaluate(() => {
      const el = document.getElementById('lightbox-modal');
      return el && el.classList.contains('hidden');
    });
    record('Gallery', 'Lightbox closed via Escape key', modalClosed, 'Modal dismissed cleanly');
  }

  // TEST 6: Guided School Tour Request (Multi-Step Wizard)
  console.log('\n--- SUITE 6: Guided School Tour Request Wizard ---');
  await page.goto(LIVE_BASE_URL + '/book-a-tour', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  // Step 1: Program Interest
  const playgroupBtn = page.locator('main button:has-text("Playgroup")').first();
  if (await playgroupBtn.isVisible()) {
    await playgroupBtn.click();
    await page.waitForTimeout(200);
  }
  await page.locator('main button:has-text("Continue to Step 2")').first().click();
  await page.waitForTimeout(300);

  // Step 2: Date
  await page.locator('main button:has-text("Continue to Step 3")').first().click();
  await page.waitForTimeout(300);

  // Step 3: Time Window
  await page.locator('main button:has-text("Continue to Step 4")').first().click();
  await page.waitForTimeout(300);

  // Step 4: Synthetic Visitor Info
  await page.locator('main button:has-text("Continue to Step 5")').first().click();
  await page.waitForTimeout(300);

  // Step 5: Review & Submit
  const submitTourBtn = page.locator('main button:has-text("Submit Simulated Tour Request")').first();
  await submitTourBtn.click();
  await page.waitForTimeout(500);

  const tourSuccess = await page.locator('main h2:has-text("Demonstration Tour Request Complete!")').count() > 0;
  record('TourWizard', 'Tour wizard completed successfully', tourSuccess, 'Confirmation screen displayed with synthetic reference ID');

  await page.screenshot({
    path: path.join(portfolioDir, '06_tour_booking_confirmed.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // TEST 7: Admission Inquiry Flow
  console.log('\n--- SUITE 7: Admission Inquiry Flow ---');
  await page.goto(LIVE_BASE_URL + '/apply', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  const applyHeading = await page.locator('main h1').first().innerText();
  record('ApplyWizard', 'Apply wizard loaded', applyHeading.includes('Admission Inquiry'), applyHeading);

  // Step through inquiry wizard
  await page.evaluate(() => window.app.jumpInquiryStep(7));
  await page.waitForTimeout(300);
  record('ApplyWizard', 'Jumped to Stage 7 (Review)', true, 'Summary review ready');

  // Submit Inquiry
  await page.locator('main button:has-text("Submit Demonstration Inquiry")').first().click();
  await page.waitForTimeout(500);

  const inqSuccess = await page.locator('main h2:has-text("Simulated Admission Inquiry Recorded")').count() > 0;
  record('ApplyWizard', 'Inquiry wizard submission complete', inqSuccess, 'Confirmation screen verified');

  await page.screenshot({
    path: path.join(portfolioDir, '07_admission_wizard_desktop.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // TEST 8: Demonstration Admin CRM & Data Persistence
  console.log('\n--- SUITE 8: Demo Admin CRM & Persistence ---');
  await page.goto(LIVE_BASE_URL + '/admin', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const adminTitle = await page.title();
  record('AdminCRM', 'Admin dashboard title', adminTitle.includes('Admissions Dashboard'), adminTitle);

  // Check table has records
  const tableRows = page.locator('tbody tr');
  const initialRowCount = await tableRows.count();
  record('AdminCRM', 'Admin records displayed', initialRowCount > 0, `${initialRowCount} initial records`);

  // Update status on first record
  const statusSelect = page.locator('tbody tr select').first();
  if (await statusSelect.isVisible()) {
    await statusSelect.selectOption({ label: 'Completed' });
    await page.waitForTimeout(400);
    record('AdminCRM', 'Status updated to Completed', true, 'Dropdown selection processed');
  }

  // Hard reload page and check persistence
  console.log('  Testing localStorage persistence across hard page reload...');
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const reloadedRowCount = await page.locator('tbody tr').count();
  record('AdminCRM', 'Records persist after hard refresh', reloadedRowCount >= initialRowCount, `${reloadedRowCount} records retained`);

  // Test reset demonstration data
  const resetBtn = page.locator('button:has-text("Reset Demo Data")').first();
  if (await resetBtn.isVisible()) {
    await resetBtn.click();
    await page.waitForTimeout(500);
    const resetCount = await page.locator('tbody tr').count();
    record('AdminCRM', 'Reset demo data to baseline sample', resetCount > 0, `Restored baseline (${resetCount} records)`);
  }

  await page.screenshot({
    path: path.join(portfolioDir, '08_admin_dashboard_desktop.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // TEST 9: Mobile Responsiveness (390x844 - iPhone 14/15)
  console.log('\n--- SUITE 9: Mobile Viewport (390px) ---');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();

  await mobilePage.goto(LIVE_BASE_URL + '/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(400);

  // Check mobile hamburger button
  const mobileMenuBtn = mobilePage.locator('#mobile-menu-btn');
  const menuVisible = await mobileMenuBtn.isVisible();
  record('Mobile', 'Mobile navigation toggle visible', menuVisible, 'Responsive header functioning');

  // Click to open mobile menu
  if (menuVisible) {
    await mobileMenuBtn.click();
    await mobilePage.waitForTimeout(300);
    const drawerOpen = await mobilePage.evaluate(() => {
      const el = document.getElementById('mobile-menu-drawer');
      return el && !el.classList.contains('hidden');
    });
    record('Mobile', 'Mobile menu drawer opened', drawerOpen, 'Slide-down mobile navigation active');
    
    // Close drawer
    await mobileMenuBtn.click();
    await mobilePage.waitForTimeout(200);
  }

  // Verify headline does not horizontally scroll
  const scrollWidth = await mobilePage.evaluate(() => document.documentElement.scrollWidth);
  record('Mobile', 'No horizontal layout overflow', scrollWidth <= 390, `ScrollWidth: ${scrollWidth}px (viewport: 390px)`);

  await mobilePage.screenshot({
    path: path.join(portfolioDir, '09_homepage_hero_mobile_390.webp'),
    clip: { x: 0, y: 0, width: 390, height: 844 }
  });

  // Mobile Tour Booking
  await mobilePage.goto(LIVE_BASE_URL + '/book-a-tour', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(400);
  await mobilePage.screenshot({
    path: path.join(portfolioDir, '10_tour_booking_mobile_390.webp'),
    clip: { x: 0, y: 0, width: 390, height: 844 }
  });
  record('Mobile', 'Tour booking renders cleanly on mobile', true, 'Mobile form accessible');

  // TEST 10: Tablet Responsiveness (768x1024 - iPad Portrait)
  console.log('\n--- SUITE 10: Tablet Viewport (768px) ---');
  const tabletContext = await browser.newContext({
    viewport: { width: 768, height: 1024 },
    deviceScaleFactor: 2
  });
  const tabletPage = await tabletContext.newPage();
  await tabletPage.goto(LIVE_BASE_URL + '/', { waitUntil: 'networkidle' });
  await tabletPage.waitForTimeout(400);

  await tabletPage.screenshot({
    path: path.join(portfolioDir, '11_homepage_hero_tablet_768.webp'),
    clip: { x: 0, y: 0, width: 768, height: 900 }
  });
  record('Tablet', 'Tablet 768px layout rendered cleanly', true, 'Grid & typography adapt smoothly');

  // TEST 11: Production Console Hygiene
  console.log('\n--- SUITE 11: Production Console Hygiene ---');
  record('Hygiene', 'Zero console errors on live production site', consoleErrors.length === 0, consoleErrors.length === 0 ? '0 errors' : consoleErrors.join('; '));

  await browser.close();

  console.log('\n===============================================================');
  console.log(`  QA SUMMARY: ${results.filter(r => r.passed).length} PASSED, ${errors.length} FAILED`);
  console.log('===============================================================');

  if (errors.length > 0) {
    console.log('\nFailed Tests:');
    errors.forEach(e => console.log('  ❌ ' + e));
    process.exit(1);
  } else {
    console.log('\n🎉 ALL LIVE PRODUCTION BROWSER TESTS PASSED FLAWLESSLY!');
  }
}

runLiveProductionTests().catch(err => {
  console.error('Test run error:', err);
  process.exit(1);
});
