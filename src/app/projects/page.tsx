import type { Metadata } from "next";
import { projects } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore FormX industrial and infrastructure project experience. Filter by sector and service.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Explore our projects"
        description="Integrated architecture and engineering for manufacturing plants, process facilities, logistics hubs, and industrial campuses."
        crumbs={[
          { label: "Our Work", href: "/projects" },
          { label: "Our Projects" },
        ]}
      />

      <section className="bg-white section-y">
        <Container>
          <ProjectsExplorer projects={projects} />
        </Container>
      </section>

      <CtaBand title="Have a similar facility brief?" />
    </>
  );
}
