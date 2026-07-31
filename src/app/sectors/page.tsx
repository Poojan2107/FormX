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
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector.slug} delay={0.04 * (i % 3)} className="h-full">
                <Link
                  href={`/sectors/${sector.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-line bg-[#141414] transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_16px_40px_rgba(222,48,36,0.12)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <AssetImage
                      alt={sector.title}
                      slot={sector.asset}
                      kind="sector"
                      aspect="landscape"
                      fit="cover"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 bg-white">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
                          Sector 0{i + 1}
                        </span>
                        <ArrowUpRight className="size-4 text-ink/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                      </div>
                      <h2 className="font-display text-xl font-bold uppercase text-ink transition-colors group-hover:text-x-red">
                        {sector.title}
                      </h2>
                      <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted line-clamp-3">
                        {sector.summary}
                      </p>
                    </div>

                    <span className="mt-6 inline-flex items-center gap-1 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-x-red border-t border-line/60 pt-4">
                      Explore Sector Scope →
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
