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
    <section id="projects" className="scroll-mt-32 bg-white section-y">
      <Container>
        <Reveal className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                Our Projects
              </span>
            </div>
            <h2
              className="font-display font-extrabold leading-[1.1] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
            >
              Featured Portfolio
            </h2>
          </div>
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="group hidden shrink-0 items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40 transition-all hover:text-x-red sm:flex"
          >
            All Projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        {/* Editorial masonry layout */}
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-4">
          {/* LEFT: Featured (tall) */}
          <Reveal from="left" className="h-full">
            <ProjectCard
              project={featured}
              index={0}
              priority
              aspect="fill"
              className="h-full min-h-[400px] lg:min-h-[560px]"
            />
          </Reveal>

          {/* RIGHT: 2 stacked */}
          <div className="grid grid-rows-2 gap-4">
            {secondary.map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * (i + 1)} from="right" className="h-full">
                <ProjectCard
                  project={project}
                  index={i + 1}
                  priority={i === 0}
                  aspect="fill"
                  className="h-full min-h-[180px] lg:min-h-[265px]"
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom row: 3 equal */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {tertiary.map((project, i) => (
            <Reveal key={project.slug} delay={0.06 * i} className="h-full">
              <ProjectCard
                project={project}
                index={i + 3}
                aspect="fill"
                className="h-full min-h-[220px]"
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
