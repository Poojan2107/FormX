import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function Sectors() {
  return (
    <section id="sectors" className="scroll-mt-32 bg-white section-y">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our sectors"
            title="Industries we serve"
            description="Coordinated engineering design across renewable manufacturing, process plants, logistics, data centers, and infrastructure campuses."
          />
          <Link
            href="/sectors"
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-x-red transition-all hover:translate-x-1"
          >
            View all sectors
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {sectors.slice(0, 10).map((sector, i) => (
            <Reveal key={sector.slug} delay={0.03 * (i % 5)} className="h-full">
              <Link
                href={`/sectors/${sector.slug}`}
                className="group relative flex h-[200px] sm:h-[220px] flex-col justify-end overflow-hidden border border-line bg-[#121212] p-4 transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_16px_36px_rgba(222,48,36,0.12)]"
              >
                {/* Sector Background Image */}
                <AssetImage
                  alt={sector.title}
                  slot={sector.asset}
                  kind="sector"
                  aspect="portrait"
                  fit="cover"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for High Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity group-hover:from-black/90" />

                {/* Top Badge & Arrow */}
                <div className="relative z-10 mb-auto flex items-center justify-between">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="size-4 text-white/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-x-red" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10">
                  <h3 className="font-display text-sm font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red sm:text-base">
                    {sector.title}
                  </h3>
                  <span className="mt-2 block h-0.5 w-6 bg-x-red transition-all duration-300 group-hover:w-full" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
