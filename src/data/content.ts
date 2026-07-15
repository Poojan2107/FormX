export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  asset: string;
};

export const leadership: TeamMember[] = [
  {
    name: "Leadership Partner — Architecture",
    role: "Principal · Architecture & Master Planning",
    bio: "Leads industrial master planning and architectural delivery with a process-first mindset — connecting promoter goals to buildable spatial frameworks.",
    asset: "team/partner-architecture.jpg",
  },
  {
    name: "Leadership Partner — Structures",
    role: "Principal · Structural Engineering",
    bio: "Owns structural strategy for heavy industrial facilities — load paths, constructability, and coordination with architecture and utilities.",
    asset: "team/partner-structures.jpg",
  },
  {
    name: "Leadership Partner — MEPF",
    role: "Principal · MEPF & Utilities",
    bio: "Drives integrated mechanical, electrical, fire, and HVAC design so complex service junctions are resolved before they reach site.",
    asset: "team/partner-mepf.jpg",
  },
  {
    name: "Leadership Partner — Delivery",
    role: "Principal · Project Delivery",
    bio: "Ensures partner-level ownership on programme, vendors, and site clarification — FormX as an extended arm of the client team.",
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
    category: "Project Delivery",
    date: "July 5, 2026",
    title: "What to plan first for EV & battery manufacturing facilities",
    excerpt:
      "Early decisions on process zoning, utilities, and fire strategy that protect schedule on complex greenfield plants.",
    author: "FormX Delivery Team",
    asset: "insights/ev-battery.jpg",
    body: [
      "EV and battery facilities fail schedules when zoning, safety, and utilities are treated as detailing tasks instead of concept constraints. The first planning move is to lock process adjacency: incoming materials, cell/module or pack lines, formation/test, warehouse, and personnel flows.",
      "Fire and gas risk profiles should influence architecture before aesthetics. Separation distances, egress, suppression concepts, and emergency power logic need a seat at the concept table — alongside process vendors.",
      "Utility intensity is the third early lock. Power density, process exhaust, chilled water, and compressed air corridors must share a structural grid that remains accessible after equipment lands. Clash resolution after civil awards is always more expensive than corridor discipline up front.",
      "FormX recommends a four-week concept alignment: process block plan, structural span options, MEPF corridor strategy, and a compliance risk register. That package becomes the brief every later drawing should obey.",
      "For promoters, the outcome is predictability — fewer redesign loops when vendor data firms up, and a site team that receives packages already speaking the same geometric language.",
    ],
  },
  {
    slug: "industrial-policy-plant-design",
    category: "Industry Trends",
    date: "July 1, 2026",
    title: "Industrial policy signals and what they mean for plant design",
    excerpt:
      "A practical read for promoters evaluating manufacturing investments and facility planning priorities.",
    author: "FormX Strategy Desk",
    asset: "insights/policy.jpg",
    body: [
      "Policy incentives change where capital lands; they should also change how early design briefs are written. Capacity targets, local content rules, and timeline pressure all reshape zoning density and phasing strategy.",
      "Design teams should ask: what must the first phase prove for disbursement or commissioning, and what can wait without trapping utilities? A park or plant that cannot phase cleanly becomes a cash-flow liability.",
      "Statutory documentation readiness is part of design quality — plot constraints, setbacks, environmental buffers, and fire authority expectations belong in the concept checklist, not in late-stage surprise notes.",
      "FormX frames policy-aware design as practical sequencing: concept → consentable packages → tenderable GFC — each stage carrying the same industrial logic so expansion does not rewrite the campus.",
    ],
  },
  {
    slug: "power-infrastructure-manufacturing",
    category: "Energy & Infrastructure",
    date: "May 28, 2026",
    title: "Power infrastructure planning for manufacturing facilities",
    excerpt:
      "Distribution, redundancy, and layout choices that keep operations dependable as capacity scales.",
    author: "FormX Electrical Practice",
    asset: "insights/power.jpg",
    body: [
      "Manufacturing uptime is often an electrical story. Load lists that ignore diversity, harmonic impact, or future bays force costly retrofit of substations and bus routing.",
      "Early SLD thinking should define HT/LT hierarchy, redundancy ambitions, and maintainable access to switchgear rooms — coordinated with architecture so electrical real estate is not an afterthought alcove.",
      "Lighting, emergency power, and earthing must track process criticality. A packaging warehouse and a battery formation area do not share the same failure consequence — design should show that difference clearly.",
      "FormX electrical packages emphasise clarity for contractors: single-lines that match layouts, schedules that match procurement, and site clarification notes that close loops quickly.",
    ],
  },
  {
    slug: "water-conservation-industrial",
    category: "Sustainability",
    date: "May 12, 2026",
    title: "Water conservation in industrial facility design",
    excerpt:
      "Planning concepts that reduce demand and protect long-term operations as industrial water stress rises.",
    author: "FormX Sustainability",
    asset: "insights/water.jpg",
    body: [
      "Industrial water strategy starts with demand mapping — process, domestic, landscaping, and fire — then decides where recycle, rainwater, and low-flow fixtures actually move the needle.",
      "Site civil design (grading, drains, storage) either enables reuse or wastes the opportunity. Corridor and plant-room allocation for treatment equipment must be reserved in concept plans.",
      "Sustainability measures survive when they are embedded in base design documents, not appended as a late marketing list. FormX tracks water measures inside the same coordinated model used for MEPF clash checks.",
    ],
  },
  {
    slug: "clash-free-utility-coordination",
    category: "Design Process",
    date: "April 20, 2026",
    title: "Clash-free utility coordination before construction starts",
    excerpt:
      "How model-led junction clarity reduces site delays for complex multi-service industrial buildings.",
    author: "FormX MEPF Coordination",
    asset: "insights/clash.jpg",
    body: [
      "Most site delays blamed on ‘execution’ began as unresolved junctions in design. Multi-service ceilings and shafts need deliberate ownership: who leads the corridor, what is primary, what yields.",
      "FormX uses model-based coordination to enlarge critical junctions — showing bends, access, and maintenance envelopes — then shares those views with execution agencies before pouring and before duct fabrication.",
      "The deliverable is not a pretty model; it is a set of decisions documented early enough that BOQs and shop drawings inherit the same geometry. That is how single-window consultancy protects client schedule.",
    ],
  },
  {
    slug: "industrial-park-master-planning",
    category: "Infrastructure",
    date: "March 8, 2026",
    title: "What good industrial park master planning gets right",
    excerpt:
      "Plot logic, corridor planning, and infrastructure phasing that keep campuses investable and operable.",
    author: "FormX Master Planning",
    asset: "insights/park.jpg",
    body: [
      "Industrial parks succeed when shared infrastructure anticipates unknown future tenants without overbuilding day-one capex. Right-of-way for roads, drains, power, and data must be generous and protected.",
      "Plot depth, truck courts, and setbacks define which industries can actually land. Marketing drawings that ignore logistics create empty plots with poor yield.",
      "FormX master plans link land use to engineered corridors and phased trunk infrastructure — so promoters can sell plots with credible utility stories and builders can execute without rewriting the campus every year.",
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
    title: "FormX expands multidisciplinary delivery capacity",
    excerpt:
      "Additional senior capacity across architecture, structure, and MEPF to support concurrent industrial mandates.",
    asset: "news/expansion.jpg",
    body: [
      "FormX has strengthened delivery capacity with additional senior professionals across architecture, structural engineering, and MEPF coordination.",
      "The expansion supports concurrent greenfield and expansion mandates where partner-level involvement and clash-free documentation are critical to client schedules.",
      "Organisations evaluating industrial design partners can engage FormX through the contact page for capability discussions.",
    ],
  },
  {
    slug: "greenfield-delivery-note",
    date: "May 2, 2026",
    title: "Notes from recent greenfield industrial deliveries",
    excerpt:
      "Lessons on partner involvement, early utility coordination, and keeping GFC ahead of site milestones.",
    asset: "news/greenfield.jpg",
    body: [
      "Recent greenfield deliveries reinforced a simple pattern: early corridor decisions and partner presence at interface meetings prevent the majority of site RFIs.",
      "Keeping GFC ahead of contractual milestones requires disciplined freeze points — process vendor data, structural grids, and utility trunks must move together.",
      "FormX continues to refine its single-window playbooks so promoters inherit clearer packages and contractors inherit fewer surprises.",
    ],
  },
  {
    slug: "career-openings",
    date: "April 10, 2026",
    title: "Openings across architecture, structure & coordination roles",
    excerpt:
      "FormX is hiring experienced industrial design professionals. Explore current openings on the career page.",
    asset: "news/careers.jpg",
    body: [
      "FormX is hiring architects, structural engineers, MEP coordinators, and CAD technicians with industrial project experience.",
      "Candidates who value ownership, coordination, and site-aware detailing will find a practice built around partner-led delivery.",
      "See open roles and apply via the Career page, or email career@formxconsultants.com.",
    ],
  },
];

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug);
}
