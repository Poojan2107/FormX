"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

/** Full brochure portfolio strip — every completed project, visuals own the frame */
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 border-y border-line bg-white py-20 md:py-28">
      <Container>
        <Reveal className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Proof
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
              Completed projects
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink-muted">
              Every facility from the FORMX brochure — industrial, residential, commercial and
              institutional — shown complete in frame.
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.03 * i}>
              <Link
                href={`/projects/${project.slug}`}
                transitionTypes={["nav-forward"]}
                className="group block"
              >
                <VisualFrame
                  slot={project.assets.cover}
                  alt={project.title}
                  fit={project.assets.frame ?? "contain"}
                  aspect="landscape"
                  tone="dark"
                  zoomOnHover
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                      {project.sector}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-extrabold uppercase tracking-tight text-ink group-hover:text-x-red md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-ink-muted">
                      {project.location}
                      {project.area ? ` · ${project.area}` : ""}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-x-red opacity-40 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
