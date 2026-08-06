/** Homepage spine locked to FORMX.pdf — brochure truth only */

import { projects, type Project, partnerTypes } from "./projects";
import {
  portfolioIntro,
  portfolioServices,
  portfolioServicesNote,
  portfolioSpecialized,
  portfolioOngoing,
  portfolioContactNote,
} from "./portfolio";

export const brochurePillars = [
  {
    title: "Structural Integrity",
    body: "Design safe, reliable Structural systems",
  },
  {
    title: "Technical Expertise",
    body: "Apply engineering principles and best practices",
  },
  {
    title: "Functional Design",
    body: "Create spaces that meet user needs",
  },
  {
    title: "Collaborative Insight",
    body: "Integrate architecture and practical feedback",
  },
] as const;

export const brochureBrand = {
  slogan: "Where Vision Takes Form",
  tagline: "Shaping form, defining futures",
  statement:
    "At FormX, we don't just design structures — we engineer confidence into every facility we touch.",
  intro: portfolioIntro,
};

/** Exact eight completed facilities featured in FORMX.pdf */
const BROCHURE_SLUGS = [
  "vapi-g2-industrial",
  "kheda-peb-warehouse",
  "pune-apartment-tower",
  "surat-residential-bungalow",
  "aarti-chemical-storage",
  "valsad-peb-shed-expansion",
  "senegal-office-building",
  "sorathur-skill-development-center",
] as const;

export const brochureProjects: Project[] = BROCHURE_SLUGS.map((slug) => {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Missing brochure project: ${slug}`);
  return p;
});

export const brochureProjectGroups = [
  {
    id: "industrial",
    title: "Industrial Projects",
    intro:
      "Process clearances, crane loads, machine foundations and PEB/RCC interfaces answered before issue — facilities sized for operations, not presentation.",
    projects: brochureProjects.filter((p) => p.sector === "Industrial Projects"),
  },
  {
    id: "high-rise",
    title: "High-Rise Structures & Residential",
    intro:
      "Parking geometry, transfer floors and seismic/wind load paths locked with the architectural grid before GFC — so value engineering cannot erase the frame later.",
    projects: brochureProjects.filter(
      (p) => p.sector === "High-Rise Structures & Residential",
    ),
  },
  {
    id: "commercial",
    title: "Institutional & Commercial",
    intro:
      "Assembly loads, facade interfaces and long-span usability coordinated so schools, offices and campuses leave the studio buildable.",
    projects: brochureProjects.filter(
      (p) => p.sector === "Commercial & Institutional",
    ),
  },
] as const;

export const brochureServices = portfolioServices;
export const brochureServicesNote = portfolioServicesNote;
export const brochureSpecialized = portfolioSpecialized;
export const brochureOngoing = portfolioOngoing;
export const brochurePartners = partnerTypes;
export const brochureContactNote = portfolioContactNote;

/** Thin FAQ — only questions the brochure already answers */
export const brochureFaqs = [
  {
    q: "What does FormX design?",
    a: "High-Rise Structures & Residential, Industrial Projects, Institutional & Commercial, and Strengthening & Retrofitting — with Architecture, Structure and Infrastructure moving together.",
  },
  {
    q: "Do you support projects during construction?",
    a: "Yes. We stay with quantity estimation, clarifications and coordination until the built facility matches what was locked Before Issue.",
  },
  {
    q: "Who do you work with?",
    a: "Our clients range from industrial houses and pharma companies to architects, contractors, and private homeowners.",
  },
  {
    q: "Where is the studio?",
    a: "311, Addor Aspire, University Area, Ahmedabad, Gujarat 380015. Inquiry: inquiry@formxconsultants.com · +91 81284 44585.",
  },
];
