import type { Metadata } from "next";
import { projects } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { LeadStrip } from "@/components/shared/LeadStrip";

export const metadata: Metadata = {
  title: "Industrial & Infrastructure Projects | FORMX Portfolio",
  description:
    "Explore FORMX industrial and infrastructure project experience across commercial HQ, manufacturing, PEB warehouses, and institutional campuses. Filter by sector and service.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Explore our projects"
        description="Integrated architecture and engineering for manufacturing plants, process facilities, logistics hubs, and industrial campuses."
        crumbs={[{ label: "Our Projects" }]}
        image={{ slot: "projects/kalpataru-corporate-house.jpg", kind: "facility" }}
      />

      <ProofStrip />

      <section className="bg-white section-y">
        <Container>
          <ProjectsExplorer projects={projects} />
        </Container>
      </section>

      <LeadStrip
        title="Have a similar facility brief?"
        subtitle="Share site constraints, capacity targets, and preferred structural system — our leads respond with coordinated scope guidance."
      />

      <CtaBand
        title="Brief FORMX on your next facility mandate"
        description="Architecture, Structure, Civil & MEP — coordinated GFC packages from concept to site support."
        secondary={{ label: "View all services", href: "/services" }}
      />
    </>
  );
}
