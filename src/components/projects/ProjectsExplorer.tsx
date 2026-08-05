"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

/** Jacobs-style filterable project grid — image-led, short copy */
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              transitionTypes={["nav-forward"]}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                <AssetImage
                  alt={project.title}
                  slot={project.assets.cover}
                  kind="facility"
                  fit="cover"
                  aspect="auto"
                  objectPosition="center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
                    {project.sector}
                  </p>
                  <h2 className="mt-1 font-display text-lg font-extrabold uppercase tracking-tight text-white">
                    {project.title}
                  </h2>
                  <p className="mt-1 flex items-center justify-between gap-2 text-[12px] text-white/55">
                    <span>{project.location}</span>
                    <ArrowUpRight className="size-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
