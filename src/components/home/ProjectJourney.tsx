"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { formxMethod } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

/** Signature chapter — rewritten language, immersive stage */
export function ProjectJourney() {
  const [active, setActive] = useState(0);
  const stage = formxMethod.stages[active];

  return (
    <section
      id="before-issue"
      className="relative scroll-mt-28 overflow-hidden bg-black py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 fx-grid-dark opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -right-20 top-0 h-[70%] w-[50%] opacity-40"
        style={{
          background: "radial-gradient(circle at 70% 30%, rgba(224,49,40,0.22), transparent 65%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <p className="font-label text-[11px] tracking-[0.28em] text-x-red">{formxMethod.code}</p>
          <h2
            className="mt-6 font-display font-black uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            Before
            <br />
            <span className="text-x-red">×</span> Issue
          </h2>
          <p className="mt-8 max-w-[38ch] text-[18px] font-medium leading-[1.75] text-white/55 md:text-[19px]">
            {formxMethod.belief}
          </p>
          <p className="mt-6 max-w-[36ch] text-[15px] leading-[1.7] text-white/35">
            {formxMethod.promise}
          </p>
        </div>

        {/* Stage rail */}
        <div className="mt-16 flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:mt-20 md:gap-3">
          {formxMethod.stages.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "group relative min-w-[140px] flex-1 border px-5 py-5 text-left transition-all md:min-w-0",
                i === active
                  ? "border-x-red bg-x-red text-white"
                  : "border-white/15 bg-white/[0.03] text-white/50 hover:border-white/30 hover:text-white",
              )}
            >
              <span
                className={cn(
                  "font-label text-[10px] tracking-[0.2em]",
                  i === active ? "text-white/70" : "text-white/30",
                )}
              >
                {s.num}
              </span>
              <span className="mt-2 block font-display text-lg font-bold uppercase tracking-tight md:text-xl">
                {s.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active stage — cinematic panel */}
        <div className="mt-10 grid gap-0 overflow-hidden border border-white/10 lg:mt-12 lg:grid-cols-12">
          <div className="relative min-h-[280px] bg-[#121212] lg:col-span-6 lg:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-6 md:inset-10">
                  <AssetImage
                    alt={stage.caption}
                    slot={stage.slot}
                    kind="facility"
                    fit="contain"
                    aspect="auto"
                    tone="dark"
                    objectPosition="center"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <p className="absolute bottom-5 left-6 font-label text-[10px] tracking-[0.2em] text-white/45 md:left-8">
                  {stage.caption}
                </p>
              </motion.div>
            </AnimatePresence>
            <span className="absolute left-5 top-5 h-5 w-5 border-l-2 border-t-2 border-x-red" aria-hidden />
          </div>

          <div className="flex flex-col justify-center bg-[#0e0e0e] p-8 md:p-12 lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id + "-copy"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-label text-[10px] tracking-[0.24em] text-x-red">
                  {stage.num} · {stage.title}
                </p>
                <p className="mt-3 text-[14px] font-medium text-white/40">{stage.verb}</p>
                <h3
                  className="mt-6 font-display font-bold uppercase leading-[1.05] tracking-tight text-white"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.15rem)" }}
                >
                  {stage.decision}
                </h3>
                <p className="mt-6 text-[16px] leading-[1.8] text-white/55">{stage.why}</p>
                <div className="mt-8 border-l-2 border-x-red pl-5">
                  <p className="font-label text-[9px] tracking-[0.2em] text-white/30">We protect against</p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-white/60">{stage.prevents}</p>
                </div>
                <p className="mt-10 font-label text-[10px] tracking-[0.22em] text-white/25">
                  {formxMethod.stamp}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-label text-[10px] tracking-[0.2em] text-white/30">
            {formxMethod.disciplines.join(" · ")}
          </p>
          <Link
            href="/projects/vapi-g2-industrial"
            transitionTypes={["nav-forward"]}
            className="inline-flex items-center gap-2 font-label text-[11px] tracking-[0.18em] text-x-red hover:text-white"
          >
            See it hold on a real facility
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
