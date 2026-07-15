export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  highlights: string[];
  deliverables: string[];
  process: string[];
  relatedSectors: string[];
  asset: string;
};

export const services: Service[] = [
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    short:
      "Strength, constructability, and reliability — structures engineered for industrial loads and practical build sequences.",
    summary:
      "Our structural designs focus on strength, practicality, and ease of construction. Each structure is engineered for reliability, using materials and systems suited to industrial needs — with clear detailing for faster, safer execution.",
    highlights: [
      "Industrial framing systems & foundations",
      "Constructability-led detailing",
      "Coordination with architecture & utilities",
      "Design support through construction",
    ],
    deliverables: [
      "Structural design basis & load assessment",
      "Analysis models and design calculations",
      "GA drawings, connection detailing & bar bending",
      "GFC packages and site clarification notes",
    ],
    process: [
      "Load & code basis alignment with client/process vendors",
      "Scheme options for span, crane, and expansion",
      "Detailed design coordinated with architecture & MEPF",
      "Site queries and modification control",
    ],
    relatedSectors: ["renewable-energy", "industrial-park", "food-processing"],
    asset: "services/structural.jpg",
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    short:
      "Industrial buildings planned around process flow, safety, usability, and long-term operational performance.",
    summary:
      "We design industrial buildings that work as efficiently as the processes inside them. Every plan focuses on flow, safety, usability, and long-term operational performance — from master planning to detailed architectural delivery.",
    highlights: [
      "Master planning & building massing",
      "Process-led spatial planning",
      "Safety and circulation clarity",
      "Documentation for tender & construction",
    ],
    deliverables: [
      "Master plans & blocking diagrams",
      "Floor plans, sections, elevations",
      "Area statements & code compliance notes",
      "Tender and GFC architectural packages",
    ],
    process: [
      "Process workshops with operations teams",
      "Concept options for flow, safety, expansion",
      "Detailed design with multidisciplinary interfaces",
      "Construction-phase design clarification",
    ],
    relatedSectors: ["industrial-park", "food-processing", "data-center"],
    asset: "services/architecture.jpg",
  },
  {
    slug: "mechanical-utility-engineering",
    title: "Mechanical Utility Engineering",
    short:
      "Compressed air, water, and process piping planned for performance, safety, and efficient energy use.",
    summary:
      "We plan mechanical utility systems such as compressed air, water, and process piping with attention to performance, safety, and energy use throughout the facility — coordinated with structure and electrical services.",
    highlights: [
      "Utility routing & capacity planning",
      "Process interface coordination",
      "Maintainability and access",
      "Clash-free service design",
    ],
    deliverables: [
      "Utility schematics & load summaries",
      "Piping layouts and equipment schedules",
      "Coordination models / clash reports",
      "Tender BOQ support documentation",
    ],
    process: [
      "Demand assessment with process inputs",
      "Corridor strategy inside the structural grid",
      "Detailed routing with clash resolution",
      "Vendor & site interface support",
    ],
    relatedSectors: ["battery", "solar-cell", "food-processing"],
    asset: "services/mechanical.jpg",
  },
  {
    slug: "fire-protection-engineering",
    title: "Fire Protection Engineering",
    short:
      "Detection and protection strategies aligned to industrial risk, compliance, and emergency access.",
    summary:
      "We develop fire detection and protection systems designed for industrial risks. Each plan ensures safety, compliance, and accessibility during both operations and emergencies.",
    highlights: [
      "Risk-based system design",
      "Detection & suppression planning",
      "Egress and emergency access",
      "Code-aligned documentation",
    ],
    deliverables: [
      "Fire strategy & hazard classification notes",
      "Detection & suppression layouts",
      "Hydraulic calculations where applicable",
      "Authority-facing documentation support",
    ],
    process: [
      "Hazard mapping by process area",
      "System selection vs code & insurer norms",
      "Integrated layouts with architecture/MEP",
      "Site inspection coordination support",
    ],
    relatedSectors: ["battery", "data-center", "food-processing"],
    asset: "services/fire.jpg",
  },
  {
    slug: "hvac-engineering",
    title: "HVAC & R Engineering",
    short:
      "Climate and process stability tuned to equipment layout, occupancy, and energy performance.",
    summary:
      "Our HVAC and refrigeration systems maintain process stability and comfort. Designs are tailored to temperature needs, equipment layout, and energy performance across manufacturing environments.",
    highlights: [
      "Process & comfort conditioning",
      "Energy-aware system selection",
      "Integration with building envelope",
      "Controls-ready layouts",
    ],
    deliverables: [
      "Heat load & psychrometric basis",
      "Equipment schedules & schematics",
      "Ducting / piping layouts",
      "Controls philosophy inputs",
    ],
    process: [
      "Area-wise environmental criteria",
      "System concept & energy options",
      "Detailed design with clash checks",
      "Commissioning support notes",
    ],
    relatedSectors: ["food-processing", "semiconductor", "data-center"],
    asset: "services/hvac.jpg",
  },
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    short:
      "Power, lighting, and controls laid out for dependable operations and maintainable distribution.",
    summary:
      "We design power distribution, lighting, and control systems that support dependable operations. Every layout is clear, maintainable, and optimised for industrial performance.",
    highlights: [
      "HT/LT distribution planning",
      "Lighting & emergency systems",
      "Earthing and equipment power",
      "Clear single-line documentation",
    ],
    deliverables: [
      "Load lists & single-line diagrams",
      "Distribution layouts & schedules",
      "Lighting design packages",
      "Earthing / lightning protection notes",
    ],
    process: [
      "Demand aggregation with process vendors",
      "Distribution hierarchy & redundancy",
      "Detailed layouts coordinated with structure",
      "Site energisation support as required",
    ],
    relatedSectors: ["renewable-energy", "data-center", "ev-electronics"],
    asset: "services/electrical.jpg",
  },
  {
    slug: "site-infrastructure",
    title: "Site Infrastructure Engineering",
    short:
      "Roads, drainage, and site utilities designed for durability, safety, and easy upkeep.",
    summary:
      "From internal roads to drainage and utilities, our infrastructure planning supports smooth operations across the site. The focus stays on durability, safety, and easy maintenance.",
    highlights: [
      "Roads, paving & circulation",
      "Storm & wastewater planning",
      "Underground utility corridors",
      "Site grading & levels",
    ],
    deliverables: [
      "Site grading & road GA",
      "Drainage & utility corridor plans",
      "Pavement design notes",
      "Tender-ready civil packages",
    ],
    process: [
      "Traffic & logistics study with ops",
      "Levels, drainage & corridor strategy",
      "Detailed civil documentation",
      "Contractor clarification support",
    ],
    relatedSectors: ["industrial-park", "logistics", "renewable-energy"],
    asset: "services/site.jpg",
  },
  {
    slug: "sustainable-design",
    title: "Sustainable & Energy Efficient Design",
    short:
      "Resource reduction from concept stage — daylight, efficiency, and renewable-ready planning.",
    summary:
      "We approach every project with an aim to reduce resource use. Energy efficiency, natural lighting, and renewable systems are integrated wherever practical — from concept, not as a late add-on.",
    highlights: [
      "Passive design strategies",
      "Energy & water efficiency",
      "Daylight & envelope performance",
      "Renewable-ready planning",
    ],
    deliverables: [
      "Early-stage sustainability checklist",
      "Envelope & daylight recommendations",
      "Water & energy measure register",
      "Integration notes into base design",
    ],
    process: [
      "Concept options with measurable impact",
      "Prioritisation vs capex / opex",
      "Embed measures in detailed design",
      "Handover performance narrative",
    ],
    relatedSectors: ["renewable-energy", "industrial-park", "data-center"],
    asset: "services/sustainable.jpg",
  },
  {
    slug: "project-management",
    title: "Project Management & Procurement",
    short:
      "Schedules, vendor coordination, and site support that keep execution aligned with design intent.",
    summary:
      "We manage projects from planning to completion, coordinating consultants, vendors, and contractors. Clear schedules, transparent communication, and on-site support keep execution on track.",
    highlights: [
      "Programme & milestone control",
      "Vendor & tender coordination",
      "Design clarification at site",
      "Quality and progress reviews",
    ],
    deliverables: [
      "Master programme & RACI",
      "Tender packaging support",
      "Progress and risk registers",
      "Site coordination minutes",
    ],
    process: [
      "Baseline scope & milestone lock",
      "Tender & vendor alignment",
      "Construction-phase design control",
      "Close-out documentation",
    ],
    relatedSectors: ["industrial-park", "renewable-energy", "food-processing"],
    asset: "services/pm.jpg",
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    short:
      "Foundations, earthworks, and civil packages that support stable industrial development.",
    summary:
      "Our civil engineering covers foundations, earthworks, and associated packages that enable stable, buildable industrial campuses — coordinated with architecture, structure, and site infrastructure.",
    highlights: [
      "Foundations & earthworks",
      "Civil package documentation",
      "Interface with site utilities",
      "Buildable detailing for contractors",
    ],
    deliverables: [
      "Foundation & earthwork drawings",
      "Civil construction details",
      "Quantity support for tender",
      "Site response notes",
    ],
    process: [
      "Geotech & load inputs aligned",
      "Scheme foundations with structure",
      "Detailed civil documentation",
      "Construction queries resolved",
    ],
    relatedSectors: ["industrial-park", "renewable-energy", "wind-blade"],
    asset: "services/civil.jpg",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
