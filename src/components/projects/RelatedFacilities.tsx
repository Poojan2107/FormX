import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { projectObjectPosition } from "@/lib/projectFrame";

/**
 * Related brochure facilities — equal-height plates with orientation
 * matching each project's asset (bungalow landscape, tower portrait).
 */
export function RelatedFacilities({
  title = "Related facilities",
  projects,
  viewAllHref = "/projects",
}: {
  title?: string;
  projects: Project[];
  viewAllHref?: string;
}) {
  if (!projects.length) return null;

  return (
    <section className="border-t border-line bg-[#f7f6f2] py-14 md:py-20">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4 border-b border-ink/[0.08] pb-5">
          <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
            {title}
          </h3>
          <Link
            href={viewAllHref}
            transitionTypes={["nav-forward"]}
            className="inline-flex items-center gap-1.5 font-label text-[10px] tracking-[0.18em] text-x-red transition-colors hover:text-ink"
          >
            View all
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div
          className={cn(
            "grid items-stretch gap-6",
            projects.length === 1
              ? "max-w-xl"
              : projects.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-3",
          )}
        >
          {projects.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              transitionTypes={["nav-forward"]}
              className="group formx-card formx-cut-sm flex h-full flex-col border border-line bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-x-red/40 hover:-translate-y-1.5"
            >
              {/* 100% Full-Bleed Display Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <AssetImage
                  slot={project.assets.cover}
                  alt={project.title}
                  fit="cover"
                  aspect="auto"
                  tone="light"
                  objectPosition={projectObjectPosition(project)}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 inset-x-0 flex items-center justify-between border-t border-line/80 bg-white/90 backdrop-blur-sm px-3 py-1.5 font-label text-[9px] font-bold uppercase tracking-[0.16em] text-ink/70">
                  <span className="text-x-red">[FACILITY 0{idx + 1}]</span>
                  <span>{project.location}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-label text-[9.5px] font-bold uppercase tracking-[0.2em] text-x-red">
                  {project.sector}
                </p>
                <div className="mt-2 flex items-start justify-between gap-3">
                  <h4 className="font-display text-[1.1rem] font-bold leading-[1.2] tracking-tight text-ink transition-colors group-hover:text-x-red">
                    {project.title}
                  </h4>
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-x-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-2 text-[13px] leading-[1.65] text-ink/60">
                  {project.services[0] ?? project.sector}
                </p>
                <p className="mt-auto pt-4 border-t border-line/50 font-label text-[9.5px] font-bold uppercase tracking-[0.18em] text-ink/40">
                  {project.area ?? project.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
