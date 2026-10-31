# Little Roots Kindergarten — Quality Assurance & Verification Report

**Lead QA Engineer:** Invenio Quality Engineering  
**Test Execution Date:** October 31, 2026  
**Environment Tested:** Local Vite Production Build (`dist/`), Headless Chromium, Mobile Emulation  
**Target Domain:** `https://little-roots-kindergarten.pages.dev/`  

---

## 1. Executive QA Summary

| Category | Target | Result | Status |
|----------|--------|--------|--------|
| Route Resolution | All 18 Routes + 404 | 19 / 19 verified | **PASS** |
| Unit & Integration Tests | Automated test suite | 73 / 73 passed | **PASS** |
| Browser Automation (E2E) | Minimum 7 User Journeys | 7 / 7 verified | **PASS** |
| Browser Console Errors | 0 errors | 0 errors | **PASS** |
| Viewport Responsiveness | 320px, 390px, 430px, 768px, 1024px, 1440px | Verified with zero overflow | **PASS** |
| Production CSS | No runtime Tailwind CDN | Compiled PostCSS (39.5 kB) | **PASS** |
| Image Asset Resolution | No Base64 data URIs or 404s | 19 WebP images verified | **PASS** |
| Deep-Link / Refresh Test | Hard reload on nested routes | Verified on `/programs/kindergarten` | **PASS** |

---

## 2. Automated Test Suite Results (`tests/test-runner.cjs`)

The automated test runner executed 73 discrete assertions across 9 core test suites:

```
====================================================
  LITTLE ROOTS KINDERGARTEN — PRODUCTION TEST SUITE 
====================================================

TEST SUITE 1: Route Resolution
  ✓ PASS: Route '/' rendered valid content (82482 chars)
  ✓ PASS: Route '/' set document title: "Little Roots Kindergarten | A Place to Bloom with Wonder — Invenio Concept"
  ✓ PASS: Route '/our-story' rendered valid content (13723 chars)
  ✓ PASS: Route '/our-story' set document title: "Our Story & Growing Seed Philosophy | Little Roots Kindergarten"
  ✓ PASS: Route '/programs' rendered valid content (30206 chars)
  ✓ PASS: Route '/programs' set document title: "Early Learning Programs & Age Finder | Little Roots Kindergarten"
  ✓ PASS: Route '/programs/playgroup' rendered valid content (13348 chars)
  ✓ PASS: Route '/programs/playgroup' set document title: "Playgroup (2–3 Years) | Little Roots Kindergarten"
  ✓ PASS: Route '/programs/nursery' rendered valid content (13722 chars)
  ✓ PASS: Route '/programs/nursery' set document title: "Nursery (3–4 Years) | Little Roots Kindergarten"
  ✓ PASS: Route '/programs/kindergarten' rendered valid content (14224 chars)
  ✓ PASS: Route '/programs/kindergarten' set document title: "Kindergarten (4–6 Years) | Little Roots Kindergarten"
  ✓ PASS: Route '/programs/enrichment' rendered valid content (11818 chars)
  ✓ PASS: Route '/programs/enrichment' set document title: "Nature & Creative Enrichment Studio | Little Roots Kindergarten"
  ✓ PASS: Route '/a-day-at-little-roots' rendered valid content (16575 chars)
  ✓ PASS: Route '/a-day-at-little-roots' set document title: "A Day at Little Roots · Daily Rhythm & Routine | Little Roots Kindergarten"
  ✓ PASS: Route '/our-campus' rendered valid content (16837 chars)
  ✓ PASS: Route '/our-campus' set document title: "Campus Explorer & Learning Spaces | Little Roots Kindergarten"
  ✓ PASS: Route '/our-educators' rendered valid content (11395 chars)
  ✓ PASS: Route '/our-educators' set document title: "Our Educators & Teaching Guides | Little Roots Kindergarten"
  ✓ PASS: Route '/admissions' rendered valid content (8240 chars)
  ✓ PASS: Route '/admissions' set document title: "Admissions Guide, Timeline & Checklist | Little Roots Kindergarten"
  ✓ PASS: Route '/book-a-tour' rendered valid content (6396 chars)
  ✓ PASS: Route '/book-a-tour' set document title: "Book a School Tour (Interactive Demo) | Little Roots Kindergarten"
  ✓ PASS: Route '/apply' rendered valid content (4504 chars)
  ✓ PASS: Route '/apply' set document title: "Admission Inquiry Wizard (Interactive Demo) | Little Roots Kindergarten"
  ✓ PASS: Route '/parent-corner' rendered valid content (10898 chars)
  ✓ PASS: Route '/parent-corner' set document title: "Parent Corner · At-Home Activities & Calendar | Little Roots Kindergarten"
  ✓ PASS: Route '/gallery' rendered valid content (23056 chars)
  ✓ PASS: Route '/gallery' set document title: "School Life Gallery & Lightbox | Little Roots Kindergarten"
  ✓ PASS: Route '/contact' rendered valid content (5141 chars)
  ✓ PASS: Route '/contact' set document title: "Contact & Demonstration Inquiries | Little Roots Kindergarten"
  ✓ PASS: Route '/privacy' rendered valid content (3679 chars)
  ✓ PASS: Route '/privacy' set document title: "Concept Disclosure & Privacy Safeguards | Little Roots Kindergarten"
  ✓ PASS: Route '/admin' rendered valid content (27247 chars)
  ✓ PASS: Route '/admin' set document title: "Demonstration Admissions Dashboard | Little Roots Kindergarten"

TEST SUITE 2: Invalid Route (404) Handling
  ✓ PASS: Invalid route renders custom 404 page

TEST SUITE 3: Asset Resolution & File Verification
  Found 19 unique image asset paths in data.
  ✓ PASS: Asset file exists: assets/images/ref_hero_children.webp
  ✓ PASS: Asset file exists: assets/images/ref_prog_playgroup.webp
  ✓ PASS: Asset file exists: assets/images/ref_prog_nursery.webp
  ✓ PASS: Asset file exists: assets/images/ref_prog_kindergarten.webp
  ✓ PASS: Asset file exists: assets/images/ref_prog_nature.webp
  ✓ PASS: Asset file exists: assets/images/ref_prog_atelier.webp
  ✓ PASS: Asset file exists: assets/images/ref_approach_flower.webp
  ✓ PASS: Asset file exists: assets/images/ref_day_nature.webp
  ✓ PASS: Asset file exists: assets/images/ref_day_creative.webp
  ✓ PASS: Asset file exists: assets/images/ref_day_movement.webp
  ✓ PASS: Asset file exists: assets/images/ref_day_kindness.webp
  ✓ PASS: Asset file exists: assets/images/ref_campus_doorway.webp
  ✓ PASS: Asset file exists: assets/images/ref_brand_sheet.webp
  ✓ PASS: Asset file exists: assets/images/space_classroom.webp
  ✓ PASS: Asset file exists: assets/images/space_garden.webp
  ✓ PASS: Asset file exists: assets/images/space_atelier.webp
  ✓ PASS: Asset file exists: assets/images/space_library.webp
  ✓ PASS: Asset file exists: assets/images/space_movement.webp
  ✓ PASS: Asset file exists: assets/images/space_sensory.webp

TEST SUITE 4: Program Explorer & Age Filtering
  ✓ PASS: Age band set to 2-3
  ✓ PASS: Age band reset to all

TEST SUITE 5: Routine & Campus Explorer
  ✓ PASS: Routine step updated to 3
  ✓ PASS: Campus active space set to garden

TEST SUITE 6: Guided School Tour Request Wizard
  ✓ PASS: Tour wizard advanced to step 2
  ✓ PASS: Tour wizard advanced to step 3
  ✓ PASS: Tour wizard advanced to step 4 (Review)
  ✓ PASS: Tour submission added record to demoDb
  ✓ PASS: Tour record status is "Tour Requested"

TEST SUITE 7: Admission Inquiry Wizard Flow
  ✓ PASS: Inquiry wizard step advanced to 2
  ✓ PASS: Inquiry wizard jumped to step 6 (Review)
  ✓ PASS: Inquiry wizard submitted record to demoDb
  ✓ PASS: Inquiry record program matches draft

TEST SUITE 8: Administrative Dashboard Operations
  ✓ PASS: Admin updated inquiry status to "Enrolled"
  ✓ PASS: Admin added synthetic inquiry test record
  ✓ PASS: Admin reset demo data to baseline sample records

TEST SUITE 9: Demo Storage Persistence
  ✓ PASS: Demo DB serialized to localStorage

====================================================
  TEST RESULTS: 73 PASSED, 0 FAILED
====================================================
```

---

## 3. Real Browser End-to-End Testing (`tests/e2e-browser-test.cjs`)

Testing was conducted using Playwright driving a headless Chromium browser instance against the local production distribution (`http://127.0.0.1:4173/`):

### Journey A — Parent Discovers Programs
- Navigated from `/` to `/programs`.
- Clicked age selector filter: `3–4 yrs (Nursery)`.
- Verified recommendation card rendered with correct color tokens (`#FDE8D8` / `#F8BD96`).
- Clicked into `/programs/kindergarten`. Verified curriculum details, timetable, and ratios.
- Clicked CTA to `/admissions`.

### Journey B — Guided School Tour Request
- Navigated to `/book-a-tour`.
- Selected program interest: Nursery.
- Advanced to Date & Time selection. Selected valid upcoming morning window.
- Advanced to synthetic visitor details. Clicked `Prefill Demo Profile`.
- Advanced to Review step. Clicked `Submit Demonstration Tour Request`.
- Verified confirmation screen rendered with simulated booking notice and ID `LR-TOUR-XXXX`.
- Verified record appeared in header badge counter.

### Journey C — Admission Inquiry Wizard
- Navigated to `/apply`.
- Step 1: Selected Kindergarten & 4–6 Age Band.
- Step 2: Selected Session & toggled learning interests (`Creative Atelier`, `Nature Exploration`).
- Stepped through contact and orientation preferences.
- Reviewed summary table. Clicked `Submit Demonstration Application`.
- Verified confirmation screen and redirect options.

### Journey D — Campus Exploration
- Navigated to `/our-campus`.
- Selected `Nature Garden` tab. Verified description and photography updated.
- Navigated to `/gallery`.
- Filtered gallery by `Nature Exploration`. Clicked photo #1.
- Verified modal lightbox opened with full caption, counter `1 / 14`, and category badge.
- Tested `ArrowRight` keyboard navigation. Tested `Escape` key dismissal.

### Journey E — Daily Routine Timeline
- Navigated to `/a-day-at-little-roots`.
- Clicked Stage 2 (`Morning Circle & Music`).
- Verified time slot (`9:15 AM`), description, and image updated synchronously.

### Journey F — Administrative Review
- Navigated to `/admin`.
- Selected record `LR-INQ-2026-101`. Opened detail inspection modal.
- Closed modal using `Close` button and `Escape` key.
- Cycled tour status for first tour record.
- Added synthetic inquiry record (`LR-INQ-2026-XXX`).
- Clicked `Reset Demo Data`. Verified database reset to baseline count.

### Journey G — Mobile Experience (390px Viewport)
- Opened homepage at 390×844 resolution with 3× device scale factor.
- Verified hero typography wrapped responsively without horizontal scrolling.
- Clicked `#mobile-menu-btn`. Verified mobile navigation drawer opened.
- Navigated to `/book-a-tour` on mobile.

---

## 4. Screenshot Evidence & Portfolio Asset Inventory

All high-density WebP screenshots captured during the automated browser test are saved in `portfolio-assets/`:

1. `01_homepage_hero_desktop.webp` (1440×860 viewport)
2. `02_homepage_full_desktop.webp` (Full homepage scroll, 1440px wide)
3. `03_homepage_mobile_390.webp` (390×844 mobile viewport)
4. `03b_mobile_menu_open.webp` (Mobile navigation drawer expanded)
5. `04_program_explorer.webp` (Program Explorer with 3-4y Nursery filter active)
6. `05_program_detail_kindergarten.webp` (Individual Kindergarten program curriculum)
7. `06_daily_routine_interactive.webp` (Daily routine timeline stage 2 active)
8. `07_campus_explorer.webp` (Nature Garden architectural space view)
9. `08_school_tour_wizard.webp` (School tour booking wizard visitor details step)
10. `09_admission_inquiry_wizard.webp` (Admission inquiry wizard step 2)
11. `10_admin_dashboard.webp` (Admissions CRM overview metrics and records table)
12. `hero_selected_work_carousel.webp` (16:9 1440×810 carousel card thumbnail)

---

## 5. Defects Identified & Resolved During Engineering

| ID | Issue Description | Root Cause | Resolution |
|----|-------------------|------------|------------|
| BUG-01 | Runtime Tailwind CDN loaded in production | `cdn.tailwindcss.com` referenced in `<head>` | Replaced with compiled PostCSS production bundle (`dist/assets/*.css`) |
| BUG-02 | Embedded Base64 image payload bloat | 19 WebP images embedded as data URIs (1.5 MB) | Extracted to real WebP files in `public/assets/images/*.webp` |
| BUG-03 | Broken asset references in `contentData.js` | 76 image paths referenced intermediate artifact directory `artifacts/file_generation/ttl=63d/...` | Replaced all references with clean `/assets/images/*.webp` paths |
| BUG-04 | Hash-only routing prevented clean deep-links | Prototype used `window.location.hash` exclusively | Replaced with HTML5 History API (`pushState` / `popstate`) and `_redirects` SPA rewrite |
| BUG-05 | Direct page reload 404 on static hosts | Refreshing `/programs/kindergarten` returned 404 | Configured `dist/_redirects` (`/* /index.html 200`) and compiled `dist/404.html` |
| BUG-06 | Hero headline overflowed on 360px screens | Rigid `whitespace-nowrap` on line 2 | Implemented `sm:whitespace-nowrap` with fluid typography scaling |
| BUG-07 | Sitemap domain mismatch | `sitemap.xml` referenced `little-roots-concept.pages.dev` | Updated to production domain `little-roots-kindergarten.pages.dev` |
| BUG-08 | Developer route `<select>` in public nav | Clunky dropdown in announcement bar | Replaced with polished slide-over showcase panel and Admin pill |

---

## 6. Known Limitations & Constraints

1. **Browser Local Storage Demo Persistence:** Because this is a fictional concept demonstration, records are stored in browser `localStorage` under `little_roots_demo_v1`. They do not synchronize across different devices or browsers.
2. **Client-Side SEO vs SSR:** While document title and canonical tags update synchronously upon client navigation, crawlers that do not execute JavaScript will only read the homepage metadata from the initial HTML document. This is standard for static SPAs.

---

## 7. Final Verification Status

**VERDICT: APPROVED FOR PRODUCTION DEPLOYMENT**  
All stabilization criteria, visual quality metrics, responsive breakpoints, accessibility guardrails, and automated test gates have been satisfied.
