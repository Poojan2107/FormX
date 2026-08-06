"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureProjectGroups } from "@/data/brochureHome";
import type { Project } from "@/data/projects";

// ─────────────────────────────────────────────────────────────────────────────
// Featured Card — Full width layout, frame-honoring image container
// ─────────────────────────────────────────────────────────────────────────────
function FeaturedCard({ project, dark = false }: { project: Project; dark?: boolean }) {
  const frameMode = project.assets.frame ?? "cover";

  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="fx-project-card group block overflow-hidden rounded-sm border transition-all duration-300"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
        backgroundColor: dark ? "#111111" : "#f4f3ef",
      }}
    >
      <div className="relative grid md:grid-cols-12 md:items-center">

        {/* Image Frame — 7 cols */}
        <div className="relative aspect-[16/10] w-full overflow-hidden md:col-span-7 lg:aspect-[16/9]">
          <AssetImage
            slot={project.assets.cover}
            alt={project.title}
            fit={frameMode}
            aspect="auto"
            tone={dark ? "dark" : "light"}
            className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          {/* Subtle gradient for contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
        </div>

        {/* Info Column — 5 cols */}
        <div className="flex flex-col justify-between p-6 md:col-span-5 md:p-8 lg:p-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-label text-[9px] tracking-[0.26em] text-x-red uppercase">
                {project.location}
              </span>
              {project.area ? (
                <span className={`font-label text-[9px] tracking-[0.2em] ${dark ? "text-white/30" : "text-ink/30"}`}>
                  · {project.area}
                </span>
              ) : null}
            </div>

            <h3
              className={`mt-3 font-display font-extrabold tracking-tight transition-colors group-hover:text-x-red ${
                dark ? "text-white" : "text-ink"
              }`}
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
            >
              {project.title}
            </h3>

            <p className={`mt-3 line-clamp-3 text-[13px] leading-[1.75] ${dark ? "text-white/45" : "text-ink/50"}`}>
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t pt-4" style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)" }}>
            <span className={`font-label text-[9px] tracking-[0.2em] uppercase ${dark ? "text-white/40" : "text-ink/40"}`}>
              {project.services[0] ?? "Structural Design"}
            </span>
            <div className="flex size-8 items-center justify-center rounded-full bg-x-red text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Grid Card — Honors project.assets.frame so buildings are never clipped
// ─────────────────────────────────────────────────────────────────────────────
function GridCard({ project, dark = false }: { project: Project; dark?: boolean }) {
  const frameMode = project.assets.frame ?? "cover";

  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="fx-project-card group flex h-full flex-col overflow-hidden rounded-sm border transition-all duration-300"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
        backgroundColor: dark ? "#111111" : "#f7f6f2",
      }}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181818]">
        <AssetImage
          slot={project.assets.cover}
          alt={project.title}
          fit={frameMode}
          aspect="landscape"
          tone={dark ? "dark" : "light"}
          className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Subtle top badge */}
        <div className="absolute left-3 top-3 z-10 rounded-xs bg-black/60 px-2.5 py-1 backdrop-blur-sm">
          <span className="font-label text-[8px] tracking-[0.2em] text-white/80 uppercase">
            {project.location}
          </span>
        </div>
      </div>

      {/* Caption info below */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3
            className={`font-display text-base font-bold tracking-tight transition-colors group-hover:text-x-red ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {project.title}
          </h3>
          <p className={`mt-2 line-clamp-2 text-[12px] leading-[1.65] ${dark ? "text-white/40" : "text-ink/48"}`}>
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)" }}>
          <span className={`font-label text-[8px] tracking-[0.18em] ${dark ? "text-white/30" : "text-ink/35"}`}>
            {project.area ?? project.year}
          </span>
          <ArrowUpRight className="size-3.5 text-x-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tall Card — 3:4 portrait for high-rise buildings
// ─────────────────────────────────────────────────────────────────────────────
function TallCard({ project }: { project: Project }) {
  const frameMode = project.assets.frame ?? "cover";

  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="fx-project-card group block overflow-hidden rounded-sm border border-white/10 bg-[#121212] transition-all duration-300"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0d0d0d]">
        <AssetImage
          slot={project.assets.cover}
          alt={project.title}
          fit={frameMode}
          aspect="portrait"
          tone="dark"
          className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-label text-[8px] tracking-[0.24em] text-x-red uppercase">
            {project.location} {project.area ? `· ${project.area}` : ""}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-x-red">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[12px] leading-[1.65] text-white/45">
            {project.description}
          </p>
        </div>

        {/* Hover arrow */}
        <div className="absolute right-4 top-4 flex size-8 items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-3.5 text-white" />
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sector Header
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
      <div
        className="mb-10 flex items-end justify-between gap-4 border-b pb-5"
        style={{ borderColor: dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)" }}
      >
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl font-black text-x-red">{number}</span>
          <h3
            className={`font-display font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)" }}
          >
            {title}
          </h3>
        </div>
        <span className={`font-label text-[9px] tracking-[0.24em] ${dark ? "text-white/30" : "text-ink/35"}`}>
          {String(count).padStart(2, "0")} facilities
        </span>
      </div>
    </Reveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BrochureProjects Main Component
// ─────────────────────────────────────────────────────────────────────────────
export function BrochureProjects() {
  const [industrial, highRise, commercial] = brochureProjectGroups;

  return (
    <section id="projects" className="scroll-mt-28">

      {/* Section intro header */}
      <div className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.35em] text-x-red">
              Projects Showcase
            </p>
            <h2
              className="mt-4 max-w-[18ch] font-display font-black leading-[1.0] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
            >
              Completed work
            </h2>
            <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.8] text-ink/48">
              Facilities delivered across industrial, residential and institutional typologies —
              each documented from structural brief to site completion.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* ── 01 Industrial — white ─────────────────────────────── */}
      <div id="industrial" className="bg-white pb-24">
        <Container>
          <SectorHeader
            number="×01"
            title="Industrial Facilities"
            count={industrial.projects.length}
          />

          {/* Feature card */}
          <Reveal>
            <div className="mb-8">
              <FeaturedCard project={industrial.projects[0]} />
            </div>
          </Reveal>

          {/* Grid — 3-up */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {industrial.projects.slice(1).map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * i}>
                <GridCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* ── 02 High-Rise — deep dark ──────────────────────────── */}
      <div id="high-rise" className="bg-[#0a0a0a] py-24 text-white">
        <Container>
          <SectorHeader
            number="×02"
            title="High-Rise & Residential"
            count={highRise.projects.length}
            dark
          />

          {/* Tall portrait cards — 2 col */}
          <div className="grid gap-6 sm:grid-cols-2">
            {highRise.projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * i}>
                <TallCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* ── 03 Commercial & Institutional — warm off-white ───── */}
      <div id="commercial" className="bg-[#f4f3f0] py-24">
        <Container>
          <SectorHeader
            number="×03"
            title="Institutional & Commercial"
            count={commercial.projects.length}
          />

          {/* 2-col cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {commercial.projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * i}>
                <GridCard project={project} />
              </Reveal>
            ))}
          </div>

          {/* All projects CTA */}
          <Reveal delay={0.18}>
            <div className="mt-14 flex justify-center">
              <Link
                href="/projects"
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2.5 border border-ink/15 bg-white px-9 py-4 font-label text-[10px] tracking-[0.22em] text-ink shadow-xs transition-all hover:border-x-red hover:text-x-red"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
              >
                Explore All Projects
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>

    </section>
  );
}
