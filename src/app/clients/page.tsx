import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { ClientLogoWall } from "@/components/shared/ClientLogoWall";

export const metadata: Metadata = {
  title: "Who We Partner With | FORMX Consultants",
  description:
    "FORMX clients range from industrial houses and pharma companies to architects, contractors, and private homeowners.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Who we partner with"
        description="We look forward to collaborating with you on your next project. Our clients range from industrial houses and pharma companies to architects, contractors, and private homeowners."
        crumbs={[
          { label: "Projects", href: "/projects" },
          { label: "Partners" },
        ]}
        image={{ slot: "projects/brochure/brochure_p10_1.png", kind: "facility" }}
      />

      <ProofStrip compact />

      <ClientLogoWall />

      <CtaBand
        title="Discuss your next project"
        description="Write to inquiry@formxconsultants.com or call +91 81284 44585."
        secondary={{ label: "View projects", href: "/projects" }}
      />
    </>
  );
}
