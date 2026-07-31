"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const categories = [
  { id: "all", label: "All services" },
  { id: "architecture", label: "Architecture & Planning" },
  { id: "structure", label: "Structure & Civil" },
  { id: "mep", label: "MEP & Utilities" },
  { id: "delivery", label: "Delivery" },
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

export function ServicesGrid() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? services
      : services.filter((s) => serviceCategories[s.slug] === active);

  const counts = categories.map((c) => ({
    ...c,
    count:
      c.id === "all"
        ? services.length
        : services.filter((s) => serviceCategories[s.slug] === c.id).length,
  }));

  return (
    <>
      {/* Category Filter Tabs */}
      <Reveal>
        <div className="mb-10 flex flex-wrap gap-2.5">
          {counts.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={cn(
                "inline-flex items-center gap-2 border px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-200",
                active === cat.id
                  ? "border-x-red bg-x-red text-white shadow-[0_4px_16px_rgba(222,48,36,0.3)]"
                  : "border-line bg-white text-ink hover:border-x-red/40 hover:text-x-red",
              )}
            >
              {cat.label}
              <span
                className={cn(
                  "px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
                  active === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-line text-ink-muted",
                )}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Services Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              transitionTypes={["nav-forward"]}
              className="x-desat formx-cut-x formx-edge formx-edge-x x-hover-rail group relative flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-500 hover:border-x-red/50 hover:shadow-[0_16px_36px_rgba(222,48,36,0.1)]"
            >
              {/* Full-bleed media panel */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line/60 bg-[#141414]">
                <AssetImage
                  alt={service.title}
                  slot={service.asset}
                  kind="service"
                  aspect="landscape"
                  fit="cover"
                  tone="dark"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <span className="absolute left-3.5 top-3.5 border border-x-red/40 bg-x-red px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                  Discipline {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute right-3.5 top-3 font-display text-[28px] font-black leading-none tracking-tighter text-white/15 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="absolute bottom-3 right-3.5 flex size-9 items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red">
                  <ArrowUpRight className="size-4 text-white" />
                </span>
              </div>

              {/* Content Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-x-red">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-[1.7] text-ink-muted line-clamp-2">
                    {service.short}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-line/60 pt-4">
                    {service.highlights.slice(0, 2).map((h) => (
                      <li key={h} className="flex items-center gap-2 text-[12px] text-ink-muted">
                        <Check className="size-3.5 text-x-red shrink-0" />
                        <span className="truncate">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-line/60 pt-4">
                  <span className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red transition-all group-hover:translate-x-1">
                    Explore Service Scope →
                  </span>
                </div>
              </div>

              <span
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-x-red transition-all duration-400 group-hover:w-full"
                aria-hidden
              />
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
