/**
 * FORMX owned methodology — Before Issue
 * Identity IP: coordinate Architecture · Structure · Infrastructure
 * before drawings leave the studio. Stay accountable through execution.
 */

export const formxMethod = {
  name: "Before × Issue",
  shortName: "Before Issue",
  code: "FORM× · BI",
  belief:
    "Every unresolved coordination issue eventually appears on the construction site. FORM× does not issue until Architecture, Structure and Infrastructure have answered each other.",
  promise:
    "Drawings should answer questions before construction begins — not after fabrication has started.",
  stamp: "Issue is a commitment — not an email.",
  disciplines: ["Architecture", "Structure", "Infrastructure"] as const,
  stages: [
    {
      id: "read",
      num: "01",
      title: "Read",
      verb: "Read the plot and the process",
      decision: "What will this site allow — and what will it fight?",
      why: "Levels, access, soil and operations decide foundations and docks before any elevation is finished for presentation.",
      prevents: "Pads that flood, docks that miss road levels, pretty plans that cannot be built.",
      disciplines: "Infrastructure · Architecture · Structure",
      slot: "projects/pdf_p4_1.jpeg",
      caption: "Site and process first — always",
    },
    {
      id: "lock",
      num: "02",
      title: "Lock",
      verb: "Lock the interfaces",
      decision: "Do Architecture, Structure and Infrastructure agree on the same facility?",
      why: "Grids, clear heights, expansion and site routes must lock together. Late coordination is already a cost.",
      prevents: "Structural rework after GFC, utility clashes, expansion that the frame cannot carry.",
      disciplines: "Architecture · Structure · Infrastructure",
      slot: "projects/brochure/brochure_p1_1.png",
      caption: "One facility — not three disconnected drawings",
    },
    {
      id: "carry",
      num: "03",
      title: "Carry",
      verb: "Carry every load into the ground",
      decision: "How does every force travel safely — cranes, machines, wind, seismic?",
      why: "Structure is sized for real industrial loads and detailed so fabrication and cages can be erected without guesswork.",
      prevents: "Ambiguous connections, PEB/RCC interface surprises, value engineering that erases safety.",
      disciplines: "Structure",
      slot: "projects/brochure/brochure_p7_1.png",
      caption: "Load path clarity is non-negotiable",
    },
    {
      id: "issue",
      num: "04",
      title: "Issue",
      verb: "Issue only what can be built",
      decision: "What must be closed before sheets leave the studio?",
      why: "Packages leave with clear scopes, interfaces and details contractors can price and build. Sheet volume is not success.",
      prevents: "RFIs that restart design after fabrication has begun.",
      disciplines: "Architecture · Structure · Infrastructure",
      slot: "projects/brochure/brochure_p1_2.png",
      caption: "Issue is a commitment — not an email",
    },
    {
      id: "stand",
      num: "05",
      title: "Stand",
      verb: "Stand with execution",
      decision: "Does the built facility still match the coordinated intent?",
      why: "Quantity support, clarifications and coordination continue until the facility matches what was locked — people stay close to the work.",
      prevents: "Silent gaps between drawing issue and occupied plant.",
      disciplines: "Practice · Site support",
      slot: "projects/brochure/brochure_p3_2.png",
      caption: "Completed work is the only proof that matters",
    },
  ],
} as const;

export type FormxStage = (typeof formxMethod.stages)[number];

/** Evidence tiles from FORMX.pdf / brochure — process + built proof (no fake redlines) */
export const formxEvidence = [
  {
    slot: "projects/brochure/brochure_p1_1.png",
    label: "Thinking before build",
    caption: "Structural model — decisions made visible before site",
    fit: "contain" as const,
  },
  {
    slot: "projects/brochure/brochure_p7_1.png",
    label: "Carry",
    caption: "Steel & framing logic — how loads become buildable detail",
    fit: "contain" as const,
  },
  {
    slot: "projects/pdf_p4_1.jpeg",
    label: "Read",
    caption: "Site reality — what the plot will allow and fight",
    fit: "cover" as const,
  },
  {
    slot: "projects/brochure/brochure_p3_2.png",
    label: "Stand",
    caption: "Vapi G+2 — completed facility as proof of coordination",
    fit: "contain" as const,
    href: "/projects/vapi-g2-industrial",
  },
];

/** Deep case study content — Vapi G+2 — brochure facts + engineering argument */
export const vapiCaseStudy = {
  slug: "vapi-g2-industrial",
  methodPath: ["read", "lock", "carry", "issue", "stand"] as const,
  risk: "A manufacturing plant that needed operational flexibility on the first floor — without locking the owner into a permanent RCC floor that would fight future process changes.",
  rejected:
    "A conventional terrace-and-side-wall RCC box with a fixed first floor. It would have been simpler to draw — and harder to adapt when machines and layouts changed.",
  decisions: [
    {
      title: "Removable mezzanine instead of a fixed floor",
      body: "The first floor was planned as a removable mezzanine that can be assembled or dismantled according to need — so structure serves process, not the other way around.",
      stage: "Lock",
    },
    {
      title: "RCC + steel hybrid — not one system for everything",
      body: "An intentional blend of RCC and steel: steel roof and cladded walls instead of a conventional terrace and side walls — chosen for industrial performance and buildability.",
      stage: "Carry",
    },
    {
      title: "Machine foundations as part of the structural story",
      body: "Structural design included machine foundation design — equipment loads treated as first-class forces in the load path, not an afterthought for the contractor.",
      stage: "Carry",
    },
  ],
  lesson:
    "Industrial facilities fail when structure is drawn as a finished building instead of a system that must change with process. Before Issue means locking Architecture and Structure on flexibility — then detailing steel and foundations so site can actually build it.",
  evidence: [
    {
      slot: "projects/brochure/brochure_p3_2.png",
      caption: "Completed G+2 industrial facility — Vapi · 66,000 sq. ft.",
      fit: "contain" as const,
    },
    {
      slot: "projects/brochure/brochure_p3_1.png",
      caption: "Brochure record — hybrid RCC & steel industrial form",
      fit: "contain" as const,
    },
    {
      slot: "projects/pdf_p20_1.jpeg",
      caption: "Built work — execution evidence from the practice record",
      fit: "cover" as const,
    },
    {
      slot: "projects/pdf_p21_1.jpeg",
      caption: "Built work — facility as occupied / constructed",
      fit: "cover" as const,
    },
  ],
};

export const hirenJudgement = {
  reviews:
    "Load paths. PEB/RCC interfaces. Whether Architecture and Infrastructure still agree with the structural grid. Constructability of details before issue.",
  refuses:
    "Issuing packages where disciplines have not answered each other. Value engineering that erases safety margins. Pretty plans that force rework after tender.",
  expects:
    "Clear ownership of interfaces. Multidisciplinary review closed. Details contractors can build without inventing answers on site.",
  success:
    "Drawings that answer questions before construction begins — not sheet volume, not presentation alone.",
};
