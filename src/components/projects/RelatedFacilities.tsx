import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { projectFrameFit, projectObjectPosition } from "@/lib/projectFrame";

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
            "grid items-stretch gap-5",
            projects.length === 1
              ? "max-w-xl"
              : projects.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-3",
          )}
        >
          {projects.map((project) => {
            const landscape = project.assets.orientation === "landscape";
            const portrait = project.assets.orientation === "portrait";
            const frame = projectFrameFit(project);

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                transitionTypes={["nav-forward"]}
                className="group flex h-full flex-col border border-ink/[0.08] bg-white p-3 transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
              >
                <div
                  className={cn(
                    "relative overflow-hidden bg-[#ece9e2]",
                    landscape ? "aspect-[16/10]" : portrait ? "aspect-[3/4]" : "aspect-[4/3]",
                  )}
                >
                  <div className="absolute inset-0 border border-ink/[0.06]" />
                  <AssetImage
                    slot={project.assets.cover}
                    alt={project.title}
                    fit={frame}
                    aspect="auto"
                    tone="light"
                    objectPosition={projectObjectPosition(project)}
                    className={cn(
                      "absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.02]",
                      frame === "contain" ? "p-3" : "",
                    )}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                  <p className="font-label text-[9px] uppercase tracking-[0.2em] text-x-red">
                    {project.location}
                  </p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h4 className="font-display text-[1.05rem] font-bold leading-[1.15] tracking-tight text-ink transition-colors group-hover:text-x-red">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-x-red" />
                  </div>
                  <p className="mt-2 text-[12.5px] leading-[1.65] text-ink/50">
                    {project.services[0] ?? project.sector}
                  </p>
                  <p className="mt-auto pt-4 font-label text-[9px] uppercase tracking-[0.18em] text-ink/35">
                    {project.area ?? project.year}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
