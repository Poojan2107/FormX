import type { Metadata } from "next";
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Knowledge-based industrial design, delivered with ownership"
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
              caption="Multidisciplinary industrial delivery"
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
                className="border border-line bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink"
              >
                {v}
              </span>
            ))}
          </div>
        </Container>
      </section>

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
              Replace names, photos, and bios with FormX leadership profiles.
              Structure is ready for handover.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, i) => (
              <Reveal key={person.role} delay={0.04 * i}>
                <article className="x-border border border-line bg-white">
                  <AssetImage
                    alt={person.name}
                    slot={person.asset}
                    kind="team"
                    aspect="square"
                    tone="light"
                    label="Portrait"
                    caption={person.role}
                  />
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-ink">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-x-red">
                      {person.role}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                      {person.bio}
                    </p>
                  </div>
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
