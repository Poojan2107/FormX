"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Shield, Layers, FileText, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const sectorsList = [
  { id: "renewable", label: "Renewable & Solar Cell", codes: ["IS 1893 Seismic Zone III/IV", "High Utility Ductile Detailing"] },
  { id: "peb", label: "PEB Industrial & Warehouse", codes: ["IS 800 Steel Design Code", "Heavy Industrial Flooring (SFRC)"] },
  { id: "commercial", label: "Corporate HQ & High-Rise", codes: ["IS 13920 Ductile Detailing", "Wind Tunnel Boundary Layer Analysis"] },
  { id: "datacenter", label: "Data Center & High-Tech", codes: ["Tier III Critical Utility Routing", "Vibration Isolation Substructure"] },
];

const areaRanges = [
  { id: "small", label: "< 50,000 sq. ft.", duration: "2 - 3 Weeks GFC" },
  { id: "mid", label: "50,000 - 200,000 sq. ft.", duration: "4 - 6 Weeks GFC" },
  { id: "large", label: "200,000+ sq. ft.", duration: "Phased Greenfield Delivery" },
];

export function ScopeEstimator() {
  const [selectedSector, setSelectedSector] = useState(sectorsList[0]);
  const [selectedArea, setSelectedArea] = useState(areaRanges[1]);
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    "Architecture",
    "Structural RCC & Steel",
    "MEP Utility",
  ]);

  const toggleDiscipline = (disc: string) => {
    if (selectedDisciplines.includes(disc)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter((d) => d !== disc));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, disc]);
    }
  };

  return (
    <section className="scroll-mt-32 bg-[#0c0c0c] text-white py-16 md:py-24 border-y border-white/10 relative overflow-hidden">
      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-35" aria-hidden />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Interactive Tool"
            title="Configure Your Facility Scope & Engineering Package"
            description="Select your sector, facility footprint, and required disciplines to preview FormX's recommended IS Code compliance standards."
            invert
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* Step Controls */}
          <Reveal className="space-y-8">
            {/* Step 1: Sector */}
            <div>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                Step 01 — Select Facility Sector
              </span>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {sectorsList.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setSelectedSector(sec)}
                    className={`flex items-center justify-between border p-4 text-left font-display text-sm font-bold uppercase transition-all ${
                      selectedSector.id === sec.id
                        ? "border-x-red bg-x-red/15 text-white shadow-[0_4px_16px_rgba(222,48,36,0.25)]"
                        : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span>{sec.label}</span>
                    {selectedSector.id === sec.id && <Check className="size-4 text-x-red" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Footprint Area */}
            <div>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                Step 02 — Built-up Footprint Area
              </span>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {areaRanges.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    className={`border p-3.5 text-center font-display text-xs font-bold uppercase transition-all ${
                      selectedArea.id === area.id
                        ? "border-x-red bg-x-red/15 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {area.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Disciplines */}
            <div>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                Step 03 — Required Engineering Disciplines
              </span>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {[
                  "Architecture",
                  "Structural RCC & Steel",
                  "MEP Utility",
                  "Civil Infrastructure",
                  "Project Management",
                ].map((disc) => {
                  const active = selectedDisciplines.includes(disc);
                  return (
                    <button
                      key={disc}
                      type="button"
                      onClick={() => toggleDiscipline(disc)}
                      className={`inline-flex items-center gap-2 border px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                        active
                          ? "border-x-red bg-x-red text-white"
                          : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {active && <Check className="size-3.5" />}
                      {disc}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Result Box */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between border border-x-red/40 bg-white/[0.03] p-6 md:p-8 relative">
              <div className="absolute top-0 right-0 h-1 w-24 bg-x-red" />
              <div>
                <span className="inline-block border border-x-red/40 bg-x-red/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                  Recommended Package
                </span>

                <h4 className="mt-4 font-display text-xl font-bold uppercase text-white">
                  {selectedSector.label} Package
                </h4>
                <p className="mt-1 text-[13px] text-white/60">
                  Estimated GFC Delivery: <strong className="text-white">{selectedArea.duration}</strong>
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-4">
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Applicable Engineering Codes:
                  </p>
                  {selectedSector.codes.map((code) => (
                    <div key={code} className="flex items-center gap-2 text-[13px] text-white/80">
                      <Shield className="size-4 text-x-red shrink-0" />
                      <span>{code}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Selected Scope:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDisciplines.map((d) => (
                      <span key={d} className="border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <a
                  href={`/contact?sector=${encodeURIComponent(selectedSector.label)}&scope=${encodeURIComponent(selectedDisciplines.join(", "))}`}
                  className="inline-flex w-full items-center justify-center gap-2 border border-x-red bg-x-red px-6 py-4 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_25px_rgba(222,48,36,0.35)] transition-all hover:bg-white hover:text-ink"
                >
                  Book Technical Consultation
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
