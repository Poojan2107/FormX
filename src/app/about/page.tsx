import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod, hirenJudgement } from "@/data/method";
import { leadership } from "@/data/content";
import { aboutPage, trustMetrics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
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
      {/* ── Hero: copy + metrics + structural photo (home craft) ─ */}
      <section className="relative overflow-hidden border-b border-ink/[0.06] bg-[#fafaf8] pt-28 pb-0 md:pt-32">
        <span aria-hidden className="absolute left-0 top-0 z-10 h-[3px] w-28 bg-x-red" />
        <Container className="pb-14 md:pb-16">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-5">
              <Reveal>
                <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                  About · {aboutPage.tagline}
                </p>
                <h1
                  className="mt-5 font-display font-black leading-[1.02] tracking-[-0.045em] text-ink"
                  style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.35rem)" }}
                >
                  The studio behind drawings that hold up on site.
                </h1>
                <p className="mt-6 text-[15px] leading-[1.85] text-ink/60 md:text-[15.5px]">
                  {aboutPage.intro}
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <dl className="mt-10 flex w-full border-t border-ink/[0.08] pt-7">
                  {trustMetrics.map((m, i) => (
                    <div
                      key={m.label}
                      className={`flex min-w-0 flex-1 flex-col ${
                        i === 0
                          ? "pr-4"
                          : i === trustMetrics.length - 1
                            ? "border-l border-ink/[0.08] pl-4"
                            : "border-l border-ink/[0.08] px-4"
                      }`}
                    >
                      <dt className="sr-only">{m.label}</dt>
                      <dd className="font-display text-[1.3rem] font-black leading-none tracking-[-0.03em] text-ink sm:text-[1.45rem]">
                        {m.value}
                      </dd>
                      <span aria-hidden className="mt-3 block h-[2px] w-6 bg-x-red" />
                      <p className="mt-2.5 font-label text-[8px] uppercase leading-[1.3] tracking-[0.12em] text-ink/45 sm:text-[9px]">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal from="right" delay={0.06} className="lg:col-span-7">
              <div className="formx-cut relative aspect-[4/3] overflow-hidden bg-[#111] lg:aspect-auto lg:h-full lg:min-h-[520px]">
                <Image
                  src="/assets/services/structural-02.jpg"
                  alt="Structural steel frame — FormX engineering"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                  <p className="font-label text-[10px] uppercase tracking-[0.28em] text-white/70">
                    Studio · Practice
                  </p>
                  <p className="mt-2 max-w-[24ch] font-display text-lg font-extrabold leading-snug tracking-tight text-white sm:text-xl">
                    {aboutPage.philosophy}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="absolute left-0 top-0 z-10 h-[3px] w-16 bg-x-red sm:w-20"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Principles: manifesto rows with ghost numbers ─────── */}
      <section className="border-b border-ink/[0.08] bg-white py-0">
        <Container className="pt-14 md:pt-16">
          <Reveal>
            <div className="mb-2 max-w-[40ch]">
              <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                Vision · Mission · Values
              </p>
              <h2
                className="mt-3 font-display font-extrabold tracking-tight text-ink"
                style={{ fontSize: "clamp(1.55rem, 2.8vw, 2.2rem)" }}
              >
                Judgement, coordination, and accountability.
              </h2>
            </div>
          </Reveal>
        </Container>

        <ol className="mt-8 border-t border-ink/[0.08]">
          {aboutPage.principles.map((p, i) => (
            <Reveal key={p.title} delay={0.04 * i}>
              <li className="group relative border-b border-ink/[0.08] transition-colors hover:bg-[#fafaf8]">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-x-red transition-transform duration-500 group-hover:scale-y-100"
                />
                <Container>
                  <div className="grid items-center gap-4 py-8 md:grid-cols-[7rem_minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-8 md:py-10">
                    <span
                      aria-hidden
                      className="select-none font-display font-black leading-none text-ink/[0.06] transition-colors group-hover:text-x-red/20"
                      style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                      {p.title.replace(/^Our\s+/, "")}
                    </h3>
                    <p className="text-[15px] leading-[1.85] text-ink/58 md:text-[15.5px]">
                      {p.body}
                    </p>
                  </div>
                </Container>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ── Studio: full-bleed photo band + points ───────────── */}
      <section className="border-b border-ink/[0.08] bg-[#f4f3f0]">
        <div className="relative">
          <div className="relative aspect-[21/9] min-h-[280px] overflow-hidden md:min-h-[360px] lg:aspect-[2.4/1]">
            <AssetImage
              alt="FormX studio — coordination before issue"
              slot="about/studio-cover.jpg"
              kind="studio"
              fit="cover"
              aspect="auto"
              objectPosition="center"
              className="absolute inset-0 h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/20" />
            <Container className="relative z-10 flex h-full min-h-[280px] items-end py-10 md:min-h-[360px] md:py-12">
              <div className="max-w-[28ch]">
                <p className="font-label text-[10px] uppercase tracking-[0.28em] text-x-red">
                  Studio practice
                </p>
                <h2
                  className="mt-3 font-display font-extrabold leading-[1.05] tracking-tight text-white"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  Reviews, coordination, and issue — held in one room.
                </h2>
              </div>
            </Container>
          </div>

          <Container className="py-10 md:py-12">
            <ul className="grid gap-px bg-ink/[0.08] sm:grid-cols-2 lg:grid-cols-4">
              {aboutPage.collaborationPoints.map((point, i) => (
                <li key={point} className="flex gap-3 bg-white p-5 md:p-6">
                  <span className="font-label text-[10px] tracking-[0.18em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] font-medium leading-[1.5] text-ink/75">{point}</span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* ── One dark chapter: method rail → Hiren ────────────── */}
      <section className="bg-[#0a0a0a] text-white">
        <Container className="border-b border-white/10 py-14 md:py-16">
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
              <p className="max-w-[40ch] text-[14.5px] leading-[1.8] text-white/48 md:pb-1">
                {formxMethod.belief}
              </p>
            </div>
          </Reveal>

          <ol className="grid gap-0 border border-white/10 sm:grid-cols-5">
            {formxMethod.stages.map((s, i) => (
              <li
                key={s.id}
                className={`relative overflow-hidden bg-white/[0.02] px-4 py-6 transition-colors hover:bg-white/[0.05] ${
                  i < formxMethod.stages.length - 1 ? "sm:border-r sm:border-white/10" : ""
                } border-b border-white/10 sm:border-b-0`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-2 select-none font-display text-[4rem] font-black leading-none text-white/[0.04]"
                >
                  {s.num}
                </span>
                <p className="relative font-label text-[10px] tracking-[0.22em] text-x-red">
                  {s.num}
                </p>
                <p className="relative mt-3 font-display text-[1.1rem] font-extrabold tracking-tight">
                  {s.title}
                </p>
                <p className="relative mt-2 text-[12.5px] leading-[1.65] text-white/40">
                  {s.verb}
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/#pillars"
            transitionTypes={["nav-forward"]}
            className="mt-8 inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-x-red transition-colors hover:text-white"
          >
            See the Form<span className="text-x-red">X</span> way on the homepage
            <ArrowRight className="size-3.5" />
          </Link>
        </Container>

        {founder ? (
          <Container className="py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-5">
                <div className="formx-cut relative aspect-[4/5] overflow-hidden bg-[#131312]">
                  <AssetImage
                    alt={founder.name}
                    slot={founder.asset}
                    kind="team"
                    fit="cover"
                    aspect="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 z-10 h-[3px] w-16 bg-x-red"
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
        ) : null}
      </section>

      {/* ── Close: one cream band ────────────────────────────── */}
      <section className="bg-[#fafaf8] py-14 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-5">
              <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                Invitation
              </p>
              <h2
                className="mt-3 max-w-[14ch] font-display font-extrabold leading-[1.02] tracking-tight text-ink"
                style={{ fontSize: "clamp(1.65rem, 3vw, 2.35rem)" }}
              >
                Discuss your next facility
              </h2>
              <p className="mt-4 max-w-[40ch] text-[14.5px] leading-[1.8] text-ink/55">
                Share the facility type, location, and constraints. We&apos;ll start with what needs
                to be resolved before issue.
              </p>
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary mt-6 inline-flex items-center gap-3"
              >
                Enquire Now
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <BrochureCta />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
