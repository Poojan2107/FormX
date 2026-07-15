/** Rich project case studies — swap image paths under /public/assets/projects/ */

export type Project = {
  slug: string;
  sector: string;
  title: string;
  client: string;
  location: string;
  year: string;
  area?: string;
  services: string[];
  challenge: string;
  approach: string;
  outcome: string;
  highlights: string[];
  /** Handover: drop files matching these slots */
  assets: {
    cover: string;
    gallery: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "solar-module-manufacturing",
    sector: "Renewable Energy",
    title: "Solar Module Manufacturing Facility",
    client: "Insolation Energy",
    location: "Rajasthan, India",
    year: "2024",
    area: "1,20,000+ sq.m campus scope",
    services: ["Architectural Design", "Structural Engineering", "Electrical Engineering", "Site Infrastructure"],
    challenge:
      "Deliver a scalable module manufacturing campus with clear process zoning, heavy equipment foundations, and utility corridors that support phased expansion without disrupting operations.",
    approach:
      "FormX aligned master planning with process flow early, coordinated structural grids for production halls, and routed MEPF as clash-checked packages ahead of construction milestones.",
    outcome:
      "Integrated design documentation supported on-schedule tendering and clearer site execution — with expansion logic embedded from day one.",
    highlights: [
      "Process-led bay planning",
      "Heavy industrial structural systems",
      "Coordinated power & utilities",
      "Phased expansion readiness",
    ],
    assets: {
      cover: "projects/solar-module-cover.jpg",
      gallery: [
        "projects/solar-module-01.jpg",
        "projects/solar-module-02.jpg",
        "projects/solar-module-03.jpg",
      ],
    },
  },
  {
    slug: "aerial-platform-plant",
    sector: "Automotive & Equipment",
    title: "Aerial Work Platform Manufacturing Facility",
    client: "Terex India",
    location: "Sanand, Gujarat",
    year: "2025",
    services: ["Architectural Design", "Structural Engineering", "Mechanical Utility Engineering", "HVAC Engineering"],
    challenge:
      "Plan a manufacturing facility for large equipment with precise circulation, assembly clearances, and utility capacity for a demanding production tempo.",
    approach:
      "Layouts prioritised material flow and crane/aisle logic. Structure and utilities were coordinated as one package to protect assembly-line clear heights and service access.",
    outcome:
      "Buildable GFC packages and responsive site clarifications kept design ownership close to construction sequencing.",
    highlights: [
      "Assembly-flow architecture",
      "Clear-height structural design",
      "Utility capacity planning",
      "Site clarification support",
    ],
    assets: {
      cover: "projects/terex-cover.jpg",
      gallery: ["projects/terex-01.jpg", "projects/terex-02.jpg"],
    },
  },
  {
    slug: "metallurgical-equipment",
    sector: "Heavy Engineering",
    title: "Heavy Metallurgical Equipment Manufacturing Facility",
    client: "SMS India",
    location: "India",
    year: "2024",
    services: ["Structural Engineering", "Architectural Design", "Site Infrastructure", "Project Management"],
    challenge:
      "Support heavy process equipment and industrial loads while maintaining constructability and coordinated civil/site interfaces.",
    approach:
      "Structural systems and foundations were engineered for industrial duty; architecture and site packages stayed aligned to equipment vendor constraints.",
    outcome:
      "Reliable structural language and clearer civil interfaces reduced redesign loops during vendor finalisation.",
    highlights: [
      "Heavy-duty structures",
      "Equipment interface planning",
      "Civil & site coordination",
      "Vendor-aligned documentation",
    ],
    assets: {
      cover: "projects/sms-cover.jpg",
      gallery: ["projects/sms-01.jpg", "projects/sms-02.jpg"],
    },
  },
  {
    slug: "packaging-machinery",
    sector: "Packaging",
    title: "Beverage Packaging Machinery Manufacturing Facility",
    client: "Tech-Long Packaging",
    location: "India",
    year: "2024",
    services: ["Architectural Design", "Electrical Engineering", "Fire Protection Engineering", "HVAC Engineering"],
    challenge:
      "Create a precise manufacturing environment for packaging machinery with clean process organisation and dependable building services.",
    approach:
      "Spatial planning separated fabrication, assembly, and testing; fire, HVAC, and electrical design followed industrial risk and equipment heat loads.",
    outcome:
      "Coordinated services reduced late-stage routing conflicts and supported smoother commissioning.",
    highlights: [
      "Process zoning clarity",
      "Industrial fire strategy",
      "Power & lighting packages",
      "Comfort + process HVAC",
    ],
    assets: {
      cover: "projects/techlong-cover.jpg",
      gallery: ["projects/techlong-01.jpg"],
    },
  },
  {
    slug: "frozen-foods-unit",
    sector: "Food Processing",
    title: "Frozen Potato Processing & Manufacturing Facility",
    client: "Falcon Agrifriz",
    location: "Gujarat, India",
    year: "2023",
    services: ["Architectural Design", "HVAC Engineering", "Mechanical Utility Engineering", "Fire Protection Engineering"],
    challenge:
      "Design a food processing plant with hygienic zoning, cold utilities, and strict separation between process and personnel flows.",
    approach:
      "Architecture and MEPF were planned around hygiene categories and refrigeration loads, with clear drainage and utility maintainability.",
    outcome:
      "Facility planning supported food-grade operations with coordinated cold-chain utility design.",
    highlights: [
      "Hygienic layout logic",
      "Cold utility planning",
      "Washdown-ready detailing",
      "Fire & life safety",
    ],
    assets: {
      cover: "projects/falcon-cover.jpg",
      gallery: ["projects/falcon-01.jpg", "projects/falcon-02.jpg"],
    },
  },
  {
    slug: "logistics-warehouse",
    sector: "Logistics",
    title: "Integrated Logistics & Warehousing Facility",
    client: "TCI Warehouse",
    location: "Indore, India",
    year: "2023",
    services: ["Architectural Design", "Structural Engineering", "Site Infrastructure", "Electrical Engineering"],
    challenge:
      "Deliver grade-A warehousing with efficient dock operations, clear span structures, and durable site circulation.",
    approach:
      "Master dock and truck logic first; engineered large-span structure and site roads for high throughput and low operational friction.",
    outcome:
      "Operationally efficient warehouse layout with robust structural and site packages for contractors.",
    highlights: [
      "Dock & aisle optimisation",
      "Large-span structures",
      "Site road & drainage",
      "Efficient lighting power",
    ],
    assets: {
      cover: "projects/tci-cover.jpg",
      gallery: ["projects/tci-01.jpg"],
    },
  },
  {
    slug: "aseptic-packaging",
    sector: "Packaging",
    title: "Aseptic Carton Packaging Manufacturing Facility",
    client: "SIG India",
    location: "India",
    year: "2023",
    services: ["Architectural Design", "Structural Engineering", "HVAC Engineering", "Project Management"],
    challenge:
      "Support high-spec packaging manufacturing with tight coordination between process vendors and building systems.",
    approach:
      "Partner-led coordination locked interfaces early; architecture, structure, and HVAC progressed with weekly clash reviews.",
    outcome:
      "Milestone-ready GFC and disciplined interface control across vendors and site teams.",
    highlights: [
      "Vendor interface control",
      "Clean process adjacency",
      "Coordinated HVAC",
      "Programme ownership",
    ],
    assets: {
      cover: "projects/sig-cover.jpg",
      gallery: ["projects/sig-01.jpg", "projects/sig-02.jpg"],
    },
  },
  {
    slug: "solar-cell-module",
    sector: "Solar Cell",
    title: "Solar Cell & Module Manufacturing Facility",
    client: "Grew Energy",
    location: "India",
    year: "2024",
    services: ["Architectural Design", "Electrical Engineering", "Mechanical Utility Engineering", "Fire Protection Engineering"],
    challenge:
      "Plan precision manufacturing with controlled environments, high power density, and phased cell-to-module flow.",
    approach:
      "Zoning separated clean/critical areas; electrical and utilities sized for process demand with expansion hooks.",
    outcome:
      "Scalable facility framework aligning process intensity with buildable engineering packages.",
    highlights: [
      "Critical area zoning",
      "High-density power planning",
      "Process utility corridors",
      "Industrial fire design",
    ],
    assets: {
      cover: "projects/grew-cover.jpg",
      gallery: ["projects/grew-01.jpg"],
    },
  },
  {
    slug: "battery-pack-plant",
    sector: "Battery",
    title: "Li-ion Battery Pack Manufacturing Facility",
    client: "Crystal Group",
    location: "India",
    year: "2024",
    services: ["Architectural Design", "Fire Protection Engineering", "Electrical Engineering", "HVAC Engineering"],
    challenge:
      "Establish a battery pack facility with rigorous safety zoning, controlled environments, and reliable services.",
    approach:
      "Safety and process segregation drove planning. Fire, electrical, and HVAC strategies were developed together for risk and uptime.",
    outcome:
      "Safety-led design ready for industrial battery manufacturing workflows and compliance scrutiny.",
    highlights: [
      "Safety zoning",
      "Fire & gas strategy",
      "Controlled environments",
      "Reliable power design",
    ],
    assets: {
      cover: "projects/battery-cover.jpg",
      gallery: ["projects/battery-01.jpg", "projects/battery-02.jpg"],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
