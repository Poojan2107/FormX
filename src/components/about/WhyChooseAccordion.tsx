"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { AssetImage } from "@/components/ui/AssetImage";
import { whyPoints } from "@/data/site";

export function WhyChooseAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
      {/* Left: Interactive Progressive Accordion */}
      <div className="flex flex-col justify-center lg:col-span-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-x-red" />
          <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Why Partner With FORMX
          </span>
        </div>

        <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl">
          Reasons Clients Rely On FORMX
        </h2>

        <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink-muted">
          Every decision from master planning to structural sizing is backed by real engineers accountable for on-site buildability.
        </p>

        {/* Accordion List */}
        <div className="mt-8 space-y-3">
          {whyPoints.map((point, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={point.num}
                className={cn(
                  "border transition-all duration-300",
                  isOpen
                    ? "border-x-red/40 bg-white shadow-md"
                    : "border-line bg-[#fafafa] hover:border-line-dark",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "font-display text-xs font-black tracking-wider transition-colors",
                        isOpen ? "text-x-red" : "text-ink/40",
                      )}
                    >
                      {point.num}
                    </span>
                    <h3 className="font-display text-base font-extrabold text-ink md:text-lg">
                      {point.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-ink-muted transition-transform duration-300",
                      isOpen && "rotate-180 text-x-red",
                    )}
                  />
                </button>

                {isOpen ? (
                  <div className="border-t border-line/50 px-5 pb-5 pt-3">
                    <p className="text-[14px] leading-[1.8] text-ink-muted">
                      {point.body}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Authentic Studio & Engineering Media Stage */}
      <div className="relative lg:col-span-5">
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-[#0d0d0d] shadow-2xl">
          <AssetImage
            alt="FORMX engineering team and office discussion"
            slot="about/studio-cover.jpg"
            kind="studio"
            tone="dark"
            fit="cover"
            aspect="auto"
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute left-0 top-0 h-full w-1.5 bg-x-red" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block border border-white/20 bg-black/60 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Practice Studio · Ahmedabad
            </span>
            <p className="mt-2.5 font-display text-base font-bold uppercase leading-snug text-white/90">
              Direct Senior Engagement On Every Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
