"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

const disciplineTabs = [
  { id: "all", label: "All 10 Services" },
  { id: "architecture", label: "Architecture & Planning", slugs: ["architectural-design", "site-infrastructure", "sustainable-design"] },
  { id: "structure", label: "Structure & Civil", slugs: ["structural-engineering", "civil-engineering"] },
  { id: "mep", label: "MEP & Utilities", slugs: ["mechanical-utility-engineering", "hvac-engineering", "electrical-engineering", "fire-protection-engineering"] },
  { id: "delivery", label: "Project Delivery", slugs: ["project-management"] },
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
    <section id="services" className="scroll-mt-32 bg-[#fafafa] py-16 md:py-24 border-y border-line">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete solutions in engineering & architecture"
            description="Multidisciplinary architectural drawings, structural engineering, MEP utilities, and project management — coordinated for 100% construction-ready packages."
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-x-red transition-all hover:translate-x-1"
          >
            View All Services
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        {/* Clean Discipline Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-line pb-5">
          {disciplineTabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`border px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.12em] transition-all ${
                  active
                    ? "border-x-red bg-x-red text-white shadow-sm"
                    : "border-line bg-white text-ink hover:border-x-red/40 hover:text-x-red"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Bright, Visual-First Services Grid — Large Prominent Uncropped Images */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, i) => (
            <Reveal key={service.slug} delay={0.03 * (i % 3)} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:border-x-red/40 hover:shadow-[0_16px_36px_rgba(222,48,36,0.1)]"
              >
                {/* Large Prominent Uncropped Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 border-b border-line/60">
                  <AssetImage
                    alt={service.title}
                    slot={service.asset}
                    kind="service"
                    aspect="landscape"
                    fit="cover"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3.5 top-3.5 border border-line bg-white/90 px-2.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-ink shadow-sm">
                    0{i + 1}
                  </span>
                  <div className="absolute right-3.5 top-3.5 flex size-8 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-x-red group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-x-red">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-[1.7] text-ink-muted">
                      {service.short}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-line/60 pt-4 flex items-center justify-between">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-x-red transition-all group-hover:translate-x-1">
                      Explore Scope →
                    </span>
                    <span className="h-0.5 w-6 bg-x-red transition-all duration-300 group-hover:w-12" />
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
