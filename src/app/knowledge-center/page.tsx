import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  title: "Insights | Practice Notes",
  description:
    "FORM× Engineering Journal — specialized structural work, live mandates and practice notes from Ahmedabad.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <section className="fx-grain border-b border-black bg-[#0a0a09] pt-28 pb-20 text-white md:pt-36 md:pb-28">
        <Container>
          <p className="eyebrow text-x-red">Insights</p>
          <h1
            className="editorial-title mt-5 max-w-[16ch]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Notes from the studio
          </h1>
          <p className="mt-8 max-w-[48ch] text-[17px] leading-[1.9] text-white/60 md:text-[18px]">
            Specialized engineering work, ongoing mandates, and facility thinking from the FormX
            practice — renovation, strengthening, and delivery notes.
          </p>
        </Container>
      </section>

      <section className="border-b border-line bg-bg section-y">
        <Container>
          <Reveal className="mb-12">
            <VisualFrame
              slot={brochureVisuals.specializedBanner}
              alt="Structural steel — specialized projects"
              fit="contain"
              aspect="cinema"
              tone="dark"
              className="formx-cut-lg"
            />
          </Reveal>

          <p className="eyebrow text-x-red">Specialized</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Renovation, strengthening &amp; solar
          </h2>

          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
            {portfolioSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.04 * i} className="h-full">
                <article className="group flex h-full flex-col border border-line bg-white px-6 py-7 transition-all duration-300 hover:border-x-red/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red">
                    {block.title}
                  </h3>
                  <ul className="mt-5 flex flex-1 flex-col gap-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.8] text-ink-muted">
                        <span className="mt-1 shrink-0 font-display text-xs font-bold text-x-red">
                          ×
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span
                    aria-hidden
                    className="mt-6 block h-[2px] w-0 bg-x-red transition-all duration-300 group-hover:w-10"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-bg-muted section-y">
        <Container>
          <p className="eyebrow text-x-red">Ongoing</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            In the studio now
          </h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {portfolioOngoing.map((item, i) => (
              <Reveal key={item.title} delay={0.03 * i}>
                <div className="flex gap-4 py-7">
                  <span className="relative mt-2 flex size-3 shrink-0 items-center justify-center">
                    <span className="size-2.5 rotate-45 border border-x-red/50 bg-transparent" />
                    {i === 0 ? (
                      <span className="absolute inset-[3px] rotate-45 bg-x-red animate-pulse" />
                    ) : null}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-extrabold tracking-tight text-ink md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-[15px] leading-[1.8] text-ink-muted">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-bg section-y">
        <Container>
          <p className="eyebrow text-x-red">Practice</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Facility typologies
          </h2>
          <p className="mt-4 measure-essay text-[15px] leading-[1.8] text-ink-muted">
            {portfolioServicesNote}
          </p>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {portfolioServices.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <Link
                  href={item.href}
                  transitionTypes={["nav-forward"]}
                  className="fx-service-row group grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:py-10"
                >
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink group-hover:text-x-red md:col-span-5">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-ink-muted md:col-span-6">
                    {item.body}
                  </p>
                  <span className="hidden justify-end md:col-span-1 md:flex">
                    <ArrowUpRight className="size-5 text-ink/20 group-hover:text-x-red" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-[15px] leading-[1.8] text-ink/50">{portfolioClosing}</p>
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
              className="inline-flex items-center gap-2 font-label text-[11px] text-x-red"
            >
              All projects
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brochureProjects.slice(0, 4).map((project, i) => {
              const landscape = project.assets.orientation === "landscape";
              const portrait = project.assets.orientation === "portrait";
              return (
                <Reveal key={project.slug} delay={0.03 * i} className="h-full">
                  <Link
                    href={`/projects/${project.slug}`}
                    transitionTypes={["nav-forward"]}
                    className="group flex h-full flex-col"
                  >
                    <VisualFrame
                      slot={project.assets.cover}
                      alt={project.title}
                      fit={portrait ? "cover" : "contain"}
                      aspect={landscape ? "landscape" : portrait ? "portrait" : "landscape"}
                      tone="dark"
                      zoomOnHover
                    />
                    <h3 className="mt-3 font-display text-sm font-extrabold tracking-tight text-white group-hover:text-x-red">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-white/45">{project.location}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 grid gap-8 border border-white/10 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-10">
            <div>
              <p className="eyebrow text-x-red">Next step</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white">
                Bring us your next facility
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-white/55">
                Share site constraints and facility type. We start with what must be resolved before
                issue.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center justify-center gap-2 bg-x-red px-6 py-3.5 font-label text-[10px] tracking-[0.18em] text-white transition-colors hover:bg-x-red-hover"
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
