"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const categories = [
  { id: "all", label: "All" },
  { id: "architecture", label: "Architecture" },
  { id: "structure", label: "Structure & Civil" },
  { id: "mep", label: "MEP" },
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
  const reduce = useReducedMotion();
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
      <Reveal>
        <div className="mb-8 flex flex-wrap items-center gap-1 border-b border-line pb-5">
          {counts.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              aria-pressed={active === cat.id}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-2 font-display text-[11px] font-bold uppercase tracking-[0.12em] transition-colors",
                active === cat.id
                  ? "bg-x-red text-white"
                  : "text-ink/50 hover:bg-[#f4f4f4] hover:text-ink",
              )}
            >
              {cat.label}
              <span
                className={cn(
                  "tabular-nums text-[10px]",
                  active === cat.id ? "text-white/70" : "text-ink/35",
                )}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              transitionTypes={["nav-forward"]}
              className="group relative block min-h-[300px] overflow-hidden bg-[#111] sm:min-h-[340px]"
            >
              <AssetImage
                alt={service.title}
                slot={service.asset}
                kind="service"
                aspect="landscape"
                fit="cover"
                tone="dark"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

              <span className="absolute left-3 top-3 z-10 bg-x-red px-2 py-1 font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                {String(i + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
              </span>

              <span className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red">
                <ArrowUpRight className="size-4 text-white" />
              </span>

              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6">
                <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-white transition-colors group-hover:text-x-red md:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-white/65">
                  {service.short}
                </p>
                <p className="mt-4 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
                  Explore scope →
                </p>
              </div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
