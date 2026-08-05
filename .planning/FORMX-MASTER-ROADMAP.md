# FORMX MASTER ROADMAP
**Digital headquarters redesign — full project brief**  
Locked references: Design Bible V1 · V3 Locked Decisions · Before × Issue Identity · Founder PDFs · Client Review Log  
Written: 5 August 2026  
Live: https://formxconsultants.com · https://form-x-consultants.vercel.app/  
Repo: https://github.com/Poojan2107/FormX.git → push `main` → Vercel

---

## 0. How to use this document

This is the single source of truth for **what FormX is right now**, **what we are allowed to follow**, **what feel we must create**, **what every surface must visually convey**, and **the complete work remaining**.

Rules of use:
1. Before any code change, check **§2 Hard constraints** and **§3 Forbidden forever**.
2. Before designing a section, read its row in **§8 Section-by-section briefs**.
3. Before claiming “done,” pass **§12 Acceptance gates**.
4. Do not invent content, photos, logos, metrics, people, or services. Brochure truth only.
5. Creativity is required **inside** the FormX cage — not by breaking Hiren’s rules.

---

## 1. What this project is

### 1.1 Business truth
FormX Consultants is an Ahmedabad Architecture · Structure · Infrastructure practice. Founder & Managing Partner: **Hiren J. Shah**, Structural Engineer Grade 1 (AMC / BMC).

They design and coordinate industrial and building facilities so drawings are construction-ready **before issue**. The public promise is not “we do 10 disciplines” — it is judgement, coordination, and issued certainty.

### 1.2 Product truth (the website)
The website is the **digital headquarters** of FormX — not a marketing landing page, not a template portfolio, not an Awwwards clone of someone else’s agency.

North-star question (every page, every section):

> If I am planning a ₹50–₹500 crore industrial project, why should I trust FORMX over another consultant?

If a section cannot answer that, it does not belong.

### 1.3 Brand truth
| Token | Value |
|-------|--------|
| Name | FormX Consultants / FORM× |
| Slogan | Where Vision Takes Form |
| About line | Shaping form, defining futures |
| Public disciplines | Architecture · Structure · Infrastructure only |
| Signature method | **Before × Issue** — Read → Lock → Carry → Issue → Stand |
| Accent | `#E03128` / `#DE3024` family (CSS `--x-red: #e03128`) |
| Surfaces | Black `#000`, white / off-white paper, charcoal |
| Type (current) | Montserrat site-wide (matched to lockup) |
| Contact | inquiry@formxconsultants.com · +91 81284 44585 · 311, Addor Aspire, University Area, Ahmedabad, Gujarat 380015 |
| WhatsApp | `918128444585` — red circular F× mark, appears after ~280px scroll |
| Brochure PDF | `/brochure/formx.pdf` |
| Flagship proof | `/projects/vapi-g2-industrial` |

---

## 2. Hard constraints (never break)

These came from Hiren’s marked PDFs and are **non-negotiable**:

### Hero / open experience
- **No background photos on first paint.** Photos begin after scroll (About onward).
- No CAD overlay toys, rotating marketing headlines, project slide cards on open.
- No stats visible on open.
- No GREENFIELD chip / wrong header labels.
- Animated FORM× / official logo presence + slogan **Where Vision Takes Form**.
- Calm identity entrance — brand first, not brochure collage.

### Stats (only these, only after scroll)
1. **25+** Completed Projects  
2. **15 Lakh+** Sq.Ft Designed  
3. **5 States** Served  

No inflated walls (15+ Industrial Clients, 10+ Steel, warehouses grids, six-stat track records).

### Public IA
- Nav: About Us · Services · Projects · Insights (no Sectors in primary nav).
- No numbered nav items (01 / 02…).
- Public story = Architecture · Structure · Infrastructure.
- MEP scrubbed from public offering language; old MEP URLs redirect to `/services`.

### People / About
- Leadership = **Hiren only** (no invented practice leads).
- About: Vision · Mission · Values; human values; no specialty bullet stacks as hero content.
- No photo BG on About hero; no breadcrumbs (“Both Not Required”).

### WhatsApp
- Circular **red** logo treatment (not green chat bubble chrome).
- Appear after scroll, not on first paint.

### Content honesty
- Brochure (`FORMX.pdf`) is source of truth for projects, typologies, Hiren bio, contact, closing lines.
- No fake client logos, dummy blogs/news, fake careers, fake testimonials.
- No Construction Sequence as marketing toy (crossed out forever as that UI pattern).
- Captions do engineering talking from real assets — no fake redlines.

### Design posture (Design Bible)
- Engineering before Interface  
- Evidence before Marketing  
- People before Departments  
- Thinking before Services  
- Projects before Claims  
- Documentation before Datasheets  
- Editorial before Components  
- Trust before Conversion  
- **Do not add cards for modernity.** Prefer editorial composition.  
- If Construction Sequence / process UI still feels like a template after rebuild → **REMOVE it.**

---

## 3. Forbidden forever (crossed-out patterns)

Do not restore these even if they look “premium”:

1. Hero BG photo / video on open  
2. Testimonials carousel  
3. Sectors mega-nav / home sectors grid as primary story  
4. MEP as public offering  
5. Construction Sequence interactive “toy” UI  
6. Inflated metric walls  
7. Dummy Insights / News / Careers / Client logo walls  
8. Practice-lead card grids (non-Hiren)  
9. Decorative blueprint wallpaper as main visual idea  
10. Pill clusters, chip strips, badge stickers on hero media  
11. Shared PageHero → strip → CTA clone that makes every interior feel identical  
12. Marketing adjectives over observations (“world-class”, “cutting-edge”, “seamless”, “end-to-end excellence”)

---

## 4. What it is right now (honest audit — 5 Aug 2026)

### 4.1 Stack & shell
| Layer | Current state |
|-------|----------------|
| Framework | Next.js (App Router) — follow `node_modules/next/dist/docs/` for APIs |
| Home mount | `src/app/page.tsx` |
| Type | Montserrat only (`layout.tsx`) — display / body / label all same family |
| Color | Black / white / `--x-red` |
| Header | Transparent over dark home hero; logo assets in `Logo.tsx` |
| WhatsApp | `WhatsAppFloat.tsx` — post-scroll red F× |
| Deploy | Push `main` → Vercel; metadataBase `formxconsultants.com` |
| Forms | Needs `RESEND_API_KEY` for live enquiry (see HANDOVER) |

### 4.2 Current homepage order (code truth)
1. `Hero.tsx` — cinematic FORM×, no photo, crop marks / parallax × / method panel language  
2. `About.tsx` — magazine about + 25+ / 15 Lakh+ / 5 States  
3. `ProjectJourney.tsx` — Before × Issue immersive rail  
4. `ProofCase.tsx` — Vapi / flagship proof  
5. `Projects.tsx` — dossier / project list  
6. `ServiceTypologies.tsx` — four brochure typologies  
7. `PeopleGlimpse.tsx` — Hiren chapter  
8. Inline CTA — “Bring us your next facility”  
9. Footer (AppShell)

**On disk but not mounted on home:** TrustProof, HowWeThink, PortfolioWorkbench, WhyWeExist, EvidenceStrip, IndustriesServed, Contact, Faqs — treat as legacy; do not re-mount without a brief.

### 4.3 Interior routes that exist
`/about` · `/services` (+ `[slug]`) · `/projects` (+ `[slug]`) · `/knowledge-center` · `/contact` · `/estimator` · `/career` · `/clients` · `/news` · `/sectors` · `/vendor-registration`

Several of these still carry **pre-review or template DNA** and must be audited against §2 / §3 before Hiren sees them.

### 4.4 Asset inventory (usable)
| Bucket | Path | Notes |
|--------|------|--------|
| Logos | `public/formx-logo.png`, `formx-logo-solid.png`, `formx-lockup.png` | Official — use these, do not redraw |
| Brochure PDF | `public/brochure/formx.pdf` | Authority |
| Brochure stills | `public/assets/projects/brochure/` | Evidence frames |
| Projects | `public/assets/projects/` (~117) | Covers, galleries, details, pdf pages |
| About / people | `public/assets/about/`, `team/hiren-j-shah.jpg` | Studio + Hiren only |
| Services | `public/assets/services/` | Use sparingly; prove, don’t decorate |
| Clients folder | **MISSING** | Do not invent logos |

### 4.5 Current quality verdict (why we still rebuild)
What works:
- Brand cage is correct (B/W/red, FORM×, ASI, stats, no hero photo).
- Story order is closer to Design Bible than the old marketing stack.
- Before × Issue has real language and a named method.

What fails:
- **Soulless / AI-craft feel** — same ultra-bold all-caps Montserrat + red label + L-corners on every band.
- **Predictable rhythm** — black band → white band → black band; image-left / text-right forever.
- **Hero is logo slide, not desire** — correct rule, weak composition.
- **Brochure 3D renders** look cold; no atmosphere, grain, scale, or human presence.
- **Process UI** still risks reading as product chrome, not a signature chapter.
- **No memorable stop-moment** a promoter would recall after closing the tab.
- Interiors / orphan routes may still contradict the home story.

**Status label:** Competent engineering-site draft. **Not** Hiren Review 2.0 ready. **Not** “digital HQ” yet.

---

## 5. Resources to follow (in priority order)

### 5.1 Authority (must obey)
| # | Resource | Path / URL | Use for |
|---|----------|------------|---------|
| 1 | Company brochure | `FORMX.pdf` (root) + `public/brochure/formx.pdf` | Copy, projects, typologies, Hiren bio, contact, brand lines |
| 2 | Home annotations | `Home page comments.pdf` + `.planning/home_comment_p1–p9.png` | What Hiren crossed / kept on home |
| 3 | About annotations | `ABOUT US COMMENTS.pdf` + `.planning/about_comment_p1–p6.png` | About structure & removals |
| 4 | Design Bible V1 | `.planning/FORMX-DESIGN-BIBLE-V1.txt` | Permanent decision framework |
| 5 | V3 locked decisions | `.planning/V3-LOCKED-DECISIONS.txt` | Narrative order, no cards for modernity |
| 6 | Before × Issue lock | `.planning/BEFORE-ISSUE-IDENTITY.txt` | Method stages + flagship |
| 7 | Implementation log | `.planning/CLIENT-REVIEW-IMPLEMENTATION-LOG.txt` | What was already done post-review |
| 8 | This roadmap | `.planning/FORMX-MASTER-ROADMAP.md` | Creative + execution plan |

### 5.2 Limited inspiration only (never clone)
| Resource | Rule |
|----------|------|
| https://www.vmsconsultants.com/ | Only where annotations said “Ref VMS” / “Like this”. Steal **calm identity**, not layout cloning. |
| Jacobs-scale monumental footer wordmark ask | Scale of presence, not Jacobs branding. |
| High-end architecture / engineering studios (Awwwards, selected) | Study **rhythm, restraint, scroll authorship, type pairing, image crop**. Do not copy purple gradients, cream+serif terracotta tropes, or agency glassmorphism. |

### 5.3 Codebase maps
`.planning/codebase/STACK.md` · `ARCHITECTURE.md` · `STRUCTURE.md` · `CONVENTIONS.md` · `INTEGRATIONS.md` · `CONCERNS.md` · `TESTING.md`

### 5.4 Next.js reality
This repo’s Next.js may differ from training data. Before new APIs, read guides under `node_modules/next/dist/docs/`.

### 5.5 What we do NOT follow
- Generic “AI SaaS landing” patterns  
- Fake social proof  
- Stock “architect holding blueprints” imagery unrelated to FormX facilities  
- Any competitor full visual system clone  

---

## 6. Feel we must create

### 6.1 One-sentence feel
**Quiet industrial authority** — like walking into a senior engineer’s review room: clear light, heavy drawings, few words, zero fluff, absolute confidence that issued means issued.

### 6.2 Emotional keywords (use)
Certainty · Judgement · Restraint · Constructability · Coordination · Weight · Silence · Precision · Continuity · Responsibility

### 6.3 Emotional keywords (ban)
Hype · Startup · Playful · Soft luxury spa · Neon tech · Infinite scroll gimmick · Template polish · Brochure spam · “Creative agency vibes”

### 6.4 Audience feel (who must feel what)
| Audience | Must feel |
|----------|-----------|
| Industrial promoter / owner | “These people will not leave me exposed on site.” |
| Project manager / PMC | “Their drawings will hold under coordination pressure.” |
| Architect collaborator | “They respect architectural intent and lock structure honestly.” |
| Hiren (founder) | “This is us — not a vendor template wearing our logo.” |
| Young engineer hiring | “Serious practice. Clear standards.” |

### 6.5 Sensory metaphors for design decisions
- **Paper & stamp**, not glass & glow  
- **Issued sheet**, not dashboard card  
- **Site dust & steel**, not abstract purple mesh  
- **One red mark that means stop/decision**, not decorative accent sprinkle  
- **Chapter breaks**, not component inventory  

### 6.6 Motion feel
2–3 intentional motions per major chapter:
- Entrance: type settles / mark breathes — never bounce  
- Scroll: parallax only if it clarifies depth; no parallax noise  
- Interaction: tabs/stages feel like flipping sheets, not app toggles  
- Prefer opacity, clip, translateY small distances; avoid elastic springs and glow pulses  

---

## 7. What it must visually convey

### 7.1 First viewport (hero) — visual contract
Must communicate in **under 3 seconds**:
1. This is **FORM×** (brand hero-level, not nav-only).  
2. They are an **Ahmedabad A/S/I design & engineering studio**.  
3. The operating philosophy is **Before × Issue** (hint, not full tutorial).  
4. Atmosphere is **serious black field** — no photo yet (Hiren rule).  

Must NOT communicate:
- Stock hero lifestyle  
- SaaS product UI  
- “We do everything” service soup  

Composition budget (hero only):
- Brand / FORM× mark (dominant)  
- One short positioning line  
- One supporting sentence  
- One CTA group (Contact + Services or equivalent)  
- Optional quiet secondary index (About / Services / Projects…)  
- **No** stats, schedules, address blocks, promo chips, floating badges on open  

### 7.2 After first scroll — visual contract
Photos arrive. They must **prove facilities and judgement**, not decorate.
Every image answers: *What was built / coordinated / strengthened?*

### 7.3 Signature visual system (target — not yet fully achieved)
| Element | Conveys | How |
|---------|---------|-----|
| FORM× / red × | Decision mark | Sparse — only at identity moments and method climax, not every H2 |
| Black field | Seriousness / night review | Hero, method climax, founder, final CTA, footer |
| White / paper field | Drawing room / clarity | About, projects dossier, services |
| Monumental type | Weight of practice | Reserved for 3–5 chapter titles site-wide, not every subsection |
| Human body text | Trust / readability | Softer weight, longer measure, real sentences |
| Image crop | Engineering reality | Hard crops, edge-to-edge where section allows; avoid tiny rounded cards |
| Stamp / issue language | Method | One place owns it (Before × Issue) — others reference lightly |
| Footer mega FORM× | Institutional permanence | Jacobs-scale presence, faint, ownable |

### 7.4 Anti-patterns that currently leak “AI slop”
Kill these systematically:
1. Every section: red 11px tracked eyebrow + 6rem black all-caps H2 + grey paragraph + red L-corners  
2. Alternating B/W bands with identical padding recipes  
3. Three equal stat columns that look like every AI landing page  
4. Ghost outline buttons + solid red buttons in the same ratio every time  
5. Numbered 01–04 lists with giant ghost numerals as the whole idea of “services”  
6. Overuse of grid overlays / crop marks until they become wallpaper  

### 7.5 Section rhythm target (musical structure)
Think of the homepage as a short film, not a component list:

| Beat | Surface | Energy |
|------|---------|--------|
| Hero | Black void + mark | Held breath |
| About | White + first photo | Human scale arrives |
| Before × Issue | Black / deep — signature | Intellectual peak |
| Proof (Vapi) | Evidence board | Proof density |
| Projects | White dossier | Breadth |
| Typologies | Quiet list / editorial | Clarity of scope |
| Hiren | Dark portrait chapter | Trust transfer |
| CTA | Monumental ask | Decision |
| Footer | Institutional close | Permanence |

**Rule:** No two adjacent sections may share the same layout recipe (same columns, same type scale, same CTA stack).

---

## 8. Section-by-section briefs (homepage)

For each: **Now → Must become → Visual convey → Copy rules → Acceptance**.

### 8.1 Hero (`Hero.tsx`)
**Now:** Cinematic FORM×, crop marks, parallax ×, method panel hints — still reads as empty logo slide / templated dark hero.  
**Must become:** The strongest identity entrance under Hiren’s no-photo rule. Brand is the landscape. Space, type hierarchy, and one clear CTA.  
**Visually convey:** “This practice issues with intent.” Silence as luxury.  
**Copy:** Slogan exact. Positioning: Architectural & Engineering / Design | Engineering — no hype. Soft pointer to Before × Issue without dumping 5 stages.  
**Acceptance:**
- [ ] No photo on open  
- [ ] FORM× readable as hero-level brand  
- [ ] One composition, not a dashboard  
- [ ] Distinct from every later black section  
- [ ] Hard-refresh pass on mobile + desktop  

### 8.2 About (`About.tsx`)
**Now:** Two-column magazine + stats — better, still brochure-blocky.  
**Must become:** First human/facility contact. Photo proves Ahmedabad practice / built work. Stats only the three allowed.  
**Visually convey:** Judgement + scale without bragging.  
**Copy:** Brochure-rooted practice paragraph; no marketing adjectives. Heading can be strong but not louder than brand memory from hero.  
**Acceptance:**
- [ ] Stats = 25+ / 15 Lakh+ / 5 States only  
- [ ] Photo is real asset, caption-worthy  
- [ ] Layout not identical to Projects section  

### 8.3 Before × Issue (`ProjectJourney.tsx` + `src/data/method.ts`)
**Now:** Immersive rail + rewritten stages — still risks “product feature panel.”  
**Must become:** **The signature chapter** of the entire site. The one thing a promoter remembers. Stages: Read → Lock → Carry → Issue → Stand. Stamp idea: when we issue, we mean it.  
**Visually convey:** Holding the drawing until ready — tension, then release.  
**Copy:** Observations + consequences. Soft human verbs. No fake redlines.  
**Acceptance:**
- [ ] Feels like a documentary chapter, not tabs-for-tabs  
- [ ] If it still feels template → simplify or remove chrome (Design Bible gate)  
- [ ] Unique layout language not reused elsewhere  

### 8.4 ProofCase (`ProofCase.tsx`)
**Now:** Flagship evidence (Vapi).  
**Must become:** One deep case that teaches engineering consequence. Link to `/projects/vapi-g2-industrial`.  
**Visually convey:** “We finished something hard, correctly.”  
**Copy:** Specific facility facts from brochure/data — not generic case-study filler.  
**Acceptance:**
- [ ] Real project only  
- [ ] Image proves the facility  
- [ ] CTA into project detail works  

### 8.5 Projects (`Projects.tsx`)
**Now:** Dossier list with brochure projects.  
**Must become:** Editorial index of completed work — breadth after depth.  
**Visually convey:** Range without gallery spam.  
**Copy:** Exact brochure titles/descriptions where available.  
**Acceptance:**
- [ ] Only brochure-true projects  
- [ ] Not a card grid of wrong/non-brochure work  
- [ ] Distinct from ProofCase  

### 8.6 Service typologies (`ServiceTypologies.tsx`)
**Now:** Four ways / ordered list (brochure typologies).  
**Must become:** Clear scope of what FormX takes on — AFTER identity and proof, never before.  
**Brochure four:**
1. High-Rise Structures & Residential  
2. Industrial Projects  
3. Institutional & Commercial  
4. Strengthening & Retrofitting  
**Visually convey:** Competence boundaries.  
**Acceptance:**
- [ ] Exact brochure framing  
- [ ] Not “10 disciplines”  
- [ ] Not the same giant-numeral template as every AI site unless reinvented with restraint  

### 8.7 People / Hiren (`PeopleGlimpse.tsx`)
**Now:** Founder chapter with photo.  
**Must become:** Trust transfer — Hiren’s judgement (reviews / refuses / expects / success).  
**Visually convey:** A real person who will own the issued set.  
**Copy:** Grade 1 AMC/BMC; brochure bio; no invented team grid.  
**Acceptance:**
- [ ] Hiren only  
- [ ] Photo is official asset  
- [ ] LinkedIn only if already approved in site data  

### 8.8 Final CTA + Footer
**Now:** “Bring us your next facility” + monumental footer.  
**Must become:** Decision moment + institutional close.  
**Visually convey:** Invitation without desperation; permanence without noise.  
**Copy:** Facility type / location / timeline; begin with constraints. Contact exact.  
**Acceptance:**
- [ ] Phone/email/address exact  
- [ ] Mega FORM× present, faint, ownable  
- [ ] No long marketing blurb replacing slogan  

---

## 9. Interior pages — full remaining work

Treat each as its own chapter. Same brand cage. **No cloned PageHero recipe.**

### 9.1 About (`/about`)
- White editorial hero, no photo BG, no crumbs  
- Large heading + one paragraph  
- Vision · Mission · Values  
- Human values / collaboration (VMS *behavior* inspiration only where annotated)  
- Hiren only  
- Remove methodology card stacks / “Pillars” marketing toys if still present  

### 9.2 Services (`/services` + slugs)
- Public framing ASI-first  
- Redirect / neutralize MEP public story  
- Evidence images over icon grids  
- Link typologies ↔ brochure language  

### 9.3 Projects index + detail (`/projects`, `/projects/[slug]`)
- Brochure-complete set  
- Detail pages: documentary, captions that speak engineering  
- Flagship Vapi must feel flagship  
- No fake galleries  

### 9.4 Insights (`/knowledge-center`)
- Only real, useful content — or a honest “coming” editorial state  
- **Never** dummy blog filler for density  
- Estimator can live as a tool under Insights if kept accurate  

### 9.5 Contact (`/contact`)
- Exact contact block  
- Form wired with Resend when keys exist  
- Tone: begin with constraints, not “let’s chat!”  

### 9.6 Orphan / risk routes (audit & decide)
`/career` · `/clients` · `/news` · `/sectors` · `/vendor-registration` · `/estimator`

For each decide: **Keep (real) / Redirect / De-index / Rebuild honestly**.  
Never leave dummy data publicly indexable.

### 9.7 Global chrome
| Piece | Work |
|-------|------|
| Header | Calm; transparent over dark heroes; official logo; no Sectors; phone + enquire |
| Footer | Monumental FORM×; address; ASI; social only if real |
| Mega menu | If used, ASI-aligned; no MEP soup |
| WhatsApp float | Red F×; post-scroll |
| Scroll progress | Keep only if subtle; remove if noisy |
| 404 / loading | On-brand black/white/red, not Next default |

---

## 10. Typography, color, imagery, motion — system work

### 10.1 Type (problem + target)
**Problem now:** One family at one shout level everywhere → AI monotony.  
**Target:**
- Keep Montserrat (or lockup-matched geometric) for **FORM× / labels / chapter marks**  
- Introduce a **second voice** for long reading (editorial serif OR a calmer sans at text sizes) — *only if* it still feels FormX, not “cream terracotta agency”  
- Cap all-caps monumental lines: **≤ 5 per homepage**  
- Body: 16–18px, 1.6–1.8 line-height, max ~60–70ch  

### 10.2 Color
- Black / white / `#E03128` remain sacred  
- Use charcoal greys for secondary text — not muddy mid-grey on mid-grey  
- Red = decision / CTA / × — **budgeted**, not wallpaper  
- Avoid purple, glow, glass, cream+terracotta defaults  

### 10.3 Imagery rules
1. Every image proves a facility, studio, or Hiren.  
2. Prefer brochure/PDF extracts and project folders.  
3. Crop with intent (steel, span, bay, elevation) — no random zoom.  
4. Caption when it teaches.  
5. No decorative blueprint wallpaper as hero idea.  
6. Compress/optimize for LCP; don’t kill sharpness on facilities.  

### 10.4 Motion rules
- Prefer CSS + small scroll-linked transforms over heavy libraries unless already in stack  
- Respect `prefers-reduced-motion`  
- Hero: 1–2 motions max that feel authored  
- Method: stage change should feel like sheet change  
- No continuous ambient animation that screams “AI landing”  

### 10.5 Component hygiene
- Cards only when they hold interaction (filters, forms). Else: editorial blocks.  
- Kill shared decorative L-corner if it appears on every section.  
- Buttons: one primary language; don’t invent a third ghost style per section.  

---

## 11. Phased execution plan (do in order)

### Phase A — Freeze the cage (docs + audit)
1. Keep this roadmap + Design Bible + identity locks as law.  
2. Full route audit: list every public URL vs §3 forbidden content.  
3. Asset map: which brochure images are unused but valuable.  
4. Decide orphan routes (keep/redirect/kill).  

**Exit:** Written audit checklist signed off (you / team).

### Phase B — Homepage creative elevation (priority)
Work **one chapter at a time**; hard-refresh live after each:

1. **Hero** — make identity entrance unforgettable without photos  
2. **Before × Issue** — signature chapter (or simplify until it passes quality gate)  
3. **About** — first photo + stats with human weight  
4. **ProofCase** — Vapi density  
5. **Projects** — dossier distinct from proof  
6. **Typologies** — quiet brochure truth  
7. **Hiren** — trust chapter  
8. **CTA + Footer** — monumental close  

**Exit:** You can scroll once and feel *desire + trust*, not “another pass.”

### Phase C — Interiors aligned to home
About → Projects detail (esp. Vapi) → Services → Contact → Insights honesty pass.

**Exit:** No page feels like a different product.

### Phase D — Content & data honesty
- Sync all project copy to brochure  
- Remove leftover MEP/sectors marketing  
- Empty or hide dummy news/career/clients  
- Wire forms (`RESEND_API_KEY`)  

**Exit:** Zero fake content on indexable pages.

### Phase E — Performance & polish
- LCP image strategy (hero has no photo — first photo is About)  
- Font subsetting / weights actually used  
- Mobile: thumb CTA, no horizontal overflow, WhatsApp doesn’t cover CTAs  
- A11y: focus, contrast, skip link, alt text that describes facilities  

**Exit:** Lighthouse-respectable on mobile; no layout shift on type.

### Phase F — Hiren Review 2.0 freeze
1. Stop inventing new patterns.  
2. Hard-refresh checklist (desktop + mobile).  
3. Send **only** after Phase B exit criteria feel true to you.  
4. Collect marks → new short log (like Client Review Log) → implement exactly.

---

## 12. Acceptance gates (ship / no-ship)

### 12.1 Founder gate
- [ ] No hero BG photo  
- [ ] Stats only 25+ / 15 Lakh+ / 5 States, post-scroll  
- [ ] WhatsApp red F× post-scroll  
- [ ] ASI only in public story  
- [ ] Hiren only on leadership  
- [ ] Brochure-true projects & contact  
- [ ] No testimonials / dummy content / Construction Sequence toy  

### 12.2 Design Bible gate
- [ ] Feels like digital HQ, not marketing site  
- [ ] Editorial > cards  
- [ ] Evidence > claims  
- [ ] Would a promoter care?  
- [ ] If logo disappeared, would FormX still be recognisable?  

### 12.3 Anti-slop gate (new — required)
- [ ] Adjacent sections use different layout recipes  
- [ ] ≤ 5 monumental all-caps titles on home  
- [ ] Red × / L-corner / tracked eyebrow not on every block  
- [ ] At least one **signature stop-moment** (Before × Issue or Hero)  
- [ ] You would not be embarrassed to sit next to Hiren while he scrolls  

### 12.4 Technical gate
- [ ] Typecheck / build clean  
- [ ] Pushed to `main`, live hard-refresh verified  
- [ ] Mobile + desktop spot-check of home + about + one project + contact  

---

## 13. Copy system (how to write)

### Allowed voice
- Observations: “Drawings that leave too early become site problems.”  
- Consequences: “We hold Architecture, Structure and Infrastructure until ready — then we issue.”  
- Founder: planning before execution; coordination before construction; constructability; reduced uncertainty.  

### Banned voice
- “World-class solutions delivering excellence across verticals.”  
- “Seamless end-to-end holistic synergy.”  
- Fake precision (“247% efficiency”)  

### Owned phrases
- Where Vision Takes Form  
- Before × Issue  
- When we issue, we mean it.  
- Architecture · Structure · Infrastructure  
- Bring us your next facility  

---

## 14. File map (where work happens)

| Concern | Primary paths |
|---------|----------------|
| Home composition | `src/app/page.tsx`, `src/components/home/*` |
| Method copy | `src/data/method.ts` |
| Site constants / nav | `src/data/site.ts` |
| Projects / brochure | `src/data/projects.ts`, `src/data/portfolio.ts` |
| Brand CSS | `src/app/globals.css`, `src/app/layout.tsx` |
| Header / Footer | `src/components/layout/*` |
| Logo | `src/components/ui/Logo.tsx` |
| WhatsApp | `src/components/shared/WhatsAppFloat.tsx` |
| Public assets | `public/formx-*.png`, `public/assets/**`, `public/brochure/formx.pdf` |
| Planning law | `.planning/FORMX-*.txt`, this file |

---

## 15. Decision log (open items to resolve during Phase A–B)

Record answers here when decided — do not silently invent:

1. **Second typeface for body?** Keep Montserrat-only vs add editorial reading face.  
2. **Before × Issue interaction model:** full immersive rail vs quieter documentary scroll vs remove chrome.  
3. **Orphan routes:** keep estimator? kill news/clients dummies?  
4. **Insights strategy:** real posts only vs minimal editorial holding page.  
5. **Photo policy after scroll:** which single About image is the “first contact” forever.  
6. **CTA language:** “Talk to the studio” vs “Contact us” — pick one primary verb site-wide.  

---

## 16. Definition of done (whole project)

The FormX website is done when:

1. Hiren can scroll the homepage and recognise **his practice**, not a template.  
2. A promoter understands **Before × Issue** without a sales call.  
3. Evidence (Vapi + brochure projects) feels denser than claims.  
4. About / Services / Projects / Contact feel like the same headquarters.  
5. Zero forbidden patterns from §3 remain on public pages.  
6. Live site on `formxconsultants.com` matches `main` after hard-refresh.  
7. You personally pass the anti-slop gate (§12.3) without bargaining.

Until then: **iterate chapters, don’t spray random polish.**

---

## 17. Immediate next action (recommended)

**Phase B.1 — Hero only.**  
Do not touch the whole page. Make the no-photo hero feel inevitable and expensive. Ship. Hard-refresh. Judge. Then Before × Issue.

If you skip straight to “full redesign again,” you will recreate the same monotony with new decorations.

---

*End of FORMX MASTER ROADMAP — 5 Aug 2026*  
*Companion files: FORMX-DESIGN-BIBLE-V1.txt · V3-LOCKED-DECISIONS.txt · BEFORE-ISSUE-IDENTITY.txt · CLIENT-REVIEW-IMPLEMENTATION-LOG.txt*
