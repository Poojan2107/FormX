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
      "shrink-0 border px-3 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors sm:text-[11px] sm:tracking-[0.12em]",
      active
        ? "border-x-red bg-x-red text-white"
        : "border-line text-ink/55 hover:border-ink/30 hover:text-ink",
    );

  return (
    <div>
      <div className="formx-cut-x formx-edge formx-edge-x mb-8 flex flex-col gap-4 border border-line bg-white p-3 sm:p-4 md:p-5">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink/35" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects…"
            className="w-full border border-line bg-white py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-x-red"
            aria-label="Search projects"
          />
        </label>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-[12px] text-ink-muted">
            {filtered.length} of {projects.length} projects
          </p>
          {isActive ? (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-x-red transition-colors hover:underline"
            >
              <RotateCcw className="size-3.5" />
              Reset filters
            </button>
          ) : null}
        </div>

        <div className="flex max-w-full flex-wrap gap-2" role="group" aria-label="Filter by sector">
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

        <div className="flex max-w-full flex-wrap gap-2" role="group" aria-label="Filter by service">
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

      {filtered.length === 0 ? (
        <div className="border border-line px-6 py-14 text-center">
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={0.04 * (i % 3)} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
