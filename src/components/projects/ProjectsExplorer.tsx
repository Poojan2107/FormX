"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

/** Editorial dossier list — filterable, not a card mosaic */
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const initialSector = searchParams.get("sector");
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
            className="w-full border border-line bg-bg py-3 pl-10 pr-9 font-body text-sm text-ink outline-none focus:border-x-red"
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
              "px-3 py-1.5 font-label text-[10px] transition-colors",
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
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              transitionTypes={["nav-forward"]}
            className="group grid gap-6 py-8 transition-colors md:grid-cols-12 md:items-center md:gap-10 md:py-10"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-black/8 bg-[#111] p-2.5 md:col-span-4">
                <div className="x-corner relative h-full overflow-hidden">
                <AssetImage
                  alt={project.title}
                  slot={project.assets.cover}
                  kind="facility"
                  fit={project.assets.frame ?? "cover"}
                  aspect="auto"
                  objectPosition="center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="editorial-meta text-x-red">
                  {project.sector}
                </p>
                <h2 className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink md:text-[1.8rem]">
                  {project.title}
                </h2>
                <p className="mt-2 text-[13px] leading-[1.7] text-ink/50">
                  {project.location}
                  {project.area ? ` · ${project.area}` : ""}
                  {project.floors ? ` · ${project.floors}` : ""}
                </p>
                {project.risk ? (
                  <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.85] text-ink-muted">
                    {project.risk}
                  </p>
                ) : (
                  <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.85] text-ink-muted line-clamp-2">
                    {project.description}
                  </p>
                )}
                <span className="mt-5 inline-flex items-center gap-2 font-label text-[10px] text-x-red">
                  Open dossier
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
