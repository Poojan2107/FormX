"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { aboutPage } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

/** Founder: VMS-style — core human values + people visual, not design-feature cards */
export function HumanValuesPanel() {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#111] lg:col-span-5 lg:aspect-auto lg:min-h-[420px]">
        <AssetImage
          alt="FORMX team coordination"
          slot="about/studio-cover.jpg"
          kind="studio"
          fit="cover"
          aspect="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <p className="absolute bottom-5 left-5 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
          People · Desk · Site · Review
        </p>
      </div>

      <div className="lg:col-span-7">
        <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
          Why clients choose FORMX
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
          Core human values
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-[1.85] text-ink-muted">
          Focus on how we work with people — not a pitch of design features.
        </p>

        <div className="mt-8 space-y-2">
          {aboutPage.humanValues.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.title} className="border border-line bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-display text-[11px] font-bold text-x-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm font-extrabold uppercase tracking-tight text-ink md:text-base">
                      {item.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-ink/40 transition-transform",
                      isOpen && "rotate-180 text-x-red",
                    )}
                  />
                </button>
                {isOpen ? (
                  <p className="border-t border-line px-5 py-4 pl-14 text-[14px] leading-[1.85] text-ink-muted">
                    {item.body}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
