"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";
import { projectObjectPosition } from "@/lib/projectFrame";

/** Editorial dossier list — filterable, not a card mosaic */
export function ProjectsExplorer({
  projects,
  initialSector = "All",
}: {
  projects: Project[];
  initialSector?: string;
}) {
  const [q, setQ] = useState("");
  const [sector, setSector] = useState(initialSector && initialSector.length ? initialSector : "All");

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
      <div className="mb-8 flex flex-col gap-5 border-b border-line pb-8 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block w-full max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink/40" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search project, sector or location…"
            className="w-full border border-line bg-[#faf9f5] py-3 pl-10 pr-9 font-body text-sm text-ink outline-none transition-colors focus:border-x-red"
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

        <p className="font-label text-[11px] text-ink/45">
          {filtered.length} of {projects.length} facilities
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
        {sectors.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSector(s)}
            aria-pressed={sector === s}
            className={cn(
              sector === s
                ? "bg-x-red text-white"
                : "border border-line text-ink-muted hover:border-x-red/40 hover:text-ink",
              "px-3.5 py-2 font-label text-[10px] transition-colors",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink-muted">No projects match this filter.</p>
      ) : (
        <div className="divide-y divide-line border-y border-line">
          {filtered.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              transitionTypes={["nav-forward"]}
              className="group grid gap-6 py-8 transition-all duration-300 hover:bg-surface-muted/30 md:grid-cols-12 md:items-center md:gap-10 md:py-10 md:px-4"
            >
              <div className="md:col-span-5">
                <div className="formx-card formx-cut-sm relative aspect-[16/10] overflow-hidden border border-line bg-white shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:border-x-red/40">
                  <AssetImage
                    alt={project.title}
                    slot={project.assets.cover}
                    kind="facility"
                    fit="cover"
                    aspect="landscape"
                    tone="light"
                    objectPosition={projectObjectPosition(project)}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute bottom-0 inset-x-0 flex items-center justify-between border-t border-line/80 bg-white/90 backdrop-blur-sm px-3.5 py-2 font-label text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/70">
                    <span className="text-x-red">[DOSSIER 0{i + 1}]</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-x-red" />
                  <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                    {project.sector}
                  </p>
                </div>
                <h2 className="mt-2.5 font-display text-xl font-black tracking-tight text-ink transition-colors group-hover:text-x-red md:text-2xl">
                  {project.title}
                </h2>
                <p className="mt-2 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">
                  {project.client} · {project.location}
                  {project.area ? ` · ${project.area}` : ""}
                  {project.floors ? ` · ${project.floors}` : ""}
                </p>
                <p className="mt-3.5 max-w-[56ch] text-[14.5px] leading-[1.8] text-ink/75 line-clamp-3">
                  {project.description}
                </p>
                {project.risk ? (
                  <div className="mt-3 flex items-start gap-2.5 border-l-2 border-x-red bg-x-red/[0.04] p-2.5 text-[12.5px] leading-[1.65] text-ink/80">
                    <span className="font-label text-[9px] font-bold uppercase tracking-[0.16em] text-x-red">
                      Risk Answered:
                    </span>
                    <span className="flex-1">{project.risk}</span>
                  </div>
                ) : null}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line/70 pt-4">
                  <span className="font-label text-[10px] font-bold uppercase tracking-[0.14em] text-ink/40">
                    {project.services[0] ?? "Engineering Scope"}
                  </span>
                  <span className="inline-flex items-center gap-2 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-x-red transition-all group-hover:translate-x-1">
                    Open Engineering Dossier
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
