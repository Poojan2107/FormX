import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, i) => (
            <Reveal key={project.slug} delay={0.04 * (i % 3)} className="h-full">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:border-x-red/40 hover:shadow-[0_16px_40px_rgba(222,48,36,0.08)]"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-[#141414]">
                  <AssetImage
                    alt={project.title}
                    slot={project.assets.cover}
                    kind="facility"
                    aspect="landscape"
                    fit="cover"
                    label={project.sector}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
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
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-ink-muted leading-relaxed">
                    {project.client}
                  </p>

                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-line/60">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.1em] text-ink/40">
                      {project.services[0]}
                    </span>
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-x-red opacity-0 transition-opacity group-hover:opacity-100">
                      View case study →
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
