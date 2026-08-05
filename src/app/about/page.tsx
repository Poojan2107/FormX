import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod, hirenJudgement } from "@/data/method";
import { leadership } from "@/data/content";
import { aboutPage } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { HumanValuesPanel } from "@/components/about/HumanValuesPanel";
import { BrochureCta } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "About Us | FORMX Consultants",
  description:
    "About FORMX Consultants, Ahmedabad — Founder Hiren J. Shah, Structural Engineer Grade 1. Architecture, Structure and Infrastructure coordinated Before Issue.",
};

/**
 * Founder About marks:
 * - No BG photo on hero
 * - Shaping form, defining futures + large heading
 * - One paragraph
 * - No stats strip under hero
 * - Vision / Mission / Values after
 * - Why choose = VMS accordion + people visual (HumanValuesPanel)
 * - Hiren only, no practice-lead cards
 */
export default function AboutPage() {
  const founder = leadership.find((p) => p.featured);

  return (
    <>
      <section className="border-b border-line bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.28em] text-x-red">
            {aboutPage.tagline}
          </p>
          <h1
            className="mt-4 max-w-[14ch] font-display font-black uppercase leading-[1.02] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Where Vision Takes Form
          </h1>
          <p className="mt-8 max-w-[38ch] text-[17px] leading-[1.9] text-ink-muted">
            {aboutPage.intro}
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Vision · Mission · Values
            </p>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
            {aboutPage.principles.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                  0{i + 1}
                </span>
                <h2 className="mt-3 font-display text-xl font-extrabold uppercase text-ink">
                  {p.title}
                </h2>
                <p className="mt-4 text-[14px] leading-[1.85] text-ink-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-[#fafafa] py-20 md:py-28">
        <Container>
          <HumanValuesPanel />
          <BrochureCta className="mt-14" />
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              {formxMethod.code}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              {formxMethod.name}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
              {formxMethod.belief}
            </p>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {formxMethod.stages.map((s) => (
              <div
                key={s.id}
                className="border border-line bg-white px-5 py-4"
              >
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                  {s.num}
                </p>
                <p className="mt-1 font-display text-sm font-extrabold uppercase tracking-tight text-ink">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/#before-issue"
            transitionTypes={["nav-forward"]}
            className="mt-10 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
          >
            See it on the homepage
            <ArrowRight className="size-4" />
          </Link>
        </Container>
      </section>

      {founder ? (
        <section className="bg-white py-20 md:py-28">
          <Container>
            <Reveal>
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Leadership
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                Partners close to the work
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
                Led by Founder &amp; Managing Partner {founder.name} — structural designer,
                architecture planning &amp; site execution.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-5">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111]">
                  <AssetImage
                    alt={founder.name}
                    slot={founder.asset}
                    kind="team"
                    fit="cover"
                    aspect="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08} className="flex flex-col justify-center lg:col-span-7">
                <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                  {founder.name}
                </h3>
                <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/45">
                  {founder.role} · Structural Engineer — Grade 1 (AMC / BMC)
                </p>
                <p className="mt-6 text-[15px] leading-[1.85] text-ink-muted">{founder.bio}</p>
                <dl className="mt-8 space-y-6 border-t border-line pt-8">
                  <div>
                    <dt className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
                      What he reviews
                    </dt>
                    <dd className="mt-2 text-[14px] leading-[1.85] text-ink-muted">
                      {hirenJudgement.reviews}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
                      What he refuses
                    </dt>
                    <dd className="mt-2 text-[14px] leading-[1.85] text-ink-muted">
                      {hirenJudgement.refuses}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
                      Before issue
                    </dt>
                    <dd className="mt-2 text-[14px] leading-[1.85] text-ink-muted">
                      {hirenJudgement.expects}
                    </dd>
                  </div>
                </dl>
                {founder.linkedin ? (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
                  >
                    Connect on LinkedIn →
                  </a>
                ) : null}
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-line bg-white py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Invitation
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Discuss your next project
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
              Share location, facility type and timeline. We look forward to collaborating.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white hover:bg-x-red-hover"
            >
              Talk to our engineering team
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
