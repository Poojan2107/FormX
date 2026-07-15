import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog, blogs } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { RelatedLinks, CtaBand } from "@/components/shared/CtaBlocks";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  const related = blogs
    .filter((b) => b.slug !== slug)
    .slice(0, 3)
    .map((b) => ({
      href: `/knowledge-center/${b.slug}`,
      title: b.title,
      meta: b.category,
    }));

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${post.date} · ${post.author}`}
        crumbs={[
          { label: "Knowledge Center", href: "/knowledge-center" },
          { label: post.title },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <AssetImage
              alt={post.title}
              slot={post.asset}
              kind="article"
              tone="light"
              label={post.category}
              aspect="wide"
              className="mb-10"
            />
            <div className="space-y-5 text-[16px] leading-[1.85] text-ink-muted">
              {post.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
            <p className="mt-10">
              <Link
                href="/knowledge-center"
                className="text-sm font-semibold text-ink hover:text-x-red"
              >
                ← Back to Knowledge Center
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      <RelatedLinks title="More insights" items={related} />
      <CtaBand title="Discuss your facility brief with FormX" />
    </>
  );
}
