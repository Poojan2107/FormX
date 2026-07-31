import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
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
        "group relative block overflow-hidden bg-gray-100 x-lift",
        className,
      )}
    >
      {/* Full-bleed image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <AssetImage
          alt={project.title}
          slot={project.assets.cover}
          kind="facility"
          tone={index % 2 === 0 ? "dark" : "light"}
          aspect="landscape"
          fit="cover"
          priority={priority}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        {/* Sector tag */}
        <span className="absolute left-4 top-4 border border-x-red/40 bg-x-red px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white">
          {project.sector}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />

        {/* Arrow button on hover */}
        <div className="absolute right-4 top-4 flex size-9 items-center justify-center border border-white/0 bg-white/0 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:opacity-100">
          <ArrowUpRight className="size-4 text-white" />
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
            <MapPin className="size-3" /> {project.location} · {project.year}
          </div>
          <h3 className="mt-1 font-display text-[15px] font-bold uppercase leading-snug text-white transition-colors group-hover:text-x-red">
            {project.client}
          </h3>
          <p className="mt-0.5 text-[12px] text-white/45">{project.title}</p>
        </div>
      </div>
    </Link>
  );
}
