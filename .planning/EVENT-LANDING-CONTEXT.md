# FormX Event Landing — Task Context

**Status:** Active (event mode ON)  
**Created:** 2026-08-08  
**Trigger:** Founder (Hiren Shah) has an event in ~3 days; needs a showcase one-pager, not the unfinished full site.  
**Restore target:** Flip back to full multi-page site after the event and continue normal development.

---

## 1. What we are doing

Temporarily convert FormX from a **full multi-page marketing website** into a **single landing page** for an event presentation.

The public experience must feel like:

> **“Website taking form at FormX — launching soon.”**

Not like a broken site with missing pages. Not like a project portfolio. A deliberate, presentation-ready one-pager.

### What visitors see
- Only `/` (one scrollable page)
- Header/footer with **in-page anchors** only (About, Services, Partners, Contact)
- Red circular WhatsApp float (`F×`)
- Brochure + LinkedIn + contact details

### What visitors must NOT see
- Separate pages: About, Services, Projects, Insights, Career, Contact, etc.
- Project showcase / case studies / photos of buildings or team
- Dead nav links to unfinished sections

---

## 2. Why we are doing this

| Reason | Detail |
|--------|--------|
| **Event deadline** | Founder event in ~3 days — need something complete to show |
| **Site unfinished** | Full IA is still in development; exposing it looks incomplete |
| **Narrative** | Show that FormX digital HQ is “taking form” — honest + branded |
| **Presentation use** | Large type, icons, visual clarity for projection / walkthrough |
| **Reversibility** | Must not delete work; development continues after the event |

**Source of truth for content:** `CURRENT PLAN WEBISTE.pptx` (repo root) + WhatsApp group “Form X Website” (Hiren Shah).

---

## 3. Hard constraints (follow exactly)

From Hiren / WhatsApp + PPT — do **not** violate these:

1. **One-pager only** — hide/unlink all other pages (do not delete files).
2. **No project showcase.**
3. **No images / photos** in sections — **logo + icons only**.
4. **Icons** — use / generate high-quality icons matching the PPT style (black line + red accents).
5. **Typography** — **Montserrat for everything** on the event page (`ALL FONT - MONTSERRAT`).
6. **Stay inside the PPT concept** — do not invent new marketing sections outside the deck.
7. **Presentation scale** — titles and subheads large enough to read in a room / on a projected screen.
8. **WhatsApp** — circular **red** logo treatment (not default green WhatsApp mark). Already `F×` on red circle.
9. **Brochure CTA** — keep brochure download path for projects info.

### PPT slide map → page sections

| Slide | Content | On page |
|-------|---------|---------|
| 1 | Logo + “WHERE VISION TAKES FORM” + “WEBSITE TAKING FORM. LAUNCHING SOON.” | Hero |
| 2 | About paragraph + 4 pillars + “SHAPING FORM DEFINING FUTURE” | About + temple pillars |
| 3 | 25+ / 15 Lakh+ / 5 States | Stats |
| 4 | What We Do (6 services) + add Architecture & Infrastructure | What We Do (8 items) |
| 5 | Mission paragraphs + Young Minds / Practical / Partnerships / Excellence | Mission |
| 6 | Partners; “Industries” → **Industrialists**; add **Consultants** | Partners |
| 7 | Footer contact + brochure note + WhatsApp | CTA + site footer |

---

## 4. How it is implemented (do not lose this)

### Master switch (restore = one line)

```ts
// src/config/siteMode.ts
export const SITE_MODE: "event" | "full" = "event"; // ← set to "full" after event
```

When `SITE_MODE === "event"`:
- Homepage renders `EventLanding` instead of brochure home sections
- Middleware redirects all non-home routes → `/`
- Header/Footer use `#about` `#services` `#partners` `#contact` anchors
- Sitemap lists only `/`; robots disallow inner paths
- `not-found` points home only
- Layout metadata / body font lean event (Montserrat)

When `"full"`:
- Original multi-page site and brochure homepage return
- **No page files were deleted** — about, services, projects, etc. still on disk

### Key files

| Path | Role |
|------|------|
| [`src/config/siteMode.ts`](../src/config/siteMode.ts) | Event vs full switch |
| [`src/middleware.ts`](../src/middleware.ts) | Redirect non-home routes in event mode |
| [`src/app/page.tsx`](../src/app/page.tsx) | Chooses EventLanding vs full brochure home |
| [`src/data/eventLanding.ts`](../src/data/eventLanding.ts) | All event copy (PPT text) |
| [`src/components/event/*`](../src/components/event/) | Event one-pager UI |
| [`src/components/event/EventLanding.tsx`](../src/components/event/EventLanding.tsx) | Section composition + motion CSS import |
| [`src/components/event/event-motion.css`](../src/components/event/event-motion.css) | Scan / pulse / grid animations |
| [`src/components/layout/Header.tsx`](../src/components/layout/Header.tsx) | Event nav anchors |
| [`src/components/layout/Footer.tsx`](../src/components/layout/Footer.tsx) | Event footer links |
| [`src/components/shared/WhatsAppFloat.tsx`](../src/components/shared/WhatsAppFloat.tsx) | Always-visible red float in event mode |
| [`src/app/sitemap.ts`](../src/app/sitemap.ts) / [`robots.ts`](../src/app/robots.ts) | SEO gated by mode |
| [`CURRENT PLAN WEBISTE.pptx`](../CURRENT%20PLAN%20WEBISTE.pptx) | Founder content deck |
| [`scratch/pptx_extract/`](../scratch/pptx_extract/) | Extracted slide images (reference) |

### Event page order

```
Hero → About (+ temple pillars) → Stats → What We Do → Mission → Partners → CTA
```

Plus global Header / Footer / WhatsApp.

### Full site (preserved, hidden)

Still in repo under `src/app/**` and `src/components/home/**` (BrochureHero, BrochureProjects, etc.). Do not delete while finishing the event page.

---

## 5. What to deliver (definition of done)

### For the event
- [x] Public site is effectively a **one-pager**
- [x] Inner URLs redirect home (no accidental deep pages)
- [x] Content matches PPT + WhatsApp rules (no photos, no project gallery)
- [x] Logo + icons; Montserrat; large presentation type
- [x] Brochure download + contact + WhatsApp work
- [x] Feels intentional (“taking form”), not unfinished
- [ ] Founder walkthrough / approve visual polish before event day
- [ ] Deployed with `SITE_MODE = "event"`

### After the event (restore checklist)
1. Set `SITE_MODE` to `"full"` in `src/config/siteMode.ts`
2. Confirm `/about`, `/services`, `/projects`, `/contact` load again
3. Confirm header mega-nav + footer practice links restored
4. Confirm homepage is brochure spine again (Hero → … → Contact)
5. Confirm sitemap/robots back to full routes
6. Smoke-test WhatsApp float scroll behavior on detail pages
7. Resume normal multi-page development / roadmap work

---

## 6. Creative direction (current iteration)

The page uses an **engineering drawing-sheet** visual system (not a generic centered icon-grid landing):

- Dark CAD sheet hero with DWG title block, logo plate, discipline meta bar
- Spec-sheet section language (`Spec 01…06`)
- Interactive practice index + sticky detail plate
- Typography-first partner index
- Motion: count-ups, pillar grow-in, scan/pulse, hover lifts
- Still: **no stock photos, no project cards, no new off-PPT sections**

Respect `prefers-reduced-motion`.

### UI enhancement pass (applied)

Micro-interactions layered on the sheet concept:

| Area | Enhancements |
|------|----------------|
| Hero | CAD `+` crosshairs; logo plate hover tilt/scale + bracket glow; discipline bar hover |
| Pillars | `AXIS A–D` labels; column glow/beam; glass description cards |
| Stats | Glass metric cards; CAD tick corners; hover red accent line |
| Services | Active left red bars; sticky glass detail plate |
| Mission | Value cards with top red gradient + hover lift |
| Partners | Hover pad/fill + icon scale |
| CTA / WhatsApp | Brochure glow elevation; contact glass cards; WhatsApp `animate-ping` ring |

---

## 7. Explicit non-goals (until after event)

- Do not ship project detail pages or portfolio galleries publicly
- Do not redesign the full-site brochure homepage under event mode
- Do not delete `src/app/about`, `projects`, etc.
- Do not change `SITE_MODE` to `"full"` before the event without founder OK
- Do not add purple SaaS / generic AI landing tropes; keep FormX red × + Montserrat industrial clarity

---

## 8. Ops notes

- **Local preview:** `npm run dev` → open `/` ; try `/about` should redirect to `/`
- **Build:** `npm run build` must pass before deploy
- **Assets:** `/formx-logo-solid.png`, `/brochure/formx.pdf`
- **Phone / email:** from `src/data/site.ts` (`site.phone`, `site.email`, etc.)
- **PPT extract (reference only):** `scratch/pptx_extract/image1–7.png` — optional; not required at runtime

---

## 9. Decision log (short)

| Decision | Choice | Why |
|----------|--------|-----|
| Hide vs delete pages | Hide via `SITE_MODE` + middleware | Zero data loss; one-line restore |
| Content source | PPT + WhatsApp only | Founder: “don’t go outside PPT” |
| Media | Logo + generated SVG icons | “no image” / “biji no image” |
| Projects section | Omitted | “no project showcase” |
| Architecture & Infrastructure | Added to What We Do | Blue note on PPT slide 4 |
| Industrialists + Consultants | Partner labels | Blue notes on PPT slide 6 |
| Creative motion | Added after first static pass | One-pager can carry the brand for the event |
| Drawing-sheet UI | Asymmetric CAD composition + micro-interactions | Escape generic template feel for event showcase |

---

## 10. Handoff line for the next agent / human

> We temporarily parked the full FormX multi-page site behind `SITE_MODE = "event"` and shipped a PPT-faithful, logo+icons one-pager (“website taking form”) with a construction drawing-sheet UI. Do not delete hidden pages. Polish only within PPT constraints. After the founder event, set `SITE_MODE` to `"full"` and continue full-site development.

**Primary switch:** [`src/config/siteMode.ts`](../src/config/siteMode.ts)
