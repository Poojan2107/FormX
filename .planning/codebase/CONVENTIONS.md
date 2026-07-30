# Coding Conventions

**Analysis Date:** 2026-07-27

## Naming Patterns

**Files:**
- React components: PascalCase — `AssetImage.tsx`, `SectionHeading.tsx`, `VendorForm.tsx`
- Pages (App Router): lowercase `page.tsx` inside route folders — `src/app/services/[slug]/page.tsx`
- API routes: `route.ts` inside `src/app/api/{name}/`
- Data modules: lowercase domain nouns — `projects.ts`, `services.ts`, `site.ts`
- Utilities: lowercase — `src/lib/cn.ts`
- No barrel `index.ts` files; import directly from source files

**Functions:**
- Components: PascalCase named exports — `export function Button()`, `export function Reveal()`
- Data getters: camelCase — `getProject()`, `getService()`, `getBlog()`
- Helpers: camelCase — `cn()`, `isEmail()`
- Private subcomponents: PascalCase, file-scoped (not exported) — `Field` in `src/components/home/Contact.tsx`, `SiteHeader` in `src/components/layout/Header.tsx`

**Variables:**
- camelCase for locals and state — `lineIndex`, `formError`, `reduce`
- SCREAMING_SNAKE not used; design tokens use CSS custom properties (`--x-red`)
- Const lookup maps: camelCase — `variants`, `kindCopy`, `aspects`

**Types:**
- PascalCase for exported types — `Project`, `Service`, `NavItem`, `RevealProps`
- Inline prop types on function parameters (not separate `Props` interfaces unless reused)
- Discriminated unions for polymorphic components — `AsButton | AsLink` in `src/components/ui/Button.tsx`
- String literal unions for variants — `Variant`, `Kind`, aspect/tone enums

## Code Style

**Formatting:**
- No Prettier config detected; rely on ESLint defaults from `eslint-config-next`
- Double quotes for strings
- Trailing commas in multiline structures
- Semicolons used consistently
- 2-space indentation

**Linting:**
- Config: `eslint.config.mjs`
- Extends: `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`
- Run: `npm run lint` (invokes `eslint` with no extra args)
- Ignores: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`

**TypeScript:**
- Config: `tsconfig.json` — `strict: true`, `noEmit: true`, `jsx: "react-jsx"`
- Path alias: `@/*` → `./src/*` — use `@/components/ui/Button`, not relative paths across layers
- `allowJs: true` but all source is TypeScript
- Prefer `import type` for type-only imports — `import type { Metadata } from "next"`

## Import Organization

**Order:**
1. React / Next.js framework imports
2. Third-party libraries (`framer-motion`, `lucide-react`, `clsx`)
3. Internal `@/` imports (data, components, lib)
4. Relative imports (rare; prefer `@/`)

**Path Aliases:**
- `@/*` maps to `src/*` — always use for cross-directory imports

**Example (from `src/app/services/[slug]/page.tsx`):**
```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getService, getSector, services } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
```

## Server vs Client Components

**Default:** Server Components (no `"use client"` directive)

**Add `"use client"` when the file uses:**
- React hooks (`useState`, `useEffect`, `useRef`, `useContext`)
- Event handlers (`onClick`, `onSubmit`, `onMouseMove`)
- Framer Motion client APIs (`motion`, `AnimatePresence`, `useMotionValue`)
- Browser APIs (`window`, `FormData` in event handlers)

**Client component files (18 total):**
- `src/components/ui/AssetImage.tsx`, `Reveal.tsx`, `TiltCard.tsx`, `Counter.tsx`
- `src/components/layout/Header.tsx`, `MegaMenu.tsx`, `AppShell.tsx`
- `src/components/home/Hero.tsx`, `Contact.tsx`, `Faqs.tsx`, `Process.tsx`, `Stats.tsx`, `Testimonials.tsx`
- `src/components/forms/VendorForm.tsx`
- `src/components/shared/NewsletterForm.tsx`, `StickyEnquire.tsx`, `WhatsAppFloat.tsx`
- `src/components/projects/ProjectsExplorer.tsx`

**Pattern:** Keep pages as Server Components; import client components as children. Example: `src/app/page.tsx` is a server component composing client sections.

## Styling Conventions

**Tailwind CSS v4:**
- Entry: `src/app/globals.css` with `@import "tailwindcss"` and `@theme inline` token mapping
- PostCSS: `postcss.config.mjs` with `@tailwindcss/postcss`

**Design tokens (CSS variables in `src/app/globals.css`):**
- Accent red: `--x-red: #de3024` → Tailwind `text-x-red`, `bg-x-red`, `border-x-red`
- Hover red: `--x-red-hover: #b8261c` → `bg-x-red-hover`
- Ink: `--ink`, `--ink-muted` → `text-ink`, `text-ink-muted`
- Background: `--bg`, `--bg-muted` → `bg-bg`, `bg-bg-muted`
- Border: `--line` → `border-line`

**Typography:**
- Display font: `font-display` (loaded as Montserrat in `src/app/layout.tsx` via `--font-display-family`)
- Body font: `font-body` (Source Sans 3 via `--font-body-family`)
- Utility classes: `.text-display`, `.text-lead` defined in `globals.css`
- Eyebrow labels: `text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted`
- Note: `README.md` references Chakra Petch; actual implementation uses Montserrat for display

**Brand geometry classes (from `globals.css`):**
- Diagonal cuts: `formx-cut`, `formx-cut-sm`, `formx-cut-lg`, `formx-cut-tr`, `formx-cut-x`, `formx-cut-bl`
- Red edge accent: `formx-edge`, `formx-edge-sm`, `formx-edge-lg`, `formx-edge-x`
- Hover effects: `x-border`, `x-hover-rail`, `x-hover-line`
- Patterns: `pattern-grid`, `pattern-stripe`, `pattern-stripe-red`
- Section spacing: `section-y` (responsive padding + scroll margin)

**Class merging:**
- Always use `cn()` from `src/lib/cn.ts` when combining conditional classes
- `cn()` wraps `clsx` — pass class strings and conditional objects

```typescript
// src/lib/cn.ts
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

**Layout:**
- Page content width: `Container` component — `max-w-[1180px]` with responsive horizontal padding (`src/components/ui/Container.tsx`)
- `PageHero` duplicates max-width inline for hero sections

## Component Patterns

**UI primitives (`src/components/ui/`):**
- Small, reusable, mostly presentational
- Accept `className` prop merged via `cn()`
- `Button`: polymorphic link/button via optional `href` prop
- `AssetImage`: handover-ready media with fallback to `PlaceholderMedia`
- `Reveal`: scroll-triggered fade-in via Framer Motion; respects `useReducedMotion`
- `TiltCard`: mouse-tracking 3D tilt; respects `useReducedMotion`
- `SectionHeading`: eyebrow + title + description with `align` and `invert` props

**Section components (`src/components/home/`):**
- One component per homepage section
- Compose `Container`, `SectionHeading`, `Reveal`, `Button`
- Section wrapper: `<section id="..." className="... section-y">`

**Layout (`src/components/layout/`):**
- `AppShell` wraps children with `MobileChrome` (header + menu state) and `WhatsAppFloat`
- `Header.tsx` exports `MobileChrome`, `useMenuOpen` context for coordinated UI

**Shared (`src/components/shared/`):**
- Cross-page widgets: `CtaBlocks.tsx`, `NewsletterForm.tsx`, `JsonLd.tsx`, `StickyEnquire.tsx`

**Data (`src/data/`):**
- Static content as typed `const` arrays
- Getter functions: `getProject(slug)`, `getService(slug)`, `getSector(slug)`, `getBlog(slug)`, `getNews(slug)`
- `src/data/site.ts` re-exports types/getters from domain files and holds site-wide config (`site`, `nav`, `faqs`, etc.)
- Import domain data via `@/data/site` in pages/components (not directly from `projects.ts` unless type-only)

## Page Conventions

**App Router pages (`src/app/`):**
- Export `default` async function for page component
- Export `generateMetadata` for SEO on content pages
- Dynamic routes export `generateStaticParams` for static generation
- Params typed as `Promise<{ slug: string }>` — await before use (Next.js 16 pattern)

```typescript
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  // ...
}
```

**Metadata:**
- Root defaults in `src/app/layout.tsx`
- Per-page `export const metadata` or `generateMetadata` with `title` and `description`

## Form Handling

**Client-side validation:**
- `noValidate` on forms to suppress browser defaults; validate manually
- Duplicate `isEmail()` helper in `Contact.tsx`, `NewsletterForm.tsx`, and API routes — same regex pattern
- Field-level errors stored in `useState<Errors>` object; display with `text-[12px] text-x-red`
- Form-level errors via separate `formError` state with `role="alert"`
- Success states toggle UI (thank-you message + reset option)
- `aria-invalid={Boolean(error)}` on invalid inputs

**API submission pattern:**
```typescript
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message }),
});
if (!res.ok) throw new Error("failed");
```

**Field subcomponent pattern (inline, file-private):**
- Label: uppercase micro-type span
- Input: `w-full border bg-white px-4 py-3 text-sm outline-none focus:border-x-red`
- Error border: `border-x-red` when error present

## Error Handling

**API routes (`src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`):**
- Wrap in `try/catch`
- Return `NextResponse.json({ ok: false, error?: string }, { status: 400|500 })`
- Success: `NextResponse.json({ ok: true })`
- Validate with inline helpers (`isEmail`, length checks)
- Log submissions via `console.info` with `[FormX contact]` / `[FormX newsletter]` prefix
- Comments note handover wiring (Resend/SMTP/CRM) — currently validate-and-acknowledge only

**Client forms:**
- `try/catch` around `fetch`; set user-friendly error strings
- `finally` block resets `loading` state
- No thrown errors surfaced to user — catch and display message

**Page not found:**
- Use `notFound()` from `next/navigation` when slug lookup fails

## Logging

**Framework:** `console.info` in API routes only

**Patterns:**
- Prefix logs with `[FormX {feature}]` for traceability
- Truncate sensitive content in logs (`message.slice(0, 200)`)
- No structured logging library; no client-side logging

## Comments

**When to Comment:**
- Handover instructions on media slots and API wiring
- JSDoc on utility components explaining purpose — `AssetImage`, `TiltCard`, `AppShell`

**JSDoc/TSDoc:**
- Brief block comments above exported utilities describing handover behavior
- No exhaustive param documentation; types serve as docs

**Example (`src/components/ui/AssetImage.tsx`):**
```typescript
/**
 * Handover-ready media slot.
 * Drop file at /public/assets/{slot} — it loads automatically.
 * Until then, a content-aware placeholder is shown.
 */
```

## Accessibility

- Skip link in `src/app/layout.tsx` — `skip-link sr-only` with focus styles
- `lang="en"` on `<html>`
- `aria-hidden` on decorative elements
- `role="status"` for success messages, `role="alert"` for errors
- `useReducedMotion()` from Framer Motion in animated components
- `prefers-reduced-motion` CSS overrides in `globals.css`
- External links: `rel="noopener noreferrer"` + `target="_blank"`

## Animation

**Framer Motion (`framer-motion` v12):**
- Scroll reveals: `Reveal` — `whileInView`, `viewport={{ once: true }}`, custom easing `[0.22, 1, 0.36, 1]`
- Hero: `AnimatePresence`, `useMotionValue`, `useSpring`
- Menu: `AnimatePresence` + `motion` in `Header.tsx`
- Always check `useReducedMotion()` and provide static fallback

**CSS animations:**
- Marquee/ticker: `.animate-marquee`, `.animate-ticker` in `globals.css`
- Disabled under `prefers-reduced-motion: reduce`

## Icons

- Use `lucide-react` — import named icons (`Phone`, `Mail`, `Check`, `ArrowRight`)
- Size via Tailwind: `className="size-4"` or `mt-0.5 size-4 shrink-0`
- Accent color: `text-x-red` on icon elements

## Function Design

**Size:** Keep components focused; extract private `Field` helpers within the same file for forms. Large data arrays live in separate `src/data/` files.

**Parameters:** Destructure props in function signature with inline type annotation. Provide sensible defaults (`variant = "primary"`, `delay = 0`).

**Return Values:** Components return JSX directly. Data getters return entity or `undefined` (caller handles with `notFound()`).

## Module Design

**Exports:** Named exports only — no default exports except Next.js pages/layouts/metadata

**Barrel Files:** Not used — import from concrete paths

**Data module structure:**
```typescript
export type Entity = { slug: string; /* ... */ };
export const entities: Entity[] = [ /* ... */ ];
export function getEntity(slug: string) {
  return entities.find((e) => e.slug === slug);
}
```

---

*Convention analysis: 2026-07-27*
