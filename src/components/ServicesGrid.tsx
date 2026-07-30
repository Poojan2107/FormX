"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
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

const categoryBorders: Record<string, string> = {
  architecture: "border-t-blue-500",
  structure: "border-t-amber-500",
  mep: "border-t-emerald-500",
  delivery: "border-t-purple-500",
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

  const gridCols =
    filtered.length === 2 || filtered.length === 4
      ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

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
          className={gridCols}
        >
          {filtered.map((service, i) => {
            const cat = serviceCategories[service.slug];
            const isLastOfTen = active === "all" && i === 9;

            if (isLastOfTen) {
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group col-span-full flex flex-col overflow-hidden border border-line border-t-4 border-t-purple-500 bg-white transition-all duration-300 hover:border-x-red/40 hover:shadow-[0_20px_50px_rgba(222,48,36,0.1)] lg:grid lg:grid-cols-[1.1fr_1.9fr]"
                >
                  <div className="relative min-h-[220px] overflow-hidden lg:min-h-[100%]">
                    <AssetImage
                      alt={service.title}
                      slot={service.asset}
                      kind="service"
                      aspect="landscape"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 border border-purple-200 bg-purple-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-purple-700">
                      Featured Practice
                    </span>
                  </div>

                  <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-display text-[12px] font-bold text-x-red">
                          10 / 10
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="border border-purple-200 bg-purple-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-purple-700">
                            {categoryLabels[cat]}
                          </span>
                          <ArrowUpRight className="size-5 text-ink/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-x-red" />
                        </div>
                      </div>

                      <h2 className="font-display text-2xl font-bold uppercase text-ink md:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-[14px] leading-[1.75] text-ink-muted md:text-[15px]">
                        {service.short}
                      </p>

                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 border-t border-line/60 pt-5">
                        {service.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-[13px] font-medium text-ink-muted"
                          >
                            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-x-red" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-x-red">
                      Explore project management & procurement scope
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              );
            }

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={cn(
                  "group flex h-full flex-col overflow-hidden border border-line border-t-4 bg-white transition-all duration-300 hover:border-x-red/40 hover:shadow-[0_16px_40px_rgba(222,48,36,0.08)]",
                  categoryBorders[cat] ?? "border-t-line",
                )}
              >
                <div className="relative overflow-hidden">
                  <AssetImage
                    alt={service.title}
                    slot={service.asset}
                    kind="service"
                    aspect="landscape"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="font-display text-[11px] font-bold text-x-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]",
                          categoryColors[cat] ?? "",
                        )}
                      >
                        {categoryLabels[cat]}
                      </span>
                      <ArrowUpRight className="size-4 text-ink/25 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                    </div>
                  </div>
                  <h2 className="font-display text-xl font-bold uppercase text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted">
                    {service.short}
                  </p>

                  {/* Highlights preview */}
                  <ul className="mt-5 space-y-2 border-t border-line/60 pt-4">
                    {service.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[12px] text-ink-muted"
                      >
                        <Check className="mt-0.5 size-3.5 shrink-0 text-x-red" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto pt-6 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-x-red opacity-0 transition-opacity group-hover:opacity-100">
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
