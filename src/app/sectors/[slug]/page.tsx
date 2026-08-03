import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getSector, getService, sectors, projects } from "@/data/site";
import { getSectorUniqueness } from "@/data/sectorStories";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { RelatedLinks } from "@/components/shared/CtaBlocks";
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
  return {
    title: `${sector.title} Engineering Challenges | FORMX`,
    description: sector.summary,
  };
}

export default async function SectorDetailPage({ params }: Props) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const uniqueness = getSectorUniqueness(slug);

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
      <section className="border-b border-line bg-white pt-24 pb-14 md:pt-28 md:pb-16">
        <Container>
          <Link
            href="/sectors"
            transitionTypes={["nav-back"]}
            className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40 hover:text-x-red"
          >
            ← Sectors
          </Link>
          <p className="mt-6 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Sector engineering
          </p>
          <h1
            className="mt-3 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            {sector.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            What engineering challenges make this sector unique?
          </p>
        </Container>
      </section>

      {/* Uniqueness narrative */}
      <section className="bg-[#0d0d0d] py-16 text-white md:py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
              <AssetImage
                alt={sector.title}
                slot={sector.asset}
                kind="sector"
                fit="cover"
                aspect="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.06} className="flex flex-col justify-center lg:col-span-7">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Why this sector is different
            </p>
            <p className="mt-5 text-[17px] leading-[1.9] text-white/80">{uniqueness.uniqueness}</p>
            <p className="mt-5 text-[14px] leading-[1.85] text-white/50">
              {uniqueness.differentiator}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Challenges as engineering problems */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Engineering problems we solve
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
              Constraints that reshape the package
            </h2>
          </Reveal>
          <div className="mt-10 space-y-0 divide-y divide-line border-y border-line">
            {sector.challenges.map((c, i) => (
              <Reveal key={c} delay={0.04 * i}>
                <div className="grid gap-3 py-6 md:grid-cols-12">
                  <span className="font-display text-[11px] font-bold text-x-red md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] font-medium leading-snug text-ink md:col-span-11">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FORMX response systems */}
      <section className="border-y border-line bg-[#f7f7f7] py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              FORMX response systems
            </p>
            <ul className="mt-6 space-y-4">
              {uniqueness.systems.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Practice capabilities
            </p>
            <ul className="mt-6 space-y-3">
              {sector.capabilities.map((cap) => (
                <li key={cap} className="border-l-2 border-line pl-4 text-[14px] text-ink-muted">
                  {cap}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-[1.85] text-ink-muted">{sector.summary}</p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white"
            >
              Talk to our sector lead
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <RelatedLinks title="Related disciplines" items={serviceLinks} />
      <RelatedLinks title="Related projects" items={relatedProjects} />
      <StickyEnquire label={`Talk ${sector.title}`} />
    </>
  );
}
