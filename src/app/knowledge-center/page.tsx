import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  portfolioServices,
  portfolioServicesNote,
  portfolioClosing,
  portfolioSpecialized,
  portfolioOngoing,
  brochureVisuals,
  brochureProjects,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

export const metadata: Metadata = {
  title: "Practice Record | Insights",
  description:
    "FORM× practice record — specialised structural work, live mandates and facility typologies from Ahmedabad.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <section className="fx-grain border-b border-black bg-[#0a0a09] pt-28 pb-20 text-white md:pt-36 md:pb-28">
        <Container>
          <p className="eyebrow text-x-red">Practice record</p>
          <h1
            className="mt-5 max-w-[14ch] font-display font-black leading-[0.96] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Notes from the studio
          </h1>
          <p className="mt-8 max-w-[48ch] text-[17px] leading-[1.9] text-white/55 md:text-[18px]">
            Not a marketing journal. Specialised engineering work, live mandates, and facility
            typologies drawn from the FormX brochure.
          </p>
        </Container>
      </section>

      <section className="border-b border-line bg-white section-y">
        <Container>
          <Reveal className="mb-12">
            <div className="formx-cut-lg overflow-hidden border border-ink/[0.08] bg-[#111] p-3">
              <VisualFrame
                slot={brochureVisuals.specializedBanner}
                alt="Structural steel — specialised projects"
                fit="contain"
                aspect="cinema"
                tone="dark"
              />
            </div>
          </Reveal>

          <div className="grid gap-6 border-b border-ink/[0.08] pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow text-x-red">Specialised</p>
              <h2
                className="mt-3 font-display font-extrabold tracking-tight text-ink"
                style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
              >
                Renovation, strengthening &amp; solar
              </h2>
            </div>
            <p className="text-[15px] leading-[1.85] text-ink/55">
              Technical depth beyond standard typologies — the mandates FormX takes when the
              structure already exists or the loading is specialised.
            </p>
          </div>

          <div className="mt-10 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
            {portfolioSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.04 * i}>
                <article className="grid gap-4 py-8 md:grid-cols-[5rem_minmax(200px,280px)_minmax(0,1fr)] md:gap-10">
                  <span className="font-display text-2xl font-black text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                    {block.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14.5px] leading-[1.75] text-ink/58"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-[#f7f6f2] section-y">
        <Container>
          <p className="eyebrow text-x-red">Ongoing</p>
          <h2
            className="mt-3 font-display font-extrabold tracking-tight text-ink"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
          >
            In the studio now
          </h2>
          <div className="relative mt-12 pl-6 md:pl-8">
            <div
              aria-hidden
              className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-x-red via-x-red/40 to-transparent"
            />
            {portfolioOngoing.map((item, i) => (
              <Reveal key={item.title} delay={0.03 * i}>
                <div className="relative pb-10 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[1.55rem] top-1.5 size-2.5 rotate-45 border border-x-red bg-[#f7f6f2] md:-left-[1.8rem]"
                  />
                  {i === 0 ? (
                    <span
                      aria-hidden
                      className="absolute -left-[1.4rem] top-[0.45rem] size-1.5 rotate-45 bg-x-red animate-pulse md:-left-[1.65rem]"
                    />
                  ) : null}
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-[15px] leading-[1.85] text-ink/55">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white section-y">
        <Container>
          <p className="eyebrow text-x-red">Typologies</p>
          <h2
            className="mt-3 max-w-2xl font-display font-extrabold tracking-tight text-ink"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
          >
            Facility thinking
          </h2>
          <p className="mt-4 max-w-[48ch] text-[15px] leading-[1.85] text-ink/55">
            {portfolioServicesNote}
          </p>

          <div className="mt-12 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
            {portfolioServices.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <Link
                  href={item.href}
                  transitionTypes={["nav-forward"]}
                  className="fx-service-row group grid gap-3 px-2 py-8 md:grid-cols-12 md:items-baseline md:px-3 md:py-10"
                >
                  <span className="font-label text-[10px] tracking-[0.18em] text-x-red md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-ink/55 md:col-span-6">
                    {item.body}
                  </p>
                  <span className="hidden justify-end md:col-span-1 md:flex">
                    <ArrowUpRight className="size-5 text-ink/20 transition-colors group-hover:text-x-red" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-[15px] leading-[1.8] text-ink/45">{portfolioClosing}</p>
        </Container>
      </section>

      <section className="fx-grain bg-[#0a0a09] py-20 text-white md:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-x-red">Completed work</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                From the project record
              </h2>
            </div>
            <Link
              href="/projects"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2 font-label text-[11px] tracking-[0.16em] text-x-red"
            >
              All projects
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {brochureProjects.slice(0, 5).map((project, i) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group grid gap-2 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="font-label text-[10px] tracking-[0.16em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-x-red">
                    {project.title}
                  </span>
                  <span className="text-[13px] text-white/40">{project.location}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid gap-8 border border-white/10 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-10">
            <div>
              <p className="eyebrow text-x-red">Next step</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">
                Bring us your next facility
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-white/50">
                Share site constraints and facility type. We start with what must be resolved before
                issue.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary inline-flex justify-center"
              >
                Discuss your facility
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/brochure/formx.pdf"
                className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3.5 font-label text-[10px] tracking-[0.18em] text-white/70 transition-colors hover:border-x-red hover:text-x-red"
              >
                Download brochure
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
