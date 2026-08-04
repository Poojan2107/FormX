import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog, blogs } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { ArticleJsonLd } from "@/components/shared/JsonLd";
import { VisualFrame } from "@/components/ui/VisualFrame";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return {};
  return {
    title: `${post.title} | FORMX Engineering Journal`,
    description: post.excerpt,
  };
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
      image: b.asset,
    }));

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        author={post.author}
        authorRole={post.authorRole}
        url={`/knowledge-center/${post.slug}`}
        image={`https://formxconsultants.com/assets/${post.asset}`}
      />

      {/* Technical note header */}
      <section className="border-b border-line bg-white pt-24 pb-12 md:pt-28 md:pb-16">
        <Container className="max-w-3xl">
          <Link
            href="/knowledge-center"
            transitionTypes={["nav-back"]}
            className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40 hover:text-x-red"
          >
            ← Engineering Journal
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="text-x-red">{post.category}</span>
            <span className="text-ink/25">·</span>
            <span className="text-ink/40">{post.date}</span>
            <span className="text-ink/25">·</span>
            <span className="text-ink/40">Technical note</span>
          </div>
          <h1
            className="mt-4 font-display font-black uppercase leading-[1.1] tracking-tight text-ink"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            {post.title}
          </h1>
          <p className="mt-4 text-[14px] text-ink-muted">
            {post.author} · {post.authorRole}
          </p>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-10 md:py-12">
        <Container className="max-w-3xl">
          <VisualFrame
            slot={post.asset}
            alt={post.title}
            fit="contain"
            aspect="landscape"
            tone="dark"
            className="border border-line"
          />
          <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
            Figure · Engineering reference
          </p>
        </Container>
      </section>

      {/* Whitepaper body */}
      <section className="bg-white py-14 md:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="border-l-2 border-x-red pl-5 text-[16px] leading-[1.9] text-ink-muted italic">
              {post.excerpt}
            </p>
          </Reveal>

          <div className="mt-12 space-y-6 text-[15px] leading-[1.9] text-ink-muted md:text-[16px]">
            {post.body.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>

          {/* Founder / author stamp */}
          <div className="mt-14 border-t border-line pt-8">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
              Author
            </p>
            <p className="mt-2 font-display text-lg font-extrabold text-ink">{post.author}</p>
            <p className="text-[13px] text-ink-muted">{post.authorRole}</p>
            {post.authorLinkedin ? (
              <a
                href={post.authorLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red"
              >
                LinkedIn →
              </a>
            ) : null}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="inline-flex bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white"
            >
              Discuss this topic with FORMX
            </Link>
            <Link
              href="/knowledge-center"
              transitionTypes={["nav-back"]}
              className="inline-flex items-center font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink/50 hover:text-x-red"
            >
              More journal notes
            </Link>
          </div>
        </Container>
      </section>

      <RelatedLinks title="Related notes" items={related} />
      <StickyEnquire label="Discuss this engineering topic" />
    </>
  );
}
