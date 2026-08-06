"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureServices, brochureServicesNote } from "@/data/brochureHome";

/**
 * SERVICES — Capability grid: 2×2 tiles with formx-cut corners.
 */
export function BrochureServices() {
  return (
    <section id="services" className="scroll-mt-28 bg-[#f7f6f2] py-24 md:py-32">
      <Container>
        <div className="mb-12 grid gap-6 border-b border-ink/[0.08] pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
              Services
            </p>
            <h2
              className="mt-4 font-display font-black leading-[1.02] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.5rem)" }}
            >
              What we take on
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[15px] font-medium leading-[1.9] text-ink/60 md:text-[16px] lg:pb-1">
              {brochureServicesNote}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px bg-ink/[0.09] sm:grid-cols-2">
          {brochureServices.map((service, i) => (
            <Reveal key={service.title} delay={0.06 * i} from="fade">
              <Link
                href={service.href}
                transitionTypes={["nav-forward"]}
                className="group relative flex min-h-[260px] flex-col overflow-hidden bg-[#f7f6f2] p-8 transition-colors duration-300 hover:bg-white md:min-h-[300px] md:p-10 lg:p-12"
              >
                <span
                  aria-hidden
                  className="absolute right-0 top-0 block h-11 w-11 origin-top-right scale-50 bg-x-red opacity-40 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />

                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-2 select-none font-display font-black leading-none text-ink/[0.045] transition-opacity duration-300 group-hover:text-ink/[0.08]"
                  style={{ fontSize: "clamp(5.5rem, 11vw, 10rem)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex flex-1 flex-col">
                  <span className="font-label text-[10px] font-bold tracking-[0.28em] text-x-red">
                    0{i + 1}
                  </span>

                  <h3
                    className="mt-5 max-w-[16ch] font-display font-bold leading-[1.08] tracking-[-0.03em] text-ink transition-colors group-hover:text-x-red"
                    style={{ fontSize: "clamp(1.28rem, 1.9vw, 1.75rem)" }}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-[36ch] flex-1 text-[14.5px] font-medium leading-[1.85] text-ink/62 md:text-[15.5px]">
                    {service.body}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35 transition-colors duration-300 group-hover:text-x-red">
                    <span>Explore</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-x-red transition-transform duration-500 group-hover:scale-x-100"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.22} from="fade">
          <div className="mt-11 flex flex-wrap items-center justify-between gap-4">
            <p className="font-label text-[9.5px] tracking-[0.24em] uppercase text-ink/38">
              Architecture · Structure · Infrastructure
            </p>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="fx-btn-ghost group"
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
