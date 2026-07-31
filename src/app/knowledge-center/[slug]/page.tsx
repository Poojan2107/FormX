import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog, blogs } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { RelatedLinks, CtaBand } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";

type Props = { params: Promise<{ slug: string }> };

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 3)
    .join("")
    .toUpperCase();

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
        description={`${post.date} · By ${post.author}`}
        crumbs={[
          { label: "Knowledge Center", href: "/knowledge-center" },
          { label: post.title },
        ]}
      />

      <section className="bg-white py-14 md:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <AssetImage
              alt={post.title}
              slot={post.asset}
              kind="article"
              tone="light"
              label={post.category}
              caption={post.title}
              aspect="wide"
              className="mb-10"
            />

            {/* Main body */}
            <div className="space-y-5 text-[15px] leading-[1.85] text-ink-muted md:text-[16px]">
              {post.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>

            {/* Author Box */}
            <div className="formx-cut-x formx-edge formx-edge-x mt-12 border border-line bg-[#fafafa] p-6 md:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="formx-cut-sm flex size-14 shrink-0 items-center justify-center bg-x-red font-display text-lg font-bold text-white shadow-[0_4px_16px_rgba(222,48,36,0.25)]">
                    {initials(post.author)}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {post.author}
                    </h3>
                    <p className="text-[12px] font-semibold text-x-red">
                      {post.authorRole ?? "Founder & Managing Director, FormX"}
                    </p>
                    <p className="mt-1 text-[12px] text-ink-muted">
                      Multidisciplinary industrial design & planning consultant.
                    </p>
                  </div>
                </div>

                {post.authorLinkedin ? (
                  <a
                    href={post.authorLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 border border-line bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ink transition-all hover:border-x-red hover:text-x-red"
                  >
                    <svg className="size-3.5 fill-current text-x-red" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                ) : null}
              </div>
            </div>

            <p className="mt-8">
              <Link
                href="/knowledge-center"
                transitionTypes={["nav-back"]}
                className="inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-x-red"
              >
                ← Back to Knowledge Center
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      <RelatedLinks title="More insights" items={related} />
      <CtaBand title="Discuss your facility brief with FormX" />
      <StickyEnquire label="Discuss this insight with FormX" />
    </>
  );
}
