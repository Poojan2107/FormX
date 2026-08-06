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
  title: "About Us",
  description:
    "About FORM× Consultants, Ahmedabad — Founder Hiren J. Shah. Architecture, Structure and Infrastructure coordinated Before × Issue.",
};

export default function AboutPage() {
  const founder = leadership.find((p) => p.featured);

  return (
    <>
      <section className="fx-grain border-b border-line bg-bg pt-28 pb-20 md:pt-36 md:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">{aboutPage.tagline}</p>
              <h1
                className="editorial-title mt-5 max-w-[18ch] text-ink"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                The studio behind drawings that hold up on site.
              </h1>
            </div>
            <div>
              <p className="editorial-deck measure-essay">{aboutPage.intro}</p>
              <p className="editorial-body mt-5 measure-essay">{aboutPage.philosophy}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-bg section-y">
        <Container>
          <Reveal>
            <div className="grid gap-6 border-b border-line pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12">
              <div>
                <p className="eyebrow text-x-red">Vision · Mission · Values</p>
                <h2
                  className="mt-4 max-w-[18ch] font-display font-extrabold tracking-tight text-ink"
                  style={{ fontSize: "clamp(1.85rem, 3.5vw, 3rem)" }}
                >
                  A practice built on judgement, coordination, and accountability.
                </h2>
              </div>
              <p className="text-[15.5px] leading-[1.9] text-ink-muted lg:pb-1">
                Three principles that govern how FormX reads a facility before anything is issued.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3 md:gap-5">
            {aboutPage.principles.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i} className="h-full">
                <div className="x-corner group flex h-full flex-col border border-line bg-white px-6 py-7">
                  <span className="editorial-meta text-x-red">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[15.5px] leading-[1.9] text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-bg-muted section-y">
        <Container>
          <HumanValuesPanel />
          <BrochureCta className="mt-14" />
        </Container>
      </section>

      <section className="border-b border-line bg-bg section-y">
        <Container>
          <Reveal>
            <div className="grid gap-6 border-b border-line pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
              <div>
                <p className="eyebrow text-x-red">{formxMethod.code}</p>
                <h2
                  className="mt-4 max-w-[14ch] font-display font-extrabold leading-[0.98] tracking-tight text-ink"
                  style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)" }}
                >
                  Before <span className="text-x-red">×</span> Issue
                </h2>
              </div>
              <p className="text-[16px] leading-[1.9] text-ink-muted lg:pb-1">
                {formxMethod.belief}
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:items-stretch lg:grid-cols-5">
            {formxMethod.stages.map((s, i) => (
              <Reveal key={s.id} delay={0.04 * i} className="h-full">
                <div className="flex h-full flex-col border border-line bg-white px-5 py-6">
                  <p className="eyebrow text-x-red">{s.num}</p>
                  <p className="mt-3 font-display text-lg font-extrabold tracking-tight text-ink">
                    {s.title}
                  </p>
                  <p className="mt-3 flex-1 text-[13px] leading-[1.75] text-ink/55">{s.verb}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/#pillars"
            transitionTypes={["nav-forward"]}
            className="mt-10 inline-flex items-center gap-2 font-label text-[11px] text-x-red transition-colors hover:text-ink"
          >
            See the FormX way on the homepage
            <ArrowRight className="size-4" />
          </Link>
        </Container>
      </section>

      {founder ? (
        <section className="fx-grain border-b border-black bg-[#0a0a09] py-20 text-white md:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <div className="relative overflow-hidden border border-white/10 bg-[#131312] p-3">
                  <div className="relative aspect-[3/4] overflow-hidden formx-cut-lg">
                    <AssetImage
                      alt={founder.name}
                      slot={founder.asset}
                      kind="team"
                      fit="cover"
                      aspect="auto"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.08} className="flex flex-col justify-center lg:col-span-7">
                <p className="eyebrow text-x-red">Founder</p>
                <h2
                  className="mt-4 font-display font-extrabold leading-[0.98] tracking-tight"
                  style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
                >
                  {founder.name}
                </h2>
                <p className="mt-3 text-[13px] uppercase tracking-[0.14em] text-white/42">
                  {founder.role} · Structural Engineer, Grade 1 (AMC / BMC)
                </p>
                <p className="mt-8 measure-essay text-[17px] leading-[1.9] text-white/68">
                  {founder.bio}
                </p>
                <dl className="mt-10 space-y-6 border-t border-white/10 pt-8">
                  <div>
                    <dt className="eyebrow text-x-red">What he reviews</dt>
                    <dd className="mt-2 text-[15px] leading-[1.85] text-white/54">
                      {hirenJudgement.reviews}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-x-red">What he refuses</dt>
                    <dd className="mt-2 text-[15px] leading-[1.85] text-white/54">
                      {hirenJudgement.refuses}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-x-red">Before issue</dt>
                    <dd className="mt-2 text-[15px] leading-[1.85] text-white/54">
                      {hirenJudgement.expects}
                    </dd>
                  </div>
                </dl>
                {founder.linkedin ? (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex font-label text-[11px] text-x-red transition-colors hover:text-white"
                  >
                    Connect on LinkedIn →
                  </a>
                ) : null}
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-bg section-y">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Invitation</p>
              <h2
                className="mt-4 max-w-[14ch] font-display font-extrabold leading-[0.98] tracking-tight text-ink"
                style={{ fontSize: "clamp(2rem, 4vw, 3.15rem)" }}
              >
                Discuss your next facility
              </h2>
            </div>
            <div>
              <p className="text-[16px] leading-[1.9] text-ink-muted">
                Share the facility type, location, and constraints. We&apos;ll start with what needs
                to be resolved before issue, not with presentation theatre.
              </p>
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary mt-8 inline-flex items-center gap-3"
              >
                Enquire Now
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
