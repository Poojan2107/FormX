"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Layers,
  Building2,
  HardHat,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

type StructureType = "peb" | "rcc" | "hybrid";
type SlabType = "fm2" | "vdf" | "heavy";
type SeismicZone = "zone2" | "zone3" | "zone4";

export function StructuralEstimator() {
  // Input States
  const [areaSqFt, setAreaSqFt] = useState<number>(50000);
  const [clearHeight, setClearHeight] = useState<number>(10);
  const [craneCapacity, setCraneCapacity] = useState<number>(10); // in Tonnes
  const [structureType, setStructureType] = useState<StructureType>("peb");
  const [slabType, setSlabType] = useState<SlabType>("fm2");
  const [seismicZone, setSeismicZone] = useState<SeismicZone>("zone3");

  // Formula Calculations
  // Base PEB steel tonnage factor: approx 28kg to 45kg per sq.ft depending on height & crane
  let steelFactor = structureType === "peb" ? 32 : structureType === "hybrid" ? 42 : 18;
  if (clearHeight > 12) steelFactor += 4;
  if (craneCapacity > 0) steelFactor += craneCapacity * 0.8;
  if (seismicZone === "zone4") steelFactor += 3;

  const totalSteelTonnage = Math.round((areaSqFt * steelFactor) / 1000);
  const rccConcreteVolume = Math.round((areaSqFt * 0.18) / 35.315); // in Cu.M
  const slabThicknessMm = craneCapacity > 20 || slabType === "heavy" ? 225 : craneCapacity > 5 ? 200 : 175;
  const estimatedTimelineWeeks = Math.max(4, Math.round(areaSqFt / 15000) + (craneCapacity > 0 ? 2 : 0));

  const resetInputs = () => {
    setAreaSqFt(50000);
    setClearHeight(10);
    setCraneCapacity(10);
    setStructureType("peb");
    setSlabType("fm2");
    setSeismicZone("zone3");
  };

  return (
    <section className="border-y border-line bg-[#0d0d0d] py-16 text-white md:py-24">
      <Container>
        {/* Section Header */}
        <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Engineering Decision Tool
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl leading-[1.08]">
              Industrial Structural &amp; PEB Load Estimator
            </h2>
            <p className="mt-2.5 prose-measure text-[14px] leading-relaxed text-white/70">
              Calculate preliminary PEB steel tonnage, RCC foundation volume, FM2 floor slab thickness, and GFC drawing delivery timelines based on IS 800 &amp; IS 1893 codes.
            </p>
          </div>

          <button
            type="button"
            onClick={resetInputs}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 font-display text-[11px] font-extrabold uppercase tracking-wider text-white/80 transition-colors hover:border-x-red hover:bg-x-red hover:text-white"
          >
            <RotateCcw className="size-3.5" />
            <span>Reset Calculator</span>
          </button>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Form Controls Panel */}
          <Reveal className="formx-cut-x formx-edge formx-edge-x border border-white/15 bg-[#141414] p-6 md:p-8 lg:col-span-7">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-lg font-extrabold uppercase text-white flex items-center gap-2">
                <Calculator className="size-5 text-x-red" />
                Facility Engineering Parameters
              </h3>
              <span className="font-display text-[10px] font-bold text-x-red uppercase tracking-wider">
                IS Code Compliant
              </span>
            </div>

            <div className="space-y-6">
              {/* 01. Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-display text-[12px] font-extrabold uppercase tracking-wider text-white">
                    01. Built-Up Facility Area (Sq.Ft)
                  </label>
                  <span className="font-display text-base font-black text-x-red">
                    {areaSqFt.toLocaleString()} Sq.Ft
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={300000}
                  step={5000}
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-x-red"
                />
                <div className="flex justify-between text-[10px] font-medium text-white/40 mt-1">
                  <span>10,000 Sq.Ft (Shed)</span>
                  <span>150,000 Sq.Ft</span>
                  <span>300,000+ Sq.Ft (Mega Plant)</span>
                </div>
              </div>

              {/* 02. Clear Height & Crane Capacity Grid */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block font-display text-[11px] font-extrabold uppercase tracking-wider text-white mb-2">
                    02. Clear Eaves Height (Meters)
                  </label>
                  <select
                    value={clearHeight}
                    onChange={(e) => setClearHeight(Number(e.target.value))}
                    className="w-full border border-white/20 bg-black/60 p-3 font-display text-xs font-bold uppercase text-white focus:border-x-red focus:outline-none"
                  >
                    <option value={6}>6 Meters (Standard Warehouse)</option>
                    <option value={8}>8 Meters (Manufacturing Bay)</option>
                    <option value={10}>10 Meters (Heavy Crane Bay)</option>
                    <option value={12}>12 Meters (High Bay Storage)</option>
                    <option value={15}>15+ Meters (Process Plant)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-display text-[11px] font-extrabold uppercase tracking-wider text-white mb-2">
                    03. EOT Crane Loading Capacity
                  </label>
                  <select
                    value={craneCapacity}
                    onChange={(e) => setCraneCapacity(Number(e.target.value))}
                    className="w-full border border-white/20 bg-black/60 p-3 font-display text-xs font-bold uppercase text-white focus:border-x-red focus:outline-none"
                  >
                    <option value={0}>No Overhead Crane</option>
                    <option value={5}>5 Tonne EOT Crane</option>
                    <option value={10}>10 Tonne EOT Crane (Heavy Gantry)</option>
                    <option value={20}>20 Tonne Double Girder Crane</option>
                    <option value={35}>35+ Tonne Heavy Duty Crane</option>
                  </select>
                </div>
              </div>

              {/* 03. Structure Type Radio Selector */}
              <div>
                <label className="block font-display text-[11px] font-extrabold uppercase tracking-wider text-white mb-2.5">
                  04. Structural System Framing Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["peb", "PEB Steel Frame", "Wide Clear-Span PEB"],
                    ["rcc", "Heavy RCC Frame", "Monolithic Concrete"],
                    ["hybrid", "Hybrid Steel-RCC", "Mezzanine + PEB Shed"],
                  ].map(([key, label, desc]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setStructureType(key as StructureType)}
                      className={`formx-cut-sm flex flex-col p-3 text-left border transition-all ${
                        structureType === key
                          ? "border-x-red bg-x-red text-white shadow-lg"
                          : "border-white/15 bg-white/5 text-white/70 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      <span className="font-display text-[11px] font-extrabold uppercase">
                        {label}
                      </span>
                      <span className="mt-0.5 text-[9px] opacity-75">{desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 04. Floor Slab & Seismic Zone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block font-display text-[11px] font-extrabold uppercase tracking-wider text-white mb-2">
                    05. Industrial Floor Slab Specification
                  </label>
                  <select
                    value={slabType}
                    onChange={(e) => setSlabType(e.target.value as SlabType)}
                    className="w-full border border-white/20 bg-black/60 p-3 font-display text-xs font-bold uppercase text-white focus:border-x-red focus:outline-none"
                  >
                    <option value="fm2">FM2 Laser Screed Floor (High Flatness)</option>
                    <option value="vdf">VDF Hardened Flooring (Vacuum Dewatered)</option>
                    <option value="heavy">Heavy Duty Fiber Reinforced Concrete</option>
                  </select>
                </div>

                <div>
                  <label className="block font-display text-[11px] font-extrabold uppercase tracking-wider text-white mb-2">
                    06. IS 1893 Seismic Risk Zone
                  </label>
                  <select
                    value={seismicZone}
                    onChange={(e) => setSeismicZone(e.target.value as SeismicZone)}
                    className="w-full border border-white/20 bg-black/60 p-3 font-display text-xs font-bold uppercase text-white focus:border-x-red focus:outline-none"
                  >
                    <option value="zone2">Zone II (Low Seismic Hazard)</option>
                    <option value="zone3">Zone III (Moderate Hazard - Gujarat Hubs)</option>
                    <option value="zone4">Zone IV (High Seismic Hazard Zone)</option>
                  </select>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Estimated Output Dashboard */}
          <Reveal delay={0.08} className="formx-cut-x formx-edge formx-edge-x border border-x-red/40 bg-[#161616] p-6 md:p-8 lg:col-span-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-x-red">
                  STAAD.Pro Baseline Outputs
                </span>
                <h3 className="mt-0.5 font-display text-xl font-extrabold uppercase text-white">
                  Estimated Structural Tonnage
                </h3>
              </div>
              <FileSpreadsheet className="size-6 text-x-red" />
            </div>

            {/* Calculated Metric Cards */}
            <div className="space-y-4 mb-6">
              {/* Metric 1: Steel Tonnage */}
              <div className="border border-white/15 bg-black/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/60">
                    Est. PEB Structural Steel Weight
                  </span>
                  <span className="bg-x-red/20 px-2 py-0.5 font-display text-[9px] font-bold text-x-red uppercase">
                    IS 800 Code
                  </span>
                </div>
                <p className="mt-1 font-display text-3xl font-black text-white">
                  ~{totalSteelTonnage.toLocaleString()} <span className="text-sm font-bold text-x-red">Tonnes</span>
                </p>
                <p className="mt-0.5 text-[10px] text-white/40">
                  Approx. {steelFactor} kg/sq.ft steel density incl. gantry &amp; roof purlins
                </p>
              </div>

              {/* Metric 2: RCC Concrete Volume */}
              <div className="border border-white/15 bg-black/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/60">
                    Est. RCC Foundation &amp; Pedestal Concrete
                  </span>
                  <span className="bg-white/10 px-2 py-0.5 font-display text-[9px] font-bold text-white/70 uppercase">
                    IS 456 Code
                  </span>
                </div>
                <p className="mt-1 font-display text-2xl font-black text-white">
                  ~{rccConcreteVolume.toLocaleString()} <span className="text-sm font-bold text-x-red">Cu.Meters</span>
                </p>
              </div>

              {/* Metric 3: Slab Thickness & Delivery Timeline */}
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-white/15 bg-black/60 p-3.5">
                  <span className="font-display text-[9px] font-bold uppercase tracking-wider text-white/50">
                    Slab Thickness
                  </span>
                  <p className="mt-1 font-display text-xl font-bold text-white">
                    {slabThicknessMm} mm
                  </p>
                  <p className="text-[9px] text-x-red font-semibold">{slabType.toUpperCase()} Grade</p>
                </div>

                <div className="border border-white/15 bg-black/60 p-3.5">
                  <span className="font-display text-[9px] font-bold uppercase tracking-wider text-white/50">
                    GFC Package Lead
                  </span>
                  <p className="mt-1 font-display text-xl font-bold text-white">
                    {estimatedTimelineWeeks} Weeks
                  </p>
                  <p className="text-[9px] text-white/50">Full 10 Disciplines</p>
                </div>
              </div>
            </div>

            {/* Compliance Guarantee List */}
            <div className="mb-6 border-t border-white/10 pt-4">
              <p className="mb-2 font-display text-[10px] font-extrabold uppercase tracking-wider text-x-red">
                FORMX Engineering Guarantee:
              </p>
              <ul className="space-y-1.5 text-[11px] text-white/75">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-x-red shrink-0" />
                  <span>3D BIM Zero-Clash Coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-x-red shrink-0" />
                  <span>Seismic Zone Safety Audit &amp; STAAD Validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-x-red shrink-0" />
                  <span>Tender-Ready Bill of Quantities (BOQ)</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              href={`/contact?area=${areaSqFt}&crane=${craneCapacity}&type=${structureType}`}
              className="formx-cut-sm group flex w-full items-center justify-center gap-2 bg-x-red py-4 text-center font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-white shadow-lg transition-all hover:bg-x-red-hover"
            >
              <span>Request Verified STAAD.Pro Calculation</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
