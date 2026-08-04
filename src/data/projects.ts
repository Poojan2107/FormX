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
  assets: {
    cover: string;
    gallery: string[];
    /** Prefer contain so architecture owns the frame without harsh crop */
    frame?: "contain" | "cover";
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
