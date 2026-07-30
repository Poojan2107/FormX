export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  highlights?: string[];
  asset: string;
  linkedin?: string;
  featured?: boolean;
};

export const leadership: TeamMember[] = [
  {
    name: "Hiren J. Shah",
    role: "Co-Founder & Managing Partner",
    bio: "Co-Founder & Managing Partner of FormX Consultants LLP. Leading multidisciplinary engineering design focused on industrial, commercial, and building projects. Specialising in RCC & steel structural design, PEB support, and value engineering.",
    highlights: [
      "RCC & Steel Structural Design",
      "Industrial & Greenfield Plants",
      "PEB Design Support & Consultancy",
      "Value Engineering & Optimization",
      "Concept-to-Execution Stage Oversight",
    ],
    asset: "team/hiren-j-shah.jpg",
    linkedin: "https://www.linkedin.com/in/hiren-j-shah/",
    featured: true,
  },
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
  authorRole: string;
  authorLinkedin?: string;
  asset: string;
  body: string[];
};

export const blogs: BlogPost[] = [
  {
    slug: "skeleton-behind-successful-buildings",
    category: "Structural Design",
    date: "July 28, 2026",
    title: "The skeleton behind every successful building: Safe, economical, practical",
    excerpt:
      "People remember a building by its face. A building stands because of its skeleton. How thoughtful engineering turns concepts into buildable, long-term structures.",
    author: "Hiren J. Shah",
    authorRole: "Co-Founder & Managing Partner, FormX",
    authorLinkedin: "https://www.linkedin.com/in/hiren-j-shah/",
    asset: "insights/policy.jpg",
    body: [
      "People remember a building by its face. A building stands because of its skeleton.",
      "Every great building begins with a vision. But behind every beautiful structure lies something equally important — a strong, safe, and reliable structural system.",
      "At FormX Consultants, we specialise in delivering structural engineering solutions that are safe (designs that ensure structural stability), economical (optimized designs that save cost), and practical (buildable solutions for smooth site execution).",
      "We partner with architects, builders, developers, industries, and PEB manufacturers to transform concepts into structures that are efficient, buildable, and designed for long-term performance.",
      "Our core expertise includes RCC Structural Design, Steel Structure Design, Industrial Buildings, Commercial Buildings, Residential Projects, PEB Design Support, and Structural Consultancy.",
      "We believe that successful projects are not built by drawings alone. They are built through thoughtful engineering, practical solutions, and strong collaboration.",
    ],
  },
  {
    slug: "seismic-structural-resilience-failures",
    category: "Earthquake Engineering",
    date: "July 12, 2026",
    title: "3 structural failures every engineer must know & how India must prepare",
    excerpt:
      "A technical journal on ground motion, seismic resilience, IS 1893 compliance, and building code lessons for structural engineers.",
    author: "Hiren J. Shah",
    authorRole: "Co-Founder & Managing Partner, FormX",
    authorLinkedin: "https://www.linkedin.com/in/hiren-j-shah/",
    asset: "insights/power.jpg",
    body: [
      "Seismic events do not grade on intention. They grade strictly on what we built.",
      "Reflecting on recent seismic events along subduction zones, three common structural failure patterns emerge:",
      "1. Essential facilities non-operational: Hospitals evacuated patients onto the street on the day they were needed most. Seismic codes demand essential facilities stay operational.",
      "2. Unreinforced masonry & condemned structures: Buildings that had been officially condemned or lacked proper seismic detailing failing under lateral forces.",
      "3. Lack of ductile detailing: Unreinforced walls and improper column joint laps initiating progressive collapse under lateral loads.",
      "Why India must care: The Makran Subduction Zone off the Gujarat coast and active faults across Zones III-V carry similar lateral vulnerabilities. Our hospitals, schools, industrial plants, and bridges must be engineered with ductile detailing and IS 1893 compliance.",
      "At FormX, every structural package undergoes ground motion, ductility, and lateral drift verification so structures protect life and remain functional when it matters most.",
    ],
  },
  {
    slug: "column-splice-beam-joint-detailing",
    category: "Site Learning",
    date: "June 24, 2026",
    title: "Site Learning: Why column splices at beam-column joints risk structural failure",
    excerpt:
      "IS 13920 detailing lessons: lap splices placed at high-stress beam-column joints limit bar strength under seismic and lateral loads.",
    author: "Hiren J. Shah",
    authorRole: "Co-Founder & Managing Partner, FormX",
    authorLinkedin: "https://www.linkedin.com/in/hiren-j-shah/",
    asset: "insights/column-splice.jpg",
    body: [
      "A structural failure rarely starts with a dramatic mistake. More often, it begins with a small detailing decision that goes unnoticed.",
      "During a routine review of a bar bending schedule, we identified a column splice located exactly where it should never be — at the beam-column joint.",
      "The quantities were correct, the lap lengths were provided, and everything looked acceptable at first glance. But one critical detailing principle had been missed.",
      "IS 13920 and standard structural detailing practice are clear: lap splices in columns should be placed in the middle third of the column height away from the joint, away from the zone of maximum moment and seismic demand.",
      "When a splice lands at the joint, the bar cannot develop its full strength at the point where the structure needs it most. Under a seismic event or heavy lateral load, that's where failure initiates.",
      "Catching this issue before fabrication saved rework, delays, and potential performance concerns. Good structural design is not only about calculations — it is about ensuring every detail is placed where the structure can perform as intended.",
    ],
  },
  {
    slug: "ev-battery-facility-planning",
    category: "Design Process",
    date: "June 5, 2026",
    title: "What to lock early for battery & EV manufacturing facilities",
    excerpt:
      "Architectural zoning, fire strategy, electrical capacity, and utility corridors that protect schedule on complex greenfield plants.",
    author: "Hiren J. Shah",
    authorRole: "Co-Founder & Managing Partner, FormX",
    authorLinkedin: "https://www.linkedin.com/in/hiren-j-shah/",
    asset: "insights/ev-battery.jpg",
    body: [
      "Battery and EV facilities lose time when zoning, fire protection, and utilities are treated as detailing tasks instead of concept constraints. The first move is to lock process adjacency: materials, assembly or pack lines, test areas, warehouse, and personnel flows.",
      "Fire and electrical risk profiles should influence architecture before finishes. Separation distances, hydrant and sprinkler concepts, detection, and emergency power need a seat at the concept table — alongside process vendors.",
      "Utility intensity is the third early lock. Power density, process exhaust, chilled water, and compressed air corridors must share a structural grid that remains accessible after equipment lands. Clash resolution after awards is always more expensive than corridor discipline up front.",
      "At FormX, we recommend a focused concept alignment: architectural block plan, structural span options, MEP corridor strategy, and a compliance risk register. That package becomes the brief every later drawing should obey.",
      "For promoters, the outcome is predictability — fewer redesign loops when vendor data firms up, and contractors who receive GFC packages already speaking the same geometric language.",
    ],
  },
  {
    slug: "industrial-policy-plant-design",
    category: "Industry Trends",
    date: "May 18, 2026",
    title: "Industrial investment signals and what they mean for plant design",
    excerpt:
      "A practical read for promoters evaluating manufacturing investments and facility planning priorities.",
    author: "Hiren J. Shah",
    authorRole: "Co-Founder & Managing Partner, FormX",
    authorLinkedin: "https://www.linkedin.com/in/hiren-j-shah/",
    asset: "insights/policy.jpg",
    body: [
      "Investment incentives change where capital lands; they should also change how early design briefs are written. Capacity targets and timeline pressure reshape zoning density and phasing strategy.",
      "Design teams should ask: what must the first phase prove for commissioning, and what can wait without trapping utilities? A plant that cannot phase cleanly becomes a cash-flow liability.",
      "Statutory documentation readiness is part of design quality — plot constraints, setbacks, environmental buffers, and fire authority expectations belong in the concept checklist, not in late-stage surprise notes.",
      "FormX frames policy-aware design as practical sequencing: concept → consentable packages → tenderable GFC — each stage carrying the same industrial logic so expansion does not rewrite the campus.",
    ],
  },
  {
    slug: "water-conservation-industrial",
    category: "Sustainable Design",
    date: "May 2, 2026",
    title: "Water efficiency in industrial facility design",
    excerpt:
      "Practical planning concepts that reduce demand and support long-term operations without bloating project budget.",
    author: "Hiren J. Shah",
    authorRole: "Co-Founder & Managing Partner, FormX",
    authorLinkedin: "https://www.linkedin.com/in/hiren-j-shah/",
    asset: "insights/water.jpg",
    body: [
      "Industrial water strategy starts with demand mapping — process, domestic, landscaping, and fire — then decides where recycle, rainwater, and efficient fixtures actually move the needle.",
      "Site civil and infrastructure design (grading, drains, storage) either enables reuse or wastes the opportunity. Plant-room allocation for treatment equipment must be reserved in concept plans.",
      "Sustainability measures survive when they are embedded in base design documents, not appended as a late checklist. FormX tracks water and energy measures inside the same coordinated documentation used for MEP clash checks.",
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
    title: "FormX strengthens multidisciplinary delivery capacity",
    excerpt:
      "Additional capacity across architecture, structure, civil, and MEP to support concurrent industrial and infrastructure mandates.",
    asset: "news/expansion.jpg",
    body: [
      "FormX has strengthened delivery capacity across architecture, structural and civil engineering, and MEP coordination.",
      "The expansion supports concurrent greenfield and expansion mandates where construction-ready documentation and clash-free coordination are critical to client schedules.",
      "Organisations evaluating design partners can engage FormX through the contact page for capability discussions.",
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
      "FormX continues to refine its delivery playbooks so promoters inherit clearer packages and contractors inherit fewer surprises.",
    ],
  },
  {
    slug: "career-openings",
    date: "April 10, 2026",
    title: "Openings across architecture, structure & MEP roles",
    excerpt:
      "FormX is hiring experienced design professionals. Explore current openings on the career page.",
    asset: "news/careers.jpg",
    body: [
      "FormX is hiring architects, structural engineers, MEP engineers, and CAD technicians with industrial and infrastructure project experience.",
      "Candidates who value coordination, buildability, and construction-stage support will find a practice built around precise, multidisciplinary delivery.",
      "See open roles and apply via the Career page, or email career@formxconsultants.com.",
    ],
  },
];

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug);
}
