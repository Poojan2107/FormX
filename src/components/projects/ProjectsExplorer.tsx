"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { RotateCcw, Search, X } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion();
  const [q, setQ] = useState("");
  const [sector, setSector] = useState("All");
  const [service, setService] = useState("All");

  const sectors = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.sector))).sort()],
    [projects],
  );

  const services = useMemo(
    () => [
      "All",
      ...Array.from(new Set(projects.flatMap((p) => p.services))).sort(),
    ],
    [projects],
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      if (sector !== "All" && p.sector !== sector) return false;
      if (service !== "All" && !p.services.includes(service)) return false;
      if (!query) return true;
      const hay = `${p.title} ${p.client} ${p.sector} ${p.location} ${p.services.join(" ")}`.toLowerCase();
      return hay.includes(query);
    });
  }, [projects, q, sector, service]);

  const isActive = q.trim() !== "" || sector !== "All" || service !== "All";
  const featured = filtered[0];

  const reset = () => {
    setQ("");
    setSector("All");
    setService("All");
  };

  const chipClass = (active: boolean) =>
    cn(
      "shrink-0 px-3 py-1.5 font-display text-[10px] font-extrabold uppercase tracking-[0.12em] transition-all sm:text-[11px]",
      active
        ? "bg-x-red text-white shadow-md"
        : "bg-[#fafafa] border border-line text-ink-muted hover:border-x-red/40 hover:text-ink",
    );

  return (
    <div>
      {/* Search & Filter Header Bar */}
      <div className="mb-10 border-b border-line pb-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by project name, client, sector or discipline…"
              className="w-full border border-line bg-white py-3 pl-10 pr-9 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-x-red"
              aria-label="Search projects"
            />
            {q ? (
              <button
                type="button"
                onClick={() => setQ("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-x-red"
              >
                <X className="size-4" />
              </button>
            ) : null}
          </label>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2 border border-line bg-[#fafafa] px-3.5 py-1.5 font-display text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
              <span>Showing:</span>
              <span className="text-x-red">{filtered.length}</span>
              <span>of</span>
              <span>{projects.length} Projects</span>
            </span>

            {isActive ? (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 font-display text-[11px] font-extrabold uppercase tracking-[0.14em] text-x-red transition-colors hover:underline"
              >
                <RotateCcw className="size-3.5" />
                Reset Filters
              </button>
            ) : null}
          </div>
        </div>

        {/* Sector & Service Pill Category Selector Bars */}
        <div className="mt-6 flex flex-col gap-3.5">
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by sector">
            <span className="mr-2 font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-x-red">
              Sector:
            </span>
            {sectors.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSector(s)}
                aria-pressed={sector === s}
                className={chipClass(sector === s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by service">
            <span className="mr-2 font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-x-red">
              Service:
            </span>
            {services.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setService(s)}
                aria-pressed={service === s}
                className={chipClass(service === s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Zero Match State */}
      {filtered.length === 0 ? (
        <div className="border border-line bg-[#fafafa] px-6 py-16 text-center">
          <p className="font-display text-xl font-extrabold text-ink">No Projects Match Criteria</p>
          <p className="mt-2 text-sm text-ink-muted">
            Try adjusting your search query or selecting a different sector filter.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 border border-x-red bg-x-red px-6 py-3 font-display text-[11px] font-extrabold uppercase tracking-widest text-white shadow-md"
            onClick={reset}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <LayoutGroup>
          {/* Featured Stage View */}
          {featured ? (
            <div className="relative mb-6 overflow-hidden border border-line bg-[#0c0c0c] shadow-2xl formx-cut-x formx-edge formx-edge-x">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={featured.slug}
                  className="relative min-h-[300px] md:min-h-[380px] lg:min-h-[440px]"
                  initial={reduce ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                  exit={reduce ? undefined : { opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/projects/${featured.slug}`}
                    transitionTypes={["nav-forward"]}
                    className="absolute inset-0 block"
                  >
                    <AssetImage
                      alt={featured.client}
                      slot={featured.assets.cover}
                      kind="facility"
                      fit="cover"
                      tone="dark"
                      priority
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  </Link>

                  <div className="pointer-events-none relative z-10 flex h-full min-h-[300px] flex-col justify-end p-6 md:min-h-[380px] md:p-10 lg:min-h-[440px]">
                    <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                      {isActive ? "Filtered Highlight" : "Featured Project"} · {featured.sector}
                    </span>
                    <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
                      {featured.client}
                    </h2>
                    <p className="mt-2 max-w-xl text-[14px] text-white/70 md:text-[15px]">
                      {featured.title} · {featured.location} · {featured.year}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : null}

          {/* Grid Layout of Portfolio Items */}
          <motion.div
            layout
            className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.slice(1).map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  layoutId={`project-card-${project.slug}`}
                  className="h-full"
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, y: 28, clipPath: "inset(12% 0 0 0)" }
                  }
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
                  exit={
                    reduce
                      ? undefined
                      : { opacity: 0, scale: 0.96, transition: { duration: 0.2 } }
                  }
                  transition={{
                    layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.35, delay: reduce ? 0 : 0.04 * (i % 6) },
                    y: { duration: 0.4, delay: reduce ? 0 : 0.04 * (i % 6) },
                    clipPath: { duration: 0.45, delay: reduce ? 0 : 0.04 * (i % 6) },
                  }}
                >
                  <ProjectCard
                    project={project}
                    priority={i < 3}
                    aspect="4/3"
                    className="h-full min-h-[260px] sm:min-h-[300px]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      )}
    </div>
  );
}
