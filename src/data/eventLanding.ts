/** Copy + structure for the founder-event one-pager (from CURRENT PLAN WEBISTE.pptx). */

export const eventHero = {
  line1: "WHERE VISION TAKES FORM",
  /** Brand line under the H1 — not the website-status message */
  line2: "SHAPING FORM. DEFINING FUTURE.",
  body: "Practical engineering and coordinated design for industrial and building facilities across India.",
} as const;

/** Status strip — lives below the fold, not in the hero */
export const eventLaunchNotice = {
  eyebrow: "WEBSITE TAKING FORM. LAUNCHING SOON.",
  body: "Architecture · Structure · Infrastructure — the FormX website is being drawn now. Launching soon.",
} as const;

export const eventAbout = {
  body: "A dynamic team of enthusiastic structural engineers and designers, dedicated to crafting spaces that are not only robust and functional but also inspire creativity and innovation. We seamlessly merge technical proficiency with practical wisdom to create structures that prioritize safety, efficiency, and alignment with architectural vision and user requirements.",
  tagline: "SHAPING FORM DEFINING FUTURE",
  pillars: [
    {
      id: "integrity",
      title: "Structural Integrity",
      description: "Design safe, reliable Structural systems",
    },
    {
      id: "functional",
      title: "Functional Design",
      description: "Create spaces that meet user needs",
    },
    {
      id: "technical",
      title: "Technical Expertise",
      description: "Apply engineering principles and best practices",
    },
    {
      id: "collaborative",
      title: "Collaborative Insight",
      description: "Integrate architecture and practical feedback",
    },
  ],
} as const;

export const eventStats = [
  { value: "25+", label: "Completed Projects" },
  { value: "15 Lakh+", label: "Sq.Ft Designed" },
  { value: "5", label: "States Served" },
] as const;

export const eventServices = [
  {
    id: "architecture",
    title: "Architecture",
    description: "Coordinated architectural design aligned with structure and site.",
  },
  {
    id: "rcc",
    title: "RCC Structural Design",
    description: "Safe, efficient and code-compliant RCC design solutions.",
  },
  {
    id: "steel",
    title: "Steel Structural Design",
    description: "Optimized steel structure design for industrial and commercial projects.",
  },
  {
    id: "industrial",
    title: "Industrial & Warehouse Structures",
    description: "Practical and economical structures for industrial buildings and warehouses.",
  },
  {
    id: "commercial",
    title: "Commercial & Residential Projects",
    description: "Functional and aesthetic design solutions for all types of buildings.",
  },
  {
    id: "audits",
    title: "Structural Audits & Retrofit Solutions",
    description: "Assessment, strengthening and retrofit solutions for existing structures.",
  },
  {
    id: "construction",
    title: "Construction Stage Engineering Support",
    description: "Coordination, site support and problem-solving for smooth project execution.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "Site infrastructure planning and engineering for facility delivery.",
  },
] as const;

export const eventMission = {
  p1: "We deliver smart, efficient and code-compliant structural solutions through practical engineering, realistic planning and close coordination at every stage of a project.",
  p2: "Our mission is simple — to be a trusted technical partner who adds value, solves problems and supports your vision from concept to completion.",
  values: [
    { id: "young", title: "Young Minds", accent: "Young" },
    { id: "practical", title: "Practical Solutions", accent: "Practical" },
    { id: "partnerships", title: "Long-term Partnerships", accent: "Long-term" },
    { id: "excellence", title: "Committed to Excellence", accent: "Excellence" },
  ],
} as const;

export const eventPartners = [
  { id: "architects", label: "Architects", role: "Design & Architectural Vision Alignment" },
  { id: "contractors", label: "Contractors", role: "Buildability, Safety & Site Execution" },
  { id: "developers", label: "Developers", role: "Commercial, Residential & Industrial Assets" },
  { id: "industrialists", label: "Industrialists", role: "Manufacturing, Parks & Warehousing Facilities" },
  { id: "pmc", label: "PMC", role: "Project Management & Quality Assurance" },
  { id: "peb", label: "PEB & Fabricators", role: "Steel Systems & Prefabricated Superstructures" },
  { id: "consultants", label: "Consultants", role: "Specialized Structural & Engineering MEPF" },
] as const;

export const eventCta = {
  brochureNote:
    "For more information about our projects please download our brochure from the link below.",
} as const;
