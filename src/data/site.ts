export { projects, getProject, type Project } from "./projects";
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

export const heroLines = [
  "Precise, coordinated construction-ready design",
  "Architecture, structure, civil & MEP under one window",
  "Functionality, buildability & code compliance first",
  "From concept to GFC with continuous site support",
];

export const hero = {
  eyebrow: "FORMX Consultants",
  title: "Precise, coordinated, construction-ready design",
  body: "At FORMX Consultants, we develop precise, coordinated, and construction-ready packages that bridge design intent with on-site execution — with strong emphasis on functionality, buildability, regulatory compliance, and seamless coordination across all engineering disciplines.",
  primaryCta: { label: "Book a consultation", href: "/contact" },
  secondaryCta: { label: "Explore our services", href: "/services" },
  trust: [
    { label: "Coordinated", hint: "All disciplines aligned" },
    { label: "Buildable", hint: "Tender & GFC packages" },
    { label: "Compliant", hint: "Statutory & code-ready" },
  ],
};

export const stats = [
  { value: 10, suffix: "", label: "Core engineering services" },
  { value: 4, suffix: "", label: "Delivery stages — concept to site" },
  { value: 1, suffix: "", label: "Coordinated design window" },
  { value: 100, suffix: "%", label: "Focus on construction readiness" },
];

export const about = {
  eyebrow: "About FORMX",
  title: "Bridging design intent with on-site execution",
  paragraphs: [
    "At FORMX Consultants, we develop precise, coordinated, and construction-ready architectural drawings that bridge design intent with on-site execution. Our drawings are prepared with a strong emphasis on functionality, buildability, regulatory compliance, and seamless coordination across all engineering disciplines, ensuring efficient project delivery from concept to completion.",
  ],
  cta: { label: "Know more", href: "/about" },
  legacy: "Efficient project delivery from concept to completion",
};

export const aboutPage = {
  intro:
    "At FORMX Consultants, we develop precise, coordinated, and construction-ready design packages that bridge design intent with on-site execution — across industrial, commercial, and institutional developments.",
  story: [
    "Our work emphasises functionality, buildability, regulatory compliance, and seamless coordination across all engineering disciplines, ensuring efficient project delivery from concept to completion.",
    "FORMX delivers Architectural Drawings, Site Infrastructure, Sustainable & Energy Efficient Design, Structural Engineering, Civil Engineering, Mechanical Utility Engineering, HVAC & Refrigeration Engineering, Electrical Engineering, Fire Protection Engineering, and Project Management & Procurement — as coordinated, construction-ready documentation with technical support through execution.",
  ],
  pillars: [
    {
      title: "Scope that matches delivery",
      body: "From architectural planning and industrial building design to structural systems, civil works, MEP utilities, fire protection, and procurement — each service is defined by clear scope highlights and typical deliverables.",
    },
    {
      title: "Coordinated across disciplines",
      body: "Architecture, structure, civil, mechanical, electrical, and fire protection are integrated so layouts, junctions, and utility networks stay clash-free before they reach site.",
    },
    {
      title: "Support through execution",
      body: "We provide continuous design support during construction through revisions, technical clarifications, tender documentation, and construction-stage engineering.",
    },
  ],
  values: [
    "Functionality & buildability",
    "Regulatory compliance",
    "Seamless multidisciplinary coordination",
    "Concept to completion delivery",
  ],
};

export const whyPoints = [
  {
    num: "01",
    title: "Precise architectural planning",
    body: "Layouts developed for operational needs, space efficiency, and statutory compliance — ready for structural and MEP integration.",
  },
  {
    num: "02",
    title: "Safe, buildable structures & civil",
    body: "RCC and steel systems, foundations, grading, roads, and drainage engineered for strength, constructability, and long-term performance.",
  },
  {
    num: "03",
    title: "Reliable MEP & fire systems",
    body: "Mechanical utilities, HVAC, electrical, and fire protection designed for operational reliability, energy efficiency, and code compliance.",
  },
  {
    num: "04",
    title: "Site infrastructure that works",
    body: "Roads, stormwater, water supply, and external development planned for connectivity, safety, and future expansion.",
  },
  {
    num: "05",
    title: "Sustainable by design",
    body: "Climate-responsive, energy- and water-efficient strategies embedded without compromising function or project budget.",
  },
  {
    num: "06",
    title: "Project management & procurement",
    body: "Structured coordination, tender support, vendor evaluation, and progress monitoring from planning through closeout.",
  },
];

export const method = {
  eyebrow: "How we deliver",
  title: "Coordinated design from concept to completion",
  body: "Every FORMX engagement follows a clear delivery rhythm: understand requirements and site conditions, develop optimised concepts, prepare coordinated construction documentation across disciplines, and provide continuous technical support during execution.",
};

export const processSteps = [
  {
    num: "1",
    shape: "circle" as const,
    title: "Understand requirements",
    body: "Assess project needs, operational demands, loading criteria, site conditions, and applicable design standards before design begins.",
  },
  {
    num: "2",
    shape: "petal" as const,
    title: "Develop optimised concepts",
    body: "Create efficient layouts and system options focused on safety, functionality, energy performance, and constructability.",
  },
  {
    num: "3",
    shape: "triangle" as const,
    title: "Coordinate across disciplines",
    body: "Integrate architecture, structure, civil, and MEP so junctions, corridors, and clearances are resolved before they reach site.",
  },
  {
    num: "4",
    shape: "square" as const,
    title: "Deliver & support execution",
    body: "Issue tender and GFC packages, support procurement where required, and provide technical clarifications through construction and commissioning.",
  },
];

export const tickerItems = [
  "Architectural Drawings",
  "Site Infrastructure",
  "Sustainable & Energy Efficient Design",
  "Structural Engineering",
  "Civil Engineering",
  "Mechanical Utility Engineering",
  "HVAC & Refrigeration Engineering",
  "Electrical Engineering",
  "Fire Protection Engineering",
  "Project Management & Procurement",
];

export const philosophy = [
  {
    num: "1",
    title: "Functionality first",
    body: "Every layout and system balances operational performance, user comfort, and day-to-day maintainability.",
  },
  {
    num: "2",
    title: "Integrated collaboration",
    body: "Architecture, structure, civil, and MEP stay connected from concept through construction documentation.",
  },
  {
    num: "3",
    title: "Sustainable performance",
    body: "Practical energy, daylight, and water strategies improve long-term facility performance without bloating cost.",
  },
];

export const clients = [
  { name: "Adani", logo: "clients/adani.svg" },
  { name: "Metso", logo: "clients/metso.svg" },
  { name: "Siemens", logo: "clients/siemens.svg" },
  { name: "Voltbek", logo: "clients/voltbek.svg" },
  { name: "Uflex", logo: "clients/uflex.svg" },
  { name: "Cello", logo: "clients/cello.svg" },
  { name: "Hitachi", logo: "clients/hitachi.svg" },
  { name: "Renew", logo: "clients/renew.svg" },
  { name: "MG", logo: "clients/mg.svg" },
  { name: "Alstom", logo: "clients/alstom.svg" },
  { name: "SAEL", logo: "clients/sael.svg" },
  { name: "Wagh Bakri", logo: "clients/waghbakri.svg" },
  { name: "Constantia", logo: "clients/constantia.svg" },
  { name: "McCain", logo: "clients/mccain.svg" },
  { name: "Duravit", logo: "clients/duravit.svg" },
  { name: "Rapiscan", logo: "clients/rapiscan.svg" },
];

export const testimonials = [
  {
    quote:
      "FORMX delivered coordinated architectural and MEP packages that were genuinely construction-ready. Clash issues we usually see during execution were closed in design — which kept our tender and site sequence cleaner.",
    name: "Project Director",
    role: "Greenfield Manufacturing",
    company: "Industrial Client",
  },
  {
    quote:
      "Structural, civil, and site infrastructure came through as one language. GA drawings, drainage, and utility networks were clear enough for contractors to build from without constant reinterpretation.",
    name: "Projects Lead",
    role: "Campus Development",
    company: "Infrastructure Client",
  },
  {
    quote:
      "HVAC, electrical, and fire protection were planned together with architecture. Load calculations, SLDs, and fire layouts lined up — commissioning had far fewer surprises than our previous projects.",
    name: "Plant Engineering Head",
    role: "Process Facility",
    company: "Manufacturing Client",
  },
  {
    quote:
      "Their project management and procurement support kept vendors, consultants, and contractors aligned. We got tender documentation, progress visibility, and technical clarifications when the site needed them.",
    name: "Programme Manager",
    role: "Multi-disciplinary Build",
    company: "Commercial Client",
  },
];

export const faqs = [
  {
    q: "What services does FormX provide?",
    a: "Architectural Drawings, Site Infrastructure, Sustainable & Energy Efficient Design, Structural Engineering, Civil Engineering, Mechanical Utility Engineering, HVAC & Refrigeration Engineering, Electrical Engineering, Fire Protection Engineering, and Project Management & Procurement — delivered as precise, coordinated, construction-ready packages.",
  },
  {
    q: "Do you support projects from concept through construction?",
    a: "Yes. From understanding project requirements and site constraints through coordinated construction drawings, tender and GFC packages, and continuous design support during construction through revisions and technical clarifications.",
  },
  {
    q: "How is FormX different from separate consultants?",
    a: "Our drawings and engineering packages emphasise functionality, buildability, regulatory compliance, and seamless coordination across all engineering disciplines — so design intent bridges cleanly to on-site execution.",
  },
  {
    q: "Which sectors do you typically work in?",
    a: "Industrial, commercial, institutional, and infrastructure developments.",
  },
  {
    q: "How do we start a project?",
    a: "Share facility type, location, capacity intent, and timeline via the contact form, email, or WhatsApp. A senior lead will propose the first alignment workshop.",
  },
];

export const careerRoles = [
  {
    title: "Architect — Industrial & Institutional",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "3–6 years",
    blurb:
      "Experience developing planning layouts, GA drawings, and GFC packages with strong statutory and multidisciplinary coordination.",
    responsibilities: [
      "Develop concept to GFC architectural packages for industrial, commercial, and institutional buildings",
      "Coordinate with structural and MEP disciplines for clash-free documentation",
      "Prepare floor plans, elevations, sections, schedules, and tender drawings",
    ],
  },
  {
    title: "Structural Engineer",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "4–8 years",
    blurb:
      "RCC & steel design for industrial and commercial structures, with constructability-led detailing and site support.",
    responsibilities: [
      "Analyse and design structures, foundations, and connections to applicable standards",
      "Produce GA, reinforcement, and steel fabrication detailing for contractors",
      "Provide construction-stage engineering support and value engineering reviews",
    ],
  },
  {
    title: "MEP Engineer / Coordinator",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "4–7 years",
    blurb:
      "Mechanical utilities, HVAC, electrical, or fire — with proven coordination across architecture and structure.",
    responsibilities: [
      "Develop utility, HVAC, electrical, or fire layouts and technical specifications",
      "Lead corridor and junction coordination to eliminate clashes before site",
      "Support BOQs, vendor data integration, and installation clarifications",
    ],
  },
  {
    title: "CAD / BIM Technician — Architecture / Structure / MEP",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "3+ years",
    blurb:
      "Strong drafting discipline for construction documentation across industrial and infrastructure projects.",
    responsibilities: [
      "Produce accurate drawings from engineer and architect direction",
      "Maintain drawing standards, revisions, and coordinated model outputs",
      "Support tender and GFC packages under senior guidance",
    ],
  },
];
