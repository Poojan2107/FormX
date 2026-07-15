"use client";

import { stats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Cell =
  | { kind: "stat"; index: number }
  | { kind: "red" }
  | { kind: "stripe" }
  | { kind: "photo"; label: string; caption: string };

const mosaic: Cell[] = [
  { kind: "red" },
  { kind: "photo", label: "Site walkthrough", caption: "Coordination reviews" },
  { kind: "stat", index: 0 },
  { kind: "photo", label: "Design studio", caption: "Multidisciplinary desk" },
  { kind: "stat", index: 1 },
  { kind: "stripe" },
  { kind: "stripe" },
  { kind: "stat", index: 2 },
  { kind: "photo", label: "Plant model", caption: "Structure + utilities" },
  { kind: "stat", index: 3 },
  { kind: "photo", label: "Project board", caption: "Milestone tracking" },
  { kind: "red" },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-white py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="mb-8 max-w-2xl font-display text-2xl font-bold uppercase tracking-[-0.03em] text-ink md:text-3xl">
            Proof in delivery
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {mosaic.map((cell, i) => (
            <Reveal key={i} delay={0.02 * i}>
              <MosaicCell cell={cell} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MosaicCell({ cell }: { cell: Cell }) {
  if (cell.kind === "red") {
    return (
      <div className="group relative aspect-square bg-x-red transition-transform duration-300 hover:scale-[1.01]">
        <span className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-black/20 transition-colors group-hover:text-black/35">
          X
        </span>
      </div>
    );
  }

  if (cell.kind === "stripe") {
    return (
      <div className="aspect-square bg-black pattern-stripe transition-opacity hover:opacity-90" />
    );
  }

  if (cell.kind === "photo") {
    return (
      <div className="group relative aspect-square overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 pattern-grid-dark opacity-80" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            background:
              "linear-gradient(135deg, #333 0%, #111 50%, #2a2a2a 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-3 transition-transform duration-300 group-hover:-translate-y-0.5">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
            {cell.label}
          </p>
          <p className="mt-1 text-[11px] text-white/70">{cell.caption}</p>
        </div>
        <div className="absolute inset-0 border border-transparent transition-colors group-hover:border-x-red/50" />
      </div>
    );
  }

  const stat = stats[cell.index];
  return (
    <div
      className={cn(
        "group flex aspect-square flex-col items-center justify-center bg-x-red p-3 text-center transition-transform duration-300 hover:scale-[1.02]",
      )}
    >
      <p className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
        <Counter
          value={stat.value}
          suffix={stat.suffix}
          decimals={Number.isInteger(stat.value) ? 0 : 1}
        />
      </p>
      <p className="mt-2 font-display text-[9px] font-bold uppercase tracking-[0.14em] text-white/85 md:text-[10px]">
        {stat.label}
      </p>
    </div>
  );
}
