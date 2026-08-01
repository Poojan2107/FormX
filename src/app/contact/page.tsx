import type { Metadata } from "next";
import { Contact } from "@/components/home/Contact";
import { PageHero } from "@/components/ui/PageHero";
import { Faqs } from "@/components/home/Faqs";
import { FaqJsonLd } from "@/components/shared/JsonLd";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { BrochureCta, CtaBand } from "@/components/shared/CtaBlocks";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact FORMX | Industrial & Commercial Engineering Leads",
  description:
    "Connect with FORMX Consultants in Ahmedabad for architectural drawings, structural engineering, civil works, and MEP utility coordination — GFC-ready packages.",
};

export default function ContactPage() {
  return (
    <>
      <FaqJsonLd />
      <PageHero
        eyebrow="Direct Lead Channel"
        title="Let’s discuss your project"
        description="Share your facility requirements, location, and timeline. Our multidisciplinary engineering leads will connect within 24 hours."
        crumbs={[{ label: "Contact Us" }]}
        image={{ slot: "about/studio-cover.jpg", kind: "studio" }}
      />
      <ProofStrip compact />
      <Contact />
      <Faqs />
      <section className="bg-white pb-16 md:pb-20">
        <Container>
          <BrochureCta />
        </Container>
      </section>
      <CtaBand
        title="Prefer a live briefing?"
        description="Call or WhatsApp FORMX leads for early site zoning and structural grid guidance."
        secondary={{ label: "View portfolio", href: "/projects" }}
      />
    </>
  );
}
