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
      "Utilities",
    ],
    challenge:
      "Design and engineer a landmark corporate headquarters requiring clear-span executive office spaces, refined facade integration, and coordinated utility ceiling distribution.",
    approach:
      "FormX engineered optimal RCC column grids, integrated hidden beam transitions for open executive floors, and delivered construction-ready GFC packages.",
    outcome:
      "High-efficiency corporate office space delivered with seamless structural stiffness and zero clash rework during utility installation.",
    clientNeed:
      "A corporate headquarters that reads as a landmark externally while delivering clear-span executive floors, refined facade integration and ceiling systems free of discipline clashes.",
    engineeringThinking:
      "Column grids and beam transitions were sized for open executive plates first—then facade and ceiling service zones were reserved so architecture and utilities did not fight the frame.",
    coordination:
      "Architectural layouts, RCC framing and utility ceiling distribution were issued as one coordinated GFC package with shared grid and riser logic.",
    execution:
      "Site RFIs on beam transitions and ceiling penetrations were closed against the issued model, avoiding inter-discipline rework during fit-out.",
    completedFacility:
      "High-efficiency corporate office space with structural stiffness and zero clash rework during utility installation.",
    lessonsLearned:
      "Reserving ceiling and riser corridors before facade detailing protects both schedule and the architectural intent of clear-span floors.",
    relatedSystems: [
      "Architectural Drawings",
      "Structural Engineering",
      "Civil Engineering",
      "Electrical Engineering",
    ],
    highlights: [
      "Clear-span executive floor plates",
      "Seismic RCC structural frame",
      "Coordinated utility ceiling risers",
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
    clientNeed:
      "A manufacturing plant and admin block that must carry heavy crane loads, protect machine foundations and keep external site drainage clear of building pads.",
    engineeringThinking:
      "PEB portal geometry and crane gantry loads drove the structural concept; foundations and isolation pads were sized before site utility corridors were locked.",
    coordination:
      "Structure, civil grading and site infrastructure were coordinated so crane loads, storm drainage and access roads did not conflict at the plot edge.",
    execution:
      "Foundation and PEB interface details were clarified with fabricators and contractors before steel erection—reducing mid-erection RFIs.",
    completedFacility:
      "Robust, buildable industrial facility engineered for long-term operational durability and cost-optimized steel consumption.",
    lessonsLearned:
      "Crane class and machine isolation must be decided before PEB bay spacing is frozen—or the frame pays for late changes.",
    relatedSystems: [
      "Structural Engineering",
      "Civil Engineering",
      "Site Infrastructure",
    ],
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
      "Utilities",
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
      "Vertical utility shaft coordination",
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
      "Utilities",
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
      "FormX engineered diaphragm walls for double basement excavation, heavy RCC transfer slabs, and coordinated utility risers.",
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
      "Fire Protection",
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
    title: "Chemical Storage & QC Building",
    client: "Aarti Industries",
    location: "Indore",
    year: "2023",
    area: "8,000 sq.ft · G+1",
    services: ["Structural Engineering", "Structural Design Report"],
    challenge:
      "Chemical storage and QC room required structural design to mechanical specifications, with an adjacent piperack supported off the QC building to control overall cost.",
    approach:
      "FORMX delivered structural calculations to latest IS codes and integrated the piperack support with the QC building frame for a cost-effective combined solution.",
    outcome:
      "Construction-ready structural package for chemical storage / QC with coordinated piperack support.",
    clientNeed:
      "A chemical storage and QC facility sized to mechanical requirements, with piperack support resolved without a separate expensive structure.",
    engineeringThinking:
      "Supporting the piperack from the QC building reduced foundation and steel duplication while keeping load paths clear in the IS-code calculation package.",
    coordination:
      "Structural framing, piperack reactions and mechanical clearances were coordinated before fabrication.",
    execution:
      "Calculation report and GAs issued for construction with strengthening notes where the existing interface required it.",
    completedFacility:
      "Chemical storage and QC building with cost-optimized piperack support.",
    lessonsLearned:
      "Sharing structure between process support and building frames saves capital when load paths are proven early in calculations.",
    relatedSystems: ["Structural Engineering"],
    highlights: [
      "IS-code structural calculation report",
      "Piperack supported on QC building",
      "8,000 sq.ft G+1 industrial special facility",
    ],
    assets: {
      cover: "projects/pdf_p19_1.jpeg",
      gallery: ["projects/pdf_p19_2.jpeg"],
    },
  },
  {
    slug: "peb-warehouse",
    sector: "Warehousing & Logistics",
    title: "PEB Mezzanine Warehouse",
    client: "Industrial Client",
    location: "Kheda, Gujarat",
    year: "2024",
    area: "90,000 sq.ft · Mezzanine + Roof",
    services: ["Structural PEB Design", "Fabrication Drawings"],
    challenge:
      "PEB mezzanine supporting machine load above ground had to fit steel columns onto existing small RCC pedestals, with a double-sloped roof and central pipe rack.",
    approach:
      "FORMX sized steel columns to the existing pedestals, detailed the double-sloped roof with central pipe rack connections, and issued fabrication drawings for each member.",
    outcome:
      "Buildable PEB mezzanine warehouse package with fabrication-ready member drawings.",
    clientNeed:
      "Reuse existing RCC pedestals while carrying machine loads on a PEB mezzanine and integrating a central pipe rack in the roof.",
    engineeringThinking:
      "Column sizing was driven by pedestal capacity first; roof geometry and pipe rack connections followed so fabrication matched site constraints.",
    coordination:
      "PEB framing, mezzanine machine loads and pipe rack connections were coordinated in one fabrication set.",
    execution:
      "Member-wise fabrication drawings reduced shop ambiguity during PEB production.",
    completedFacility:
      "90,000 sq.ft PEB mezzanine warehouse engineered for machine loads on constrained pedestals.",
    lessonsLearned:
      "Existing pedestal geometry must freeze column base design before PEB member optimization—or fabrication redraws the entire frame.",
    relatedSystems: ["Structural Engineering", "Site Infrastructure"],
    highlights: [
      "90,000 sq.ft PEB mezzanine",
      "Columns sized to existing RCC pedestals",
      "Double-sloped roof with central pipe rack",
      "Member fabrication drawings issued",
    ],
    assets: {
      cover: "projects/pdf_p20_1.jpeg",
      gallery: ["projects/pdf_p20_1.jpeg"],
    },
  },
  {
    slug: "lavista-cafe",
    sector: "Hospitality & Commercial",
    title: "Lavista Cafe & Commercial Space",
    client: "Lavista Group",
    location: "Gujarat, India",
    year: "2023",
    area: "Bespoke Hospitality Destination",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Utilities",
    ],
    challenge:
      "Designing an open-air indoor-outdoor hospitality cafe with steel glass pergolas and exposed structural steel aesthetics.",
    approach:
      "Engineered slim structural steel section frames, integrated ambient lighting conduits, and designed specialized kitchen utility traps.",
    outcome:
      "An inviting, highly popular hospitality venue combining industrial aesthetic charm with flawless utility support.",
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
