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
import { PartnerTypesBanner } from "@/components/shared/PartnerTypesBanner";

export const metadata: Metadata = {
  title: "Who We Partner With | FORMX Consultants",
  description:
    "FORMX clients range from industrial houses and pharma companies to architects, contractors, and private homeowners.",
};

/** Editorial partners page — brochure partner types, no fake logos */
export default function ClientsPage() {
  return (
    <>
      <section className="fx-grain border-b border-line bg-bg pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Partners</p>
              <h1
                className="editorial-title mt-5 max-w-[14ch] text-ink"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)" }}
              >
                Who places trust in FormX
              </h1>
            </div>
            <p className="text-[16px] leading-[1.9] text-ink/62 md:text-[17px]">
              {portfolioContactNote}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f6f2] py-16 md:py-24">
        <Container>
          <div className="mb-4">
            <PartnerTypesBanner showHeading={true} />
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-ink/[0.08] pt-10">
            <p className="font-label text-[9.5px] tracking-[0.22em] uppercase text-ink/40">
              Clients · Architects · Contractors
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2 font-label text-[11px] tracking-[0.16em] text-x-red transition-colors hover:text-ink"
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
