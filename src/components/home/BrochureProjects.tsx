"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureProjectGroups } from "@/data/brochureHome";
import type { Project } from "@/data/projects";

function ProjectMeta({
  project,
  dark = false,
}: {
  project: Project;
  dark?: boolean;
}) {
  return (
    <div
      className="mt-6 grid gap-3 border-t pt-4 sm:grid-cols-2"
      style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)" }}
    >
      <div>
        <p
          className={`font-label text-[8px] uppercase tracking-[0.2em] ${
            dark ? "text-white/32" : "text-ink/32"
          }`}
        >
          Location
        </p>
        <p
          className={`mt-1 text-[12px] leading-[1.6] ${
            dark ? "text-white/72" : "text-ink/72"
          }`}
        >
          {project.location}
        </p>
      </div>
      <div>
        <p
          className={`font-label text-[8px] uppercase tracking-[0.2em] ${
            dark ? "text-white/32" : "text-ink/32"
          }`}
        >
          Scope
        </p>
        <p
          className={`mt-1 text-[12px] leading-[1.6] ${
            dark ? "text-white/72" : "text-ink/72"
          }`}
        >
          {project.services[0] ?? project.sector}
        </p>
      </div>
    </div>
  );
}

function SectionIntro({
  title,
  intro,
  dark = false,
}: {
  title: string;
  intro: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`mt-4 max-w-[56ch] text-[14px] leading-[1.85] md:text-[15px] ${
        dark ? "text-white/45" : "text-ink/50"
      }`}
    >
      {title}. {intro}
    </p>
  );
}

function FeaturedPlate({ project, dark = false }: { project: Project; dark?: boolean }) {
  const frameMode = project.assets.frame ?? "cover";

  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="group block transition-all duration-300"
    >
      <div
        className="grid gap-6 border p-3 md:grid-cols-12 md:gap-8 md:p-4"
        style={{
          borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
          backgroundColor: dark ? "#101010" : "#f6f4ee",
        }}
      >
        <div className="relative aspect-[16/10] overflow-hidden md:col-span-8 lg:aspect-[16/9]">
          <div
            className="absolute inset-0 border"
            style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
          />
          <AssetImage
            slot={project.assets.cover}
            alt={project.title}
            fit={frameMode}
            aspect="auto"
            tone={dark ? "dark" : "light"}
            className="absolute inset-0 size-full p-3 transition-transform duration-700 group-hover:scale-[1.02] md:p-5"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-between md:col-span-4 md:py-3 md:pr-2">
          <div>
            <p className="font-label text-[9px] uppercase tracking-[0.26em] text-x-red">
              {project.area ?? project.year}
            </p>
            <h3
              className={`mt-3 font-display font-extrabold tracking-tight transition-colors group-hover:text-x-red ${
                dark ? "text-white" : "text-ink"
              }`}
              style={{ fontSize: "clamp(1.5rem, 2.7vw, 2.2rem)" }}
            >
              {project.title}
            </h3>
            <p
              className={`mt-4 text-[13px] leading-[1.8] ${
                dark ? "text-white/46" : "text-ink/48"
              }`}
            >
              {project.description}
            </p>
            <ProjectMeta project={project} dark={dark} />
          </div>

          <div className="mt-7 flex items-center justify-between">
            <span
              className={`font-label text-[8px] uppercase tracking-[0.22em] ${
                dark ? "text-white/32" : "text-ink/32"
              }`}
            >
              View project
            </span>
            <div className="flex size-9 items-center justify-center rounded-full border border-x-red/30 bg-x-red text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function GalleryPlate({ project, dark = false }: { project: Project; dark?: boolean }) {
  const frameMode = project.assets.frame ?? "cover";

  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="group block transition-all duration-300"
    >
      <div
        className="border p-3"
        style={{
          borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
          backgroundColor: dark ? "#111111" : "#f7f5f0",
        }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 border"
            style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
          />
          <AssetImage
            slot={project.assets.cover}
            alt={project.title}
            fit={frameMode}
            aspect="landscape"
            tone={dark ? "dark" : "light"}
            className="absolute inset-0 size-full p-3 transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="pt-5">
          <p className="font-label text-[8px] uppercase tracking-[0.2em] text-x-red">
            {project.location}
          </p>
          <div className="mt-2 flex items-start justify-between gap-4">
            <h3
              className={`font-display text-[1.05rem] font-bold leading-[1.05] tracking-tight transition-colors group-hover:text-x-red ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              {project.title}
            </h3>
            <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-x-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <p
            className={`mt-2 text-[12px] leading-[1.7] ${
              dark ? "text-white/40" : "text-ink/44"
            }`}
          >
            {project.services[0] ?? project.sector}
          </p>
        </div>
      </div>
    </Link>
  );
}

function ResidentialPlate({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="group block transition-all duration-300"
    >
      <div className="border border-white/10 bg-[#101010] p-3 md:p-4">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#0d0d0d]">
          <div className="absolute inset-0 border border-white/10" />
          <AssetImage
            slot={project.assets.cover}
            alt={project.title}
            fit="cover"
            aspect="auto"
            tone="dark"
            objectPosition="center center"
            className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="border-x border-b border-white/10 bg-[#0d0d0d] px-5 pb-5 pt-4">
          <p className="font-label text-[8px] uppercase tracking-[0.22em] text-x-red">
            {project.location}
          </p>
          <div className="mt-2 flex items-start justify-between gap-4">
            <h3 className="max-w-[12ch] font-display text-[1.55rem] font-bold leading-[1] tracking-tight text-white transition-colors group-hover:text-x-red">
              {project.title}
            </h3>
            <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-x-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <p className="mt-2 max-w-[28ch] text-[12px] leading-[1.7] text-white/46">
            {project.services[0] ?? project.sector}
          </p>
        </div>
        <div className="flex items-center justify-between px-1 pb-1 pt-4">
          <span className="font-label text-[8px] uppercase tracking-[0.2em] text-white/34">
            {project.area ?? project.year}
          </span>
        </div>
      </div>
    </Link>
  );
}

function SectorHeader({
  number,
  title,
  count,
  intro,
  dark = false,
}: {
  number: string;
  title: string;
  count: number;
  intro: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div
        className="mb-10 border-b pb-6"
        style={{ borderColor: dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)" }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl font-black text-x-red">{number}</span>
              <h3
                className={`font-display font-extrabold tracking-tight ${
                  dark ? "text-white" : "text-ink"
                }`}
                style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)" }}
              >
                {title}
              </h3>
            </div>
            <span
              className={`font-label text-[9px] tracking-[0.24em] md:pb-1 ${
                dark ? "text-white/30" : "text-ink/35"
              }`}
            >
              {String(count).padStart(2, "0")} facilities
            </span>
          </div>
          <SectionIntro title={title} intro={intro} dark={dark} />
        </div>
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
          <Reveal className="max-w-[44rem]">
            <p className="font-label text-[10px] tracking-[0.35em] text-x-red">
              Projects
            </p>
            <h2
              className="mt-4 max-w-[12ch] font-display font-black leading-[0.96] tracking-[-0.05em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
            >
              Completed work
            </h2>
            <p className="mt-5 max-w-[38ch] text-[16px] leading-[1.9] text-ink/56">
              Real facilities from the brochure, framed to stay visible instead of being cropped
              into generic cards.
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
            intro={industrial.intro}
          />

          <Reveal>
            <div className="mb-10">
              <FeaturedPlate project={industrial.projects[0]} />
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {industrial.projects.slice(1).map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * i}>
                <GalleryPlate project={project} />
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
            intro={highRise.intro}
            dark
          />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {highRise.projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * i}>
                <ResidentialPlate project={project} />
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
            intro={commercial.intro}
          />

          <div className="grid gap-8 md:grid-cols-2">
            {commercial.projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * i}>
                <GalleryPlate project={project} />
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
