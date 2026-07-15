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
| About | `/public/assets/about/*` |
| Brochure PDF | `/public/brochure/formx.pdf` |

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

| Feature | Current | Production |
|---------|---------|------------|
| Contact form | `POST /api/contact` logs payload | Resend / SMTP / CRM |
| Newsletter | `POST /api/newsletter` logs email | Email provider |
| Brochure | Link to `/brochure/formx.pdf` | Drop real PDF |
| WhatsApp | Uses `site.whatsapp` | Confirm number |

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
