# Little Roots Kindergarten — Where Little Beginnings Grow Big

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4_Compiled-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Tests-73_Passed-success)](tests/test-runner.cjs)
[![E2E](https://img.shields.io/badge/Playwright_E2E-Verified-2EAD33?logo=playwright)](tests/e2e-browser-test.cjs)
[![Deploy](https://img.shields.io/badge/Cloudflare_Pages-Target-F38020?logo=cloudflare)](https://little-roots-kindergarten.pages.dev/)

**An Invenio Flagship Concept Experience** · [Invenio Studio Portfolio](https://invenio-website.pages.dev/)

> **Important Concept Disclosure:** Little Roots Kindergarten is a fictional, self-initiated educational digital experience concept created by Invenio. It is not an operating early-childhood school. All tour bookings, admissions applications, and administrative workflows are simulated demonstration environments running in browser local storage. No real student records or personal data are collected or transmitted.

---

## 1. Project Overview

**Little Roots Kindergarten** showcases how Invenio conceives and builds modern digital experiences for the early-childhood education sector in South Asia. Designed specifically for young families in Dhaka, Bangladesh, the application reimagines early-learning discovery by replacing dense administrative brochures with an engaging, interactive parent journey.

### Creative & Brand Pillars
- **Brand Metaphor:** *The Growing Seed* — gentle, unhurried, inquiry-led early education.
- **Hero Headline:** **A place to bloom** *with wonder.* (Forest Emerald display typography with controlled Deep Aubergine italics).
- **Core Color System:**
  - Deep Aubergine (`#39263E`)
  - Forest Emerald (`#174F43`)
  - Pistachio (`#D9EDB5` / soft `#ECF6D8` / deep `#5C7A29`)
  - Apricot (`#F8BD96` / soft `#FDE8D8` / deep `#C86D36`)
  - Soft Lavender (`#C6C9FF` / soft `#EAEBFF` / deep `#4A4F9E`)
  - Surface White (`#FAFAF7`) & Warm Light Surface (`#F4F0E9`)
  - Golden Sunshine (`#F6C866`)
  - Supporting Botanical Slate (`#45534C`)
- **Typography:**
  - Display: *Fraunces* (optical-sized soft serif)
  - Body: *Manrope* (clean geometric humanist sans)
  - Handwritten Accents: *Caveat* (warm script accents)

---

## 2. Technology Stack & Production Architecture

The application has been engineered as a zero-runtime-dependency, lightning-fast Single Page Application (SPA) compiled with Vite and PostCSS/Tailwind:

- **Styling Architecture:** Fully compiled production CSS via PostCSS and Tailwind CSS 3.4. The runtime `cdn.tailwindcss.com` development script has been completely removed. Initial CSS payload is under 40 kB (7.6 kB gzipped).
- **Asset Pipeline:** Embedded Base64 WebP images from the Gemini Argon export have been extracted into optimized `.webp` files in `public/assets/images/` and served with responsive loading attributes (`loading="eager"` / `fetchpriority="high"` on hero; `loading="lazy"` below-the-fold).
- **Routing Engine:** Dual-mode routing engine supporting the HTML5 History API (`pushState` / `popstate`) for clean deep URLs (`/programs/kindergarten`, `/admin`, etc.) with fallback for static hosts (`_redirects` and `404.html`).
- **Dynamic SEO:** Synchronous title, meta description, and canonical updates on route navigation.
- **State & Data Store:** Lightweight, declarative controller (`window.app`) managing in-memory state with browser `localStorage` persistence.

---

## 3. Route Inventory (All 18 Routes)

| # | Route | Page Title | Primary Feature / Interaction |
|---|-------|------------|-------------------------------|
| 1 | `/` | Homepage | Hero, Philosophy Pillars, Routine Sneak-Peek, Campus Highlights, Testimonials |
| 2 | `/our-story` | Our Story & Philosophy | The Growing Seed concept narrative & brand identity specimens |
| 3 | `/programs` | Program Explorer | Interactive Age Band Selector (2–3, 3–4, 4–6, all) & program matrix |
| 4 | `/programs/playgroup` | Playgroup | Playgroup curriculum, settling-in schedule, daily invitations |
| 5 | `/programs/nursery` | Nursery | Nursery learning objectives, sample timetable, nature activities |
| 6 | `/programs/kindergarten` | Kindergarten | School readiness, literacy & numeracy discovery, project atelier |
| 7 | `/programs/enrichment` | Enrichment Studios | Nature Explorers, Creative Atelier, clay & botanical sessions |
| 8 | `/a-day-at-little-roots` | A Day at Little Roots | 8-stage interactive daily rhythm timeline with synchronised imagery |
| 9 | `/our-campus` | Campus Explorer | 6 learning spaces with tabbed viewer, photography & floorplan |
| 10 | `/our-educators` | Our Educators | Teaching guides, Reggio Emilia philosophy, teacher-to-child ratios |
| 11 | `/admissions` | Admissions Guide | Step-by-step admissions timeline, document checklist & FAQs |
| 12 | `/book-a-tour` | Book a School Tour | 4-step guided tour booking wizard with synthetic visitor prefill |
| 13 | `/apply` | Admission Inquiry Wizard | 7-stage interactive admission inquiry with autosaved local draft |
| 14 | `/parent-corner` | Parent Corner | Home discovery ideas filterable by age, sample academic calendar |
| 15 | `/gallery` | School Life Gallery | Filterable photo categories with accessible keyboard-driven lightbox |
| 16 | `/contact` | Contact & Location | Dhaka concept context, demo contact message form |
| 17 | `/privacy` | Privacy & Concept Disclosure | Full concept transparency disclosure, brand token specimen, data reset |
| 18 | `/admin` | Demonstration Admin Dashboard | Operational CRM view: inquiry pipeline, tour tracker, synthetic data creation |

---

## 4. Local Development & Build

### Prerequisites
- Node.js 18+ (tested on Node v24.21.0)
- npm 9+

### Commands
```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Run automated test suite (73 unit/route tests)
npm test

# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

### Production Output Size
```
dist/index.html                  42.33 kB │ gzip:  6.82 kB
dist/assets/index-tavDivQR.css   39.56 kB │ gzip:  7.68 kB
dist/assets/index-D8SV32nZ.js   228.82 kB │ gzip: 48.63 kB
```

---

## 5. Deployment Guide (Cloudflare Pages)

The project is configured for one-click deployment on Cloudflare Pages:

- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Framework Preset:** `None` (Static HTML / Vite)
- **Production Branch:** `main`
- **SPA Fallback:** Handled automatically via `dist/_redirects` (`/* /index.html 200`) and `dist/404.html`.

---

## 6. Demonstration Data & Privacy Safeguards

- **Storage Key:** `little_roots_demo_v1`
- **Draft Key:** `little_roots_inquiry_draft_v1`
- **Resetting Demo Data:** Click **"Reset All Local Browser Data Now"** on `/privacy` or **"Reset Demo Data"** on `/admin`.

---

## 7. License & Credits

- **Concept, Design & Development:** [Invenio](https://invenio-website.pages.dev/)
- **Photography:** Authentically graded Bangladeshi early-childhood learning imagery.
- **Classification:** Fictional Invenio Portfolio Concept Experience.
