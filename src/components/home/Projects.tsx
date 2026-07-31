import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";

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
              <ProjectCard project={project} index={i} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
