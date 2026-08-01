"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, Layers, ShieldCheck, Cpu, Building2 } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

const disciplineClusters = [
  { id: "all", label: "All 10 Disciplines", count: 10 },
  { id: "arch", label: "Architecture", indexes: [0, 1, 2] },
  { id: "struct", label: "Structure & Civil", indexes: [3, 4] },
  { id: "mep", label: "MEP & Utilities", indexes: [5, 6, 7, 8] },
  { id: "pm", label: "Project Delivery", indexes: [9] },
];

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeCluster, setActiveCluster] = useState("all");
  const currentService = services[activeIdx];

  const selectCluster = (clusterId: string, firstIdx?: number) => {
    setActiveCluster(clusterId);
    if (firstIdx !== undefined) {
      setActiveIdx(firstIdx);
    }
  };

  return (
    <section id="services" className="scroll-mt-32 bg-[#fafafa] py-16 md:py-24 border-y border-line overflow-hidden">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Multidisciplinary Practice"
            title="Complete solutions in engineering & architecture"
            description="In-house coordination across 10 specialized disciplines — delivered as one accountable construction-ready package."
          />
          <Link
            href="/services"
            transitionTypes={["nav-forward"]}
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-x-red transition-all hover:translate-x-1"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        {/* Interactive Discipline Cluster Selector Tabs */}
        <Reveal delay={0.04} className="mt-8">
          <div className="flex flex-wrap gap-2 border-b border-line pb-4">
            {disciplineClusters.map((cluster) => {
              const isSelected = activeCluster === cluster.id;
              const firstIdx = cluster.indexes ? cluster.indexes[0] : 0;
              return (
                <button
                  key={cluster.id}
                  type="button"
                  onClick={() => selectCluster(cluster.id, firstIdx)}
                  className={cn(
                    "inline-flex items-center gap-2 border px-3.5 py-2 font-display text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-200",
                    isSelected
                      ? "border-x-red bg-x-red text-white shadow-[0_4px_16px_rgba(222,48,36,0.3)]"
                      : "border-line bg-white text-ink/70 hover:border-x-red/40 hover:text-x-red",
                  )}
                >
                  <span>{cluster.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Masterpiece Architectural Showcase Matrix */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8 items-stretch">

          {/* LEFT STAGE: Cinematic Image + Captioned Scope Details */}
          <Reveal className="w-full h-full min-w-0">
            <div className="relative flex h-full flex-col overflow-hidden border border-line bg-white shadow-2xl min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col h-full justify-between"
                >
                  {/* Top: Cinematic Full-Bleed Landscape Photo Panel */}
                  <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] overflow-hidden bg-[#0e0e0e] border-b border-line shrink-0">
                    <AssetImage
                      alt={currentService.title}
                      slot={currentService.asset}
                      kind="service"
                      aspect="landscape"
                      fit="cover"
                      tone="dark"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Gradient & blueprint texture overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-30" />

                    {/* Top Badges */}
                    <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 z-10">
                      <span className="border border-x-red/50 bg-x-red px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-md">
                        Discipline {String(activeIdx + 1).padStart(2, "0")} / 10
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1.5 border border-white/20 bg-black/60 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        <ShieldCheck className="size-3 text-x-red" />
                        IS Code Compliant
                      </span>
                    </div>

                    {/* Bottom Title Bar Over Photo */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red mb-1">
                        FormX Scope Package
                      </p>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white drop-shadow-md">
                        {currentService.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom: Captioned Scope Details */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 bg-white min-w-0">
                    <div className="min-w-0">
                      <p className="text-[13px] leading-[1.8] text-ink-muted md:text-[15px] tracking-normal">
                        {currentService.summary}
                      </p>

                      {/* 2x2 Highlights Grid */}
                      <div className="mt-6 grid gap-3 sm:grid-cols-2 border-t border-line/60 pt-5 min-w-0">
                        {currentService.highlights.slice(0, 4).map((h, i) => (
                          <div
                            key={h}
                            className="flex items-start gap-3 border border-line/60 bg-[#fafafa] p-3.5 transition-colors hover:border-x-red/40 hover:bg-white"
                          >
                            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center bg-x-red/10 font-display text-[10px] font-bold text-x-red">
                              0{i + 1}
                            </span>
                            <span className="text-[12px] font-semibold text-ink leading-snug tracking-normal">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-8 pt-5 border-t border-line min-w-0">
                      <Link
                        href={`/services/${currentService.slug}`}
                        transitionTypes={["nav-forward"]}
                        className="formx-cut-sm relative inline-flex items-center justify-center gap-2.5 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.35)] transition-all hover:bg-x-red-hover hover:shadow-[0_10px_28px_rgba(222,48,36,0.5)] w-full sm:w-auto"
                      >
                        Explore Full Service Scope
                        <ArrowUpRight className="size-4 shrink-0" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* RIGHT: Industrial Engineering Index Sidebar */}
          <Reveal delay={0.06} className="w-full h-full">
            <div className="flex h-full flex-col border border-line bg-[#0e0e0e] text-white shadow-xl">
              {/* Header Bar */}
              <div className="border-b border-white/10 p-4 md:p-5 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <Building2 className="size-4 text-x-red" />
                  <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                    Engineering Index
                  </span>
                </div>
                <span className="font-display text-[10px] font-bold text-x-red uppercase tracking-wider">
                  {String(activeIdx + 1).padStart(2, "0")} / 10
                </span>
              </div>

              {/* Disciplines Reel List */}
              <div className="flex-1 divide-y divide-white/10 overflow-y-auto">
                {services.map((svc, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={svc.slug}
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      className={cn(
                        "w-full text-left p-4 transition-all duration-300 flex items-center justify-between group relative",
                        isActive
                          ? "bg-white/10 border-l-4 border-l-x-red pl-5 text-white"
                          : "text-white/60 hover:bg-white/5 hover:pl-5 hover:text-white",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-display text-xs font-bold transition-colors",
                            isActive ? "text-x-red" : "text-white/30 group-hover:text-white/70",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4
                            className={cn(
                              "font-display text-xs md:text-sm font-bold uppercase tracking-tight transition-colors",
                              isActive ? "text-white" : "text-white/70 group-hover:text-white",
                            )}
                          >
                            {svc.title}
                          </h4>
                        </div>
                      </div>

                      <ArrowUpRight
                        className={cn(
                          "size-4 transition-all duration-300 shrink-0",
                          isActive
                            ? "text-x-red translate-x-0.5 -translate-y-0.5 opacity-100"
                            : "text-white/20 opacity-0 group-hover:opacity-100 group-hover:text-x-red",
                        )}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick Status */}
              <div className="border-t border-white/10 p-4 bg-black/40 text-[11px] text-white/40 flex items-center justify-between font-display">
                <span>Integrated FormX Scope</span>
                <span className="text-x-red font-bold">100% GFC Ready</span>
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
