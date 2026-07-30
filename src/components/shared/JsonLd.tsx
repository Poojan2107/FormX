import { faqs, site, services } from "@/data/site";

export function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: "https://formxconsultants.com",
    logo: "https://formxconsultants.com/icon.png",
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
      "Precise, coordinated architecture, structural, civil, and MEP design for industrial, commercial, and institutional projects.",
    knowsAbout: services.map((s) => s.title),
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
