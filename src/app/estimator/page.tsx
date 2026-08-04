import type { Metadata } from "next";
import { StructuralEstimator } from "@/components/tools/StructuralEstimator";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Industrial Structural & PEB Load Estimator | FORMX Consultants",
  description:
    "Calculate preliminary PEB steel tonnage, RCC foundation volume, FM2 floor slab thickness, and GFC drawing delivery timelines based on IS 800 & IS 1893 codes.",
};

export default function EstimatorPage() {
  return (
    <>
      <section className="border-b border-line bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Engineering calculator
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Structural &amp; PEB load estimator
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            Estimate preliminary PEB steel tonnage, RCC concrete requirements, and GFC package
            timelines for your proposed industrial facility.
          </p>
        </Container>
      </section>

      <StructuralEstimator />

      <CtaBand
        title="Brief FORMX on your proposed facility"
        description="Our structural leads conduct detailed STAAD.Pro load path modeling, foundation engineering, and zero-clash BIM coordination."
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}
