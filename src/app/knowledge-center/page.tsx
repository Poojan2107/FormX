import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { CtaBand } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "Knowledge Center | Insights by Hiren J. Shah",
  description:
    "Industrial facility planning insights, utility coordination, and design perspectives by Hiren J. Shah, Founder & Managing Director at FormX Consultants.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Knowledge Center"
        description="Practical writing and industrial facility perspectives for promoters, project directors, and engineering teams."
        crumbs={[
          { label: "Resources", href: "/knowledge-center" },
          { label: "Knowledge Center" },
        ]}
      />

      <section className="bg-white py-14 md:py-20">
        <Container>
          {/* Author Feature Banner */}
          <Reveal>
            <div className="formx-cut-x formx-edge formx-edge-x mb-12 border border-line bg-[#1a1a1a] p-6 text-white md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="formx-cut-sm flex size-14 shrink-0 items-center justify-center bg-x-red font-display text-lg font-bold text-white shadow-[0_4px_16px_rgba(222,48,36,0.3)]">
                    HJS
                  </div>
                  <div>
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                      Thought Leadership
                    </p>
                    <h2 className="mt-1 font-display text-xl font-bold text-white">
                      Perspectives by Hiren J. Shah
                    </h2>
                    <p className="text-[12px] text-white/50">
                      Founder & Managing Director · FormX Consultants
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/hiren-j-shah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-x-red hover:bg-x-red"
                >
                  <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </Reveal>

          {/* Blog posts grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, i) => (
              <Reveal key={post.slug} delay={0.03 * (i % 3)}>
                <Link
                  href={`/knowledge-center/${post.slug}`}
                  className="formx-cut-x formx-edge formx-edge-x x-hover-rail group flex h-full flex-col border border-line bg-white transition-all hover:border-x-red/35 hover:shadow-[0_16px_40px_rgba(222,48,36,0.06)]"
                >
                  <AssetImage
                    alt={post.title}
                    slot={post.asset}
                    kind="article"
                    tone="light"
                    label={post.category}
                    caption={post.title}
                    aspect="landscape"
                  />
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-ink-muted">
                        {post.date}
                      </span>
                      <span className="text-[11px] font-semibold text-x-red">
                        By {post.author}
                      </span>
                    </div>
                    <h2 className="font-display text-base font-bold text-ink group-hover:text-x-red md:text-lg">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-[13px] leading-[1.65] text-ink-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-x-red">
                      Read article →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="formx-cut-x formx-edge formx-edge-x mt-16 border border-line bg-white p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold uppercase text-ink">
              Subscribe for delivery notes
            </h3>
            <p className="mt-2 mb-6 max-w-xl text-sm text-ink-muted">
              Occasional insights on industrial planning — no noise.
            </p>
            <div className="max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand title="Need a tailored facility briefing?" />
    </>
  );
}
