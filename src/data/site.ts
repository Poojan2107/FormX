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
      { label: "Architectural Design", href: "/services/architectural-design" },
      { label: "Structural Engineering", href: "/services/structural-engineering" },
      {
        label: "Mechanical Utility Engineering",
        href: "/services/mechanical-utility-engineering",
      },
      { label: "Fire Protection", href: "/services/fire-protection-engineering" },
      { label: "HVAC Engineering", href: "/services/hvac-engineering" },
      { label: "Electrical Engineering", href: "/services/electrical-engineering" },
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
      { label: "Architectural Design", href: "/services/architectural-design" },
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
    title: "MEPF",
    items: [
      {
        label: "Mechanical Utilities",
        href: "/services/mechanical-utility-engineering",
      },
      { label: "HVAC Engineering", href: "/services/hvac-engineering" },
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
  "Trusted industrial engineering & design partner",
  "Integrated architecture, structure & MEPF delivery",
  "Partner-led ownership from concept to site",
  "Single-window solutions for complex facilities",
];

export const hero = {
  eyebrow: "Industrial Engineering & Design",
  title: "Trusted design partner for industrial & infrastructure projects",
  body: "We design manufacturing and infrastructure facilities as one coordinated system — architecture, structure, and MEPF — so promoters get clarity early and sites get packages they can build from.",
  primaryCta: { label: "Book a consultation", href: "/contact" },
  secondaryCta: { label: "Explore our work", href: "/projects" },
  trust: [
    { label: "Single window", hint: "Architecture to MEPF" },
    { label: "Partner-led", hint: "Senior ownership" },
    { label: "Site-ready", hint: "Concept through GFC" },
  ],
};

export const stats = [
  { value: 120, suffix: "+", label: "Years cumulative experience" },
  { value: 300, suffix: "+", label: "Projects delivered" },
  { value: 1.8, suffix: "M+", label: "Sq.m designed" },
  { value: 80, suffix: "+", label: "Professionals" },
];

export const about = {
  eyebrow: "About FormX",
  title: "Single-window design for complex industrial facilities",
  paragraphs: [
    "FormX is built by practitioners with deep industrial experience across India and abroad. Architecture, structure, and utilities are planned as one system — coordinated outputs, clearer site execution, fewer clashes between disciplines.",
  ],
  cta: { label: "Know more", href: "/about" },
  legacy: "Building industrial facilities with clarity, ownership, and precision",
};

export const aboutPage = {
  intro:
    "FormX is a multidisciplinary design consultancy focused on industrial and infrastructure projects. Our work combines architectural planning, structural engineering, and MEPF expertise under one accountable window — so promoters and project teams get design that holds up in execution.",
  story: [
    "Industrial clients do not buy drawings in isolation — they buy reduced risk. FormX was shaped around that reality: senior involvement on critical decisions, disciplines that share one geometric truth, and packages contractors can build from.",
    "Whether greenfield, expansion, or industrial park infrastructure, our teams stay close to process constraints, statutory needs, and site realities. That is how schedules stay honest and quality stays intentional.",
  ],
  pillars: [
    {
      title: "Knowledge-based practice",
      body: "Decisions are driven by industrial delivery experience — process flow, constructability, statutory clarity, and operational performance.",
    },
    {
      title: "Partner involvement",
      body: "Senior leads stay close to critical choices. That ownership is how complex greenfield and expansion projects stay aligned to schedule and intent.",
    },
    {
      title: "Integrated delivery",
      body: "Architecture, structure, and utilities are coordinated early. Clash resolution happens in design — not as a surprise on site.",
    },
  ],
  values: [
    "Ownership over hand-offs",
    "Clarity over complexity",
    "Coordination over silos",
    "Long-term facility performance",
  ],
};

export const whyPoints = [
  {
    num: "01",
    title: "Cumulative depth of experience",
    body: "Senior leadership brings decades of industrial delivery — practical judgment, not template design.",
  },
  {
    num: "02",
    title: "Direct involvement of leads",
    body: "Projects move on time and within intent when experienced partners stay close to decisions.",
  },
  {
    num: "03",
    title: "Ownership mindset",
    body: "FormX works as an extended arm of the client team — accountable for outcomes, not just drawings.",
  },
  {
    num: "04",
    title: "Expert multidisciplinary team",
    body: "Architecture, structure, and MEPF specialists coordinate as one practice under a single window.",
  },
  {
    num: "05",
    title: "Integrated design process",
    body: "Model-led coordination resolves utility clashes early and supports smoother site execution.",
  },
  {
    num: "06",
    title: "Presence where projects need us",
    body: "Design support across India — with responsiveness during planning, tendering, and construction.",
  },
];

export const method = {
  eyebrow: "How we work",
  title: "Integrated single-window solutions",
  body: "We adopt a coordinated, model-based process to plan, design, and clarify complex utility routing within industrial buildings. Junctions and service bends are resolved before they become site issues — outputs that execution agencies can act on with confidence.",
};

export const processSteps = [
  {
    num: "1",
    shape: "circle" as const,
    title: "Discovery & technical alignment",
    body: "Align on process goals, site constraints, and statutory needs to define a clear, execution-ready design roadmap.",
  },
  {
    num: "2",
    shape: "petal" as const,
    title: "Concept & coordinated planning",
    body: "Master planning, layouts, and early engineering options that validate capacity, flow, and buildability before detail design.",
  },
  {
    num: "3",
    shape: "triangle" as const,
    title: "Integrated design & clash resolution",
    body: "Architecture, structure, and MEPF progress as one model — utilities coordinated so site surprises are minimised.",
  },
  {
    num: "4",
    shape: "square" as const,
    title: "Documentation, tender & site support",
    body: "Clear packages for tendering, vendor coordination, and responsive clarifications that keep construction aligned to design intent.",
  },
];

export const tickerItems = [
  "Architecture",
  "Structural Engineering",
  "MEPF Coordination",
  "Industrial Master Planning",
  "Fire Protection",
  "HVAC & Utilities",
  "Site Infrastructure",
  "Project Management",
];

export const philosophy = [
  {
    num: "1",
    title: "Human-centric approach",
    body: "Every design balances user comfort, process efficiency, and day-to-day functionality.",
  },
  {
    num: "2",
    title: "Integrated collaboration",
    body: "Architecture, engineering, and execution stay connected from concept to completion.",
  },
  {
    num: "3",
    title: "Sustainable thinking",
    body: "Solutions aim to minimise resource use while maximising long-term facility performance.",
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
      "FormX partners stayed close to decisions throughout our greenfield mandate. Their integrated approach and ownership at site helped us hold schedule without compromising design quality.",
    name: "A. Mehta",
    role: "Project Director",
    company: "National Manufacturing Group",
  },
  {
    quote:
      "Coordination across structure and utilities was clear from the start. Clash issues that usually appear during execution were resolved early — which made construction sequencing smoother for our team.",
    name: "R. Fernandes",
    role: "Sr. Vice President — Projects",
    company: "Industrial Systems Ltd.",
  },
  {
    quote:
      "Responsive, precise, and accountable. FormX worked as part of our core project team rather than a distant consultant — exactly what a fast-paced industrial build needs.",
    name: "S. Shah",
    role: "Managing Director",
    company: "Process Industries",
  },
  {
    quote:
      "Technical depth across the full project spectrum, paired with integrity and teamwork. We continue to engage FormX for expansion work based on delivery experience.",
    name: "M. Fernandes",
    role: "VP — Global Supply Chain",
    company: "Heavy Equipment OEM",
  },
];

export const faqs = [
  {
    q: "What services does FormX provide?",
    a: "End-to-end industrial design — architecture, structure, mechanical utilities, HVAC, electrical, fire protection, site infrastructure, and project management — under one accountable window.",
  },
  {
    q: "Do you support projects from concept through construction?",
    a: "Yes. From early concept and capacity planning through coordinated detail design, tender packages, and site assistance as vendor data firms up.",
  },
  {
    q: "How is FormX different from separate consultants?",
    a: "Architecture, structure, and MEPF share one geometric truth. Fewer clash loops, clearer schedule protection, and senior ownership close to decisions.",
  },
  {
    q: "Which sectors do you typically work in?",
    a: "Renewable manufacturing, battery and EV, food and packaging, logistics, industrial parks, data centers, and broader manufacturing.",
  },
  {
    q: "How do we start a project?",
    a: "Share facility type, location, capacity intent, and timeline via the contact form, email, or WhatsApp. A senior lead will propose the first alignment workshop.",
  },
];

export const careerRoles = [
  {
    title: "Architect — Industrial",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "3–6 years",
    blurb:
      "Industrial / manufacturing architectural experience with strong production-flow planning and GFC discipline.",
    responsibilities: [
      "Develop concept to GFC architectural packages for industrial facilities",
      "Coordinate with structure and MEPF for clash-free documentation",
      "Support statutory and tender documentation",
    ],
  },
  {
    title: "Structural Engineer",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "4–8 years",
    blurb:
      "Industrial structures (steel & RCC), detailing ownership, and vendor/site interface experience.",
    responsibilities: [
      "Analyse and design industrial structures and foundations",
      "Produce clear detailing for fabricators and contractors",
      "Resolve site queries with constructability focus",
    ],
  },
  {
    title: "MEP Coordinator",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "4–7 years",
    blurb:
      "Utility coordination across electrical, mechanical, and fire for multi-disciplinary industrial projects.",
    responsibilities: [
      "Lead service corridor and junction coordination",
      "Run clash reviews and issue closing actions",
      "Align vendor data with building design packages",
    ],
  },
  {
    title: "CAD Technician — Architecture / Structure",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "3+ years",
    blurb:
      "Strong industrial drafting; diploma/ITI with experience producing construction documentation.",
    responsibilities: [
      "Produce accurate drawings from engineer/architect direction",
      "Maintain drawing standards and revision control",
      "Support GFC packages under senior guidance",
    ],
  },
];
