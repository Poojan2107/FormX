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
            <div className="flex items-center justify-between">
              <p className="font-label text-[10.5px] uppercase tracking-[0.32em] text-x-red">
                Services
              </p>
              <span className="font-label text-[9.5px] font-bold tracking-[0.24em] text-ink/35">
                [FORMX.04]
              </span>
            </div>
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
          {brochureServices.map((service, i) => {
            const isDarkTone = service.tone === "dark";
            return (
              <Reveal key={service.title} delay={0.05 * i} from="fade" className="h-full">
                <Link
                  href={service.href}
                  transitionTypes={["nav-forward"]}
                  className={`group relative flex h-full min-h-[240px] flex-col overflow-hidden p-7 transition-all duration-400 md:min-h-[280px] md:p-9 formx-cut-sm rounded-xl ${
                    isDarkTone
                      ? "bg-x-red text-white shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
                      : "bg-[#faf3f2] border border-x-red/25 text-ink hover:bg-white hover:border-x-red/50 hover:shadow-xl hover:-translate-y-1.5"
                  }`}
                >
                  {/* Floating square arrow button top-right */}
                  <div
                    className={`absolute right-4 top-4 z-20 flex size-9 items-center justify-center border transition-all duration-300 group-hover:scale-110 ${
                      isDarkTone
                        ? "border-white/30 bg-white/20 text-white group-hover:bg-white group-hover:text-x-red"
                        : "border-x-red/20 bg-white text-x-red group-hover:border-x-red group-hover:bg-x-red group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <span
                    aria-hidden
                    className={`pointer-events-none absolute right-2 top-14 select-none font-display text-[5rem] font-black leading-none transition-all duration-500 group-hover:scale-105 md:right-3 md:top-16 md:text-[6.5rem] ${
                      isDarkTone
                        ? "text-white/15 group-hover:text-white/25"
                        : "text-x-red/[0.08] group-hover:text-x-red/[0.15]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex flex-1 flex-col">
                    <span
                      className={`font-label text-[10.5px] font-bold tracking-[0.28em] ${
                        isDarkTone ? "text-white/80" : "text-x-red"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`mt-4 max-w-[16ch] font-display font-bold leading-[1.1] tracking-[-0.03em] ${
                        isDarkTone
                          ? "text-white"
                          : "text-ink transition-colors group-hover:text-x-red"
                      }`}
                      style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-[36ch] flex-1 text-[14px] leading-[1.8] md:text-[14.5px] ${
                        isDarkTone ? "text-white/90 font-normal" : "text-ink/75"
                      }`}
                    >
                      {service.body}
                    </p>

                    <div
                      className={`mt-6 flex items-center gap-2 font-label text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                        isDarkTone
                          ? "text-white/90 group-hover:text-white"
                          : "text-x-red group-hover:text-x-red"
                      }`}
                    >
                      <span>Explore scope</span>
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Brochure Slide Notes with Red Vertical Line Accent */}
        <Reveal delay={0.15} from="fade">
          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-4 border-l-4 border-x-red bg-white p-4 shadow-sm md:p-5">
              <p className="text-[14.5px] font-medium leading-[1.8] text-ink/80 md:text-[15.5px]">
                {brochureServicesNote}
              </p>
            </div>
            <div className="flex items-start gap-4 border-l-4 border-x-red bg-white p-4 shadow-sm md:p-5">
              <p className="text-[14.5px] font-medium leading-[1.85] text-ink/85 md:text-[15.5px]">
                At <span className="font-bold text-x-red">FormX</span>, we don&apos;t just design structures — we craft lasting solutions that reflect stability, creativity, and precision. Always open to fresh ideas and complex challenges, we believe every structure has a story — and we&apos;re here to engineer it right.
              </p>
            </div>
          </div>
        </Reveal>

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
