import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getService, getSector, services } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrochureCta, CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({ href: `/services/${s.slug}`, title: s.title, meta: "Service" }));

  const sectorLinks = service.relatedSectors
    .map((s) => getSector(s))
    .filter(Boolean)
    .map((s) => ({
      href: `/sectors/${s!.slug}`,
      title: s!.title,
      meta: "Sector",
    }));

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: "Our Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold uppercase text-ink md:text-3xl">
              Scope highlights
            </h2>
            <ul className="mt-8 space-y-4">
              {service.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-ink-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-x-red" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-xl font-bold uppercase text-ink">
              Typical deliverables
            </h3>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="border-l-2 border-x-red pl-4 text-[14px] text-ink-muted">
                  {d}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-xl font-bold uppercase text-ink">
              How we deliver
            </h3>
            <ol className="mt-5 space-y-4">
              {service.process.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display text-sm font-bold text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] text-ink-muted">{step}</span>
                </li>
              ))}
            </ol>

            <Button href="/contact" variant="primary" className="mt-10">
              Discuss this service
            </Button>
          </Reveal>
          <Reveal delay={0.08}>
            <AssetImage
              alt={service.title}
              slot={service.asset}
              kind="service"
              tone="dark"
              label={service.title}
              caption="Technical delivery visual"
              aspect="portrait"
            />
            <BrochureCta className="mt-6" />
          </Reveal>
        </Container>
      </section>

      {sectorLinks.length ? (
        <RelatedLinks title="Relevant sectors" items={sectorLinks} />
      ) : null}
      <RelatedLinks title="Related services" items={others} />
      <CtaBand
        title={`Engage FormX for ${service.title.toLowerCase()}`}
        secondary={{ label: "All services", href: "/services" }}
      />
      <StickyEnquire label={`Discuss ${service.title}`} />
    </>
  );
}
