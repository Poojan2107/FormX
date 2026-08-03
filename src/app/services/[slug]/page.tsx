import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/site";
import { getServiceStory } from "@/data/serviceStories";
import { DisciplineStory } from "@/components/services/DisciplineStory";
import { CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { ServiceJsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ slug: string }> };

/** Public service IA — Architecture · Structure · Infrastructure only */
const PRIMARY_SERVICE_SLUGS = [
  "architectural-design",
  "sustainable-design",
  "structural-engineering",
  "civil-engineering",
  "site-infrastructure",
  "project-management",
] as const;

export async function generateStaticParams() {
  return PRIMARY_SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || !PRIMARY_SERVICE_SLUGS.includes(slug as (typeof PRIMARY_SERVICE_SLUGS)[number])) {
    return {};
  }
  return {
    title: `${service.title} | FORMX Consultants`,
    description: service.short,
  };
}

const categoryLabels: Record<string, string> = {
  "architectural-design": "Architecture",
  "site-infrastructure": "Infrastructure",
  "sustainable-design": "Architecture",
  "structural-engineering": "Structure",
  "civil-engineering": "Structure",
  "project-management": "Infrastructure",
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (!PRIMARY_SERVICE_SLUGS.includes(slug as (typeof PRIMARY_SERVICE_SLUGS)[number])) {
    notFound();
  }
  const service = getService(slug);
  if (!service) notFound();

  const story = getServiceStory(service);
  const cat = categoryLabels[slug] ?? "Engineering Practice";

  const others = services
    .filter(
      (s) =>
        s.slug !== slug &&
        PRIMARY_SERVICE_SLUGS.includes(s.slug as (typeof PRIMARY_SERVICE_SLUGS)[number]),
    )
    .slice(0, 3)
    .map((s) => ({
      href: `/services/${s.slug}`,
      title: s.title,
      meta: "Discipline",
      image: s.asset,
    }));

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.short}
        url={`/services/${service.slug}`}
        image={`https://formxconsultants.com/assets/${service.asset}`}
      />

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

      <RelatedLinks title="Related disciplines" items={others} />

      <CtaBand
        title={`Engage FORMX for ${service.title.toLowerCase()}`}
        description="Share site constraints, facility type and timeline — Architecture, Structure and Infrastructure scoped together."
        secondary={{ label: "All services", href: "/services" }}
      />
      <StickyEnquire label={`Discuss ${service.title}`} />
    </>
  );
}
