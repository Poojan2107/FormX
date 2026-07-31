import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  Compass,
} from "lucide-react";
import { getSector, getService, sectors, projects } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return { title: sector.title, description: sector.summary };
}

export default async function SectorDetailPage({ params }: Props) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const serviceLinks = sector.relatedServices
    .map((s) => getService(s))
    .filter(Boolean)
    .map((s) => ({
      href: `/services/${s!.slug}`,
      title: s!.title,
      meta: "Service",
    }));

  const relatedProjects = projects
    .filter(
      (p) =>
        p.sector.toLowerCase().includes(sector.title.split(" ")[0].toLowerCase()) ||
        sector.title.toLowerCase().includes(p.sector.split(" ")[0].toLowerCase()),
    )
    .slice(0, 3)
    .map((p) => ({
      href: `/projects/${p.slug}`,
      title: p.client,
      meta: p.sector,
    }));

  return (
    <>
      <PageHero
        eyebrow="Sector Expertise"
        title={sector.title}
        description={sector.summary}
        crumbs={[
          { label: "Sectors", href: "/sectors" },
          { label: sector.title },
        ]}
      />

      {/* Main Visual Infographic Grid */}
      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            {/* Sector Challenges — Visual Alert Cards */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex size-9 items-center justify-center border border-x-red/30 bg-x-red/10 text-x-red">
                  <AlertTriangle className="size-5" />
                </span>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  Critical Sector Challenges
                </h2>
              </div>

              <div className="space-y-3">
                {sector.challenges.map((c, i) => (
                  <div
                    key={c}
                    className="flex items-start gap-4 border border-line bg-[#fafafa] p-4 transition-colors hover:border-x-red/40 hover:bg-white"
                  >
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-x-red text-[11px] font-bold text-white">
                      !
                    </span>
                    <span className="text-[14px] font-medium leading-relaxed text-ink">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FormX Engineering Capabilities — Visual Icon Cards */}
            <div className="mt-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex size-9 items-center justify-center border border-x-red/30 bg-x-red/10 text-x-red">
                  <ShieldCheck className="size-5" />
                </span>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  FormX Sector Capabilities
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {sector.capabilities.map((cap, i) => (
                  <div
                    key={cap}
                    className="group flex flex-col justify-between border border-line bg-white p-5 transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_10px_25px_rgba(222,48,36,0.1)]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <CheckCircle2 className="size-5 text-x-red" />
                      <span className="font-display text-[10px] font-bold text-ink/30">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-ink group-hover:text-x-red transition-colors">
                      {cap}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button href="/contact" variant="primary" className="mt-10 gap-2 px-8 py-4">
              Talk To Our Sector Lead
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>

          {/* Dedicated Photorealistic Industry Image Backdrop */}
          <Reveal delay={0.08}>
            <div className="sticky top-28 space-y-6">
              <div className="group relative overflow-hidden border border-line bg-[#121212] shadow-2xl">
                <AssetImage
                  alt={sector.title}
                  slot={sector.asset}
                  kind="sector"
                  aspect="portrait"
                  fit="cover"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <span className="absolute left-4 top-4 border border-x-red/40 bg-x-red px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  {sector.title} Facility
                </span>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-display text-lg font-bold uppercase">
                    Integrated Greenfield Delivery
                  </p>
                  <p className="mt-1 text-[12px] text-white/70">
                    Coordinated architecture, structural steel/RCC, and process utilities.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <RelatedLinks title="Related services" items={serviceLinks} />
      {relatedProjects.length ? (
        <RelatedLinks title="Related projects" items={relatedProjects} />
      ) : null}

      <CtaBand title={`Build your ${sector.title.toLowerCase()} facility with FormX`} />
      <StickyEnquire label={`Talk ${sector.title}`} />
    </>
  );
}
