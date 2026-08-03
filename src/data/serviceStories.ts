import type { Service } from "@/data/services";

export type DisciplineFamily =
  | "architecture"
  | "structure"
  | "fire"
  | "electrical"
  | "mechanical"
  | "infrastructure"
  | "delivery";

export type ServiceStory = {
  family: DisciplineFamily;
  motif: string;
  lead: string;
  thinking: string[];
  artifacts: string[];
  siteReality: string;
};

const familyBySlug: Record<string, DisciplineFamily> = {
  "architectural-design": "architecture",
  "site-infrastructure": "infrastructure",
  "sustainable-design": "architecture",
  "structural-engineering": "structure",
  "civil-engineering": "structure",
  "mechanical-utility-engineering": "mechanical",
  "hvac-engineering": "mechanical",
  "electrical-engineering": "electrical",
  "fire-protection-engineering": "fire",
  "project-management": "delivery",
};

const stories: Record<DisciplineFamily, Omit<ServiceStory, "family">> = {
  architecture: {
    motif: "Concept Â· Planning Â· Space Â· Layouts",
    lead: "Architecture at FORMX starts with how the facility will operateâ€”then resolves statutory setbacks, clear heights and structural grids before elevations are finished for presentation.",
    thinking: [
      "Operational zoning before cosmetic elevation work",
      "Layouts that respect structural bays and utility risers",
      "Statutory approval drawings that match what can be built",
      "Design process that stays coordinated through GFC revisions",
    ],
    artifacts: [
      "Master spatial zoning",
      "GA plans, sections & elevations",
      "Door / window / finish schedules",
      "Statutory submission sets",
    ],
    siteReality:
      "On site, architectural intent must survive contractor markups and utility penetrations. We stay in the revision loop until openings, docks and finishes match the coordinated package.",
  },
  structure: {
    motif: "Frames Â· Loads Â· Steel Â· Reinforcement Â· Analysis",
    lead: "Structural systems are sized for real industrial loadsâ€”cranes, process equipment, seismic and windâ€”then detailed so fabrication and reinforcement cages can be erected without guesswork.",
    thinking: [
      "Load path clarity from equipment to foundation",
      "PEB and RCC interfaces at base plates and splices",
      "Seismic and wind detailing at critical junctions",
      "Value engineering that does not erase safety margins",
    ],
    artifacts: [
      "STAAD / ETABS calculation trail",
      "Structural GA & reinforcement drawings",
      "Steel connection & fabrication details",
      "Foundation layouts with load schedules",
    ],
    siteReality:
      "Construction crews need unambiguous bar schedules and connection details. We support RFIs and shop drawing reviews until the frame matches the model.",
  },
  fire: {
    motif: "Hydrant Â· Pump Â· Sprinkler Â· Code Â· Coverage",
    lead: "Fire protection is designed as a life-safety system with verified coverageâ€”hydrant loops, pump rooms, sprinklers and detectionâ€”coordinated with architecture and structure before pipes are hung.",
    thinking: [
      "Hazard classification drives system selection",
      "Hydrant and sprinkler coverage without dead zones",
      "Pump room sizing and redundancy",
      "NBC Part 4 and IS code alignment",
    ],
    artifacts: [
      "Fire GA & coverage plans",
      "Hydrant / sprinkler schematics",
      "Pump room layouts",
      "Hydraulic calculations",
    ],
    siteReality:
      "Authority inspections fail on incomplete coverage or uncoordinated penetrations. We keep fire routes clear of structural and utility clashes before installation.",
  },
  electrical: {
    motif: "SLD Â· Transformers Â· Power Â· Routing",
    lead: "Electrical design starts with load assessment and a clear single-line diagramâ€”then routes HT/LT cables, trays and earthing through corridors reserved in the coordinated BIM / GA set.",
    thinking: [
      "SLD that matches actual plant load growth",
      "Transformer and panel room spatial logic",
      "Cable tray routing free of structural clashes",
      "Earthing and lightning protection as system, not afterthought",
    ],
    artifacts: [
      "Single Line Diagrams (SLD)",
      "Electrical GA & lighting layouts",
      "Cable tray & routing drawings",
      "Earthing & LPS details",
    ],
    siteReality:
      "Rework happens when trays fight ducts and beams. We coordinate electrical routes with structure and HVAC before cable is pulled.",
  },
  mechanical: {
    motif: "Ducts Â· HVAC Â· Utilities Â· Equipment",
    lead: "Mechanical and HVAC systems are planned as plant utilitiesâ€”duct trunks, chilled water, process piping and equipment padsâ€”sized for maintainability and clash-free installation.",
    thinking: [
      "Load and process demand before equipment selection",
      "Duct and pipe trunks in reserved corridors",
      "Equipment foundations coordinated with structure",
      "Access and maintenance envelopes protected",
    ],
    artifacts: [
      "HVAC / utility GA layouts",
      "Duct & piping coordination plans",
      "Equipment schedules & pads",
      "Technical specifications & BOQ",
    ],
    siteReality:
      "Ceiling congestion kills schedules. We close mechanical clashes against structure and electrical trays before GFC issue.",
  },
  infrastructure: {
    motif: "Roads Â· Drainage Â· Utilities Â· Site networks",
    lead: "Site infrastructure opens the plot for construction and operationsâ€”grading, roads, stormwater, water supply and external utilitiesâ€”aligned with building footprints and future expansion.",
    thinking: [
      "Grading that drains without flooding pads",
      "Road and pavement for construction and plant traffic",
      "Storm and utility networks with clear ownership",
      "External development coordinated with architecture",
    ],
    artifacts: [
      "Site master & infrastructure layout",
      "Grading & earthwork plans",
      "Road / pavement drawings",
      "Drainage & utility profiles",
    ],
    siteReality:
      "Wrong levels at the plot boundary cascade into foundation and dock problems. Civil GAs are issued with building interface notes contractors can stake.",
  },
  delivery: {
    motif: "Coordination Â· Tender Â· Procurement Â· Site support",
    lead: "Delivery holds the multidisciplinary package togetherâ€”tender clarity, vendor evaluation, schedule pressure and construction-stage engineering until the facility matches intent.",
    thinking: [
      "Scope that matches what will actually be built",
      "Tender documents contractors can price without ambiguity",
      "Vendor evaluation with technical criteria",
      "RFI and shop drawing discipline on site",
    ],
    artifacts: [
      "Project execution plan",
      "Tender & BOQ packages",
      "Vendor evaluation notes",
      "Progress & closeout documentation",
    ],
    siteReality:
      "Projects stall when nobody owns the interface. FORMX delivery keeps architecture, structure and infrastructure answering as one practice through construction.",
  },
};

export function getServiceStory(service: Service): ServiceStory {
  const family = familyBySlug[service.slug] ?? "delivery";
  return { family, ...stories[family] };
}

export function getDisciplineFamily(slug: string): DisciplineFamily {
  return familyBySlug[slug] ?? "delivery";
}
