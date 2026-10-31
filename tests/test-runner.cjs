// Little Roots Kindergarten — Automated Test Suite
const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('  LITTLE ROOTS KINDERGARTEN — PRODUCTION TEST SUITE ');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName, extraInfo = '') {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${testName} ${extraInfo}`);
    failCount++;
  }
}

// 1. Mock DOM and Browser Environment
global.window = global;
global.window.addEventListener = () => {};
global.window.location = { pathname: '/', hash: '', protocol: 'https:' };
global.window.history = {
  pushState: (state, title, url) => {
    global.window.location.pathname = url;
  }
};
global.window.scrollTo = () => {};

const mockStorage = {};
global.localStorage = {
  getItem: (k) => mockStorage[k] || null,
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: (k) => { delete mockStorage[k]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};

const domStore = {};
global.document = {
  getElementById: (id) => {
    if (!domStore[id]) {
      domStore[id] = {
        id,
        innerHTML: '',
        textContent: '',
        value: '',
        classList: {
          _classes: new Set(),
          add: function(c) { this._classes.add(c); },
          remove: function(c) { this._classes.delete(c); },
          contains: function(c) { return this._classes.has(c); }
        },
        setAttribute: () => {},
        style: {}
      };
    }
    return domStore[id];
  },
  addEventListener: () => {},
  title: ''
};

// 2. Load Modules
const projectRoot = path.join(__dirname, '..');
require(path.join(projectRoot, 'src/data/contentData.js'));
window.LR_PAGES = {};
require(path.join(projectRoot, 'src/pages/publicPages.js'));
require(path.join(projectRoot, 'src/pages/interactivePages.js'));
require(path.join(projectRoot, 'src/pages/wizardsAndAdmin.js'));
require(path.join(projectRoot, 'src/pages/parentAndUtilityPages.js'));
require(path.join(projectRoot, 'src/store/appController.js'));

window.app.loadDemoDb();

// Suite 1: Route Resolution (All 18 Routes)
console.log('TEST SUITE 1: Route Resolution');
const routes = [
  '/',
  '/our-story',
  '/programs',
  '/programs/playgroup',
  '/programs/nursery',
  '/programs/kindergarten',
  '/programs/enrichment',
  '/a-day-at-little-roots',
  '/our-campus',
  '/our-educators',
  '/admissions',
  '/book-a-tour',
  '/apply',
  '/parent-corner',
  '/gallery',
  '/contact',
  '/privacy',
  '/admin'
];

routes.forEach(route => {
  window.app.navigate(route, false);
  const main = document.getElementById('main-content');
  assert(main.innerHTML && main.innerHTML.length > 500, `Route '${route}' rendered valid content (${main.innerHTML.length} chars)`);
  assert(document.title.includes('Little Roots'), `Route '${route}' set document title: "${document.title}"`);
});

// Suite 2: Invalid Route / 404 Handling
console.log('\nTEST SUITE 2: Invalid Route (404) Handling');
window.app.navigate('/this-path-does-not-exist', false);
const main404 = document.getElementById('main-content');
assert(main404.innerHTML.includes('404') && main404.innerHTML.includes('hasn\'t sprouted yet'), 'Invalid route renders custom 404 page');

// Suite 3: Asset Integrity (All image paths in content data exist in dist)
console.log('\nTEST SUITE 3: Asset Resolution & File Verification');
const distDir = path.join(projectRoot, 'dist');
const allReferencedAssets = new Set();

// Gather image paths
Object.values(window.LR_DATA.images).forEach(p => allReferencedAssets.add(p));
window.LR_DATA.programs.forEach(prog => {
  if (prog.image) allReferencedAssets.add(prog.image);
  if (prog.secondaryImage) allReferencedAssets.add(prog.secondaryImage);
});
window.LR_DATA.galleryItems.forEach(item => {
  if (item.img) allReferencedAssets.add(item.img);
});

console.log(`  Found ${allReferencedAssets.size} unique image asset paths in data.`);
allReferencedAssets.forEach(assetPath => {
  const cleanPath = assetPath.replace(/^\//, '');
  const fullDiskPath = path.join(distDir, cleanPath);
  assert(fs.existsSync(fullDiskPath), `Asset file exists: ${cleanPath}`);
});

// Suite 4: Program Age Band Logic
console.log('\nTEST SUITE 4: Program Explorer & Age Filtering');
window.app.setAgeSelectorBand('2-3');
assert(window.app.state.ageSelectorBand === '2-3', 'Age band set to 2-3');
window.app.setAgeSelectorBand('all');
assert(window.app.state.ageSelectorBand === 'all', 'Age band reset to all');

// Suite 5: Daily Routine & Campus Explorer
console.log('\nTEST SUITE 5: Routine & Campus Explorer');
window.app.setRoutineStep(3);
assert(window.app.state.routineStepIndex === 3, 'Routine step updated to 3');
window.app.selectCampusSpace('garden');
assert(window.app.state.activeCampusSpace === 'garden', 'Campus active space set to garden');

// Suite 6: Guided School Tour Wizard Flow
console.log('\nTEST SUITE 6: Guided School Tour Request Wizard');
window.app.updateTourDraft('program', 'Nursery');
window.app.updateTourDraft('visitDate', '2026-11-25');
window.app.stepTourWizard(1);
assert(window.app.state.tourDraft.step === 2, 'Tour wizard advanced to step 2');
window.app.stepTourWizard(1);
assert(window.app.state.tourDraft.step === 3, 'Tour wizard advanced to step 3');
window.app.stepTourWizard(1);
assert(window.app.state.tourDraft.step === 4, 'Tour wizard advanced to step 4 (Visitor Info)');
window.app.stepTourWizard(1);
assert(window.app.state.tourDraft.step === 5, 'Tour wizard advanced to step 5 (Review)');

const tourCountBefore = window.app.state.demoDb.tours.length;
window.app.submitTourRequest();
assert(window.app.state.demoDb.tours.length === tourCountBefore + 1, 'Tour submission added record to demoDb');
assert(window.app.state.demoDb.tours[0].status === 'Tour Requested', 'Tour record status is "Tour Requested"');
assert(window.app.state.tourDraft.step === 6, 'Tour wizard step reached confirmation (Step 6)');

// Suite 7: Admission Inquiry Wizard Flow
console.log('\nTEST SUITE 7: Admission Inquiry Wizard Flow');
window.app.updateInquiryDraft('program', 'Kindergarten');
window.app.toggleInquiryInterest('Creative Atelier');
window.app.stepInquiryWizard(1);
assert(window.app.state.inquiryDraft.step === 2, 'Inquiry wizard step advanced to 2');
window.app.jumpInquiryStep(7);
assert(window.app.state.inquiryDraft.step === 7, 'Inquiry wizard jumped to step 7 (Review)');
const inqCountBefore = window.app.state.demoDb.inquiries.length;
window.app.submitInquiryWizard();
assert(window.app.state.demoDb.inquiries.length === inqCountBefore + 1, 'Inquiry submission added record to demoDb');
assert(window.app.state.demoDb.inquiries[0].program === 'Kindergarten', 'Inquiry record program matches draft');
assert(window.app.state.inquiryDraft.step === 8, 'Inquiry wizard step reached confirmation (Step 8)');

// Suite 8: Demonstration Admin Dashboard Operations
console.log('\nTEST SUITE 8: Administrative Dashboard Operations');
const testRecId = window.app.state.demoDb.inquiries[0].id;
window.app.updateInquiryStatus(testRecId, 'Enrolled');
assert(window.app.state.demoDb.inquiries[0].status === 'Enrolled', 'Admin updated inquiry status to "Enrolled"');

const inqCountBeforeSynthetic = window.app.state.demoDb.inquiries.length;
window.app.addSyntheticDemoRecord();
assert(window.app.state.demoDb.inquiries.length === inqCountBeforeSynthetic + 1, 'Admin added synthetic inquiry test record');

window.app.resetDemoData();
assert(window.app.state.demoDb.inquiries.length === window.LR_DEFAULT_DEMO_STATE.inquiries.length, 'Admin reset demo data to baseline sample records');

// Suite 9: Persistence Round-Trip
console.log('\nTEST SUITE 9: Demo Storage Persistence');
window.app.saveDemoDb();
assert(mockStorage[window.app.STORAGE_KEY] && mockStorage[window.app.STORAGE_KEY].length > 100, 'Demo DB serialized to localStorage');

console.log('\n====================================================');
console.log(`  TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('ALL TESTS PASSED SUCCESSFULLY! Production source verified.\n');
}
