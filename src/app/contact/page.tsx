import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/home/Contact";
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

      <section className="border-b border-line bg-white pt-24 pb-14 md:pt-32 md:pb-16">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Begin collaboration
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Let&apos;s understand your facility first
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            By the time you write to us, you already know how FORMX thinks: Architecture, Structure
            and Infrastructure coordinated before issue. Share facility type, location and timeline —
            we review constraints before we talk solutions.
          </p>
          <p className="mt-4 max-w-2xl text-[14px] leading-[1.8] text-ink-muted">
            Industrial houses, pharma companies, architects, contractors and private homeowners —
            same conversation: reduce construction uncertainty early.
          </p>
          <p className="mt-6 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-ink/45">
            {site.phone} · {site.email}
          </p>
          <p className="mt-2 text-[13px] text-ink-muted">{site.addressDetail}</p>
        </Container>
      </section>

      <Contact />
      <Faqs />

      <section className="border-t border-line bg-[#0d0d0d] py-14 text-white">
        <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-[14px] leading-[1.85] text-white/60">
            Prefer a call or WhatsApp? Reach FORMX at {site.phone}.
          </p>
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red"
          >
            View project record →
          </Link>
        </Container>
      </section>
    </>
  );
}
