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
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

      {/* Sector tag */}
      <span className="absolute left-4 top-4 z-10 border border-x-red/50 bg-x-red px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white">
        {project.sector}
      </span>

      {/* Index number watermark */}
      <span className="absolute right-5 top-5 z-10 font-display text-[48px] font-black leading-none tracking-tighter text-white/5 select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Bottom info — always visible, stronger on hover */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
              <MapPin className="size-3" /> {project.location} · {project.year}
            </p>
            <h3 className="mt-1 font-display text-[16px] font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red md:text-lg">
              {project.client}
            </h3>
            <p className="mt-0.5 text-[12px] text-white/50">{project.title}</p>
          </div>
          <span className="shrink-0 flex size-10 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red">
            <ArrowUpRight className="size-4 text-white" />
          </span>
        </div>
      </div>
    </Link>
  );
}
