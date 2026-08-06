import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod, hirenJudgement } from "@/data/method";
import { leadership } from "@/data/content";
import { aboutPage } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { StudioEvidence } from "@/components/about/HumanValuesPanel";
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
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="fx-grain border-b border-ink/[0.08] bg-white pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                {aboutPage.tagline}
              </p>
              <h1
                className="mt-5 max-w-[16ch] font-display font-black leading-[1.02] tracking-[-0.045em] text-ink"
                style={{ fontSize: "clamp(2.35rem, 5.2vw, 4rem)" }}
              >
                The studio behind drawings that hold up on site.
              </h1>
            </div>
            <div>
              <p className="text-[15.5px] leading-[1.9] text-ink/60 md:text-[16px]">
                {aboutPage.intro}
              </p>
              <p className="mt-5 text-[15px] leading-[1.9] text-ink/52">
                {aboutPage.philosophy}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Vision · Mission · Values ────────────────────────── */}
      <section className="border-b border-ink/[0.08] bg-[#fafaf8] py-16 md:py-20">
        <Container>
          <Reveal>
            <div className="grid gap-5 border-b border-ink/[0.08] pb-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12">
              <div>
                <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                  Vision · Mission · Values
                </p>
                <h2
                  className="mt-4 max-w-[18ch] font-display font-extrabold tracking-tight text-ink"
                  style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.65rem)" }}
                >
                  A practice built on judgement, coordination, and accountability.
                </h2>
              </div>
              <p className="text-[15px] leading-[1.85] text-ink/55 md:text-[15.5px] lg:pb-1">
                Three principles that govern how Form<span className="text-x-red">X</span> reads a
                facility before anything is issued.
              </p>
            </div>
          </Reveal>

          <ol className="mt-2">
            {aboutPage.principles.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <li className="grid gap-4 border-b border-ink/[0.08] py-8 md:grid-cols-[4.5rem_minmax(0,0.9fr)_minmax(0,1.35fr)] md:items-baseline md:gap-8 md:py-9">
                  <span className="font-label text-[11px] tracking-[0.22em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-[1.85] text-ink/58 md:text-[15.5px]">
                    {p.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Studio evidence ──────────────────────────────────── */}
      <section className="border-b border-ink/[0.08] bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <StudioEvidence />
          </Reveal>
        </Container>
      </section>

      {/* ── Before × Issue — compact strip ───────────────────── */}
      <section className="border-b border-ink/[0.08] bg-[#fafaf8] py-16 md:py-20">
        <Container>
          <Reveal>
            <div className="grid gap-5 border-b border-ink/[0.08] pb-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
              <div>
                <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                  {formxMethod.code}
                </p>
                <h2
                  className="mt-4 max-w-[14ch] font-display font-extrabold leading-[0.98] tracking-tight text-ink"
                  style={{ fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)" }}
                >
                  Before <span className="text-x-red">×</span> Issue
                </h2>
              </div>
              <p className="text-[15px] leading-[1.85] text-ink/55 md:text-[15.5px] lg:pb-1">
                {formxMethod.belief}
              </p>
            </div>
          </Reveal>

          <ol className="mt-10 grid gap-0 border-y border-ink/[0.08] sm:grid-cols-5">
            {formxMethod.stages.map((s, i) => (
              <Reveal key={s.id} delay={0.04 * i}>
                <li
                  className={`border-ink/[0.08] px-4 py-6 ${
                    i < formxMethod.stages.length - 1 ? "sm:border-r" : ""
                  } border-b sm:border-b-0`}
                >
                  <p className="font-label text-[10px] tracking-[0.22em] text-x-red">{s.num}</p>
                  <p className="mt-3 font-display text-[1.05rem] font-extrabold tracking-tight text-ink">
                    {s.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.65] text-ink/50">{s.verb}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.18}>
            <Link
              href="/#pillars"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-x-red transition-colors hover:text-ink"
            >
              See the Form<span className="text-x-red">X</span> way on the homepage
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ── Hiren ────────────────────────────────────────────── */}
      {founder ? (
        <section className="fx-grain border-b border-black bg-[#0a0a0a] py-20 text-white md:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              <Reveal className="lg:col-span-5">
                <div className="relative overflow-hidden border border-white/10 bg-[#131312] p-3">
                  <div className="relative aspect-[3/4] overflow-hidden">
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
                <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                  Founder
                </p>
                <h2
                  className="mt-4 font-display font-extrabold leading-[0.98] tracking-tight"
                  style={{ fontSize: "clamp(2.1rem, 4vw, 3.25rem)" }}
                >
                  {founder.name}
                </h2>
                <p className="mt-3 text-[12.5px] uppercase tracking-[0.16em] text-white/42">
                  {founder.role} · Structural Engineer, Grade 1 (AMC / BMC)
                </p>
                <p className="mt-8 max-w-[52ch] text-[16px] leading-[1.9] text-white/68">
                  {founder.bio}
                </p>
                <dl className="mt-10 space-y-6 border-t border-white/10 pt-8">
                  <div>
                    <dt className="font-label text-[10px] uppercase tracking-[0.22em] text-x-red">
                      What he reviews
                    </dt>
                    <dd className="mt-2 text-[15px] leading-[1.85] text-white/54">
                      {hirenJudgement.reviews}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-label text-[10px] uppercase tracking-[0.22em] text-x-red">
                      What he refuses
                    </dt>
                    <dd className="mt-2 text-[15px] leading-[1.85] text-white/54">
                      {hirenJudgement.refuses}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-label text-[10px] uppercase tracking-[0.22em] text-x-red">
                      Before issue
                    </dt>
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
                    className="mt-8 inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-x-red transition-colors hover:text-white"
                  >
                    Connect on LinkedIn
                    <ArrowRight className="size-3.5" />
                  </a>
                ) : null}
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      {/* ── Close: brochure + enquire ────────────────────────── */}
      <section className="bg-[#fafaf8] py-16 md:py-20">
        <Container>
          <div className="grid gap-8 border-b border-ink/[0.08] pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
            <div>
              <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                Invitation
              </p>
              <h2
                className="mt-4 max-w-[14ch] font-display font-extrabold leading-[0.98] tracking-tight text-ink"
                style={{ fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)" }}
              >
                Discuss your next facility
              </h2>
            </div>
            <div>
              <p className="text-[15px] leading-[1.85] text-ink/55 md:text-[15.5px]">
                Share the facility type, location, and constraints. We&apos;ll start with what needs
                to be resolved before issue, not with presentation theatre.
              </p>
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary mt-7 inline-flex items-center gap-3"
              >
                Enquire Now
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <BrochureCta className="mt-10" />
        </Container>
      </section>
    </>
  );
}
