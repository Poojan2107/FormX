import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSector,
  getService,
  sectors,
  projects,
} from "@/data/site";
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
        eyebrow="Sector"
        title={sector.title}
        description={sector.summary}
        crumbs={[
          { label: "Sectors", href: "/sectors" },
          { label: sector.title },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold uppercase text-ink">
              Sector challenges we design for
            </h2>
            <ul className="mt-8 space-y-4">
              {sector.challenges.map((c) => (
                <li key={c} className="border-l-2 border-x-red pl-4 text-[15px] text-ink-muted">
                  {c}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-xl font-bold uppercase text-ink">
              FormX capabilities
            </h3>
            <ul className="mt-5 space-y-3">
              {sector.capabilities.map((c) => (
                <li key={c} className="text-[14px] text-ink-muted">
                  <span className="mr-2 text-x-red">×</span>
                  {c}
                </li>
              ))}
            </ul>

            <Button href="/contact" className="mt-10">
              Talk to our sector team
            </Button>
          </Reveal>
          <Reveal delay={0.08}>
            <AssetImage
              alt={sector.title}
              slot={sector.asset}
              kind="sector"
              tone="dark"
              label={sector.title}
              caption="Sector facility visual"
              aspect="portrait"
            />
          </Reveal>
        </Container>
      </section>

      <RelatedLinks title="Related services" items={serviceLinks} />
      {relatedProjects.length ? (
        <RelatedLinks title="Related projects" items={relatedProjects} />
      ) : null}

      <section className="border-t border-line bg-white py-10">
        <Container>
          <Link href="/sectors" className="text-sm font-semibold hover:text-x-red">
            ← All sectors
          </Link>
        </Container>
      </section>

      <CtaBand title={`Build your ${sector.title.toLowerCase()} facility with FormX`} />
      <StickyEnquire label={`Talk ${sector.title}`} />
    </>
  );
}
