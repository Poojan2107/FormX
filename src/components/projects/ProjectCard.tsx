import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";
import { projectFrameFit, projectObjectPosition } from "@/lib/projectFrame";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  className?: string;
};

/** Compact dossier plate — formx-cut evidence, not overlay marketing card */
export function ProjectCard({ project, priority = false, className }: ProjectCardProps) {
  const fit = projectFrameFit(project);
  const objectPosition = projectObjectPosition(project);

  return (
    <Link
      href={`/projects/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className={cn("group block", className)}
    >
      <div className="formx-cut overflow-hidden border border-ink/[0.08] bg-[#111] p-3">
        <div className="relative aspect-[16/10] overflow-hidden">
          <AssetImage
            alt={project.title}
            slot={project.assets.cover}
            kind="facility"
            tone="dark"
            aspect="auto"
            fit={fit}
            objectPosition={objectPosition}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-label text-[9px] tracking-[0.18em] text-x-red">{project.sector}</p>
          <h3 className="mt-1.5 font-display text-[1.05rem] font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red">
            {project.title}
          </h3>
          <p className="mt-1 text-[12px] text-ink/45">
            {project.location}
            {project.year ? ` · ${project.year.replace("-", "–")}` : ""}
          </p>
        </div>
        <ArrowUpRight className="mt-1 size-4 shrink-0 text-ink/20 transition-colors group-hover:text-x-red" />
      </div>
    </Link>
  );
}
