"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
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
    <section id="services" className="scroll-mt-32 border-y border-line bg-white section-y">
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
            <p className="mt-2 max-w-[58ch] text-[14px] leading-relaxed text-ink-muted">
              10 disciplines coordinated as one GFC-ready package.
            </p>
          </div>
          <Link
            href="/services"
            transitionTypes={["nav-forward"]}
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-x-red transition-transform hover:translate-x-1"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-0 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Photography stage — minimal chrome on the image */}
          <Reveal className="relative min-h-[420px] overflow-hidden bg-[#111] md:min-h-[520px] lg:min-h-[600px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
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
                  className="absolute inset-0 h-full w-full"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute left-5 top-5 z-10 flex flex-wrap gap-2 md:left-7 md:top-7">
              <span className="bg-x-red px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                {String(activeIdx + 1).padStart(2, "0")} / 10
              </span>
              <span className="bg-black/55 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                {categoryLabels[current.slug] ?? "FormX Scope"}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.slug + "-copy"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                >
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
                    {current.title}
                  </h3>
                  <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-white/70">
                    {current.short}
                  </p>
                  <Link
                    href={`/services/${current.slug}`}
                    transitionTypes={["nav-forward"]}
                    className="mt-5 inline-flex items-center gap-2 bg-x-red px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-x-red-hover"
                  >
                    Explore Full Service Scope
                    <ArrowUpRight className="size-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Index rail */}
          <Reveal delay={0.05} className="flex flex-col border border-t-0 border-line lg:border-l-0 lg:border-t">
            <div className="flex items-center justify-between bg-[#141414] px-4 py-3.5 text-white">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em]">
                Engineering Index
              </span>
              <span className="font-display text-[10px] font-bold text-x-red">
                {String(activeIdx + 1).padStart(2, "0")} / 10
              </span>
            </div>
            <div className="flex flex-1 flex-col bg-white">
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
                      "flex w-full items-center justify-between gap-2 border-b border-line/70 px-4 py-3 text-left transition-colors last:border-b-0",
                      isActive
                        ? "border-l-[3px] border-l-x-red bg-x-red/[0.06] pl-[13px]"
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
                        isActive ? "text-x-red opacity-100" : "opacity-0",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Scope strip — off the image so photography stays clean */}
        <Reveal className="mt-0 border border-t-0 border-line bg-[#fafafa]">
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {current.highlights.slice(0, 4).map((h, i) => (
              <div key={h} className="bg-[#fafafa] px-5 py-4">
                <p className="font-display text-[10px] font-bold text-x-red">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[13px] font-semibold leading-snug text-ink">{h}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
