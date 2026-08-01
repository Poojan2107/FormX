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

const categoryLabels: Record<string, string> = {
  "architectural-design": "Architecture & Planning",
  "site-infrastructure": "Infrastructure & Site",
  "sustainable-design": "Sustainable Engineering",
  "structural-engineering": "Structural Systems",
  "civil-engineering": "Civil & Foundation",
  "mechanical-utility-engineering": "Mechanical Utilities",
  "hvac-engineering": "HVAC & Climate Control",
  "electrical-engineering": "Electrical Systems",
  "fire-protection-engineering": "Life Safety & Fire",
  "project-management": "Project Delivery",
};

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentService = services[activeIdx];

  return (
    <section id="services" className="scroll-mt-32 bg-[#fafafa] py-16 md:py-24 border-y border-line">
      <Container>
        {/* Section Heading */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Multidisciplinary Practice"
            title="Complete solutions in engineering & architecture"
            description="10 disciplines coordinated as one GFC-ready package."
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

        {/* Master Showcase: Light Architectural Split Stage */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8 items-stretch">

          {/* LEFT: Full Architectural Visual Stage (Smooth Fade Crossfade) */}
          <Reveal className="w-full h-full min-w-0">
            <div className="relative flex h-full flex-col overflow-hidden border border-line bg-white shadow-xl min-w-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentService.slug}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                  className="flex flex-col h-full justify-between min-w-0"
                >
                  {/* Top Landscape Photo Banner */}
                  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden bg-[#111111] border-b border-line shrink-0">
                    <AssetImage
                      alt={currentService.title}
                      slot={currentService.asset}
                      kind="service"
                      aspect="landscape"
                      fit="cover"
                      tone="dark"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 z-10">
                      <span className="border border-x-red/40 bg-x-red px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-md">
                        Discipline {String(activeIdx + 1).padStart(2, "0")} / 10
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1.5 border border-white/20 bg-black/60 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        <ShieldCheck className="size-3 text-x-red" />
                        IS Code Compliant
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="inline-block border border-white/20 bg-black/60 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        {categoryLabels[currentService.slug] ?? "FormX Scope Package"}
                      </span>
                    </div>
                  </div>

                  {/* Scope Details Body */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 md:p-8 bg-white min-w-0">
                    <div className="min-w-0 pr-1">
                      <span className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
                        FormX Scope Package
                      </span>
                      <h3 className="mt-1.5 font-display text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl">
                        {currentService.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-[1.8] text-ink-muted md:text-[14px] tracking-normal">
                        {currentService.summary}
                      </p>

                      {/* 2x2 Scope Deliverables Grid */}
                      <div className="mt-6 grid gap-3 sm:grid-cols-2 border-t border-line/60 pt-5 min-w-0">
                        {currentService.highlights.slice(0, 4).map((h, i) => (
                          <div
                            key={h}
                            className="flex items-start gap-2.5 border border-line/60 bg-[#fafafa] p-3 transition-colors hover:border-x-red/40 hover:bg-white min-w-0"
                          >
                            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center bg-x-red/10 font-display text-[10px] font-bold text-x-red">
                              0{i + 1}
                            </span>
                            <span className="text-[12px] font-semibold text-ink leading-snug tracking-normal truncate">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Action Button */}
                    <div className="mt-8 pt-5 border-t border-line min-w-0">
                      <Link
                        href={`/services/${currentService.slug}`}
                        transitionTypes={["nav-forward"]}
                        className="inline-flex items-center justify-center gap-2.5 border border-x-red bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.3)] transition-all hover:bg-white hover:text-ink w-full sm:w-auto"
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

          {/* RIGHT: Clean Interactive Discipline Index (Light Theme) */}
          <Reveal delay={0.06} className="w-full h-full">
            <div className="flex h-full flex-col border border-line bg-white divide-y divide-line/60 shadow-lg">
              {/* Header */}
              <div className="bg-[#161616] p-4 md:p-5 text-white flex items-center justify-between">
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

              {/* Discipline Items List */}
              <div className="flex-1 divide-y divide-line/60 overflow-y-auto">
                {services.map((svc, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={svc.slug}
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      onMouseEnter={() => setActiveIdx(i)}
                      className={cn(
                        "w-full text-left p-3.5 md:p-4 transition-all duration-200 flex items-center justify-between group relative select-none",
                        isActive
                          ? "bg-x-red/10 border-l-4 border-l-x-red pl-5 text-x-red"
                          : "text-ink/80 hover:bg-gray-50 hover:pl-5 hover:text-x-red",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-display text-xs font-bold transition-colors",
                            isActive ? "text-x-red" : "text-ink/35 group-hover:text-x-red/70",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4
                            className={cn(
                              "font-display text-xs md:text-sm font-bold uppercase tracking-tight transition-colors",
                              isActive ? "text-x-red" : "text-ink group-hover:text-x-red",
                            )}
                          >
                            {svc.title}
                          </h4>
                        </div>
                      </div>

                      <ArrowUpRight
                        className={cn(
                          "size-4 transition-transform duration-200 shrink-0",
                          isActive
                            ? "text-x-red translate-x-0.5 -translate-y-0.5 opacity-100"
                            : "text-ink/20 opacity-0 group-hover:opacity-100 group-hover:text-x-red",
                        )}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Footer status */}
              <div className="p-3.5 bg-[#fafafa] text-[11px] text-ink-muted flex items-center justify-between font-display border-t border-line">
                <span>FormX Practice Scope</span>
                <span className="text-x-red font-bold uppercase tracking-wider">100% GFC Ready</span>
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
