import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Sectors() {
  return (
    <section id="sectors" className="scroll-mt-32 bg-white section-y">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our sectors"
            title="Industries we serve"
            description="Coordinated design across renewable manufacturing, process plants, logistics, data centers, and infrastructure campuses."
          />
          <Link
            href="/sectors"
            className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-ink transition-colors hover:text-x-red"
          >
            View all sectors
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-3.5 lg:grid-cols-5">
          {sectors.slice(0, 10).map((sector, i) => (
            <Reveal key={sector.slug} delay={0.025 * (i % 5)}>
              <Link
                href={`/sectors/${sector.slug}`}
                className="formx-cut-x formx-edge formx-edge-x x-hover-rail group relative flex min-h-[100px] flex-col justify-between overflow-hidden border border-line bg-white p-4 transition-all duration-300 hover:border-x-red/40 hover:bg-[#fafafa] sm:min-h-[120px] md:min-h-[130px] md:p-5"
              >
                <div
                  className="pointer-events-none absolute -right-5 -top-5 size-16 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(222,48,36,0.18), transparent 70%)",
                  }}
                  aria-hidden
                />
                <ArrowUpRight className="relative size-3.5 self-end text-ink/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                <h3 className="relative font-display text-[13px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-x-red sm:text-sm">
                  {sector.title}
                </h3>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-x-red transition-all duration-350 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
