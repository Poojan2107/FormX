"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { aboutPage } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

/**
 * Founder mark: like VMS "Why Choose" — team/collaboration visual + human-values accordion.
 * Not design-feature cards.
 * Ref: https://www.vmsconsultants.com/
 */
export function HumanValuesPanel() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#111] lg:col-span-6 lg:aspect-auto lg:min-h-[480px]">
          <AssetImage
            alt="FORMX collaboration — people close to the work"
            slot="about/studio-cover.jpg"
            kind="studio"
            fit="cover"
            aspect="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
              Because the best results are built by a team
            </p>
            <p className="mt-2 max-w-md font-display text-xl font-extrabold uppercase leading-snug tracking-tight text-white md:text-2xl">
              Better designs start with better collaboration
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Why choose FORMX
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            Core human values
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.85] text-ink-muted">
            Thoughtful. Practical. Collaborative — how we work with people, not a catalogue of design
            features.
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

      <div className="mt-14 border border-line bg-white p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Design philosophy
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
              Collaboration that lands on site
            </h3>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {aboutPage.collaborationPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-[14px] font-medium text-ink">
                <span className="size-1.5 shrink-0 rotate-45 bg-x-red" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/contact"
          transitionTypes={["nav-forward"]}
          className="mt-8 inline-flex items-center gap-2 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-x-red-hover"
        >
          Book a consultation
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
