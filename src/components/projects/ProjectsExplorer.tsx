"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";
import { projectFrameFit, projectObjectPosition } from "@/lib/projectFrame";

/** Editorial dossier list — filterable evidence, not a card mosaic */
export function ProjectsExplorer({
  projects,
  initialSector = "All",
}: {
  projects: Project[];
  initialSector?: string;
}) {
  const [q, setQ] = useState("");
  const [sector, setSector] = useState(
    initialSector && initialSector.length ? initialSector : "All",
  );

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
      <div className="mb-10 flex flex-col gap-6 border-b border-ink/[0.08] pb-8 lg:flex-row lg:items-end lg:justify-between">
        <label className="relative block w-full max-w-md">
          <Search className="pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-ink/35" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search facility, sector or location…"
            className="w-full border-b border-ink/[0.12] bg-transparent py-3 pl-7 pr-8 font-body text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-x-red"
            aria-label="Search projects"
          />
          {q ? (
            <button
              type="button"
              onClick={() => setQ("")}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-ink/40 hover:text-x-red"
            >
              <X className="size-4" />
            </button>
          ) : null}
        </label>

        <p className="font-label text-[10px] tracking-[0.18em] text-ink/40">
          {filtered.length} of {projects.length} facilities
        </p>
      </div>

      <div
        className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-ink/[0.06] pb-6"
        role="group"
        aria-label="Filter by sector"
      >
        {sectors.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSector(s)}
            aria-pressed={sector === s}
            className={cn(
              "font-label text-[10px] tracking-[0.16em] transition-colors",
              sector === s
                ? "text-x-red underline decoration-2 underline-offset-8"
                : "text-ink/40 hover:text-ink",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink/45">No projects match this filter.</p>
      ) : (
        <div className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
          {filtered.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              transitionTypes={["nav-forward"]}
              className="group grid gap-6 py-9 transition-colors md:grid-cols-12 md:items-center md:gap-10 md:py-11"
            >
              <div className="formx-cut relative aspect-[16/10] overflow-hidden border border-ink/[0.08] bg-[#111] p-3 md:col-span-4">
                <AssetImage
                  alt={project.title}
                  slot={project.assets.cover}
                  kind="facility"
                  fit={projectFrameFit(project)}
                  aspect="auto"
                  objectPosition={projectObjectPosition(project)}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-label text-[10px] tracking-[0.2em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-label text-[10px] tracking-[0.16em] text-ink/40">
                    {project.sector}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red md:text-[1.85rem]">
                  {project.title}
                </h2>
                <p className="mt-2 text-[13px] leading-[1.7] text-ink/45">
                  {project.location}
                  {project.area ? ` · ${project.area}` : ""}
                  {project.floors ? ` · ${project.floors}` : ""}
                </p>
                {project.risk ? (
                  <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.85] text-ink/58">
                    {project.risk}
                  </p>
                ) : (
                  <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.85] text-ink/58 line-clamp-2">
                    {project.description}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-ink/[0.08] pt-4">
                  <span className="font-label text-[10px] tracking-[0.14em] text-ink/35">
                    {project.services[0] ?? "Engineering scope"}
                  </span>
                  <span className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.16em] text-x-red">
                    Open dossier
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
