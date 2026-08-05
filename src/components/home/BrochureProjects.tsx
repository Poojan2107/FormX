"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureProjectGroups } from "@/data/brochureHome";
import type { Project } from "@/data/projects";

function ProjectPlate({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={0.08 * (index % 2)} className="group">
      <Link
        href={`/projects/${project.slug}`}
        transitionTypes={["nav-forward"]}
        className="block"
      >
        {/* Full brochure visual — contain, never crop the facility */}
        <div className="relative overflow-hidden border border-line bg-[#ecece8] transition-colors duration-300 group-hover:border-ink/20">
          <AssetImage
            slot={project.assets.cover}
            alt={project.title}
            fit="contain"
            aspect="landscape"
            tone="light"
            className="min-h-[240px] md:min-h-[320px]"
            sizes="(max-width: 768px) 100vw, 50vw"
            zoomOnHover
          />
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-label text-[9px] tracking-[0.22em] text-x-red">
              {project.location}
              {project.area ? ` · ${project.area}` : ""}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-ink md:text-xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-[48ch] text-[14px] leading-[1.65] text-ink/55 line-clamp-3">
              {project.description}
            </p>
          </div>
          <ArrowRight className="mt-1 size-4 shrink-0 text-ink/25 transition-transform group-hover:translate-x-1 group-hover:text-x-red" />
        </div>
      </Link>
    </Reveal>
  );
}

/**
 * Projects by brochure typology.
 * Each group has its own surface so the page doesn't repeat one template.
 */
export function BrochureProjects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="border-b border-line bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Projects</p>
            <h2
              className="mt-4 max-w-[18ch] font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3.25rem)" }}
            >
              Completed work from the brochure
            </h2>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-[1.7] text-ink/55">
              Facilities engineered and issued — shown as they appear in FORM× materials, fully
              visible without crop.
            </p>
          </Reveal>
        </Container>
      </div>

      {brochureProjectGroups.map((group, gi) => {
        const dark = gi === 1;
        return (
          <div
            key={group.id}
            id={group.id}
            className={dark ? "bg-[#0c0c0c] py-16 text-white md:py-24" : "bg-white py-16 md:py-24"}
          >
            <Container>
              <Reveal>
                <div className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p
                      className={`font-label text-[10px] tracking-[0.28em] ${
                        dark ? "text-x-red" : "text-x-red"
                      }`}
                    >
                      0{gi + 1} · {group.title}
                    </p>
                    <h3
                      className={`mt-3 max-w-[20ch] font-display font-extrabold uppercase leading-[0.95] tracking-tight ${
                        dark ? "text-white" : "text-ink"
                      }`}
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                    >
                      {group.title}
                    </h3>
                  </div>
                  <p
                    className={`max-w-[40ch] text-[14px] leading-[1.7] md:text-[15px] ${
                      dark ? "text-white/45" : "text-ink/50"
                    }`}
                  >
                    {group.intro}
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
                {group.projects.map((project, i) =>
                  dark ? (
                    <Reveal key={project.slug} delay={0.08 * (i % 2)} className="group">
                      <Link
                        href={`/projects/${project.slug}`}
                        transitionTypes={["nav-forward"]}
                        className="block"
                      >
                        <div className="relative overflow-hidden border border-white/10 bg-[#161616] transition-colors group-hover:border-white/25">
                          <AssetImage
                            slot={project.assets.cover}
                            alt={project.title}
                            fit="contain"
                            aspect="landscape"
                            tone="dark"
                            className="min-h-[240px] md:min-h-[320px]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            zoomOnHover
                          />
                        </div>
                        <p className="mt-5 font-label text-[9px] tracking-[0.22em] text-x-red">
                          {project.location}
                          {project.area ? ` · ${project.area}` : ""}
                        </p>
                        <h4 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-white md:text-xl">
                          {project.title}
                        </h4>
                        <p className="mt-2 max-w-[48ch] text-[14px] leading-[1.65] text-white/45 line-clamp-3">
                          {project.description}
                        </p>
                      </Link>
                    </Reveal>
                  ) : (
                    <ProjectPlate key={project.slug} project={project} index={i} />
                  ),
                )}
              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
}
