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
        <div className="relative overflow-hidden border border-black/8 bg-[#111] p-3 lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden lg:min-h-[520px]">
          <AssetImage
            alt="Hiren J. Shah — Founder & Managing Partner, FORMX"
            slot="about/hiren-j-shah.jpg"
            kind="team"
            fit="cover"
            aspect="auto"
            objectPosition="center top"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="eyebrow text-x-red">
              Leadership
            </p>
            <p className="mt-2 max-w-md font-display text-xl font-extrabold leading-snug tracking-tight text-white md:text-2xl">
              Technical judgement stays close to the work.
            </p>
          </div>
        </div>
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow text-x-red">
            How the studio works
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Core human values
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.85] text-ink-muted">
            FormX is not presenting values as decoration. These are the behaviours that shape
            reviews, coordination, and the way drawings are issued.
          </p>

          <div className="mt-8 space-y-2">
            {aboutPage.humanValues.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.title} className="x-hover-rail border border-line bg-white transition-colors hover:border-black/15">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className="editorial-meta text-x-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[0.98rem] font-bold tracking-tight text-ink md:text-[1.02rem]">
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
                    <p className="border-t border-line px-5 py-4 pl-14 text-[14px] leading-[1.9] text-ink-muted md:px-6">
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
            <p className="eyebrow text-x-red">
              Design philosophy
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
              Coordination that survives construction
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
          className="fx-btn-primary mt-8 inline-flex items-center gap-2"
        >
          Book a consultation
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
