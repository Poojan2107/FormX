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
  return { title: sector.title, description: sector.summary };
}

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
    .filter((p) => tokens(sector.title).some((w) => tokens(p.sector).includes(w)))
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
            {/* Sector Challenges */}
            <div>
              <SectionHeader eyebrow="The Problem" title="Critical Sector Challenges" />

              <div className="space-y-3">
                {sector.challenges.map((c, i) => (
                  <div
                    key={c}
                    className="formx-cut-x formx-edge formx-edge-x x-hover-rail flex items-start gap-4 border border-line bg-[#fafafa] p-4 transition-colors hover:border-x-red/40 hover:bg-white"
                  >
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-x-red font-display text-[11px] font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] font-medium leading-relaxed text-ink">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FormX Engineering Capabilities */}
            <div className="mt-14">
              <SectionHeader eyebrow="Our Response" title="FormX Sector Capabilities" />

              <div className="grid gap-3 sm:grid-cols-2">
                {sector.capabilities.map((cap, i) => (
                  <div
                    key={cap}
                    className="formx-cut-x formx-edge formx-edge-x x-hover-rail group relative flex flex-col justify-between overflow-hidden border border-line bg-white p-5 transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_10px_25px_rgba(222,48,36,0.1)]"
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
