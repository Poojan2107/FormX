"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { cn } from "@/lib/cn";

/** FORMX Before Issue — owned methodology (not a generic process widget) */
export function ProjectJourney() {
  const [active, setActive] = useState(0);
  const stage = formxMethod.stages[active];

  return (
    <section id="before-issue" className="scroll-mt-28 border-y border-line bg-[#0a0a0a] py-20 text-white md:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            {formxMethod.code}
          </p>
          <h2
            className="mt-3 font-display font-black uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            {formxMethod.name}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.85] text-white/60">{formxMethod.belief}</p>
          <p className="mt-4 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/40">
            {formxMethod.disciplines.join(" · ")}
          </p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
          {formxMethod.stages.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 border px-4 py-2.5 text-left transition-colors",
                i === active
                  ? "border-x-red bg-x-red text-white"
                  : "border-white/15 text-white/55 hover:border-white/35 hover:text-white",
              )}
            >
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em]">
                {s.num}
              </span>
              <span className="mt-0.5 block font-display text-[12px] font-extrabold uppercase tracking-tight">
                {s.title}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <VisualFrame
              slot={stage.slot}
              alt={stage.caption}
              fit="contain"
              aspect="landscape"
              tone="dark"
              className="border border-white/10"
            />
            <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              {stage.caption}
            </p>
          </div>
          <div className="lg:col-span-6">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-x-red">
              {stage.num} · {stage.verb}
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-snug tracking-tight md:text-3xl">
              {stage.decision}
            </h3>
            <p className="mt-5 text-[15px] leading-[1.85] text-white/65">{stage.why}</p>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                What this prevents
              </p>
              <p className="mt-2 text-[14px] leading-[1.75] text-white/70">{stage.prevents}</p>
            </div>
            <p className="mt-6 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-white/80">
              {stage.disciplines}
            </p>
            <Link
              href="/projects/vapi-g2-industrial"
              transitionTypes={["nav-forward"]}
              className="mt-10 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red hover:text-white"
            >
              See Before Issue on a real facility
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
