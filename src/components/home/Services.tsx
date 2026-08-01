"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Building2 } from "lucide-react";
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
  const currentService = services[activeIdx];

  return (
    <section id="services" className="scroll-mt-32 border-y border-line bg-[#fafafa] section-y">
      <Container>
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                Multidisciplinary Practice
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Complete solutions in engineering &amp; architecture
            </h2>
            <p className="mt-2 max-w-[60ch] text-[14px] leading-relaxed text-ink-muted">
              10 disciplines coordinated as one GFC-ready package.
            </p>
          </div>
          <Link
            href="/services"
            transitionTypes={["nav-forward"]}
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-x-red transition-all hover:translate-x-1"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-0 lg:grid-cols-[1.35fr_0.65fr] lg:border lg:border-line">
          {/* LEFT: Media-first stage */}
          <Reveal className="min-w-0">
            <div className="relative flex h-full min-h-[520px] flex-col overflow-hidden border border-line bg-[#111] lg:border-0 lg:border-r">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentService.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="absolute inset-0"
                >
                  <AssetImage
                    alt={currentService.title}
                    slot={currentService.asset}
                    kind="service"
                    aspect="landscape"
                    fit="cover"
                    tone="dark"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 mt-auto flex flex-col p-6 sm:p-8">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentService.slug + "-copy"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="bg-x-red px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                        {String(activeIdx + 1).padStart(2, "0")} / 10
                      </span>
                      <span className="border border-white/25 bg-black/40 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
                        {categoryLabels[currentService.slug] ?? "FormX Scope"}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
                      {currentService.title}
                    </h3>
                    <p className="mt-2 max-w-[55ch] text-[13px] leading-relaxed text-white/70 md:text-[14px]">
                      {currentService.short}
                    </p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {currentService.highlights.slice(0, 4).map((h, i) => (
                        <li
                          key={h}
                          className="border border-white/15 bg-black/35 px-3 py-2 text-[11px] font-semibold text-white/85 backdrop-blur-sm"
                        >
                          <span className="mr-2 font-display text-x-red">0{i + 1}</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${currentService.slug}`}
                      transitionTypes={["nav-forward"]}
                      className="formx-cut-sm mt-6 inline-flex items-center gap-2 bg-x-red px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-x-red-hover"
                    >
                      Explore Full Service Scope
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Index — height matched, no orphan footer gap */}
          <Reveal delay={0.05} className="min-w-0">
            <div className="flex h-full flex-col border border-t-0 border-line bg-white lg:border-0">
              <div className="flex items-center justify-between border-b border-line bg-[#161616] px-4 py-3.5 text-white">
                <div className="flex items-center gap-2">
                  <Building2 className="size-3.5 text-x-red" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em]">
                    Engineering Index
                  </span>
                </div>
                <span className="font-display text-[10px] font-bold text-x-red">
                  {String(activeIdx + 1).padStart(2, "0")} / 10
                </span>
              </div>

              <div className="flex flex-1 flex-col">
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
                        "flex w-full items-center justify-between gap-2 border-b border-line/70 px-4 py-2.5 text-left transition-colors last:border-b-0",
                        isActive
                          ? "border-l-[3px] border-l-x-red bg-x-red/[0.07] pl-[13px]"
                          : "border-l-[3px] border-l-transparent hover:bg-[#fafafa]",
                      )}
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span
                          className={cn(
                            "shrink-0 font-display text-[10px] font-bold",
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
                          "size-3.5 shrink-0",
                          isActive ? "text-x-red opacity-100" : "text-ink/15 opacity-0",
                        )}
                      />
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
