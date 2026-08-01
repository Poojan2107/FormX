import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { AssetImage } from "@/components/ui/AssetImage";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { LeadStrip } from "@/components/shared/LeadStrip";

export const metadata: Metadata = {
  title: "Industrial Sectors We Serve | FORMX Design Consultants India",
  description:
    "FORMX sector expertise across pharmaceuticals, food processing, chemicals, textiles, engineering, automobile, warehouses, and renewable manufacturing.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Industries we serve"
        description="Deep technical domain expertise for industrial process plants, heavy engineering facilities, and logistics hubs."
        crumbs={[{ label: "Sectors" }]}
        image={{ slot: "sectors/renewable.jpg", kind: "sector" }}
      />

      <ProofStrip />

      <section className="bg-white section-y">
        <Container>
          <Reveal className="mb-10 flex items-end justify-between gap-6">
            <div className="prose-measure">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-x-red" />
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                  Sector Expertise
                </span>
              </div>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                Pick your facility type
              </h2>
            </div>
            <p className="hidden shrink-0 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40 sm:block">
              {String(sectors.length).padStart(2, "0")} Sectors
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector.slug} delay={0.03 * (i % 3)} className="h-full">
                <Link
                  href={`/sectors/${sector.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group relative block aspect-[4/3] overflow-hidden bg-[#141414]"
                >
                  <AssetImage
                    alt={sector.title}
                    slot={sector.asset}
                    kind="sector"
                    aspect="landscape"
                    fit="cover"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <span className="absolute left-3 top-3 bg-x-red px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="font-display text-lg font-extrabold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red md:text-xl">
                      {sector.title}
                    </h2>
                    <p className="mt-1.5 line-clamp-1 text-[12px] leading-relaxed text-white/55">
                      {sector.summary}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-x-red">
                      Explore Sector Scope
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <LeadStrip
        title="Discuss this sector mandate with FORMX"
        subtitle="Share process loads, cleanroom class, crane capacity, or logistics throughput — we scope Architecture through MEP as one package."
      />

      <CtaBand
        title="Looking for a sector-specific briefing?"
        description="Engage early for zoning, structural grids, and utility corridors tuned to your industry."
        secondary={{ label: "View portfolio", href: "/projects" }}
      />
    </>
  );
}
