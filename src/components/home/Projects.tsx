import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 bg-white section-y">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our projects"
            title="Featured Real Portfolio"
            description="Explore FormX multidisciplinary delivery across commercial corporate houses, industrial hubs, educational campuses, high-rise towers, and civil infrastructure."
            className="max-w-2xl"
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-x-red transition-all hover:translate-x-1"
          >
            View all 15 projects
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        {/* Large Bright Uncropped Project Media Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, i) => (
            <Reveal key={project.slug} delay={0.04 * (i % 3)} className="h-full">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_20px_45px_rgba(222,48,36,0.12)]"
              >
                {/* Bright Crisp Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 border-b border-line/60">
                  <AssetImage
                    alt={project.title}
                    slot={project.assets.cover}
                    kind="facility"
                    aspect="landscape"
                    fit="cover"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3.5 top-3.5 border border-x-red/40 bg-x-red px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-sm">
                    {project.sector}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3" />
                      {project.location}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase text-ink transition-colors group-hover:text-x-red">
                    {project.client}
                  </h3>
                  <p className="mt-1 text-[13px] text-ink-muted leading-relaxed">
                    {project.title}
                  </p>

                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-line/60">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.1em] text-ink/50">
                      {project.services[0]}
                    </span>
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-x-red transition-transform duration-300 group-hover:translate-x-1">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
