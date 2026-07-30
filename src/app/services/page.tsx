import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { BrochureCta, CtaBand } from "@/components/shared/CtaBlocks";
import { ServicesGrid } from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "FORMX Consultants — Architectural Drawings, Site Infrastructure, Sustainable Design, Structural & Civil Engineering, Mechanical Utilities, HVAC & Refrigeration, Electrical, Fire Protection, and Project Management & Procurement.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete solutions in engineering & architecture"
        description="Precise, coordinated, and construction-ready packages across all FORMX disciplines — from architectural drawings and site infrastructure to structural, civil, MEP, fire protection, and project management."
        crumbs={[{ label: "Our Services" }]}
      />

      <section className="bg-white section-y">
        <Container>
          <ServicesGrid />
          <BrochureCta className="mt-14" />
        </Container>
      </section>

      <CtaBand title="Need a multidisciplinary package?" />
    </>
  );
}
