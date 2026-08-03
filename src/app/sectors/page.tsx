import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/site";
import { getSectorUniqueness } from "@/data/sectorStories";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Industrial Sectors | FORMX Engineering Challenges",
  description:
    "What makes Food, Battery, Solar, Hospital and Industrial facility engineering unique—and how FORMX responds.",
};

export default function SectorsPage() {
  return (
    <>
      <section className="border-b border-line bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Sectors
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Why each sector engineers differently
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            Food, battery, solar, data and heavy industrial plants do not share one template. Each
            page explains the engineering challenges that make that sector unique—then how FORMX
            responds.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-16">
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {sectors.map((sector, i) => {
              const u = getSectorUniqueness(sector.slug);
              return (
                <Reveal key={sector.slug} delay={0.03 * (i % 5)}>
                  <Link
                    href={`/sectors/${sector.slug}`}
                    transitionTypes={["nav-forward"]}
                    className="group grid gap-4 py-8 transition-colors hover:bg-[#fafafa] md:grid-cols-12 md:gap-8"
                  >
                    <div className="md:col-span-1">
                      <span className="font-display text-[11px] font-bold text-x-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink group-hover:text-x-red">
                        {sector.title}
                      </h2>
                    </div>
                    <p className="text-[14px] leading-[1.8] text-ink-muted md:col-span-6">
                      {u.uniqueness}
                    </p>
                    <div className="flex items-start justify-end md:col-span-1">
                      <ArrowUpRight className="size-5 text-x-red opacity-50 group-hover:opacity-100" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-[#0d0d0d] py-14 text-white">
        <Container>
          <p className="max-w-xl text-[15px] leading-[1.85] text-white/65">
            Looking for a sector-specific briefing? Engage early for zoning, structural grids and
            utility corridors tuned to your industry.
          </p>
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="mt-6 inline-flex bg-x-red px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white"
          >
            Request a sector briefing
          </Link>
        </Container>
      </section>
    </>
  );
}
