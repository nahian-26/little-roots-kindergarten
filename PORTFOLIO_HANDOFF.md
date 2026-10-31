# Portfolio Case Study Handover: Little Roots Kindergarten

**Prepared For:** Invenio Website Portfolio Integration (`https://invenio-website.pages.dev/`)  
**Project Classification:** Self-Initiated Flagship Concept  
**Author:** Invenio Senior Engineering & Design Team  
**Date:** October 31, 2026  
**Status:** Live & Production-Verified  

---

## 1. Portfolio Metadata Card

| Attribute | Specification |
|---|---|
| **Project Name** | Little Roots Kindergarten |
| **Brand Name** | Little Roots |
| **Tagline** | Where Little Beginnings Grow Big. |
| **Hero Headline** | A place to bloom with wonder. |
| **Category** | Website Development / Education Digital Experience |
| **Project Classification** | Self-Initiated Concept Showcase |
| **Industry** | Premium Early Childhood Education (Dhaka, Bangladesh) |
| **Target Audience** | Parents and guardians of children aged approximately 2–6 |
| **Creative Studio** | Invenio |
| **GitHub Repository** | [https://github.com/nahian-26/little-roots-kindergarten](https://github.com/nahian-26/little-roots-kindergarten) |
| **Pushed Commits** | `f99172f` (Initial Production) → `963d1fa` (Verified Production Release) |
| **Cloudflare Pages Project** | `little-roots-kindergarten` |
| **Verified Live URL** | [https://little-roots-kindergarten.pages.dev/](https://little-roots-kindergarten.pages.dev/) |
| **Concept Disclaimer** | Little Roots is a fictional concept developed by Invenio. All children, educators, student profiles, admissions records, and tour dates are synthetic and run in-browser. |

---

## 2. Invenio Selected Work Showcase Copy

### Suggested Headline
**Little Roots — Where Little Beginnings Grow Big.**

### Suggested Subtitle
*A warm, nature-inspired digital experience and admissions platform designed for a premier boutique kindergarten in Dhaka.*

### Executive Summary (for Invenio Case Study Grid)
In urban South Asia, selecting a child’s first school is an emotionally momentous journey. Too often, early-childhood institutions present themselves through dense, corporate brochures that fail to convey the sensory richness, emotional security, and wonder of early learning.

Invenio created **Little Roots Kindergarten** as an interactive digital concept for Dhaka, Bangladesh. We combined high-editorial typography (*Fraunces* and *Manrope*), authentic Bangladeshi child photography, an interactive age-based program finder, a 6-space campus explorer, an 8-stage daily rhythm timeline, and a functional browser-local admissions and administrative CRM.

### Deliverables & Disciplines
- **Brand Experience & Visual Identity:** The Growing Seed emblem, editorial botanical color system, and organic photography masking.
- **UI/UX Design:** Parent-centric program discovery, responsive navigation, and progressive disclosure admissions wizards.
- **Frontend Performance Engineering:** PostCSS-compiled Tailwind stylesheets (zero runtime CDN overhead), native WebP media pipeline, and sub-100ms SPA route transitions.
- **Interactive Prototyping:** Multi-stage school tour scheduler, admission inquiry wizard, and operational admin pipeline CRM with localStorage persistence.
- **Accessibility & Compliance:** Keyboard-navigable dialogs, WCAG AA contrast compliance, semantic landmark structures, and transparent concept disclosures.

---

## 3. High-Resolution Portfolio Assets Inventory

All screenshot assets were captured at 2x device pixel density directly against the live production deployment (`https://little-roots-kindergarten.pages.dev/`) and are located in the `portfolio-assets/` folder:

| Filename | Resolution | Viewport / Type | Description / Portfolio Usage |
|---|---|---|---|
| `01_homepage_hero_desktop.webp` | 2880 × 1720 (@2x) | 1440 × 860 Desktop | Hero section showcasing brand headline *"A place to bloom with wonder"*, botanical logo, primary CTAs, and organic child photography mask. |
| `02_homepage_full_desktop.webp` | 2880 × 11400 (@2x) | 1440px Desktop Full-Page | Complete editorial homepage from hero through philosophy, programs, daily rhythm, educator preview, and footer. |
| `03_programs_kindergarten_desktop.webp` | 2880 × 1800 (@2x) | 1440 × 900 Desktop | Detailed curriculum view for Kindergarten (ages 4–6) featuring timetable, learning areas, and educator ratios. |
| `04_daily_rhythm_desktop.webp` | 2880 × 1800 (@2x) | 1440 × 900 Desktop | Interactive 8-stage daily routine timeline demonstrating morning arrival through atelier making and peaceful dismissal. |
| `05_campus_explorer_desktop.webp` | 2880 × 1800 (@2x) | 1440 × 900 Desktop | 6-space interactive campus explorer displaying Reggio Emilia architecture, materials, and learning activities. |
| `06_tour_booking_confirmed.webp` | 2880 × 1800 (@2x) | 1440 × 900 Desktop | Completed Guided Tour Request wizard confirmation screen with synthetic reference ID and admin link. |
| `07_admission_wizard_desktop.webp` | 2880 × 1800 (@2x) | 1440 × 900 Desktop | 8-stage admission inquiry wizard with autosaved draft progress bar and interactive learning interest toggles. |
| `08_admin_dashboard_desktop.webp` | 2880 × 1800 (@2x) | 1440 × 900 Desktop | Operational Admissions CRM demonstrating pipeline status updates, real-time counters, and search filtering. |
| `09_homepage_hero_mobile_390.webp` | 780 × 1688 (@2x) | 390 × 844 (iPhone 14/15) | Mobile hero viewport showing touch-optimized layout, non-wrapping brand headline, and navigation menu. |
| `10_tour_booking_mobile_390.webp` | 780 × 1688 (@2x) | 390 × 844 (iPhone 14/15) | Mobile school tour booking interface with accessible touch targets and streamlined step navigation. |
| `11_homepage_hero_tablet_768.webp` | 1536 × 1800 (@2x) | 768 × 900 (iPad Portrait) | Tablet viewport proving fluid editorial typography and responsive two-column grid adaptations. |
| `hero_selected_work_carousel.webp` | 2880 × 1800 (@2x) | 16:10 Aspect Ratio | Curated flagship slide formatted specifically for Invenio's Selected Work carousel component. |
| `Little Roots Kindergarten Blooming Together.png` | 2048 × 2048 | Brand Graphic Asset | High-resolution brand artwork illustrating children blooming together in the Little Roots botanical garden. |
| `Little Roots Kindergarten Brand Identity.png` | 2048 × 2048 | Brand System Asset | Complete visual identity sheet showing color swatches, typography hierarchy, and Growing Seed iconography. |

---

## 4. Technical Architecture & Live Verification Summary

- **Production URL:** `https://little-roots-kindergarten.pages.dev/`
- **Build Output:**
  - `dist/index.html` (42.3 kB uncompressed, 6.8 kB gzip)
  - `dist/assets/index-*.css` (39.5 kB uncompressed, 7.6 kB gzip)
  - `dist/assets/index-*.js` (228.8 kB uncompressed, 48.6 kB gzip)
- **Edge Routing Verification:**
  - All **18 routes return HTTP 200** with full application HTML on cold request and browser hard refresh.
  - Native Cloudflare Pages SPA handling automatically serves the root entry point for deep links without client-side redirects.
- **Asset Library Verification:**
  - **19 of 19 high-resolution WebP images** verified returning HTTP 200 from Cloudflare edge CDN (`*.pages.dev/assets/images/*.webp`).
- **Browser Automation QA Results:**
  - **Automated Unit & Route Test Suite (`tests/test-runner.cjs`):** 76 passed, 0 failed.
  - **Live Browser E2E Playwright Suite (`tests/production-live-test.cjs`):** 29 passed, 0 failed across Desktop (1440px), Tablet (768px), and Mobile (390px).
  - **Console Hygiene:** 0 JavaScript errors or resource loading warnings on live domain.

---

## 5. Strict Infrastructure Isolation Guarantee

Little Roots Kindergarten is completely decoupled from Invenio's existing production systems:
- Zero modifications made to `invenio-website` (`invenio-website.pages.dev`).
- Zero modifications made to `mehfil-website` (`mehfil-website.pages.dev`), `bookpress-demo`, or `shokh-store`.
- No shared Cloudflare Workers, D1 databases, R2 buckets, or DNS records utilized.
- Project runs 100% on Cloudflare Pages free tier with browser-local `localStorage` persistence.
