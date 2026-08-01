"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Pill,
  Utensils,
  FlaskConical,
  Scissors,
  Wrench,
  Car,
  Warehouse,
} from "lucide-react";
import { industriesServed } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, React.ReactNode> = {
  Pill: <Pill className="size-6 text-x-red" />,
  Utensils: <Utensils className="size-6 text-x-red" />,
  FlaskConical: <FlaskConical className="size-6 text-x-red" />,
  Scissors: <Scissors className="size-6 text-x-red" />,
  Wrench: <Wrench className="size-6 text-x-red" />,
  Car: <Car className="size-6 text-x-red" />,
  Warehouse: <Warehouse className="size-6 text-x-red" />,
};

export function Sectors() {
  return (
    <section id="sectors" className="scroll-mt-32 bg-[#fafafa] py-20 md:py-28 border-y border-line">
      <Container>
        {/* Section Header */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.26em] text-x-red">
                Industries Served
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
              Specialized Engineering Across Key Sectors
            </h2>
            <p className="mt-3 max-w-[70ch] prose-measure text-[14px] leading-relaxed text-ink-muted">
              Domain expertise for process plants, heavy engineering, cleanrooms, and logistics hubs.
            </p>
          </div>

          <Link
            href="/sectors"
            transitionTypes={["nav-forward"]}
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-all hover:translate-x-1"
          >
            Explore All Sectors <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        {/* 7 Industries Served Visual Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industriesServed.map((item, i) => (
            <Reveal key={item.id} delay={0.04 * (i % 4)} className="h-full">
              <Link
                href={`/sectors/${item.slug}`}
                transitionTypes={["nav-forward"]}
                className="formx-cut-x formx-edge formx-edge-x x-lift group flex h-full flex-col justify-between border border-line bg-white p-6 transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_16px_40px_rgba(222,48,36,0.1)]"
              >
                <div>
                  {/* Top Bar with Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex size-12 items-center justify-center border border-line bg-[#fafafa] transition-colors group-hover:border-x-red/30 group-hover:bg-x-red/10">
                      {iconMap[item.icon] ?? <Wrench className="size-6 text-x-red" />}
                    </div>
                    <span className="font-display text-xs font-bold text-ink/30">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink group-hover:text-x-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-[1.7] text-ink-muted">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
                  <span>View Practice Scope</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
