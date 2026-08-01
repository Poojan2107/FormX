import type { Metadata } from "next";
import { Contact } from "@/components/home/Contact";
import { PageHero } from "@/components/ui/PageHero";
import { Faqs } from "@/components/home/Faqs";
import { FaqJsonLd } from "@/components/shared/JsonLd";
import { ProofStrip } from "@/components/shared/ProofStrip";

export const metadata: Metadata = {
  title: "Contact FORMX | Industrial & Commercial Engineering Leads",
  description:
    "Connect with FORMX Consultants for architectural drawings, structural engineering, civil works, and MEP utility coordination in India.",
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
      />
      <ProofStrip />
      <Contact />
      <Faqs />
    </>
  );
}
