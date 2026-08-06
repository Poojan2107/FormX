"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureProjectGroups } from "@/data/brochureHome";
import type { Project } from "@/data/projects";

// ─────────────────────────────────────────────────────────────────────────────
// Featured card — full bleed, image owns the frame, overlay caption
// ─────────────────────────────────────────────────────────────────────────────
function FeaturedCard({ project, dark = false }: { project: Project; dark?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="fx-project-card group block"
    >
      {/* Image frame — fixed 16:9, image fills it fully */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <AssetImage
          slot={project.assets.cover}
          alt={project.title}
          fit="cover"
          aspect="wide"
          tone={dark ? "dark" : "light"}
          className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* formx-cut corner accent — bottom right */}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 size-10 bg-x-red/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Caption overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="font-label text-[9px] tracking-[0.24em] text-x-red">
            {project.location}
            {project.area ? ` · ${project.area}` : ""}
          </p>
          <h3
            className="mt-2 font-display font-extrabold tracking-tight text-white"
            style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
          >
            {project.title}
          </h3>
        </div>

        {/* Arrow icon */}
        <div className="absolute right-5 top-5 flex size-9 items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4 text-white" />
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Grid card — 4:3 aspect, image fills fully
// ─────────────────────────────────────────────────────────────────────────────
function GridCard({ project, dark = false }: { project: Project; dark?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="fx-project-card group block"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <AssetImage
          slot={project.assets.cover}
          alt={project.title}
          fit="cover"
          aspect="landscape"
          tone={dark ? "dark" : "light"}
          className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-label text-[8px] tracking-[0.22em] text-x-red/90">
            {project.location}
          </p>
          <h3 className="mt-1 font-display text-base font-bold tracking-tight text-white md:text-lg">
            {project.title}
          </h3>
        </div>

        {/* Arrow */}
        <div className="absolute right-4 top-4 flex size-8 items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-3.5 text-white" />
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tall card — 3:4 portrait, for high-rise section
// ─────────────────────────────────────────────────────────────────────────────
function TallCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="fx-project-card group block"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <AssetImage
          slot={project.assets.cover}
          alt={project.title}
          fit="cover"
          aspect="portrait"
          tone="dark"
          className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-label text-[8px] tracking-[0.22em] text-x-red">
            {project.location}
            {project.area ? ` · ${project.area}` : ""}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-white">
            {project.title}
          </h3>
        </div>

        {/* Hover arrow */}
        <div className="absolute right-4 top-4 flex size-8 items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-3.5 text-white" />
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section header row
// ─────────────────────────────────────────────────────────────────────────────
function SectorHeader({
  number,
  title,
  count,
  dark = false,
}: {
  number: string;
  title: string;
  count: number;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className="mb-10 flex items-end justify-between gap-4 border-b pb-5" style={{ borderColor: dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)" }}>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl font-black text-x-red/50">{number}</span>
          <h3
            className={`font-display font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)" }}
          >
            {title}
          </h3>
        </div>
        <span className={`font-label text-[9px] tracking-[0.24em] ${dark ? "text-white/22" : "text-ink/28"}`}>
          {String(count).padStart(2, "0")} facilities
        </span>
      </div>
    </Reveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export function BrochureProjects() {
  const [industrial, highRise, commercial] = brochureProjectGroups;

  return (
    <section id="projects" className="scroll-mt-28">

      {/* ── Section intro header ──────────────────────────────── */}
      <div className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.3em] text-x-red">
              Projects
            </p>
            <h2
              className="mt-4 max-w-[18ch] font-display font-extrabold leading-[1.04] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Completed work
            </h2>
            <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.75] text-ink/45">
              Facilities delivered across industrial, residential and institutional typologies —
              each documented from structural brief to site completion.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* ── 01 Industrial — white ─────────────────────────────── */}
      <div id="industrial" className="bg-white pb-20 md:pb-28">
        <Container>
          <SectorHeader
            number="×01"
            title="Industrial"
            count={industrial.projects.length}
          />

          {/* Feature card — 16:9 full width */}
          <Reveal>
            <div className="mb-8">
              <FeaturedCard project={industrial.projects[0]} />
            </div>
          </Reveal>

          {/* Grid — 3-up */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {industrial.projects.slice(1).map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * i}>
                <GridCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* ── 02 High-Rise — deep dark ──────────────────────────── */}
      <div id="high-rise" className="bg-[#0a0a0a] py-20 md:py-28">
        <Container>
          <SectorHeader
            number="×02"
            title="High-Rise & Residential"
            count={highRise.projects.length}
            dark
          />

          {/* Tall portrait cards — 2 col */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highRise.projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * i}>
                <TallCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* ── 03 Commercial & Institutional — warm off-white ───── */}
      <div id="commercial" className="bg-[#f4f3f0] py-20 md:py-28">
        <Container>
          <SectorHeader
            number="×03"
            title="Institutional & Commercial"
            count={commercial.projects.length}
          />

          {/* Large + small pairing */}
          <div className="grid gap-5 md:grid-cols-2">
            {commercial.projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * i}>
                {i === 0 ? (
                  <FeaturedCard project={project} />
                ) : (
                  <GridCard project={project} />
                )}
              </Reveal>
            ))}
          </div>

          {/* All projects CTA */}
          <Reveal delay={0.18}>
            <div className="mt-14 flex justify-center">
              <Link
                href="/projects"
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2.5 border border-ink/15 bg-white px-9 py-4 font-label text-[10px] tracking-[0.2em] text-ink transition-colors hover:border-x-red hover:text-x-red"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
              >
                All Projects
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>

    </section>
  );
}
