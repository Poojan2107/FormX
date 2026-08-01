"use client";

import { useMemo, useState } from "react";
import { RotateCcw, Search } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
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
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={0.03 * (i % 3)} className="h-full">
              <ProjectCard
                project={project}
                index={i}
                priority={i < 3}
                aspect="4/3"
                className="h-full min-h-[240px] sm:min-h-[280px]"
              />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
