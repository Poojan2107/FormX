"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Cpu, Layers, Ruler, Zap, Compass } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

const disciplineTabs = [
  {
    id: "all",
    label: "All 10 Services",
    icon: Layers,
  },
  {
    id: "architecture",
    label: "01. Architecture & Planning",
    slugs: ["architectural-design", "site-infrastructure", "sustainable-design"],
    icon: Compass,
  },
  {
    id: "structure",
    label: "02. Structure & Civil",
    slugs: ["structural-engineering", "civil-engineering"],
    icon: Ruler,
  },
  {
    id: "mep",
    label: "03. MEP & Utility",
    slugs: [
      "mechanical-utility-engineering",
      "hvac-engineering",
      "electrical-engineering",
      "fire-protection-engineering",
    ],
    icon: Zap,
  },
  {
    id: "delivery",
    label: "04. Project Delivery",
    slugs: ["project-management"],
    icon: ShieldCheck,
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => {
          const tab = disciplineTabs.find((t) => t.id === activeTab);
          return tab?.slugs?.includes(s.slug);
        });

  return (
    <section id="services" className="relative isolate scroll-mt-32 bg-[#0a0a0a] text-white py-16 md:py-24 border-y border-white/10 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-35" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 600px at 50% 0%, rgba(222,48,36,0.14), transparent 75%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Multidisciplinary Scope"
            title="FormX Engineering & Architecture Matrix"
            description="Integrated architectural planning, structural engineering, MEP utilities, and project management — coordinated as one package from concept to GFC."
            invert
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 border border-x-red bg-x-red px-6 py-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.35)] transition-all hover:bg-white hover:text-ink"
          >
            Explore All 10 Services
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        {/* Interactive Discipline Tab Selector — FormX Architectural Matrix */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5 border-b border-white/10 pb-6">
          {disciplineTabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2.5 border px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] transition-all ${
                  active
                    ? "border-x-red bg-x-red text-white shadow-[0_4px_16px_rgba(222,48,36,0.3)]"
                    : "border-white/15 bg-white/[0.03] text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                <Icon className="size-4 text-x-red" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Architectural Grid Showcase — Full Uncropped Imagery & X-Factor Styling */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, i) => (
            <Reveal key={service.slug} delay={0.03 * (i % 3)} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden border border-white/15 bg-white/[0.03] transition-all duration-500 hover:border-x-red/60 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_rgba(222,48,36,0.18)]"
              >
                {/* Image Container with Full Uncropped Visibility */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#121212]">
                  <AssetImage
                    alt={service.title}
                    slot={service.asset}
                    kind="service"
                    aspect="landscape"
                    fit="cover"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Watermark Number & Red Diagonal Slash */}
                  <div className="absolute left-4 top-4 flex items-center gap-1.5">
                    <span className="border border-x-red/40 bg-x-red/20 px-2.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-x-red backdrop-blur-md">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:border-x-red group-hover:bg-x-red">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white transition-colors group-hover:text-x-red">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-[1.7] text-white/65 line-clamp-3">
                      {service.short}
                    </p>
                  </div>

                  {/* Hover Progress Rail Indicator */}
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <span className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red transition-all group-hover:translate-x-1">
                      Explore Service Scope →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
