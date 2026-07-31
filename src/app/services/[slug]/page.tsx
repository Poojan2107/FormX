import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  ArrowUpRight,
  FileText,
  Layers,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Zap,
  ChevronRight,
  Compass,
  Ruler,
} from "lucide-react";
import { getService, getSector, services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrochureCta, CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { PageHero } from "@/components/ui/PageHero";

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
  "architectural-design": { label: "Architecture & Planning", color: "#de3024" },
  "site-infrastructure": { label: "Architecture & Planning", color: "#de3024" },
  "sustainable-design": { label: "Architecture & Planning", color: "#de3024" },
  "structural-engineering": { label: "Structure & Civil", color: "#de3024" },
  "civil-engineering": { label: "Structure & Civil", color: "#de3024" },
  "mechanical-utility-engineering": { label: "MEP & Utilities", color: "#de3024" },
  "hvac-engineering": { label: "MEP & Utilities", color: "#de3024" },
  "electrical-engineering": { label: "MEP & Utilities", color: "#de3024" },
  "fire-protection-engineering": { label: "MEP & Utilities", color: "#de3024" },
  "project-management": { label: "Delivery", color: "#de3024" },
};

const featureIcons = [ShieldCheck, Cpu, Layers, Compass, Ruler, Zap];

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

  const cat = categoryMap[slug] ?? { label: "Engineering Practice", color: "#de3024" };

  return (
    <>
      {/* Sleek Dark Architectural Hero Header */}
      <PageHero
        eyebrow={cat.label}
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Highlights KPI Badges Ribbon */}
      <div className="border-b border-line bg-[#0d0d0d] py-6 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-x-red" />
            <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
              IS Code Compliant
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-5 text-x-red" />
            <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
              100% GFC Construction Ready
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="size-5 text-x-red" />
            <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
              BIM 3D Coordinated
            </span>
          </div>
        </Container>
      </div>

      {/* Main Visual Grid Content */}
      <section className="bg-white py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* LEFT — Visual Scope & Deliverables Cards */}
          <Reveal>
            {/* Scope Highlights — Visual Graphic Cards */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex size-9 items-center justify-center border border-x-red/30 bg-x-red/10 text-x-red">
                  <Layers className="size-5" />
                </span>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  Core Engineering Scope
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {service.highlights.map((item, i) => {
                  const Icon = featureIcons[i % featureIcons.length];
                  return (
                    <div
                      key={item}
                      className="group flex flex-col justify-between border border-line bg-[#fafafa] p-5 transition-all duration-300 hover:border-x-red/50 hover:bg-white hover:shadow-[0_12px_28px_rgba(222,48,36,0.1)]"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Icon className="size-5 text-x-red" />
                        <span className="font-display text-[10px] font-bold text-ink/30">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="font-display text-sm font-bold leading-snug text-ink group-hover:text-x-red transition-colors">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Typical Deliverables — Visual Checklist Grid */}
            <div className="mt-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex size-9 items-center justify-center border border-x-red/30 bg-x-red/10 text-x-red">
                  <FileText className="size-5" />
                </span>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  GFC Drawing Deliverables
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((d, i) => (
                  <div
                    key={d}
                    className="flex items-start gap-3 border.5 border-line bg-white p-4 transition-colors hover:border-x-red/40"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-x-red/10 text-[10px] font-bold text-x-red">
                      ✓
                    </span>
                    <span className="text-[13px] font-medium leading-relaxed text-ink">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Timeline — Visual Process Nodes */}
            <div className="mt-14">
              <h3 className="mb-6 font-display text-xl font-bold uppercase tracking-tight text-ink">
                Execution Workflow
              </h3>

              <div className="space-y-4">
                {service.process.map((step, i) => (
                  <div
                    key={step}
                    className="group relative flex items-start gap-4 border border-line bg-[#fcfcfc] p-5 transition-all hover:border-x-red/40 hover:bg-white"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center border border-x-red bg-x-red font-display text-sm font-bold text-white shadow-md">
                      0{i + 1}
                    </span>
                    <div className="pt-0.5">
                      <p className="font-display text-xs font-bold uppercase tracking-wider text-x-red">
                        Phase 0{i + 1}
                      </p>
                      <p className="mt-1 text-[14px] leading-relaxed text-ink">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button href="/contact" variant="primary" className="mt-10 gap-2 px-8 py-4">
              Engage FormX For This Service
              <ArrowUpRight className="size-4" />
            </Button>
          </Reveal>

          {/* RIGHT — Visual Gallery & Capability Card */}
          <Reveal delay={0.08}>
            <div className="sticky top-28 space-y-6">
              <div className="overflow-hidden border border-line bg-[#121212] shadow-xl">
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
              </div>

              {service.gallery && service.gallery.length > 1 ? (
                <div className="grid grid-cols-2 gap-3">
                  {service.gallery.slice(1, 5).map((item, idx) => (
                    <div key={item} className="overflow-hidden border border-line bg-[#121212]">
                      <AssetImage
                        alt={`${service.title} detail ${idx + 2}`}
                        slot={item}
                        kind="service"
                        tone="light"
                        aspect="landscape"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
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
