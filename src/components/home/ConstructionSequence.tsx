"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

/**
 * Signature FORMX experience — physical building construction sequence.
 * Foundation → Columns → Structure → Utilities → Envelope → Finished Facility
 */
const stages = [
  {
    id: "foundation",
    step: "01",
    title: "Foundation",
    subtitle: "Ground that carries the facility",
    engineering:
      "Soil bearing, pile or raft selection, equipment isolation pads and storm drainage outfalls are fixed before the first column is cast. FORMX issues foundation GAs and load schedules that contractors can excavate against.",
    owns: [
      "Soil & bearing capacity interpretation",
      "Foundation GA & reinforcement detailing",
      "Equipment pedestal & isolation strategy",
      "Site grading interface with civil works",
    ],
    code: "IS 1892 · IS 456 · IS 2911",
    asset: "services/infrastructure.jpg",
  },
  {
    id: "columns",
    step: "02",
    title: "Columns",
    subtitle: "Vertical load path established",
    engineering:
      "Column grids are set for crane loads, process clearances and future expansion. Reinforcement cages, splice levels and PEB base plates are coordinated so erection sequence matches the structural model.",
    owns: [
      "Column grid & sizing for industrial loads",
      "RCC / steel interface at base plates",
      "Erection sequencing notes",
      "Seismic detailing at critical splices",
    ],
    code: "IS 456 · IS 800 · IS 1893",
    asset: "services/structural.jpg",
  },
  {
    id: "structure",
    step: "03",
    title: "Structure",
    subtitle: "Frame, floors and roofs",
    engineering:
      "Beams, slabs, portal frames and roof systems close the primary structure. STAAD / ETABS models are reconciled with architectural clear heights and utility service zones before steel is ordered or formwork starts.",
    owns: [
      "RCC & PEB frame analysis",
      "Floor / roof framing GFC",
      "Crane gantry & heavy load paths",
      "Deflection & vibration checks",
    ],
    code: "IS 800 · IS 875 · IS 1893",
    asset: "insights/column-splice.jpg",
  },
  {
    id: "utilities",
    step: "04",
    title: "Utilities",
    subtitle: "Power, HVAC, fire, process",
    engineering:
      "Electrical SLDs, HVAC trunks, process piping and fire hydrant / sprinkler networks occupy reserved corridors. Clash detection happens against the structural frame—not after ducts are hung.",
    owns: [
      "HT/LT routing & transformer rooms",
      "HVAC duct & chilled water matrix",
      "Hydrant, pump & sprinkler coverage",
      "Utility corridor coordination",
    ],
    code: "IS 732 · NBC Part 4 · IS 2190",
    asset: "services/mep.jpg",
  },
  {
    id: "envelope",
    step: "05",
    title: "Envelope",
    subtitle: "Skin, openings, weather",
    engineering:
      "Facade, roofing, cladding and openings close the building physically. Waterproofing details, expansion joints and industrial door / dock interfaces are drawn for buildability—not only for elevation drawings.",
    owns: [
      "Roof & wall cladding detailing",
      "Expansion & weatherproofing junctions",
      "Dock, door & canopy interfaces",
      "Architectural–structural edge conditions",
    ],
    code: "NBC · Manufacturer systems",
    asset: "services/architecture.jpg",
  },
  {
    id: "finished",
    step: "06",
    title: "Finished Facility",
    subtitle: "Commissioning-ready asset",
    engineering:
      "As-built updates, safety certificates and remaining RFIs close the loop. The completed facility should match the coordinated GFC package—with FORMX available for final verification walks.",
    owns: [
      "As-built drawing updates",
      "Shop drawing clearance trail",
      "Structural safety documentation",
      "Handover coordination support",
    ],
    code: "As-built · Handover",
    asset: "projects/pdf_p1_1.jpeg",
  },
];

export function ConstructionSequence() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stageRefs = useRef<(HTMLElement | null)[]>([]);
  const current = stages[activeIdx];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stageRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i);
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToStage = (i: number) => {
    stageRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative border-y border-white/10 bg-[#050505] text-white">
      {/* Sticky identity header */}
      <div className="border-b border-white/10 bg-[#050505]/95 backdrop-blur-md sticky top-[4.5rem] z-20">
        <Container className="py-5 md:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.28em] text-x-red">
                Signature experience
              </p>
              <h2 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl lg:text-4xl">
                The Building Construction Sequence
              </h2>
              <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/55">
                How a FORMX facility rises—from foundation to finished plant—and what our engineers own at each stage.
              </p>
            </div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
              Stage {current.step} / 06 · {current.title}
            </p>
          </div>

          {/* Stage rail */}
          <div className="mt-5 flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
            {stages.map((stage, i) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => scrollToStage(i)}
                className={cn(
                  "shrink-0 border px-3 py-2 font-display text-[10px] font-extrabold uppercase tracking-wider transition-colors md:px-4",
                  i === activeIdx
                    ? "border-x-red bg-x-red text-white"
                    : "border-white/15 bg-transparent text-white/50 hover:border-white/40 hover:text-white",
                )}
              >
                <span className="mr-1.5 text-white/60">{stage.step}</span>
                {stage.title}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Vertical narrative stages */}
      <div className="relative">
        {stages.map((stage, i) => (
          <article
            key={stage.id}
            ref={(el) => {
              stageRefs.current[i] = el;
            }}
            className="border-b border-white/10 last:border-b-0"
          >
            <Container className="py-16 md:py-24">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
                <Reveal className="relative lg:col-span-6">
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#111] lg:aspect-[4/3]">
                    <AssetImage
                      alt={stage.title}
                      slot={stage.asset}
                      kind="facility"
                      fit="cover"
                      aspect="auto"
                      tone="dark"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Engineering stamp overlay */}
                    <div className="absolute left-4 top-4 border border-x-red/60 bg-black/70 px-3 py-2 backdrop-blur-sm">
                      <p className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-x-red">
                        Stage {stage.step}
                      </p>
                      <p className="mt-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-white/80">
                        {stage.code}
                      </p>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p
                        className="font-display font-black uppercase leading-none tracking-tight text-white/15"
                        style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
                      >
                        {stage.title}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.06} className="lg:col-span-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                        {stage.subtitle}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl lg:text-5xl">
                        {stage.title}
                      </h3>
                      <p className="mt-5 text-[15px] leading-[1.9] text-white/70">
                        {stage.engineering}
                      </p>

                      <div className="mt-8 border-t border-white/15 pt-6">
                        <p className="mb-4 font-display text-[10px] font-extrabold uppercase tracking-[0.22em] text-x-red">
                          What FORMX owns at this stage
                        </p>
                        <ul className="space-y-3">
                          {stage.owns.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-[13px] font-medium text-white/85"
                            >
                              <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </Reveal>
              </div>
            </Container>
          </article>
        ))}
      </div>
    </section>
  );
}
