import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getService, getSector, services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrochureCta, CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceJsonLd } from "@/components/shared/JsonLd";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { ProcessSteps } from "@/components/shared/ProcessSteps";

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
  "mechanical-utility-engineering": "MEP & Utilities",
  "hvac-engineering": "MEP & Utilities",
  "electrical-engineering": "MEP & Utilities",
  "fire-protection-engineering": "MEP & Utilities",
  "project-management": "Delivery",
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({
      href: `/services/${s.slug}`,
      title: s.title,
      meta: "Service",
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

  const cat = categoryLabels[slug] ?? "Engineering Practice";

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.short}
        url={`/services/${service.slug}`}
        image={`https://formxconsultants.com/assets/${service.asset}`}
      />
      <PageHero
        eyebrow={cat}
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        image={{ slot: service.asset, kind: "service" }}
      />

      <ProofStrip compact />

      {/* Editorial intro — media owns left frame */}
      <section className="bg-white section-y">
        <Container className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="relative lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#111] lg:aspect-auto lg:min-h-[520px]">
              <AssetImage
                alt={service.title}
                slot={service.asset}
                kind="service"
                tone="dark"
                aspect="auto"
                fit="cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                {service.title}
              </p>
            </div>
            {service.gallery && service.gallery.length > 1 ? (
              <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                {service.gallery.slice(1, 4).map((item, idx) => (
                  <div key={item} className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                    <AssetImage
                      alt={`${service.title} detail ${idx + 2}`}
                      slot={item}
                      kind="service"
                      tone="dark"
                      aspect="auto"
                      fit="cover"
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
              Scope package
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
              What this discipline delivers
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{service.short}</p>

            <ul className="mt-7 space-y-0 border-y border-line">
              {service.highlights.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-line py-3.5 last:border-b-0"
                >
                  <span className="font-display text-[11px] font-bold text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] font-semibold leading-snug text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
                GFC deliverables
              </p>
              <ul className="mt-3 space-y-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="border-l-2 border-x-red pl-3 text-[13px] text-ink-muted">
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <Button href="/contact" variant="primary" className="mt-8 gap-2">
              Engage FORMX for this service
              <ArrowUpRight className="size-4" />
            </Button>

            <BrochureCta className="mt-6" />
          </Reveal>
        </Container>
      </section>

      <ProcessSteps
        eyebrow={`${service.title} delivery`}
        title="Brief to GFC workflow"
        description="How FORMX sequences this discipline inside the coordinated multidisciplinary package."
        steps={service.process.map((step, i) => ({
          num: String(i + 1).padStart(2, "0"),
          title: `Phase ${String(i + 1).padStart(2, "0")}`,
          body: step,
        }))}
      />

      {sectorLinks.length ? (
        <RelatedLinks title="Relevant sectors" items={sectorLinks} />
      ) : null}
      <RelatedLinks title="Related services" items={others} />
      <CtaBand
        title={`Engage FORMX for ${service.title.toLowerCase()}`}
        description="Share site constraints and capacity targets — our leads scope Architecture through MEP as one accountable window."
        secondary={{ label: "All services", href: "/services" }}
      />
      <StickyEnquire label={`Discuss ${service.title}`} />
    </>
  );
}
