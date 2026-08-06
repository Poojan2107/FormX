import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  portfolioContactNote,
  brochureVisuals,
  partnerTypes,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

export const metadata: Metadata = {
  title: "Who We Partner With | FORMX Consultants",
  description:
    "FORMX clients range from industrial houses and pharma companies to architects, contractors, and private homeowners.",
};

/** Brochure partner types only — no fake logo wall */
export default function ClientsPage() {
  return (
    <>
      <section className="fx-grain border-b border-black bg-[#0a0a09] text-white">
        <Container className="pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Partners</p>
              <h1
                className="mt-5 max-w-[14ch] font-display font-black leading-[0.96] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)" }}
              >
                Who places trust in FormX
              </h1>
            </div>
            <p className="text-[15.5px] leading-[1.9] text-white/55 md:text-[16.5px] lg:pb-1">
              {portfolioContactNote}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="formx-cut-lg overflow-hidden border border-ink/[0.08] bg-[#fafaf8] p-3">
              <VisualFrame
                slot={brochureVisuals.partnersBanner}
                alt="FORMX partner types from brochure"
                fit="contain"
                aspect="cinema"
                tone="light"
              />
            </div>
          </Reveal>

          <div className="mt-14 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
            {partnerTypes.map((client, i) => (
              <Reveal key={client.name} delay={0.03 * i}>
                <div className="grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-8 md:py-8">
                  <span className="font-label text-[10px] tracking-[0.24em] text-x-red md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-xl font-extrabold tracking-tight text-ink md:col-span-5 md:text-2xl">
                    {client.name}
                  </p>
                  <p className="font-label text-[10px] tracking-[0.16em] text-ink/40 md:col-span-6">
                    {client.tag}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="fx-grain border-t border-black bg-[#0a0a09] py-16 text-white md:py-20">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-x-red">Continue</p>
              <p className="mt-4 text-[16px] leading-[1.9] text-white/58">
                Clients · Architects · Contractors — bring the facility constraints. FormX starts
                Before Issue.
              </p>
            </div>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="fx-btn-primary shrink-0"
            >
              Discuss a facility
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
