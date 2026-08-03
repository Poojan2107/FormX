import type { Metadata } from "next";
import Link from "next/link";
import { aboutPage, stats } from "@/data/site";
import { leadership } from "@/data/content";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { BrochureCta, CtaBand } from "@/components/shared/CtaBlocks";
import { WhyChooseAccordion } from "@/components/about/WhyChooseAccordion";

export const metadata: Metadata = {
  title: "About FORMX Consultants | Multidisciplinary Engineering Consultancy, Ahmedabad",
  description:
    "FORMX is an established engineering consultancy delivering coordinated Architecture, Structure, Infrastructure, and Execution support from concept to GFC in Ahmedabad, India.",
};

const practicePillars = [
  {
    title: "Architecture & Master Planning",
    desc: "Operational spatial planning, site layouting, zoning, and statutory approval drawings integrated with structural grids.",
    href: "/services/architectural-design",
  },
  {
    title: "Structural & Civil Engineering",
    desc: "RCC structural design, PEB steel frame analysis, foundations, and civil infrastructure engineered for strength and buildability.",
    href: "/services/structural-engineering",
  },
  {
    title: "Infrastructure & Utility Networks",
    desc: "Site infrastructure, stormwater drainage, internal roads, and plant utility corridors planned clash-free before site execution.",
    href: "/services/site-infrastructure",
  },
  {
    title: "Construction Support & Execution",
    desc: "Continuous technical support during construction—revisions, contractor RFIs, tender documentation, and drawing delivery.",
    href: "/services/project-management",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section — Confident, uncluttered, company introduction */}
      <PageHero
        clean
        eyebrow="Our Practice"
        title="A trusted multidisciplinary consultancy for complex built environments"
        description={aboutPage.intro}
        image={{ slot: "about/studio-cover.jpg", kind: "studio" }}
      />

      {/* Company Identity & Philosophy */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="relative lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden border border-line bg-[#0d0d0d] shadow-2xl md:aspect-[16/11]">
                <AssetImage
                  alt="FORMX Consultancy Studio — Multidisciplinary Engineering"
                  slot="about/home-about.jpg"
                  kind="studio"
                  tone="dark"
                  fit="cover"
                  aspect="auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute left-0 top-0 h-full w-1.5 bg-x-red" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
                    FORMX Design &amp; Engineering Consultancy
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    Multidisciplinary coordination under single-window accountability
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col justify-center lg:col-span-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-x-red" />
                <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                  Who We Are
                </span>
              </div>
              <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-5xl">
                Engineering Designed for Execution
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-ink-muted">
                {aboutPage.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                {aboutPage.values.map((v) => (
                  <span
                    key={v}
                    className="border border-line/80 bg-[#f9f9f9] px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ink"
                  >
                    ✓ {v}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision · Mission · Values — Timeless Editorial Company Principles */}
      <section className="border-y border-line bg-[#f8f8f8] py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Company Ethos
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                Our Foundational Principles
              </h2>
              <p className="mt-3 text-[14px] text-ink-muted leading-relaxed">
                We measure our success not by the number of drawings generated, but by the safety, buildability, and operational performance of the completed facility.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {aboutPage.principles.map((principle, index) => (
              <Reveal key={principle.title} delay={0.06 * index} className="h-full">
                <div className="flex h-full flex-col border-l-2 border-x-red bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <span className="font-display text-xs font-black tracking-widest text-x-red">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.8] text-ink-muted">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership & Founder Spotlight — Human, Real Work & Site Responsibility */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Leadership
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
              Partners Hands-On With The Work
            </h2>
            <p className="mt-3 max-w-2xl text-[14px] text-ink-muted leading-relaxed">
              Led by Founder &amp; Managing Partner Hiren J. Shah alongside practice leads overseeing architectural planning, structural systems, infrastructure, and site execution.
            </p>
          </Reveal>

          {/* Featured Founder Card */}
          {leadership.filter((p) => p.featured).map((founder) => (
            <Reveal key={founder.name} delay={0.04}>
              <div className="mt-10 border border-line bg-[#111] p-6 text-white md:p-8 lg:p-10 shadow-2xl">
                <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-10">
                  <div className="overflow-hidden border border-white/10">
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
                      <p className="mt-4 max-w-3xl text-[14px] leading-[1.85] text-white/80">
                        {founder.bio}
                      </p>

                      {founder.highlights ? (
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                          {founder.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2.5 text-[13px] font-medium text-white/90">
                              <span className="size-1.5 shrink-0 rotate-45 bg-x-red" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
                      {founder.linkedin ? (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 border border-white/20 bg-white/10 px-5 py-3 font-display text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition-all hover:border-x-red hover:bg-x-red"
                        >
                          <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                          LinkedIn Profile
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.filter((p) => !p.featured).map((person, i) => (
              <Reveal key={person.role} delay={0.04 * i}>
                <article className="flex h-full flex-col border border-line bg-[#fafafa] p-6 transition-all hover:bg-white hover:shadow-md">
                  <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-x-red">
                    {person.role}
                  </span>
                  <h3 className="mt-2 font-display text-base font-extrabold text-ink">
                    {person.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-[1.75] text-ink-muted">
                    {person.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose FORMX — Split Layout (Accordion + Authentic Studio Media) */}
      <section className="border-t border-line bg-[#fafafa] py-16 md:py-24">
        <Container>
          <WhyChooseAccordion />
        </Container>
      </section>

      {/* Integrated Practice Pillars (High-level Practice Overview) */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                  Integrated Scope
                </p>
                <h2 className="mt-1 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                  4 Core Practice Pillars
                </h2>
              </div>
              <Link
                href="/services"
                transitionTypes={["nav-forward"]}
                className="font-display text-[11px] font-extrabold uppercase tracking-[0.16em] text-x-red transition-colors hover:text-ink"
              >
                View Detailed Services →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {practicePillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.05 * i} className="h-full">
                <div className="flex h-full flex-col justify-between border border-line bg-[#fbfbfb] p-6 transition-all hover:border-x-red/40 hover:bg-white hover:shadow-lg">
                  <div>
                    <span className="font-display text-xs font-black text-x-red">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-extrabold uppercase text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.75] text-ink-muted">
                      {pillar.desc}
                    </p>
                  </div>
                  <Link
                    href={pillar.href}
                    transitionTypes={["nav-forward"]}
                    className="mt-6 inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-wider text-x-red transition-colors hover:text-ink"
                  >
                    Learn More →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <BrochureCta className="mt-14" />
        </Container>
      </section>

      {/* Quiet Statistics & Proof Section */}
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
              <p className="mt-1 text-[12px] font-semibold text-white/60">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Conversational CTA */}
      <CtaBand
        eyebrow="Start A Project Conversation"
        title="Let's discuss your industrial facility"
        description="Share your project location, facility scope, and timeline—our senior engineering leads engage early on zoning, structure, and infrastructure corridors."
        primary={{ label: "Talk to our engineering team", href: "/contact" }}
        secondary={{ label: "Explore completed projects", href: "/projects" }}
      />
    </>
  );
}
