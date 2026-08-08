"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { eventHero } from "@/data/eventLanding";

const ease = [0.16, 1, 0.3, 1] as const;

export function EventHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sheetY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100svh-4.75rem)] lg:h-[calc(100vh-4.75rem)] lg:min-h-[620px] lg:max-h-[850px] overflow-hidden bg-[#f5f4ef] text-ink"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      {/* Structural grid */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 opacity-60 ${reduce ? "" : "event-grid-drift"}`}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 75% 35%, rgba(224,49,40,0.12), transparent 60%), radial-gradient(ellipse 40% 50% at 15% 80%, rgba(224,49,40,0.05), transparent 55%)",
        }}
      />
      {!reduce ? (
        <div
          aria-hidden
          className="event-scan-line pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-transparent via-x-red/15 to-transparent"
        />
      ) : null}

      {/* Sheet frame */}
      <motion.div
        style={{ y: sheetY, opacity: fade }}
        className="relative z-10 mx-auto flex h-full min-h-[calc(100svh-4.75rem)] lg:min-h-0 w-full max-w-[1400px] flex-col px-3 py-3 sm:px-6 md:px-8 lg:py-4"
      >
        <div className="relative flex flex-1 flex-col justify-between border border-ink/15 bg-white shadow-xl backdrop-blur-xs">
          {/* Outer CAD corner ticks */}
          <span aria-hidden className="pointer-events-none absolute -left-2.5 -top-2.5 font-label text-[14px] font-bold text-x-red select-none">+</span>
          <span aria-hidden className="pointer-events-none absolute -right-2.5 -top-2.5 font-label text-[14px] font-bold text-x-red select-none">+</span>
          <span aria-hidden className="pointer-events-none absolute -bottom-2.5 -left-2.5 font-label text-[14px] font-bold text-x-red select-none">+</span>
          <span aria-hidden className="pointer-events-none absolute -bottom-2.5 -right-2.5 font-label text-[14px] font-bold text-x-red select-none">+</span>

          {/* Title block — drawing sheet header */}
          <div className="grid border-b border-ink/15 md:grid-cols-[1fr_auto]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 px-4 py-2.5 md:px-8 md:py-3">
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
                FORMX · DESIGN & ENGINEERING
              </span>
              <span className="hidden h-3 w-px bg-ink/20 sm:block" aria-hidden />
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-ink/50">
                AHMEDABAD, GUJARAT
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 md:px-8 md:py-3">
              <span
                className={`size-2.5 rounded-full bg-x-red ${reduce ? "" : "event-status-blink"}`}
                aria-hidden
              />
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.24em] text-x-red">
                Under construction
              </span>
            </div>
          </div>

          {/* Main composition */}
          <div className="relative grid flex-1 items-center gap-6 px-5 py-6 md:grid-cols-12 md:gap-8 md:px-8 md:py-8 lg:px-12">
            {/* Left: brand story */}
            <div className="md:col-span-7 lg:col-span-6">
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="font-label text-[10.5px] font-bold uppercase tracking-[0.32em] text-x-red"
              >
                STRUCTURAL & ARCHITECTURAL CONSULTANTS
              </motion.p>

              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.75, ease }}
                className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-ink"
              >
                Where
                <br />
                Vision
                <br />
                Takes{" "}
                <span className="text-x-red">Form</span>
              </motion.h1>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease }}
                className="mt-5 flex max-w-md flex-col gap-2.5"
              >
                <span className={`h-[2px] w-14 bg-x-red ${reduce ? "" : "event-draw-line"}`} />
                <p className="font-display text-[clamp(0.95rem,1.6vw,1.15rem)] font-semibold uppercase leading-snug tracking-[0.12em] text-x-red">
                  {eventHero.line2}
                </p>
                <p className="text-[14px] leading-relaxed text-ink/70 md:text-[15px]">
                  {eventHero.body}
                </p>
              </motion.div>

              <motion.a
                href="#about"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="formx-cut-sm mt-6 inline-flex items-center gap-3 border border-x-red bg-x-red px-6 py-3 font-label text-[10.5px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_24px_-8px_rgba(224,49,40,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)]"
              >
                View the build
              </motion.a>
            </div>

            {/* Right: logo plate */}
            <div className="relative md:col-span-5 lg:col-span-6">
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: 1.5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.9, ease }}
                whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
                className="group relative mx-auto w-full max-w-[380px] border border-ink/20 bg-[#0e0e0d] p-6 shadow-2xl transition-all duration-300 hover:border-x-red/60 hover:shadow-[0_20px_50px_-15px_rgba(224,49,40,0.3)] md:ml-auto md:p-7 lg:max-w-[400px]"
              >
                {/* Plate corners */}
                <span aria-hidden className="absolute left-2 top-2 size-3 border-l-2 border-t-2 border-x-red transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                <span aria-hidden className="absolute right-2 top-2 size-3 border-r-2 border-t-2 border-x-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span aria-hidden className="absolute bottom-2 left-2 size-3 border-b-2 border-l-2 border-x-red transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
                <span aria-hidden className="absolute bottom-2 right-2 size-3 border-b-2 border-r-2 border-x-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

                {!reduce ? (
                  <span
                    aria-hidden
                    className="event-pulse-ring absolute left-1/2 top-1/2 size-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-x-red/20"
                  />
                ) : null}

                <div className="relative rounded-sm bg-[#f7f6f2] px-5 py-8 shadow-inner md:px-7 md:py-10">
                  <Image
                    src="/formx-logo-solid.png"
                    alt="FormX Consultants — Design | Engineering"
                    width={480}
                    height={200}
                    priority
                    className="mx-auto h-auto w-full object-contain"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 font-label text-[9px] uppercase tracking-[0.22em] text-white/60">
                  <span>FormX Consultants</span>
                  <span className="font-bold text-x-red">DESIGN | ENGINEERING</span>
                </div>
              </motion.div>

              {/* Vertical CAD construction guide line */}
              <svg
                aria-hidden
                className="pointer-events-none absolute -left-8 top-0 hidden h-full w-24 text-x-red/35 lg:block"
                viewBox="0 0 40 200"
                fill="none"
              >
                <path
                  d="M20 0v200"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
              </svg>
            </div>
          </div>

          {/* Bottom meta bar */}
          <div className="grid border-t border-ink/15 sm:grid-cols-3">
            {["Architecture", "Structure", "Infrastructure"].map((item, i) => (
              <div
                key={item}
                className={`group flex items-center px-5 py-3 font-label text-[10.5px] font-bold uppercase tracking-[0.24em] text-ink/70 transition-colors duration-300 hover:bg-ink/[0.03] hover:text-ink md:px-8 ${
                  i > 0 ? "border-t border-ink/10 sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <span className="mr-2.5 size-1.5 rounded-full bg-x-red/50 transition-colors group-hover:bg-x-red" />
                <span className="mr-2 text-x-red">0{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
