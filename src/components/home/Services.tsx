"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
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
  const current = services[activeIdx];

  return (
    <section id="services" className="scroll-mt-32 border-y border-line bg-white py-16 md:py-24">
      <Container>
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Multidisciplinary Practice
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
              10 Coordinated Engineering Services
            </h2>
            <p className="mt-2 prose-measure text-[14px] leading-relaxed text-ink-muted">
              Delivered as one single-window GFC-ready package — zero inter-discipline clashes.
            </p>
          </div>
          <Link
            href="/services"
            transitionTypes={["nav-forward"]}
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-transform hover:translate-x-1"
          >
            Explore All 10 Services
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <div className="grid gap-0 lg:grid-cols-[1.4fr_0.6fr] overflow-hidden border border-line shadow-xl">
          {/* Main Visual Stage Panel */}
          <Reveal className="relative min-h-[440px] bg-[#0d0d0d] md:min-h-[540px] lg:min-h-[620px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <AssetImage
                  alt={current.title}
                  slot={current.asset}
                  kind="service"
                  aspect="auto"
                  fit="cover"
                  objectPosition="center"
                  tone="dark"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Top Discipline Tag */}
            <div className="absolute left-5 top-5 z-10 flex flex-wrap gap-2 md:left-7 md:top-7">
              <span className="bg-x-red px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-md">
                Discipline {String(activeIdx + 1).padStart(2, "0")} / 10
              </span>
              <span className="bg-black/70 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                {categoryLabels[current.slug] ?? "FormX Discipline"}
              </span>
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.slug + "-copy"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl lg:text-4xl">
                    {current.title}
                  </h3>
                  <p className="mt-2.5 max-w-[50ch] text-[14px] leading-relaxed text-white/75">
                    {current.short}
                  </p>
                  <Link
                    href={`/services/${current.slug}`}
                    transitionTypes={["nav-forward"]}
                    className="formx-cut-sm mt-5 inline-flex items-center gap-2 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-md transition-colors hover:bg-x-red-hover"
                  >
                    Explore Full Discipline Scope
                    <ArrowUpRight className="size-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Right Selector Index Rail */}
          <Reveal delay={0.05} className="flex flex-col border-t border-line lg:border-l lg:border-t-0 bg-white">
            <div className="flex items-center justify-between bg-[#141414] px-5 py-4 text-white">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em]">
                Discipline Directory
              </span>
              <span className="font-display text-[10px] font-bold text-x-red">
                {String(activeIdx + 1).padStart(2, "0")} / 10
              </span>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto">
              {services.map((svc, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={svc.slug}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    onMouseEnter={() => setActiveIdx(i)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 border-b border-line/60 px-5 py-3.5 text-left transition-all duration-200 last:border-b-0",
                      isActive
                        ? "border-l-4 border-l-x-red bg-x-red/[0.08] pl-4"
                        : "border-l-4 border-l-transparent hover:bg-[#fafafa]",
                    )}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={cn(
                          "shrink-0 font-display text-[10px] font-extrabold",
                          isActive ? "text-x-red" : "text-ink/30",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "truncate font-display text-[11px] font-bold uppercase tracking-tight md:text-[12px]",
                          isActive ? "text-x-red" : "text-ink",
                        )}
                      >
                        {svc.title}
                      </span>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "size-3.5 shrink-0 transition-opacity",
                        isActive ? "text-x-red opacity-100" : "opacity-0",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Bottom Scope Highlights Strip */}
        <Reveal className="border border-t-0 border-line bg-[#fafafa]">
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {current.highlights.slice(0, 4).map((h, i) => (
              <div key={h} className="bg-[#fafafa] p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-display text-[10px] font-bold text-x-red">
                    HIGHLIGHT 0{i + 1}
                  </span>
                  <Check className="size-3.5 text-x-red" />
                </div>
                <p className="text-[13px] font-semibold leading-snug text-ink">{h}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
