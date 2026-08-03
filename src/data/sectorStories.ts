/** What makes each sector's engineering uniquely demanding */

export const sectorUniqueness: Record<
  string,
  { uniqueness: string; differentiator: string; systems: string[] }
> = {
  "renewable-energy": {
    uniqueness:
      "Renewable manufacturing must absorb phased capacity growth without shutting running lines—grids, corridors and structural spans have to anticipate the next expansion bay from day one.",
    differentiator:
      "Unlike a standard warehouse, power density, process zoning and structural crane / equipment loads dominate early decisions.",
    systems: [
      "Phased campus master planning",
      "Heavy industrial structural frames",
      "HT/LT distribution for power-dense plants",
      "Site roads, drainage and utility trunks",
    ],
  },
  "solar-cell": {
    uniqueness:
      "Solar cell and module lines require clean / critical zone separation, dense utility and power distribution, and fire strategies tuned to manufacturing risk—not generic industrial fire coverage.",
    differentiator:
      "Process cleanliness and utility intensity separate this sector from ordinary PEB sheds.",
    systems: [
      "Critical area architectural zoning",
      "Process & utility piping coordination",
      "Electrical GA, SLD & cable routing",
      "Hydrant, sprinkler & detection coordination",
    ],
  },
  battery: {
    uniqueness:
      "Battery facilities combine hazardous process risk, high electrical loads and stringent fire / life-safety zoning. Layout mistakes here become safety and insurance problems.",
    differentiator:
      "Fire engineering and electrical routing must lead—not follow—architectural planning.",
    systems: [
      "Hazard-aware architectural zoning",
      "Fire pump, hydrant & suppression coverage",
      "Power distribution for process intensity",
      "Mechanical utility corridors",
    ],
  },
  "food-processing": {
    uniqueness:
      "Food plants are driven by hygiene zoning, cold chain, washdown durability and process flow—finishes and drainage details matter as much as structure.",
    differentiator:
      "Unlike dry industrial sheds, food facilities fail on hygiene interfaces and utility contamination paths.",
    systems: [
      "Hygiene zoning & process flow layouts",
      "Cold room / refrigeration coordination",
      "Washdown-tolerant civil & drainage",
      "Steam, water and effluent utilities",
    ],
  },
  semiconductor: {
    uniqueness:
      "Semiconductor and pharma-adjacent environments demand cleanroom HVAC zoning, vibration-sensitive structure and utility purity that ordinary industrial design does not address.",
    differentiator:
      "Air classification and vibration control reshape structural and MEP decisions early.",
    systems: [
      "Cleanroom architectural envelopes",
      "HVAC zoning & pressure cascades",
      "Vibration-aware structural design",
      "Ultra-clean utility coordination",
    ],
  },
  "data-center": {
    uniqueness:
      "Data centers are power and cooling machines first—architectural form follows electrical and mechanical redundancy, not the reverse.",
    differentiator:
      "Uptime topology (N+1 / 2N) drives layout more than façade or office planning.",
    systems: [
      "Electrical SLD & UPS / generator topology",
      "Precision cooling & containment",
      "Fire detection for high-value halls",
      "Structural floors for equipment density",
    ],
  },
  "industrial-park": {
    uniqueness:
      "Industrial parks must coordinate multiple plots, shared infrastructure and phased tenants—site networks and structural typologies vary plot by plot under one master plan.",
    differentiator:
      "External development and corridor logic matter as much as individual building GFC.",
    systems: [
      "Campus master planning",
      "Shared roads, drainage & utilities",
      "Plot-wise structural typologies",
      "Phased tender packages",
    ],
  },
  "wind-blade": {
    uniqueness:
      "Wind blade and heavy engineering halls need extreme clear spans, crane capacity and process length—standard portal frames often fall short.",
    differentiator:
      "Span, crane class and floor flatness dominate over typical warehouse metrics.",
    systems: [
      "Long-span PEB / steel frames",
      "EOT crane gantry engineering",
      "Heavy machine foundations",
      "High-bay ventilation & power",
    ],
  },
  "solar-glass": {
    uniqueness:
      "Solar glass and chemical-adjacent process plants combine corrosive environments, pipe racks and hazardous zoning that reshape materials and fire strategy.",
    differentiator:
      "Corrosion, effluent and hazard separation set this apart from dry logistics buildings.",
    systems: [
      "Process hazard zoning",
      "Pipe rack & utility structures",
      "Corrosion-aware detailing",
      "Fire & effluent coordination",
    ],
  },
  "ev-electronics": {
    uniqueness:
      "EV and electronics assembly balance clean production zones, logistics flow and dense electrical loads—layout must serve both process and warehouse-scale movement.",
    differentiator:
      "Assembly logistics and power quality requirements exceed typical light-industrial briefs.",
    systems: [
      "Production & logistics zoning",
      "Electrical distribution for assembly",
      "Fire protection for electronics risk",
      "Structural grids for process lines",
    ],
  },
};

export function getSectorUniqueness(slug: string) {
  return (
    sectorUniqueness[slug] ?? {
      uniqueness:
        "This sector brings operational, code and utility constraints that generic industrial templates do not resolve. FORMX sizes architecture, structure and MEP to those constraints first.",
      differentiator:
        "Engineering decisions follow the process—not a reused shed typology.",
      systems: [
        "Sector-tuned architectural zoning",
        "Structural systems for process loads",
        "MEP & fire coordinated early",
        "Site infrastructure for operations",
      ],
    }
  );
}
