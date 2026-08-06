/** FORMX.pdf portfolio — exact brochure copy + brochure visuals */

export type Project = {
  slug: string;
  sector: string;
  title: string;
  client: string;
  location: string;
  year: string;
  area?: string;
  floors?: string;
  services: string[];
  description: string;
  highlights: string[];
  /** Engineering risk the facility had to answer Before Issue */
  risk?: string;
  /** What FORM× refused — the simpler wrong answer */
  refused?: string;
  assets: {
    cover: string;
    gallery: string[];
    /** Prefer contain so architecture owns the frame without harsh crop */
    frame?: "contain" | "cover";
    /** Homepage plate orientation when image aspect differs by project */
    orientation?: "landscape" | "portrait";
  };
};

export function getProjectNarrative(project: Project) {
  return {
    clientNeed: project.description,
    engineeringThinking: `Services provided: ${project.services.join(", ")}.`,
    coordination:
      project.area || project.floors
        ? [
            project.area ? `Total area: ${project.area}` : null,
            project.floors ? `Floors / scope: ${project.floors}` : null,
          ]
            .filter(Boolean)
            .join(" · ")
        : project.description,
    execution: project.services.join(" · "),
    completedFacility: project.description,
    risk: project.risk ?? "",
    refused: project.refused ?? "",
    lessonsLearned: "",
    relatedSystems: project.services,
  };
}

export const projects: Project[] = [
  {
    slug: "vapi-g2-industrial",
    sector: "Industrial Projects",
    title: "G+2 Industrial Facility",
    client: "Plastic Manufacturing Plant",
    location: "Vapi, Gujarat",
    year: "Completed",
    area: "66,000 sq. ft.",
    floors: "G + 2",
    services: ["Structural Design with machine foundation design"],
    description:
      "The plastic manufacturing plant located in Vapi features a G+2 floor design, with the first floor planned as a removable mezzanine that can be assembled or dismantled according to needs. It showcases an attractive blend of RCC and steel structures, incorporating a steel roof and cladded walls instead of the conventional terrace and side walls.",
    risk: "Operational flexibility on the first floor — without locking the owner into a permanent RCC floor that would fight future process changes.",
    refused:
      "A conventional terrace-and-side-wall RCC box with a fixed first floor. Simpler to draw — harder to adapt when machines and layouts changed.",
    highlights: [
      "Removable mezzanine floor",
      "RCC and steel hybrid structure",
      "Steel roof and cladded walls",
      "Machine foundation design",
    ],
    assets: {
      cover: "projects/brochure/brochure_p3_2.png",
      gallery: [
        "projects/brochure/brochure_p3_1.png",
        "projects/brochure/brochure_p3_2.png",
        "projects/pdf_p20_1.jpeg",
        "projects/pdf_p21_1.jpeg",
      ],
      frame: "contain",
    },
  },
  {
    slug: "kheda-peb-warehouse",
    sector: "Industrial Projects",
    title: "PEB Warehouse",
    client: "PEB Warehouse",
    location: "Kheda, Gujarat",
    year: "Completed",
    area: "90,000 sq. ft.",
    floors: "Mezzanine + Roof",
    services: ["Structural PEB Design"],
    description:
      "The PEB mezzanine structure, which supports the machine load above ground, has been designed using steel columns sized to fit onto the existing small RCC pedestals. Additionally, the design incorporates a double-sloped roof featuring a centrally located pipe rack with appropriate connection details. Fabrication drawings have also been supplied for each member.",
    risk: "Machine loads above ground on steel sized to existing small RCC pedestals — without rebuilding the foundations.",
    refused:
      "Oversized new pedestals and a generic PEB kit that ignored the existing concrete geometry and pipe-rack interface.",
    highlights: [
      "Steel columns on existing RCC pedestals",
      "Double-sloped roof with central pipe rack",
      "Fabrication drawings for each member",
    ],
    assets: {
      cover: "projects/brochure/brochure_p3_4.png",
      gallery: [
        "projects/brochure/brochure_p3_3.png",
        "projects/brochure/brochure_p3_4.png",
        "projects/peb-warehouse.jpg",
        "projects/peb-warehouse-gallery.jpg",
      ],
      frame: "contain",
    },
  },
  {
    slug: "pune-apartment-tower",
    sector: "High-Rise Structures & Residential",
    title: "G+2C+12 Apartment",
    client: "Residential Redevelopment",
    location: "Pune, Maharashtra",
    year: "Completed",
    area: "80,000 sq. ft.",
    floors: "G + 2C + 12",
    services: ["Structural Design"],
    description:
      "The redevelopment design for the G + 2C+12 apartments has been completed with a value engineering approach, emphasizing cost-effectiveness and maximizing parking efficiency.",
    risk: "Redevelopment cost and parking efficiency on a tight urban plot — without erasing structural safety margins.",
    refused:
      "Value engineering that strips frame capacity and parking logic for a cheaper sheet that fails on site.",
    highlights: [
      "Value engineering approach",
      "Cost-effectiveness focus",
      "Maximized parking efficiency",
    ],
    assets: {
      cover: "projects/brochure/brochure_p4_4.png",
      gallery: [
        "projects/brochure/brochure_p4_1.png",
        "projects/brochure/brochure_p4_4.png",
        "projects/pdf_p13_1.jpeg",
        "projects/pdf_p14_1.jpeg",
        "projects/pdf_p15_1.jpeg",
      ],
      frame: "contain",
      orientation: "portrait",
    },
  },
  {
    slug: "surat-residential-bungalow",
    sector: "High-Rise Structures & Residential",
    title: "Residential Bungalow",
    client: "7BHK Bungalow",
    location: "Surat, Gujarat",
    year: "Completed",
    area: "5,300 sq. ft.",
    floors: "G + 2",
    services: ["Structural Design"],
    description:
      "The design of 7BHK bungalow has been carefully planned, considering large cutouts, architectural aesthetics, and spacious slabs covering the rooms without intermediate beams. Additionally, in certain areas, wider beams are incorporated to comply with depth restrictions.",
    risk: "Large architectural cutouts and clear spans — without intermediate beams fighting the room volumes.",
    refused:
      "A dense beam grid that would have been easier to calculate and would have destroyed the architectural openness.",
    highlights: [
      "Large cutouts and architectural aesthetics",
      "Spacious slabs without intermediate beams",
      "Wider beams for depth restrictions",
    ],
    assets: {
      cover: "projects/brochure/brochure_p4_2.png",
      gallery: [
        "projects/brochure/brochure_p4_2.png",
        "projects/brochure/brochure_p4_3.png",
        "projects/jignesh-patel-bungalow.jpg",
        "projects/pdf_p9_1.jpeg",
      ],
      frame: "contain",
      orientation: "landscape",
    },
  },
  {
    slug: "aarti-chemical-storage",
    sector: "Industrial Projects",
    title: "Chemical Storage",
    client: "Aarti Industries",
    location: "Indore, Gujarat",
    year: "Completed",
    area: "8,000 sq. ft.",
    floors: "G + 1",
    services: ["Structural Design with Report"],
    description:
      "The chemical storage and QC room for Aarti Industries has been designed to meet mechanical specifications, including the submission of all structural calculations in accordance with the latest IS codes. Additionally, the adjacent Piperack is supported by the QC building to optimize the overall design cost-effectively.",
    risk: "Mechanical specs and IS-code proof for chemical storage — while integrating an adjacent piperack without duplicate structure cost.",
    refused:
      "Separate QC and piperack frames that would have been simpler to issue and more expensive to build.",
    highlights: [
      "Structural calculations to latest IS codes",
      "Piperack supported by QC building",
      "Cost-effective combined design",
    ],
    assets: {
      cover: "projects/brochure/brochure_p5_3.png",
      gallery: [
        "projects/brochure/brochure_p5_2.png",
        "projects/brochure/brochure_p5_3.png",
        "projects/qc-storage-room.jpg",
        "projects/qc-storage-room-gallery.jpg",
        "projects/pdf_p19_1.jpeg",
      ],
      frame: "contain",
    },
  },
  {
    slug: "valsad-peb-shed-expansion",
    sector: "Industrial Projects",
    title: "Industrial Shed Expansion",
    client: "PEB Shed Extension",
    location: "Valsad, Gujarat",
    year: "Completed",
    area: "50,000 sq. ft.",
    floors: "Extension of PEB Shed",
    services: ["Structural Design with Strengthening"],
    description:
      "An extension of the existing Peb shed has been completed by connecting it to the current structure. The existing design was reviewed in accordance with the latest IS code, and strengthening measures were proposed as needed. By integrating with the existing structure, space was conserved, resulting in a more cost-effective project overall.",
    risk: "Extend an existing PEB without pretending the old frame already met current IS code.",
    refused:
      "A detached new shed that wasted space — or an unchecked connection that ignored strengthening needs.",
    highlights: [
      "Extension connected to existing PEB",
      "IS code review of existing design",
      "Strengthening measures as required",
    ],
    assets: {
      cover: "projects/brochure/brochure_p5_1.png",
      gallery: [
        "projects/brochure/brochure_p5_1.png",
        "projects/vir-bhadra-enterprise.jpg",
        "projects/pdf_p11_1.jpeg",
        "projects/pdf_p12_1.jpeg",
      ],
      frame: "contain",
    },
  },
  {
    slug: "senegal-office-building",
    sector: "Commercial & Institutional",
    title: "Office Building",
    client: "Office Building",
    location: "Senegal, South Africa",
    year: "Completed",
    area: "4,000 sq. ft.",
    floors: "G + 1",
    services: ["Structural Design with Project management"],
    description:
      "This contemporary office project features a robust reinforced frame designed to support a multi-material facade of HPL wood panels and horizontal cladding. A key highlight is the engineered entrance canopy, which utilizes a hybrid column system and a reinforced concrete pedestal to provide a striking, cantilevered architectural statement.",
    risk: "A multi-material facade and cantilevered entrance canopy — carried by a frame that can actually hold them.",
    refused:
      "Treating the canopy as an architectural add-on without hybrid columns and a reinforced pedestal.",
    highlights: [
      "Reinforced frame for multi-material facade",
      "HPL wood panels and horizontal cladding",
      "Cantilevered entrance canopy with hybrid columns",
    ],
    assets: {
      cover: "projects/brochure/brochure_p6_3.png",
      gallery: [
        "projects/brochure/brochure_p6_2.png",
        "projects/brochure/brochure_p6_3.png",
        "projects/brochure/brochure_p6_4.png",
        "projects/pdf_p1_1.jpeg",
        "projects/pdf_p2_1.jpeg",
      ],
      frame: "contain",
    },
  },
  {
    slug: "sorathur-skill-development-center",
    sector: "Commercial & Institutional",
    title: "Skill Development Center",
    client: "Skill Development Center",
    location: "Sorathur, Tamil Nadu",
    year: "Completed",
    area: "28,000 sq. ft.",
    floors: "Ground Floor",
    services: ["Structural design"],
    description:
      "This project demonstrates a sophisticated blend of vernacular materiality and modern structural engineering. Our team optimized the load-bearing capacity of Compressed Stabilized Earth Block (CSEB) masonry to support a high-performance, lightweight canopy.",
    risk: "CSEB masonry capacity for a lightweight canopy — vernacular materiality that still meets modern load demands.",
    refused:
      "Defaulting to concrete everywhere and discarding the earth-block intent for convenience.",
    highlights: [
      "CSEB masonry optimization",
      "Lightweight canopy support",
      "Vernacular materiality with modern engineering",
    ],
    assets: {
      cover: "projects/brochure/brochure_p6_5.png",
      gallery: [
        "projects/brochure/brochure_p6_5.png",
        "projects/brochure/brochure_p6_1.png",
        "projects/nutan-vidhyalaya.jpg",
        "projects/pdf_p6_1.jpeg",
      ],
      frame: "contain",
    },
  },
  // —— PROJECT DETAILS.pdf showcase (named facilities + extracted visuals) ——
  {
    slug: "kalpataru-corporate-house",
    sector: "Commercial & Institutional",
    title: "Kalpataru Corporate House",
    client: "Kalpataru Group",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design", "Architecture coordination"],
    description:
      "Corporate headquarters facility with coordinated architectural intent and structural systems — delivered as construction-ready packages.",
    risk: "Facade and campus structure coordinated so GFC packages leave without unresolved Architecture–Structure interfaces.",
    refused: "Pretty elevations issued ahead of a locked structural grid.",
    highlights: ["Corporate campus structure", "Facade coordination", "Construction-ready GFC"],
    assets: {
      cover: "projects/details/page_01.jpg",
      gallery: [
        "projects/details/page_01.jpg",
        "projects/details/page_02.jpg",
        "projects/details/page_03.jpg",
        "projects/kalpataru-corporate-house.jpg",
      ],
      frame: "cover",
    },
  },
  {
    slug: "vir-bhadra-enterprise",
    sector: "Commercial & Institutional",
    title: "Vir Bhadra Enterprise",
    client: "Vir Bhadra Enterprise",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Commercial facility engineered for operational clarity — structure aligned to architectural planning and site execution.",
    risk: "Operational clarity on a commercial frame — structure that matches planning before site invents answers.",
    refused: "Disconnected consultant packages that force RFIs after fabrication starts.",
    highlights: ["Commercial structure", "Site-ready detailing"],
    assets: {
      cover: "projects/details/page_04.jpg",
      gallery: [
        "projects/details/page_04.jpg",
        "projects/details/page_05.jpg",
        "projects/vir-bhadra-enterprise.jpg",
      ],
      frame: "cover",
    },
  },
  {
    slug: "nutan-vidhyalaya",
    sector: "Commercial & Institutional",
    title: "Nutan Vidhyalaya",
    client: "Nutan Vidhyalaya",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Institutional education facility — structural systems planned for safety, usability and long-term performance.",
    risk: "Safe assembly spaces and long-term institutional performance — not just spanning rooms.",
    refused: "Minimum-code framing that ignores how students and staff actually use the building.",
    highlights: ["Institutional structure", "Safe assembly spaces"],
    assets: {
      cover: "projects/details/page_06.jpg",
      gallery: [
        "projects/details/page_06.jpg",
        "projects/details/page_07.jpg",
        "projects/nutan-vidhyalaya.jpg",
      ],
      frame: "cover",
    },
  },
  {
    slug: "jignesh-patel-bungalow",
    sector: "High-Rise Structures & Residential",
    title: "Jignesh Bhai Patel Bungalow",
    client: "Jigneshbhai Patel",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Private residence with architectural cutouts and generous spans — structure supports intent without intermediate beams where design demands.",
    risk: "Generous spans and cutouts — structure that protects architectural intent instead of fighting it.",
    refused: "Beaming every bay for calculation comfort at the cost of the house.",
    highlights: ["Residential structure", "Long-span slabs"],
    assets: {
      cover: "projects/details/page_08.jpg",
      gallery: [
        "projects/details/page_08.jpg",
        "projects/details/page_09.jpg",
        "projects/jignesh-patel-bungalow.jpg",
      ],
      frame: "cover",
    },
  },
  {
    slug: "sitapur-nutan-upashray",
    sector: "Commercial & Institutional",
    title: "Sitapur Nutan Upashray",
    client: "Sitapur Jain Trust",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Institutional / trust facility with restrained architectural expression and durable structural systems.",
    highlights: ["Institutional campus", "Durable frame"],
    assets: {
      cover: "projects/details/page_10.jpg",
      gallery: ["projects/details/page_10.jpg", "projects/sitapur-nutan-upashray.jpg"],
      frame: "cover",
    },
  },
  {
    slug: "g5-residential-tower",
    sector: "High-Rise Structures & Residential",
    title: "G+5 Residential Tower",
    client: "Private Developer",
    location: "Gujarat, India",
    year: "Completed",
    floors: "G + 5",
    services: ["Structural Design"],
    description:
      "Multi-storey residential tower — load paths, parking efficiency and construction-ready detailing coordinated Before Issue.",
    risk: "Load paths and parking efficiency locked together Before Issue — not after basement excavation.",
    refused: "Frame decisions that ignore parking geometry until the contractor asks.",
    highlights: ["Multi-storey residential", "Parking & frame efficiency"],
    assets: {
      cover: "projects/details/page_11.jpg",
      gallery: [
        "projects/details/page_11.jpg",
        "projects/details/page_12.jpg",
        "projects/g5-residential-tower.jpg",
      ],
      frame: "cover",
    },
  },
  {
    slug: "kesar-heritage",
    sector: "Commercial & Institutional",
    title: "Kesar Heritage",
    client: "Kesar Heritage",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Built facility with coordinated architectural and structural intent for lasting performance.",
    highlights: ["Commercial / mixed-use structure"],
    assets: {
      cover: "projects/details/page_13.jpg",
      gallery: ["projects/details/page_13.jpg", "projects/kesar-heritage.jpg"],
      frame: "cover",
    },
  },
  {
    slug: "swagatam-elenza",
    sector: "High-Rise Structures & Residential",
    title: "Swagatam Elenza",
    client: "Swagatam",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Residential development engineered for buildability, code compliance and site execution support.",
    highlights: ["Residential development"],
    assets: {
      cover: "projects/details/page_14.jpg",
      gallery: ["projects/details/page_14.jpg", "projects/swagatam-elenza.jpg"],
      frame: "cover",
    },
  },
  {
    slug: "shashwat-empire",
    sector: "Commercial & Institutional",
    title: "Shashwat Empire",
    client: "Shashwat Empire",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Commercial facility with structural systems coordinated to architectural planning and construction sequence.",
    highlights: ["Commercial structure"],
    assets: {
      cover: "projects/details/page_15.jpg",
      gallery: ["projects/details/page_15.jpg", "projects/shashwat-empire.jpg"],
      frame: "cover",
    },
  },
  {
    slug: "swagatam-elenza-2",
    sector: "High-Rise Structures & Residential",
    title: "Swagatam Elenza 2",
    client: "Swagatam",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Follow-on residential phase — consistent structural standards with site-ready detailing.",
    highlights: ["Residential phase 2"],
    assets: {
      cover: "projects/details/page_16.jpg",
      gallery: ["projects/details/page_16.jpg", "projects/swagatam-elenza-2.jpg"],
      frame: "cover",
    },
  },
  {
    slug: "aviniya-one",
    sector: "High-Rise Structures & Residential",
    title: "Aviniya One",
    client: "Aviniya",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Residential / mixed facility with clear load paths and coordinated Architecture–Structure interfaces.",
    highlights: ["Residential structure"],
    assets: {
      cover: "projects/details/page_17.jpg",
      gallery: [
        "projects/details/page_17.jpg",
        "projects/details/page_18.jpg",
        "projects/aviniya-one.jpg",
      ],
      frame: "cover",
    },
  },
  {
    slug: "qc-storage-room",
    sector: "Industrial Projects",
    title: "QC Storage Room",
    client: "Industrial Client",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design with Report"],
    description:
      "QC storage engineered to mechanical specifications with IS-code calculations and cost-effective integration.",
    risk: "Mechanical specs met with IS-code calculations — industrial QC that proves itself on paper before site.",
    refused: "Issuing without calculation packages that mechanical and civil can both stand behind.",
    highlights: ["Industrial QC structure", "IS-code calculations"],
    assets: {
      cover: "projects/details/page_19.jpg",
      gallery: ["projects/details/page_19.jpg", "projects/qc-storage-room.jpg"],
      frame: "cover",
    },
  },
  {
    slug: "lavista-cafe",
    sector: "Commercial & Institutional",
    title: "Lavista Cafe",
    client: "Lavista",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Structural Design"],
    description:
      "Hospitality structure — architectural openness supported by precise structural detailing.",
    highlights: ["Hospitality structure"],
    assets: {
      cover: "projects/details/page_22.jpg",
      gallery: ["projects/details/page_22.jpg", "projects/lavista-cafe.jpg"],
      frame: "cover",
    },
  },
  {
    slug: "box-culvert-infrastructure",
    sector: "Infrastructure",
    title: "Box Culvert",
    client: "Infrastructure",
    location: "Gujarat, India",
    year: "Completed",
    services: ["Civil & Structural Design"],
    description:
      "Site infrastructure box culvert — durable civil engineering for drainage and access.",
    highlights: ["Civil infrastructure", "Drainage structure"],
    assets: {
      cover: "projects/details/page_23.jpg",
      gallery: ["projects/details/page_23.jpg", "projects/box-culvert-infrastructure.jpg"],
      frame: "cover",
    },
  },
];

/** Full-bleed atmosphere visuals from FORMX.pdf (non-project pages) */
export const brochureVisuals = {
  heroModel: "projects/brochure/brochure_p1_1.png",
  pillars: "projects/brochure/brochure_p1_2.png",
  specializedBanner: "projects/brochure/brochure_p7_1.png",
  partnersBanner: "projects/brochure/brochure_p9_1.png",
  contactFacade: "projects/brochure/brochure_p10_1.png",
  logoMark: "projects/brochure/brochure_p1_7.png",
};

export const partnerTypes = [
  { name: "Architects", tag: "Design partners" },
  { name: "Developers", tag: "Promoters & owners" },
  { name: "Civil Contractors", tag: "Execution partners" },
  { name: "Industries", tag: "Industrial houses & pharma" },
  { name: "PMC", tag: "Project management" },
  { name: "PEB & Fabricators", tag: "Steel & PEB vendors" },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
