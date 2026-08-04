import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPage } from "@/data/site";
import { leadership } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { HumanValuesPanel } from "@/components/about/HumanValuesPanel";
import { BrochureCta } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "About Us | FORMX Consultants",
  description:
    "Meet the FORMX practice — Architecture, Structure and Infrastructure led by people close to the work. Ahmedabad.",
};

/** V3 About — practice monograph: philosophy → people → culture → invitation */
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
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
            FORMX is a practice — not a catalogue of departments. Projects are led by engineers who
            stay in reviews, markups and site walks until the facility matches intent.
          </p>
        </Container>
      </section>

      <section className="bg-[#0d0d0d] py-20 text-white md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Why this practice exists
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              Coordination after issue is already too late
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="text-[16px] leading-[1.9] text-white/70">{aboutPage.philosophy}</p>
            <p className="mt-5 text-[15px] leading-[1.85] text-white/55">
              Industrial projects become expensive when Architecture, Structure and Infrastructure
              begin coordinating after drawings have already been issued. We exist so those
              disciplines answer together — from concept through site execution — with technical
              proficiency and practical wisdom.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Principles we work by
            </p>
            <p className="mt-3 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
              Not slogans — behaviours that show up in drawing reviews and on site.
            </p>
          </Reveal>
          <div className="mt-12 space-y-12 md:space-y-14">
            {aboutPage.principles.map((p, i) => (
              <Reveal key={p.title} delay={0.04 * i}>
                <div className="grid gap-4 border-t border-line pt-10 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-4">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                      0{i + 1}
                    </span>
                    <h2 className="mt-2 font-display text-xl font-extrabold uppercase text-ink md:text-2xl">
                      {p.title}
                    </h2>
                  </div>
                  <p className="md:col-span-8 text-[15px] leading-[1.9] text-ink-muted">{p.body}</p>
                </div>
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
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                Responsibility before biography
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
                Led by Founder &amp; Managing Partner {founder.name} — structural designer,
                architecture planning and site execution. Grade 1 Structural Engineer (AMC / BMC).
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
                <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                  Desk reviews · coordination meetings · site walks · drawing markups
                </p>
              </Reveal>
              <Reveal delay={0.08} className="flex flex-col justify-center lg:col-span-7">
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
                  {founder.name}
                </h3>
                <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/45">
                  {founder.role} · Structural Engineer — Grade 1 (AMC / BMC)
                </p>
                <p className="mt-6 text-[15px] leading-[1.85] text-ink-muted">{founder.bio}</p>

                <div className="mt-8 space-y-5 border-t border-line pt-8">
                  <p className="text-[14px] leading-[1.85] text-ink-muted">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                      What he reviews ·{" "}
                    </span>
                    Load paths, PEB/RCC interfaces, constructability of details before issue, and
                    whether Architecture and Infrastructure still agree with the structural grid.
                  </p>
                  <p className="text-[14px] leading-[1.85] text-ink-muted">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                      How success is defined ·{" "}
                    </span>
                    Drawings that answer questions before construction begins — not sheet volume, not
                    presentation alone.
                  </p>
                  <p className="text-[14px] leading-[1.85] text-ink-muted">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                      What he expects before issue ·{" "}
                    </span>
                    Clear ownership of interfaces. Multidisciplinary review closed. Details
                    contractors can build without inventing answers on site.
                  </p>
                </div>

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

      <section className="border-y border-line bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <Reveal className="lg:col-span-6">
              <VisualFrame
                slot="about/studio-cover.jpg"
                alt="FORMX studio coordination"
                fit="cover"
                aspect="landscape"
                tone="dark"
                caption="How Architecture, Structure and Infrastructure meet in the studio"
              />
            </Reveal>
            <Reveal delay={0.06} className="lg:col-span-6">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Practice culture
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                One practice — not disconnected specialists
              </h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-ink-muted">
                {aboutPage.collaboration}
              </p>
              <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
                {aboutPage.studioFlow}
              </p>
              <Link
                href="/services"
                transitionTypes={["nav-forward"]}
                className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
              >
                How disciplines think
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Invitation
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Let&apos;s discuss your next project
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
              Share location, facility type and timeline. We look forward to collaborating — and to
              understanding constraints before we propose solutions.
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
