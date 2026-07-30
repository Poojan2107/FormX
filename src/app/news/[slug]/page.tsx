import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNews, news } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/shared/CtaBlocks";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        eyebrow="News"
        title={item.title}
        description={item.date}
        crumbs={[
          { label: "News & Events", href: "/news" },
          { label: item.title },
        ]}
      />
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <AssetImage
              alt={item.title}
              slot={item.asset}
              kind="article"
              aspect="wide"
              tone="light"
              label="News"
              className="mb-10"
            />
            <div className="space-y-5 text-[16px] leading-[1.85] text-ink-muted">
              {item.body.map((p) => (
                <p key={p.slice(0, 36)}>{p}</p>
              ))}
            </div>
            {slug === "career-openings" ? (
              <Link
                href="/career"
                className="mt-8 inline-block text-sm font-semibold text-ink hover:text-x-red"
              >
                View careers →
              </Link>
            ) : null}
            <p className="mt-10">
              <Link href="/news" className="text-sm font-semibold hover:text-x-red">
                ← All news
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>
      <CtaBand title="Connect with FormX" />
    </>
  );
}
