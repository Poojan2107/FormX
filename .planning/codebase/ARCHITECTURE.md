# Architecture

**Analysis Date:** 2026-07-27

## Pattern Overview

**Overall:** Static content-driven marketing site on Next.js 16 App Router — server-rendered pages with client "islands" for interactivity.

**Key Characteristics:**
- No database or CMS — all content lives in typed TypeScript modules under `src/data/`
- Static generation at build time via `generateStaticParams()` on dynamic `[slug]` routes
- Asset handover model — images referenced by slot paths; `AssetImage` falls back to placeholders until files exist in `public/assets/`
- Thin API layer — two Route Handlers validate and log form payloads (production email/CRM wiring deferred per `HANDOVER.md`)

## Layers

**App Router (Pages & API):**
- Purpose: URL routing, page composition, metadata, static param generation, form endpoints
- Location: `src/app/`
- Contains: `page.tsx` route files, `layout.tsx`, `globals.css`, `api/*/route.ts`
- Depends on: `@/data/site` (barrel), `@/components/*`
- Used by: Browser requests, build-time static generation

**Presentation — Layout:**
- Purpose: Global chrome — header, footer, mobile menu state, WhatsApp float
- Location: `src/components/layout/`
- Contains: `AppShell.tsx`, `Header.tsx`, `MegaMenu.tsx`, `Footer.tsx`
- Depends on: `@/data/site` (nav, site config), `@/components/ui/*`
- Used by: `src/app/layout.tsx` wraps all pages

**Presentation — Feature Sections:**
- Purpose: Page-specific and reusable section components
- Location: `src/components/home/`, `src/components/shared/`, `src/components/projects/`, `src/components/forms/`
- Contains: Home page sections (`Hero`, `Stats`, `Contact`, etc.), CTAs, forms, project explorer
- Depends on: `@/data/site`, `@/components/ui/*`, `/api/*` (client forms)
- Used by: Route `page.tsx` files and other components

**Presentation — UI Primitives:**
- Purpose: Design-system building blocks — buttons, containers, media, motion wrappers
- Location: `src/components/ui/`
- Contains: `AssetImage`, `PageHero`, `Button`, `Container`, `Reveal`, `Counter`, etc.
- Depends on: `@/lib/cn`, `next/image`, `framer-motion` (where animated)
- Used by: All feature and layout components

**Data Layer:**
- Purpose: Single source of truth for site content, navigation, and entity collections
- Location: `src/data/`
- Contains: `site.ts` (barrel + site config), `projects.ts`, `services.ts`, `sectors.ts`, `content.ts`
- Depends on: Nothing (pure TypeScript exports)
- Used by: Pages, layout, components via `@/data/site` or direct module imports

**Utilities:**
- Purpose: Shared helpers
- Location: `src/lib/`
- Contains: `cn.ts` — className merge via `clsx`
- Depends on: `clsx`
- Used by: Components needing conditional Tailwind classes

**Static Assets:**
- Purpose: Public media served at root URLs
- Location: `public/assets/*`, `public/brochure/`
- Contains: Image slots (drop-in at handover), `formx.pdf` brochure, default Next SVGs
- Depends on: Referenced by `AssetImage` slot paths and direct links
- Used by: `AssetImage`, brochure CTAs, client logos

## Data Flow

**Page Render (static content):**

1. Build time: `generateStaticParams()` reads slug arrays from `src/data/*.ts` and pre-renders all `[slug]` pages
2. Request time: Server Component `page.tsx` imports data from `@/data/site` (or `getProject` / `getService` / etc.)
3. Page composes layout primitives (`PageHero`, `Container`) and feature components, passing data as props
4. Client islands (`"use client"`) hydrate for interactivity (filters, forms, animations, menu state)
5. `AssetImage` resolves `slot` → `/assets/{slot}`; on load failure renders `PlaceholderMedia`

**Contact / Newsletter Submit:**

1. Client form in `src/components/home/Contact.tsx` or `src/components/shared/NewsletterForm.tsx` validates locally
2. `fetch("/api/contact")` or `fetch("/api/newsletter")` with JSON body
3. Route Handler in `src/app/api/contact/route.ts` or `src/app/api/newsletter/route.ts` validates again
4. Valid payload logged via `console.info`; `{ ok: true }` returned
5. Client shows success state — no persistence layer yet

**Vendor Registration:**

1. `src/components/forms/VendorForm.tsx` handles submit client-side only
2. Sets local `sent` state — no API call; purely UI acknowledgment

**State Management:**
- No global state library — React `useState` / `useContext` locally
- `MenuOpenCtx` in `src/components/layout/Header.tsx` shares mobile menu open state between header and WhatsApp float via `AppShell`
- Filter/search state isolated in `ProjectsExplorer` (`useMemo` derived lists)

## Key Abstractions

**Content Entity + Getter:**
- Purpose: Typed collections with slug-based lookup for dynamic routes
- Examples: `src/data/projects.ts` (`Project`, `projects`, `getProject`), `src/data/services.ts`, `src/data/sectors.ts`, `src/data/content.ts` (`blogs`, `news`, `getBlog`, `getNews`)
- Pattern: Export typed array + `getX(slug: string)` using `.find()`; pages call `notFound()` when undefined

**Asset Slot System:**
- Purpose: Decouple content from media availability during handover
- Examples: `src/components/ui/AssetImage.tsx`, slot strings in data files (e.g. `"projects/solar-module-cover.jpg"`)
- Pattern: `slot` prop resolves to `/assets/{slot}`; `onError` triggers `PlaceholderMedia` with handover caption

**Page Shell Pattern:**
- Purpose: Consistent inner-page structure
- Examples: Most route pages in `src/app/*/page.tsx`
- Pattern: `PageHero` (eyebrow, title, description, breadcrumbs) → content sections in `Container` → `CtaBand` / `RelatedLinks` / `StickyEnquire` on detail pages

**Barrel Export (`site.ts`):**
- Purpose: Single import surface for pages and components
- Examples: `src/data/site.ts` re-exports entities from sibling modules plus site config, nav, homepage copy, stats, FAQs, testimonials, career roles
- Pattern: Pages import from `@/data/site`; domain modules stay separated by entity type

**Server / Client Boundary:**
- Purpose: Minimize client JS — default Server Components, mark interactivity explicitly
- Examples: Route pages are Server Components; `"use client"` on `Header`, `Contact`, `AssetImage`, `ProjectsExplorer`, animated UI
- Pattern: Pass serializable data from server page into client components as props

## Entry Points

**Root Layout:**
- Location: `src/app/layout.tsx`
- Triggers: Every page request
- Responsibilities: Google fonts (Montserrat display, Source Sans 3 body), global metadata, `JsonLd`, `AppShell` wrapper, `<main>` + `Footer`

**Home Page:**
- Location: `src/app/page.tsx`
- Triggers: `/`
- Responsibilities: Composes 12 home sections in S3M narrative order (Hero → Ticker → About → Stats → Services → … → CtaBand)

**Dynamic Detail Pages:**
- Location: `src/app/projects/[slug]/page.tsx`, `src/app/services/[slug]/page.tsx`, `src/app/sectors/[slug]/page.tsx`, `src/app/knowledge-center/[slug]/page.tsx`, `src/app/news/[slug]/page.tsx`
- Triggers: `/projects/*`, `/services/*`, `/sectors/*`, `/knowledge-center/*`, `/news/*`
- Responsibilities: `generateStaticParams`, `generateMetadata`, entity lookup, detail layout, related content, sticky enquire CTA

**Listing Pages:**
- Location: `src/app/projects/page.tsx`, `src/app/services/page.tsx`, `src/app/sectors/page.tsx`, `src/app/knowledge-center/page.tsx`, `src/app/news/page.tsx`, plus static pages (`about`, `clients`, `contact`, `career`, `vendor-registration`)
- Triggers: Corresponding list/static routes
- Responsibilities: Grid/list rendering, filters (projects), metadata export

**API Routes:**
- Location: `src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`
- Triggers: `POST` from contact and newsletter forms
- Responsibilities: JSON parse, field validation, log payload, return `{ ok: boolean }`

## Error Handling

**Strategy:** Fail fast at route level; graceful degradation for missing assets; API returns structured JSON errors.

**Patterns:**
- Dynamic routes: `getX(slug)` returns `undefined` → `notFound()` from `next/navigation` (404 page)
- API routes: Invalid payload → `400` with `{ ok: false, error?: string }`; parse failure → `500`
- Asset loading: `AssetImage` `onError` → fallback placeholder (never broken image icon)
- Client forms: Inline field errors + generic form error state before API call

## Cross-Cutting Concerns

**Logging:** Server-side `console.info` in API routes with prefixed tags (`[FormX contact]`, `[FormX newsletter]`). No external logging service.

**Validation:** Duplicated email regex in API routes and client forms. API validates minimum field lengths; client validates before fetch.

**Authentication:** None — public marketing site, no user sessions or protected routes.

**SEO:** Per-page `export const metadata` or `generateMetadata()`. Global defaults in `layout.tsx` with title template. Structured data via `src/components/shared/JsonLd.tsx` (Organization + FAQPage schema).

**Styling:** Tailwind CSS v4 with design tokens in `src/app/globals.css` (`--x-red: #de3024`, `--ink`, `--line`, etc.). Custom utility classes (`.section-y`, `.formx-cut-x`, `.formx-edge`) for brand geometry. Fonts loaded in layout, exposed as CSS variables.

**Navigation:** Primary nav defined in `src/data/site.ts` (`nav`, `serviceNavGroups`). Desktop mega-menu in `src/components/layout/MegaMenu.tsx`; mobile drawer in `Header.tsx`.

---

*Architecture analysis: 2026-07-27*
