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

export const metadata: Metadata = {
  title: "About Us",
  description: about.title,
};

const disciplineGroups = [
  {
    title: "Architecture & Planning",
    accent: "border-t-blue-500",
    badge: "bg-blue-50 text-blue-700",
    services: [
      { title: "Architectural Drawings", href: "/services/architectural-design" },
      { title: "Site Infrastructure", href: "/services/site-infrastructure" },
      { title: "Sustainable & Energy Efficient Design", href: "/services/sustainable-design" },
    ],
  },
  {
    title: "Structure & Civil",
    accent: "border-t-amber-500",
    badge: "bg-amber-50 text-amber-700",
    services: [
      { title: "Structural Engineering", href: "/services/structural-engineering" },
      { title: "Civil Engineering", href: "/services/civil-engineering" },
    ],
  },
  {
    title: "MEP & Utilities",
    accent: "border-t-emerald-500",
    badge: "bg-emerald-50 text-emerald-700",
    services: [
      { title: "Mechanical Utility Engineering", href: "/services/mechanical-utility-engineering" },
      { title: "HVAC & Refrigeration Engineering", href: "/services/hvac-engineering" },
      { title: "Electrical Engineering", href: "/services/electrical-engineering" },
      { title: "Fire Protection Engineering", href: "/services/fire-protection-engineering" },
    ],
  },
  {
    title: "Delivery",
    accent: "border-t-purple-500",
    badge: "bg-purple-50 text-purple-700",
    services: [
      { title: "Project Management & Procurement", href: "/services/project-management" },
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
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <AssetImage
              alt="FormX practice"
              slot="about/studio-cover.jpg"
              kind="studio"
              tone="dark"
              label="Practice"
              caption="Coordinated multidisciplinary delivery"
              aspect="landscape"
              className="lg:aspect-[5/4]"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-4xl">
              {about.title}
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-ink-muted">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              {aboutPage.story.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Discipline overview */}
      <section className="border-y border-line bg-[#fafafa] py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
              Disciplines
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-4xl">
              10 integrated services
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] text-ink-muted">
              Every engagement draws from four discipline clusters — coordinated as one package, delivered as one practice.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {disciplineGroups.map((group, i) => (
              <Reveal key={group.title} delay={0.05 * i}>
                <div className={`formx-cut-x formx-edge formx-edge-x h-full border border-line border-t-4 bg-white p-6 ${group.accent}`}>
                  <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${group.badge}`}>
                    {group.title}
                  </span>
                  <ul className="mt-5 space-y-2.5">
                    {group.services.map((svc) => (
                      <li key={svc.href}>
                        <Link
                          href={svc.href}
                          className="group flex items-start gap-2 text-[13px] font-medium text-ink-muted transition-colors hover:text-x-red"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red/30 transition-colors group-hover:bg-x-red" />
                          {svc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {aboutPage.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.05 * i}>
                <p className="font-display text-[11px] font-bold tracking-[0.16em] text-x-red">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold uppercase text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted">
                  {pillar.body}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {aboutPage.values.map((v) => (
              <span
                key={v}
                className="formx-cut-sm formx-edge formx-edge-sm border border-line bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink"
              >
                {v}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership & Founder Spotlight */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
              Leadership
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-4xl">
              Partners close to the work
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] text-ink-muted">
              Led by Founder & Managing Director Hiren J. Shah alongside senior practice partners overseeing architecture, structural systems, MEP engineering, and project execution.
            </p>
          </Reveal>

          {/* Featured Founder Spotlight Card */}
          {leadership.filter((p) => p.featured).map((founder) => (
            <Reveal key={founder.name} delay={0.04}>
              <div className="mt-10 border border-line bg-[#1a1a1a] p-6 text-white md:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-10">
                  {/* Founder photo */}
                  <div className="overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(222,48,36,0.25)]">
                    <AssetImage
                      alt={founder.name}
                      slot={founder.asset}
                      kind="team"
                      aspect="portrait"
                      tone="light"
                      label="Management"
                      caption={founder.name}
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="inline-block border border-x-red/40 bg-x-red/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                        {founder.role}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
                        {founder.name}
                      </h3>
                      <p className="mt-3 max-w-3xl text-[14px] leading-[1.8] text-white/70 md:text-[15px]">
                        {founder.bio}
                      </p>

                      {founder.highlights ? (
                        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                          {founder.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2.5 text-[12px] text-white/80">
                              <span className="size-1.5 rotate-45 bg-x-red" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                      {founder.linkedin ? (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 border border-white/20 bg-white/10 px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:border-x-red hover:bg-x-red hover:text-white"
                        >
                          <svg className="size-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                          Connect on LinkedIn
                        </a>
                      ) : null}
                      <span className="text-[12px] text-white/40">
                        Ahmedabad, Gujarat · India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Practice Leads Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.filter((p) => !p.featured).map((person, i) => (
              <Reveal key={person.role} delay={0.04 * i}>
                <article className="formx-cut-x formx-edge formx-edge-x flex h-full flex-col border border-line bg-white p-5 md:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-display text-[11px] font-bold tracking-[0.16em] text-x-red">
                      0{i + 1}
                    </span>
                    <span className="size-1.5 rotate-45 bg-x-red/40" />
                  </div>
                  <h3 className="font-display text-base font-bold text-ink">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-x-red">
                    {person.role}
                  </p>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-muted">
                    {person.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
            Why clients choose FormX
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point, i) => (
              <Reveal key={point.num} delay={0.04 * (i % 3)}>
                <p className="font-display text-[11px] font-bold text-x-red">
                  {point.num}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">
                  {point.body}
                </p>
              </Reveal>
            ))}
          </div>
          <BrochureCta className="mt-14" />
        </Container>
      </section>

      <section className="border-t border-line bg-white py-14">
        <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-x-red pl-4">
              <p className="font-display text-3xl font-bold text-ink md:text-4xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={Number.isInteger(stat.value) ? 0 : 1}
                />
              </p>
              <p className="mt-2 text-[13px] text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Start a project conversation"
        description="Share facility type, location, and timeline — senior leads will engage early."
        secondary={{ label: "View projects", href: "/projects" }}
      />
    </>
  );
}
