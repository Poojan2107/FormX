"use client";

import { Eye, Target, HeartHandshake, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { aboutNumbers, aboutPage } from "@/data/site";

const principleIcons = [Eye, Target, HeartHandshake] as const;
const stepTags = ["01 / VISION", "02 / MISSION", "03 / VALUES"] as const;

/** FORMX by Numbers + Vision · Mission · Values — directly after hero. */
export function AboutProofStrip() {
  return (
    <section className="bg-white" aria-label="FORMX by Numbers and commitments">
      {/* Dark High-Impact Metrics Band */}
      <div className="relative isolate overflow-hidden border-b border-ink/10 bg-[#08080a] py-16 text-white md:py-20 lg:py-24">
        {/* Background glow effects */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(222,48,36,0.14),transparent_70%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-20" aria-hidden />

        <Container className="relative z-10">
          <Reveal>
            <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between md:gap-10">
              <div>
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-x-red">
                  FORMX by Numbers
                </p>
                <h2
                  className="mt-3 max-w-xl font-display font-black tracking-[-0.04em] text-white"
                  style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)" }}
                >
                  Delivery you can measure.
                </h2>
              </div>
              <p className="font-label text-[11px] font-medium tracking-[0.16em] text-white/50 md:max-w-[28ch] md:text-right">
                Ahmedabad Studio · Coordinated Output Across India
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-10 lg:grid-cols-6 lg:gap-4">
            {aboutNumbers.map((m, i) => (
              <Reveal key={m.label} delay={0.04 * i} className="h-full">
                <div className="formx-cut-sm group relative flex h-full min-h-[148px] flex-col justify-between overflow-hidden border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-x-red/55 hover:bg-white/[0.08] hover:shadow-[0_12px_32px_-10px_rgba(222,48,36,0.25)] md:min-h-[168px] md:p-5">
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-x-red transition-all duration-300 group-hover:w-full" />
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-0 w-[2px] bg-x-red/80 transition-all duration-300 group-hover:h-10"
                  />

                  <span className="font-label text-[9px] font-bold tracking-[0.2em] text-white/35 transition-colors group-hover:text-x-red">
                    0{i + 1}
                  </span>

                  <div className="mt-auto pt-6">
                    <p className="font-display text-[1.85rem] font-black leading-none tracking-[-0.04em] text-white tabular-nums md:text-[2.05rem] lg:text-[1.9rem] xl:text-[2.15rem]">
                      <AnimatedCounter value={m.value} suffix={m.suffix} />
                    </p>
                    <p className="mt-3 min-h-[2.4em] font-label text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/70 md:text-[10.5px]">
                      {m.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Vision · Mission · Values Editorial Cards */}
      <div className="bg-[#fafaf8] py-16 md:py-20 lg:py-24 border-b border-ink/[0.08]">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-x-red">
                  Core Commitments
                </p>
                <h2
                  className="mt-3 font-display font-black tracking-[-0.04em] text-ink"
                  style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)" }}
                >
                  Vision. Mission. Values.
                </h2>
              </div>
              <p className="mt-3 max-w-[34ch] text-[14.5px] leading-[1.7] text-ink/65 md:mt-0 md:text-right">
                The principles that govern every review, meeting, and drawing issued from our studio.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
            {aboutPage.principles.map((p, i) => {
              const Icon = principleIcons[i] ?? Eye;
              const title = p.title.replace(/^Our\s+/, "");
              return (
                <Reveal key={p.title} delay={0.06 * i}>
                  <div className="formx-cut-sm group relative flex h-full flex-col justify-between border border-ink/10 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-x-red/40 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)] md:p-8">
                    {/* Top Accent Indicator */}
                    <span className="absolute left-0 top-0 h-[3px] w-12 bg-x-red/30 transition-all duration-300 group-hover:w-full group-hover:bg-x-red" />
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-12 items-center justify-center rounded border border-x-red/20 bg-x-red/10 text-x-red transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red group-hover:text-white">
                          <Icon className="size-5" strokeWidth={2} aria-hidden />
                        </span>
                        <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
                          {stepTags[i]}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-[1.45rem] font-extrabold tracking-tight text-ink md:text-[1.6rem]">
                        {title}
                      </h3>

                      <p className="mt-4 text-[14.5px] leading-[1.8] text-ink/75">
                        {p.body}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-4 font-label text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                      <span>FormX Promise</span>
                      <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}

