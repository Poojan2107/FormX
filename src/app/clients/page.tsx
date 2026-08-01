import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { ClientLogoWall } from "@/components/shared/ClientLogoWall";
import { LeadStrip } from "@/components/shared/LeadStrip";

export const metadata: Metadata = {
  title: "Our Clients | Industrial Promoters Trusting FORMX",
  description:
    "Organisations that trust FORMX Consultants for coordinated architecture, structural, civil, and MEP design across industrial and commercial mandates.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Explore our clientele"
        description="Long-standing relationships and repeat collaborations reflect the reliability FORMX brings to industrial mandates."
        crumbs={[
          { label: "Our Work", href: "/projects" },
          { label: "Our Clients" },
        ]}
      />

      <ProofStrip />

      <ClientLogoWall />

      <LeadStrip
        title="Ready to build with FORMX?"
        subtitle="Greenfield, expansion, or industrial park — engage from early planning through site support."
      />

      <CtaBand
        title="Brief FORMX on your next facility"
        description="Architecture, Structure, Civil & MEP — one coordinated construction-ready package."
        secondary={{ label: "View projects", href: "/projects" }}
      />
    </>
  );
}
