"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

/**
 * Founder home_comment_p6: replace Featured Portfolio card grid.
 * All brochure projects as evidence strip — filled frames, not collage cards.
 */
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 border-y border-line bg-white py-20 md:py-28">
      <Container>
        <Reveal className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Completed projects
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Engineering evidence
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-ink-muted">
              Facilities from the FORMX brochure — judged complete in frame.
            </p>
          </div>
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
          >
            Full project record
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.03 * i}>
              <Link
                href={`/projects/${project.slug}`}
                transitionTypes={["nav-forward"]}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                  <AssetImage
                    alt={project.title}
                    slot={project.assets.cover}
                    kind="facility"
                    fit={project.assets.frame ?? "cover"}
                    aspect="auto"
                    tone="dark"
                    objectPosition="center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                      {project.sector}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-extrabold uppercase tracking-tight text-ink transition-colors group-hover:text-x-red md:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-ink-muted">
                      {project.location}
                      {project.area ? ` · ${project.area}` : ""}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-x-red opacity-40 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
