import type { Metadata } from "next";
import Link from "next/link";
import {
  about,
  aboutPage,
  whyPoints,
  stats,
  leadership,
} from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { BrochureCta, CtaBand } from "@/components/shared/CtaBlocks";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { ProcessSteps } from "@/components/shared/ProcessSteps";

export const metadata: Metadata = {
  title: "About FORMX Consultants | Multidisciplinary Design & Engineering, Ahmedabad",
  description:
    "FORMX Consultants delivers coordinated Architecture, Structure, Civil, and MEP packages from concept to GFC — bridging design intent with on-site execution in Ahmedabad, India.",
};

const disciplineGroups = [
  {
    title: "Architecture & Planning",
    services: [
      { title: "Architectural Drawings", href: "/services/architectural-design" },
      { title: "Site Infrastructure", href: "/services/site-infrastructure" },
      { title: "Sustainable Design", href: "/services/sustainable-design" },
    ],
  },
  {
    title: "Structure & Civil",
    services: [
      { title: "Structural Engineering", href: "/services/structural-engineering" },
      { title: "Civil Engineering", href: "/services/civil-engineering" },
    ],
  },
  {
    title: "MEP & Utilities",
    services: [
      { title: "Mechanical Utilities", href: "/services/mechanical-utility-engineering" },
      { title: "HVAC Engineering", href: "/services/hvac-engineering" },
      { title: "Electrical Engineering", href: "/services/electrical-engineering" },
      { title: "Fire Protection", href: "/services/fire-protection-engineering" },
    ],
  },
  {
    title: "Delivery",
    services: [
      { title: "Project Management", href: "/services/project-management" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Bridging design intent with on-site execution"
        description={aboutPage.intro}
        crumbs={[{ label: "About Us" }]}
        image={{ slot: "about/home-about.jpg", kind: "studio" }}
      />

      <ProofStrip />

      {/* Main Practice Story & Identity Section */}
      <section className="bg-white py-16 md:py-24">
        <Container className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="relative min-h-[380px] overflow-hidden bg-[#0d0d0d] shadow-2xl lg:min-h-full border border-line formx-cut-x formx-edge formx-edge-x">
            <AssetImage
              alt="FormX practice studio"
              slot="about/studio-cover.jpg"
              kind="studio"
              tone="dark"
              fit="cover"
              aspect="landscape"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute left-0 top-0 h-full w-1.5 bg-x-red" />
            <div className="absolute bottom-6 left-6 p-2">
              <span className="bg-x-red px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                FORMX Engineering Studio · Ahmedabad
              </span>
              <p className="mt-2 font-display text-xl font-extrabold uppercase text-white">
                Coordinated Multidisciplinary Consultancy
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-center py-2 lg:py-6">
            <div className="mb-3.5 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Our Identity
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl leading-[1.08]">
              {about.title}
            </h2>
            <div className="mt-5 prose-measure space-y-4 text-[14px] leading-[1.8] text-ink-muted">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              {aboutPage.story.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
              {aboutPage.values.map((v) => (
                <span
                  key={v}
                  className="border border-line bg-[#fafafa] px-3.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-ink"
                >
                  ✓ {v}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Integrated Discipline Overview Grid */}
      <section className="border-y border-line bg-[#fafafa] py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                  Disciplines
                </p>
                <h2 className="mt-1 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                  10 Integrated Engineering Services
                </h2>
              </div>
              <p className="max-w-md text-[13px] text-ink-muted">
                Coordinated under one window — Architecture, Structure, Civil, and MEP.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {disciplineGroups.map((group, i) => (
              <Reveal key={group.title} delay={0.05 * i} className="h-full">
                <div className="formx-cut-x formx-edge formx-edge-x x-hover-rail group flex flex-col justify-between h-full overflow-hidden border border-line border-t-4 border-t-x-red bg-white p-6 transition-all duration-300 hover:border-x-red/40 hover:shadow-xl">
                  <div>
                    <span className="inline-block border border-x-red/30 bg-x-red/10 px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.14em] text-x-red">
                      {group.title}
                    </span>
                    <ul className="mt-5 space-y-2.5">
                      {group.services.map((svc) => (
                        <li key={svc.href}>
                          <Link
                            href={svc.href}
                            transitionTypes={["nav-forward"]}
                            className="group/item flex items-center gap-2 text-[12px] font-semibold text-ink-muted transition-colors hover:text-x-red"
                          >
                            <span className="size-1.5 shrink-0 rotate-45 bg-x-red/40 transition-colors group-hover/item:bg-x-red" />
                            <span className="truncate">{svc.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line/60 font-display text-[10px] font-extrabold uppercase tracking-wider text-x-red">
                    Integrated Scope →
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Practice Pillars */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red mb-1">
              Methodology
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-ink mb-10">
              Pillars of FORMX Execution
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {aboutPage.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.05 * i} className="h-full">
                <div className="formx-cut-x formx-edge formx-edge-x x-hover-rail flex h-full flex-col border border-line bg-[#fafafa] p-6 transition-all hover:border-x-red/40 hover:bg-white hover:shadow-lg">
                  <span className="font-display text-xs font-extrabold tracking-[0.18em] text-x-red">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-extrabold uppercase text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.75] text-ink-muted">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSteps />

      {/* Leadership & Founder Spotlight */}
      <section className="border-t border-line bg-[#fafafa] py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Leadership
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
              Partners Close to the Work
            </h2>
            <p className="mt-2 max-w-2xl text-[14px] text-ink-muted">
              Led by Founder &amp; Managing Director Hiren J. Shah alongside senior practice leads overseeing architecture, structural systems, MEP engineering, and site execution.
            </p>
          </Reveal>

          {/* Featured Founder Spotlight Card */}
          {leadership.filter((p) => p.featured).map((founder) => (
            <Reveal key={founder.name} delay={0.04}>
              <div className="mt-10 border border-line bg-[#141414] p-6 text-white md:p-8 lg:p-10 shadow-2xl formx-cut-x formx-edge formx-edge-x">
                <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-center lg:gap-10">
                  <div className="overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(222,48,36,0.25)]">
                    <AssetImage
                      alt={founder.name}
                      slot={founder.asset}
                      kind="team"
                      aspect="portrait"
                      tone="light"
                      label="Founder"
                      caption={founder.name}
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="inline-block border border-x-red/40 bg-x-red px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">
                        {founder.role}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                        {founder.name}
                      </h3>
                      <p className="mt-3 max-w-3xl text-[14px] leading-[1.8] text-white/75">
                        {founder.bio}
                      </p>

                      {founder.highlights ? (
                        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                          {founder.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2.5 text-[12px] text-white/85">
                              <span className="size-1.5 rotate-45 bg-x-red" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
                      {founder.linkedin ? (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="formx-cut-sm inline-flex items-center gap-2.5 border border-white/20 bg-white/10 px-5 py-3 font-display text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition-all hover:border-x-red hover:bg-x-red"
                        >
                          <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                          Connect on LinkedIn
                        </a>
                      ) : null}
                      <span className="text-[12px] text-white/50">
                        Ahmedabad, Gujarat · India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Practice Leads Grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.filter((p) => !p.featured).map((person, i) => (
              <Reveal key={person.role} delay={0.04 * i}>
                <article className="formx-cut-x formx-edge formx-edge-x flex h-full flex-col border border-line bg-white p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-display text-[10px] font-extrabold tracking-[0.18em] text-x-red">
                      0{i + 1}
                    </span>
                    <span className="size-1.5 rotate-45 bg-x-red/40" />
                  </div>
                  <h3 className="font-display text-base font-extrabold text-ink">
                    {person.name}
                  </h3>
                  <p className="mt-0.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
                    {person.role}
                  </p>
                  <p className="mt-3 flex-1 text-[12px] leading-relaxed text-ink-muted">
                    {person.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose FormX Grid */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Why FORMX
            </span>
            <h2 className="mt-1 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Why Clients Choose FORMX
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point, i) => (
              <Reveal key={point.num} delay={0.04 * (i % 3)}>
                <div className="formx-cut-x formx-edge formx-edge-x x-hover-rail flex h-full flex-col border border-line bg-[#fafafa] p-6 transition-all hover:border-x-red/40 hover:bg-white hover:shadow-lg">
                  <p className="font-display text-xs font-extrabold text-x-red">
                    {point.num}
                  </p>
                  <h3 className="mt-2 font-display text-base font-extrabold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-[1.75] text-ink-muted">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <BrochureCta className="mt-12" />
        </Container>
      </section>

      {/* Practice Stats Dashboard */}
      <section className="border-t border-line bg-[#0d0d0d] py-14 text-white">
        <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-x-red pl-4">
              <p className="font-display text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={Number.isInteger(stat.value) ? 0 : 1}
                />
              </p>
              <p className="mt-1 text-[12px] font-semibold text-white/50">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Start a project conversation with FORMX"
        description="Share facility type, location, and timeline — senior leads engage early on zoning, structure, and MEP corridors."
        secondary={{ label: "View projects", href: "/projects" }}
      />
    </>
  );
}
