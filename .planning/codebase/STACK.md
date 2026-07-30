# Technology Stack

**Analysis Date:** 2026-07-27

## Overview

FormX (`formx-web`) is a **Next.js 16 App Router** marketing site for FormX Consultants — industrial design and engineering. It is a static-content site with no database, CMS, or auth. Runtime is Node.js for build/dev; production is a standard Next.js deploy (Vercel-compatible).

## Languages & Runtime

| Layer | Technology | Notes |
|-------|------------|-------|
| Language | TypeScript 5.x | `strict: true` in `tsconfig.json` |
| UI | React 19.2.4 | Server Components + client islands |
| Runtime | Node.js | No `engines` field or `.nvmrc` — version not pinned |
| Module | ESM | `"module": "esnext"`, `moduleResolution: "bundler"` |

## Core Framework

| Package | Version | Role |
|---------|---------|------|
| `next` | 16.2.10 | App Router, SSR/SSG, Route Handlers, `next/font`, `next/image` |
| `react` / `react-dom` | 19.2.4 | UI runtime |

**Next.js features in use:**
- App Router under `src/app/`
- `generateStaticParams()` on `[slug]` routes (projects, services, sectors, knowledge, news)
- Route Handlers at `src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`
- `next/font/google` for Montserrat + Source Sans 3 in `src/app/layout.tsx`
- `next/image` via `AssetImage` component
- Metadata API in root `layout.tsx` (`metadataBase`, Open Graph, Twitter cards)
- App icons: `src/app/icon.png`, `icon.svg`, `apple-icon.png`, `favicon.ico` (generated)

**Note:** `AGENTS.md` warns Next.js 16 has breaking changes vs older docs — consult `node_modules/next/dist/docs/` for API details.

## Styling

| Package | Version | Role |
|---------|---------|------|
| `tailwindcss` | ^4 | Utility CSS via `@import "tailwindcss"` |
| `@tailwindcss/postcss` | ^4 | PostCSS plugin in `postcss.config.mjs` |

**Design tokens** live in `src/app/globals.css`:
- CSS variables: `--x-red` (`#de3024`), `--ink`, `--bg`, etc.
- `@theme inline` maps tokens to Tailwind (`--color-x-red`, `--font-display`, `--font-body`)
- Custom utilities: `.sr-only`, `.skip-link`, marquee, section spacing, prose blocks

**Typography (shipped):**
- Display: Montserrat (`--font-display-family`) — docs mention Chakra Petch; code uses Montserrat
- Body: Source Sans 3 (`--font-body-family`)

## Animation & UI Libraries

| Package | Version | Role |
|---------|---------|------|
| `framer-motion` | ^12.42.2 | Hero, Header, MegaMenu, Reveal, Counter, FAQs, TiltCard |
| `lucide-react` | ^1.24.0 | Icons across layout and sections |
| `clsx` | ^2.1.1 | Class merging via `src/lib/cn.ts` |

## Dev Tooling

| Package | Version | Role |
|---------|---------|------|
| `eslint` | ^9 | Lint via flat config `eslint.config.mjs` |
| `eslint-config-next` | 16.2.10 | `core-web-vitals` + TypeScript rules |
| `@types/node`, `@types/react`, `@types/react-dom` | ^20 / ^19 | Type definitions |
| `sharp` | ^0.35.3 | Dev dependency — favicon generation script |

## Scripts (`package.json`)

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Local development server |
| `build` | `next build` | Production build + static generation |
| `start` | `next start` | Production server |
| `lint` | `eslint` | ESLint (no `--fix` in script) |

**No `test` script** — no test framework installed.

## Build & Config Files

| File | Purpose |
|------|---------|
| `next.config.ts` | Empty `NextConfig` — no headers, redirects, or image domains |
| `tsconfig.json` | Path alias `@/*` → `./src/*`, Next plugin |
| `postcss.config.mjs` | Tailwind PostCSS plugin only |
| `eslint.config.mjs` | Next ESLint flat config |
| `.gitignore` | Standard Next.js ignores |

## Data Layer

**No database.** All content is static TypeScript:

| Module | Path | Contents |
|--------|------|----------|
| Site barrel | `src/data/site.ts` | Nav, hero, stats, FAQs, clients, career, testimonials, re-exports |
| Projects | `src/data/projects.ts` | Project catalog + `getProject()` |
| Services | `src/data/services.ts` | Service pages + `getService()` |
| Sectors | `src/data/sectors.ts` | Sector pages + `getSector()` |
| Content | `src/data/content.ts` | Blogs, news, leadership |

## Asset Pipeline

- Static files: `public/assets/*` (slot-based), `public/brochure/formx.pdf` (placeholder)
- `AssetImage` (`src/components/ui/AssetImage.tsx`) — `next/image` with client fallback to `PlaceholderMedia`
- Favicon generator: `scripts/gen-favicon.mjs` (uses `sharp`, writes to `src/app/` and `public/`)

## Environment Variables

**None required today.** No `.env` files in repo. Future integrations (email, analytics) will need env vars — not yet wired.

## Deployment Assumptions

- Standard Next.js static/SSR deploy (e.g. Vercel, Node host)
- `metadataBase`: `https://formxconsultants.com` in `src/app/layout.tsx`
- No `vercel.json`, Docker, or CI config detected
- Git not initialized at mapping time

## Dependency Tree Summary

```
formx-web
├── next 16.2.10
│   └── react 19.2.4
├── tailwindcss 4 + @tailwindcss/postcss
├── framer-motion 12
├── lucide-react
└── clsx
```

## Version Pinning Notes

- Next and `eslint-config-next` pinned to same major (16.2.10)
- React 19 is current major — verify compatibility with hosting platform
- Consider adding `engines` in `package.json` and `.nvmrc` for reproducible builds

---

*Stack audit: 2026-07-27*
