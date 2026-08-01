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
        "group relative block overflow-hidden bg-[#111]",
        aspect === "4/3" && "aspect-[4/3]",
        className,
      )}
    >
      <AssetImage
        alt={project.title}
        slot={project.assets.cover}
        kind="facility"
        tone="dark"
        aspect="landscape"
        fit="cover"
        priority={priority}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Light bottom scrim — keep photography readable, not buried */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />

      <span className="absolute left-3 top-3 z-10 max-w-[85%] bg-x-red px-2 py-1 font-display text-[8px] font-bold uppercase leading-tight tracking-[0.14em] text-white sm:text-[9px]">
        {project.sector}
      </span>

      <span className="absolute right-3 top-3 z-10 select-none font-display text-[36px] font-black leading-none tracking-tighter text-white/10 sm:text-[44px]">
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
