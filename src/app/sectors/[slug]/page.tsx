import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getSector, getService, sectors, projects } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { ProofStrip } from "@/components/shared/ProofStrip";

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
      meta: "Discipline",
      image: s!.asset,
    }));

  const sameSectorProjects = projects.filter((p) =>
    tokens(sector.title).some((w) => tokens(p.sector).includes(w)),
  );
  const fallbackProjects = projects.filter((p) => !sameSectorProjects.includes(p));
  const relatedProjects = [...sameSectorProjects, ...fallbackProjects]
    .slice(0, 3)
    .map((p) => ({
      href: `/projects/${p.slug}`,
      title: p.client,
      meta: `${p.sector} · ${p.location}`,
      image: p.assets.cover,
    }));

  return (
    <>
      <PageHero
        eyebrow="Sector expertise"
        title={sector.title}
        description={sector.summary}
        crumbs={[
          { label: "Sectors", href: "/sectors" },
          { label: sector.title },
        ]}
        image={{ slot: sector.asset, kind: "sector" }}
      />

      <ProofStrip compact />

      <section className="bg-white section-y">
        <Container className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="relative lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#111] lg:aspect-auto lg:min-h-[520px]">
              <AssetImage
                alt={sector.title}
                slot={sector.asset}
                kind="sector"
                aspect="auto"
                fit="cover"
                tone="dark"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                  Facility typology
                </p>
                <p className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-white">
                  {sector.title}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
              Sector challenges
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
              What this facility type demands
            </h2>

            <ul className="mt-6 space-y-0 border-y border-line">
              {sector.challenges.map((c, i) => (
                <li
                  key={c}
                  className="flex gap-3 border-b border-line py-3.5 last:border-b-0"
                >
                  <span className="font-display text-[11px] font-bold text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] font-medium leading-snug text-ink">{c}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
              FORMX capabilities
            </p>
            <ul className="mt-3 space-y-2">
              {sector.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="border-l-2 border-x-red pl-3 text-[13px] leading-snug text-ink-muted"
                >
                  {cap}
                </li>
              ))}
            </ul>

            <Button href="/contact" variant="primary" className="mt-8 gap-2">
              Talk to our sector lead
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </Container>
      </section>

      <RelatedLinks title="Related services" items={serviceLinks} />
      <RelatedLinks title="Related projects" items={relatedProjects} />

      <CtaBand
        title={`Build your ${sector.title.toLowerCase()} facility with FORMX`}
        description="Coordinated GFC packages — Architecture, Structure, Civil & MEP under one window."
        secondary={{ label: "View related projects", href: "/projects" }}
      />
      <StickyEnquire label={`Talk ${sector.title}`} />
    </>
  );
}
