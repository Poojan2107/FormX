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
  title: "Knowledge Center",
  description:
    "Insights on industrial facility planning, utilities, sustainability, and project delivery.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Knowledge Center"
        description="Practical writing for promoters, project directors, and engineering teams planning industrial facilities."
        crumbs={[
          { label: "Resources", href: "/knowledge-center" },
          { label: "Knowledge Center" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, i) => (
              <Reveal key={post.slug} delay={0.03 * (i % 3)}>
                <Link
                  href={`/knowledge-center/${post.slug}`}
                  className="x-border group flex h-full flex-col border border-line transition-all hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
                >
                  <AssetImage
                    alt={post.title}
                    slot={post.asset}
                    kind="article"
                    tone="light"
                    label={post.category}
                    aspect="landscape"
                  />
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                      {post.date} · {post.author}
                    </p>
                    <h2 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-x-red">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-ink-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 text-[13px] font-semibold">
                      Read more →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 border border-line bg-[#fafafa] p-8 md:p-10">
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
