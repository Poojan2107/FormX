import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod, hirenJudgement } from "@/data/method";
import { leadership } from "@/data/content";
import { aboutPage } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About FORM× Consultants, Ahmedabad — Founder Hiren J. Shah. Architecture, Structure and Infrastructure coordinated Before × Issue.",
};

export default function AboutPage() {
  const founder = leadership.find((p) => p.featured);

  return (
    <>
      {/* Hero — split studio */}
      <section className="overflow-hidden border-b border-line bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] bg-[#111] lg:min-h-[640px]">
            <AssetImage
              slot="about/studio-cover.jpg"
              alt="FormX studio coordination"
              kind="studio"
              fit="cover"
              aspect="auto"
              priority
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p className="font-label text-[10px] tracking-[0.28em] text-x-red">
                FORM× · Ahmedabad
              </p>
              <p className="mt-2 max-w-[20ch] font-display text-2xl font-extrabold tracking-tight text-white">
                Judgement stays close to the work.
              </p>
            </div>
            <span aria-hidden className="absolute left-0 top-0 h-[3px] w-24 bg-x-red" />
          </div>

          <div className="flex flex-col justify-center px-8 py-16 sm:px-12 md:px-14 lg:py-24 xl:px-16">
            <p className="eyebrow text-x-red">{aboutPage.tagline}</p>
            <h1
              className="mt-5 max-w-[16ch] font-display font-black leading-[0.98] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              The studio behind drawings that hold up on site.
            </h1>
            <p className="fx-read mt-7 text-[16px] text-ink/65 md:text-[17px]">
              {aboutPage.intro}
            </p>
            <p className="fx-read mt-5 text-[15px] text-ink/50">
              {aboutPage.philosophy}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/[0.08] pt-6">
              <span className="font-label text-[10px] tracking-[0.2em] text-x-red">
                Architecture
              </span>
              <span className="font-display text-x-red/40">×</span>
              <span className="font-label text-[10px] tracking-[0.2em] text-x-red">
                Structure
              </span>
              <span className="font-display text-x-red/40">×</span>
              <span className="font-label text-[10px] tracking-[0.2em] text-x-red">
                Infrastructure
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Principles — manifesto bands */}
      <section className="border-b border-line bg-[#fafaf8] section-y">
        <Container>
          <Reveal>
            <p className="eyebrow text-x-red">Vision · Mission · Values</p>
            <h2
              className="mt-4 max-w-[20ch] font-display font-extrabold tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 3.5vw, 3rem)" }}
            >
              How FormX reads a facility before anything is issued.
            </h2>
          </Reveal>
          <ol className="mt-12 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
            {aboutPage.principles.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <li className="grid gap-4 py-8 md:grid-cols-[5rem_minmax(200px,280px)_minmax(0,1fr)] md:items-start md:gap-10 md:py-10">
                  <span className="font-display text-3xl font-black text-x-red/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="text-[15.5px] leading-[1.9] text-ink/58">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Before × Issue */}
      <section className="fx-grain border-b border-black bg-[#0a0a09] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">{formxMethod.code}</p>
              <h2
                className="mt-4 font-display font-black leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                Before <span className="text-x-red">×</span> Issue
              </h2>
            </div>
            <p className="fx-read-wide text-[16px] text-white/55">{formxMethod.belief}</p>
          </div>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {formxMethod.stages.map((s, i) => (
              <Reveal key={s.id} delay={0.04 * i} className="h-full">
                <div className="flex h-full flex-col bg-[#0a0a09] px-5 py-6">
                  <p className="font-label text-[10px] tracking-[0.22em] text-x-red">{s.num}</p>
                  <p className="mt-3 font-display text-lg font-extrabold tracking-tight">
                    {s.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.7] text-white/45">{s.verb}</p>
                  <p className="mt-4 flex-1 text-[13px] leading-[1.75] text-white/60">
                    {s.decision}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 font-label text-[10px] tracking-[0.2em] text-white/30">
            {formxMethod.stamp}
          </p>
        </Container>
      </section>

      {/* Founder */}
      {founder ? (
        <section className="border-b border-line bg-white section-y">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <div className="relative overflow-hidden border border-ink/[0.08] bg-[#111] p-3">
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
                <p className="eyebrow text-x-red">Founder & Managing Partner</p>
                <h2
                  className="mt-4 font-display font-extrabold leading-[0.98] tracking-tight text-ink"
                  style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
                >
                  {founder.name}
                </h2>
                <p className="mt-3 text-[13px] uppercase tracking-[0.14em] text-ink/40">
                  Structural Engineer, Grade 1 (AMC / BMC)
                </p>
                <p className="mt-8 measure-essay text-[17px] leading-[1.9] text-ink/65">
                  {founder.bio}
                </p>
                <dl className="mt-10 space-y-6 border-t border-ink/[0.08] pt-8">
                  {(
                    [
                      ["What he reviews", hirenJudgement.reviews],
                      ["What he refuses", hirenJudgement.refuses],
                      ["Before issue", hirenJudgement.expects],
                    ] as const
                  ).map(([label, body]) => (
                    <div key={label}>
                      <dt className="eyebrow text-x-red">{label}</dt>
                      <dd className="mt-2 text-[15px] leading-[1.85] text-ink/55">{body}</dd>
                    </div>
                  ))}
                </dl>
                {founder.linkedin ? (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex font-label text-[11px] tracking-[0.16em] text-x-red transition-colors hover:text-ink"
                  >
                    Connect on LinkedIn →
                  </a>
                ) : null}
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Behaviours — compact */}
      <section className="border-b border-line bg-[#f7f6f2] section-y">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <p className="eyebrow text-x-red">Studio behaviours</p>
              <h2
                className="mt-4 max-w-[14ch] font-display font-extrabold tracking-tight text-ink"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
              >
                How the work actually runs.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-ink/55">
                Not culture posters — the behaviours that shape reviews, coordination, and issue.
              </p>
              <ul className="mt-8 space-y-3">
                {aboutPage.collaborationPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-[14px] font-medium text-ink"
                  >
                    <span className="size-1.5 shrink-0 rotate-45 bg-x-red" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <ol className="divide-y divide-ink/[0.08] border border-ink/[0.08] bg-white">
              {aboutPage.humanValues.map((item, i) => (
                <li key={item.title} className="grid gap-2 px-6 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-5">
                  <span className="font-label text-[10px] tracking-[0.2em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.05rem] font-bold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.85] text-ink/55">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Invitation */}
      <section className="bg-white section-y">
        <Container>
          <div className="grid gap-8 border border-ink/[0.08] bg-[#fafaf8] p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14 md:p-12">
            <div>
              <p className="eyebrow text-x-red">Invitation</p>
              <h2
                className="mt-4 max-w-[14ch] font-display font-extrabold tracking-tight text-ink"
                style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)" }}
              >
                Discuss your next facility
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.9] text-ink/55">
                Share facility type, location, and constraints. We start with what must be resolved
                before issue — not presentation theatre.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary inline-flex items-center gap-3"
              >
                Enquire Now
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/projects"
                transitionTypes={["nav-forward"]}
                className="fx-btn-ghost inline-flex"
              >
                View projects
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
