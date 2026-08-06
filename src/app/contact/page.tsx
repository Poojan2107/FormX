import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

      <section className="fx-grain border-b border-black bg-[#0a0a09] text-white">
        <Container className="pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Contact</p>
              <h1
                className="mt-5 max-w-[14ch] font-display font-black leading-[0.96] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)" }}
              >
                Read your facility Before Issue
              </h1>
            </div>
            <div className="lg:pb-1">
              <p className="text-[15.5px] leading-[1.9] text-white/55 md:text-[16.5px]">
                Architecture, Structure and Infrastructure answer each other before drawings leave
                the studio. Share facility type, location and timeline — we start with constraints,
                not a sheet checklist.
              </p>
              <dl className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="font-label text-[9px] tracking-[0.2em] text-white/35">Phone</dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className="text-[14px] text-white/75 transition-colors hover:text-x-red"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-label text-[9px] tracking-[0.2em] text-white/35">Email</dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-[14px] text-white/75 transition-colors hover:text-x-red"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-[13px] leading-[1.7] text-white/40">{site.addressDetail}</p>
            </div>
          </div>
        </Container>
      </section>

      <Contact />
      <Faqs />

      <section className="fx-grain border-t border-black bg-[#0a0a09] py-14 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-[14px] leading-[1.85] text-white/55">
            Prefer a call or WhatsApp? Reach FORMX at {site.phone}.
          </p>
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-x-red transition-colors hover:text-white"
          >
            Engineering evidence
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </section>
    </>
  );
}
