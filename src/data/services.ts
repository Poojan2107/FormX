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
      "Precise, coordinated, and construction-ready architectural drawings that bridge design intent with on-site execution.",
    summary:
      "At FORMX Consultants, we develop precise, coordinated, and construction-ready architectural drawings that bridge design intent with on-site execution. Our drawings are prepared with a strong emphasis on functionality, buildability, regulatory compliance, and seamless coordination across all engineering disciplines, ensuring efficient project delivery from concept to completion.",
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
      "Understanding project requirements, operational needs, and site constraints.",
      "Developing efficient architectural layouts and design concepts.",
      "Preparing coordinated construction drawings integrated with structural and utility disciplines.",
      "Providing continuous design support during construction through revisions and technical clarifications.",
    ],
    relatedSectors: ["industrial-park", "food-processing", "data-center"],
    asset: "services/architecture.jpg",
    gallery: ["services/architecture.jpg", "services/architecture-02.jpg"],
  },
  {
    slug: "site-infrastructure",
    title: "Site Infrastructure",
    short:
      "Integrated site infrastructure designs that ensure efficient connectivity, safe movement, and reliable utility networks.",
    summary:
      "We deliver integrated site infrastructure designs that ensure efficient connectivity, safe movement, and reliable utility networks across industrial, commercial, and institutional developments. Our solutions are developed to optimize site functionality while meeting statutory requirements, operational demands, and future expansion needs.",
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
      "Study site conditions, topography, and project requirements.",
      "Develop optimized infrastructure layouts for circulation and utilities.",
      "Coordinate with architectural, structural, utilities, and landscape disciplines.",
      "Deliver construction-ready drawings with ongoing technical support during execution.",
    ],
    relatedSectors: ["industrial-park", "renewable-energy", "food-processing"],
    asset: "services/site.jpg",
    gallery: ["services/site.jpg"],
  },
  {
    slug: "sustainable-design",
    title: "Sustainable & Energy Efficient Design",
    short:
      "Practical strategies that improve energy efficiency without compromising functionality or project budget.",
    summary:
      "Evaluate climate, site conditions, and project requirements to identify sustainable design opportunities — then develop practical strategies that improve energy efficiency without compromising functionality or project budget, coordinated across architecture, structure and infrastructure.",
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
      "Evaluate climate, site conditions, and project requirements to identify sustainable design opportunities.",
      "Develop practical strategies that improve energy efficiency without compromising functionality or project budget.",
      "Coordinate architecture, structure and infrastructure to seamlessly integrate sustainable design solutions.",
      "Deliver technically coordinated documentation that supports long-term performance, operational efficiency, and future-ready infrastructure.",
    ],
    relatedSectors: ["renewable-energy", "industrial-park", "data-center"],
    asset: "services/sustainable.jpg",
    gallery: ["services/sustainable.jpg", "services/sustainable-02.jpg", "services/sustainable-03.jpg"],
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    short:
      "Safe, efficient, and buildable structural systems for strength, stability, and long-term performance.",
    summary:
      "Designing safe, efficient, and buildable structural systems that ensure strength, stability, and long-term performance across industrial, commercial, institutional, and residential projects.",
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
      "Understand project requirements, loading criteria, and applicable design standards.",
      "Develop optimized structural systems focused on safety, efficiency, and constructability.",
      "Coordinate with architecture, utilities and infrastructure disciplines for seamless project integration.",
      "Deliver complete design documentation with construction-stage engineering support.",
    ],
    relatedSectors: ["renewable-energy", "industrial-park", "food-processing"],
    asset: "services/structural.jpg",
    gallery: ["services/structural.jpg", "services/structural-02.jpg", "services/structural-03.jpg"],
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    short:
      "Practical civil solutions that prioritize functionality, durability, constructability, and compliance.",
    summary:
      "Delivering practical and technically sound civil engineering solutions that establish a strong foundation for successful project execution. Our designs prioritize functionality, durability, constructability, and compliance across industrial, commercial, institutional, and infrastructure developments.",
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
      "Assess site conditions, project requirements, and applicable engineering standards.",
      "Develop optimized civil infrastructure layouts focused on safety, efficiency, and long-term performance.",
      "Coordinate seamlessly with architecture, structure and infrastructure for integrated project delivery.",
      "Deliver construction-ready documentation with engineering support throughout execution.",
    ],
    relatedSectors: ["industrial-park", "renewable-energy", "wind-blade"],
    asset: "services/civil.jpg",
    gallery: ["services/civil.jpg", "services/civil-02.jpg", "services/civil-03.jpg"],
  },
  {
    slug: "mechanical-utility-engineering",
    title: "Mechanical Utility Engineering",
    short:
      "Reliable mechanical utility systems for seamless plant operations and long-term operational reliability.",
    summary:
      "Designing reliable and efficient mechanical utility systems that ensure seamless plant operations, optimized performance, and long-term operational reliability for industrial and commercial developments.",
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
      "Evaluate utility requirements, process needs, and project-specific operational demands.",
      "Develop optimized mechanical utility systems focused on efficiency, maintainability, and constructability.",
      "Coordinate mechanical services with architectural, structural, civil, and electrical disciplines to eliminate clashes and improve execution.",
      "Deliver fully coordinated construction-ready documentation with technical support throughout project implementation.",
    ],
    relatedSectors: ["battery", "solar-cell", "food-processing"],
    asset: "services/mechanical.jpg",
    gallery: ["services/mechanical.jpg", "services/mechanical-02.jpg"],
  },
  {
    slug: "hvac-engineering",
    title: "HVAC & Refrigeration Engineering",
    short:
      "Efficient HVAC and refrigeration for indoor comfort, process cooling, and operational performance.",
    summary:
      "Designing efficient, reliable, and energy-conscious HVAC and refrigeration systems that provide optimal indoor comfort, process cooling, and operational performance for industrial, commercial, and institutional facilities.",
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
      "Assess project requirements, occupancy, process needs, and environmental conditions.",
      "Develop optimized HVAC and refrigeration systems focused on comfort, efficiency, reliability, and sustainability.",
      "Coordinate with architectural, structural, electrical, and mechanical disciplines for seamless system integration.",
      "Deliver construction-ready documentation with technical support through installation, commissioning, and project execution.",
    ],
    relatedSectors: ["food-processing", "semiconductor", "data-center"],
    asset: "services/hvac.jpg",
    gallery: ["services/hvac.jpg"],
  },
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    short:
      "Safe, reliable electrical systems for uninterrupted power distribution and long-term performance.",
    summary:
      "Designing safe, reliable, and energy-efficient electrical systems that ensure uninterrupted power distribution, operational safety, and long-term performance for industrial, commercial, institutional, and infrastructure projects.",
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
      "Assess project load requirements, operational needs, and applicable electrical standards.",
      "Develop optimized electrical systems focused on safety, reliability, energy efficiency, and future scalability.",
      "Coordinate with architectural, structural, civil, mechanical, and utility disciplines to ensure seamless system integration.",
      "Deliver fully coordinated construction-ready documentation with engineering support throughout project execution.",
    ],
    relatedSectors: ["renewable-energy", "data-center", "ev-electronics"],
    asset: "services/electrical.jpg",
    gallery: ["services/electrical.jpg"],
  },
  {
    slug: "fire-protection-engineering",
    title: "Fire Protection Engineering",
    short:
      "Comprehensive fire protection that safeguards people, assets, and infrastructure to code.",
    summary:
      "Designing comprehensive fire protection systems that safeguard people, assets, and infrastructure while ensuring full compliance with national and international fire safety standards.",
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
      "Assess project risks, occupancy requirements, and applicable fire safety codes.",
      "Develop reliable fire protection systems that ensure rapid detection, suppression, and emergency response.",
      "Coordinate seamlessly with architecture, structure, civil and electrical disciplines for fully integrated fire protection solutions.",
      "Deliver construction-ready documentation with technical support through installation, testing, and commissioning.",
    ],
    relatedSectors: ["battery", "data-center", "food-processing"],
    asset: "services/fire.jpg",
    gallery: ["services/fire.jpg"],
  },
  {
    slug: "project-management",
    title: "Project Management & Procurement",
    short:
      "Structured coordination, technical oversight, and procurement support from planning to execution.",
    summary:
      "Managing projects from planning to execution through structured coordination, technical oversight, and strategic procurement support to ensure timely delivery, cost efficiency, and quality compliance.",
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
      "Define project objectives, timelines, budgets, and execution strategies aligned with client requirements.",
      "Coordinate multidisciplinary teams, consultants, contractors, and suppliers to maintain seamless project delivery.",
      "Support procurement through technical evaluations, tender management, vendor selection, and contract coordination.",
      "Monitor progress, quality, cost, and project risks to ensure successful completion within scope, schedule, and budget.",
    ],
    relatedSectors: ["industrial-park", "renewable-energy", "food-processing"],
    asset: "services/pm.jpg",
    gallery: ["services/pm.jpg"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
