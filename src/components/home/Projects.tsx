"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

/** Home evidence — image-led strip (website comment: less text, more images) */
export function Projects() {
  const featured = projects.filter((p) => p.assets.cover.includes("details/")).slice(0, 6);
  const list = featured.length >= 4 ? featured : projects.slice(0, 6);

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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((project, i) => (
            <Reveal key={project.slug} delay={0.04 * i}>
              <Link
                href={`/projects/${project.slug}`}
                transitionTypes={["nav-forward"]}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                  <AssetImage
                    alt={project.title}
                    slot={project.assets.cover}
                    kind="facility"
                    fit="cover"
                    aspect="auto"
                    objectPosition="center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                      {project.sector}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-extrabold uppercase tracking-tight text-white md:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-white/60">{project.location}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
