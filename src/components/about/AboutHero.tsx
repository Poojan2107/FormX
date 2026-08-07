"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Building2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { aboutPage } from "@/data/site";

const ease = [0.16, 1, 0.3, 1] as const;

/** Premium editorial hero — CAD grid backdrop + right-side structural feature card. */
export function AboutHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);

  useEffect(() => {
    if (reduce) {
      const t = window.setTimeout(() => setReady(true), 0);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      className="relative isolate overflow-hidden border-b border-ink/[0.08] bg-[#fafaf8]"
      aria-label="About Us"
    >
      {/* Background CAD texture & ambient glows */}
      <div className="pointer-events-none absolute inset-0 pattern-grid opacity-25" aria-hidden />
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-[500px] rounded-full bg-x-red/[0.04] blur-3xl"
        aria-hidden
      />
      <span aria-hidden className="absolute left-0 top-0 z-20 h-[3px] w-28 bg-x-red" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Hero Editorial Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -6 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.45, delay: 0.05, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-3.5 py-1.5 backdrop-blur-md shadow-xs"
            >
              <span className="size-2 rounded-full bg-x-red animate-pulse" />
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.26em] text-ink/75">
                FormX Consultants · Ahmedabad
              </span>
            </motion.div>

            <h1 className="mt-5 max-w-3xl">
              <span className="sr-only">
                Bridging design intent with on-site execution
              </span>
              <div className="overflow-hidden">
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { y: "105%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 0.9, delay: 0.1, ease }}
                  className="block font-display font-black uppercase tracking-[-0.035em] text-ink break-normal hyphens-none"
                  style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.1rem)", lineHeight: 1.04 }}
                >
                  Bridging design intent with on-site execution
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.28, ease }}
              className="mt-5 font-display text-[1.25rem] font-extrabold tracking-[-0.02em] text-x-red md:text-[1.45rem]"
            >
              Shaping Form, Defining Future
            </motion.p>

            <motion.div
              initial={reduce ? false : { scaleX: 0 }}
              animate={ready ? { scaleX: 1 } : undefined}
              transition={{ duration: 0.7, delay: 0.38, ease }}
              className="mt-5 flex origin-left items-center gap-2.5"
              aria-hidden
            >
              <span className="h-[2.5px] w-14 bg-x-red" />
              <span className="font-display text-sm font-black text-x-red">×</span>
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.45, ease }}
              className="mt-6 max-w-[58ch] text-[15.5px] leading-[1.8] text-ink/75 md:text-[16.5px]"
            >
              {aboutPage.intro}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.55, ease }}
              className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group px-8 py-4 text-[11px] font-bold tracking-[0.2em] shadow-md hover:shadow-lg"
              >
                Discuss Your Facility
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#why-formx" className="fx-btn-ghost px-7 py-4 text-[11px] font-bold tracking-[0.18em]">
                Why clients choose FormX
              </a>
            </motion.div>
          </div>

          {/* Right Column: Architectural Detail Feature Card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={ready ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="lg:col-span-5"
          >
            <div className="formx-cut-lg group relative overflow-hidden border border-ink/10 bg-white p-7 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-2xl md:p-8">
              {/* Top Accent line & Background Watermark */}
              <span className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-x-red via-x-red to-transparent" />
              <div className="pointer-events-none absolute -right-10 -top-10 font-display text-[160px] font-black text-ink/[0.03] select-none">
                ×
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded bg-x-red/10 text-x-red">
                      <ShieldCheck className="size-4" />
                    </span>
                    <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                      Single-Window Practice
                    </p>
                  </div>
                  <span className="font-label text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Grade 1
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                  Coordinated Before × Issue
                </h3>
                
                <p className="mt-2.5 text-[14px] leading-[1.7] text-ink/70">
                  Bringing Architecture, Structure and Infrastructure into agreement before drawings leave the studio.
                </p>

                <div className="mt-6 space-y-3.5 border-t border-ink/10 pt-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 shrink-0 text-x-red mt-0.5" />
                    <div>
                      <p className="text-[13px] font-bold text-ink">Zero-Clash Drawing Packages</p>
                      <p className="text-[12px] text-ink/60">Load paths, details &amp; junctions tested for site reality</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers className="size-4 shrink-0 text-x-red mt-0.5" />
                    <div>
                      <p className="text-[13px] font-bold text-ink">Integrated Engineering Disciplines</p>
                      <p className="text-[12px] text-ink/60">Architecture, RCC &amp; Steel Structures, Site Infra</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="size-4 shrink-0 text-x-red mt-0.5" />
                    <div>
                      <p className="text-[13px] font-bold text-ink">Turnkey &amp; Greenfield Facilities</p>
                      <p className="text-[12px] text-ink/60">Pharma, Food, Chemical, Textile, Industrial Parks</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-ink/10 pt-4 font-label text-[10px] font-bold uppercase tracking-[0.18em] text-ink/50">
                  <span>Ahmedabad Studio</span>
                  <span className="text-x-red font-semibold">25+ Projects Built</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

