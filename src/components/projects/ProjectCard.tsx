import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  index?: number;
  priority?: boolean;
  aspect?: "4/3" | "fill";
  className?: string;
};

export function ProjectCard({
  project,
  index = 0,
  priority = false,
  aspect = "4/3",
  className,
}: ProjectCardProps) {
  const formattedYear = project.year.replace("-", "–");

  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className={cn(
        "group relative block overflow-hidden bg-gray-100 x-lift x-desat",
        aspect === "4/3" && "aspect-[4/3]",
        className,
      )}
    >
      {/* Full-bleed image */}
      <AssetImage
        alt={project.title}
        slot={project.assets.cover}
        kind="facility"
        tone={index % 2 === 0 ? "dark" : "light"}
        aspect="landscape"
        fit="cover"
        priority={priority}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Permanent subtle gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

      {/* Sector tag badge — formatted with max-width and leading-tight to avoid ugly overflow */}
      <span className="absolute left-3.5 top-3.5 z-10 max-w-[85%] border border-x-red/50 bg-x-red px-2.5 py-1 font-display text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.16em] text-white leading-tight shadow-md truncate">
        {project.sector}
      </span>

      {/* Index number watermark */}
      <span className="absolute right-4 top-4 z-10 font-display text-[40px] sm:text-[48px] font-black leading-none tracking-tighter text-white/5 select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Bottom info — clean flex spacing with truncate preventing text overlap */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
        <div className="flex items-end justify-between gap-3 min-w-0">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 mb-1 leading-snug">
              <span className="inline-flex items-center gap-1 shrink-0">
                <MapPin className="size-3 text-x-red shrink-0" />
                <span>{project.location}</span>
              </span>
              <span className="text-white/40">·</span>
              <span className="whitespace-nowrap font-medium text-white/80">{formattedYear}</span>
            </div>

            <h3 className="font-display text-[15px] sm:text-[17px] font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red truncate">
              {project.client}
            </h3>
            <p className="mt-0.5 text-[11px] sm:text-[12px] text-white/60 truncate leading-normal">
              {project.title}
            </p>
          </div>

          <span className="shrink-0 flex size-8 sm:size-9 items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red">
            <ArrowUpRight className="size-4 text-white" />
          </span>
        </div>
      </div>
    </Link>
  );
}
