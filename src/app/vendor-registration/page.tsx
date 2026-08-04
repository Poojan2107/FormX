import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VendorForm } from "@/components/forms/VendorForm";
import { CtaBand } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "Vendor Registration | Partner with FORMX Consultants",
  description:
    "Register as a FORMX vendor for industrial project packages, specialised supply, and coordinated engineering delivery partnerships.",
};

export default function VendorRegistrationPage() {
  return (
    <>
      <section className="border-b border-line bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Partners
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Vendor registration
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            Register your organisation to engage with FORMX on industrial project packages, supply,
            and specialised services.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div className="border border-line bg-[#fafafa] p-6 md:p-8">
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                  Partnership criteria
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
                  What we look for
                </h2>
                <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-ink-muted">
                  <li className="border-l-2 border-x-red pl-3">
                    Proven industrial / commercial delivery track record
                  </li>
                  <li className="border-l-2 border-x-red pl-3">
                    Valid certifications, insurance, and statutory compliance
                  </li>
                  <li className="border-l-2 border-x-red pl-3">
                    Capability to align with GFC packages and site schedules
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <VendorForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to register as a FORMX vendor?"
        description="Complete the form above or email your capability profile."
        primary={{ label: "Email procurement", href: "mailto:inquiry@formxconsultants.com" }}
        secondary={{ label: "Contact FORMX", href: "/contact" }}
      />
    </>
  );
}
