import type { Metadata } from "next";
import { Contact } from "@/components/home/Contact";
import { PageHero } from "@/components/ui/PageHero";
import { Faqs } from "@/components/home/Faqs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact FORMX Consultants for architecture, structural, civil, and MEP design engagements.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your project"
        description="Share your facility requirements, timeline, and location. Our team will connect to understand scope and propose next steps."
        crumbs={[{ label: "Contact Us" }]}
      />
      <Contact />
      <Faqs />
    </>
  );
}
