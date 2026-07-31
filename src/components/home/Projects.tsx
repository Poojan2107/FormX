"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

function EditorialProjectCard({
  project,
  index,
  priority = false,
  className = "",
}: {
  project: (typeof projects)[0];
  index: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden bg-gray-100 ${className}`}
    >
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <AssetImage
          alt={project.title}
          slot={project.assets.cover}
          kind="facility"
          tone={index % 2 === 0 ? "dark" : "light"}
          aspect="landscape"
          fit="cover"
          priority={priority}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Permanent subtle gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Hover overlay — full coverage with project info */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

      {/* Sector tag — always visible */}
      <div className="absolute left-4 top-4 z-10">
        <span className="border border-x-red/50 bg-x-red px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white">
          {project.sector}
        </span>
      </div>

      {/* Bottom info — always visible, more visible on hover */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
              <MapPin className="size-3" /> {project.location}
            </p>
            <h3 className="mt-1 font-display text-[16px] font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red md:text-lg">
              {project.client}
            </h3>
            <p className="mt-0.5 text-[12px] text-white/50">{project.title}</p>
          </div>
          <div className="shrink-0">
            <span className="flex size-10 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red">
              <ArrowUpRight className="size-4 text-white" />
            </span>
          </div>
        </div>
      </div>

      {/* Index number watermark */}
      <div className="absolute right-5 top-5 font-display text-[48px] font-black leading-none tracking-tighter text-white/5 select-none">
        {String(index + 1).padStart(2, "0")}
      </div>
    </Link>
  );
}

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
            <EditorialProjectCard
              project={featured}
              index={0}
              priority
              className="h-full min-h-[400px] lg:min-h-[560px]"
            />
          </Reveal>

          {/* RIGHT: 2 stacked */}
          <div className="grid grid-rows-2 gap-4">
            {secondary.map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * (i + 1)} from="right" className="h-full">
                <EditorialProjectCard
                  project={project}
                  index={i + 1}
                  priority={i === 0}
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
              <EditorialProjectCard
                project={project}
                index={i + 3}
                className="h-full min-h-[220px]"
              />
            </Reveal>
          ))}
        </div>

        {/* Mobile CTA */}
        <Reveal className="mt-8 sm:hidden">
          <Link
            href="/projects"
            className="flex w-full items-center justify-center gap-2 border border-x-red px-6 py-4 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
          >
            View All Projects <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
