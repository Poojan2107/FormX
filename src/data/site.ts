export { projects, getProject, getProjectNarrative, type Project } from "./projects";
export { services, getService, type Service } from "./services";
export { sectors, getSector, type Sector } from "./sectors";
export {
  portfolioIntro,
  portfolioOngoing,
  portfolioSpecialized,
} from "./portfolio";
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
  slogan: "Where Vision Takes Form",
  phone: "+91 81284 44585",
  email: "inquiry@formxconsultants.com",
  careerEmail: "career@formxconsultants.com",
  address: "311, Addor Aspire, University Area, Ahmedabad",
  addressDetail: "311, Addor Aspire, University Area, Ahmedabad, Gujarat 380015",
  whatsapp: "918128444585",
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
  {
    label: "Insights",
    href: "/knowledge-center",
    children: [
      { label: "Knowledge Center", href: "/knowledge-center" },
      { label: "Sectors", href: "/sectors" },
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
    title: "Utilities",
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

export const faqs = [
  {
    q: "What does FormX Consultants deliver?",
    a: "Coordinated, construction-ready documentation across architecture, structure and infrastructure—including utilities and fire where the facility requires them—under one accountable practice.",
  },
  {
    q: "Which industrial sectors does FormX specialize in?",
    a: "We work across pharmaceuticals, food processing, chemical manufacturing, textile plants, heavy engineering, automobile assembly, logistics warehouses and related industrial campuses across India.",
  },
  {
    q: "Does FormX handle statutory and building code compliance?",
    a: "Yes. Architectural and structural packages are prepared to align with the National Building Code (NBC), applicable IS codes, and statutory authority guidelines.",
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
      "Coordinate with architecture and infrastructure leads for clash-free grid alignment.",
    ],
  },
  {
    title: "Utilities Coordination Engineer",
    type: "Full-Time",
    location: "Ahmedabad",
    experience: "4+ Years",
    dept: "Utilities",
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
      "Coordinate architectural details with structural and infrastructure discipline teams.",
    ],
  },
];

export const hero = {
  eyebrow: "FORMX Consultants",
  title: "Where Vision Takes Form",
  slogan: "Where Vision Takes Form",
  body: "Our team coordinates architecture, structure and infrastructure into construction-ready documentation—with technical accountability from concept through site execution.",
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

export const about = {
  eyebrow: "Who we are",
  title: "Bridging design intent with on-site execution",
  paragraphs: [
    "FORMX is a multidisciplinary engineering consultancy. Our team coordinates architecture, structure and infrastructure into construction-ready documentation—with accountability from concept through site execution.",
  ],
  cta: { label: "About the practice", href: "/about" },
  legacy: "Trusted consulting for complex industrial and commercial assets",
};

export const aboutPage = {
  intro:
    "FORMX coordinates architecture, structure and infrastructure into construction-ready documentation for industrial promoters, developers and corporate clients across India.",
  tagline: "Shaping form, defining futures",
  philosophy:
    "Engineering drawings are commitments to buildability. We measure success by the safety, schedule integrity and operational performance of the completed facility—not by the volume of sheets issued.",
  whyExists:
    "Too many industrial projects fail at the interface between disciplines. FORMX exists so promoters deal with one accountable practice—from early zoning and structural grids through clash-free GFC and site support.",
  founderVision:
    "Hiren J. Shah built FORMX around a simple rule: stay close to the work. Desk reviews, coordination meetings, site walks and drawing markups are how decisions get made—not through remote handoffs.",
  collaboration:
    "Architecture sets operational flow. Structure carries the loads. Infrastructure opens the site and carries utilities. Delivery closes RFIs until the built facility matches the package.",
  studioFlow:
    "Projects move through the Ahmedabad studio as coordinated packages: concept and zoning, schematic engineering, tender and GFC issue, then continuous construction-stage support.",
  story: [
    "Founded on the principle that engineering must serve execution, FORMX brings architectural vision, structural engineering and site infrastructure together under a single coordinated framework.",
    "Our focus is continuous accountability—from early site planning and regulatory approvals to complete construction documentation and on-site engineering support.",
  ],
  principles: [
    {
      title: "Our Vision",
      body: "To be the engineering practice industrial promoters trust when capital, schedule and safety cannot be left to fragmented consultants.",
    },
    {
      title: "Our Mission",
      body: "Deliver coordinated, construction-ready documentation across architecture, structure and infrastructure—with senior accountability through site execution.",
    },
    {
      title: "Our Values",
      body: "Buildability first. Code compliance without compromise. Transparent coordination. Partners who remain present until the facility is commissioned.",
    },
  ],
  humanValues: [
    {
      title: "Integrity over presentation",
      body: "We tell clients what the structure and site can safely carry—not what sounds impressive in a pitch deck.",
    },
    {
      title: "People close to the work",
      body: "Partners and leads stay in reviews, meetings and site walks. Decisions are made by engineers who own the drawings.",
    },
    {
      title: "Accountability through execution",
      body: "Our relationship does not end at GFC issue. We stay available for clarifications until the facility matches intent.",
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
