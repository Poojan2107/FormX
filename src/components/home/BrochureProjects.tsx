"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureProjectGroups } from "@/data/brochureHome";
import type { Project } from "@/data/projects";

function ProjectVisual({
  project,
  dark = false,
  featured = false,
}: {
  project: Project;
  dark?: boolean;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="group block"
    >
      <div
        className={`overflow-hidden border transition-transform duration-500 group-hover:-translate-y-1 ${
          dark ? "border-white/10 bg-[#141414]" : "border-black/5 bg-[#ebeae6]"
        }`}
      >
        <AssetImage
          slot={project.assets.cover}
          alt={project.title}
          fit="contain"
          aspect={featured ? "wide" : "landscape"}
          tone={dark ? "dark" : "light"}
          className={featured ? "min-h-[300px] md:min-h-[420px]" : "min-h-[220px] md:min-h-[280px]"}
          sizes={featured ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 50vw"}
          zoomOnHover
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-label text-[9px] tracking-[0.22em] text-x-red">
            {project.location}
            {project.area ? ` · ${project.area}` : ""}
          </p>
          <h3
            className={`mt-1.5 font-display text-lg font-bold tracking-tight md:text-xl ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {project.title}
          </h3>
        </div>
        <ArrowUpRight
          className={`mt-1 size-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            dark ? "text-white/30 group-hover:text-x-red" : "text-ink/25 group-hover:text-x-red"
          }`}
        />
      </div>
    </Link>
  );
}

export function BrochureProjects() {
  const [industrial, highRise, commercial] = brochureProjectGroups;

  return (
    <section id="projects" className="scroll-mt-28">
      <div className="bg-[#f4f3f0] py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Projects</p>
            <h2
              className="mt-4 max-w-[14ch] font-display font-bold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Completed work
            </h2>
            <p className="mt-4 max-w-[40ch] text-[15px] leading-[1.7] text-ink/50">
              From the FORM× brochure — facilities shown fully, without crop.
            </p>
          </Reveal>
        </Container>
      </div>

      <div id="industrial" className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="mb-10 flex items-baseline justify-between gap-4">
              <h3
                className="font-display font-bold tracking-tight text-ink"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.15rem)" }}
              >
                Industrial
              </h3>
              <span className="font-label text-[9px] tracking-[0.24em] text-ink/30">
                01 · {industrial.projects.length} facilities
              </span>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-10">
              <ProjectVisual project={industrial.projects[0]} featured />
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {industrial.projects.slice(1).map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * i}>
                <ProjectVisual project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <div id="high-rise" className="bg-[#0a0a0a] py-16 text-white md:py-24">
        <Container>
          <Reveal>
            <div className="mb-10 flex items-baseline justify-between gap-4">
              <h3
                className="font-display font-bold tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.15rem)" }}
              >
                High-rise & residential
              </h3>
              <span className="font-label text-[9px] tracking-[0.24em] text-white/25">
                02 · {highRise.projects.length} facilities
              </span>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 md:gap-8">
            {highRise.projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * i}>
                <ProjectVisual project={project} dark />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <div id="commercial" className="bg-[#f4f3f0] py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="mb-10 flex items-baseline justify-between gap-4">
              <h3
                className="font-display font-bold tracking-tight text-ink"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.15rem)" }}
              >
                Institutional & commercial
              </h3>
              <span className="font-label text-[9px] tracking-[0.24em] text-ink/30">
                03 · {commercial.projects.length} facilities
              </span>
            </div>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2">
            {commercial.projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * i}>
                <ProjectVisual project={project} featured={i === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-14 flex justify-center">
              <Link
                href="/projects"
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2 border border-ink/15 bg-white px-8 py-4 font-label text-[10px] tracking-[0.2em] text-ink transition-colors hover:border-x-red hover:text-x-red"
              >
                All projects
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
