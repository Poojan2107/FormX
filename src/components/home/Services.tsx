"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, ShieldCheck, Layers, Building2 } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

export function Services() {
  const [expandedIdx, setExpandedIdx] = useState(0);

  return (
    <section id="services" className="scroll-mt-32 bg-[#0a0a0a] py-16 md:py-24 border-y border-white/10 text-white overflow-hidden">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-30" aria-hidden />

      <Container className="relative z-10">
        {/* Section Heading */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                Multidisciplinary Practice
              </span>
            </div>
            <h2
              className="font-display font-extrabold leading-[1.1] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
            >
              Complete solutions in engineering &amp; architecture
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/50">
              In-house coordination across 10 specialized disciplines — delivered as one accountable construction-ready package.
            </p>
          </div>

          <Link
            href="/services"
            transitionTypes={["nav-forward"]}
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-all hover:translate-x-1"
          >
            All 10 Disciplines Scope <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        {/* DESKTOP: Awwwards-Style Horizontal Accordion Expansion Slats (Hidden on Mobile) */}
        <Reveal delay={0.06} className="mt-12 hidden lg:block">
          <div className="flex h-[520px] w-full gap-2.5 overflow-hidden">
            {services.map((svc, i) => {
              const isExpanded = i === expandedIdx;
              return (
                <motion.div
                  key={svc.slug}
                  layout
                  onClick={() => setExpandedIdx(i)}
                  onMouseEnter={() => setExpandedIdx(i)}
                  className={cn(
                    "relative flex h-full overflow-hidden border border-white/10 bg-[#121212] cursor-pointer transition-colors duration-300 select-none",
                    isExpanded
                      ? "flex-[4.2] border-x-red/60 shadow-[0_20px_50px_rgba(222,48,36,0.2)]"
                      : "flex-1 hover:border-white/30 hover:bg-[#181818]",
                  )}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Backdrop Photo (Visible on All, Higher Opacity when Expanded) */}
                  <div className="absolute inset-0">
                    <AssetImage
                      alt={svc.title}
                      slot={svc.asset}
                      kind="service"
                      aspect="auto"
                      fit="cover"
                      tone="dark"
                      className={cn(
                        "h-full w-full object-cover transition-all duration-700",
                        isExpanded ? "scale-105 opacity-40" : "scale-100 opacity-15",
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                  </div>

                  {/* COLLAPSED STATE: Vertical Rotated Slat Typography */}
                  <AnimatePresence>
                    {!isExpanded ? (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 flex h-full w-full flex-col justify-between p-4 text-center"
                      >
                        {/* Number */}
                        <span className="font-display text-xs font-bold text-x-red">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Rotated Vertical Title */}
                        <div className="my-auto flex items-center justify-center">
                          <span
                            className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/70 whitespace-nowrap"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                          >
                            {svc.title}
                          </span>
                        </div>

                        {/* Icon */}
                        <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-white/5 text-white/30">
                          +
                        </span>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  {/* EXPANDED STATE: Full Visual Banner + Scope Content */}
                  <AnimatePresence>
                    {isExpanded ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                        className="relative z-10 flex h-full w-full flex-col justify-between p-8 text-white min-w-0"
                      >
                        {/* Top Badges */}
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <span className="border border-x-red/50 bg-x-red px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-md">
                              Discipline {String(i + 1).padStart(2, "0")} / 10
                            </span>
                            <span className="inline-flex items-center gap-1.5 border border-white/20 bg-black/60 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                              <ShieldCheck className="size-3 text-x-red" />
                              IS Code Compliant
                            </span>
                          </div>

                          <span className="font-display text-3xl font-black text-white/10">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* Middle Content */}
                        <div className="my-auto max-w-xl min-w-0 pr-2">
                          <p className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-x-red mb-1">
                            FormX Scope Package
                          </p>
                          <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
                            {svc.title}
                          </h3>
                          <p className="mt-3 text-[13px] leading-[1.8] text-white/70 tracking-normal line-clamp-3">
                            {svc.summary}
                          </p>

                          {/* Deliverables Checklist */}
                          <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-white/15 pt-4">
                            {svc.highlights.slice(0, 4).map((h) => (
                              <div key={h} className="flex items-center gap-2 text-[12px] font-semibold text-white/85 min-w-0">
                                <Check className="size-3.5 text-x-red shrink-0" />
                                <span className="truncate">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom CTA Action */}
                        <div className="border-t border-white/15 pt-4 flex items-center justify-between">
                          <Link
                            href={`/services/${svc.slug}`}
                            transitionTypes={["nav-forward"]}
                            className="inline-flex items-center gap-2 bg-x-red px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.4)] transition-all hover:bg-x-red-hover hover:translate-x-1"
                          >
                            Explore Service Scope <ArrowUpRight className="size-4" />
                          </Link>

                          <span className="text-[11px] font-display text-white/40 uppercase tracking-wider">
                            Click slat or hover to preview
                          </span>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  {/* Red Left Accent Bar */}
                  <div
                    className={cn(
                      "absolute left-0 top-0 h-full w-[3px] bg-x-red transition-opacity duration-300",
                      isExpanded ? "opacity-100" : "opacity-0",
                    )}
                  />
                </motion.div>
              );
            })}
          </div>
        </Reveal>

        {/* MOBILE & TABLET: Stacked Interactive Card Accordion (Visible on Mobile/Tablet) */}
        <div className="mt-8 space-y-3 lg:hidden">
          {services.map((svc, i) => {
            const isExpanded = i === expandedIdx;
            return (
              <div
                key={svc.slug}
                onClick={() => setExpandedIdx(i)}
                className={cn(
                  "overflow-hidden border border-white/10 bg-[#121212] transition-all duration-300",
                  isExpanded && "border-x-red/60 bg-[#181818]",
                )}
              >
                {/* Accordion Bar Header */}
                <div className="flex items-center justify-between p-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xs font-bold text-x-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-sm font-bold uppercase text-white">
                      {svc.title}
                    </h3>
                  </div>
                  <span className="font-display text-base font-bold text-x-red">
                    {isExpanded ? "−" : "+"}
                  </span>
                </div>

                {/* Expanded Card Body */}
                {isExpanded ? (
                  <div className="p-4 pt-0 border-t border-white/10 space-y-4">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                      <AssetImage
                        alt={svc.title}
                        slot={svc.asset}
                        kind="service"
                        aspect="landscape"
                        fit="cover"
                        tone="dark"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-[13px] leading-relaxed text-white/70">
                      {svc.summary}
                    </p>
                    <div className="space-y-1.5 pt-2">
                      {svc.highlights.slice(0, 3).map((h) => (
                        <div key={h} className="flex items-center gap-2 text-[12px] text-white/80">
                          <Check className="size-3.5 text-x-red shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/services/${svc.slug}`}
                      transitionTypes={["nav-forward"]}
                      className="inline-flex w-full items-center justify-center gap-2 bg-x-red py-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white"
                    >
                      Explore Service Scope →
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Bottom Practice Integration Banner */}
        <Reveal delay={0.1} className="mt-12">
          <div className="formx-cut-x formx-edge formx-edge-x flex flex-col items-start justify-between gap-6 border border-white/10 bg-[#141414] p-6 text-white md:flex-row md:items-center md:p-8">
            <div>
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                Single-Window Multidisciplinary Package
              </p>
              <h3 className="mt-1.5 font-display text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
                Architecture, Structure, Civil &amp; MEP under one roof
              </h3>
              <p className="mt-2 text-[13px] text-white/50">
                100% GFC construction-ready drawings with zero inter-discipline coordination clashes.
              </p>
            </div>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="shrink-0 inline-flex items-center gap-2.5 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.35)] transition-all hover:bg-x-red-hover"
            >
              Enquire About Package Scope
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
