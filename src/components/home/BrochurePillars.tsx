"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePillars } from "@/data/brochureHome";

/**
 * PILLARS — Editorial manifesto bands with giant ghost numbers.
 */
export function BrochurePillars() {
  return (
    <section
      id="pillars"
      className="relative scroll-mt-28 overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32"
    >
      <Container className="relative z-10">
        <div className="grid gap-6 border-b border-white/[0.08] pb-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
              The FormX Way
            </p>
            <h2
              className="mt-4 font-display font-black leading-[1.02] tracking-[-0.045em] text-white"
              style={{ fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)" }}
            >
              Four pillars of Form
              <span className="text-x-red">X</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[15px] font-medium leading-[1.85] text-white/55 md:text-[16px] lg:pb-1">
              How we think before we draw — judgement, coordination and accountability held
              through issue.
            </p>
          </Reveal>
        </div>
      </Container>

      <ol className="mt-4">
        {brochurePillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={0.06 * i} from="fade">
            <li className="group relative cursor-default overflow-hidden border-b border-white/[0.07] transition-colors hover:bg-white/[0.025]">
              <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
                <div className="grid items-center gap-5 py-9 md:grid-cols-[140px_28px_minmax(240px,340px)_minmax(0,1fr)] md:gap-6 md:py-11 lg:grid-cols-[168px_32px_360px_1fr]">
                  <div aria-hidden className="flex items-center">
                    <span
                      className="select-none font-display font-black leading-none text-white/[0.07] transition-all duration-700 group-hover:text-white/[0.14]"
                      style={{ fontSize: "clamp(4.25rem, 8.5vw, 7.5rem)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span
                      className="font-display font-black leading-none text-x-red/55 transition-all duration-500 group-hover:scale-110 group-hover:text-x-red"
                      style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.2rem)" }}
                    >
                      ×
                    </span>
                  </div>

                  <div className="flex min-h-[64px] items-center">
                    <h3
                      className="font-display font-bold leading-[1.08] tracking-[-0.02em] text-white transition-colors group-hover:text-x-red"
                      style={{ fontSize: "clamp(1.2rem, 1.9vw, 1.65rem)" }}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="flex items-center md:justify-between md:gap-8">
                    <p className="max-w-[48ch] text-[14.5px] leading-[1.85] text-white/68 transition-colors group-hover:text-white/88 md:text-[15.5px]">
                      {pillar.body}
                    </p>
                    <ArrowUpRight
                      aria-hidden
                      className="hidden size-4 shrink-0 text-x-red opacity-0 transition-all duration-300 group-hover:opacity-100 lg:block"
                    />
                  </div>
                </div>
              </div>

              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-x-red transition-transform duration-500 group-hover:scale-y-100"
              />
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.28} from="fade">
        <Container className="relative z-10">
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <p className="font-label text-[9.5px] tracking-[0.28em] uppercase text-white/28">
              Form
              <span className="text-x-red/70">X</span>
              {" "}Consultants · Design | Engineering
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-x-red transition-colors hover:text-white"
            >
              Discuss your facility
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
