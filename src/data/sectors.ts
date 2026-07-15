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
      "Facility planning for renewable manufacturing — process zoning, utilities, and scalable building systems for module, cell, and related plants.",
    challenges: [
      "Phased capacity growth without operational disruption",
      "High utility intensity and clear corridor logic",
      "Structural spans suited to production equipment",
    ],
    capabilities: [
      "Campus master planning",
      "Production hall architecture & structure",
      "Power-dense electrical design",
      "Site infrastructure for industrial logistics",
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
      "High-precision manufacturing environments with coordinated clean process, utilities, and structural performance.",
    challenges: [
      "Separation of critical / clean process zones",
      "Stable environments and vibration-aware planning",
      "Dense utility and power distribution",
    ],
    capabilities: [
      "Critical area architectural zoning",
      "Process utility coordination",
      "Fire strategy for manufacturing risks",
      "Expansion-ready building frameworks",
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
      "Heavy-process industrial layouts designed around furnace, handling, and energy-intensive operations.",
    challenges: [
      "Heavy equipment foundations and heat loads",
      "Material handling and logistics clearances",
      "Energy and cooling interfaces",
    ],
    capabilities: [
      "Heavy industrial structural design",
      "Process-adjacent architecture",
      "Mechanical & electrical capacity planning",
      "Site logistics infrastructure",
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
      "Large-span manufacturing halls planned for mould length, logistics flow, and structural clarity.",
    challenges: [
      "Extraordinary hall lengths and clear heights",
      "Mould and blade movement logistics",
      "Climate control for composite processes",
    ],
    capabilities: [
      "Long-span structural systems",
      "Factory flow architecture",
      "Process HVAC coordination",
      "Heavy logistics site planning",
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
      "Battery and pack facilities with disciplined zoning for safety, utilities, and controlled environments.",
    challenges: [
      "Fire and process safety segregation",
      "Controlled manufacturing environments",
      "Reliable power and emergency systems",
    ],
    capabilities: [
      "Safety-led master planning",
      "Fire protection engineering",
      "Critical electrical design",
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
      "Precision industrial planning supporting critical infrastructure, reliability, and phased expansion.",
    challenges: [
      "Uptime-critical infrastructure interfaces",
      "Phased clean / support adjacency",
      "High reliability utility design",
    ],
    capabilities: [
      "Precision facility planning",
      "Integrated MEPF coordination",
      "Redundancy-aware electrical design",
      "Expandable campus frameworks",
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
      "Process-led plants for cable manufacturing — extrusion flow, utilities, and material handling.",
    challenges: [
      "Linear process flow and storage adjacency",
      "Heat and utility intensive lines",
      "Safe materials logistics",
    ],
    capabilities: [
      "Process architecture",
      "Industrial structure & craneways",
      "Utility and power design",
      "Fire & life safety packages",
    ],
    relatedServices: [
      "architectural-design",
      "structural-engineering",
      "electrical-engineering",
      "fire-protection-engineering",
    ],
    asset: "sectors/cable.jpg",
  },
  {
    slug: "industrial-park",
    title: "Industrial Park",
    summary:
      "Campus master planning, plot infrastructure, and coordinated multi-building development.",
    challenges: [
      "Plot logic and shared infrastructure",
      "Phased investment by multiple occupants",
      "Road, drainage, and utility corridors",
    ],
    capabilities: [
      "Industrial master planning",
      "Site infrastructure engineering",
      "Common facility architecture",
      "Programme & procurement support",
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
      "High-reliability facilities with power, cooling, and structural systems designed for uptime.",
    challenges: [
      "Power and cooling density",
      "Resilience and maintainability",
      "Security and circulation control",
    ],
    capabilities: [
      "Mission-critical architectural planning",
      "Electrical redundancy design",
      "Precision cooling coordination",
      "Fire strategy for critical loads",
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
      "Hygienic process layouts, cold chain interfaces, and utilities tuned to food manufacturing needs.",
    challenges: [
      "Hygiene zoning and personnel flow",
      "Cold utilities and washdown environments",
      "Food-grade detailing discipline",
    ],
    capabilities: [
      "Hygienic architectural planning",
      "Refrigeration & HVAC design",
      "Process utility engineering",
      "Compliant fire strategies",
    ],
    relatedServices: [
      "architectural-design",
      "hvac-engineering",
      "mechanical-utility-engineering",
      "fire-protection-engineering",
    ],
    asset: "sectors/food.jpg",
  },
  {
    slug: "sustainable-packaging",
    title: "Sustainable Packaging",
    summary:
      "Packaging plants planned for material flow, energy use, and efficient production lines.",
    challenges: [
      "High-throughput packaging lines",
      "Material storage and AGV/forklift flow",
      "Energy-aware building services",
    ],
    capabilities: [
      "Production architecture",
      "Structural systems for equipment",
      "Electrical & utilities",
      "Sustainable design measures",
    ],
    relatedServices: [
      "architectural-design",
      "structural-engineering",
      "electrical-engineering",
      "sustainable-design",
    ],
    asset: "sectors/packaging.jpg",
  },
  {
    slug: "ev-electronics",
    title: "EV Components & Electronics",
    summary:
      "Assembly and testing facilities with clear process zoning and reliable building services.",
    challenges: [
      "Assembly vs test zone separation",
      "ESD / controlled area planning where needed",
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
    asset: "sectors/ev.jpg",
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
