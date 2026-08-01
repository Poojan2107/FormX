"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { RotateCcw, Search } from "lucide-react";
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
  const filterKey = `${sector}|${service}|${q.trim().toLowerCase()}`;

  const reset = () => {
    setQ("");
    setSector("All");
    setService("All");
  };

  const chipClass = (active: boolean) =>
    cn(
      "shrink-0 px-2.5 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors sm:text-[11px]",
      active
        ? "bg-x-red text-white"
        : "bg-transparent text-ink/50 hover:bg-[#f4f4f4] hover:text-ink",
    );

  return (
    <div>
      <div className="mb-8 border-b border-line pb-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <label className="relative block w-full max-w-md">
            <Search className="pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-ink/35" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="w-full border-0 border-b border-line bg-transparent py-2.5 pl-7 pr-2 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-x-red"
              aria-label="Search projects"
            />
          </label>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ink/45">
              {filtered.length} / {projects.length}
            </p>
            {isActive ? (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-x-red transition-colors hover:underline"
              >
                <RotateCcw className="size-3.5" />
                Reset
              </button>
            ) : null}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Filter by sector">
            <span className="mr-2 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
              Sector
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

          <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Filter by service">
            <span className="mr-2 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
              Service
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

      {filtered.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <p className="font-display text-lg font-bold text-ink">No projects match</p>
          <p className="mt-2 text-sm text-ink-muted">
            Clear filters or try a different search term.
          </p>
          <button
            type="button"
            className="mt-5 text-sm font-semibold text-x-red hover:underline"
            onClick={reset}
          >
            Reset filters
          </button>
        </div>
      ) : (
        <LayoutGroup>
          {/* Cinematic stage — featured project morphs with filter */}
          {featured ? (
            <div className="relative mb-3 overflow-hidden bg-[#0c0c0c]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={featured.slug}
                  className="relative min-h-[280px] md:min-h-[360px] lg:min-h-[420px]"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  </Link>

                  {!reduce ? (
                    <motion.span
                      key={`scan-${filterKey}`}
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 z-20 w-px bg-x-red shadow-[0_0_24px_rgba(222,48,36,0.8)]"
                      initial={{ left: "0%", opacity: 0.9 }}
                      animate={{ left: "100%", opacity: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  ) : null}

                  <div className="pointer-events-none relative z-10 flex h-full min-h-[280px] flex-col justify-end p-6 md:min-h-[360px] md:p-10 lg:min-h-[420px]">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                      {isActive ? "Filtered lead" : "Featured work"} · {featured.sector}
                    </p>
                    <h2 className="mt-2 max-w-xl font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
                      {featured.client}
                    </h2>
                    <p className="mt-2 max-w-lg text-[14px] text-white/65 md:text-[15px]">
                      {featured.title} · {featured.location} · {featured.year}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : null}

          {/* Grid with layout morph + stagger */}
          <motion.div
            layout
            className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {!reduce ? (
              <motion.span
                key={`rail-${filterKey}`}
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px origin-left bg-x-red"
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}

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
                    className="h-full min-h-[240px] sm:min-h-[280px]"
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
