"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

/** Editorial proof strip — not a masonry card grid */
export function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-32 border-y border-line bg-white py-20 md:py-28">
      <Container>
        <Reveal className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Proof
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
              Facilities we have engineered
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink-muted">
              Completed work across commercial headquarters, manufacturing plants and institutional campuses—documented as coordinated GFC packages.
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

        <div className="space-y-0">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={0.04 * i}>
              <Link
                href={`/projects/${project.slug}`}
                transitionTypes={["nav-forward"]}
                className="group grid border-t border-line py-8 transition-colors hover:bg-[#fafafa] md:grid-cols-12 md:gap-8 md:py-10"
              >
                <div className="relative mb-5 aspect-[16/10] overflow-hidden bg-[#111] md:col-span-5 md:mb-0 md:aspect-[4/3]">
                  <AssetImage
                    alt={project.client}
                    slot={project.assets.cover}
                    kind="facility"
                    fit="cover"
                    aspect="auto"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center md:col-span-7">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                    {project.sector} · {project.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
                    {project.client}
                  </h3>
                  <p className="mt-2 text-[14px] text-ink-muted">
                    {project.location}
                    {project.area ? ` · ${project.area}` : ""}
                  </p>
                  <p className="mt-4 max-w-xl text-[14px] leading-[1.8] text-ink-muted">
                    {project.outcome}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red opacity-80 transition-opacity group-hover:opacity-100">
                    Read engineering case
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
