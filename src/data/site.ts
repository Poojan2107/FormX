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
export { brochureProjects } from "./brochureHome";
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
  { label: "Insights", href: "/knowledge-center" },
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

/** Sparse delivery metrics from founder review comments (home) */
export const trustMetrics = [
  { value: "25+", label: "Completed Projects" },
  { value: "15 Lakh+", label: "Sq.Ft Designed" },
  { value: "5", label: "States Served" },
];

/** FORMX by Numbers — About page proof band */
export const aboutNumbers = [
  { value: 25, suffix: "+", label: "Completed Projects" },
  { value: 15, suffix: " Lakh+", label: "Sq.Ft Designed" },
  { value: 15, suffix: "+", label: "Industrial Clients" },
  { value: 10, suffix: "+", label: "Steel Structures" },
  { value: 10, suffix: "+", label: "Warehouses" },
  { value: 5, suffix: "", label: "States Served" },
] as const;

export const about = {
  eyebrow: "About Us",
  title: "Where Vision Takes Form",
  paragraphs: [
    "FormX is an Ahmedabad structural practice. We bring Architecture, Structure and Infrastructure into agreement before drawings leave the studio — then stay with the work until the facility stands as intended.",
  ],
  industriesLine:
    "Pharmaceuticals · Food Processing · Chemical · Textile · Engineering · Automobile · Warehouses",
  cta: { label: "About Us", href: "/about" },
  legacy: "Shaping form, defining futures",
};

export const aboutPage = {
  intro:
    "FORMX is a founder-led engineering practice that coordinates Architecture, Structure and Infrastructure before drawings leave the studio. We resolve the decisions that usually surface too late on site, then remain accountable until the facility stands as intended.",
  tagline: "Shaping form, defining futures",
  philosophy:
    "Every unresolved coordination issue eventually appears on site. Before × Issue means the disciplines answer each other first, details are tested for buildability, and issue is treated as a commitment rather than a milestone.",
  whyExists:
    "High-rise and residential, industrial facilities, institutional and commercial buildings, strengthening and retrofitting — always with Architecture, Structure and Infrastructure moving together.",
  founderVision:
    "Hiren J. Shah, Founder & Managing Partner, keeps judgement close to the work through desk reviews, coordination meetings, site walks, and markups that push each package toward clarity.",
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
      body: "Engineering should reduce uncertainty before site begins: safer structures, clearer interfaces, and decisions aligned with how the facility will actually operate.",
    },
    {
      title: "Our Mission",
      body: "Deliver drawing packages that answer questions before construction begins, with Architecture, Structure and Infrastructure coordinated from concept through execution.",
    },
    {
      title: "Our Values",
      body: "Human-centred judgement, integrated collaboration, people close to the work, and reliable outcomes that are visible in every review, meeting, and issued sheet.",
    },
  ],
  humanValues: [
    {
      title: "Integrated Design Approach",
      body: "Architecture, Structure and Infrastructure move together from concept to site — one coordinated facility, not disconnected consultant outputs.",
    },
    {
      title: "Experience Across Industries",
      body: "Pharma, food, chemical, textile, engineering, automobile and warehouses — practical judgement shaped by facilities that must operate day after day.",
    },
    {
      title: "Practical & Scalable Solutions",
      body: "Designs sized for how the facility will expand, change process, and stay buildable — not only for how it looks on a sheet.",
    },
    {
      title: "People Close to the Work",
      body: "Partners stay in reviews, meetings, and site walks. Decisions remain with engineers who understand the drawings and the cost of issuing too early.",
    },
  ],
  collaborationPoints: [
    "Founder-led technical reviews",
    "Disciplines resolved in one room",
    "Drawings tested for construction reality",
    "Support that continues through execution",
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
    title: "Technical Expertise",
    body: "Apply engineering principles and best practices",
  },
  {
    num: "03",
    title: "Functional Design",
    body: "Create spaces that meet user needs",
  },
  {
    num: "04",
    title: "Collaborative Insight",
    body: "Integrate architecture and practical feedback",
  },
];