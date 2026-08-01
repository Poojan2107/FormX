"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

const stages = [
  {
    step: "01",
    phase: "Site & Soil Survey",
    title: "Topographic Analysis & Civil Grading",
    description:
      "Site contour mapping, soil bearing capacity evaluation, and storm water runoff drainage design. Establishes the physical baseline before structural grid alignment.",
    icon: Compass,
    deliverables: ["Soil Test & Load Capacity Report", "Topographic Contour Vector Map", "Site Grading & Drainage Plan"],
    code: "IS 1892 & IS 1498",
    asset: "services/infrastructure.jpg",
    metric: "100% Topographic Accuracy",
  },
  {
    step: "02",
    phase: "Architectural Masterplan",
    title: "Operational Zoning & NBC Code Compliance",
    description:
      "Planning facility layouts optimized for manufacturing workflow, material logistics, emergency egress, and National Building Code (NBC) setback compliance.",
    icon: Building2,
    deliverables: ["Master Spatial Zoning Layout", "Statutory Approval Drawing Package", "NBC Egress & Fire Corridor Plan"],
    code: "National Building Code (NBC 2016)",
    asset: "services/architecture.jpg",
    metric: "Zero Workflow Bottlenecks",
  },
  {
    step: "03",
    phase: "Structural RCC & Steel Frame",
    title: "STAAD.Pro & ETABS Heavy Load Engineering",
    description:
      "Engineering RCC moment frames, wide-span PEB tapered portal frames, EOT crane gantry beams, and heavy machinery isolation foundations.",
    icon: Layers,
    deliverables: ["STAAD.Pro 3D Calculation Sheet", "PEB Steel Structural Framing GFC", "Foundation Equipment Isolation GA"],
    code: "IS 456, IS 800 & IS 1893 Seismic",
    asset: "services/structural.jpg",
    metric: "Seismic Zone III/IV Safe",
  },
  {
    step: "04",
    phase: "MEP & Utility Routing",
    title: "3D BIM Clash-Free Utility Trunking",
    description:
      "Integrating mechanical piping, HVAC cleanroom ductwork, single-line electrical transformer distribution, and high-pressure fire suppression networks.",
    icon: Cpu,
    deliverables: ["Electrical Transformer Single Line Diagram (SLD)", "HVAC Chilled Water Duct Matrix", "Fire Hydrant & Sprinkler Routing GA"],
    code: "IS 732 & NBC Fire Code Part 4",
    asset: "services/mep.jpg",
    metric: "Zero On-Site Rework",
  },
  {
    step: "05",
    phase: "GFC & Code Certification",
    title: "100% Construction-Ready Drawing Issue",
    description:
      "Consolidating all 10 engineering disciplines into coordinated, zero-clash Good-For-Construction (GFC) packages with bill of quantities (BOQ).",
    icon: ShieldCheck,
    deliverables: ["Coordinated Multidisciplinary GFC Drawings", "Comprehensive Tender Bill of Quantities (BOQ)", "Statutory Code Compliance Dossier"],
    code: "Zero-Clash BIM Standard",
    asset: "services/pmc.jpg",
    metric: "Tender Ready Deliverables",
  },
  {
    step: "06",
    phase: "Executed Industrial Facility",
    title: "Turnkey Plant Commissioning Support",
    description:
      "Continuous site engineering support, technical shop drawing reviews, and quality verification ensuring completed facility matches design intent.",
    icon: CheckCircle2,
    deliverables: ["As-Built Engineering Drawings", "Structural Safety Certificate", "Facility Handover Documentation"],
    code: "100% Buildability Guarantee",
    asset: "projects/pdf_p1_1.jpeg",
    metric: "25+ Facilities Commissioned",
  },
];

export function ConstructionSequence() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = stages[activeIdx];

  return (
    <section className="border-y border-line bg-[#0a0a0a] py-16 text-white md:py-24">
      <Container>
        {/* Header */}
        <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Signature Engineering Experience
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl leading-[1.08]">
              The Building Construction Sequence
            </h2>
            <p className="mt-2.5 prose-measure text-[14px] leading-relaxed text-white/70">
              How FORMX transforms raw land into a 100% executed, code-compliant industrial facility through a 6-stage coordinated workflow.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/80 shrink-0">
            <span>Stage {current.step} of 06</span>
            <span className="text-x-red">•</span>
            <span className="text-x-red">{current.phase}</span>
          </div>
        </Reveal>

        {/* Interactive Milestone Tabs Rail */}
        <Reveal className="mb-8 overflow-x-auto scrollbar-hide pb-2">
          <div className="flex items-center gap-2 min-w-max">
            {stages.map((stage, i) => {
              const isActive = i === activeIdx;
              const Icon = stage.icon;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    "flex items-center gap-3 border px-4 py-3 font-display text-[11px] font-extrabold uppercase tracking-wider transition-all duration-200",
                    isActive
                      ? "border-x-red bg-x-red text-white shadow-[0_4px_20px_rgba(222,48,36,0.4)]"
                      : "border-white/10 bg-white/[0.04] text-white/60 hover:border-white/30 hover:text-white",
                  )}
                >
                  <span className={cn("text-xs", isActive ? "text-white" : "text-x-red")}>
                    {stage.step}
                  </span>
                  <Icon className="size-3.5" />
                  <span>{stage.phase}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Stage Content Panel Stage */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center overflow-hidden border border-white/15 bg-[#121212] p-6 md:p-10 shadow-2xl formx-cut-x formx-edge formx-edge-x">
          {/* Left Media Preview Panel */}
          <Reveal className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#080808] lg:col-span-6 lg:aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <AssetImage
                  alt={current.title}
                  slot={current.asset}
                  kind="facility"
                  aspect="auto"
                  fit="cover"
                  tone="dark"
                  priority
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
              <span className="bg-x-red px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md">
                MILESTONE {current.step}
              </span>
              <span className="bg-black/70 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-md">
                {current.code}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10 border border-white/15 bg-black/80 p-3.5 backdrop-blur-md">
              <p className="font-display text-[9px] font-bold uppercase tracking-widest text-x-red">
                Key Performance Metric
              </p>
              <p className="mt-0.5 font-display text-sm font-extrabold text-white">
                {current.metric}
              </p>
            </div>
          </Reveal>

          {/* Right Stage Narrative & Deliverables */}
          <Reveal delay={0.08} className="flex flex-col justify-between lg:col-span-6">
            <div>
              <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                Stage {current.step} Workflow
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl lg:text-4xl leading-tight">
                {current.title}
              </h3>
              <p className="mt-4 prose-measure text-[14px] leading-[1.8] text-white/75">
                {current.description}
              </p>

              {/* GFC Deliverables List */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-x-red">
                  Stage Output &amp; Deliverables:
                </p>
                <ul className="space-y-2.5">
                  {current.deliverables.map((item, idx) => (
                    <li key={item} className="flex items-center gap-3 text-[13px] font-medium text-white/90">
                      <span className="flex size-5 items-center justify-center bg-x-red/20 font-display text-[10px] font-bold text-x-red">
                        0{idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Next Stage Navigation Button */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={() => setActiveIdx((i) => (i + 1) % stages.length)}
                className="group inline-flex items-center gap-2 font-display text-[11px] font-extrabold uppercase tracking-[0.16em] text-x-red transition-all hover:text-white"
              >
                <span>Advance to Stage 0{((activeIdx + 1) % stages.length) + 1}</span>
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-xs text-white/40">
                Click tabs above to inspect any stage
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
