# Codebase Structure

**Analysis Date:** 2026-07-27

## Directory Layout

```
formx-web/                          # Project root (package name: formx-web)
├── .planning/
│   └── codebase/                   # GSD codebase analysis documents
├── public/
│   ├── assets/                     # Handover image slots (subdirs created at drop-in)
│   │   ├── projects/
│   │   ├── services/
│   │   ├── sectors/
│   │   ├── insights/
│   │   ├── news/
│   │   ├── team/
│   │   ├── clients/
│   │   └── about/
│   ├── brochure/                   # formx.pdf company brochure
│   └── *.svg                       # Default Next/static SVGs
├── scripts/
│   └── gen-favicon.mjs             # Favicon generation script
├── src/
│   ├── app/                        # Next.js App Router — routes, layout, API
│   │   ├── api/
│   │   │   ├── contact/route.ts
│   │   │   └── newsletter/route.ts
│   │   ├── about/page.tsx
│   │   ├── career/page.tsx
│   │   ├── clients/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── knowledge-center/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── sectors/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── vendor-registration/page.tsx
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   └── page.tsx                # Home route (/)
│   ├── components/
│   │   ├── ui/                     # Design-system primitives
│   │   ├── layout/                 # Header, footer, app shell
│   │   ├── home/                   # Homepage sections
│   │   ├── shared/                 # Cross-page widgets (CTA, forms, SEO)
│   │   ├── projects/               # Projects-specific UI
│   │   └── forms/                  # Standalone form components
│   ├── data/                       # Typed static content modules
│   └── lib/                        # Shared utilities
├── HANDOVER.md                     # Asset slots, routes, production checklist
├── README.md
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

## Directory Purposes

**`src/app/`:**
- Purpose: Next.js App Router file-system routing
- Contains: One `page.tsx` per route; `[slug]` folders for dynamic segments; `layout.tsx` root shell; Route Handlers under `api/`
- Key files: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, all `**/page.tsx`, `src/app/api/*/route.ts`

**`src/components/ui/`:**
- Purpose: Reusable, mostly presentational building blocks
- Contains: 11 components — media, typography, layout wrappers, brand elements
- Key files: `AssetImage.tsx`, `PageHero.tsx`, `Button.tsx`, `Container.tsx`, `Reveal.tsx`, `PlaceholderMedia.tsx`

**`src/components/layout/`:**
- Purpose: Site-wide structural chrome
- Contains: Header with mobile menu, desktop mega-menu, footer, client shell wrapper
- Key files: `AppShell.tsx`, `Header.tsx`, `MegaMenu.tsx`, `Footer.tsx`

**`src/components/home/`:**
- Purpose: Homepage-only section components
- Contains: 14 section components composed by `src/app/page.tsx`
- Key files: `Hero.tsx`, `About.tsx`, `Stats.tsx`, `Services.tsx`, `Projects.tsx`, `Contact.tsx`

**`src/components/shared/`:**
- Purpose: Components reused across multiple routes
- Contains: CTAs, sticky enquire bar, WhatsApp float, newsletter form, JSON-LD
- Key files: `CtaBlocks.tsx`, `StickyEnquire.tsx`, `WhatsAppFloat.tsx`, `NewsletterForm.tsx`, `JsonLd.tsx`

**`src/components/projects/`:**
- Purpose: Projects listing feature UI
- Contains: Filterable/searchable project grid
- Key files: `ProjectsExplorer.tsx`

**`src/components/forms/`:**
- Purpose: Standalone form UIs not tied to a shared widget
- Contains: Vendor registration form (client-only, no API)
- Key files: `VendorForm.tsx`

**`src/data/`:**
- Purpose: Static content store — no runtime fetching
- Contains: Entity arrays, TypeScript types, getter functions, site config re-exported via barrel
- Key files: `site.ts` (barrel), `projects.ts`, `services.ts`, `sectors.ts`, `content.ts`

**`src/lib/`:**
- Purpose: Non-UI shared code
- Contains: `cn.ts` className helper
- Key files: `cn.ts`

**`public/assets/`:**
- Purpose: Handover-ready media slots referenced by data `asset` / `slot` strings
- Contains: README documenting slot conventions; subdirectories created when assets are dropped
- Key files: `public/assets/README.md`

**`public/brochure/`:**
- Purpose: Downloadable company PDF
- Contains: `formx.pdf` (expected at handover), README
- Key files: `public/brochure/README.md`

## Key File Locations

**Entry Points:**
- `src/app/layout.tsx`: Root HTML shell, fonts, metadata defaults, AppShell + Footer
- `src/app/page.tsx`: Homepage section composition
- `src/app/api/contact/route.ts`: Contact form POST handler
- `src/app/api/newsletter/route.ts`: Newsletter POST handler

**Configuration:**
- `next.config.ts`: Next.js config (currently minimal/default)
- `tsconfig.json`: TypeScript strict mode; path alias `@/*` → `./src/*`
- `postcss.config.mjs`: Tailwind CSS v4 PostCSS plugin
- `eslint.config.mjs`: ESLint with `eslint-config-next`
- `package.json`: Scripts (`dev`, `build`, `start`, `lint`) and dependencies

**Core Logic:**
- `src/data/site.ts`: Nav, site contact info, homepage copy, stats, FAQs, testimonials, career roles; re-exports all entities
- `src/data/projects.ts`: 9 project case studies with asset slots
- `src/data/services.ts`: 10 service definitions
- `src/data/sectors.ts`: 12 sector definitions
- `src/data/content.ts`: 6 blog posts, 3 news items, 4 leadership profiles

**Testing:**
- Not detected — no test files, test runner config, or test scripts in `package.json`

## Naming Conventions

**Files:**
- Route pages: `page.tsx` inside route directory (App Router convention)
- API handlers: `route.ts` inside `api/{name}/`
- Components: PascalCase filename matching export (`Hero.tsx` → `Hero`, `AssetImage.tsx` → `AssetImage`)
- Data modules: lowercase entity name (`projects.ts`, `services.ts`, `content.ts`)
- Utilities: lowercase (`cn.ts`)

**Directories:**
- Route segments: kebab-case matching URL (`knowledge-center/`, `vendor-registration/`)
- Dynamic segments: bracket notation (`[slug]/`)
- Component groups: lowercase by domain (`ui/`, `layout/`, `home/`, `shared/`, `forms/`, `projects/`)

**Types & Exports:**
- Entity types: PascalCase singular (`Project`, `Service`, `Sector`, `BlogPost`, `NewsItem`, `TeamMember`)
- Collections: lowercase plural const (`projects`, `services`, `blogs`)
- Getters: camelCase `get{Entity}` (`getProject`, `getService`, `getBlog`)
- Slugs: kebab-case strings in data matching URL segments (`solar-module-manufacturing`, `structural-engineering`)

**CSS / Design Tokens:**
- Tailwind theme colors prefixed `x-red`, `ink`, `ink-muted`, `line`, `bg-muted`
- Font families: `font-display` (Montserrat), `font-body` (Source Sans 3)
- Custom classes: `formx-cut-x`, `formx-edge`, `section-y` defined in `globals.css`

## Where to Add New Code

**New Static Page (e.g. `/partnerships`):**
- Route: `src/app/partnerships/page.tsx`
- Metadata: `export const metadata` in same file
- Content: Add copy to `src/data/site.ts` or new `src/data/partnerships.ts` imported via barrel
- Nav: Add entry to `nav` array in `src/data/site.ts`
- Reuse: `PageHero`, `Container`, `Reveal`, `CtaBand` from existing components

**New Dynamic Entity (e.g. `/case-studies/[slug]`):**
- Data: `src/data/case-studies.ts` with type, array, `getCaseStudy(slug)`
- Barrel: Re-export from `src/data/site.ts`
- Route: `src/app/case-studies/page.tsx` (list) + `src/app/case-studies/[slug]/page.tsx` (detail)
- Detail page pattern: Copy structure from `src/app/projects/[slug]/page.tsx` — `generateStaticParams`, `generateMetadata`, `notFound()`, `PageHero`, `AssetImage`, `CtaBand`
- Assets: Slot paths under `public/assets/case-studies/`

**New Homepage Section:**
- Component: `src/components/home/{SectionName}.tsx`
- Compose: Import and place in `src/app/page.tsx` in narrative order
- Data: Add content constants to `src/data/site.ts`

**New UI Primitive:**
- File: `src/components/ui/{ComponentName}.tsx`
- Mark `"use client"` only if using hooks, events, or browser APIs
- Use `cn()` from `@/lib/cn` for conditional classes

**New API Endpoint:**
- File: `src/app/api/{name}/route.ts`
- Export named HTTP method functions (`POST`, `GET`)
- Follow validation pattern from `src/app/api/contact/route.ts`

**New Form with Backend:**
- Client component: `src/components/forms/` or `src/components/shared/`
- API: `src/app/api/{name}/route.ts`
- Wire fetch in form `onSubmit` following `src/components/home/Contact.tsx` pattern

**New Shared Widget (CTA, banner, etc.):**
- File: `src/components/shared/{Name}.tsx`
- Import into relevant route pages

**Utilities:**
- Shared helpers: `src/lib/{name}.ts`
- Import via `@/lib/{name}`

## Special Directories

**`public/assets/`:**
- Purpose: Production image slots organized by content type
- Generated: No — files dropped manually at handover
- Committed: README only; actual images typically gitignored or added at deploy

**`public/brochure/`:**
- Purpose: Static PDF download at `/brochure/formx.pdf`
- Generated: No
- Committed: README; PDF added at handover

**`.next/`:**
- Purpose: Next.js build output
- Generated: Yes (by `next build` / `next dev`)
- Committed: No (gitignored)

**`node_modules/`:**
- Purpose: npm dependencies
- Generated: Yes (by `npm install`)
- Committed: No (gitignored)

**`.planning/codebase/`:**
- Purpose: GSD codebase mapping documents for planning agents
- Generated: Yes (by `/gsd-map-codebase`)
- Committed: Typically yes for team reference

**Route Inventory (complete per `HANDOVER.md`):**

| Route | File |
|-------|------|
| `/` | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` |
| `/projects` | `src/app/projects/page.tsx` |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` |
| `/clients` | `src/app/clients/page.tsx` |
| `/sectors` | `src/app/sectors/page.tsx` |
| `/sectors/[slug]` | `src/app/sectors/[slug]/page.tsx` |
| `/knowledge-center` | `src/app/knowledge-center/page.tsx` |
| `/knowledge-center/[slug]` | `src/app/knowledge-center/[slug]/page.tsx` |
| `/news` | `src/app/news/page.tsx` |
| `/news/[slug]` | `src/app/news/[slug]/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/career` | `src/app/career/page.tsx` |
| `/vendor-registration` | `src/app/vendor-registration/page.tsx` |

---

*Structure analysis: 2026-07-27*
