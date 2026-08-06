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

      <section className="border-b border-line bg-white pt-28 pb-14 md:pt-32 md:pb-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">{cat}</p>
              <h1
                className="mt-4 max-w-[16ch] font-display font-black leading-[0.98] tracking-tight text-ink"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                {service.title}
              </h1>
              <p className="mt-3 editorial-meta text-ink/40">{story.motif}</p>
            </div>
            <p className="max-w-2xl text-[16px] leading-[1.9] text-ink-muted lg:pb-1">
              {story.lead || service.short}
            </p>
          </div>
        </Container>
      </section>

      <DisciplineStory service={service} />

      <RelatedLinks title="Related disciplines" items={others} />

      <CtaBand
        title={`Discuss ${service.title.toLowerCase()} before issue`}
        description="Share site constraints, facility type, and timeline. We review how this discipline needs to coordinate with Architecture, Structure, and Infrastructure before drawings begin."
        secondary={{ label: "All services", href: "/services" }}
      />
      <StickyEnquire label={`Discuss ${service.title}`} />
    </>
  );
}
