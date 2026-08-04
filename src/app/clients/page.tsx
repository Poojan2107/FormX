import type { Metadata } from "next";
import {
  portfolioContactNote,
  brochureVisuals,
  partnerTypes,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { CtaBand } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "Who We Partner With | FORMX Consultants",
  description:
    "FORMX clients range from industrial houses and pharma companies to architects, contractors, and private homeowners.",
};

/** Editorial white hero — no decorative BG photo (Hiren rule applied site-wide) */
export default function ClientsPage() {
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
            Who we partner with
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            {portfolioContactNote}
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <Reveal>
            <VisualFrame
              slot={brochureVisuals.partnersBanner}
              alt="FORMX partner types from brochure"
              fit="contain"
              aspect="cinema"
              tone="light"
              className="border border-line bg-white"
            />
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((client) => (
              <Reveal key={client.name}>
                <div className="bg-white px-6 py-7">
                  <p className="font-display text-sm font-extrabold uppercase tracking-tight text-ink">
                    {client.name}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                    {client.tag}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Discuss your next project"
        description="Write to inquiry@formxconsultants.com or call +91 81284 44585."
        secondary={{ label: "View projects", href: "/projects" }}
      />
    </>
  );
}
