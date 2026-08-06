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
      {/* ── Hero — single dense composition ──────────────────── */}
      <section className="relative overflow-hidden border-b border-ink/[0.08] bg-white pt-28 pb-14 md:pt-32 md:pb-16">
        <span aria-hidden className="absolute left-0 top-0 h-[3px] w-28 bg-x-red" />
        <Container>
          <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
            About · {aboutPage.tagline}
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-end">
            <h1
              className="max-w-[15ch] font-display font-black leading-[0.98] tracking-[-0.05em] text-ink lg:col-span-7"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)" }}
            >
              The studio behind drawings that hold up on site.
            </h1>
            <div className="lg:col-span-5 lg:pb-1">
              <p className="text-[15.5px] leading-[1.85] text-ink/62 md:text-[16px]">
                {aboutPage.intro}
              </p>
              <p className="mt-4 border-l-2 border-x-red pl-4 text-[14.5px] leading-[1.8] text-ink/50">
                {aboutPage.philosophy}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Principles — three filled columns, no dead middle ── */}
      <section className="border-b border-ink/[0.08] bg-[#f4f3f0] py-14 md:py-16">
        <Container>
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-10">
              <div>
                <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                  Vision · Mission · Values
                </p>
                <h2
                  className="mt-3 max-w-[20ch] font-display font-extrabold tracking-tight text-ink"
                  style={{ fontSize: "clamp(1.55rem, 2.8vw, 2.25rem)" }}
                >
                  Judgement, coordination, and accountability.
                </h2>
              </div>
              <p className="max-w-[36ch] text-[14.5px] leading-[1.8] text-ink/52 md:pb-0.5">
                How Form<span className="text-x-red">X</span> reads a facility before anything is
                issued.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-px bg-ink/[0.08] md:grid-cols-3">
            {aboutPage.principles.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i} className="h-full">
                <article className="flex h-full flex-col bg-[#f4f3f0] p-6 md:bg-white md:p-7 lg:p-8">
                  <span className="font-label text-[11px] tracking-[0.22em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight text-ink lg:text-[1.35rem]">
                    {p.title.replace(/^Our\s+/, "")}
                  </h3>
                  <p className="mt-4 flex-1 text-[14.5px] leading-[1.8] text-ink/58">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Studio evidence ──────────────────────────────────── */}
      <section className="border-b border-ink/[0.08] bg-white py-14 md:py-16">
        <Container>
          <Reveal>
            <StudioEvidence />
          </Reveal>
        </Container>
      </section>

      {/* ── Method — dark presence, not a thin cream strip ───── */}
      <section className="border-b border-black bg-[#0a0a0a] py-14 text-white md:py-16">
        <Container>
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-12">
              <div>
                <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                  {formxMethod.code}
                </p>
                <h2
                  className="mt-3 font-display font-extrabold leading-[0.98] tracking-tight"
                  style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)" }}
                >
                  Before <span className="text-x-red">×</span> Issue
                </h2>
              </div>
              <p className="max-w-[42ch] text-[14.5px] leading-[1.8] text-white/50 md:pb-1">
                {formxMethod.belief}
              </p>
            </div>
          </Reveal>

          <ol className="grid gap-0 border-y border-white/10 sm:grid-cols-5">
            {formxMethod.stages.map((s, i) => (
              <Reveal key={s.id} delay={0.04 * i}>
                <li
                  className={`px-4 py-6 ${
                    i < formxMethod.stages.length - 1 ? "sm:border-r sm:border-white/10" : ""
                  } border-b border-white/10 sm:border-b-0`}
                >
                  <p className="font-label text-[10px] tracking-[0.22em] text-x-red">{s.num}</p>
                  <p className="mt-3 font-display text-[1.1rem] font-extrabold tracking-tight">
                    {s.title}
                  </p>
                  <p className="mt-2 text-[12.5px] leading-[1.65] text-white/42">{s.verb}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.18}>
            <Link
              href="/#pillars"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-x-red transition-colors hover:text-white"
            >
              See the Form<span className="text-x-red">X</span> way on the homepage
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ── Hiren ────────────────────────────────────────────── */}
      {founder ? (
        <section className="fx-grain border-b border-black bg-[#111111] py-16 text-white md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
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
                <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                  Founder
                </p>
                <h2
                  className="mt-3 font-display font-extrabold leading-[0.98] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)" }}
                >
                  {founder.name}
                </h2>
                <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-white/40">
                  {founder.role} · Structural Engineer, Grade 1 (AMC / BMC)
                </p>
                <p className="mt-7 max-w-[48ch] text-[15.5px] leading-[1.85] text-white/65">
                  {founder.bio}
                </p>
                <dl className="mt-8 space-y-5 border-t border-white/10 pt-7">
                  <div>
                    <dt className="font-label text-[10px] uppercase tracking-[0.22em] text-x-red">
                      What he reviews
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] leading-[1.8] text-white/50">
                      {hirenJudgement.reviews}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-label text-[10px] uppercase tracking-[0.22em] text-x-red">
                      What he refuses
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] leading-[1.8] text-white/50">
                      {hirenJudgement.refuses}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-label text-[10px] uppercase tracking-[0.22em] text-x-red">
                      Before issue
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] leading-[1.8] text-white/50">
                      {hirenJudgement.expects}
                    </dd>
                  </div>
                </dl>
                {founder.linkedin ? (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-x-red transition-colors hover:text-white"
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

      {/* ── Close ────────────────────────────────────────────── */}
      <section className="bg-[#f4f3f0] py-14 md:py-16">
        <Container>
          <div className="grid gap-6 border border-ink/[0.08] bg-white p-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-10 md:p-8 lg:p-10">
            <div>
              <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                Invitation
              </p>
              <h2
                className="mt-3 max-w-[14ch] font-display font-extrabold leading-[1.02] tracking-tight text-ink"
                style={{ fontSize: "clamp(1.65rem, 3vw, 2.35rem)" }}
              >
                Discuss your next facility
              </h2>
            </div>
            <div>
              <p className="text-[14.5px] leading-[1.8] text-ink/55">
                Share the facility type, location, and constraints. We&apos;ll start with what needs
                to be resolved before issue.
              </p>
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary mt-5 inline-flex items-center gap-3"
              >
                Enquire Now
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <BrochureCta className="mt-5" />
        </Container>
      </section>
    </>
  );
}
