/** Project case studies — illustrative until FormX-true project data is confirmed */

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
    client: "Confidential — Renewable Manufacturing",
    location: "Rajasthan, India",
    year: "2024",
    area: "Large campus manufacturing scope",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Electrical Engineering",
      "Site Infrastructure",
    ],
    challenge:
      "Plan a scalable manufacturing campus with clear process zoning, buildable structural systems, and utility corridors that support phased expansion without disrupting operations.",
    approach:
      "FORMX aligned architectural layouts with operational flow, developed optimised structural systems for production halls, and coordinated electrical and site infrastructure as construction-ready packages ahead of tender milestones.",
    outcome:
      "Coordinated documentation supported clearer tendering and site execution — with expansion logic and statutory compliance embedded from concept stage.",
    highlights: [
      "Process-led architectural planning",
      "Industrial structural systems",
      "HT/LT power distribution planning",
      "Roads, drainage & utility networks",
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
    client: "Confidential — Equipment OEM",
    location: "Sanand, Gujarat",
    year: "2025",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Mechanical Utility Engineering",
      "HVAC & Refrigeration Engineering",
    ],
    challenge:
      "Deliver a manufacturing facility for large equipment with precise circulation, assembly clearances, and mechanical utilities sized for production tempo.",
    approach:
      "Layouts prioritised material flow and clear heights. Structure and mechanical utilities were coordinated with HVAC so service access and operational comfort stayed intact through GFC.",
    outcome:
      "Buildable drawing packages and continuous technical clarifications kept design ownership close to construction sequencing.",
    highlights: [
      "Assembly-flow architecture",
      "Clear-height structural design",
      "Utility system planning",
      "HVAC for production environments",
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
    client: "Confidential — Heavy Engineering",
    location: "India",
    year: "2024",
    services: [
      "Structural Engineering",
      "Architectural Drawings",
      "Civil Engineering",
      "Project Management & Procurement",
    ],
    challenge:
      "Support heavy process equipment and industrial loads while maintaining constructability and coordinated civil interfaces.",
    approach:
      "Structural systems and foundations were engineered for industrial duty; architecture and civil packages stayed aligned to equipment constraints, with project coordination through tender and execution.",
    outcome:
      "Reliable structural language and clearer civil interfaces reduced redesign loops during vendor finalisation.",
    highlights: [
      "RCC & steel structural design",
      "Foundation engineering",
      "Site grading & earthworks",
      "Tender & progress coordination",
    ],
    assets: {
      cover: "projects/sms-cover.jpg",
      gallery: ["projects/sms-01.jpg", "projects/sms-02.jpg"],
    },
  },
  {
    slug: "packaging-machinery",
    sector: "Packaging",
    title: "Packaging Machinery Manufacturing Facility",
    client: "Confidential — Packaging OEM",
    location: "India",
    year: "2024",
    services: [
      "Architectural Drawings",
      "Electrical Engineering",
      "Fire Protection Engineering",
      "HVAC & Refrigeration Engineering",
    ],
    challenge:
      "Create a precise manufacturing environment with clean process organisation and dependable building services across fabrication, assembly, and testing.",
    approach:
      "Spatial planning separated process zones; electrical, fire protection, and HVAC design followed industrial risk profiles, heat loads, and life-safety requirements.",
    outcome:
      "Coordinated services reduced late-stage routing conflicts and supported smoother installation and commissioning.",
    highlights: [
      "Functional space planning",
      "Power, lighting & earthing",
      "Hydrant & sprinkler layouts",
      "Ventilation & comfort HVAC",
    ],
    assets: {
      cover: "projects/techlong-cover.jpg",
      gallery: ["projects/techlong-01.jpg"],
    },
  },
  {
    slug: "frozen-foods-unit",
    sector: "Food Processing",
    title: "Frozen Foods Processing Facility",
    client: "Confidential — Food Processing",
    location: "Gujarat, India",
    year: "2023",
    services: [
      "Architectural Drawings",
      "HVAC & Refrigeration Engineering",
      "Mechanical Utility Engineering",
      "Fire Protection Engineering",
    ],
    challenge:
      "Design a food processing plant with hygienic zoning, refrigeration loads, and clear separation between process and personnel flows.",
    approach:
      "Architecture and MEP were planned around hygiene categories and process cooling, with utility maintainability and fire safety coordinated into GFC packages.",
    outcome:
      "Facility planning supported food-grade operations with construction-ready cold-chain and utility documentation.",
    highlights: [
      "Hygienic layout logic",
      "Refrigeration & process cooling",
      "Process & utility piping",
      "Life safety planning",
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
    client: "Confidential — Logistics",
    location: "Indore, India",
    year: "2023",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Site Infrastructure",
      "Electrical Engineering",
    ],
    challenge:
      "Deliver warehousing with efficient dock operations, clear-span structures, and durable site circulation for high throughput.",
    approach:
      "Dock and truck logic led the architectural plan; long-span structure, site roads, drainage, and electrical layouts were issued as coordinated construction packages.",
    outcome:
      "Operationally efficient warehouse layout with robust structural and site documentation for contractors.",
    highlights: [
      "Dock & aisle optimisation",
      "Long-span structural systems",
      "Road & stormwater design",
      "Lighting & small power",
    ],
    assets: {
      cover: "projects/tci-cover.jpg",
      gallery: ["projects/tci-01.jpg"],
    },
  },
  {
    slug: "aseptic-packaging",
    sector: "Packaging",
    title: "Aseptic Packaging Manufacturing Facility",
    client: "Confidential — Packaging",
    location: "India",
    year: "2023",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "HVAC & Refrigeration Engineering",
      "Project Management & Procurement",
    ],
    challenge:
      "Support high-spec packaging manufacturing with tight coordination between process vendors and building systems.",
    approach:
      "FORMX locked interfaces early; architecture, structure, and HVAC progressed with regular coordination reviews, supported by structured project and procurement oversight.",
    outcome:
      "Milestone-ready GFC and disciplined interface control across vendors and site teams.",
    highlights: [
      "Vendor interface control",
      "Coordinated HVAC design",
      "Structural GA & detailing",
      "Tender & vendor evaluation",
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
    client: "Confidential — Solar Manufacturing",
    location: "India",
    year: "2024",
    services: [
      "Architectural Drawings",
      "Electrical Engineering",
      "Mechanical Utility Engineering",
      "Fire Protection Engineering",
    ],
    challenge:
      "Plan precision manufacturing with controlled environments, high power density, and phased cell-to-module flow.",
    approach:
      "Zoning separated critical areas; electrical and mechanical utilities were sized for process demand with expansion hooks and integrated fire protection.",
    outcome:
      "Scalable facility framework aligning process intensity with buildable engineering packages.",
    highlights: [
      "Critical area zoning",
      "Power distribution & SLDs",
      "Plant utility infrastructure",
      "Fire water & detection coordination",
    ],
    assets: {
      cover: "projects/grew-cover.jpg",
      gallery: ["projects/grew-01.jpg"],
    },
  },
  {
    slug: "battery-pack-plant",
    sector: "Battery",
    title: "Battery Pack Manufacturing Facility",
    client: "Confidential — Battery Manufacturing",
    location: "India",
    year: "2024",
    services: [
      "Architectural Drawings",
      "Fire Protection Engineering",
      "Electrical Engineering",
      "HVAC & Refrigeration Engineering",
    ],
    challenge:
      "Establish a battery pack facility with rigorous safety zoning, controlled environments, and reliable building services.",
    approach:
      "Safety and process segregation drove planning. Fire, electrical, and HVAC strategies were developed together for detection, suppression, power reliability, and environmental control.",
    outcome:
      "Safety-led, construction-ready design prepared for industrial battery workflows and compliance scrutiny.",
    highlights: [
      "Safety zoning",
      "Sprinkler & hydrant networks",
      "Backup power planning",
      "Energy-conscious HVAC",
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
