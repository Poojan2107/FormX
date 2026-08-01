import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getSector, getService, sectors, projects } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { LeadStrip } from "@/components/shared/LeadStrip";

type Props = { params: Promise<{ slug: string }> };

const STOPWORDS = new Set(["&", "and", "for", "the", "ev"]);
const tokens = (s: string) =>
  s
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: `${sector.title} | Industrial Design Consultants India | FORMX`,
    description: sector.summary,
  };
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
      meta: "Engineering Discipline",
    }));

  const sameSectorProjects = projects.filter((p) =>
    tokens(sector.title).some((w) => tokens(p.sector).includes(w)),
  );
  const fallbackProjects = projects.filter((p) => !sameSectorProjects.includes(p));
  const relatedProjects = [...sameSectorProjects, ...fallbackProjects].slice(0, 3).map((p) => ({
    href: `/projects/${p.slug}`,
    title: p.client,
    meta: `${p.sector} · ${p.location}`,
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

      <ProofStrip />

      {/* Main Visual Grid Content */}
      <section className="bg-white section-y">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            {/* Sector Challenges */}
            <div>
              <SectionHeader eyebrow="The Problem" title="Critical Sector Challenges" />

              <div className="space-y-3">
                {sector.challenges.map((c, i) => (
                  <div
                    key={c}
                    className="formx-cut-x formx-edge formx-edge-x x-hover-rail flex items-start gap-4 border border-line bg-[#fafafa] p-4 transition-colors hover:border-x-red/40 hover:bg-white"
                  >
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-x-red font-display text-[11px] font-bold text-white shadow-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] font-medium leading-relaxed text-ink">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FormX Engineering Capabilities — Clean 2-column Grid */}
            <div className="mt-12">
              <SectionHeader eyebrow="Our Response" title="FormX Sector Capabilities" />

              <div className="grid gap-4 sm:grid-cols-2">
                {sector.capabilities.map((cap, i) => (
                  <div
                    key={cap}
                    className="formx-cut-x formx-edge formx-edge-x x-hover-rail group relative flex flex-col justify-between overflow-hidden border border-line bg-white p-5 transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_10px_25px_rgba(222,48,36,0.1)]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <CheckCircle2 className="size-5 text-x-red" />
                      <span className="font-display text-[10px] font-bold text-ink/30">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-ink group-hover:text-x-red transition-colors leading-snug">
                      {cap}
                    </p>
                    <span
                      className="absolute bottom-0 left-0 h-[2px] w-0 bg-x-red transition-all duration-400 group-hover:w-full"
                      aria-hidden
                    />
                  </div>
                ))}
              </div>
            </div>

            <Button href="/contact" variant="primary" className="mt-10 gap-2 px-8 py-4">
              Talk To Our Sector Lead
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>

          {/* Right Column: Dedicated Photorealistic Industry Image Stage */}
          <Reveal delay={0.08}>
            <div className="sticky top-28 space-y-6">
              <div className="group relative overflow-hidden border border-line bg-[#121212] shadow-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <AssetImage
                    alt={sector.title}
                    slot={sector.asset}
                    kind="sector"
                    aspect="portrait"
                    fit="cover"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <span className="absolute left-4 top-4 border border-x-red/40 bg-x-red px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-md">
                    {sector.title} Facility
                  </span>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-display text-lg font-bold uppercase tracking-tight">
                      Integrated Greenfield Delivery
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/70">
                      Coordinated architecture, structural steel/RCC, and process utilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <RelatedLinks title="Related services" items={serviceLinks} />
      <RelatedLinks title="Related projects" items={relatedProjects} />

      <LeadStrip
        title={`Discuss this ${sector.title.toLowerCase()} mandate`}
        subtitle="Share process loads, cleanroom class, crane capacity, or logistics throughput — we scope Architecture through MEP as one package."
      />

      <CtaBand
        title={`Build your ${sector.title.toLowerCase()} facility with FORMX`}
        description="Coordinated GFC packages — Architecture, Structure, Civil & MEP under one window."
        secondary={{ label: "View related projects", href: "/projects" }}
      />
      <StickyEnquire label={`Talk ${sector.title}`} />
    </>
  );
}
