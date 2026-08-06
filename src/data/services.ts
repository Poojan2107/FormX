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
  gallery?: string[];
};

export const services: Service[] = [
  {
    slug: "architectural-design",
    title: "Architectural Drawings",
    short:
      "Construction-ready architectural drawings — operations and buildability locked before elevations are finished.",
    summary:
      "FORMX prepares architectural drawings so the facility can be built and operated as intended. Layouts respect structural bays and infrastructure routes; statutory sets match what leaves the studio — coordinated with Structure and Infrastructure Before Issue.",
    highlights: [
      "Architectural planning & layout development",
      "Industrial, commercial & institutional building design",
      "Space planning & functional optimization",
      "Statutory & building code compliance",
      "Structural and utility coordination",
    ],
    deliverables: [
      "General Arrangement (GA) Drawings",
      "Floor Plans, Elevations & Sections",
      "Roof Plans & Architectural Details",
      "Door, Window & Finish Schedules",
      "Tender Drawings & Good for Construction (GFC) Packages",
    ],
    process: [
      "Understand operations, movement and site constraints before planning layouts.",
      "Lock zoning and clear heights with Structure and Infrastructure.",
      "Issue coordinated GA, sections and statutory sets that can be built.",
      "Stay in the revision loop through construction clarifications.",
    ],
    relatedSectors: ["industrial-park", "food-processing", "data-center"],
    asset: "services/architecture.jpg",
    gallery: ["services/architecture.jpg", "services/architecture-02.jpg"],
  },
  {
    slug: "site-infrastructure",
    title: "Site Infrastructure",
    short:
      "Site infrastructure that answers circulation, drainage and utilities before the facility is issued.",
    summary:
      "FORMX designs site infrastructure so roads, stormwater, water supply and external works serve real operations — coordinated with Architecture and Structure, sized for statutory requirements and future expansion.",
    highlights: [
      "Site planning & infrastructure layout",
      "Internal roads & pavement design",
      "Stormwater drainage systems",
      "Water supply & utility coordination",
      "External development (ED) works planning",
    ],
    deliverables: [
      "Site Master Plan & Infrastructure Layout",
      "Road & Pavement Drawings",
      "Stormwater Drainage Plans & Profiles",
      "Water Supply & Utility Network Drawings",
      "External Development (ED) & GFC Drawing Packages",
    ],
    process: [
      "Read topography, access and operational demands first.",
      "Lay out circulation and utilities against the architectural grid.",
      "Coordinate with Architecture and Structure before issue.",
      "Support execution with construction-ready packages and clarifications.",
    ],
    relatedSectors: ["industrial-park", "renewable-energy", "food-processing"],
    asset: "services/site.jpg",
    gallery: ["services/site.jpg"],
  },
  {
    slug: "sustainable-design",
    title: "Sustainable & Energy Efficient Design",
    short:
      "Practical efficiency strategies that remain buildable within Architecture, Structure and Infrastructure.",
    summary:
      "FORMX evaluates climate and site conditions, then integrates energy and water strategies that Architecture and Structure can actually carry — without decorative afterthoughts after tender.",
    highlights: [
      "Climate Responsive Design",
      "Passive Cooling & Daylighting Strategies",
      "Building Envelope Optimization",
      "Energy & Water Efficient Planning",
      "Renewable Energy Integration Support",
    ],
    deliverables: [
      "Sustainable Design Recommendations",
      "Energy & Daylight Planning Inputs",
      "Building Envelope Design Guidelines",
      "Water Efficiency Planning",
      "Integrated Sustainability Design Documentation",
    ],
    process: [
      "Evaluate climate, site and operational requirements.",
      "Propose strategies that protect function and budget.",
      "Coordinate Architecture, Structure and Infrastructure so measures are buildable.",
      "Issue documentation that supports long-term performance without inventing answers on site.",
    ],
    relatedSectors: ["renewable-energy", "industrial-park", "data-center"],
    asset: "services/sustainable.jpg",
    gallery: [
      "services/sustainable.jpg",
      "services/sustainable-02.jpg",
      "services/sustainable-03.jpg",
    ],
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    short:
      "Structural systems sized for real loads — detailed so fabrication and cages can be erected without guesswork.",
    summary:
      "FORMX designs RCC and steel frames for industrial, commercial, institutional and residential work. Load paths, PEB/RCC interfaces, seismic and wind detailing are closed with Architecture and Infrastructure before issue.",
    highlights: [
      "RCC & Steel Structural Design",
      "Industrial & Commercial Structures",
      "Structural Analysis & Optimization",
      "Seismic & Wind Resistant Design",
      "Foundation Engineering",
      "Value Engineering & Design Review",
    ],
    deliverables: [
      "Structural Design Calculations",
      "General Arrangement (GA) Drawings",
      "RCC Reinforcement Drawings",
      "Steel Fabrication & Connection Details",
      "Foundation Layouts & Details",
      "BOQ & Material Quantification",
    ],
    process: [
      "Establish loading criteria and applicable codes with the facility brief.",
      "Size systems for safety, efficiency and constructability.",
      "Hold Architecture, Structure and Infrastructure in agreement before drawings leave the studio.",
      "Support fabrication and site with unambiguous details and RFI answers.",
    ],
    relatedSectors: ["renewable-energy", "industrial-park", "food-processing"],
    asset: "services/structural.jpg",
    gallery: [
      "services/structural.jpg",
      "services/structural-02.jpg",
      "services/structural-03.jpg",
    ],
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    short:
      "Civil works that set levels, roads and drainage so the site can actually receive the facility.",
    summary:
      "FORMX delivers grading, roads, drainage and external civil layouts focused on constructability and compliance — coordinated with Architecture and Structure so site reality does not fight the issued set.",
    highlights: [
      "Site Development & Grading",
      "Roads & Pavement Design",
      "Stormwater Drainage Systems",
      "Water Supply & Utility Networks",
      "Earthwork & Site Levels",
      "External Infrastructure Planning",
    ],
    deliverables: [
      "Civil General Arrangement (GA) Drawings",
      "Site Grading & Earthwork Plans",
      "Road & Pavement Design Drawings",
      "Drainage & Utility Layouts",
      "Quantity Estimation & BOQ",
      "Construction Details & Specifications",
    ],
    process: [
      "Assess site conditions and applicable civil standards.",
      "Develop layouts for safety, efficiency and long-term performance.",
      "Hold Architecture, Structure and Infrastructure in agreement before drawings leave the studio.",
      "Deliver construction-ready documentation with engineering support through execution.",
    ],
    relatedSectors: ["industrial-park", "renewable-energy", "wind-blade"],
    asset: "services/civil.jpg",
    gallery: ["services/civil.jpg", "services/civil-02.jpg", "services/civil-03.jpg"],
  },
  {
    slug: "mechanical-utility-engineering",
    title: "Mechanical Utility Engineering",
    short:
      "Mechanical utility systems for reliable plant operations (not a primary public offering).",
    summary:
      "Mechanical utility planning for industrial and commercial facilities. Public FormX scope centres on Architecture, Structure and Infrastructure; this record is retained for legacy URLs only.",
    highlights: [
      "Utility System Planning",
      "HVAC & Ventilation Coordination",
      "Compressed Air Systems",
      "Process & Utility Piping",
      "Fire Protection Utility Networks",
      "Plant Utility Infrastructure",
    ],
    deliverables: [
      "Mechanical Utility Layout Drawings",
      "Utility Routing & Coordination Plans",
      "HVAC & Ventilation Layouts",
      "Piping General Arrangement (GA) Drawings",
      "Equipment Foundation & Installation Details",
      "Utility BOQ & Technical Specifications",
    ],
    process: [
      "Evaluate utility and process demands.",
      "Develop systems for efficiency, maintainability and constructability.",
      "Coordinate with Architecture and Structure before issue.",
      "Deliver construction-ready documentation with technical support.",
    ],
    relatedSectors: ["battery", "solar-cell", "food-processing"],
    asset: "services/mechanical.jpg",
    gallery: ["services/mechanical.jpg", "services/mechanical-02.jpg"],
  },
  {
    slug: "hvac-engineering",
    title: "HVAC & Refrigeration Engineering",
    short:
      "HVAC and refrigeration for comfort and process cooling (not a primary public offering).",
    summary:
      "HVAC and refrigeration design for industrial, commercial and institutional facilities. Public FormX scope centres on Architecture, Structure and Infrastructure; this record is retained for legacy URLs only.",
    highlights: [
      "HVAC System Design",
      "Ventilation & Air Distribution",
      "Refrigeration & Process Cooling",
      "Heating & Cooling Load Calculations",
      "Ducting & Equipment Layouts",
      "Energy Efficient HVAC Solutions",
    ],
    deliverables: [
      "HVAC Design Drawings",
      "Airflow & Load Calculation Reports",
      "Ducting & Piping Layouts",
      "Equipment Selection & Schedules",
      "Refrigeration System Layouts",
      "BOQ & Technical Specifications",
    ],
    process: [
      "Assess occupancy, process and environmental conditions.",
      "Develop systems for comfort, efficiency and reliability.",
      "Coordinate with Architecture and Structure before issue.",
      "Deliver construction-ready documentation through commissioning.",
    ],
    relatedSectors: ["food-processing", "semiconductor", "data-center"],
    asset: "services/hvac.jpg",
    gallery: ["services/hvac.jpg"],
  },
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    short:
      "Electrical power distribution design (not a primary public offering).",
    summary:
      "Electrical systems for industrial, commercial and institutional projects. Public FormX scope centres on Architecture, Structure and Infrastructure; this record is retained for legacy URLs only.",
    highlights: [
      "Power Distribution Systems",
      "HT & LT Electrical Design",
      "Lighting & Small Power Systems",
      "Earthing & Lightning Protection",
      "Cable Routing & Tray Layouts",
      "Backup Power & Energy Management",
    ],
    deliverables: [
      "Electrical General Arrangement (GA) Drawings",
      "Single Line Diagrams (SLD)",
      "Cable Routing & Cable Tray Layouts",
      "Lighting & Power Layouts",
      "Earthing & Lightning Protection Drawings",
      "BOQ & Technical Specifications",
    ],
    process: [
      "Assess loads and applicable electrical standards.",
      "Develop systems for safety, reliability and scalability.",
      "Coordinate with Architecture and Structure before issue.",
      "Deliver construction-ready documentation through execution.",
    ],
    relatedSectors: ["renewable-energy", "data-center", "ev-electronics"],
    asset: "services/electrical.jpg",
    gallery: ["services/electrical.jpg"],
  },
  {
    slug: "fire-protection-engineering",
    title: "Fire Protection Engineering",
    short:
      "Fire protection design to code (not a primary public offering).",
    summary:
      "Fire protection systems for life safety and asset protection. Public FormX scope centres on Architecture, Structure and Infrastructure; this record is retained for legacy URLs only.",
    highlights: [
      "Fire Water Supply Systems",
      "Hydrant & Hose Reel Networks",
      "Automatic Sprinkler Systems",
      "Fire Pump Room Design",
      "Fire Detection & Alarm Coordination",
      "Smoke Management & Life Safety Planning",
    ],
    deliverables: [
      "Fire Protection General Arrangement (GA) Drawings",
      "Hydrant & Sprinkler Layouts",
      "Fire Water Network & Pumping Schematics",
      "Equipment Room Layouts",
      "Hydraulic Design Calculations",
      "BOQ & Technical Specifications",
    ],
    process: [
      "Assess risks, occupancy and applicable fire codes.",
      "Develop detection and suppression strategies.",
      "Coordinate Architecture, Structure and Infrastructure so fire protection is part of the issued set — not an afterthought.",
      "Deliver construction-ready documentation through testing and commissioning.",
    ],
    relatedSectors: ["battery", "data-center", "food-processing"],
    asset: "services/fire.jpg",
    gallery: ["services/fire.jpg"],
  },
  {
    slug: "project-management",
    title: "Project Management & Procurement",
    short:
      "Coordination and procurement oversight so issued packages stay accountable through execution.",
    summary:
      "FORMX manages planning-to-execution coordination for Architecture, Structure and Infrastructure packages — tender support, vendor review and progress oversight until the facility matches what was locked Before Issue.",
    highlights: [
      "Project Planning & Coordination",
      "Design & Construction Management",
      "Procurement Strategy & Vendor Support",
      "Tender Documentation & Bid Evaluation",
      "Cost & Schedule Monitoring",
      "Quality Assurance & Risk Management",
    ],
    deliverables: [
      "Project Execution Plan (PEP)",
      "Tender & Procurement Documentation",
      "Technical Specifications & BOQ",
      "Vendor Evaluation & Recommendation Reports",
      "Progress Monitoring & Coordination Reports",
      "Project Closeout Documentation",
    ],
    process: [
      "Define objectives, timelines and execution strategy with the client brief.",
      "Keep Architecture, Structure and Infrastructure aligned through issue and site support.",
      "Support procurement through technical evaluation and tender coordination.",
      "Monitor progress, quality and risk until closeout.",
    ],
    relatedSectors: ["industrial-park", "renewable-energy", "food-processing"],
    asset: "services/pm.jpg",
    gallery: ["services/pm.jpg"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
