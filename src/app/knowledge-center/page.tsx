import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  portfolioServices,
  portfolioServicesNote,
  portfolioClosing,
  portfolioSpecialized,
  portfolioOngoing,
  brochureProjects,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

export const metadata: Metadata = {
  title: "Insights | Practice Notes",
  description:
    "FORM× Engineering Journal — specialized structural work, live mandates and practice notes from Ahmedabad.",
};

export default function KnowledgeCenterPage() {
  const record = brochureProjects.slice(0, 4);

  return (
    <>
      {/* Hero — full-width editorial band */}
      <section className="relative border-b border-black bg-[#08080a] pt-28 pb-14 text-white md:pt-32 md:pb-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.32em] text-x-red">
                Insights
              </p>
              <h1
                className="mt-4 font-display font-black leading-[0.95] tracking-[-0.045em] text-white"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
              >
                Notes from the studio
              </h1>
            </div>
            <p className="max-w-none text-[15.5px] leading-[1.8] text-white/58 md:text-[16.5px] lg:col-span-5 lg:pb-1.5">
              Specialized engineering work, ongoing mandates, and facility thinking from the FormX
              practice — renovation, strengthening, and delivery notes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-2 border-t border-white/12 pt-6 sm:gap-4 md:gap-8 lg:mt-14 lg:pt-8">
            {[
              { n: "01", label: "Specialized" },
              { n: "02", label: "Ongoing" },
              { n: "03", label: "Typologies" },
            ].map((item) => (
              <div key={item.n} className="min-w-0">
                <p className="font-label text-[9.5px] font-bold tracking-[0.16em] text-x-red sm:text-[10px] sm:tracking-[0.2em]">
                  {item.n}
                </p>
                <p className="mt-1.5 break-words font-display text-[12px] font-bold tracking-tight text-white/75 sm:text-[14px] md:text-[16px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-bg py-14 md:py-16 lg:py-20">
        <Container>
          <div className="grid items-end gap-6 border-b border-line pb-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="eyebrow text-x-red">Specialized</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Renovation, strengthening &amp; solar
              </h2>
            </div>
            <p className="max-w-[36ch] text-[14.5px] leading-[1.75] text-ink/55 md:col-span-5 md:justify-self-end md:text-right">
              Code-led interventions on existing frames and rooftop solar anchorage — checked before
              site.
            </p>
          </div>

          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 md:gap-6">
            {portfolioSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.04 * i} className="h-full">
                <article className="group flex h-full flex-col border border-line bg-white p-6 transition-all duration-300 hover:border-x-red/40 hover:shadow-[0_16px_48px_-28px_rgba(0,0,0,0.18)] md:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red">
                      {block.title}
                    </h3>
                    <span className="font-label text-[10px] font-bold tracking-[0.18em] text-x-red">
                      0{i + 1}
                    </span>
                  </div>
                  <ul className="mt-5 flex flex-1 flex-col gap-3 border-t border-line pt-5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] leading-[1.75] text-ink-muted"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-x-red" />
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

      <section className="border-b border-line bg-bg-muted py-14 md:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 border-b border-line pb-8 md:grid-cols-12 md:items-end md:gap-10">
            <div className="md:col-span-7">
              <p className="eyebrow text-x-red">Ongoing</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                In the studio now
              </h2>
            </div>
            <p className="text-[14.5px] leading-[1.75] text-ink/50 md:col-span-5 md:text-right">
              Live mandates currently in detailing, coordination, or issue.
            </p>
          </div>

          {/* Mandate cards — stacked briefs, not a directory list */}
          <div className="mt-8 flex flex-col gap-3">
            {portfolioOngoing.map((item, i) => (
              <Reveal key={item.title} delay={0.03 * i}>
                <article className="grid gap-4 border border-line bg-white p-5 md:grid-cols-[4.5rem_1fr] md:gap-6 md:p-6">
                  <div className="flex items-start md:justify-center">
                    <span className="inline-flex min-w-[2.75rem] items-center justify-center bg-x-red px-2 py-1.5 font-label text-[11px] font-bold tracking-[0.14em] text-white">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="min-w-0 border-t border-line pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-[14.5px] leading-[1.75] text-ink-muted md:text-[15px]">
                      {item.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-bg py-14 md:py-16 lg:py-20">
        <Container>
          <p className="eyebrow text-x-red">Practice</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Facility typologies
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.8] text-ink-muted">
            {portfolioServicesNote}
          </p>

          {/* Directory grid — linked typology tiles, distinct from mandate cards above */}
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
            {portfolioServices.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i} className="h-full bg-bg">
                <Link
                  href={item.href}
                  transitionTypes={["nav-forward"]}
                  className="group flex h-full flex-col bg-white p-6 transition-colors duration-300 hover:bg-[#0a0a09] md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-label text-[10px] font-bold tracking-[0.22em] text-x-red">
                      0{i + 1}
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-ink/25 transition-colors group-hover:text-x-red" />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-white md:mt-10 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-[1.75] text-ink-muted transition-colors group-hover:text-white/55 md:text-[15px]">
                    {item.body}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-[14.5px] leading-[1.8] text-ink/45">{portfolioClosing}</p>
        </Container>
      </section>

      <section className="fx-grain bg-[#0a0a09] py-16 text-white md:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-x-red">Completed work</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                From the project record
              </h2>
            </div>
            <Link
              href="/projects"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2 font-label text-[11px] tracking-[0.16em] text-x-red transition-colors hover:text-white"
            >
              All projects
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {/* 2×2 on large screens — larger plates, equal cover crops, aligned captions */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {record.map((project, i) => (
              <Reveal key={project.slug} delay={0.04 * i} className="h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group flex h-full flex-col border border-white/10 bg-white/[0.02] transition-colors hover:border-x-red/50"
                >
                  <VisualFrame
                    slot={project.assets.cover}
                    alt={project.title}
                    fit="cover"
                    aspect="landscape"
                    tone="dark"
                    objectPosition="center center"
                    zoomOnHover
                  />
                  <div className="flex flex-1 flex-col justify-between gap-3 p-5 md:p-6">
                    <div>
                      <p className="font-label text-[9.5px] font-bold tracking-[0.2em] text-x-red">
                        0{i + 1} · {project.sector.replace(/^Commercial & Institutional$/, "Institutional")}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-extrabold tracking-tight text-white transition-colors group-hover:text-x-red md:text-xl">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <p className="text-[12.5px] text-white/45">{project.location}</p>
                      <ArrowUpRight className="size-4 text-white/30 transition-colors group-hover:text-x-red" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-8 border border-white/10 bg-white/[0.02] p-7 md:grid-cols-12 md:items-center md:p-9">
            <div className="md:col-span-7">
              <p className="eyebrow text-x-red">Next step</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Bring us your next facility
              </h3>
              <p className="mt-3 max-w-[46ch] text-[14.5px] leading-[1.8] text-white/55">
                Share site constraints and facility type. We start with what must be resolved before
                issue.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center justify-center gap-2 border-[1.5px] border-x-red bg-x-red px-6 py-3.5 font-label text-[10px] tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-x-red"
              >
                Enquire Now
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/brochure/formx.pdf"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3.5 font-label text-[10px] tracking-[0.18em] text-white/80 transition-colors hover:border-x-red hover:text-x-red"
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
