import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function Sectors() {
  return (
    <section id="sectors" className="scroll-mt-32 bg-[#fafafa] section-y border-t border-line">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our Sectors"
            title="Industries we serve"
            description="Coordinated engineering design across renewable manufacturing, process plants, logistics, data centers, and infrastructure campuses."
          />
          <Link
            href="/sectors"
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-x-red transition-all hover:translate-x-1"
          >
            View All Sectors
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sectors.slice(0, 8).map((sector, i) => (
            <Reveal key={sector.slug} delay={0.03 * (i % 4)} className="h-full">
              <Link
                href={`/sectors/${sector.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_16px_36px_rgba(222,48,36,0.12)]"
              >
                {/* Sector Image — taller so it dominates the card */}
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                  <AssetImage
                    alt={sector.title}
                    slot={sector.asset}
                    kind="sector"
                    aspect="landscape"
                    fit="cover"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient for index badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 border border-line bg-white/90 px-2 py-0.5 font-display text-[9px] font-bold uppercase tracking-[0.14em] text-ink shadow-sm">
                    0{i + 1}
                  </span>
                </div>

                {/* Content Footer */}
                <div className="flex flex-1 flex-col justify-between p-4 bg-white">
                  <h3 className="font-display text-xs font-bold uppercase leading-snug tracking-tight text-ink transition-colors group-hover:text-x-red sm:text-sm">
                    {sector.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between border-t border-line/50 pt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-x-red">
                    <span>Explore →</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
