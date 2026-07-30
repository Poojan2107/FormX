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

const categoryColors: Record<string, string> = {
  architecture: "bg-blue-50 text-blue-700 border-blue-200",
  structure: "bg-amber-50 text-amber-700 border-amber-200",
  mep: "bg-emerald-50 text-emerald-700 border-emerald-200",
  delivery: "bg-purple-50 text-purple-700 border-purple-200",
};

const categoryLabels: Record<string, string> = {
  architecture: "Architecture",
  structure: "Structure & Civil",
  mep: "MEP & Utilities",
  delivery: "Delivery",
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
      {/* Category filter tabs */}
      <Reveal>
        <div className="mb-10 flex flex-wrap gap-2">
          {counts.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={cn(
                "inline-flex items-center gap-2 border px-4 py-2 text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-200",
                active === cat.id
                  ? "border-x-red bg-x-red text-white shadow-[0_4px_16px_rgba(222,48,36,0.25)]"
                  : "border-line bg-white text-ink hover:border-x-red/40 hover:text-x-red",
              )}
            >
              {cat.label}
              <span
                className={cn(
                  "rounded-sm px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
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

      {/* Animated grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((service, i) => {
            const cat = serviceCategories[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="formx-cut-x formx-edge formx-edge-x x-hover-rail group flex h-full flex-col overflow-hidden border border-line bg-white transition-all hover:border-x-red/35 hover:shadow-[0_12px_40px_rgba(222,48,36,0.06)]"
              >
                <AssetImage
                  alt={service.title}
                  slot={service.asset}
                  kind="service"
                  aspect="landscape"
                  className="w-full"
                />
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="font-display text-[11px] font-bold text-x-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]",
                          categoryColors[cat] ?? "",
                        )}
                      >
                        {categoryLabels[cat]}
                      </span>
                      <ArrowUpRight className="size-4 text-ink/25 group-hover:text-x-red" />
                    </div>
                  </div>
                  <h2 className="font-display text-xl font-bold uppercase text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted">
                    {service.short}
                  </p>

                  {/* Highlights preview */}
                  <ul className="mt-4 space-y-1.5">
                    {service.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[12px] text-ink-muted"
                      >
                        <Check className="mt-0.5 size-3 shrink-0 text-x-red" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto pt-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-x-red opacity-0 transition-opacity group-hover:opacity-100">
                    View service →
                  </span>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
