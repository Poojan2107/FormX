# Codebase Concerns

**Analysis Date:** 2026-07-27

## Tech Debt

**Placeholder / demo content still in production data:**
- Issue: Contact details, stats, testimonials, leadership bios, career roles, blog/news copy, and client names are handover-ready but not verified as FormX-true. Leadership entries use generic titles (`Leadership Partner — Architecture`, etc.) rather than real names. Testimonials use anonymised initials and fictional companies (`National Manufacturing Group`, `Industrial Systems Ltd.`).
- Files: `src/data/site.ts`, `src/data/content.ts`, `src/data/projects.ts`, `src/data/services.ts`, `src/data/sectors.ts`
- Impact: Site reads as production-ready but may publish unverified metrics, quotes, and team identities. Legal/reputational risk if fictional testimonials or unlicensed client names go live.
- Fix approach: Complete the checklist in `HANDOVER.md` §2 — replace phone, email, full address, leadership, stats, testimonials, and confirm client logo licensing before launch.

**All media slots unfilled:**
- Issue: `AssetImage` falls back to `PlaceholderMedia` when files are missing. Only one file exists under `public/assets/` (the README). No images for projects, services, sectors, insights, news, team, clients, or about. Client logos render as text labels, not SVGs.
- Files: `src/components/ui/AssetImage.tsx`, `src/components/ui/PlaceholderMedia.tsx`, `src/components/home/Clients.tsx`, `src/app/clients/page.tsx`, `public/assets/README.md`
- Impact: Every visual across the site shows schematic placeholders with captions like `Drop file → assets/{slot}`. Undermines credibility for a design consultancy portfolio.
- Fix approach: Drop files at documented paths under `public/assets/` per `HANDOVER.md` §1 and `public/assets/README.md`. Wire `src` props in data files where needed.

**Brochure PDF missing with visible handover copy in UI:**
- Issue: `/brochure/formx.pdf` does not exist. `BrochureCta` links to the missing file and displays inline handover text: "Replace PDF at /brochure/formx.pdf".
- Files: `src/components/shared/CtaBlocks.tsx`, `src/components/layout/Footer.tsx`, `src/data/site.ts` (`brochurePath`), `public/brochure/README.md`
- Impact: Broken download link; internal handover instructions visible to end users.
- Fix approach: Add `public/brochure/formx.pdf` and remove the red "Replace PDF" span from `BrochureCta` once the file is in place.

**Contact and newsletter APIs are logging stubs:**
- Issue: `POST /api/contact` and `POST /api/newsletter` validate input then `console.info` payloads. No email provider, CRM, or database persistence. Comment in contact route explicitly says "wire to Resend / SMTP / CRM".
- Files: `src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`, `HANDOVER.md` §3
- Impact: All form submissions are silently lost after a success response. Users see "Thank you" but FormX receives nothing in production unless server logs are monitored.
- Fix approach: Integrate Resend, SMTP, or CRM webhook. Store submissions or send notification emails. Remove or gate `console.info` PII logging in production.

**Vendor registration form is client-only mock:**
- Issue: `VendorForm` sets `sent` state on submit with no `fetch` call, no API route, and no persistence.
- Files: `src/components/forms/VendorForm.tsx`, `src/app/vendor-registration/page.tsx`
- Impact: Vendors believe registration succeeded; procurement team receives zero data.
- Fix approach: Add `src/app/api/vendor/route.ts` (or reuse contact pipeline) and POST form data with the same validation/error UX as `Contact.tsx`.

**Duplicated email validation across four files:**
- Issue: Identical `isEmail` regex helpers exist in API routes and client forms with no shared utility.
- Files: `src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`, `src/components/home/Contact.tsx`, `src/components/shared/NewsletterForm.tsx`
- Impact: Validation rules can drift between client and server; maintenance overhead.
- Fix approach: Extract to `src/lib/validation.ts` and import from both layers.

**Design system documentation drift (display font):**
- Issue: `README.md` and `HANDOVER.md` specify display font "Chakra Petch", but `src/app/layout.tsx` loads Montserrat via `next/font/google`.
- Files: `src/app/layout.tsx`, `README.md`, `HANDOVER.md`
- Impact: Brand inconsistency between documented design system and shipped typography.
- Fix approach: Either switch `layout.tsx` to Chakra Petch or update docs to reflect Montserrat as the locked display face.

**README run instructions reference wrong directory:**
- Issue: `README.md` and `HANDOVER.md` instruct `cd formx-web`, but the project root is `FormX-master` (package name is `formx-web` in `package.json`).
- Files: `README.md`, `HANDOVER.md`
- Impact: Onboarding friction; new developers run commands from the wrong path.
- Fix approach: Update docs to `npm run dev` from repo root or clarify directory structure.

**Monolithic data file:**
- Issue: `src/data/site.ts` is 371 lines and holds nav, hero, stats, testimonials, FAQs, career roles, clients, and page copy alongside re-exports from other data modules.
- Files: `src/data/site.ts`
- Impact: Harder to review content changes; higher merge conflict risk as content grows.
- Fix approach: Split into focused modules (e.g. `nav.ts`, `testimonials.ts`, `career.ts`) when content editing becomes frequent.

**Empty Next.js config:**
- Issue: `next.config.ts` has no security headers, image remote patterns, redirects, or trailing-slash policy.
- Files: `next.config.ts`
- Impact: Missing baseline production hardening; no central place for redirects if URLs change.
- Fix approach: Add security headers, `images` config if remote assets are introduced, and any legacy URL redirects before launch.

## Known Bugs

**Brochure download returns 404:**
- Symptoms: Clicking "Download brochure" in footer or CTA blocks navigates to `/brochure/formx.pdf` which does not exist.
- Files: `src/components/shared/CtaBlocks.tsx`, `src/components/layout/Footer.tsx`
- Trigger: Any brochure download click.
- Workaround: None for end users. Host PDF at `public/brochure/formx.pdf`.

**Vendor form false success:**
- Symptoms: Form shows "Registration received" after submit regardless of network or backend.
- Files: `src/components/forms/VendorForm.tsx`
- Trigger: Submit any valid vendor registration form.
- Workaround: Direct vendors to email until API is wired.

**Contact/newsletter false delivery:**
- Symptoms: Forms return HTTP 200 and show success UI, but no email or CRM record is created.
- Files: `src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`, `src/components/home/Contact.tsx`, `src/components/shared/NewsletterForm.tsx`
- Trigger: Any successful form POST.
- Workaround: Monitor server `console.info` logs temporarily — not viable for production.

## Security Considerations

**No rate limiting or bot protection on public APIs:**
- Risk: Contact and newsletter endpoints can be spammed; resource exhaustion and log flooding.
- Files: `src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`
- Current mitigation: Basic field validation only.
- Recommendations: Add rate limiting (middleware or edge), honeypot fields, and optional CAPTCHA (e.g. Turnstile) before production.

**PII written to server logs:**
- Risk: Contact submissions log name, email, company, phone, and message snippet via `console.info`. Logs may be retained, forwarded, or exposed in hosting dashboards.
- Files: `src/app/api/contact/route.ts`
- Current mitigation: Message truncated to 200 chars.
- Recommendations: Remove console logging once email/CRM integration ships; never log full PII in production.

**No security headers or middleware:**
- Risk: Missing CSP, HSTS, X-Frame-Options, and other headers unless provided by hosting platform defaults.
- Files: `next.config.ts` (empty), no `src/middleware.ts`
- Current mitigation: Hosting provider may add some headers.
- Recommendations: Define headers in `next.config.ts` or middleware; audit with securityheaders.com after deploy.

**JSON-LD uses `dangerouslySetInnerHTML`:**
- Risk: Low — data is from static `src/data/site.ts`, not user input. Would become risky if fed from CMS without sanitisation.
- Files: `src/components/shared/JsonLd.tsx`
- Current mitigation: Static trusted data only.
- Recommendations: Keep JSON-LD sourced from static data or sanitised CMS fields.

## Performance Bottlenecks

**MegaMenu loads full project and sector datasets:**
- Problem: `DesktopNav` imports entire `projects` and `sectors` arrays for dropdown previews.
- Files: `src/components/layout/MegaMenu.tsx`, `src/data/projects.ts`, `src/data/sectors.ts`
- Cause: Nav component coupled to full content modules (392-line file).
- Improvement path: Pass lightweight nav summaries (slug + title only) or lazy-load panel content on first open.

**Framer Motion across many client components:**
- Problem: Animation library used in Hero, Header, MegaMenu, Reveal, Counter, Testimonials, Faqs, TiltCard — increases client JS bundle.
- Files: `src/components/home/Hero.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/MegaMenu.tsx`, `src/components/ui/Reveal.tsx`, and others
- Cause: `"use client"` + `framer-motion` on above-the-fold and navigation surfaces.
- Improvement path: Prefer CSS animations for simple reveals; lazy-load motion on non-critical sections; audit bundle with `@next/bundle-analyzer`.

**Client logo marquee duplicates array:**
- Problem: `Clients` component spreads `[...clients, ...clients]` for infinite scroll — doubles DOM nodes for 16 logos.
- Files: `src/components/home/Clients.tsx`
- Cause: CSS marquee pattern without virtualisation.
- Improvement path: Acceptable at current scale; if client list grows, use CSS `animation` with duplicated content in a single wrapper or limit visible logos.

## Fragile Areas

**MegaMenu hover panel state:**
- Files: `src/components/layout/MegaMenu.tsx`
- Why fragile: Complex hover timers (`scheduleClose`, `cancelClose`), portal rendering, `AnimatePresence`, and keyboard/focus behaviour in one 392-line component.
- Safe modification: Test desktop hover open/close, mobile drawer, and escape-key close after any nav data or layout change.
- Test coverage: None.

**AssetImage client-side fallback:**
- Files: `src/components/ui/AssetImage.tsx`
- Why fragile: Relies on `next/image` `onError` + `useState` to swap to placeholder. Flash of broken image possible; SEO/crawlers may not execute JS fallback.
- Safe modification: Verify image exists at build time or use explicit `src` only when file is confirmed present.
- Test coverage: None.

**Static content routing:**
- Files: `src/app/services/[slug]/page.tsx`, `src/app/projects/[slug]/page.tsx`, `src/app/sectors/[slug]/page.tsx`, `src/app/knowledge-center/[slug]/page.tsx`, `src/app/news/[slug]/page.tsx`
- Why fragile: Slug pages depend on compile-time data arrays; adding a slug without updating nav or related links yields 404 with no CMS guardrails.
- Safe modification: Run `npm run build` after data changes to catch missing slugs; consider `generateStaticParams` audit.
- Test coverage: None.

## Scaling Limits

**Content in TypeScript files:**
- Current capacity: ~10 services, 12 sectors, 9+ projects, 6 blogs, 3 news items — all in `src/data/*.ts`.
- Limit: Every content edit requires a code deploy. Non-technical editors cannot update copy, careers, or insights.
- Scaling path: Introduce headless CMS (Sanity, Contentful) or MDX files with git-based workflow when update frequency increases.

**Form submission handling:**
- Current capacity: Unlimited POSTs accepted with no queue or persistence.
- Limit: Spam or traffic spikes fill logs; no retry or dead-letter for failed email sends.
- Scaling path: Queue submissions (database or email provider API) with idempotency and failure alerts.

## Dependencies at Risk

**Next.js 16 / React 19 (bleeding edge):**
- Risk: Project uses Next `16.2.10` and React `19.2.4`. `AGENTS.md` warns this is "NOT the Next.js you know" with breaking API differences from training data and older docs.
- Impact: AI-assisted or copy-paste development may introduce deprecated patterns; fewer Stack Overflow answers.
- Migration plan: Pin versions in `package.json`; consult `node_modules/next/dist/docs/` before API changes; add smoke `npm run build` to CI when introduced.

**No lock on Node version:**
- Risk: No `.nvmrc` or `engines` field in `package.json`.
- Impact: Build reproducibility varies across developer machines and CI.
- Migration plan: Add `engines` and `.nvmrc` aligned with Next 16 requirements.

## Missing Critical Features

**No automated test suite:**
- Problem: Zero `*.test.*` or `*.spec.*` files. `package.json` has no `test` script.
- Blocks: Safe refactoring of forms, APIs, nav, and data layer; regression detection before deploy.

**No CI/CD pipeline:**
- Problem: No `.github/workflows/`, no `vercel.json`, no deploy automation detected.
- Blocks: Lint/build gates on PRs; consistent production deploys.

**No sitemap or robots.txt:**
- Problem: No `src/app/sitemap.ts`, `src/app/robots.ts`, or static equivalents.
- Blocks: Efficient search engine discovery of 40+ routes (services, projects, sectors, insights, news).

**No Open Graph images:**
- Problem: `metadata` in `src/app/layout.tsx` sets title/description but no `openGraph.images` or Twitter image.
- Blocks: Rich link previews on LinkedIn, WhatsApp, and social shares.

**No analytics or error monitoring:**
- Problem: No GA, Plausible, GTM, or Sentry integration in source.
- Blocks: Conversion tracking on contact/newsletter forms; production error visibility.

**No version control at mapping time:**
- Problem: Git repository not initialised in project root (git commands exit 128).
- Blocks: Change history, collaboration, PR review, and rollback capability.

## Test Coverage Gaps

**API routes (contact, newsletter):**
- What's not tested: Validation boundaries, error responses, future email integration.
- Files: `src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`
- Risk: Breaking validation or silent integration failures on deploy.
- Priority: High

**Form components:**
- What's not tested: Client validation parity with API, loading/error states, success UX.
- Files: `src/components/home/Contact.tsx`, `src/components/shared/NewsletterForm.tsx`, `src/components/forms/VendorForm.tsx`
- Risk: Users see success while data is lost; validation mismatch.
- Priority: High

**Navigation and routing:**
- What's not tested: MegaMenu interactions, slug page resolution, 404 behaviour for invalid slugs.
- Files: `src/components/layout/MegaMenu.tsx`, dynamic route pages under `src/app/`
- Risk: Broken links or nav regressions after data edits.
- Priority: Medium

**AssetImage / PlaceholderMedia:**
- What's not tested: Fallback when image missing, `onError` behaviour, alt text presence.
- Files: `src/components/ui/AssetImage.tsx`, `src/components/ui/PlaceholderMedia.tsx`
- Risk: Broken images or accessibility regressions after asset drops.
- Priority: Low (until real assets are added)

---

*Concerns audit: 2026-07-27*
