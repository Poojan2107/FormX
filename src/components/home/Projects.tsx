import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { TiltCard } from "@/components/ui/TiltCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 bg-white section-y">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our projects"
            title="Explore our work"
            description="Integrated design and engineering for efficient industrial facilities across diverse sectors."
            className="max-w-2xl"
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-ink transition-colors hover:text-x-red"
          >
            View all projects
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, i) => (
            <Reveal key={project.slug} delay={0.04 * (i % 3)}>
              <TiltCard intensity={5} className="formx-cut h-full border border-line bg-white transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(222,48,36,0.06)]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="x-hover-rail group relative block overflow-hidden"
                >
                  <AssetImage
                    alt={project.title}
                    slot={project.assets.cover}
                    kind="facility"
                    tone={i % 2 === 0 ? "dark" : "light"}
                    label={project.sector}
                    caption={project.title}
                    aspect="landscape"
                  />
                  <div className="p-5 md:p-6">
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-x-red">
                      {project.client}
                    </h3>
                    <p className="mt-1.5 text-[14px] text-ink-muted">
                      {project.title}
                    </p>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
