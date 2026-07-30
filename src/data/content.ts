export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  asset: string;
};

export const leadership: TeamMember[] = [
  {
    name: "Architecture Practice Lead",
    role: "Architecture & Planning",
    bio: "Leads architectural planning and construction-ready documentation — layouts, GA drawings, and GFC packages coordinated with structure and MEP for industrial, commercial, and institutional buildings.",
    asset: "team/partner-architecture.jpg",
  },
  {
    name: "Structural & Civil Lead",
    role: "Structural & Civil Engineering",
    bio: "Owns structural and civil delivery — RCC and steel systems, foundations, grading, roads, and drainage engineered for safety, constructability, and long-term performance.",
    asset: "team/partner-structures.jpg",
  },
  {
    name: "MEP & Fire Lead",
    role: "Mechanical, Electrical, HVAC & Fire",
    bio: "Drives mechanical utilities, HVAC & refrigeration, electrical, and fire protection so systems are efficient, code-compliant, and clash-free before they reach site.",
    asset: "team/partner-mepf.jpg",
  },
  {
    name: "Delivery & Procurement Lead",
    role: "Project Management & Procurement",
    bio: "Coordinates programme, tender documentation, vendor evaluation, and construction-stage support — keeping multidisciplinary delivery on scope, schedule, and quality.",
    asset: "team/partner-delivery.jpg",
  },
];

export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  asset: string;
  body: string[];
};

export const blogs: BlogPost[] = [
  {
    slug: "ev-battery-facility-planning",
    category: "Design Process",
    date: "July 5, 2026",
    title: "What to lock early for battery & EV manufacturing facilities",
    excerpt:
      "Architectural zoning, fire strategy, electrical capacity, and utility corridors that protect schedule on complex greenfield plants.",
    author: "FORMX Delivery Team",
    asset: "insights/ev-battery.jpg",
    body: [
      "Battery and EV facilities lose time when zoning, fire protection, and utilities are treated as detailing tasks instead of concept constraints. The first move is to lock process adjacency: materials, assembly or pack lines, test areas, warehouse, and personnel flows.",
      "Fire and electrical risk profiles should influence architecture before finishes. Separation distances, hydrant and sprinkler concepts, detection, and emergency power need a seat at the concept table — alongside process vendors.",
      "Utility intensity is the third early lock. Power density, process exhaust, chilled water, and compressed air corridors must share a structural grid that remains accessible after equipment lands. Clash resolution after awards is always more expensive than corridor discipline up front.",
      "FORMX recommends a focused concept alignment: architectural block plan, structural span options, MEP corridor strategy, and a compliance risk register. That package becomes the brief every later drawing should obey.",
      "For promoters, the outcome is predictability — fewer redesign loops when vendor data firms up, and contractors who receive GFC packages already speaking the same geometric language.",
    ],
  },
  {
    slug: "industrial-policy-plant-design",
    category: "Industry Trends",
    date: "July 1, 2026",
    title: "Industrial investment signals and what they mean for plant design",
    excerpt:
      "A practical read for promoters evaluating manufacturing investments and facility planning priorities.",
    author: "FORMX Practice",
    asset: "insights/policy.jpg",
    body: [
      "Investment incentives change where capital lands; they should also change how early design briefs are written. Capacity targets and timeline pressure reshape zoning density and phasing strategy.",
      "Design teams should ask: what must the first phase prove for commissioning, and what can wait without trapping utilities? A plant that cannot phase cleanly becomes a cash-flow liability.",
      "Statutory documentation readiness is part of design quality — plot constraints, setbacks, environmental buffers, and fire authority expectations belong in the concept checklist, not in late-stage surprise notes.",
      "FORMX frames policy-aware design as practical sequencing: concept → consentable packages → tenderable GFC — each stage carrying the same industrial logic so expansion does not rewrite the campus.",
    ],
  },
  {
    slug: "power-infrastructure-manufacturing",
    category: "Electrical Engineering",
    date: "May 28, 2026",
    title: "Power infrastructure planning for manufacturing facilities",
    excerpt:
      "Distribution, redundancy, and layout choices that keep operations dependable as capacity scales.",
    author: "FORMX Electrical",
    asset: "insights/power.jpg",
    body: [
      "Manufacturing uptime is often an electrical story. Load lists that ignore diversity or future bays force costly retrofit of substations and cable routing.",
      "Early SLD thinking should define HT/LT hierarchy, redundancy ambitions, and maintainable access to switchgear — coordinated with architecture so electrical rooms are not an afterthought.",
      "Lighting, earthing, lightning protection, and backup power must track process criticality. Different areas do not share the same failure consequence — design should show that difference clearly.",
      "FORMX electrical packages emphasise clarity for contractors: single-line diagrams that match layouts, schedules that match procurement, and site clarification notes that close loops quickly.",
    ],
  },
  {
    slug: "water-conservation-industrial",
    category: "Sustainable Design",
    date: "May 12, 2026",
    title: "Water efficiency in industrial facility design",
    excerpt:
      "Practical planning concepts that reduce demand and support long-term operations without bloating project budget.",
    author: "FORMX Sustainability",
    asset: "insights/water.jpg",
    body: [
      "Industrial water strategy starts with demand mapping — process, domestic, landscaping, and fire — then decides where recycle, rainwater, and efficient fixtures actually move the needle.",
      "Site civil and infrastructure design (grading, drains, storage) either enables reuse or wastes the opportunity. Plant-room allocation for treatment equipment must be reserved in concept plans.",
      "Sustainability measures survive when they are embedded in base design documents, not appended as a late checklist. FORMX tracks water and energy measures inside the same coordinated documentation used for MEP clash checks.",
    ],
  },
  {
    slug: "clash-free-utility-coordination",
    category: "Design Process",
    date: "April 20, 2026",
    title: "Clash-free utility coordination before construction starts",
    excerpt:
      "How coordinated mechanical, electrical, and fire junctions reduce site delays for multi-service industrial buildings.",
    author: "FORMX MEP Coordination",
    asset: "insights/clash.jpg",
    body: [
      "Most site delays blamed on execution began as unresolved junctions in design. Multi-service ceilings and shafts need deliberate ownership: who leads the corridor, what is primary, what yields.",
      "FORMX coordinates mechanical utilities, HVAC, electrical, and fire protection with architecture and structure — enlarging critical junctions and access envelopes before duct fabrication and before pouring.",
      "The deliverable is not a pretty model alone; it is a set of decisions documented early enough that BOQs and shop drawings inherit the same geometry. That is how coordinated consultancy protects client schedule.",
    ],
  },
  {
    slug: "industrial-park-master-planning",
    category: "Site Infrastructure",
    date: "March 8, 2026",
    title: "What good industrial park infrastructure gets right",
    excerpt:
      "Plot logic, corridor planning, and phased external development that keep campuses investable and operable.",
    author: "FORMX Infrastructure",
    asset: "insights/park.jpg",
    body: [
      "Industrial parks succeed when shared infrastructure anticipates future occupants without overbuilding day-one capex. Right-of-way for roads, drains, power, and utilities must be generous and protected.",
      "Plot depth, truck courts, and setbacks define which industries can actually land. Marketing drawings that ignore logistics create empty plots with poor yield.",
      "FORMX site infrastructure and civil packages link land use to engineered corridors and phased trunk works — so promoters can sell plots with credible utility stories and builders can execute without rewriting the campus every year.",
    ],
  },
];

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}

export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  asset: string;
};

export const news: NewsItem[] = [
  {
    slug: "formx-team-expansion",
    date: "June 18, 2026",
    title: "FORMX strengthens multidisciplinary delivery capacity",
    excerpt:
      "Additional capacity across architecture, structure, civil, and MEP to support concurrent industrial and infrastructure mandates.",
    asset: "news/expansion.jpg",
    body: [
      "FORMX has strengthened delivery capacity across architecture, structural and civil engineering, and MEP coordination.",
      "The expansion supports concurrent greenfield and expansion mandates where construction-ready documentation and clash-free coordination are critical to client schedules.",
      "Organisations evaluating design partners can engage FORMX through the contact page for capability discussions.",
    ],
  },
  {
    slug: "greenfield-delivery-note",
    date: "May 2, 2026",
    title: "Notes from recent greenfield industrial deliveries",
    excerpt:
      "Lessons on early utility coordination, GFC discipline, and keeping design ahead of site milestones.",
    asset: "news/greenfield.jpg",
    body: [
      "Recent greenfield deliveries reinforced a simple pattern: early corridor decisions and coordinated packages prevent the majority of site RFIs.",
      "Keeping GFC ahead of contractual milestones requires disciplined freeze points — process vendor data, structural grids, and utility trunks must move together.",
      "FORMX continues to refine its delivery playbooks so promoters inherit clearer packages and contractors inherit fewer surprises.",
    ],
  },
  {
    slug: "career-openings",
    date: "April 10, 2026",
    title: "Openings across architecture, structure & MEP roles",
    excerpt:
      "FORMX is hiring experienced design professionals. Explore current openings on the career page.",
    asset: "news/careers.jpg",
    body: [
      "FORMX is hiring architects, structural engineers, MEP engineers, and CAD technicians with industrial and infrastructure project experience.",
      "Candidates who value coordination, buildability, and construction-stage support will find a practice built around precise, multidisciplinary delivery.",
      "See open roles and apply via the Career page, or email career@formxconsultants.com.",
    ],
  },
];

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug);
}
