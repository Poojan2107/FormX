"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

/** Capability mosaic — no unverified vanity metrics until real data lands */
const cells: {
  kind: "red" | "stripe" | "cap";
  title?: string;
  hint?: string;
  dark?: boolean;
}[] = [
  { kind: "red" },
  { kind: "cap", title: "Single window", hint: "Architecture · Structure · MEPF", dark: true },
  { kind: "cap", title: "Partner-led", hint: "Senior ownership on mandates" },
  { kind: "stripe" },
  { kind: "cap", title: "Model-led", hint: "Clash-checked coordination", dark: true },
  { kind: "cap", title: "Site support", hint: "Clarity through construction" },
  { kind: "cap", title: "Process-first", hint: "Layouts that honour flow", dark: true },
  { kind: "stripe" },
  { kind: "cap", title: "Buildable packs", hint: "Tender & GFC readiness" },
  { kind: "red" },
  { kind: "cap", title: "India focus", hint: "Industrial & infrastructure", dark: true },
  { kind: "cap", title: "One truth", hint: "Shared geometric model" },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-white section-y">
      <Container>
        <Reveal>
          <div className="mb-8 max-w-2xl">
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ink md:text-3xl">
              How FormX delivers
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Capabilities over vanity metrics — verified numbers land with real project data.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
          {cells.map((cell, i) => (
            <Reveal key={i} delay={0.02 * i}>
              <Cell cell={cell} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Cell({
  cell,
}: {
  cell: (typeof cells)[number];
}) {
  if (cell.kind === "red") {
    return (
      <div className="group relative aspect-[2/1] bg-x-red transition-transform duration-300 hover:scale-[1.01] sm:aspect-square">
        <span className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-black/20 transition-colors group-hover:text-black/35">
          X
        </span>
      </div>
    );
  }

  if (cell.kind === "stripe") {
    return <div className="aspect-[2/1] bg-black pattern-stripe sm:aspect-square" />;
  }

  return (
    <div
      className={cn(
        "group flex min-h-[100px] flex-col justify-end p-4 transition-colors sm:aspect-square sm:min-h-0 sm:p-3",
        cell.dark ? "bg-black text-white" : "bg-white text-ink",
      )}
    >
      <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
        {cell.title}
      </p>
      <p
        className={cn(
          "mt-1.5 text-[12px] leading-snug break-words sm:text-[11px]",
          cell.dark ? "text-white/55" : "text-ink-muted",
        )}
      >
        {cell.hint}
      </p>
    </div>
  );
}
