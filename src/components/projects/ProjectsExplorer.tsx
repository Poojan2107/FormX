"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
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
    () =>
      [
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

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 border border-line bg-white p-4 md:p-5">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink/35" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects, clients, sectors…"
            className="w-full border border-line bg-white py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-x-red"
            aria-label="Search projects"
          />
        </label>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSector(s)}
              className={cn(
                "border px-3 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors",
                sector === s
                  ? "border-x-red bg-x-red text-white"
                  : "border-line text-ink/55 hover:border-ink/30 hover:text-ink",
              )}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-[12px] text-ink-muted">
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.12em]">
              Service
            </span>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-x-red"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <p className="ml-auto text-[12px] text-ink-muted">
            {filtered.length} of {projects.length}
          </p>
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
            onClick={() => {
              setQ("");
              setSector("All");
              setService("All");
            }}
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="x-border group block border border-line transition-all hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
            >
              <AssetImage
                alt={project.title}
                slot={project.assets.cover}
                kind="facility"
                tone={i % 2 === 0 ? "dark" : "light"}
                label={project.sector}
                caption={project.title}
                aspect="landscape"
              />
              <div className="p-5 md:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
                  {project.location} · {project.year}
                </p>
                <h2 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-x-red">
                  {project.client}
                </h2>
                <p className="mt-1.5 text-[14px] text-ink-muted">{project.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
