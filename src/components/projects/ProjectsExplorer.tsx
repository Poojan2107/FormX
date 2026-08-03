"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { cn } from "@/lib/cn";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [q, setQ] = useState("");
  const [sector, setSector] = useState("All");

  const sectors = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.sector))).sort()],
    [projects],
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      if (sector !== "All" && p.sector !== sector) return false;
      if (!query) return true;
      const hay = `${p.title} ${p.client} ${p.sector} ${p.location}`.toLowerCase();
      return hay.includes(query);
    });
  }, [projects, q, sector]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 border-b border-line pb-8 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block w-full max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink/40" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search project, sector or location…"
            className="w-full border border-line bg-white py-3 pl-10 pr-9 text-sm text-ink outline-none focus:border-x-red"
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

        <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ink/45">
          {filtered.length} of {projects.length} facilities
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
        {sectors.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSector(s)}
            aria-pressed={sector === s}
            className={cn(
              "px-3 py-1.5 font-display text-[10px] font-extrabold uppercase tracking-[0.12em] transition-colors",
              sector === s
                ? "bg-x-red text-white"
                : "border border-line text-ink-muted hover:border-x-red/40 hover:text-ink",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink-muted">No projects match this filter.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              transitionTypes={["nav-forward"]}
              className="group block"
            >
              <VisualFrame
                slot={project.assets.cover}
                alt={project.title}
                fit={project.assets.frame ?? "contain"}
                aspect="landscape"
                tone="dark"
                zoomOnHover
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                    {project.sector} · {project.year}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-extrabold uppercase tracking-tight text-ink group-hover:text-x-red md:text-2xl">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-[13px] text-ink-muted">
                    {project.client} · {project.location}
                    {project.area ? ` · ${project.area}` : ""}
                  </p>
                  <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-ink-muted line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-x-red opacity-40 transition-opacity group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
