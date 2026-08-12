import type { Metadata } from "next";
import Link from "next/link";
import { FormxContactSection } from "@/components/shared/FormxContactSection";
import { Faqs } from "@/components/home/Faqs";
import { FaqJsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact FORMX | Project Discussion",
  description:
    "Discuss your next project with FORMX Consultants. inquiry@formxconsultants.com · +91 81284 44585 · Ahmedabad.",
};

export default function ContactPage() {
  return (
    <>
      <FaqJsonLd />

      <section className="fx-grain border-b border-line bg-[#fafaf8] pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Contact</p>
              <h1
                className="editorial-title mt-5 max-w-[16ch] text-ink"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)" }}
              >
                Let&apos;s read your facility Before Issue
              </h1>
            </div>
            <div>
              <p className="text-[16px] leading-[1.9] text-ink/62 md:text-[17px]">
                Architecture, Structure and Infrastructure answer each other before drawings leave
                the studio. Share facility type, location and timeline — we start with constraints
                and interfaces, not a sheet checklist.
              </p>
              <p className="mt-5 font-label text-[11px] tracking-[0.14em] text-ink/45">
                {site.phone} · {site.email}
              </p>
              <p className="mt-2 text-[13px] text-ink/50">{site.addressDetail}</p>
            </div>
          </div>
        </Container>
      </section>

      <FormxContactSection />
      <Faqs />

      <section className="border-t border-line bg-[#0d0d0d] py-14 text-white">
        <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-[14px] leading-[1.85] text-white/60">
            Prefer a call or WhatsApp? Reach FORMX at {site.phone}.
          </p>
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="font-label text-[11px] tracking-[0.16em] text-x-red transition-colors hover:text-white"
          >
            View project record →
          </Link>
        </Container>
      </section>
    </>
  );
}
