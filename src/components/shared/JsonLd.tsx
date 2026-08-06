import { site } from "@/data/site";
import { brochureFaqs } from "@/data/brochureHome";

const SITE_URL = "https://formxconsultants.com";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "July 28, 2026" -> "2026-07-28" */
const toIsoDate = (s?: string) => {
  if (!s) return undefined;
  const m = s.match(/([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})/);
  if (!m) return undefined;
  const month = String(MONTHS.indexOf(m[1]) + 1).padStart(2, "0");
  if (month === "00") return undefined;
  return `${m[3]}-${month}-${m[2].padStart(2, "0")}`;
};

function ld(script: object) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(script) }}
    />
  );
}

/** Organization markup — site-wide (root layout). */
export function JsonLd() {
  return ld({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    email: site.email,
    telephone: site.phone,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.0225",
      longitude: "72.5714",
    },
    description:
      "Precise, coordinated architecture, structure and infrastructure design for industrial, commercial, and institutional projects.",
    knowsAbout: [
      "Architectural Drawings",
      "Structural Engineering",
      "Civil Engineering",
      "Site Infrastructure",
      "Sustainable Design",
      "Project Management",
      "Industrial Facilities",
      "High-Rise & Residential",
      "Institutional & Commercial",
      "Strengthening & Retrofitting",
    ],
    openingHours: "Mo-Sa 09:00-19:00",
  });
}

/** FAQPage markup — mount only where the FAQ block renders (contact page). */
export function FaqJsonLd() {
  return ld({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brochureFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  });
}

/** BreadcrumbList markup — for structured data on interior pages. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  });
}

/** Article markup — knowledge-center and news detail pages. */
export function ArticleJsonLd({
  title,
  description,
  datePublished,
  author,
  authorRole,
  url,
  image,
}: {
  title: string;
  description?: string;
  datePublished?: string;
  author: string;
  authorRole?: string;
  url: string;
  image?: string;
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: toIsoDate(datePublished),
    dateModified: toIsoDate(datePublished),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${url}` },
    author: authorRole
      ? { "@type": "Person", name: author, jobTitle: authorRole }
      : { "@type": "Organization", name: author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    inLanguage: "en-IN",
  });
}

/** Service markup — service detail pages. */
export function ServiceJsonLd({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description?: string;
  url: string;
  image?: string;
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    image,
    url: `${SITE_URL}${url}`,
    serviceType: name,
    areaServed: "IN",
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: SITE_URL,
    },
  });
}
