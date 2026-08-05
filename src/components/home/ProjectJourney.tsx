"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { XRule } from "@/components/ui/XMotif";
import { cn } from "@/lib/cn";

/**
 * Before × Issue — sole dark signature on home.
 * Decisions that must close before sheets leave the studio.
 */
export function ProjectJourney() {
  const [active, setActive] = useState(0);
  const stage = formxMethod.stages[active];

  return (
    <section
      id="before-issue"
      className="scroll-mt-28 border-y border-line bg-[#0a0a0a] py-20 text-white md:py-28"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            {formxMethod.code}
          </p>
          <h2
            className="mt-4 font-display font-black uppercase leading-[0.98] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Before <span className="text-x-red">×</span> Issue
          </h2>
          <p className="mt-6 measure-studio text-[15px] leading-[1.9] text-white/55">
            {formxMethod.belief}
          </p>
          <XRule tone="dark" className="mt-8 max-w-md" />
          <p className="mt-6 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-white/40">
            {formxMethod.disciplines.join(" · ")}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ol>
              {formxMethod.stages.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex w-full items-start gap-4 border-b border-white/10 py-5 text-left transition-colors",
                      i === active ? "text-white" : "text-white/40 hover:text-white/70",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 w-6 font-display text-[11px] font-black tracking-[0.16em]",
                        i === active ? "text-x-red" : "text-white/25",
                      )}
                    >
                      {i === active ? "×" : s.num}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-base font-extrabold uppercase tracking-tight md:text-lg">
                        {s.title}
                      </span>
                      <span className="mt-1 block text-[13px] leading-snug text-white/45 group-hover:text-white/55">
                        {s.verb}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-7">
            <div className="x-corner relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#141414]">
              <div className="absolute inset-4 md:inset-6">
                <AssetImage
                  alt={stage.caption}
                  slot={stage.slot}
                  kind="facility"
                  fit="contain"
                  aspect="auto"
                  tone="dark"
                  objectPosition="center"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="pointer-events-none absolute bottom-3 left-4 right-4 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 md:bottom-4 md:left-5">
                {stage.caption}
              </p>
            </div>

            <div className="mt-8">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-x-red">
                {stage.num} · {stage.verb}
              </p>
              <h3 className="mt-3 max-w-[28ch] font-display text-2xl font-extrabold uppercase leading-snug tracking-tight md:text-3xl">
                {stage.decision}
              </h3>
              <p className="mt-5 measure-studio text-[15px] leading-[1.85] text-white/60">
                {stage.why}
              </p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  What this prevents
                </p>
                <p className="mt-2 text-[14px] leading-[1.75] text-white/65">{stage.prevents}</p>
              </div>
              <p className="mt-8 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                {formxMethod.stamp}
              </p>
              <Link
                href="/projects/vapi-g2-industrial"
                transitionTypes={["nav-forward"]}
                className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red hover:text-white"
              >
                See it on a real facility
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
