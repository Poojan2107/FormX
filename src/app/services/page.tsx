import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { BrochureCta, CtaBand } from "@/components/shared/CtaBlocks";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { ProcessSteps } from "@/components/shared/ProcessSteps";

export const metadata: Metadata = {
  title: "10 Integrated Engineering & Architectural Services | FORMX",
  description:
    "Expert multidisciplinary design consultancy in India — Architectural Drawings, Structural & Civil Engineering, Mechanical Utilities, HVAC & Refrigeration, Electrical, Fire Protection, and Project Management.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Practice Services"
        title="Complete solutions in engineering & architecture"
        description="Precise, coordinated, and construction-ready packages across 10 specialized disciplines — delivered as one accountable window from concept to GFC."
        crumbs={[{ label: "Our Services" }]}
        image={{ slot: "services/architecture.jpg", kind: "service" }}
      />

      <ProofStrip compact />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <ServicesGrid />
          <BrochureCta className="mt-14" />
        </Container>
      </section>

      <ProcessSteps />

      <CtaBand
        title="Need a coordinated multidisciplinary package?"
        description="Brief our engineering leads on your industrial plant, commercial tower, or infrastructure campus."
      />
    </>
  );
}
