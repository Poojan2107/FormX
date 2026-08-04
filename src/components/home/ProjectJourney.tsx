"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

/**
 * Before Issue — editorial method (not Construction Sequence tabs).
 * Vertical stage list + one filled evidence image — Jacobs restraint.
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
            className="mt-3 font-display font-black uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            {formxMethod.name}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-white/55">
            {formxMethod.belief}
          </p>
          <p className="mt-4 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/35">
            {formxMethod.disciplines.join(" · ")}
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ol className="space-y-0 border-l border-white/15">
              {formxMethod.stages.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex w-full items-start gap-4 border-l-2 py-4 pl-5 text-left transition-colors -ml-px",
                      i === active
                        ? "border-x-red text-white"
                        : "border-transparent text-white/40 hover:text-white/70",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 font-display text-[11px] font-bold tracking-[0.16em]",
                        i === active ? "text-x-red" : "text-white/30",
                      )}
                    >
                      {s.num}
                    </span>
                    <span>
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
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#141414]">
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
              <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-snug tracking-tight md:text-3xl">
                {stage.decision}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.85] text-white/60">{stage.why}</p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  What this prevents
                </p>
                <p className="mt-2 text-[14px] leading-[1.75] text-white/65">{stage.prevents}</p>
              </div>
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
        </div>
      </Container>
    </section>
  );
}
