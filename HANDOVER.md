# FormX Consultants — Handover Guide

## Status

The site is **production-structured**. Remaining work before go-live is primarily **asset replacement** + **FormX-true copy/metrics** (where demo numbers still stand in).

Preview: `npm run dev` in `formx-web/`

---

## 1. Replace assets only

All media uses `AssetImage` with documented **slots**.

| Area | Path pattern |
|------|----------------|
| Project covers / galleries | `/public/assets/projects/*` |
| Services | `/public/assets/services/*` |
| Sectors | `/public/assets/sectors/*` |
| Insights | `/public/assets/insights/*` |
| News | `/public/assets/news/*` |
| Team | `/public/assets/team/*` |
| Clients | `/public/assets/clients/*` |
| Brochure PDF | `/public/brochure/formx.pdf` |

### Exact drop-in list (slots currently missing a file)

Missing files render a branded placeholder automatically — no 404s. Drop the real files at the paths below to go live.

| Area | Slots needed |
|------|--------------|
| Insights | `ev-battery.jpg` · `policy.jpg` · `power.jpg` · `water.jpg` |
| News | `careers.jpg` · `expansion.jpg` · `greenfield.jpg` |
| Sectors | `cable.jpg` · `ev.jpg` · `food.jpg` · `packaging.jpg` |
| Team | `partner-architecture.jpg` · `partner-structures.jpg` · `partner-mepf.jpg` · `partner-delivery.jpg` |
| Clients | `adani.svg` · `alstom.svg` · `cello.svg` · `constantia.svg` · `duravit.svg` · `hitachi.svg` · `mccain.svg` · `metso.svg` · `mg.svg` · `rapiscan.svg` · `renew.svg` · `sael.svg` · `siemens.svg` · `uflex.svg` · `voltbek.svg` · `waghbakri.svg` |

Already present (no action): all `projects/*`, all `services/*`, `about/*`, `insights/column-splice.jpg`, sectors `battery|data-center|industrial-park|renewable|semiconductor|solar-cell|solar-glass|wind-blade`, `team/hiren-j-shah.jpg`, `brochure/formx.pdf`.

Notes:
- Client logos are defined in `src/data/site.ts` but the `/clients` page currently shows text names. Wire a logo wall once the SVGs are provided.
- Team partner photos are optional — the About "practice leads" grid is text-only today.

### Wire an image after drop-in

In the relevant data file (`src/data/projects.ts`, etc.), pass:

```tsx
<AssetImage src={`/assets/${slot}`} slot={slot} alt="..." />
```

Or extend `AssetImage` to auto-detect file existence (optional enhancement).

---

## 2. Replace FormX-true content

Edit `src/data/site.ts`, `projects.ts`, `services.ts`, `sectors.ts`, `content.ts`:

- [ ] Real phone, email, full address
- [ ] Real leadership names / bios / photos
- [ ] Verified stats (experience, projects, sq.m, team)
- [ ] Real testimonials (name, title, company)
- [ ] Confirm client list / logos (licensing)
- [ ] Career openings & emails

---

## 3. Wire production services

Forms are fully implemented and delivery-ready. The only remaining action is providing a Resend API key — see `.env.example`.

| Feature | Current | Production |
|---------|---------|------------|
| Contact form | `POST /api/contact` → `src/lib/email.ts` (Resend) | Add `RESEND_API_KEY` + verify sender domain |
| Newsletter | `POST /api/newsletter` → email notification | Add `RESEND_API_KEY` |
| Vendor registration | `POST /api/vendor-registration` → email notification | Add `RESEND_API_KEY` |
| Brochure | Link to `/brochure/formx.pdf` | Drop real PDF |
| WhatsApp | Uses `site.whatsapp` | Confirm number |

Env vars (copy `.env.example` → `.env.local`):
- `RESEND_API_KEY` — required for live delivery; without it forms log payloads server-side and still return success (safe in dev).
- `RESEND_FROM_EMAIL` — verified Resend sender, e.g. `"FormX Consultants <contact@formxconsultants.com>"`.
- `CONTACT_EMAIL` — delivery inbox (defaults to `contact@formxconsultants.com`).

---

## 4. Route map (complete)

Home · About · Services (+10) · Projects (+9) · Clients · Sectors (+12) · Knowledge (+6) · News (+3) · Contact · Career · Vendor Registration

---

## 5. Design system (locked)

- Colors: white / black / `#DE3024`
- Display: Chakra Petch · Body: Source Sans 3
- Black navbar · white-majority pages · red X-factor accents
- Content psychology: S3M (proof → people → process → peers)
- IA: VMS-aligned, elevated craft
