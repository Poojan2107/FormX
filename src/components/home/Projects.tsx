"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

/** Brochure flagships first — editorial dossier, not a card mosaic */
const FLAGSHIP_SLUGS = [
  "vapi-g2-industrial",
  "kheda-peb-warehouse",
  "aarti-chemical-storage",
  "valsad-peb-shed-expansion",
  "pune-apartment-tower",
  "senegal-office-building",
];

export function Projects() {
  const flagships = FLAGSHIP_SLUGS.map((slug) => getProject(slug)).filter(Boolean);
  const list = flagships.length >= 4 ? flagships : projects.slice(0, 6);

  return (
    <section id="projects" className="scroll-mt-32 border-y border-line bg-white py-20 md:py-28">
      <Container>
        <Reveal className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Completed projects
            </p>
            <h2 className="mt-2 max-w-[18ch] font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Engineering evidence
            </h2>
          </div>
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
          >
            All projects
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {list.map((project, i) => {
            if (!project) return null;
            return (
              <Reveal key={project.slug} delay={0.03 * i}>
                <Link
                  href={`/projects/${project.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group grid gap-6 py-8 transition-colors md:grid-cols-12 md:items-center md:gap-10 md:py-10"
                >
                  <div className="x-corner relative aspect-[16/10] overflow-hidden bg-[#111] md:col-span-5">
                    <AssetImage
                      alt={project.title}
                      slot={project.assets.cover}
                      kind="facility"
                      fit={project.assets.frame ?? "cover"}
                      aspect="auto"
                      objectPosition="center"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="md:col-span-7">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                      {project.sector}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-extrabold uppercase tracking-tight text-ink md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-ink/50">
                      {project.location}
                      {project.area ? ` · ${project.area}` : ""}
                      {project.floors ? ` · ${project.floors}` : ""}
                    </p>
                    {project.risk ? (
                      <p className="mt-4 max-w-[48ch] text-[14px] leading-[1.75] text-ink-muted">
                        {project.risk}
                      </p>
                    ) : (
                      <p className="mt-4 max-w-[48ch] text-[14px] leading-[1.75] text-ink-muted line-clamp-2">
                        {project.description}
                      </p>
                    )}
                    <span className="mt-5 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                      Open dossier
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
