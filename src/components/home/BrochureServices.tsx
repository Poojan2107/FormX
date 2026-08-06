"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureServices, brochureServicesNote } from "@/data/brochureHome";

/**
 * SERVICES — Equal 2×2 capability tiles. Same border + height on every card.
 */
export function BrochureServices() {
  return (
    <section id="services" className="scroll-mt-28 bg-[#f7f6f2] py-20 md:py-28">
      <Container>
        <div className="mb-10 grid gap-5 border-b border-ink/[0.08] pb-8 lg:mb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12 lg:pb-10">
          <Reveal>
            <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
              Services
            </p>
            <h2
              className="mt-4 font-display font-black leading-[1.02] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              What we take on
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[15px] leading-[1.85] text-ink/58 md:text-[16px]">
              {brochureServicesNote}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {brochureServices.map((service, i) => (
            <Reveal key={service.title} delay={0.05 * i} from="fade" className="h-full">
              <Link
                href={service.href}
                transitionTypes={["nav-forward"]}
                className="group relative flex h-full min-h-[240px] flex-col overflow-hidden border border-ink/[0.08] bg-white p-7 transition-colors duration-300 hover:border-x-red/35 hover:bg-[#fafaf8] md:min-h-[280px] md:p-9"
              >
                <span
                  aria-hidden
                  className="absolute right-0 top-0 block h-9 w-9 origin-top-right scale-50 bg-x-red opacity-35 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />

                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 top-2 select-none font-display text-[5.5rem] font-black leading-none text-ink/[0.04] md:text-[7rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex flex-1 flex-col">
                  <span className="font-label text-[10px] font-bold tracking-[0.28em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className="mt-4 max-w-[16ch] font-display font-bold leading-[1.1] tracking-[-0.03em] text-ink transition-colors group-hover:text-x-red"
                    style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)" }}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[36ch] flex-1 text-[14px] leading-[1.8] text-ink/58 md:text-[14.5px]">
                    {service.body}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 transition-colors duration-300 group-hover:text-x-red">
                    <span>Explore</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18} from="fade">
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="font-label text-[9.5px] uppercase tracking-[0.24em] text-ink/38">
              Architecture · Structure · Infrastructure
            </p>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-x-red transition-colors hover:text-ink"
            >
              All Services
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
