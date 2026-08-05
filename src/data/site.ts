export { projects, getProject, getProjectNarrative, type Project } from "./projects";
export { services, getService, type Service } from "./services";
export { sectors, getSector, type Sector } from "./sectors";
export {
  portfolioIntro,
  portfolioPillars,
  portfolioServices,
  portfolioServicesNote,
  portfolioClosing,
  portfolioOngoing,
  portfolioSpecialized,
  portfolioContactNote,
} from "./portfolio";
export {
  brochureVisuals,
  partnerTypes,
  partnerTypes as clients,
} from "./projects";
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
export {
  formxMethod,
  formxEvidence,
  vapiCaseStudy,
  hirenJudgement,
} from "./method";

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
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Architectural Drawings", href: "/services/architectural-design" },
      { label: "Structural Engineering", href: "/services/structural-engineering" },
      { label: "Civil Engineering", href: "/services/civil-engineering" },
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
      { label: "Insights", href: "/knowledge-center" },
      { label: "PEB Load Estimator", href: "/estimator" },
    ],
  },
];

/** Mobile mega-menu — Architecture · Structure · Infrastructure only (no MEP) */
export const serviceNavGroups = [
  {
    title: "Architecture",
    items: [
      { label: "Architectural Drawings", href: "/services/architectural-design" },
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
    title: "Infrastructure",
    items: [
      { label: "Site Infrastructure", href: "/services/site-infrastructure" },
      { label: "Project Management", href: "/services/project-management" },
      { label: "All services", href: "/services" },
    ],
  },
];

export const faqs = [
  {
    q: "What does FormX Consultants deliver?",
    a: "Structural engineering and design solutions across high-rise & residential, industrial projects, institutional & commercial buildings, and strengthening & retrofitting—plus quantity estimation, construction support, and coordination for seamless execution.",
  },
  {
    q: "Who do you work with?",
    a: "Our clients range from industrial houses and pharma companies to architects, contractors, and private homeowners.",
  },
  {
    q: "How can we start a project discussion?",
    a: "Write to inquiry@formxconsultants.com or call +91 81284 44585. Studio: 311, Addor Aspire, University Area, Ahmedabad, Gujarat 380015.",
  },
];

/** Open roles are not listed until approved — career page invites email applications */
export const careerRoles: {
  title: string;
  type: string;
  location: string;
  experience: string;
  dept: string;
  blurb: string;
  responsibilities: string[];
}[] = [];

export const hero = {
  eyebrow: "FORMX Consultants",
  title: "Where Vision Takes Form",
  slogan: "Where Vision Takes Form",
  body: "Architecture, Structure and Infrastructure — coordinated Before × Issue so facilities reach site with fewer surprises.",
  primaryCta: { label: "Discuss your facility", href: "/contact" },
  secondaryCta: { label: "See completed work", href: "/projects" },
  trust: [
    { label: "Structural Integrity", hint: "Design safe, reliable Structural systems" },
    { label: "Functional Design", hint: "Create spaces that meet user needs" },
    { label: "Technical Expertise", hint: "Apply engineering principles and best practices" },
  ],
};

/** Sparse delivery metrics from founder review comments */
export const trustMetrics = [
  { value: "25+", label: "Completed Projects" },
  { value: "15 Lakh+", label: "Sq.Ft Designed" },
  { value: "5", label: "States Served" },
];

export const about = {
  eyebrow: "About Us",
  title: "Where Vision Takes Form",
  paragraphs: [
    "FORM× coordinates Architecture, Structure and Infrastructure before drawings leave the studio. We size load paths, lock interfaces and issue packages contractors can build — then stay accountable through site execution. Reviews stay with engineers who own the sheets.",
  ],
  industriesLine:
    "Pharmaceuticals · Food Processing · Chemical · Textile · Engineering · Automobile · Warehouses",
  cta: { label: "About Us", href: "/about" },
  legacy: "Shaping form, defining futures",
};

export const aboutPage = {
  intro:
    "FORM× coordinates Architecture, Structure and Infrastructure before drawings leave the studio. We size load paths, lock interfaces and issue packages contractors can build — then stay accountable through site execution. Reviews stay with engineers who own the sheets.",
  tagline: "Shaping form, defining futures",
  philosophy:
    "Every unresolved coordination issue eventually appears on site. Before × Issue means disciplines answer each other first — sheet volume is not success.",
  whyExists:
    "High-rise and residential, industrial facilities, institutional and commercial buildings, strengthening and retrofitting — always with Architecture, Structure and Infrastructure moving together.",
  founderVision:
    "Hiren J. Shah, Founder & Managing Partner — Structural Engineer, Grade 1 (AMC / BMC). Stay close to the work: desk reviews, coordination meetings, site walks and drawing markups.",
  collaboration:
    "Structural design, architecture planning and site execution — with quantity estimation, construction support and coordination for seamless delivery. Our clients range from industrial houses and pharma companies to architects, contractors, and private homeowners.",
  studioFlow:
    "Projects move through the Ahmedabad studio with Architecture, Structure and Infrastructure — from concept through site execution.",
  story: [
    "FORM× coordinates Architecture, Structure and Infrastructure before drawings leave the studio.",
    "We size load paths, lock interfaces and issue packages contractors can build — then stay accountable through site execution.",
  ],
  principles: [
    {
      title: "Our Vision",
      body: "Every engineering decision should reduce construction uncertainty — safety, efficiency, and alignment with how the facility will actually be used.",
    },
    {
      title: "Our Mission",
      body: "Drawings should answer questions before construction begins. Architecture, Structure and Infrastructure — from concept through site execution.",
    },
    {
      title: "Our Values",
      body: "Human-centric approach. Integrated collaboration. People close to the work. Reliable outcomes — behaviours in every review, not words on a wall.",
    },
  ],
  humanValues: [
    {
      title: "Human-centric approach",
      body: "Every design balances how people use the facility with structural safety, process efficiency and long-term usability.",
    },
    {
      title: "Integrated collaboration",
      body: "Architecture, Structure and Infrastructure move together from concept to site — clear coordination, not disconnected consultants.",
    },
    {
      title: "People close to the work",
      body: "Partners stay in reviews, meetings and site walks. Decisions are made by engineers who own the drawings.",
    },
    {
      title: "Reliable outcomes",
      body: "We stay accountable through execution — clarifications, reviews and practical support until the facility matches intent.",
    },
  ],
  collaborationPoints: [
    "Cross-functional expertise",
    "Clear coordination",
    "Integrated workflows",
    "Reliable outcomes",
  ],
  values: [
    "Human-centric approach",
    "Integrated collaboration",
    "People close to the work",
    "Reliable outcomes",
  ],
};

export const whyPoints = [
  {
    num: "01",
    title: "Structural Integrity",
    body: "Design safe, reliable Structural systems",
  },
  {
    num: "02",
    title: "Functional Design",
    body: "Create spaces that meet user needs",
  },
  {
    num: "03",
    title: "Technical Expertise",
    body: "Apply engineering principles and best practices",
  },
  {
    num: "04",
    title: "Collaborative Insight",
    body: "Integrate architecture and practical feedback",
  },
];