"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, Building2, Layers, ShieldCheck, Cpu } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

const categories = [
  { id: "all", label: "All 10 Disciplines" },
  { id: "architecture", label: "Architecture & Planning" },
  { id: "structure", label: "Structure & Civil" },
  { id: "mep", label: "MEP & Utilities" },
  { id: "delivery", label: "Project Delivery" },
];

const serviceCategories: Record<string, string> = {
  "architectural-design": "architecture",
  "site-infrastructure": "architecture",
  "sustainable-design": "architecture",
  "structural-engineering": "structure",
  "civil-engineering": "structure",
  "mechanical-utility-engineering": "mep",
  "hvac-engineering": "mep",
  "electrical-engineering": "mep",
  "fire-protection-engineering": "mep",
  "project-management": "delivery",
};

export function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => serviceCategories[s.slug] === activeCategory);

  return (
    <section id="services" className="scroll-mt-32 bg-[#fafafa] py-16 md:py-24 border-y border-line">
      <Container>
        {/* Section Header */}
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
            View All 10 Services
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        {/* Interactive Category Filter Pills */}
        <Reveal delay={0.04} className="mt-10">
          <div className="flex flex-wrap items-center gap-2.5 border-b border-line pb-5">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? services.length
                  : services.filter((s) => serviceCategories[s.slug] === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "inline-flex items-center gap-2.5 border px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-200",
                    isSelected
                      ? "border-x-red bg-x-red text-white shadow-[0_4px_20px_rgba(222,48,36,0.35)]"
                      : "border-line bg-white text-ink/70 hover:border-x-red/40 hover:text-x-red",
                  )}
                >
                  <span>{cat.label}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
                      isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-ink/50",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Creative Editorial Visual Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredServices.map((service, i) => (
              <Reveal key={service.slug} delay={0.03 * (i % 3)} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="x-lift x-desat group relative flex h-full flex-col overflow-hidden border border-line bg-white shadow-md transition-all duration-500 hover:border-x-red/50 hover:shadow-[0_20px_45px_rgba(222,48,36,0.12)]"
                >
                  {/* Image Container with Discipline Badge */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111111] border-b border-line">
                    <AssetImage
                      alt={service.title}
                      slot={service.asset}
                      kind="service"
                      aspect="landscape"
                      fit="cover"
                      tone="dark"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Discipline Badge */}
                    <span className="absolute left-3.5 top-3.5 border border-x-red/40 bg-x-red px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-sm">
                      Discipline {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Number Watermark */}
                    <span className="absolute right-4 top-2 font-display text-[42px] font-black leading-none tracking-tighter text-white/10 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Arrow Action Button */}
                    <span className="absolute bottom-3.5 right-3.5 flex size-9 items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red">
                      <ArrowUpRight className="size-4 text-white" />
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-x-red">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-[13px] leading-[1.75] text-ink-muted line-clamp-2">
                        {service.summary}
                      </p>

                      <div className="mt-4 space-y-2 border-t border-line/60 pt-4">
                        {service.highlights.slice(0, 2).map((h) => (
                          <div key={h} className="flex items-center gap-2 text-[12px] font-medium text-ink/80">
                            <Check className="size-3.5 text-x-red shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-line/60 pt-4">
                      <span className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red transition-all group-hover:translate-x-1">
                        Explore Full Service Scope →
                      </span>
                    </div>
                  </div>

                  {/* Red Bottom Accent Line */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-x-red transition-all duration-400 group-hover:w-full"
                    aria-hidden
                  />
                </Link>
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Practice Integration Banner */}
        <Reveal delay={0.1} className="mt-14">
          <div className="formx-cut-x formx-edge formx-edge-x flex flex-col items-start justify-between gap-6 border border-line bg-[#111111] p-6 text-white md:flex-row md:items-center md:p-8">
            <div>
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                Single-Window Coordination
              </p>
              <h3 className="mt-1.5 font-display text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
                Architecture, Structure, Civil &amp; MEP under one roof
              </h3>
              <p className="mt-2 text-[13px] text-white/60">
                100% GFC construction-ready packages with zero inter-discipline coordination gaps.
              </p>
            </div>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="formx-cut-sm shrink-0 inline-flex items-center gap-2.5 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.35)] transition-all hover:bg-x-red-hover"
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
