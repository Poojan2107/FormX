"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { XRule } from "@/components/ui/XMotif";
import { cn } from "@/lib/cn";

export function ProjectJourney() {
  const [active, setActive] = useState(0);
  const stage = formxMethod.stages[active];

  return (
    <section
      id="before-issue"
      className="fx-grain scroll-mt-28 border-y border-black bg-[#0a0a09] py-20 text-white md:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-label text-[11px] text-x-red">{formxMethod.code}</p>
            <h2
              className="mt-5 font-display font-extrabold uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
            >
              Before
              <br />
              <span className="text-x-red">×</span> Issue
            </h2>
            <p className="mt-7 measure-studio text-[17px] leading-[1.8] text-white/55">
              {formxMethod.belief}
            </p>
            <XRule tone="dark" className="mt-8 max-w-sm" />
            <p className="mt-6 font-label text-[10px] text-white/35">
              {formxMethod.disciplines.join(" · ")}
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <ol className="border-t border-white/10">
              {formxMethod.stages.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex w-full items-baseline gap-5 border-b border-white/10 py-5 text-left transition-colors",
                      i === active ? "text-white" : "text-white/35 hover:text-white/70",
                    )}
                  >
                    <span
                      className={cn(
                        "w-8 font-display text-sm font-bold",
                        i === active ? "text-x-red" : "text-white/25",
                      )}
                    >
                      {i === active ? "×" : s.num}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-xl font-bold uppercase tracking-tight md:text-2xl">
                        {s.title}
                      </span>
                      <span className="mt-1 block font-body text-[15px] text-white/45">{s.verb}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-12 lg:gap-12">
          <div className="x-corner relative aspect-[16/10] overflow-hidden bg-[#141412] lg:col-span-7">
            <div className="absolute inset-5 md:inset-8">
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
          </div>
          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="font-label text-[10px] text-x-red">
              {stage.num} · {stage.title}
            </p>
            <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-snug tracking-tight md:text-3xl">
              {stage.decision}
            </h3>
            <p className="mt-5 text-[16px] leading-[1.8] text-white/55">{stage.why}</p>
            <p className="mt-8 border-l-2 border-x-red pl-4 text-[14px] leading-[1.7] text-white/45">
              Prevents: {stage.prevents}
            </p>
            <p className="mt-8 font-label text-[10px] text-white/30">{formxMethod.stamp}</p>
            <Link
              href="/projects/vapi-g2-industrial"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-label text-[11px] text-x-red hover:text-white"
            >
              Watch it hold on a real plant
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
