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
    motif: "Plot → Operations → Buildable plans",
    lead: "Architecture at FORMX is not drawing buildings for presentation. It is making future construction easier — by understanding how the facility will operate before elevations are finished.",
    thinking: [
      "Empty plots become facilities only after operations, movement and expansion are understood",
      "Zoning and clear heights lock before cosmetic elevation work",
      "Layouts must respect structural bays and infrastructure routes — or Structure and Infrastructure pay for it later",
      "Statutory drawings must match what can actually be built",
    ],
    artifacts: [
      "Operational zoning & master planning",
      "GA plans, sections & elevations",
      "Door / window / finish schedules",
      "Statutory submission sets",
    ],
    siteReality:
      "On site, architectural intent must survive contractor markups and penetrations. We stay in the revision loop until openings, docks and finishes match the coordinated package — because unresolved planning questions become expensive concrete.",
  },
  structure: {
    motif: "Load path · Gravity · Wind · Seismic · Connections",
    lead: "Structural Engineering answers one question relentlessly: how does every load safely travel into the ground? Frames are sized for real industrial forces — then detailed so fabrication and cages can be erected without guesswork.",
    thinking: [
      "Load path clarity from equipment and cranes to foundations",
      "PEB and RCC interfaces at base plates and splices — where projects usually fail silently",
      "Seismic and wind detailing at critical junctions before tender",
      "Value engineering that protects safety margins instead of erasing them",
    ],
    artifacts: [
      "Analysis trail (STAAD / ETABS)",
      "Structural GA & reinforcement drawings",
      "Steel connection & fabrication details",
      "Foundation layouts with load schedules",
    ],
    siteReality:
      "Construction crews need unambiguous bar schedules and connection details. We support RFIs and shop drawing reviews until the frame matches the model — because ambiguous structure becomes site invention.",
  },
  fire: {
    motif: "Hydrant · Pump · Sprinkler · Code · Coverage",
    lead: "Fire protection is designed as a life-safety strategy — coverage, routes and redundancy — coordinated with Architecture and Structure before pipes are hung.",
    thinking: [
      "Hazard classification drives system selection",
      "Coverage without dead zones",
      "Pump room sizing and redundancy",
      "Code alignment that survives inspection",
    ],
    artifacts: [
      "Fire GA & coverage plans",
      "Hydrant / sprinkler schematics",
      "Pump room layouts",
      "Hydraulic calculations",
    ],
    siteReality:
      "Inspections fail on incomplete coverage or uncoordinated penetrations. Routes must stay clear of structural and utility clashes before installation.",
  },
  electrical: {
    motif: "SLD · Distribution · Reliability",
    lead: "Electrical planning starts with how uninterrupted industrial power must behave — load, growth, routes — then locks an SLD contractors can build.",
    thinking: [
      "SLD that matches plant load growth",
      "Panel and transformer spatial logic",
      "Routes free of structural clashes",
      "Earthing and LPS as system, not afterthought",
    ],
    artifacts: [
      "Single Line Diagrams (SLD)",
      "Electrical GA & lighting layouts",
      "Cable tray & routing drawings",
      "Earthing & LPS details",
    ],
    siteReality:
      "Rework happens when trays fight beams. Routes are coordinated before cable is pulled.",
  },
  mechanical: {
    motif: "Environment · Process support · Maintainability",
    lead: "Mechanical systems exist to support manufacturing environments — comfort, process and access — planned so installation does not fight Structure.",
    thinking: [
      "Demand before equipment selection",
      "Trunks in reserved corridors",
      "Equipment pads coordinated with structure",
      "Maintenance envelopes protected",
    ],
    artifacts: [
      "HVAC / utility GA layouts",
      "Duct & piping coordination plans",
      "Equipment schedules & pads",
      "Technical specifications & BOQ",
    ],
    siteReality:
      "Ceiling congestion kills schedules. Clashes close before GFC issue.",
  },
  infrastructure: {
    motif: "Roads · Drainage · Levels · Daily operations",
    lead: "Infrastructure explains how an industrial site actually functions every day — roads, stormwater, water, grading and external utilities — systems clients rarely see until they fail.",
    thinking: [
      "Grading that drains without flooding pads",
      "Road and pavement for construction and plant traffic",
      "Storm and utility networks with clear ownership",
      "External development aligned with building footprints and expansion",
    ],
    artifacts: [
      "Site master & infrastructure layout",
      "Grading & earthwork plans",
      "Road / pavement drawings",
      "Drainage & utility profiles",
    ],
    siteReality:
      "Wrong levels at the plot boundary cascade into foundation and dock problems. Civil GAs carry building interface notes contractors can stake.",
  },
  delivery: {
    motif: "Interfaces · Tender clarity · Site answers",
    lead: "Delivery holds Architecture, Structure and Infrastructure together — because projects stall when nobody owns the interface between disciplines.",
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
      "FORMX delivery keeps Architecture, Structure and Infrastructure answering as one practice through construction — until the facility matches intent.",
  },
};

export function getServiceStory(service: Service): ServiceStory {
  const family = familyBySlug[service.slug] ?? "delivery";
  return { family, ...stories[family] };
}

export function getDisciplineFamily(slug: string): DisciplineFamily {
  return familyBySlug[slug] ?? "delivery";
}
