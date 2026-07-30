# External Integrations

**Analysis Date:** 2026-07-27

## Summary

FormX is largely **self-contained** — no database, CMS, auth provider, or third-party SaaS SDKs in production code. External touchpoints are: Google Fonts (build-time), WhatsApp deep links, schema.org JSON-LD, and two stub API routes awaiting email/CRM wiring.

## Integration Map

| Service | Status | Files | Notes |
|---------|--------|-------|-------|
| Google Fonts | **Active** | `src/app/layout.tsx` | Montserrat + Source Sans 3 via `next/font/google` |
| WhatsApp | **Active** (link only) | `src/data/site.ts`, `WhatsAppFloat.tsx`, `Contact.tsx` | `wa.me` deep links; number from `site.whatsapp` |
| Contact API | **Stub** | `src/app/api/contact/route.ts` | Validates JSON, logs via `console.info`, returns `{ ok: true }` |
| Newsletter API | **Stub** | `src/app/api/newsletter/route.ts` | Validates email, logs, returns `{ ok: true }` |
| Vendor registration | **Not wired** | `src/components/forms/VendorForm.tsx` | Client-only success state; no API route |
| Email (Resend/SMTP) | **Planned** | `HANDOVER.md`, contact route comment | Not implemented |
| CRM / webhooks | **Planned** | `HANDOVER.md` | Not implemented |
| Analytics | **None** | — | No GA, Plausible, GTM |
| Error monitoring | **None** | — | No Sentry |
| CMS | **None** | — | Content in `src/data/*.ts` |
| Database | **None** | — | No Prisma, Drizzle, Mongo, etc. |
| Auth | **None** | — | Public marketing site |
| Payment | **None** | — | — |
| CDN / image host | **None** | — | Local `public/` assets only |

## Active Integrations (Detail)

### Google Fonts (`next/font/google`)

- **File:** `src/app/layout.tsx`
- **Fonts:** Montserrat (display), Source Sans 3 (body)
- **Behavior:** Fonts self-hosted at build time by Next.js — no runtime request to fonts.googleapis.com in production bundle
- **Config:** Latin subset; display weights 500–800; body weights 400–700

### WhatsApp Business deep links

- **Config:** `site.whatsapp` in `src/data/site.ts` (e.g. `918866136236`)
- **UI:** Floating button `src/components/shared/WhatsAppFloat.tsx`; contact section link in `src/components/home/Contact.tsx`
- **URL pattern:** `https://wa.me/{number}?text={encoded message}`
- **No WhatsApp API** — outbound links only; no message sending from server

### Schema.org JSON-LD

- **File:** `src/components/shared/JsonLd.tsx`
- **Types:** `Organization`, `FAQPage`
- **Data source:** Static `site` + `faqs` from `src/data/site.ts`
- **Injection:** `dangerouslySetInnerHTML` with `JSON.stringify` — safe today (static data only)

### Site metadata / social

- **File:** `src/app/layout.tsx`
- **metadataBase:** `https://formxconsultants.com`
- **Open Graph:** type, locale `en_IN`, siteName, title, description
- **Twitter:** `summary_large_image` card
- **Missing:** `openGraph.images`, Twitter image — no OG image integration yet

## API Routes (Internal)

### `POST /api/contact`

- **File:** `src/app/api/contact/route.ts`
- **Client:** `src/components/home/Contact.tsx` — `fetch("/api/contact", { method: "POST", body: JSON.stringify(...) })`
- **Validation:** name ≥2 chars, email regex, message ≥10 chars
- **Response:** `{ ok: true }` or `{ ok: false, error }` with 400/500
- **Current behavior:** Logs name, email, company, phone, message snippet to server console
- **Production gap:** No email send, CRM push, or persistence

### `POST /api/newsletter`

- **File:** `src/app/api/newsletter/route.ts`
- **Client:** `src/components/shared/NewsletterForm.tsx`
- **Validation:** Email regex only
- **Current behavior:** `console.info("[FormX newsletter]", email)`
- **Production gap:** No mailing list provider (Mailchimp, Resend audiences, etc.)

## Planned Integrations (from `HANDOVER.md`)

| Feature | Recommended options | Env vars (typical) |
|---------|---------------------|-------------------|
| Contact form delivery | Resend, SMTP, CRM webhook | `RESEND_API_KEY`, SMTP host/user/pass, CRM URL |
| Newsletter | Email provider list API | Provider-specific API key |
| Brochure | Static file at `public/brochure/formx.pdf` | None |
| Analytics | GA4, Plausible, GTM | `NEXT_PUBLIC_*` measurement IDs |
| Bot protection | Cloudflare Turnstile, honeypot | `TURNSTILE_SECRET_KEY` |

## External URLs Referenced

| URL | Usage |
|-----|-------|
| `https://formxconsultants.com` | `metadataBase`, JSON-LD org URL |
| `https://wa.me/{site.whatsapp}` | WhatsApp CTAs |
| `https://schema.org` | JSON-LD `@context` |

No `fetch()` calls to third-party APIs in application code (grep confirmed).

## Webhooks & Server Events

**None.** No inbound webhook handlers, no background jobs, no queue consumers.

## File / Asset Hosting

- All media served from same origin under `/assets/*` and `/brochure/*`
- No S3, Cloudinary, or Imgix integration
- `next.config.ts` has no `images.remotePatterns` — remote images not configured

## Security & Integration Gaps

- No rate limiting on `/api/contact` or `/api/newsletter`
- No CAPTCHA on public forms
- PII logged to console in contact route until email integration ships
- No `.env` or secrets management pattern documented yet

## Wiring Checklist for Go-Live

1. Choose email provider for contact + newsletter (or unified CRM)
2. Add env vars and server-side send in Route Handlers
3. Remove or gate `console.info` PII logging
4. Add `POST /api/vendor` or extend contact pipeline for `VendorForm`
5. Drop `public/brochure/formx.pdf`
6. Optional: analytics snippet in `layout.tsx` or dedicated component
7. Optional: rate limiting middleware for API routes

---

*Integrations audit: 2026-07-27*
