const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const portfolioDir = path.join(projectRoot, 'portfolio-assets');

if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}

// 1. Static file server with SPA deep-link fallback
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.xml': 'application/xml'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  
  let filePath = path.join(distDir, reqPath);

  // If path doesn't exist or is an SPA route, fallback to dist/index.html
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(4173, '127.0.0.1', async () => {
  console.log('Local test server running at http://127.0.0.1:4173/');

  let browser;
  try {
    browser = await chromium.launch({
      channel: 'chrome',
      headless: true
    });
  } catch (err) {
    console.log('Chrome channel launch failed, trying Edge...');
    browser = await chromium.launch({
      channel: 'msedge',
      headless: true
    });
  }

  console.log('Browser launched successfully. Executing End-to-End Journeys...');

  // Journey A, D, E & Desktop Screenshots (1440x900)
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  // Test 1: Homepage & Desktop Hero
  console.log('Visiting Homepage...');
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Screenshot 1: Desktop Hero
  await page.screenshot({
    path: path.join(portfolioDir, '01_homepage_hero_desktop.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 860 }
  });
  console.log('  Saved: 01_homepage_hero_desktop.webp');

  // Screenshot 2: Full Homepage
  await page.screenshot({
    path: path.join(portfolioDir, '02_homepage_full_desktop.webp'),
    fullPage: true
  });
  console.log('  Saved: 02_homepage_full_desktop.webp');

  // Journey A: Parent Discovers Programs
  console.log('Executing Journey A: Parent Discovers Programs...');
  await page.goto('http://127.0.0.1:4173/programs', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  // Click 3-4 years filter
  const filterBtn = page.locator('button:has-text("3–4 yrs (Nursery)")');
  if (await filterBtn.count() > 0) {
    await filterBtn.click();
    await page.waitForTimeout(300);
  }

  // Screenshot 4: Program Explorer
  await page.screenshot({
    path: path.join(portfolioDir, '04_program_explorer.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 950 }
  });
  console.log('  Saved: 04_program_explorer.webp');

  // Direct visit to individual program
  await page.goto('http://127.0.0.1:4173/programs/kindergarten', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  // Screenshot 5: Individual Program Detail
  await page.screenshot({
    path: path.join(portfolioDir, '05_program_detail_kindergarten.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 950 }
  });
  console.log('  Saved: 05_program_detail_kindergarten.webp');

  // Journey E: Daily Routine
  console.log('Executing Journey E: Daily Routine...');
  await page.goto('http://127.0.0.1:4173/a-day-at-little-roots', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  // Click routine step 2
  const routineStep = page.locator('button:has-text("Morning Circle & Music")');
  if (await routineStep.count() > 0) {
    await routineStep.click();
    await page.waitForTimeout(300);
  }

  // Screenshot 6: Daily Routine Interactive Page
  await page.screenshot({
    path: path.join(portfolioDir, '06_daily_routine_interactive.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 950 }
  });
  console.log('  Saved: 06_daily_routine_interactive.webp');

  // Journey D: Campus Explorer & Lightbox
  console.log('Executing Journey D: Campus Explorer & Lightbox...');
  await page.goto('http://127.0.0.1:4173/our-campus', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  // Click Nature Garden tab
  const gardenTab = page.locator('button:has-text("Nature Garden")');
  if (await gardenTab.count() > 0) {
    await gardenTab.first().click();
    await page.waitForTimeout(300);
  }

  // Screenshot 7: Campus Explorer
  await page.screenshot({
    path: path.join(portfolioDir, '07_campus_explorer.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 950 }
  });
  console.log('  Saved: 07_campus_explorer.webp');

  // Journey B: Book a Tour Wizard
  console.log('Executing Journey B: Book a School Tour Wizard...');
  await page.goto('http://127.0.0.1:4173/book-a-tour', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  // Click Continue to step 2
  const contBtn1 = page.locator('button:has-text("Continue to Select Date")');
  if (await contBtn1.count() > 0) await contBtn1.click();
  await page.waitForTimeout(300);

  // Step 2: Continue to visitor details
  const contBtn2 = page.locator('button:has-text("Continue to Visitor Details")');
  if (await contBtn2.count() > 0) await contBtn2.click();
  await page.waitForTimeout(300);

  // Screenshot 8: School Tour Wizard
  await page.screenshot({
    path: path.join(portfolioDir, '08_school_tour_wizard.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 950 }
  });
  console.log('  Saved: 08_school_tour_wizard.webp');

  // Submit simulated tour
  const reviewTourBtn = page.locator('button:has-text("Review Request")');
  if (await reviewTourBtn.count() > 0) {
    await reviewTourBtn.click();
    await page.waitForTimeout(300);
    const submitTourBtn = page.locator('button:has-text("Submit Demonstration Tour Request")');
    if (await submitTourBtn.count() > 0) {
      await submitTourBtn.click();
      await page.waitForTimeout(300);
    }
  }

  // Journey C: Admission Inquiry Wizard
  console.log('Executing Journey C: Admission Inquiry Wizard...');
  await page.goto('http://127.0.0.1:4173/apply', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  // Step through inquiry wizard
  const nextBtn = page.locator('button:has-text("Next Step →")');
  if (await nextBtn.count() > 0) {
    await nextBtn.click();
    await page.waitForTimeout(200);
  }

  // Screenshot 9: Admission Inquiry Wizard
  await page.screenshot({
    path: path.join(portfolioDir, '09_admission_inquiry_wizard.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 950 }
  });
  console.log('  Saved: 09_admission_inquiry_wizard.webp');

  // Journey F: Administrative Review & Dashboard
  console.log('Executing Journey F: Admin Dashboard...');
  await page.goto('http://127.0.0.1:4173/admin', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  // Screenshot 10: Admin Dashboard
  await page.screenshot({
    path: path.join(portfolioDir, '10_admin_dashboard.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 950 }
  });
  console.log('  Saved: 10_admin_dashboard.webp');

  // Test Direct Link Reload (Refresh test)
  console.log('Testing direct route reload on /programs/kindergarten...');
  await page.goto('http://127.0.0.1:4173/programs/kindergarten', { waitUntil: 'networkidle' });
  await page.reload({ waitUntil: 'networkidle' });
  const h1Text = await page.locator('h1').textContent();
  console.log(`  Reloaded /programs/kindergarten successfully. H1: "${h1Text.trim()}"`);

  // Journey G: Mobile Experience (390px viewport)
  console.log('Executing Journey G: Mobile Experience (390px)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(500);

  // Screenshot 3: Homepage Mobile
  await mobilePage.screenshot({
    path: path.join(portfolioDir, '03_homepage_mobile_390.webp'),
    clip: { x: 0, y: 0, width: 390, height: 844 }
  });
  console.log('  Saved: 03_homepage_mobile_390.webp');

  // Open mobile drawer
  const menuBtn = mobilePage.locator('#mobile-menu-btn');
  if (await menuBtn.count() > 0) {
    await menuBtn.click();
    await mobilePage.waitForTimeout(300);
    await mobilePage.screenshot({
      path: path.join(portfolioDir, '03b_mobile_menu_open.webp'),
      clip: { x: 0, y: 0, width: 390, height: 844 }
    });
    console.log('  Saved: 03b_mobile_menu_open.webp');
  }

  // Create Carousel Hero Thumbnail (1200x675)
  console.log('Generating Carousel Hero Thumbnail for Invenio Portfolio...');
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await page.screenshot({
    path: path.join(portfolioDir, 'hero_selected_work_carousel.webp'),
    clip: { x: 0, y: 0, width: 1440, height: 810 }
  });
  console.log('  Saved: hero_selected_work_carousel.webp');

  await browser.close();
  server.close();

  console.log('\n====================================================');
  console.log('  ALL BROWSER JOURNEYS COMPLETED SUCCESSFULLY!       ');
  console.log(`  Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('  Errors:', consoleErrors);
  }
  console.log('====================================================\n');
});
