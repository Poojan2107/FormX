import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod, hirenJudgement } from "@/data/method";
import { leadership } from "@/data/content";
import { aboutPage } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { BrochureCta } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "About Us | Before Issue | FORMX Consultants",
  description:
    "FORMX Before Issue — how Hiren J. Shah reviews work. Architecture, Structure and Infrastructure coordinated before drawings leave the studio.",
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
            A practice that refuses late coordination
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            {aboutPage.intro}
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
            {formxMethod.belief}
          </p>
        </Container>
      </section>

      <section className="bg-[#0d0d0d] py-20 text-white md:py-28">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              {formxMethod.code}
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              {formxMethod.name}
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-white/60">
              {formxMethod.promise}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 border-t border-white/10 pt-12 sm:grid-cols-5">
            {formxMethod.stages.map((s, i) => (
              <Reveal key={s.id} delay={0.04 * i}>
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                  {s.num}
                </p>
                <p className="mt-2 font-display text-lg font-extrabold uppercase tracking-tight">
                  {s.title}
                </p>
                <p className="mt-2 text-[12px] leading-[1.7] text-white/50">{s.verb}</p>
              </Reveal>
            ))}
          </div>
          <Link
            href="/#before-issue"
            transitionTypes={["nav-forward"]}
            className="mt-12 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
          >
            Walk the method
            <ArrowRight className="size-4" />
          </Link>
        </Container>
      </section>

      {founder ? (
        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
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
                  Desk · Markup · Meeting · Site
                </p>
              </Reveal>
              <Reveal delay={0.06} className="lg:col-span-7">
                <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                  How judgements get made
                </p>
                <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                  {founder.name}
                </h2>
                <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/45">
                  {founder.role} · Structural Engineer — Grade 1 (AMC / BMC)
                </p>
                <p className="mt-6 text-[15px] leading-[1.85] text-ink-muted">{founder.bio}</p>

                <dl className="mt-10 space-y-8 border-t border-line pt-10">
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
                      What he expects before issue
                    </dt>
                    <dd className="mt-2 text-[14px] leading-[1.85] text-ink-muted">
                      {hirenJudgement.expects}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
                      How success is defined
                    </dt>
                    <dd className="mt-2 text-[14px] leading-[1.85] text-ink-muted">
                      {hirenJudgement.success}
                    </dd>
                  </div>
                </dl>

                {founder.linkedin ? (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
                  >
                    Connect on LinkedIn →
                  </a>
                ) : null}
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-y border-line bg-[#fafafa] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6">
              <VisualFrame
                slot="about/studio-cover.jpg"
                alt="FORMX studio"
                fit="cover"
                aspect="landscape"
                tone="dark"
              />
            </Reveal>
            <Reveal delay={0.06} className="lg:col-span-6">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                People close to the work
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink">
                One practice — not disconnected specialists
              </h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-ink-muted">
                {aboutPage.collaboration}
              </p>
              <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
                Human-centric. Integrated. Accountable through execution. The values only matter if
                they show up in reviews before issue.
              </p>
              <BrochureCta className="mt-10" />
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
              Bring us the constraints — not a wish list of sheets
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
              Share location, facility type and timeline. We apply Before Issue from the first
              conversation.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white hover:bg-x-red-hover"
            >
              Talk to the engineering team
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
