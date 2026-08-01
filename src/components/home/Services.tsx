"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentService = services[activeIdx];

  return (
    <section id="services" className="scroll-mt-32 bg-[#fafafa] py-16 md:py-24 border-y border-line">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete solutions in engineering & architecture"
            description="In-house multidisciplinary coordination across 10 specialized disciplines — delivered as one accountable construction-ready package."
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

        {/* Masterpiece Big Image Stage + Captioned Scope Details */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8 items-stretch">

          {/* LEFT: Big Image Stage & Full Captioned Scope Body */}
          <Reveal className="w-full h-full min-w-0">
            <div className="relative flex h-full flex-col overflow-hidden border border-line bg-white shadow-xl min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.slug}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col h-full justify-between"
                >
                  {/* Top: Big Full-Bleed Landscape Image Panel */}
                  <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden bg-[#111111] border-b border-line shrink-0">
                    <AssetImage
                      alt={currentService.title}
                      slot={currentService.asset}
                      kind="service"
                      aspect="landscape"
                      fit="cover"
                      tone="dark"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    {/* Gradient overlay for clear badge contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute left-4 top-4 flex items-center gap-2 z-10">
                      <span className="border border-x-red/40 bg-x-red px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-md">
                        Discipline {String(activeIdx + 1).padStart(2, "0")} / 10
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10 hidden sm:block">
                      <span className="inline-block border border-white/20 bg-black/60 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        Coordinated Engineering Package
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Captioned Scope Body */}
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8 bg-white min-w-0">
                    <div className="min-w-0">
                      <span className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
                        FormX Scope Package
                      </span>
                      <h3 className="mt-1.5 font-display text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl">
                        {currentService.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-[1.8] text-ink-muted md:text-[15px]">
                        {currentService.summary}
                      </p>

                      <div className="mt-6 grid gap-2.5 sm:grid-cols-2 border-t border-line/60 pt-5 min-w-0">
                        {currentService.highlights.slice(0, 4).map((h) => (
                          <div key={h} className="flex items-start gap-2.5 text-[12px] font-semibold text-ink min-w-0">
                            <Check className="size-3.5 text-x-red shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

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

          {/* RIGHT: Architectural Navigation Index */}
          <Reveal delay={0.06} className="w-full h-full">
            <div className="flex h-full flex-col border border-line bg-white divide-y divide-line/60 shadow-lg">
              <div className="bg-[#111111] p-4 md:p-5 text-white flex items-center justify-between">
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-x-red">
                  Engineering Index
                </span>
                <span className="text-[11px] text-white/50">Select to preview</span>
              </div>

              <div className="flex-1 divide-y divide-line/60">
                {services.map((svc, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={svc.slug}
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      className={`w-full text-left p-3.5 md:p-4 transition-all duration-300 flex items-center justify-between group ${
                        isActive
                          ? "bg-x-red/10 border-l-4 border-l-x-red pl-5"
                          : "hover:bg-gray-50 hover:pl-5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-display text-xs font-bold ${isActive ? "text-x-red" : "text-ink/40"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className={`font-display text-xs md:text-sm font-bold uppercase transition-colors ${isActive ? "text-x-red" : "text-ink group-hover:text-x-red"}`}>
                            {svc.title}
                          </h4>
                        </div>
                      </div>

                      <ArrowUpRight className={`size-4 transition-transform duration-300 ${isActive ? "text-x-red translate-x-0.5 -translate-y-0.5" : "text-ink/20 group-hover:text-x-red"}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
