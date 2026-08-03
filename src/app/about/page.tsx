import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPage } from "@/data/site";
import { leadership } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { HumanValuesPanel } from "@/components/about/HumanValuesPanel";
import { BrochureCta } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "About Us | FORMX Consultants",
  description:
    "FORMX Consultants — Architecture, Structure and Infrastructure. Where Vision Takes Form. Ahmedabad.",
};

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
            className="mt-4 max-w-4xl font-display font-black uppercase leading-[1.02] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}
          >
            Where Vision Takes Form
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
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
          <div className="mt-10 grid gap-10 md:grid-cols-3">
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

      {founder ? (
        <section className="border-t border-line bg-white py-20 md:py-28">
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
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
                  {founder.name}
                </h3>
                <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/45">
                  {founder.role} · Structural Engineer — Grade 1 (AMC / BMC)
                </p>
                <p className="mt-6 text-[15px] leading-[1.85] text-ink-muted">{founder.bio}</p>
                {founder.highlights?.length ? (
                  <ul className="mt-6 space-y-2">
                    {founder.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-[14px] text-ink">
                        <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red" />
                        {h}
                      </li>
                    ))}
                  </ul>
                ) : null}
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

      <section className="border-y border-line bg-[#0d0d0d] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Architecture · Structure · Infrastructure
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              How we deliver
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="text-[16px] leading-[1.9] text-white/75">{aboutPage.collaboration}</p>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
            >
              Explore services
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Invitation
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Discuss your next project
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
              Share location, facility type and timeline. We look forward to collaborating on your
              next project.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-x-red-hover"
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
