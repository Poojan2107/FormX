import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNews, news } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { ArticleJsonLd } from "@/components/shared/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return {};
  return {
    title: `${item.title} | FORMX News`,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  return (
    <>
      <ArticleJsonLd
        title={item.title}
        description={item.excerpt}
        datePublished={item.date}
        author="FormX Consultants"
        url={`/news/${item.slug}`}
        image={`https://formxconsultants.com/assets/${item.asset}`}
      />

      <section className="border-b border-line bg-white pt-24 pb-14 md:pt-32 md:pb-16">
        <Container>
          <p className="eyebrow text-x-red">
            News
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black leading-[1.02] tracking-tight text-ink"
            style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
          >
            {item.title}
          </h1>
          <p className="mt-4 editorial-meta text-ink/40">
            {item.date}
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <VisualFrame
              slot={item.asset}
              alt={item.title}
              fit="contain"
              aspect="landscape"
              tone="light"
              className="border border-line"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-10 space-y-6 text-[15px] leading-[1.95] text-ink-muted md:text-[16px]">
              {item.body.map((p) => (
                <p key={p.slice(0, 36)}>{p}</p>
              ))}
            </div>
            <Link
              href="/knowledge-center"
              transitionTypes={["nav-back"]}
              className="mt-10 inline-flex font-label text-[10px] text-x-red transition-colors hover:text-ink"
            >
              ← Engineering Journal
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Discuss a related facility brief"
        description="Share location, typology and timeline with FORMX."
        secondary={{ label: "Contact", href: "/contact" }}
      />
      <StickyEnquire label="Discuss with FORMX" />
    </>
  );
}
