/** FormX Real Projects Portfolio — 15 Authentic Projects */

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
    slug: "kalpataru-corporate-house",
    sector: "Commercial & Corporate",
    title: "Kalpataru Corporate House",
    client: "Kalpataru Group",
    location: "Gujarat, India",
    year: "2024–2026",
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
      cover: "projects/kalpataru-corporate-house.jpg",
      gallery: ["projects/kalpataru-corporate-house-gallery.jpg"],
    },
  },
  {
    slug: "vir-bhadra-enterprise",
    sector: "Industrial & Commercial",
    title: "Vir Bhadra Enterprise Industrial Hub",
    client: "Vir Bhadra Enterprise",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "Heavy Industrial & Administration Campus",
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
      cover: "projects/vir-bhadra-enterprise.jpg",
      gallery: ["projects/vir-bhadra-enterprise-gallery.jpg"],
    },
  },
  {
    slug: "nutan-vidhyalaya",
    sector: "Institutional & Education",
    title: "Nutan Vidhyalaya Campus",
    client: "Nutan Education Trust",
    location: "Gujarat, India",
    year: "2024–2026",
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
      "FormX designed modular classroom spans, fire evacuation stairwells, and cost-effective RCC framing optimized for rapid educational construction.",
    outcome:
      "Safe, vibrant educational environment providing maximum daylighting, thermal comfort, and fully compliant fire safety infrastructure.",
    highlights: [
      "Modular classroom spatial planning",
      "Seismic IS 1893 RCC structural design",
      "Dual fire escape stairwells",
      "Natural cross-ventilation orientation",
    ],
    assets: {
      cover: "projects/nutan-vidhyalaya.jpg",
      gallery: ["projects/nutan-vidhyalaya-gallery.jpg"],
    },
  },
  {
    slug: "jignesh-patel-bungalow",
    sector: "Residential Architecture",
    title: "Jigneshbhai Patel Luxury Bungalow",
    client: "Private Client",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "High-End Private Residence",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Sustainable Design",
    ],
    challenge:
      "High-end luxury private bungalow requiring expansive cantilevered slab elements, double-height living spaces, and sleek structural detailing.",
    approach:
      "FormX engineered hidden post-tensioned beam transitions, integrated structural glass facade anchors, and customized interior structural features.",
    outcome:
      "Striking modern luxury villa combining dramatic architectural cantilevers with rock-solid structural integrity.",
    highlights: [
      "Large cantilevered roof & balcony slabs",
      "Double-height living room structural span",
      "Integrated glass curtain wall anchors",
      "Bespoke structural detailing",
    ],
    assets: {
      cover: "projects/jignesh-patel-bungalow.jpg",
      gallery: ["projects/jignesh-patel-bungalow-gallery.jpg"],
    },
  },
  {
    slug: "sitapur-nutan-upashray",
    sector: "Community & Institutional",
    title: "Sitapur Nutan Upashray",
    client: "Sitapur Community Trust",
    location: "Sitapur, Gujarat, India",
    year: "2024–2026",
    area: "Cultural & Community Facility",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Civil Engineering",
    ],
    challenge:
      "Cultural & community facility balancing traditional aesthetic requirements with modern structural safety and large column-free gathering spaces.",
    approach:
      "FormX designed large-span RCC prayer halls, column-free central spaces, and durable civil drainage infrastructure to handle seasonal rains.",
    outcome:
      "Serene, highly functional community hub built for high occupancy gatherings and enduring structural longevity.",
    highlights: [
      "Column-free main prayer hall",
      "Traditional & contemporary architectural synthesis",
      "High-capacity civil drainage",
      "Durable RCC structural system",
    ],
    assets: {
      cover: "projects/sitapur-nutan-upashray.jpg",
      gallery: ["projects/sitapur-nutan-upashray-gallery.jpg"],
    },
  },
  {
    slug: "g5-residential-tower",
    sector: "Multi-Family Residential",
    title: "G+5 Urban Residential Tower",
    client: "Urban Developers",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "G+5 Multi-Family Residential Tower",
    services: [
      "Structural Engineering",
      "Architectural Drawings",
      "Electrical Engineering",
    ],
    challenge:
      "Urban multi-story residential building requiring economical RCC structural frame design and optimized apartment floor plate layouts.",
    approach:
      "FormX executed rapid RCC frame analysis, ductile beam-column joint detailing (IS 13920), and coordinated GFC packages.",
    outcome:
      "High-density urban residential tower delivered with optimized steel reinforcement ratios and quick construction cycle times.",
    highlights: [
      "Optimized RCC frame steel ratio",
      "IS 13920 ductile seismic detailing",
      "Compact apartment layout efficiency",
      "Ground floor stilt parking design",
    ],
    assets: {
      cover: "projects/g5-residential-tower.jpg",
      gallery: ["projects/g5-residential-tower-gallery.jpg"],
    },
  },
  {
    slug: "kesar-heritage",
    sector: "Residential Architecture",
    title: "Kesar Heritage Residential Enclave",
    client: "Kesar Developers",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "Premium Residential Enclave",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "Site Infrastructure",
    ],
    challenge:
      "Heritage-inspired residential development requiring precise architectural detailing and a robust structural foundation system.",
    approach:
      "FormX blended traditional spatial planning with modern seismic structural engineering and efficient underground utility corridors.",
    outcome:
      "Elegant residential community offering timeless architectural character backed by state-of-the-art structural performance.",
    highlights: [
      "Heritage architectural facade detailing",
      "Seismic foundation design",
      "Underground utility & drainage network",
      "Integrated landscaping structural pads",
    ],
    assets: {
      cover: "projects/kesar-heritage.jpg",
      gallery: ["projects/kesar-heritage-gallery.jpg"],
    },
  },
  {
    slug: "swagatam-elenza",
    sector: "Multi-Family Residential",
    title: "Swagatam Elenza Residential Tower",
    client: "Swagatam Realty",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "High-Rise Residential Development",
    services: [
      "Structural Engineering",
      "Architectural Drawings",
      "Civil Engineering",
    ],
    challenge:
      "Premium residential apartment complex requiring basement parking, high structural lateral stiffness, and optimized material usage.",
    approach:
      "FormX executed retaining wall structural design, optimized RCC steel ratios, and issued construction-ready GFC drawings.",
    outcome:
      "Modern residential landmark combining luxury apartment living with efficient structural engineering.",
    highlights: [
      "Deep basement retaining wall design",
      "High lateral stiffness shear walls",
      "Efficient floor plate utilization",
      "GFC documentation discipline",
    ],
    assets: {
      cover: "projects/swagatam-elenza.jpg",
      gallery: ["projects/swagatam-elenza-gallery.jpg"],
    },
  },
  {
    slug: "shashwat-empire",
    sector: "Commercial & Retail",
    title: "Shashwat Empire Commercial Complex",
    client: "Shashwat Group",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "Multi-Tier Commercial & Retail Destination",
    services: [
      "Structural Engineering",
      "Architectural Drawings",
      "MEP & Utilities",
    ],
    challenge:
      "Multi-tier commercial and retail destination requiring flexible retail shop layouts and heavy foot-traffic structural loads.",
    approach:
      "FormX optimized commercial span grids, high-capacity electrical risers, and coordinated facade anchor points.",
    outcome:
      "Thriving commercial hub providing maximum retail frontage flexibility and dependable MEP utility distribution.",
    highlights: [
      "Flexible commercial span layout",
      "High live-load floor slab engineering",
      "Central electrical & HVAC risers",
      "Modern retail facade integration",
    ],
    assets: {
      cover: "projects/shashwat-empire.jpg",
      gallery: ["projects/shashwat-empire-gallery.jpg"],
    },
  },
  {
    slug: "swagatam-elenza-2",
    sector: "Multi-Family Residential",
    title: "Swagatam Elenza — Phase II",
    client: "Swagatam Realty",
    location: "Gujarat, India",
    year: "2025–2026",
    area: "Phase II Multi-Family Development",
    services: [
      "Structural Engineering",
      "Architectural Drawings",
      "Project Management",
    ],
    challenge:
      "Second phase of premium residential development integrated with existing site utility networks and basement infrastructure.",
    approach:
      "FormX delivered seamless structural continuity, expansion joint detailing, and value-engineered foundation designs.",
    outcome:
      "Seamlessly integrated Phase II expansion completed on schedule with zero disruption to Phase I residents.",
    highlights: [
      "Expansion joint structural detailing",
      "Integrated basement utility connections",
      "Value-engineered raft foundations",
      "Phase-wise site logistics support",
    ],
    assets: {
      cover: "projects/swagatam-elenza-2.jpg",
      gallery: ["projects/swagatam-elenza-2-gallery.jpg"],
    },
  },
  {
    slug: "aviniya-one",
    sector: "Commercial & Corporate",
    title: "Aviniya One Commercial Hub",
    client: "Aviniya Group",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "Corporate & Tech Office Tower",
    services: [
      "Architectural Drawings",
      "Structural Engineering",
      "HVAC & Refrigeration",
      "Electrical Engineering",
    ],
    challenge:
      "Modern commercial IT & office tower requiring energy-efficient HVAC zoning, structural glass facade anchoring, and open floor plates.",
    approach:
      "FormX provided coordinated structural-MEP ceiling clearances and structural steel entry canopy engineering.",
    outcome:
      "Premium corporate office destination attracting marquee business tenants with state-of-the-art facility infrastructure.",
    highlights: [
      "Open-plan office floor plates",
      "Structural glass facade anchors",
      "Energy-efficient HVAC zoning",
      "High-speed electrical & data risers",
    ],
    assets: {
      cover: "projects/aviniya-one.jpg",
      gallery: ["projects/aviniya-one-gallery.jpg"],
    },
  },
  {
    slug: "qc-storage-room",
    sector: "Industrial Infrastructure",
    title: "Industrial QC & High-Tech Storage Room",
    client: "Manufacturing Client",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "Controlled Environment Testing Facility",
    services: [
      "Structural Engineering",
      "Civil Engineering",
      "Site Infrastructure",
    ],
    challenge:
      "Controlled climate Quality Control & storage facility requiring strict temperature isolation, vibration-free structural flooring, and dust-tight detailing.",
    approach:
      "FormX designed isolated heavy machinery pad foundations, insulated panel envelope structures, and cleanroom drainage systems.",
    outcome:
      "Precision quality control facility operating with zero industrial vibration interference and strict climate compliance.",
    highlights: [
      "Vibration-isolated machine foundations",
      "Insulated panel structural enclosure",
      "Cleanroom floor slope & drainage",
      "Dust-free joint detailing",
    ],
    assets: {
      cover: "projects/qc-storage-room.jpg",
      gallery: ["projects/qc-storage-room-gallery.jpg"],
    },
  },
  {
    slug: "peb-warehouse",
    sector: "Industrial & Logistics",
    title: "PEB Logistics Warehouse & Industrial Facility",
    client: "Logistics Developer",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "Large-Scale Steel Warehouse Facility",
    services: [
      "PEB Design Support",
      "Structural Engineering",
      "Site Infrastructure",
    ],
    challenge:
      "Large-scale logistics PEB warehouse requiring high-clearance clear spans, heavy forklift flooring slab design, and rapid erection timelines.",
    approach:
      "FormX optimized primary portal frames, secondary purlin spacing, and heavy industrial RCC floor slab reinforcement.",
    outcome:
      "High-throughput logistics warehouse providing maximum clear storage volume and durable industrial flooring.",
    highlights: [
      "Long-span PEB portal steel frame",
      "Heavy forklift floor slab engineering",
      "High-eave clearance volume",
      "Stormwater & dock leveler integration",
    ],
    assets: {
      cover: "projects/peb-warehouse.jpg",
      gallery: ["projects/peb-warehouse-gallery.jpg"],
    },
  },
  {
    slug: "lavista-cafe",
    sector: "Hospitality & Retail",
    title: "Lavista Café & Commercial Venue",
    client: "Lavista Hospitality",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "Hospitality & Alfresco Venue",
    services: [
      "Architectural Drawings",
      "Sustainable Design",
      "Structural Engineering",
    ],
    challenge:
      "Modern hospitality venue requiring artistic steel canopy structures, open alfresco dining layouts, and seamless indoor-outdoor flow.",
    approach:
      "FormX designed lightweight steel structural elements, exposed structural finishes, and integrated ambient lighting channels.",
    outcome:
      "Vibrant, inviting hospitality destination celebrated for its open architectural flow and structural design details.",
    highlights: [
      "Artistic structural steel canopy",
      "Alfresco indoor-outdoor integration",
      "Exposed architectural steelwork",
      "Custom ambient lighting integration",
    ],
    assets: {
      cover: "projects/lavista-cafe.jpg",
      gallery: ["projects/lavista-cafe-gallery.jpg"],
    },
  },
  {
    slug: "box-culvert-infrastructure",
    sector: "Civil Infrastructure",
    title: "Heavy-Duty Box Culvert Infrastructure",
    client: "Infrastructure Authority",
    location: "Gujarat, India",
    year: "2024–2026",
    area: "Stormwater Civil Infrastructure",
    services: [
      "Civil Engineering",
      "Structural Engineering",
      "Site Infrastructure",
    ],
    challenge:
      "Heavy-duty RCC box culvert and stormwater drainage channel engineered for high soil overburden and heavy vehicular traffic loads.",
    approach:
      "FormX performed structural culvert load analysis (IRC loading), rebar detailing, and earth pressure retaining wall engineering.",
    outcome:
      "Durable, high-capacity drainage infrastructure preventing site waterlogging and supporting heavy transport corridors.",
    highlights: [
      "IRC heavy vehicle load analysis",
      "Monolithic RCC box culvert design",
      "Earth pressure retaining walls",
      "High-velocity stormwater hydraulics",
    ],
    assets: {
      cover: "projects/box-culvert-infrastructure.jpg",
      gallery: ["projects/box-culvert-infrastructure-gallery.jpg"],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
