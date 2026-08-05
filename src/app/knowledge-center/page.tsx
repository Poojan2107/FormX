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
  projects,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

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
          <p className="font-label text-[11px] text-x-red">Insights</p>
          <h1
            className="mt-5 max-w-[14ch] font-display font-extrabold uppercase leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
          >
            Notes from the studio
          </h1>
          <p className="mt-8 measure-essay text-[18px] leading-[1.8] text-white/55">
            Not a marketing blog — specialized engineering, live mandates and facility thinking from
            real FORM× work.
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

          <p className="font-label text-[11px] text-x-red">Specialized</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            Renovation, strengthening &amp; solar
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {portfolioSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.04 * i}>
                <article>
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                    {block.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-ink-muted">
                        <span className="mt-1 shrink-0 font-display text-xs font-bold text-x-red">
                          ×
                        </span>
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

      <section className="border-b border-line bg-bg-muted section-y">
        <Container>
          <p className="font-label text-[11px] text-x-red">Ongoing</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            In the studio now
          </h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {portfolioOngoing.map((item, i) => (
              <Reveal key={item.title} delay={0.03 * i}>
                <div className="py-7">
                  <h3 className="font-display text-base font-extrabold uppercase tracking-tight text-ink md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-[15px] leading-[1.8] text-ink-muted">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-bg section-y">
        <Container>
          <p className="font-label text-[11px] text-x-red">Practice</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
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
                  className="group grid gap-3 py-8 md:grid-cols-12 md:items-baseline"
                >
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink group-hover:text-x-red md:col-span-5">
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
              <p className="font-label text-[11px] text-x-red">Completed work</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
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

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 4).map((project, i) => (
              <Reveal key={project.slug} delay={0.03 * i}>
                <Link
                  href={`/projects/${project.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group block"
                >
                  <VisualFrame
                    slot={project.assets.cover}
                    alt={project.title}
                    fit="contain"
                    aspect="landscape"
                    tone="dark"
                    zoomOnHover
                  />
                  <h3 className="mt-3 font-display text-sm font-extrabold uppercase tracking-tight text-white group-hover:text-x-red">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[12px] text-white/45">{project.location}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-8 border border-white/10 p-8 md:grid-cols-2 md:p-10">
            <div>
              <p className="font-label text-[10px] text-x-red">Stay in touch</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-white">
                Practice updates
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Occasional notes when published — no marketing drip.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Container>
      </section>
    </>
  );
}
