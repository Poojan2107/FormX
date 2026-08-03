export { projects, getProject, getProjectNarrative, type Project } from "./projects";
export { services, getService, type Service } from "./services";
export { sectors, getSector, type Sector } from "./sectors";
export {
  blogs,
  getBlog,
  news,
  getNews,
  leadership,
  type BlogPost,
  type NewsItem,
  type TeamMember,
} from "./content";

export const site = {
  name: "FormX Consultants",
  tagline: "Design | Engineering",
  phone: "+91 79 4023 6236",
  email: "contact@formxconsultants.com",
  careerEmail: "career@formxconsultants.com",
  address: "Ahmedabad, Gujarat, India",
  addressDetail: "Ahmedabad, Gujarat, India",
  whatsapp: "918866136236",
  brochurePath: "/brochure/formx.pdf",
  linkedinCompany: "https://www.linkedin.com/company/formx-consultants-llp/",
  hirenLinkedin: "https://www.linkedin.com/in/hiren-j-shah/",
};

export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Architectural Drawings", href: "/services/architectural-design" },
      { label: "Structural Engineering", href: "/services/structural-engineering" },
      { label: "Civil Engineering", href: "/services/civil-engineering" },
      {
        label: "Mechanical Utility Engineering",
        href: "/services/mechanical-utility-engineering",
      },
      { label: "HVAC & Refrigeration", href: "/services/hvac-engineering" },
      { label: "Electrical Engineering", href: "/services/electrical-engineering" },
      { label: "Fire Protection", href: "/services/fire-protection-engineering" },
      { label: "Site Infrastructure", href: "/services/site-infrastructure" },
      { label: "Sustainable Design", href: "/services/sustainable-design" },
      { label: "Project Management", href: "/services/project-management" },
      { label: "All services", href: "/services" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Sectors", href: "/sectors" },
  {
    label: "Insights",
    href: "/knowledge-center",
    children: [
      { label: "Knowledge Center", href: "/knowledge-center" },
      { label: "PEB Load Estimator", href: "/estimator" },
      { label: "News", href: "/news" },
    ],
  },
];

/** Mobile mega-menu groupings */
export const serviceNavGroups = [
  {
    title: "Architecture",
    items: [
      { label: "Architectural Drawings", href: "/services/architectural-design" },
      { label: "Site Infrastructure", href: "/services/site-infrastructure" },
      { label: "Sustainable Design", href: "/services/sustainable-design" },
    ],
  },
  {
    title: "Structure",
    items: [
      { label: "Structural Engineering", href: "/services/structural-engineering" },
      { label: "Civil Engineering", href: "/services/civil-engineering" },
    ],
  },
  {
    title: "MEP",
    items: [
      {
        label: "Mechanical Utilities",
        href: "/services/mechanical-utility-engineering",
      },
      { label: "HVAC & Refrigeration", href: "/services/hvac-engineering" },
      { label: "Electrical Engineering", href: "/services/electrical-engineering" },
      { label: "Fire Protection", href: "/services/fire-protection-engineering" },
    ],
  },
  {
    title: "Delivery",
    items: [
      { label: "Project Management", href: "/services/project-management" },
      { label: "All services", href: "/services" },
    ],
  },
];

export const clients = [
  { name: "Kalpataru Group", tag: "Corporate HQ Developer" },
  { name: "Vir Bhadra Enterprise", tag: "Industrial Manufacturing" },
  { name: "Nutan Vidhyalaya Trust", tag: "Institutional Campus" },
  { name: "Shashwat Empire", tag: "Commercial Real Estate" },
  { name: "Aviniya One", tag: "High-Rise Commercial" },
  { name: "Lavista Group", tag: "Hospitality & Retail" },
];

export const testimonials = [
  {
    name: "Project Director",
    quote:
      "FormX delivered our complete industrial facility GFC drawings with zero inter-discipline clash. Their structural engineering and utility coordination saved us weeks on site.",
    author: "Project Director",
    company: "Industrial Manufacturing Group",
    location: "Gujarat, India",
    role: "Project Director",
  },
  {
    name: "Infrastructure Lead",
    quote:
      "The multidisciplinary coordination under Hiren Shah's leadership ensured statutory compliance and seamless buildability across architecture, structure, and MEP.",
    author: "Infrastructure Lead",
    company: "Commercial Real Estate Firm",
    location: "Ahmedabad",
    role: "Infrastructure Lead",
  },
];

export const faqs = [
  {
    q: "What services does FormX Consultants provide?",
    a: "FormX delivers integrated multidisciplinary packages across 10 disciplines — Architectural Drawings, Site Infrastructure, Sustainable Design, Structural Engineering, Civil Engineering, Mechanical Utility Engineering, HVAC & Refrigeration, Electrical Engineering, Fire Protection, and Project Management.",
  },
  {
    q: "Which industrial sectors does FormX specialize in?",
    a: "We specialize in Pharmaceuticals, Food Processing, Chemical Manufacturing, Textile Plants, Heavy Engineering, Automobile Assembly, and Logistics Warehouses across India.",
  },
  {
    q: "Does FormX handle statutory and building code compliance?",
    a: "Yes. All our architectural and structural engineering packages are 100% compliant with National Building Code (NBC), local IS Codes, and statutory authority guidelines.",
  },
];

export const careerRoles = [
  {
    title: "Senior Structural Engineer",
    type: "Full-Time",
    location: "Ahmedabad",
    experience: "5+ Years",
    dept: "Structural & Civil",
    blurb: "Lead structural engineering design for RCC, PEB steel structures, crane sheds, and heavy equipment foundations.",
    responsibilities: [
      "Prepare structural calculations in STAAD.Pro / ETABS complying with IS 456, IS 800, and IS 1893.",
      "Review structural GA drawings and GFC packages for industrial complexes and PEB sheds.",
      "Coordinate with architecture and MEP leads for clash-free grid alignment.",
    ],
  },
  {
    title: "MEP Coordination Engineer",
    type: "Full-Time",
    location: "Ahmedabad",
    experience: "4+ Years",
    dept: "MEP Utilities",
    blurb: "Drive mechanical, electrical, HVAC, and fire protection engineering coordination across industrial facilities.",
    responsibilities: [
      "Develop single line diagrams (SLDs) and utility trunk routing drawings for factory plants.",
      "Perform HVAC heat load calculations and electrical transformer sizing for greenfield projects.",
      "Interface with promoters and contractors to resolve technical RFIs.",
    ],
  },
  {
    title: "Industrial Architect",
    type: "Full-Time",
    location: "Ahmedabad",
    experience: "3+ Years",
    dept: "Architecture & Planning",
    blurb: "Create operational, NBC-compliant architectural layouts and master planning for manufacturing campuses.",
    responsibilities: [
      "Develop functional floor plans, statutory approval drawings, and elevation details.",
      "Ensure statutory building code compliance and smooth authority approvals.",
      "Coordinate architectural details with structural and MEP discipline teams.",
    ],
  },
];

export const heroLines = [
  "Where Vision Takes Form",
  "Construction-ready GFC under one window",
  "Architecture, structure, civil & MEP coordinated",
];

export const hero = {
  eyebrow: "FORMX Consultants",
  title: "Where Vision Takes Form",
  slogan: "Where Vision Takes Form",
  body: "Our team coordinates architecture, structure, civil and MEP into construction-ready documentation—with technical accountability from concept through site execution.",
  primaryCta: { label: "Discuss your facility", href: "/contact" },
  secondaryCta: { label: "See completed work", href: "/projects" },
  trust: [
    { label: "Coordinated", hint: "Single-window multidisciplinary alignment" },
    { label: "Buildable", hint: "Tender & GFC drawing precision" },
    { label: "Compliant", hint: "Statutory & code compliance" },
  ],
};

/** Sparse trust metrics — shown after scroll, not on first paint */
export const trustMetrics = [
  { value: "25+", label: "Completed Projects" },
  { value: "15 Lakh+", label: "Sq.Ft Designed" },
  { value: "5", label: "States Served" },
];

/** Exact FORMX by Numbers specified in client feedback document */
export const formxNumbers = [
  { value: 25, suffix: "+", label: "Completed Projects", highlight: "Turnkey & Greenfield Facilities" },
  { value: 15, suffix: " Lakh+", label: "Sq.Ft Designed", sublabel: "Industrial & Heavy Engineering Area", isLarge: true },
  { value: 15, suffix: "+", label: "Industrial Clients", highlight: "Promoters & Corporate Leaders" },
  { value: 10, suffix: "+", label: "Steel Structures", highlight: "Heavy PEB & Crane Sheds" },
  { value: 10, suffix: "+", label: "Warehouses", highlight: "Logistics & Supply Chain Hubs" },
  { value: 5, suffix: "", label: "States Served", highlight: "Across Industrial Hubs in India" },
];

export const stats = formxNumbers;

/** Industries Served — image-led home strip (assets from public/assets) */
export const industriesServed = [
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals",
    icon: "Pill",
    description: "Cleanrooms, cGMP utilities, HVAC zoning.",
    slug: "semiconductor",
    asset: "sectors/semiconductor.jpg",
  },
  {
    id: "food-processing",
    title: "Food Processing",
    icon: "Utensils",
    description: "Hygiene layouts, cold chain, steam utilities.",
    slug: "food-processing",
    asset: "sectors/food-processing.jpg",
  },
  {
    id: "chemical",
    title: "Chemical",
    icon: "FlaskConical",
    description: "Hazard zoning, pipe racks, effluent systems.",
    slug: "solar-glass",
    asset: "sectors/solar-glass.jpg",
  },
  {
    id: "textile",
    title: "Textile",
    icon: "Scissors",
    description: "High-bay sheds, humidification, power centers.",
    slug: "wind-blade",
    asset: "sectors/wind-blade.jpg",
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: "Wrench",
    description: "Machine foundations, EOT cranes, ventilation.",
    slug: "industrial-park",
    asset: "projects/vir-bhadra-enterprise.jpg",
  },
  {
    id: "automobile",
    title: "Automobile",
    icon: "Car",
    description: "Assembly logistics, paint utilities, fire safety.",
    slug: "ev-electronics",
    asset: "sectors/semiconductor.jpg",
  },
  {
    id: "warehouses",
    title: "Warehouses & Logistics",
    icon: "Warehouse",
    description: "PEB spans, dock pits, solar-ready roofs.",
    slug: "industrial-park",
    asset: "projects/peb-warehouse.jpg",
  },
];

export const about = {
  eyebrow: "Who we are",
  title: "Bridging design intent with on-site execution",
  paragraphs: [
    "FORMX is a multidisciplinary engineering consultancy. Our team coordinates architecture, structure, civil and MEP into construction-ready documentation—with accountability from concept through site execution.",
  ],
  cta: { label: "About the practice", href: "/about" },
  legacy: "Trusted consulting for complex industrial and commercial assets",
};

export const aboutPage = {
  intro:
    "FORMX coordinates architecture, structure, civil and MEP into construction-ready documentation for industrial promoters, developers and corporate clients across India.",
  tagline: "Shaping form, defining futures",
  philosophy:
    "Engineering drawings are commitments to buildability. We measure success by the safety, schedule integrity and operational performance of the completed facility—not by the volume of sheets issued.",
  whyExists:
    "Too many industrial projects fail at the interface between disciplines. FORMX exists so promoters deal with one accountable practice—from early zoning and structural grids through clash-free GFC and site support.",
  founderVision:
    "Hiren J. Shah built FORMX around a simple rule: stay close to the work. Desk reviews, coordination meetings, site walks and drawing markups are how decisions get made—not through remote handoffs.",
  collaboration:
    "Architecture sets operational flow. Structure carries the loads. Civil opens the site. MEP and fire occupy reserved corridors. Delivery closes RFIs until the built facility matches the package.",
  studioFlow:
    "Projects move through the Ahmedabad studio as coordinated packages: concept and zoning, schematic engineering, tender and GFC issue, then continuous construction-stage support.",
  story: [
    "Founded on the principle that engineering must serve execution, FORMX brings architectural vision, structural engineering, civil infrastructure and building utilities together under a single coordinated framework.",
    "Our focus is continuous accountability—from early site planning and regulatory approvals to complete construction documentation and on-site engineering support.",
  ],
  principles: [
    {
      title: "Our Vision",
      body: "To be the engineering practice industrial promoters trust when capital, schedule and safety cannot be left to fragmented consultants.",
    },
    {
      title: "Our Mission",
      body: "Deliver coordinated, construction-ready documentation across architecture, structure, civil and MEP—with senior accountability through site execution.",
    },
    {
      title: "Our Values",
      body: "Buildability first. Code compliance without compromise. Transparent coordination. Partners who remain present until the facility is commissioned.",
    },
  ],
  values: [
    "Buildability & Precision",
    "Statutory Code Compliance",
    "Single-Window Accountability",
    "Continuous On-Site Support",
  ],
};

export const whyPoints = [
  {
    num: "01",
    title: "Single-window multidisciplinary accountability",
    body: "Architecture, structural engineering, civil design, and utility infrastructure are coordinated under one leadership team—eliminating inter-discipline clashes before drawings reach site.",
  },
  {
    num: "02",
    title: "Construction-ready GFC precision",
    body: "We don't stop at schematic concepts. We deliver comprehensive, clash-free Good-for-Construction (GFC) packages that contractors can execute immediately without ambiguity.",
  },
  {
    num: "03",
    title: "Direct founder & senior leadership involvement",
    body: "Senior practice leads and managing partners remain directly hands-on from initial zoning and structural sizing through site reviews and technical RFI resolutions.",
  },
  {
    num: "04",
    title: "Statutory & code compliance engineered in",
    body: "All structural calculations and architectural layouts strictly conform with IS codes, National Building Code (NBC) standards, and statutory authority requirements.",
  },
  {
    num: "05",
    title: "Practical buildability & value optimization",
    body: "Engineered with practical site realities in mind—optimizing material quantities, structural spans, and construction sequencing to prevent rework and budget overruns.",
  },
];
