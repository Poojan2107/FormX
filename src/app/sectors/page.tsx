import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { AssetImage } from "@/components/ui/AssetImage";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "FormX sector expertise across renewable energy, manufacturing, logistics, and infrastructure.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Industries we serve"
        description="As industrial design consultants, we deliver integrated solutions across renewable energy, advanced manufacturing, logistics, and infrastructure."
        crumbs={[{ label: "Sectors" }]}
        image={{ slot: "sectors/renewable.jpg", kind: "sector" }}
      />

      <section className="bg-white section-y">
        <Container>
          <Reveal className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-x-red" />
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                  Sector Expertise
                </span>
              </div>
              <h2
                className="font-display font-extrabold leading-[1.1] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
              >
                Pick your facility type
              </h2>
            </div>
            <p className="hidden shrink-0 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40 sm:block">
              {String(sectors.length).padStart(2, "0")} Sectors
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector.slug} delay={0.04 * (i % 3)} className="h-full">
                <Link
                  href={`/sectors/${sector.slug}`}
                  className="formx-cut-x formx-edge formx-edge-x x-hover-rail group relative block aspect-[4/3] overflow-hidden border border-line bg-[#141414] transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_16px_40px_rgba(222,48,36,0.12)]"
                >
                  <AssetImage
                    alt={sector.title}
                    slot={sector.asset}
                    kind="sector"
                    aspect="landscape"
                    fit="cover"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />

                  <span className="absolute left-4 top-4 border border-x-red/40 bg-x-red px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                    Sector {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-5 top-4 font-display text-[40px] font-black leading-none tracking-tighter text-white/10 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-display text-xl font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red">
                      {sector.title}
                    </h2>
                    <p className="mt-2 text-[13px] leading-[1.7] text-white/60 line-clamp-2">
                      {sector.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
                      Explore Sector Scope
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Looking for a sector-specific briefing?" />
    </>
  );
}
