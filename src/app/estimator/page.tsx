import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { StructuralEstimator } from "@/components/tools/StructuralEstimator";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { CtaBand } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "Industrial Structural & PEB Load Estimator | FORMX Consultants",
  description:
    "Calculate preliminary PEB steel tonnage, RCC foundation volume, FM2 floor slab thickness, and GFC drawing delivery timelines based on IS 800 & IS 1893 codes.",
};

export default function EstimatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Calculator"
        title="Structural &amp; PEB Load Estimator"
        description="Estimate preliminary PEB steel tonnage, RCC concrete requirements, and GFC package timelines for your proposed industrial facility."
        crumbs={[{ label: "Structural Estimator" }]}
        image={{ slot: "services/structural.jpg", kind: "service" }}
      />

      <ProofStrip compact />

      <StructuralEstimator />

      <CtaBand
        title="Brief FORMX on your proposed facility"
        description="Our structural leads conduct detailed STAAD.Pro load path modeling, foundation engineering, and zero-clash BIM coordination."
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}
