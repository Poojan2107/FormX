/** FormX Real Projects Portfolio — 15 Authentic Projects from PDF */

export type Project = {
  slug: string;
  sector: string;
  title: string;
  client: string;
  location: string;
  year: string;
  area?: string;
  services: string[];
  /** @deprecated prefer clientNeed — kept for migration */
  challenge: string;
  /** @deprecated prefer engineeringThinking */
  approach: string;
  /** @deprecated prefer completedFacility */
  outcome: string;
  highlights: string[];
  /** Engineering case narrative (Wave 4) */
  clientNeed?: string;
  engineeringThinking?: string;
  coordination?: string;
  execution?: string;
  completedFacility?: string;
  lessonsLearned?: string;
  relatedSystems?: string[];
  assets: {
    cover: string;
    gallery: string[];
  };
};

/** Normalize legacy challenge/approach/outcome into engineering narrative */
export function getProjectNarrative(project: Project) {
  return {
    clientNeed: project.clientNeed ?? project.challenge,
    engineeringThinking: project.engineeringThinking ?? project.approach,
    coordination:
      project.coordination ??
      `Architecture, structure and infrastructure were coordinated as one GFC package across: ${project.services.join(", ")}.`,
    execution:
      project.execution ??
      "Construction-stage support covered RFIs, shop drawing reviews and clarification of critical junctions until site work matched the issued drawings.",
    completedFacility: project.completedFacility ?? project.outcome,
    lessonsLearned:
      project.lessonsLearned ??
      "Early multidisciplinary coordination reduces on-site rework. Clear load paths and reserved utility corridors protect both schedule and capital.",
    relatedSystems: project.relatedSystems ?? project.services,
  };
}

export const projects: Project[] = [
  {
    slug: "kalpataru-corporate-house",
    sector: "Commercial & Corporate",
    title: "Kalpataru Corporate House",
    client: "Kalpataru Group",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    area: "Multi-story Corporate Headquarters",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Civil Engineering",
      "MEP & Utilities",
    ],
    challenge:
      "Design and engineer a landmark corporate headquarters requiring clear-span executive office spaces, refined facade integration, and coordinated MEP ceiling distribution.",
    approach:
      "FormX engineered optimal RCC column grids, integrated hidden beam transitions for open executive floors, and delivered construction-ready GFC packages.",
    outcome:
      "High-efficiency corporate office space delivered with seamless structural stiffness and zero clash rework during MEP installation.",
    highlights: [
      "Clear-span executive floor plates",
      "Seismic RCC structural frame",
      "Coordinated MEP ceiling risers",
      "Construction-ready GFC package",
    ],
    assets: {
      cover: "projects/pdf_p1_1.jpeg",
      gallery: ["projects/pdf_p2_1.jpeg", "projects/pdf_p3_1.jpeg"],
    },
  },
  {
    slug: "vir-bhadra-enterprise",
    sector: "Industrial Manufacturing",
    title: "Vir Bhadra Enterprise",
    client: "Vir Bhadra Enterprise",
    location: "Gujarat, India",
    year: "2024",
    area: "Heavy Industrial Manufacturing Facility",
    services: [
      "Structural Engineering",
      "PEB Design Support",
      "Site Infrastructure",
      "Civil Engineering",
    ],
    challenge:
      "Engineering a heavy industrial manufacturing plant and administration office requiring long-span steel/RCC hybrid framing and high overhead crane loading.",
    approach:
      "FormX developed optimized PEB portal frame geometry, foundation load distribution for heavy industrial machinery, and clash-free site utility networks.",
    outcome:
      "Robust, buildable industrial facility engineered for long-term operational durability and cost-optimized steel consumption.",
    highlights: [
      "PEB heavy steel structural framing",
      "Crane gantry beam load engineering",
      "Machinery isolation foundations",
      "Site storm water drainage network",
    ],
    assets: {
      cover: "projects/pdf_p4_1.jpeg",
      gallery: ["projects/pdf_p5_1.jpeg"],
    },
  },
  {
    slug: "nutan-vidhyalaya",
    sector: "Institutional & Campus",
    title: "Nutan Vidhyalaya Campus",
    client: "Nutan Education Trust",
    location: "Gujarat, India",
    year: "2023",
    area: "Multi-wing Educational Campus",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Fire Protection Engineering",
      "Sustainable Design",
    ],
    challenge:
      "Planning a multi-story institutional school campus requiring child-safe layouts, high natural ventilation, and strict IS 1893 seismic compliance.",
    approach:
      "FormX designed high-efficiency classroom clusters, wide emergency egress corridors, and optimized RCC frame structures.",
    outcome:
      "A vibrant, daylight-filled educational campus delivered within statutory timeline with code-ready fire suppression systems.",
    highlights: [
      "NBC compliant egress corridors",
      "High natural daylighting & ventilation",
      "Seismic Zone III RCC frame design",
      "Integrated fire protection hydrants",
    ],
    assets: {
      cover: "projects/pdf_p6_1.jpeg",
      gallery: ["projects/pdf_p7_1.jpeg"],
    },
  },
  {
    slug: "jignesh-bhai-patel-bunglow",
    sector: "Luxury Residential",
    title: "Jignesh Bhai Patel Bunglow",
    client: "Jigneshbhai Patel",
    location: "Gujarat, India",
    year: "2023",
    area: "Bespoke Luxury Villa",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Civil Engineering",
    ],
    challenge:
      "Creating a cantilevered luxury bungalow with wide open glass facades and double-height living spaces without internal column clutter.",
    approach:
      "Engineered post-tensioned RCC beam cantilevers and hidden column frames integrated seamlessly within architectural wall cavities.",
    outcome:
      "Stunning contemporary luxury bungalow featuring sweeping unobstructed views and structural stability.",
    highlights: [
      "Cantilevered upper floor framing",
      "Double-height living space structural grid",
      "Seamless architectural glass framing",
      "Custom landscape civil drainage",
    ],
    assets: {
      cover: "projects/pdf_p9_1.jpeg",
      gallery: ["projects/pdf_p8_2.jpeg"],
    },
  },
  {
    slug: "sitapur-nutan-upashary",
    sector: "Institutional & Cultural",
    title: "Sitapur Nutan Upashary",
    client: "Sitapur Jain Trust",
    location: "Sitapur, Gujarat",
    year: "2023",
    area: "Spiritual & Community Hall",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Site Infrastructure",
    ],
    challenge:
      "Designing a traditional spiritual community hall requiring large column-free prayer halls and high acoustic comfort.",
    approach:
      "FormX planned long-span RCC ribbed slabs, dignified natural stone masonry integration, and efficient utility circulation.",
    outcome:
      "A serene, structurally durable community complex accommodating large gatherings with zero central column obstruction.",
    highlights: [
      "Column-free long-span prayer hall",
      "Natural stone facade integration",
      "Passive ventilation & thermal comfort",
    ],
    assets: {
      cover: "projects/pdf_p10_1.jpeg",
      gallery: ["projects/pdf_p10_2.jpeg"],
    },
  },
  {
    slug: "g5-residential-tower",
    sector: "Multi-Family Residential",
    title: "G+5 Residential Tower",
    client: "Private Developer",
    location: "Gujarat, India",
    year: "2024",
    area: "Mid-Rise Residential Tower",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "MEP & Utilities",
    ],
    challenge:
      "Optimizing structural shear walls and parking layout for a G+5 mid-rise residential building on a compact urban footprint.",
    approach:
      "FormX designed efficient basement/stilt parking grids, standardized apartment floor plans, and riser utility shafts.",
    outcome:
      "Maximised saleable residential floor area with optimized RCC quantity and smooth municipal approval drawings.",
    highlights: [
      "G+5 RCC framed structure",
      "Stilt parking maneuverability layout",
      "Vertical MEP utility shaft coordination",
    ],
    assets: {
      cover: "projects/pdf_p11_1.jpeg",
      gallery: [
        "projects/pdf_p11_2.jpeg",
        "projects/pdf_p12_1.jpeg",
        "projects/pdf_p12_2.jpeg",
      ],
    },
  },
  {
    slug: "kesar-heritage",
    sector: "Residential & Heritage",
    title: "Kesar Heritage",
    client: "Kesar Group",
    location: "Gujarat, India",
    year: "2023",
    area: "Heritage Multi-Family Development",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Civil Engineering",
    ],
    challenge:
      "Designing a modern residential development featuring classic heritage architectural accents and high structural safety.",
    approach:
      "Integrated ornate facade stone cladding details with modern RCC moment-resisting frames and waterproofing systems.",
    outcome:
      "An elegant residential complex blending timeless architectural aesthetics with contemporary structural durability.",
    highlights: [
      "Heritage facade architectural detailing",
      "Seismic compliant moment frames",
      "Comprehensive basement waterproofing",
    ],
    assets: {
      cover: "projects/pdf_p13_1.jpeg",
      gallery: ["projects/pdf_p13_2.jpeg"],
    },
  },
  {
    slug: "swagatam-elenza",
    sector: "Commercial & Retail",
    title: "Swagatam Elenza",
    client: "Swagatam Group",
    location: "Gujarat, India",
    year: "2024",
    area: "Mixed-Use Commercial & Retail Hub",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "MEP & Utilities",
    ],
    challenge:
      "Engineering a prominent commercial building requiring high-visibility retail storefronts and flexible office floor plates.",
    approach:
      "Designed wide-span structural bays, high-capacity electrical substations, and integrated glass curtain wall details.",
    outcome:
      "A vibrant commercial landmark attracting high-value retail tenants with zero structural obstructions.",
    highlights: [
      "Wide-span retail shopfront grids",
      "Heavy floor live load rating",
      "Integrated glass curtain wall framing",
    ],
    assets: {
      cover: "projects/pdf_p14_1.jpeg",
      gallery: ["projects/pdf_p14_2.jpeg"],
    },
  },
  {
    slug: "shashwat-empire",
    sector: "Commercial & Corporate",
    title: "Shashwat Empire",
    client: "Shashwat Developers",
    location: "Gujarat, India",
    year: "2024",
    area: "High-Density Commercial Complex",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "HVAC & Utilities",
    ],
    challenge:
      "High-density commercial office development requiring centralized HVAC chiller corridors and double-basement parking.",
    approach:
      "FormX engineered diaphragm walls for double basement excavation, heavy RCC transfer slabs, and coordinated MEP risers.",
    outcome:
      "High-performance commercial tower delivered with robust foundation engineering and clash-free mechanical plants.",
    highlights: [
      "Double basement diaphragm wall engineering",
      "Central HVAC utility corridor integration",
      "High-speed elevator core RCC framing",
    ],
    assets: {
      cover: "projects/pdf_p15_1.jpeg",
      gallery: ["projects/pdf_p15_2.jpeg"],
    },
  },
  {
    slug: "swagatam-elenza-2",
    sector: "Commercial & Retail",
    title: "Swagatam Elenza - Phase 2",
    client: "Swagatam Group",
    location: "Gujarat, India",
    year: "2024",
    area: "Expansion Commercial Complex",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Civil Engineering",
    ],
    challenge:
      "Seamless expansion phase connecting directly to existing commercial structures while maintaining uninterrupted business operations.",
    approach:
      "Designed expansion joints, structural bridge connections, and unified utility infrastructure.",
    outcome:
      "Flawlessly executed Phase 2 commercial development expanding total commercial floor space by 80,000 sq.ft.",
    highlights: [
      "Seismic expansion joint engineering",
      "Pedestrian sky-bridge structural link",
      "Unified utility network distribution",
    ],
    assets: {
      cover: "projects/pdf_p16_1.jpeg",
      gallery: ["projects/pdf_p16_2.jpeg"],
    },
  },
  {
    slug: "aviniya-one",
    sector: "High-Rise Commercial",
    title: "Aviniya One",
    client: "Aviniya Group",
    location: "Gujarat, India",
    year: "2024",
    area: "Iconic High-Rise Commercial Tower",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "MEP & Fire Protection",
    ],
    challenge:
      "Engineering an iconic high-rise commercial tower requiring high wind load stability and automated fire suppression systems.",
    approach:
      "Conducted ETABS 3D wind dynamic analysis, designed core shear wall systems, and engineered pressurized fire escape stairwells.",
    outcome:
      "A flagship high-rise commercial tower establishing a premium architectural presence with full NBC safety certification.",
    highlights: [
      "ETABS 3D wind & seismic dynamic analysis",
      "Central RCC shear wall core",
      "Pressurized fire egress stairwells",
    ],
    assets: {
      cover: "projects/pdf_p17_1.jpeg",
      gallery: [
        "projects/pdf_p17_2.jpeg",
        "projects/pdf_p18_1.jpeg",
        "projects/pdf_p18_2.jpeg",
      ],
    },
  },
  {
    slug: "qc-storage-room",
    sector: "Industrial Special Projects",
    title: "QC Storage Room & Facility",
    client: "Industrial Client",
    location: "Gujarat, India",
    year: "2023",
    area: "Controlled Quality Storage Facility",
    services: [
      "Structural Engineering",
      "HVAC & Refrigeration",
      "Civil Engineering",
    ],
    challenge:
      "Designing a precision climate-controlled quality testing and chemical storage vault with strict temperature/humidity control.",
    approach:
      "FormX engineered insulated sandwich panel walls, precision HVAC duct distribution, and chemical spill containment flooring.",
    outcome:
      "State-of-the-art QC storage facility meeting zero-tolerance environmental conditions.",
    highlights: [
      "Precision climate-controlled HVAC zoning",
      "Epoxy chemical spill containment slab",
      "Insulated cleanroom panel enclosures",
    ],
    assets: {
      cover: "projects/pdf_p19_1.jpeg",
      gallery: ["projects/pdf_p19_2.jpeg"],
    },
  },
  {
    slug: "peb-warehouse",
    sector: "Warehousing & Logistics",
    title: "PEB Industrial Logistics Warehouse",
    client: "Logistics Developer",
    location: "Gujarat, India",
    year: "2024",
    area: "Large-Span Logistics Warehouse",
    services: [
      "PEB Design Support",
      "Structural Engineering",
      "Site Infrastructure",
    ],
    challenge:
      "Designing a 120,000 sq.ft clear-span PEB logistics warehouse with FM2 laser-screed flooring for high-reach forklifts.",
    approach:
      "FormX optimized tapered steel portal frames, engineered heavy-duty floor slabs, and planned wide-apron truck loading bays.",
    outcome:
      "High-throughput PEB logistics warehouse engineered for rapid construction and minimum steel weight per sq.ft.",
    highlights: [
      "120,000 sq.ft clear-span PEB structural framing",
      "FM2 high-flatness concrete floor slab",
      "Dock leveller loading bay civil detailing",
    ],
    assets: {
      cover: "projects/pdf_p20_1.jpeg",
      gallery: ["projects/pdf_p21_1.jpeg"],
    },
  },
  {
    slug: "lavista-cafe",
    sector: "Hospitality & Commercial",
    title: "Lavista Café & Commercial Space",
    client: "Lavista Group",
    location: "Gujarat, India",
    year: "2023",
    area: "Bespoke Hospitality Destination",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "MEP Utilities",
    ],
    challenge:
      "Designing an open-air indoor-outdoor hospitality cafe with steel glass pergolas and exposed structural steel aesthetics.",
    approach:
      "Engineered slim structural steel section frames, integrated ambient lighting conduits, and designed specialized kitchen utility traps.",
    outcome:
      "An inviting, highly popular hospitality venue combining industrial aesthetic charm with flawless MEP support.",
    highlights: [
      "Exposed structural steel glass pergola",
      "Indoor-outdoor seamlessly integrated layout",
      "Commercial kitchen grease & drainage traps",
    ],
    assets: {
      cover: "projects/pdf_p22_2.jpeg",
      gallery: ["projects/pdf_p22_1.png"],
    },
  },
  {
    slug: "box-culvert",
    sector: "Civil Infrastructure",
    title: "Heavy Precast Box Culvert Infrastructure",
    client: "Infrastructure Client",
    location: "Gujarat, India",
    year: "2023",
    area: "Industrial Drainage Infrastructure",
    services: [
      "Civil Engineering",
      "Structural Engineering",
      "Site Infrastructure",
    ],
    challenge:
      "Engineering a heavy-load IRC Class AA precast RCC box culvert to carry heavy industrial multi-axle truck transport over stormwater channels.",
    approach:
      "FormX calculated soil-structure interaction, designed reinforced concrete box sections for heavy wheel impact loads, and detailed expansion joints.",
    outcome:
      "Robust civil infrastructure culvert carrying heavy industrial traffic safely without settlement or cracking.",
    highlights: [
      "IRC Class AA heavy wheel load structural design",
      "Monolithic precast RCC box culvert sections",
      "Scour-resistant wing wall civil engineering",
    ],
    assets: {
      cover: "projects/pdf_p23_1.jpeg",
      gallery: ["projects/pdf_p23_1.jpeg"],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
