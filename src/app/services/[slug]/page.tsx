import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowUpRight, FileText, Layers } from "lucide-react";
import { getService, getSector, services } from "@/data/site";
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

const categoryMap: Record<string, { label: string; color: string }> = {
  "architectural-design": { label: "Architecture & Planning", color: "#3b82f6" },
  "site-infrastructure": { label: "Architecture & Planning", color: "#3b82f6" },
  "sustainable-design": { label: "Architecture & Planning", color: "#3b82f6" },
  "structural-engineering": { label: "Structure & Civil", color: "#f59e0b" },
  "civil-engineering": { label: "Structure & Civil", color: "#f59e0b" },
  "mechanical-utility-engineering": { label: "MEP & Utilities", color: "#10b981" },
  "hvac-engineering": { label: "MEP & Utilities", color: "#10b981" },
  "electrical-engineering": { label: "MEP & Utilities", color: "#10b981" },
  "fire-protection-engineering": { label: "MEP & Utilities", color: "#10b981" },
  "project-management": { label: "Delivery", color: "#8b5cf6" },
};

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

  const cat = categoryMap[slug] ?? { label: "Engineering", color: "#de3024" };

  return (
    <>
      {/* Page header */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-4 pb-0 pt-10 sm:px-5 sm:pt-12 md:px-8 md:pt-16">
          {/* Breadcrumb */}
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[12px] text-ink-muted">
            <Link href="/" className="transition-colors hover:text-x-red">Home</Link>
            <span className="text-line">/</span>
            <Link href="/services" className="transition-colors hover:text-x-red">Our Services</Link>
            <span className="text-line">/</span>
            <span className="text-ink">{service.title}</span>
          </nav>

          {/* Category pill */}
          <span
            className="mb-3 inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ background: `${cat.color}18`, color: cat.color }}
          >
            <span
              className="size-1.5 rounded-full"
              style={{ background: cat.color }}
            />
            {cat.label}
          </span>

          <h1 className="max-w-3xl text-display text-ink">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-lead text-ink-muted">{service.summary}</p>

          {/* Quick meta strip */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 pb-0">
            {service.highlights.slice(0, 3).map((h) => (
              <div key={h} className="flex items-center gap-2">
                <Check className="size-3.5 shrink-0 text-x-red" />
                <span className="text-[13px] text-ink-muted">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* LEFT — Detailed content */}
          <Reveal>
            {/* Scope highlights */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex size-8 items-center justify-center"
                  style={{ background: `${cat.color}15` }}
                >
                  <Layers className="size-4" style={{ color: cat.color }} />
                </span>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  Scope highlights
                </h2>
              </div>
              <ul className="space-y-3">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-sm border border-line bg-[#fafafa] px-4 py-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-x-red" />
                    <span className="text-[14px] leading-relaxed text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical deliverables */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex size-8 items-center justify-center"
                  style={{ background: `${cat.color}15` }}
                >
                  <FileText className="size-4" style={{ color: cat.color }} />
                </span>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  Typical deliverables
                </h3>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {service.deliverables.map((d, i) => (
                  <div
                    key={d}
                    className="flex items-start gap-3 border border-line bg-white p-4"
                  >
                    <span
                      className="mt-0.5 font-display text-[10px] font-bold tabular-nums tracking-widest shrink-0"
                      style={{ color: cat.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] leading-relaxed text-ink-muted">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How we deliver */}
            <div className="mt-12">
              <h3 className="mb-6 font-display text-xl font-bold uppercase tracking-tight text-ink">
                How we deliver
              </h3>
              <ol className="relative space-y-0">
                {/* Vertical connector */}
                <div
                  className="absolute left-[1.35rem] top-4 bottom-4 w-px"
                  style={{ background: `${cat.color}30` }}
                  aria-hidden
                />
                {service.process.map((step, i) => (
                  <li key={step} className="relative flex gap-5 pb-5 last:pb-0">
                    <span
                      className="relative z-10 mt-0.5 flex size-[2.1rem] shrink-0 items-center justify-center rounded-sm font-display text-[11px] font-bold text-white"
                      style={{ background: cat.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 pt-1.5 pb-5 border-b border-line last:border-b-0">
                      <p className="text-[14px] leading-relaxed text-ink-muted">{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <Button href="/contact" variant="primary" className="mt-10 gap-2">
              Discuss this service
              <ArrowUpRight className="size-4" />
            </Button>
          </Reveal>

          {/* RIGHT — Media + brochure */}
          <Reveal delay={0.08}>
            <div className="sticky top-28 space-y-5">
              <AssetImage
                alt={service.title}
                slot={service.asset}
                kind="service"
                tone="dark"
                label={service.title}
                caption={service.title}
                aspect="portrait"
                className="w-full"
              />
              {service.gallery && service.gallery.length > 1 ? (
                <div className="grid grid-cols-2 gap-3">
                  {service.gallery.slice(1, 5).map((item, idx) => (
                    <AssetImage
                      key={item}
                      alt={`${service.title} detail ${idx + 2}`}
                      slot={item}
                      kind="service"
                      tone="light"
                      aspect="landscape"
                    />
                  ))}
                </div>
              ) : null}
              <BrochureCta />
            </div>
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
