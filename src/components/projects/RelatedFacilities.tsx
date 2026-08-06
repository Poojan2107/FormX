import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { AssetImage } from "@/components/ui/AssetImage";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { projectFrameFit, projectObjectPosition } from "@/lib/projectFrame";

/** Related brochure facilities — dossier plates, no card shadows */
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
    <section className="border-t border-ink/[0.08] bg-white py-14 md:py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4 border-b border-ink/[0.08] pb-6">
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
            "grid items-stretch gap-8",
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
                className="group flex h-full flex-col"
              >
                <div
                  className={cn(
                    "formx-cut relative overflow-hidden border border-ink/[0.08] bg-[#111] p-3",
                    landscape ? "aspect-[16/10]" : portrait ? "aspect-[3/4]" : "aspect-[4/3]",
                  )}
                >
                  <AssetImage
                    slot={project.assets.cover}
                    alt={project.title}
                    fit={frame}
                    aspect="auto"
                    tone="dark"
                    objectPosition={projectObjectPosition(project)}
                    className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                  <p className="font-label text-[9px] tracking-[0.18em] text-x-red">
                    {project.location}
                  </p>
                  <div className="mt-1.5 flex items-start justify-between gap-3">
                    <h4 className="font-display text-[1.05rem] font-extrabold leading-[1.15] tracking-tight text-ink transition-colors group-hover:text-x-red">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-ink/20 transition-colors group-hover:text-x-red" />
                  </div>
                  <p className="mt-2 text-[13px] leading-[1.65] text-ink/45">
                    {project.services[0] ?? project.sector}
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
