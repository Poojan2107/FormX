import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/shared/CtaBlocks";

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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector.slug} delay={0.03 * (i % 3)}>
                <Link
                  href={`/sectors/${sector.slug}`}
                  className="formx-cut-x formx-edge formx-edge-x x-hover-rail group flex h-full flex-col justify-between border border-line bg-white p-7 transition-all hover:border-x-red/40 hover:bg-[#fafafa] md:p-8"
                >
                  <ArrowUpRight className="size-4 self-end text-ink/25 group-hover:text-x-red" />
                  <div className="mt-10">
                    <h2 className="font-display text-xl font-bold uppercase text-ink transition-colors group-hover:text-x-red">
                      {sector.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted">
                      {sector.summary}
                    </p>
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
