import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, getSector, services } from "@/data/site";
import { getServiceStory } from "@/data/serviceStories";
import { DisciplineStory } from "@/components/services/DisciplineStory";
import { CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { ServiceJsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | FORMX Industrial Design Consultants India`,
    description: service.short,
  };
}

const categoryLabels: Record<string, string> = {
  "architectural-design": "Architecture & Planning",
  "site-infrastructure": "Architecture & Planning",
  "sustainable-design": "Architecture & Planning",
  "structural-engineering": "Structure & Civil",
  "civil-engineering": "Structure & Civil",
  "mechanical-utility-engineering": "Utilities",
  "hvac-engineering": "Utilities",
  "electrical-engineering": "Utilities",
  "fire-protection-engineering": "Fire & Life Safety",
  "project-management": "Delivery",
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const story = getServiceStory(service);
  const cat = categoryLabels[slug] ?? "Engineering Practice";

  const others = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({
      href: `/services/${s.slug}`,
      title: s.title,
      meta: "Discipline",
      image: s.asset,
    }));

  const sectorLinks = service.relatedSectors
    .map((s) => getSector(s))
    .filter(Boolean)
    .map((s) => ({
      href: `/sectors/${s!.slug}`,
      title: s!.title,
      meta: "Sector",
      image: s!.asset,
    }));

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.short}
        url={`/services/${service.slug}`}
        image={`https://formxconsultants.com/assets/${service.asset}`}
      />

      {/* Discipline-specific hero — not identical PageHero stack */}
      <section className="border-b border-line bg-white pt-24 pb-12 md:pt-28 md:pb-16">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            {cat}
          </p>
          <h1
            className="mt-3 max-w-4xl font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            {service.title}
          </h1>
          <p className="mt-2 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-ink/40">
            {story.motif}
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
            {service.short}
          </p>
        </Container>
      </section>

      <DisciplineStory service={service} />

      {sectorLinks.length ? (
        <RelatedLinks title="Relevant sectors" items={sectorLinks} />
      ) : null}
      <RelatedLinks title="Related disciplines" items={others} />

      <CtaBand
        title={`Engage FORMX for ${service.title.toLowerCase()}`}
        description="Share site constraints and capacity targets—our leads scope this discipline inside a coordinated multidisciplinary package."
        secondary={{ label: "All disciplines", href: "/services" }}
      />
      <StickyEnquire label={`Discuss ${service.title}`} />
    </>
  );
}
