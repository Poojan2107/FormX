import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  index?: number;
  priority?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  index = 0,
  priority = false,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "formx-cut-x formx-edge formx-edge-x x-hover-rail group flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_20px_45px_rgba(222,48,36,0.12)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line/60 bg-gray-100">
        <AssetImage
          alt={project.title}
          slot={project.assets.cover}
          kind="facility"
          tone={index % 2 === 0 ? "dark" : "light"}
          aspect="landscape"
          fit="cover"
          priority={priority}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3.5 top-3.5 border border-x-red/40 bg-x-red px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-sm">
          {project.sector}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3" />
            {project.location}
          </span>
          <span>{project.year}</span>
        </div>

        <h3 className="font-display text-lg font-bold uppercase text-ink transition-colors group-hover:text-x-red">
          {project.client}
        </h3>
        <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
          {project.title}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-line/60 pt-5">
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.1em] text-ink/50">
            {project.services[0]}
          </span>
          <span className="shrink-0 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-x-red transition-transform duration-300 group-hover:translate-x-1">
            View Case Study →
          </span>
        </div>
      </div>
    </Link>
  );
}
