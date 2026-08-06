"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureProjects } from "@/data/brochureHome";
import { projectFrameFit, projectObjectPosition } from "@/lib/projectFrame";

/**
 * PROJECTS — Editorial evidence index.
 * One dossier list (matches /projects), not three card-gallery chapters.
 */
export function BrochureProjects() {
  const featured = brochureProjects[0];
  const rest = brochureProjects.slice(1);

  return (
    <section id="projects" className="scroll-mt-28 border-t border-ink/[0.06] bg-[#fafaf8] py-24 md:py-32">
      <Container>
        <div className="mb-12 grid gap-8 border-b border-ink/[0.08] pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-x-red">Engineering evidence</p>
            <h2
              className="mt-4 font-display font-black leading-[0.98] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Completed facilities
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[15px] leading-[1.9] text-ink/55 md:text-[16px] lg:pb-1">
              Brochure record — industrial, high-rise and institutional work coordinated Before
              Issue. Open a dossier for the decisions that held.
            </p>
          </Reveal>
        </div>

        {featured ? (
          <Reveal>
            <Link
              href={`/projects/${featured.slug}`}
              transitionTypes={["nav-forward"]}
              className="group grid gap-8 border-b border-ink/[0.08] pb-12 md:grid-cols-12 md:items-center md:gap-12 md:pb-14"
            >
              <div className="formx-cut relative aspect-[16/10] overflow-hidden border border-ink/[0.08] bg-[#111] p-3 md:col-span-7">
                <AssetImage
                  slot={featured.assets.cover}
                  alt={featured.title}
                  fit={projectFrameFit(featured)}
                  aspect="auto"
                  objectPosition={projectObjectPosition(featured)}
                  tone="dark"
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="md:col-span-5">
                <p className="font-label text-[10px] tracking-[0.2em] text-x-red">
                  Featured · {featured.sector}
                </p>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-2 text-[13px] text-ink/45">
                  {featured.location}
                  {featured.area ? ` · ${featured.area}` : ""}
                </p>
                <p className="mt-5 text-[15px] leading-[1.85] text-ink/58">
                  {featured.risk ?? featured.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-x-red">
                  Open dossier
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ) : null}

        <div className="divide-y divide-ink/[0.08] border-b border-ink/[0.08]">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={0.03 * i} from="fade">
              <Link
                href={`/projects/${project.slug}`}
                transitionTypes={["nav-forward"]}
                className="group grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-8 md:py-8"
              >
                <span className="font-label text-[10px] tracking-[0.2em] text-x-red md:col-span-1">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-label text-[9px] tracking-[0.14em] text-ink/35">
                    {project.sector}
                  </p>
                </div>
                <p className="text-[14px] leading-[1.7] text-ink/50 md:col-span-5">
                  {project.location}
                  {project.area ? ` · ${project.area}` : ""}
                  {project.floors ? ` · ${project.floors}` : ""}
                </p>
                <span className="hidden items-center justify-end gap-1 font-label text-[10px] tracking-[0.16em] text-ink/30 transition-colors group-hover:text-x-red md:col-span-2 md:inline-flex">
                  Dossier
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-5">
            <p className="font-label text-[10px] tracking-[0.18em] text-ink/35">
              {brochureProjects.length} facilities · FORMX.pdf
            </p>
            <Link
              href="/projects"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-x-red transition-colors hover:text-ink"
            >
              Full engineering evidence
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
