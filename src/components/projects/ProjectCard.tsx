import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";
import { projectFrameFit, projectObjectPosition } from "@/lib/projectFrame";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  aspect?: "4/3" | "fill";
  className?: string;
};

export function ProjectCard({
  project,
  priority = false,
  aspect = "4/3",
  className,
}: ProjectCardProps) {
  const formattedYear = project.year.replace("-", "–");
  const fit = projectFrameFit(project);
  const objectPosition = projectObjectPosition(project);

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
        aspect="auto"
        fit={fit}
        objectPosition={objectPosition}
        priority={priority}
        zoomOnHover
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <span className="absolute left-3 top-3 z-10 max-w-[80%] truncate bg-x-red px-2 py-1 font-display text-[8px] font-bold uppercase tracking-[0.12em] text-white sm:text-[9px]">
        {project.sector}
      </span>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="mb-1 flex flex-wrap items-center gap-x-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3 text-x-red" />
                {project.location}
              </span>
              <span className="text-white/35">·</span>
              <span>{formattedYear}</span>
            </p>
            <h3 className="truncate font-display text-[15px] font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red sm:text-[17px]">
              {project.title}
            </h3>
            <p className="mt-0.5 truncate text-[12px] text-white/55">{project.client}</p>
          </div>
          <span className="formx-cut-sm flex size-9 shrink-0 items-center justify-center border border-white/25 bg-white/10 transition-colors group-hover:border-x-red group-hover:bg-x-red">
            <ArrowUpRight className="size-4 text-white" />
          </span>
        </div>
      </div>
    </Link>
  );
}
