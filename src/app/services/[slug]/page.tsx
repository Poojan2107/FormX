import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getService, services } from "@/data/site";
import { getServiceStory } from "@/data/serviceStories";
import { DisciplineStory } from "@/components/services/DisciplineStory";
import { CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { ServiceJsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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

/**
 * Architecture (sustainable) is the reference: square card, image edge-to-edge, no gaps.
 * Each page picks its own asset + focal point so cover fills that square without empty bars.
 */
const heroArtifact: Record<
  string,
  {
    /** Override asset when the default file’s ratio fights a square frame */
    asset?: string;
    /** object-position — keep the subject in frame */
    position: string;
  }
> = {
  "architectural-design": {
    position: "center 20%",
  },
  "sustainable-design": {
    position: "center center",
  },
  // Default structural.jpg is landscape — use square gallery shot so the card matches Architecture
  "structural-engineering": {
    asset: "services/structural-03.jpg",
    position: "center center",
  },
  "civil-engineering": {
    position: "center center",
  },
  "site-infrastructure": {
    position: "center center",
  },
  // Tall portrait — square cover crops only red floor top/bottom; people stay fully visible
  "project-management": {
    position: "center 42%",
  },
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
  const artifact = heroArtifact[slug] ?? { position: "center center" };
  const heroSrc = artifact.asset ?? service.asset;

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
      image: heroArtifact[s.slug]?.asset ?? s.asset,
    }));

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.short}
        url={`/services/${service.slug}`}
        image={`https://formxconsultants.com/assets/${heroSrc}`}
      />

      <section className="border-b border-line bg-white pt-8 pb-14 md:pt-12 md:pb-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            <div className="min-w-0 lg:col-span-7">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-x-red" />
                <p className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
                  [FORMX.PRACTICE] · {cat}
                </p>
              </div>

              <h1
                className="mt-4 font-display font-black leading-[0.94] tracking-tight text-ink"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
              >
                {service.title}
              </h1>

              <p className="mt-6 max-w-2xl font-display text-xl font-bold leading-relaxed text-ink/80 md:text-2xl">
                {story.lead || service.short}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary" className="gap-2 shadow-md">
                  Discuss this discipline
                  <ArrowUpRight className="size-4" />
                </Button>
                <Button href="/services" variant="secondary">
                  All services
                </Button>
              </div>
            </div>

            {/* Same square artifact card as Architecture — filled edge-to-edge, no gaps */}
            <div className="min-w-0 lg:col-span-5">
              <figure className="overflow-hidden border border-line bg-white shadow-xl leading-none">
                <div className="relative aspect-square w-full overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/assets/${heroSrc}`}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: artifact.position }}
                  />
                </div>
                <figcaption className="flex items-center justify-between border-t border-line bg-surface-muted/60 px-4 py-2.5 font-label text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/60">
                  <span className="text-x-red">[FORMX.ARTIFACT]</span>
                  <span>{story.family}</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-12 border-t border-line pt-8 md:mt-14">
            <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
              CORE PRACTICE CAPABILITIES
            </p>
            <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2.5 font-display text-[14.5px] font-bold text-ink"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-x-red" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <DisciplineStory service={service} />

      <RelatedLinks
        title="Related disciplines"
        items={others}
        viewAllHref="/services"
      />

      <CtaBand
        title={`Discuss ${service.title.toLowerCase()} before issue`}
        description="Share site constraints, facility type, and timeline. We review how this discipline needs to coordinate with Architecture, Structure, and Infrastructure before drawings begin."
        secondary={{ label: "All services", href: "/services" }}
      />
      <StickyEnquire label={`Discuss ${service.title}`} />
    </>
  );
}
