"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { cn } from "@/lib/cn";

/**
 * V3 signature: how projects move — documentary, not a feature widget.
 * Quality gate: if this still reads as a template component, remove from Home.
 * Public IA: Architecture · Structure · Infrastructure only (no MEP stage).
 */
const stages = [
  {
    id: "01",
    title: "Read the site",
    decision: "What will this plot allow — and what will it fight?",
    why: "Levels, access, soil and drainage decide foundations and docks before any elevation is drawn. Wrong assumptions here become expensive concrete later.",
    prevents: "Pads that flood, docks that miss road levels, foundations redesigned mid-tender.",
    disciplines: "Infrastructure · Structure",
    slot: "projects/pdf_p4_1.jpeg",
    caption: "Site conditions drive every later engineering decision",
  },
  {
    id: "02",
    title: "Plan the facility",
    decision: "How should people, materials and process actually move?",
    why: "Architecture at FORMX starts with operations — zoning, clear heights, expansion — then resolves setbacks and grids so Structure and Infrastructure have something buildable to lock to.",
    prevents: "Pretty plans that force structural rework and utility clashes after GFC.",
    disciplines: "Architecture · Structure",
    slot: "projects/brochure/brochure_p1_1.png",
    caption: "Planning that anticipates construction — not presentation alone",
  },
  {
    id: "03",
    title: "Carry every load",
    decision: "How does every force travel safely into the ground?",
    why: "Structure sizes for real industrial loads — cranes, machines, wind, seismic — and details connections so fabrication and cages can be erected without guesswork.",
    prevents: "Ambiguous bar schedules, PEB/RCC interface surprises, value engineering that erases safety.",
    disciplines: "Structure",
    slot: "projects/brochure/brochure_p7_1.png",
    caption: "Frames, connections and foundations as one load path",
  },
  {
    id: "04",
    title: "Make the site work daily",
    decision: "How will the industrial site operate after handover?",
    why: "Roads, grading, stormwater and external utilities are invisible after construction — and critical every day. Infrastructure is coordinated with building footprints and future expansion.",
    prevents: "Flooded yards, truck conflicts, utility ownership fights at the plot edge.",
    disciplines: "Infrastructure · Architecture",
    slot: "projects/box-culvert-infrastructure.jpg",
    caption: "Site systems clients rarely see — until they fail",
  },
  {
    id: "05",
    title: "Issue what can be built",
    decision: "What must be closed before drawings leave the studio?",
    why: "Architecture, Structure and Infrastructure answer as one practice. Packages leave with clear scopes, interfaces and details contractors can price and build.",
    prevents: "Site RFIs that restart design after fabrication has begun.",
    disciplines: "Architecture · Structure · Infrastructure",
    slot: "projects/brochure/brochure_p1_2.png",
    caption: "Construction-ready thinking — not sheet volume",
  },
  {
    id: "06",
    title: "Stand with execution",
    decision: "Does the built facility still match the intent?",
    why: "Quantity support, clarifications and coordination continue until the facility matches what was coordinated — not until the drawing set was emailed.",
    prevents: "Silent gaps between design issue and occupied plant.",
    disciplines: "Practice · Site support",
    slot: "projects/brochure/brochure_p3_2.png",
    caption: "Completed work is the only proof that matters",
  },
];

export function ProjectJourney() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section className="border-y border-line bg-[#0a0a0a] py-20 text-white md:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            How projects move
          </p>
          <h2
            className="mt-3 font-display font-black uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            From plot to operating facility — one coordinated practice
          </h2>
          <p className="mt-5 text-[15px] leading-[1.85] text-white/60">
            Industrial projects become expensive when Architecture, Structure and Infrastructure
            start coordinating after drawings are already issued. FORMX treats the facility as one
            system that evolves — so construction uncertainty is removed early, not negotiated on
            site.
          </p>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
          {stages.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 border px-4 py-2.5 text-left transition-colors",
                i === active
                  ? "border-x-red bg-x-red text-white"
                  : "border-white/15 bg-transparent text-white/55 hover:border-white/35 hover:text-white",
              )}
            >
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em]">
                {s.id}
              </span>
              <span className="mt-0.5 block font-display text-[12px] font-extrabold uppercase tracking-tight">
                {s.title}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
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
              Stage {stage.id} · Decision
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-snug tracking-tight md:text-3xl">
              {stage.decision}
            </h3>
            <p className="mt-5 text-[15px] leading-[1.85] text-white/65">{stage.why}</p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                What this stage prevents
              </p>
              <p className="mt-2 text-[14px] leading-[1.75] text-white/70">{stage.prevents}</p>
            </div>

            <div className="mt-6">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                Disciplines in the room
              </p>
              <p className="mt-2 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white/80">
                {stage.disciplines}
              </p>
            </div>

            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="mt-10 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-colors hover:text-white"
            >
              How the practice thinks
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
