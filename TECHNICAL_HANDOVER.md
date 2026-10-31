# Little Roots Kindergarten — Technical Handover Document

**Author:** Invenio Senior Engineering Team  
**Date:** October 31, 2026  
**Project:** Little Roots Kindergarten  
**Client Classification:** Fictional Education Sector Concept Showcase  
**Target Repository:** `nahian-26/little-roots-kindergarten`  
**Target Deployment:** `https://little-roots-kindergarten.pages.dev/`  

---

## 1. Executive Summary & Engineering Scope

The Little Roots Kindergarten codebase originated from a Gemini Argon design prototype consisting of:
1. A standalone HTML prototype (1.78 MB) embedding 19 Base64 WebP image data URIs and loading runtime Tailwind CDN (`https://cdn.tailwindcss.com/3.4.17`).
2. A scaffolded project ZIP containing extracted image assets and early source modules.

Our engineering team conducted a full audit, stabilization, refactoring, and performance optimization cycle to bring the application to production grade:
- **Runtime Styling Eliminated:** The 350+ kB runtime Tailwind JIT script was removed and replaced with a compiled, PostCSS-processed stylesheet (`dist/assets/*.css`, 39.5 kB uncompressed, 7.6 kB gzipped).
- **Embedded Images Extracted:** 19 embedded Base64 WebP images were decoded, verified for authentic Bangladeshi child representation, organized under `public/assets/images/*.webp`, and assigned proper caching, dimension, and lazy-loading semantics.
- **True HTML5 History API Routing:** Upgraded from hash-only navigation to clean path-based routing with deep-link persistence across all 18 routes, backed by Cloudflare Pages SPA fallback rules (`_redirects` and `404.html`).
- **Interactive Workflows Hardened:** All multi-step wizards (School Tour Request, Admission Inquiry, Campus Explorer, Daily Routine Timeline, and Admin CRM Dashboard) were thoroughly tested and verified with zero console errors.

---

## 2. Codebase Organization & Directory Structure

```
little-roots-kindergarten/
├── dist/                                  # Production build output
│   ├── assets/                            # Compiled JS/CSS bundles and assets
│   │   ├── images/                        # High-resolution WebP photography
│   │   ├── index-[hash].css               # Compiled, purged production stylesheet
│   │   └── index-[hash].js                # Minified application bundle
│   ├── 404.html                           # Static fallback entry point for SPA routing
│   ├── favicon.svg                        # Inline vector brand favicon
│   ├── index.html                         # Production HTML document
│   ├── robots.txt                         # Search crawler rules (Disallows /admin)
│   ├── sitemap.xml                        # Production XML sitemap (17 public routes)
│   └── _redirects                         # Cloudflare Pages 200 rewrite rule
├── portfolio-assets/                      # Handover screenshots for Invenio CMS
│   ├── 01_homepage_hero_desktop.webp
│   ├── 02_homepage_full_desktop.webp
│   ├── 03_homepage_mobile_390.webp
│   ├── 03b_mobile_menu_open.webp
│   ├── 04_program_explorer.webp
│   ├── 05_program_detail_kindergarten.webp
│   ├── 06_daily_routine_interactive.webp
│   ├── 07_campus_explorer.webp
│   ├── 08_school_tour_wizard.webp
│   ├── 09_admission_inquiry_wizard.webp
│   ├── 10_admin_dashboard.webp
│   ├── hero_selected_work_carousel.webp
│   ├── Little Roots Kindergarten Blooming Together.png
│   └── Little Roots Kindergarten Brand Identity.png
├── public/                                # Static assets copied to dist during build
│   ├── assets/
│   │   └── images/                        # Optimized .webp images
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects
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
│   ├── e2e-browser-test.cjs               # Playwright browser automation & screenshot pipeline
│   └── test-runner.cjs                    # 73-point automated unit & route test suite
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

| Asset Filename | Dimensions | Original Format | Usage | Loading Strategy |
|----------------|------------|-----------------|-------|------------------|
| `ref_hero_children.webp` | 1080×608 | WebP (Lossy VP8) | Homepage Hero & Gallery Item #1 | `loading="eager"`, `fetchpriority="high"` |
| `ref_prog_playgroup.webp` | 640×480 | WebP (Lossy VP8) | Playgroup Program Detail & Card | `loading="lazy"` |
| `ref_prog_nursery.webp` | 640×480 | WebP (Lossy VP8) | Nursery Program Detail & Card | `loading="lazy"` |
| `ref_prog_kindergarten.webp` | 640×480 | WebP (Lossy VP8) | Kindergarten Detail & Card | `loading="lazy"` |
| `ref_prog_nature.webp` | 640×480 | WebP (Lossy VP8) | Nature Explorers Card | `loading="lazy"` |
| `ref_prog_atelier.webp` | 640×480 | WebP (Lossy VP8) | Creative Atelier Card | `loading="lazy"` |
| `ref_approach_flower.webp` | 720×540 | WebP (Lossy VP8) | Philosophy Section | `loading="lazy"` |
| `ref_campus_doorway.webp` | 720×540 | WebP (Lossy VP8) | Campus Welcome / About | `loading="lazy"` |
| `ref_brand_sheet.webp` | 1024×682 | WebP (Lossy VP8) | Brand Specimen on /our-story | `loading="lazy"` |
| `ref_day_nature.webp` | 400×400 | WebP (Lossy VP8) | Daily Routine Step: Garden | `loading="lazy"` |
| `ref_day_creative.webp` | 400×400 | WebP (Lossy VP8) | Daily Routine Step: Atelier | `loading="lazy"` |
| `ref_day_movement.webp` | 400×400 | WebP (Lossy VP8) | Daily Routine Step: Movement | `loading="lazy"` |
| `ref_day_kindness.webp` | 560×420 | WebP (Lossy VP8) | Daily Routine Step: Kindness | `loading="lazy"` |
| `space_classroom.webp` | 840×472 | WebP (Lossy VP8) | Campus Space: Classroom | `loading="lazy"` |
| `space_garden.webp` | 840×472 | WebP (Lossy VP8) | Campus Space: Nature Garden | `loading="lazy"` |
| `space_atelier.webp` | 800×600 | WebP (Lossy VP8) | Campus Space: Atelier Studio | `loading="lazy"` |
| `space_library.webp` | 800×600 | WebP (Lossy VP8) | Campus Space: Little Library | `loading="lazy"` |
| `space_movement.webp` | 800×600 | WebP (Lossy VP8) | Campus Space: Movement Studio| `loading="lazy"` |
| `space_sensory.webp` | 640×480 | WebP (Lossy VP8) | Campus Space: Sensory Corner | `loading="lazy"` |

---

## 5. Routing Engine & Deep-Link Resolution

### HTML5 History API Integration
Navigation is handled seamlessly without full-page reloads through `window.app.navigate(route, updateHistory)`:
- Calls `window.history.pushState({ route: cleanRoute }, '', cleanRoute)`.
- Listens to the `popstate` event for native browser Back and Forward navigation.
- Intercepts all internal link clicks (`<a href="/...">`) to route client-side.
- Synchronously updates `document.title` and canonical metadata.

### Static Host SPA Fallback
To ensure direct visits or hard refreshes on nested routes (`/programs/kindergarten`, `/admin`, etc.) work flawlessly on Cloudflare Pages:
1. `public/_redirects` contains:
   ```
   /*    /index.html   200
   ```
2. The postbuild script copies `dist/index.html` to `dist/404.html`. Cloudflare Pages serves `404.html` on any route not matching a physical asset, immediately bootstrapping the SPA router which parses `window.location.pathname` and renders the exact route requested.

---

## 6. Interactive Feature Architecture

### 1. Program Explorer & Age Filter (`/programs`)
- Allows parents to select age bands: `All`, `2–3 yrs (Playgroup)`, `3–4 yrs (Nursery)`, `4–6 yrs (Kindergarten)`.
- Dynamically highlights recommended programs while keeping other tiers accessible.
- Clearly states that age suggestions are illustrative rather than formal eligibility barriers.

### 2. Daily Routine Timeline (`/a-day-at-little-roots`)
- 8 chronological stages of a kindergarten day (8:30 AM Arrival through 1:30 PM Departure).
- Synchronizes time slot, activity title, descriptive summary, and photographic evidence.
- Full keyboard accessibility and responsive horizontal/vertical timeline adaptation.

### 3. Campus Explorer (`/our-campus`)
- Interactive space switcher across 6 key learning spaces.
- Displays architectural concept descriptions, Reggio Emilia principles, and high-resolution space photography.

### 4. Guided School Tour Request (`/book-a-tour`)
- 4-step wizard:
  1. Program Interest Selection
  2. Date & Time Window Picker (enforces future dates only)
  3. Synthetic Visitor Details (with 1-click demo prefill button)
  4. Confirmation & Review Summary
- On submission, automatically serializes the new tour request to `window.app.state.demoDb.tours`, updates the header admin badge, and displays a prominent simulated confirmation notice.

### 5. Admission Inquiry Wizard (`/apply`)
- 7-step wizard covering child age, session, learning interests, parent orientation preference, and synthetic contact information.
- Draft state is continuously autosaved to `localStorage` under `little_roots_inquiry_draft_v1`.
- Review step permits 1-click step jumping to edit previous answers.
- Submissions populate the Demonstration Admin Dashboard.

### 6. Demonstration Admin Dashboard (`/admin`)
- Simulates an admissions CRM for early-childhood institutions.
- Overview KPI metrics: Active Inquiries, Pending Tours, Applications, Available Concept Seats.
- Search and multi-criteria filters (by program and pipeline status).
- Interactive record inspection modal with synthetic family details.
- Status cycling button (`New Inquiry` → `Tour Requested` → `Tour Completed` → `Application Started`).
- Management tools: Add Synthetic Test Record, Reset Demo Data to Baseline, Restore Sample Records.

---

## 7. Performance & Security Safeguards

### Performance Metrics
- **Initial HTML Transfer:** 42.3 kB (6.8 kB gzip).
- **Initial CSS Transfer:** 39.5 kB (7.6 kB gzip).
- **Initial JS Transfer:** 228.8 kB (48.6 kB gzip).
- **Total Initial Resources:** ~63 kB compressed.
- **Zero Runtime Dependencies:** No external heavy JavaScript frameworks.

### Privacy & Security
- **No Remote Telemetry or Tracking:** All form actions are intercepted client-side; zero network packets are sent to third-party endpoints.
- **Pure Local Storage:** All synthetic records reside in the user's browser under key `little_roots_demo_v1`.
- **Search Engine Isolation:** `robots.txt` explicitly disallows `/admin` to prevent simulated administrative records from polluting search indices.

---

## 8. Cloudflare Pages Deployment Specification

```toml
# Cloudflare Pages Configuration
[build]
command = "npm run build"
output_directory = "dist"
root_directory = ""

[build.environment_variables]
NODE_VERSION = "20"
```

- **Project Name:** `little-roots-kindergarten`
- **Target URL:** `https://little-roots-kindergarten.pages.dev/`
- **Cost Tier:** Cloudflare Pages Free Tier (0 USD/month).
- **Isolation Guarantee:** Zero bindings to D1, Workers, R2, or existing Invenio / MEHFIL production resources.
