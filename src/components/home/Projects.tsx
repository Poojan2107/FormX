"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  const featured = projects[0];
  const secondary = projects.slice(1, 3);
  const tertiary = projects.slice(3, 6);

  return (
    <section id="projects" className="scroll-mt-32 bg-white py-20 md:py-28 border-b border-line">
      <Container>
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.26em] text-x-red">
                Our Projects
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
              Featured Portfolio
            </h2>
            <p className="mt-3 max-w-[70ch] prose-measure text-[14px] leading-relaxed text-ink-muted">
              Coordinated GFC packages across commercial HQ, manufacturing, and institutional campuses.
            </p>
          </div>
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="group hidden shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-all hover:translate-x-1 sm:flex"
          >
            All Projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="grid gap-3 lg:grid-cols-2">
          {/* LEFT: Featured (tall) */}
          <Reveal from="left" className="h-full">
            <ProjectCard
              project={featured}
              index={0}
              priority
              aspect="fill"
              className="h-full min-h-[420px] lg:min-h-[580px]"
            />
          </Reveal>

          {/* RIGHT: 2 stacked */}
          <div className="grid grid-rows-2 gap-3">
            {secondary.map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * (i + 1)} from="right" className="h-full">
                <ProjectCard
                  project={project}
                  index={i + 1}
                  priority={i === 0}
                  aspect="fill"
                  className="h-full min-h-[200px] lg:min-h-[284px]"
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom row: 3 equal */}
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {tertiary.map((project, i) => (
            <Reveal key={project.slug} delay={0.06 * i} className="h-full">
              <ProjectCard
                project={project}
                index={i + 3}
                aspect="fill"
                className="h-full min-h-[240px]"
              />
            </Reveal>
          ))}
        </div>

        {/* Mobile CTA */}
        <Reveal className="mt-8 sm:hidden">
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="flex w-full items-center justify-center gap-2 border border-x-red px-6 py-4 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
          >
            View All Projects <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
