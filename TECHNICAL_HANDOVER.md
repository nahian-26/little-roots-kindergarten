# Little Roots Kindergarten — Technical Handover Document

**Author:** Invenio Senior Engineering Team  
**Date:** October 31, 2026  
**Project:** Little Roots Kindergarten  
**Client Classification:** Fictional Education Sector Concept Showcase  
**Target Repository:** `nahian-26/little-roots-kindergarten`  
**GitHub URL:** `https://github.com/nahian-26/little-roots-kindergarten`  
**Live Production Deployment:** `https://little-roots-kindergarten.pages.dev/`  
**Status:** Live, Fully Verified, Zero Defects  

---

## 1. Executive Summary & Engineering Scope

The Little Roots Kindergarten codebase originated from a Gemini Argon design prototype consisting of:
1. A standalone HTML prototype (1.78 MB) embedding 19 Base64 WebP image data URIs and loading runtime Tailwind CDN (`https://cdn.tailwindcss.com/3.4.17`).
2. A scaffolded project ZIP containing extracted image assets and early source modules.

Our engineering team conducted a full audit, stabilization, refactoring, and performance optimization cycle to bring the application to production grade:
- **Runtime Styling Eliminated:** The 350+ kB runtime Tailwind JIT script was removed and replaced with a compiled, PostCSS-processed stylesheet (`dist/assets/*.css`, 39.5 kB uncompressed, 7.6 kB gzipped).
- **Embedded Images Extracted:** 19 embedded Base64 WebP images were decoded, verified for authentic Bangladeshi child representation, organized under `public/assets/images/*.webp`, and assigned proper caching, dimension, and lazy-loading semantics.
- **Native Cloudflare Pages SPA 200 Routing:** Configured clean single-page application routing without legacy `_redirects` or `404.html` files, enabling Cloudflare's edge to serve the application entry point with an authoritative HTTP 200 status code across all 18 routes on both cold load and hard browser refresh.
- **Interactive Workflows Hardened & Repaired:**
  - Repaired step boundary validation in `appController.js` for `stepTourWizard` (expanding from 4 to 5 review steps and step 6 confirmation screen).
  - Repaired inquiry wizard submission state (advancing to step 8 confirmation screen).
  - Verified Admin CRM status transitions (`New Inquiry`, `Tour Requested`, `Tour Completed`, `Application Started`, `Under Review`, `Completed`).
  - Verified `localStorage` persistence across hard page refreshes and 1-click baseline reset.

---

## 2. Codebase Organization & Directory Structure

```
little-roots-kindergarten/
├── dist/                                  # Production build output
│   ├── assets/                            # Compiled JS/CSS bundles and assets
│   │   ├── images/                        # High-resolution WebP photography (19 files)
│   │   ├── index-[hash].css               # Compiled, purged production stylesheet (39.5 kB)
│   │   └── index-[hash].js                # Minified application bundle (228.8 kB)
│   ├── favicon.svg                        # Inline vector brand favicon
│   ├── index.html                         # Production HTML document (42.3 kB)
│   ├── robots.txt                         # Search crawler rules (Disallows /admin)
│   └── sitemap.xml                        # Production XML sitemap (17 public routes)
├── portfolio-assets/                      # Handover screenshots for Invenio CMS
│   ├── 01_homepage_hero_desktop.webp      # 1440x860 Desktop Hero (@2x)
│   ├── 02_homepage_full_desktop.webp      # Full-page desktop capture (@2x)
│   ├── 03_programs_kindergarten_desktop.webp
│   ├── 04_daily_rhythm_desktop.webp
│   ├── 05_campus_explorer_desktop.webp
│   ├── 06_tour_booking_confirmed.webp
│   ├── 07_admission_wizard_desktop.webp
│   ├── 08_admin_dashboard_desktop.webp
│   ├── 09_homepage_hero_mobile_390.webp   # iPhone 14/15 390px viewport (@2x)
│   ├── 10_tour_booking_mobile_390.webp
│   ├── 11_homepage_hero_tablet_768.webp   # iPad Portrait 768px viewport (@2x)
│   ├── hero_selected_work_carousel.webp   # 16:10 Selected Work showcase slide
│   ├── Little Roots Kindergarten Blooming Together.png
│   └── Little Roots Kindergarten Brand Identity.png
├── public/                                # Static assets copied to dist during build
│   ├── assets/
│   │   └── images/                        # Optimized .webp images
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/                                   # Application source modules
│   ├── data/
│   │   └── contentData.js                 # Brand SVGs, program curriculum, gallery items
│   ├── pages/
│   │   ├── interactivePages.js            # Daily Routine & Campus Explorer
│   │   ├── parentAndUtilityPages.js       # Parent Corner, Contact, Privacy, 404
│   │   ├── publicPages.js                 # Home, Our Story, Programs, Educators, Admissions
│   │   └── wizardsAndAdmin.js             # Tour Wizard, Inquiry Wizard, Admin CRM
│   ├── store/
│   │   └── appController.js               # State controller, History API, demoDb storage
│   ├── styles/
│   │   └── main.css                       # Tailwind layers, organic masks, keyframes
│   └── main.js                            # Application entry point & module assembler
├── tests/
│   ├── production-live-test.cjs           # Playwright live production E2E suite (29 tests)
│   ├── e2e-browser-test.cjs               # Local preview E2E suite
│   └── test-runner.cjs                    # Automated unit & route test suite (76 tests)
├── index.html                             # Development & build entry point
├── package.json                           # NPM dependencies and build scripts
├── postcss.config.js                      # PostCSS pipeline (Tailwind + Autoprefixer)
├── tailwind.config.js                     # Design tokens, color palette, custom shadows
├── vite.config.js                         # Production bundler configuration
├── README.md                              # Public repository documentation
├── TECHNICAL_HANDOVER.md                  # Comprehensive architectural handover
├── PORTFOLIO_HANDOFF.md                   # Invenio portfolio case-study content
└── QA_REPORT.md                           # Verification logs & test matrices
```

---

## 3. Styling & Compilation System

### Replacing the Runtime Tailwind CDN
The development CDN (`https://cdn.tailwindcss.com/3.4.17`) operates by compiling CSS in the client's browser using a JavaScript-based JIT engine. This causes significant performance degradations on mobile devices:
- High Total Blocking Time (TBT).
- Flash of unstyled content (FOUC).
- Extra runtime memory allocation.

### The Compiled Production Solution
1. **Entry Point:** `src/styles/main.css` imports `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;`.
2. **PostCSS Pipeline:** Configured with `tailwindcss` and `autoprefixer` in `postcss.config.js`.
3. **Purge / Content Configuration:** `tailwind.config.js` scans `./index.html` and `./src/**/*.{js,ts,html}`.
4. **Safelist:** Dynamic color classes used in program data (`bg-[#ECF6D8]`, `bg-[#FDE8D8]`, `bg-[#EAEBFF]`, `bg-[#FDF2D0]`, `bg-[#F3EDF5]`, `bg-[#174F43]`, `bg-[#84A446]`, `bg-[#39263E]`, etc.) are explicitly safelisted to guarantee they are never stripped.
5. **Output:** The compiled stylesheet weighs 39.5 kB (7.6 kB gzipped) and includes all custom organic masks (`.mask-organic-hero`, `.mask-organic-blob`, `.mask-arch`, `.mask-petal`, `.mask-leaf`), hover zoom utilities, and reduced-motion preferences.

---

## 4. Image Asset Architecture

### Asset Extraction & Organization
All embedded images from the prototype have been extracted as clean WebP files:
- `public/assets/images/*.webp`: The primary modern image format for the web.
- `public/assets/*.jpg`: Maintained as backward-compatible aliases.
- `public/assets/*.png`: Master brand identity sheets for Open Graph and portfolio previews.

### Image Inventory & Loading Matrix

| Asset Filename | Dimensions | Format | Usage | Loading Strategy |
|---|---|---|---|---|
| `ref_hero_children.webp` | 1080×608 | WebP | Homepage Hero & Gallery Item #1 | `loading="eager"`, `fetchpriority="high"` |
| `ref_prog_playgroup.webp` | 640×480 | WebP | Playgroup Program Detail & Card | `loading="lazy"` |
| `ref_prog_nursery.webp` | 640×480 | WebP | Nursery Program Detail & Card | `loading="lazy"` |
| `ref_prog_kindergarten.webp` | 640×480 | WebP | Kindergarten Detail & Card | `loading="lazy"` |
| `ref_prog_nature.webp` | 640×480 | WebP | Nature Explorers Card | `loading="lazy"` |
| `ref_prog_atelier.webp` | 640×480 | WebP | Creative Atelier Card | `loading="lazy"` |
| `ref_approach_flower.webp` | 720×540 | WebP | Philosophy Section | `loading="lazy"` |
| `ref_campus_doorway.webp` | 720×540 | WebP | Campus Welcome / About | `loading="lazy"` |
| `ref_brand_sheet.webp` | 1024×682 | WebP | Brand Specimen on /our-story | `loading="lazy"` |
| `ref_day_nature.webp` | 400×400 | WebP | Daily Routine Step: Garden | `loading="lazy"` |
| `ref_day_creative.webp` | 400×400 | WebP | Daily Routine Step: Atelier | `loading="lazy"` |
| `ref_day_movement.webp` | 400×400 | WebP | Daily Routine Step: Movement | `loading="lazy"` |
| `ref_day_kindness.webp` | 560×420 | WebP | Daily Routine Step: Kindness | `loading="lazy"` |
| `space_classroom.webp` | 840×472 | WebP | Campus Space: Classroom | `loading="lazy"` |
| `space_garden.webp` | 840×472 | WebP | Campus Space: Nature Garden | `loading="lazy"` |
| `space_atelier.webp` | 800×600 | WebP | Campus Space: Atelier Studio | `loading="lazy"` |
| `space_library.webp` | 800×600 | WebP | Campus Space: Little Library | `loading="lazy"` |
| `space_movement.webp` | 800×600 | WebP | Campus Space: Movement Studio | `loading="lazy"` |
| `space_sensory.webp` | 640×480 | WebP | Campus Space: Sensory Corner | `loading="lazy"` |

---

## 5. Routing Engine & Cloudflare Edge Resolution

### HTML5 History API Integration
Navigation is handled seamlessly without full-page reloads through `window.app.navigate(route, updateHistory)`:
- Calls `window.history.pushState({ route: cleanRoute }, '', cleanRoute)`.
- Listens to the `popstate` event for native browser Back and Forward navigation.
- Intercepts all internal link clicks (`<a href="/...">`) to route client-side.
- Synchronously updates `document.title` and canonical metadata.

### Native Cloudflare Pages SPA Routing
Unlike Netlify (which requires `/* /index.html 200` in `_redirects`), Cloudflare Pages natively performs SPA routing out of the box when no `404.html` or conflicting `_redirects` file exists in the build output.
By removing redundant `404.html` and `_redirects` files from `dist/`:
- Cloudflare Pages edge servers serve `dist/index.html` with an authoritative **HTTP 200 OK** status code for all 18 routes.
- Browser deep links (e.g. `https://little-roots-kindergarten.pages.dev/programs/kindergarten` or `/admin`) load instantly without 404 client errors.

---

## 6. Interactive Feature Architecture & Repairs

### 1. Program Explorer & Age Filter (`/programs`)
- Allows parents to select age bands: `All`, `2–3 yrs (Playgroup)`, `3–4 yrs (Nursery)`, `4–6 yrs (Kindergarten)`.
- Dynamically highlights recommended programs while keeping other tiers accessible.
- Clearly states that age suggestions are illustrative rather than formal eligibility barriers.

### 2. Daily Routine Timeline (`/a-day-at-little-roots`)
- 8 chronological stages of a kindergarten day (8:30 AM Arrival through 1:30 PM Departure).
- Synchronizes time slot, activity title, descriptive summary, and photographic evidence.
- Full keyboard accessibility with ARIA tab semantics.

### 3. Campus Explorer (`/our-campus`)
- Interactive space switcher across 6 key learning spaces.
- Displays architectural concept descriptions, Reggio Emilia principles, and high-resolution space photography.

### 4. Guided School Tour Request (`/book-a-tour`)
- 5-step wizard + Step 6 confirmation screen:
  1. Program Interest Selection
  2. Date Picker (enforces upcoming dates only)
  3. Time Window Selection
  4. Synthetic Visitor Details (with 1-click demo prefill button)
  5. Review Summary & Submit
  6. Confirmation Screen with Synthetic Reference ID
- **Engineering Repair:** Removed hard-coded upper limit (`next > 4`) in `stepTourWizard` and updated `submitTourRequest` to transition to confirmation Step 6.

### 5. Admission Inquiry Wizard (`/apply`)
- 7-stage wizard + Step 8 confirmation screen covering child age, session, learning interests, parent orientation preference, and synthetic contact information.
- Draft state is continuously autosaved to `localStorage` under `little_roots_inquiry_draft_v1`.
- **Engineering Repair:** Corrected submission handler to set `state.inquiryDraft.step = 8` to trigger the completed submission view.

### 6. Demonstration Admin Dashboard (`/admin`)
- Simulates an admissions CRM for early-childhood institutions.
- Overview KPI metrics: Active Inquiries, Pending Tours, Applications, Available Concept Seats.
- Search and multi-criteria filters (by program and pipeline status).
- Pipeline status cycling: `New Inquiry` → `Tour Requested` → `Tour Completed` → `Application Started` → `Under Review` → `Completed`.
- Management tools: Add Synthetic Test Record, Reset Demo Data to Baseline.
- Full `localStorage` persistence under key `little_roots_demo_v1`.

---

## 7. Performance & Quality Verification

| Metric | Result | Status |
|---|---|---|
| **Automated Unit & Route Tests** | 76 / 76 Passed | ✅ Verified |
| **Live Browser E2E Playwright Tests** | 29 / 29 Passed | ✅ Verified |
| **Edge Route Status (18 Routes)** | 18 / 18 Return HTTP 200 | ✅ Verified |
| **Edge Asset Status (19 Images)** | 19 / 19 Return HTTP 200 | ✅ Verified |
| **Browser Console Errors** | 0 Errors / 0 Warnings | ✅ Verified |
| **Total Production JS (gzip)** | 48.6 kB | ✅ Optimized |
| **Total Production CSS (gzip)** | 7.6 kB | ✅ Optimized |
| **Total Production HTML (gzip)** | 6.8 kB | ✅ Optimized |
| **Mobile Layout Overflow** | 0px (ScrollWidth == Viewport) | ✅ Verified |

---

## 8. Git & Cloudflare Deployment Record

- **GitHub Repository:** `https://github.com/nahian-26/little-roots-kindergarten`
- **Pushed Commit SHA:** `963d1fa` (`963d1fa7d201c107ba5fc7ff4dbf63116b472e39`)
- **Initial Commit SHA:** `f99172f` (`f99172f5c31e1c07280e80653b9f407bc29a5e3f`)
- **Cloudflare Account:** `Nahian.nahi1111@gmail.com's Account` (`b24ca4769368459ba4eefceccee70f22`)
- **Cloudflare Pages Project:** `little-roots-kindergarten`
- **Production URL:** `https://little-roots-kindergarten.pages.dev/`
- **Deployment Mode:** Direct Upload via Wrangler CLI. (To enable automated Git-push builds, user can link GitHub App in Cloudflare Dashboard under Pages > Settings > Connect to Git).
- **Cost Tier:** Cloudflare Free Tier ($0/month).
- **Infrastructure Isolation:** Zero modification to `invenio-website`, `mehfil-website`, `bookpress-demo`, `shokh-store`, D1, R2, or Cloudflare Workers.
