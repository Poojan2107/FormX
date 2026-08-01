export type Sector = {
  slug: string;
  title: string;
  summary: string;
  challenges: string[];
  capabilities: string[];
  relatedServices: string[];
  asset: string;
};

export const sectors: Sector[] = [
  {
    slug: "renewable-energy",
    title: "Renewable Energy",
    summary:
      "Construction-ready facility design for renewable manufacturing — architectural planning, structural systems, power distribution, and site infrastructure that support phased capacity growth.",
    challenges: [
      "Phased expansion without disrupting operations",
      "High utility intensity and clear corridor logic",
      "Structural spans suited to production equipment",
    ],
    capabilities: [
      "Campus & production hall architectural planning",
      "Industrial structural design & foundations",
      "HT/LT electrical design for power-dense plants",
      "Roads, drainage, and site utility networks",
    ],
    relatedServices: [
      "architectural-design",
      "structural-engineering",
      "electrical-engineering",
      "site-infrastructure",
    ],
    asset: "sectors/renewable.jpg",
  },
  {
    slug: "solar-cell",
    title: "Solar Cell",
    summary:
      "Precision manufacturing environments with coordinated zoning, mechanical utilities, electrical systems, and fire protection for cell and module lines.",
    challenges: [
      "Separation of critical / clean process zones",
      "Dense utility and power distribution",
      "Fire and life-safety planning for manufacturing risk",
    ],
    capabilities: [
      "Critical area architectural zoning",
      "Process & utility piping coordination",
      "Electrical GA, SLD & cable routing",
      "Hydrant, sprinkler & detection coordination",
    ],
    relatedServices: [
      "architectural-design",
      "mechanical-utility-engineering",
      "electrical-engineering",
      "fire-protection-engineering",
    ],
    asset: "sectors/solar-cell.jpg",
  },
  {
    slug: "solar-glass",
    title: "Solar Glass",
    summary:
      "Heavy-process industrial layouts designed around furnace loads, material handling, structural performance, and energy-intensive HVAC interfaces.",
    challenges: [
      "Heavy equipment foundations and heat loads",
      "Material handling and logistics clearances",
      "Cooling and mechanical utility intensity",
    ],
    capabilities: [
      "Heavy industrial structural & foundation design",
      "Process-adjacent architectural planning",
      "Mechanical utility & HVAC capacity planning",
      "Civil and site logistics infrastructure",
    ],
    relatedServices: [
      "structural-engineering",
      "architectural-design",
      "mechanical-utility-engineering",
      "hvac-engineering",
    ],
    asset: "sectors/solar-glass.jpg",
  },
  {
    slug: "wind-blade",
    title: "Wind Blade",
    summary:
      "Large-span manufacturing halls planned for mould length, logistics flow, structural clarity, and climate control for composite processes.",
    challenges: [
      "Extraordinary hall lengths and clear heights",
      "Mould and blade movement logistics",
      "Process HVAC for composite environments",
    ],
    capabilities: [
      "Long-span structural systems",
      "Factory flow architecture",
      "HVAC & ventilation design",
      "Heavy logistics site infrastructure",
    ],
    relatedServices: [
      "structural-engineering",
      "architectural-design",
      "hvac-engineering",
      "site-infrastructure",
    ],
    asset: "sectors/wind-blade.jpg",
  },
  {
    slug: "battery",
    title: "Battery",
    summary:
      "Battery and pack facilities with disciplined safety zoning, reliable power, controlled environments, and code-compliant fire protection.",
    challenges: [
      "Fire and process safety segregation",
      "Controlled manufacturing environments",
      "Reliable power and emergency systems",
    ],
    capabilities: [
      "Safety-led architectural planning",
      "Fire water, sprinkler & pump room design",
      "Electrical distribution & backup power",
      "HVAC for process stability",
    ],
    relatedServices: [
      "architectural-design",
      "fire-protection-engineering",
      "electrical-engineering",
      "hvac-engineering",
    ],
    asset: "sectors/battery.jpg",
  },
  {
    slug: "semiconductor",
    title: "Semiconductor",
    summary:
      "Precision facility planning supporting critical infrastructure, redundancy-aware electrical and HVAC design, and phased expansion frameworks.",
    challenges: [
      "Uptime-critical infrastructure interfaces",
      "Phased clean / support adjacency",
      "High-reliability utility design",
    ],
    capabilities: [
      "Precision architectural planning",
      "Integrated MEP coordination",
      "Redundancy-aware electrical design",
      "Energy-efficient HVAC solutions",
    ],
    relatedServices: [
      "architectural-design",
      "electrical-engineering",
      "mechanical-utility-engineering",
      "hvac-engineering",
    ],
    asset: "sectors/semiconductor.jpg",
  },
  {
    slug: "electrical-cable",
    title: "Electrical Cable",
    summary:
      "Process-led plants for cable manufacturing — extrusion flow, industrial structure, power design, and fire protection packages.",
    challenges: [
      "Linear process flow and storage adjacency",
      "Heat and utility intensive lines",
      "Safe materials logistics",
    ],
    capabilities: [
      "Process architectural planning",
      "Industrial structure & craneways",
      "Electrical & lighting packages",
      "Fire & life safety documentation",
    ],
    relatedServices: [
      "architectural-design",
      "structural-engineering",
      "electrical-engineering",
      "fire-protection-engineering",
    ],
    asset: "sectors/electrical-cable.jpg",
  },
  {
    slug: "industrial-park",
    title: "Industrial Park",
    summary:
      "Campus master planning with coordinated site infrastructure, civil works, common facilities, and programme support for multi-plot development.",
    challenges: [
      "Plot logic and shared infrastructure",
      "Phased investment by multiple occupants",
      "Road, drainage, and utility corridors",
    ],
    capabilities: [
      "Site master planning & ED works",
      "Civil grading, roads & drainage",
      "Common facility architectural design",
      "Project planning & procurement support",
    ],
    relatedServices: [
      "architectural-design",
      "site-infrastructure",
      "civil-engineering",
      "project-management",
    ],
    asset: "sectors/industrial-park.jpg",
  },
  {
    slug: "data-center",
    title: "Data Center",
    summary:
      "High-reliability facilities with power distribution, precision cooling, and fire strategies designed for uptime and maintainability.",
    challenges: [
      "Power and cooling density",
      "Resilience and maintainability",
      "Security and circulation control",
    ],
    capabilities: [
      "Mission-critical architectural planning",
      "Electrical redundancy & energy management",
      "Precision HVAC & refrigeration",
      "Fire detection & suppression coordination",
    ],
    relatedServices: [
      "architectural-design",
      "electrical-engineering",
      "hvac-engineering",
      "fire-protection-engineering",
    ],
    asset: "sectors/data-center.jpg",
  },
  {
    slug: "food-processing",
    title: "Food Processing",
    summary:
      "Hygienic process layouts with refrigeration, mechanical utilities, and fire protection tuned to food manufacturing and washdown environments.",
    challenges: [
      "Hygiene zoning and personnel flow",
      "Cold utilities and washdown environments",
      "Food-grade detailing discipline",
    ],
    capabilities: [
      "Hygienic architectural planning",
      "Refrigeration & HVAC design",
      "Process utility engineering",
      "Compliant fire protection systems",
    ],
    relatedServices: [
      "architectural-design",
      "hvac-engineering",
      "mechanical-utility-engineering",
      "fire-protection-engineering",
    ],
    asset: "sectors/food-processing.jpg",
  },
  {
    slug: "sustainable-packaging",
    title: "Sustainable Packaging",
    summary:
      "Packaging plants planned for material flow, structural clarity, efficient building services, and practical sustainable design measures.",
    challenges: [
      "High-throughput packaging lines",
      "Material storage and forklift flow",
      "Energy-aware building services",
    ],
    capabilities: [
      "Production architectural planning",
      "Structural systems for equipment",
      "Electrical & utility design",
      "Envelope, daylight & water efficiency inputs",
    ],
    relatedServices: [
      "architectural-design",
      "structural-engineering",
      "electrical-engineering",
      "sustainable-design",
    ],
    asset: "sectors/industrial-park.jpg",
  },
  {
    slug: "ev-electronics",
    title: "EV Components & Electronics",
    summary:
      "Assembly and testing facilities with clear process zoning, reliable electrical design, stable HVAC, and coordinated fire protection.",
    challenges: [
      "Assembly vs test zone separation",
      "Controlled area planning where required",
      "Reliable power quality",
    ],
    capabilities: [
      "Electronics assembly planning",
      "Electrical design for sensitive loads",
      "HVAC for process stability",
      "Fire protection coordination",
    ],
    relatedServices: [
      "architectural-design",
      "electrical-engineering",
      "hvac-engineering",
      "fire-protection-engineering",
    ],
    asset: "sectors/semiconductor.jpg",
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
