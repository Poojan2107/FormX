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
      className="mt-6 grid gap-4 border-t pt-5 sm:grid-cols-2"
      style={{ borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)" }}
    >
      <div>
        <p
          className={`font-label text-[9px] uppercase tracking-[0.2em] ${
            dark ? "text-white/38" : "text-ink/40"
          }`}
        >
          Location
        </p>
        <p
          className={`mt-1.5 text-[13px] leading-[1.55] ${
            dark ? "text-white/78" : "text-ink/72"
          }`}
        >
          {project.location}
        </p>
      </div>
      <div>
        <p
          className={`font-label text-[9px] uppercase tracking-[0.2em] ${
            dark ? "text-white/38" : "text-ink/40"
          }`}
        >
          Scope
        </p>
        <p
          className={`mt-1.5 text-[13px] leading-[1.55] ${
            dark ? "text-white/78" : "text-ink/72"
          }`}
        >
          {project.services[0] ?? project.sector}
        </p>
      </div>
    </div>
  );
}

function FeaturedPlate({ project, dark = false }: { project: Project; dark?: boolean }) {
  const frameMode = project.assets.frame ?? "cover";

  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="group block"
    >
      <div
        className="grid gap-6 border p-3 transition-shadow duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:grid-cols-12 md:gap-8 md:p-4"
        style={{
          borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
          backgroundColor: dark ? "#101010" : "#f6f4ee",
        }}
      >
        <div className="relative aspect-[16/10] overflow-hidden md:col-span-8 lg:aspect-[16/9]">
          <div
            className="absolute inset-0 border"
            style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)" }}
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

        <div className="flex flex-col justify-between md:col-span-4 md:py-2 md:pr-2">
          <div>
            <p className="font-label text-[9.5px] uppercase tracking-[0.24em] text-x-red">
              {project.area ?? project.year}
            </p>
            <h3
              className={`mt-3 font-display font-extrabold tracking-tight transition-colors group-hover:text-x-red ${
                dark ? "text-white" : "text-ink"
              }`}
              style={{ fontSize: "clamp(1.45rem, 2.5vw, 2.05rem)" }}
            >
              {project.title}
            </h3>
            <p
              className={`mt-4 text-[14px] leading-[1.8] ${
                dark ? "text-white/55" : "text-ink/58"
              }`}
            >
              {project.description}
            </p>
            <ProjectMeta project={project} dark={dark} />
          </div>

          <div className="mt-8 flex items-center justify-between">
            <span
              className={`font-label text-[9px] uppercase tracking-[0.22em] ${
                dark ? "text-white/40" : "text-ink/40"
              }`}
            >
              View project
            </span>
            <div
              className="formx-cut-sm flex size-9 items-center justify-center bg-x-red text-white transition-transform duration-300 group-hover:translate-x-1"
            >
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
      className="group block h-full"
    >
      <div
        className="flex h-full flex-col border p-3 transition-shadow duration-500 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.05)]"
        style={{
          borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
          backgroundColor: dark ? "#111111" : "#f7f5f0",
        }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 border"
            style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)" }}
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
        <div className="flex flex-1 flex-col pt-5 pb-1">
          <p className="font-label text-[9px] uppercase tracking-[0.2em] text-x-red">
            {project.location}
          </p>
          <div className="mt-2.5 flex items-start justify-between gap-3">
            <h3
              className={`font-display text-[1.08rem] font-bold leading-[1.12] tracking-tight transition-colors group-hover:text-x-red ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              {project.title}
            </h3>
            <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-x-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <p
            className={`mt-2.5 text-[13px] leading-[1.7] ${
              dark ? "text-white/48" : "text-ink/52"
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
  const landscape = project.assets.orientation === "landscape";
  // Portrait plates use cover so tower imagery fills the tall frame (no letterbox).
  const frameMode = landscape
    ? (project.assets.frame ?? "contain")
    : "cover";

  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="group flex h-full"
    >
      <div className="flex h-full w-full flex-col border border-white/10 bg-[#101010] p-3 md:p-4">
        <div
          className={`relative overflow-hidden bg-[#0d0d0d] ${
            landscape ? "aspect-[16/10]" : "aspect-[4/5]"
          }`}
        >
          <div className="absolute inset-0 border border-white/10" />
          <AssetImage
            slot={project.assets.cover}
            alt={project.title}
            fit={frameMode}
            aspect="auto"
            tone="dark"
            objectPosition={landscape ? "center center" : "center top"}
            className={`absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.02] ${
              landscape ? "p-3 md:p-4" : ""
            }`}
            sizes={
              landscape
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 1024px) 100vw, 40vw"
            }
          />
        </div>

        <div className="flex flex-1 flex-col border-x border-b border-white/10 bg-[#0d0d0d] px-5 pb-5 pt-5 md:px-6">
          <p className="font-label text-[9px] uppercase tracking-[0.22em] text-x-red">
            {project.location}
          </p>
          <div className="mt-3 flex items-start justify-between gap-3">
            <h3
              className="font-display font-bold leading-[1.08] tracking-tight text-white transition-colors group-hover:text-x-red"
              style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.6rem)" }}
            >
              {project.title}
            </h3>
            <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-x-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <p className="mt-3 text-[13px] leading-[1.7] text-white/52">
            {project.services[0] ?? project.sector}
          </p>
          <p className="mt-4 line-clamp-3 text-[13px] leading-[1.75] text-white/40">
            {project.description}
          </p>
          <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-5">
            <p className="font-label text-[9px] uppercase tracking-[0.2em] text-white/38">
              {project.area ?? project.year}
            </p>
            {project.floors ? (
              <p className="font-label text-[9px] uppercase tracking-[0.18em] text-white/28">
                {project.floors}
              </p>
            ) : null}
          </div>
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
        className="mb-11 border-b pb-8"
        style={{ borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)" }}
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-end lg:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <span className="font-display text-2xl font-black text-x-red">{number}</span>
              <h3
                className={`font-display font-extrabold tracking-tight ${
                  dark ? "text-white" : "text-ink"
                }`}
                style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.05rem)" }}
              >
                {title}
              </h3>
            </div>
            <span
              className={`mt-3 inline-block font-label text-[9.5px] tracking-[0.22em] ${
                dark ? "text-white/38" : "text-ink/42"
              }`}
            >
              {String(count).padStart(2, "0")} facilities
            </span>
          </div>
          <p
            className={`text-[15px] leading-[1.85] md:text-[16px] ${
              dark ? "text-white/58" : "text-ink/58"
            }`}
          >
            {intro}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function BrochureProjects() {
  const [industrial, highRise, commercial] = brochureProjectGroups;

  return (
    <section id="projects" className="scroll-mt-28">
      {/* ── 01 Industrial ─────────────────────────────────────── */}
      <div id="industrial" className="bg-white pb-24 pt-20 md:pb-28 md:pt-28">
        <Container>
          <div className="mb-14 grid gap-6 border-b border-ink/[0.08] pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-end lg:gap-14">
            <Reveal>
              <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
                Projects
              </p>
              <h2
                className="mt-4 font-display font-black leading-[1.02] tracking-[-0.045em] text-ink"
                style={{ fontSize: "clamp(2.15rem, 4.4vw, 3.6rem)" }}
              >
                Completed work
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-[15.5px] leading-[1.9] text-ink/58 md:text-[16px] lg:pb-1">
                Industrial plants, high-rise residential, and institutional buildings — facilities
                coordinated and documented by FormX.
              </p>
            </Reveal>
          </div>

          <SectorHeader
            number="×01"
            title="Industrial Facilities"
            count={industrial.projects.length}
            intro={industrial.intro}
          />

          <Reveal>
            <div className="mb-8">
              <FeaturedPlate project={industrial.projects[0]} />
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {industrial.projects.slice(1).map((project, i) => (
              <Reveal key={project.slug} delay={0.07 * i}>
                <GalleryPlate project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* ── 02 High-Rise ──────────────────────────────────────── */}
      <div id="high-rise" className="bg-[#0a0a0a] py-24 text-white md:py-28">
        <Container>
          <SectorHeader
            number="×02"
            title="High-Rise & Residential"
            count={highRise.projects.length}
            intro={highRise.intro}
            dark
          />

          <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-7">
            {[...highRise.projects]
              .sort((a, b) => {
                const al = a.assets.orientation === "landscape" ? 0 : 1;
                const bl = b.assets.orientation === "landscape" ? 0 : 1;
                return al - bl;
              })
              .map((project, i) => {
                const landscape = project.assets.orientation === "landscape";
                return (
                  <Reveal
                    key={project.slug}
                    delay={0.09 * i}
                    className={`h-full ${landscape ? "lg:col-span-7" : "lg:col-span-5"}`}
                  >
                    <ResidentialPlate project={project} />
                  </Reveal>
                );
              })}
          </div>
        </Container>
      </div>

      {/* ── 03 Commercial ─────────────────────────────────────── */}
      <div id="commercial" className="bg-[#f4f3f0] py-24 md:py-28">
        <Container>
          <SectorHeader
            number="×03"
            title="Institutional & Commercial"
            count={commercial.projects.length}
            intro={commercial.intro}
          />

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {commercial.projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.09 * i}>
                <GalleryPlate project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <div className="mt-16 flex justify-center">
              <Link
                href="/projects"
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2.5 border border-ink/12 bg-white px-9 py-4 font-label text-[10.5px] tracking-[0.22em] text-ink shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:border-x-red hover:text-x-red"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                }}
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
