import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Cpu,
  Layers,
  Ruler,
  ShieldCheck,
  Zap,
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

const featureIcons = [ShieldCheck, Cpu, Layers, Compass, Ruler, Zap];

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-6 bg-x-red" />
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink md:text-2xl">
        {title}
      </h2>
    </div>
  );
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

  const cat = categoryLabels[slug] ?? "Engineering Practice";

  return (
    <>
      {/* Sleek Dark Architectural Hero Header */}
      <PageHero
        eyebrow={cat}
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
            {/* Scope Highlights */}
            <div>
              <SectionHeader eyebrow="The Scope" title="Core Engineering Scope" />

              <div className="grid gap-4 sm:grid-cols-2">
                {service.highlights.map((item, i) => {
                  const Icon = featureIcons[i % featureIcons.length];
                  return (
                    <div
                      key={item}
                      className="formx-cut-x formx-edge formx-edge-x x-hover-rail group relative flex flex-col justify-between overflow-hidden border border-line bg-[#fafafa] p-5 transition-all duration-300 hover:border-x-red/50 hover:bg-white hover:shadow-[0_12px_28px_rgba(222,48,36,0.1)]"
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
                      <span
                        className="absolute bottom-0 left-0 h-[2px] w-0 bg-x-red transition-all duration-400 group-hover:w-full"
                        aria-hidden
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Typical Deliverables */}
            <div className="mt-14">
              <SectionHeader eyebrow="The Output" title="GFC Drawing Deliverables" />

              <div className="grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((d, i) => (
                  <div
                    key={d}
                    className="formx-cut-x formx-edge formx-edge-x x-hover-rail flex items-start gap-3 border border-line bg-white p-4 transition-colors hover:border-x-red/40"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-x-red/10 font-display text-[10px] font-bold text-x-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] font-medium leading-relaxed text-ink">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Timeline */}
            <div className="mt-14">
              <SectionHeader eyebrow="The Process" title="Execution Workflow" />

              <div className="space-y-4">
                {service.process.map((step, i) => (
                  <div
                    key={step}
                    className="formx-cut-x formx-edge formx-edge-x x-hover-rail group relative flex items-start gap-4 border border-line bg-[#fcfcfc] p-5 transition-all hover:border-x-red/40 hover:bg-white"
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
