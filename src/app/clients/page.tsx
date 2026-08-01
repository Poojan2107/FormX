import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
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

      <section className="bg-white">
        <div className="relative min-h-[240px] overflow-hidden bg-[#111] md:min-h-[300px]">
          <AssetImage
            alt="Industrial facility delivery"
            slot="projects/kalpataru-corporate-house.jpg"
            kind="facility"
            fit="cover"
            tone="dark"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <Container className="relative z-10 flex min-h-[240px] items-end py-10 md:min-h-[300px]">
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
                Trusted partnerships
              </p>
              <h2 className="mt-2 max-w-xl font-display text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
                Promoters &amp; industrial leaders we design with
              </h2>
            </div>
          </Container>
        </div>
      </section>

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
