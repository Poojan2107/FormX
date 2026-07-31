import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VendorForm } from "@/components/forms/VendorForm";
import { CtaBand } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "Vendor Registration",
  description:
    "Register as a FormX vendor for industrial project packages and specialised services.",
};

export default function VendorRegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Vendor registration"
        description="Register your organisation to engage with FormX on industrial project packages, supply, and specialised services."
        crumbs={[{ label: "Vendor Registration" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <VendorForm />
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Prefer to reach us directly?"
        description="Share capability profiles and certifications with our procurement team by email."
        primary={{ label: "Email procurement", href: "mailto:contact@formxconsultants.com" }}
      />
    </>
  );
}
