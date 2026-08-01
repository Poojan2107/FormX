import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { ProofStrip } from "@/components/shared/ProofStrip";

export const metadata: Metadata = {
  title: "Knowledge Center | Industrial Design Insights by FORMX",
  description:
    "Industrial facility planning insights, utility coordination, and GFC delivery perspectives by Hiren J. Shah, Founder & Managing Director at FORMX Consultants.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Knowledge Center"
        description="Practical industrial facility perspectives for promoters, project directors, and engineering teams."
        crumbs={[{ label: "Knowledge Center" }]}
        image={{ slot: "insights/policy.jpg", kind: "article" }}
      />

      <ProofStrip compact />

      <section className="bg-white section-y">
        <Container>
          <Reveal>
            <div className="mb-10 flex flex-col gap-5 border border-line bg-[#141414] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center bg-x-red font-display text-base font-bold text-white">
                  HJS
                </div>
                <div>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                    Thought leadership
                  </p>
                  <h2 className="mt-1 font-display text-lg font-bold text-white">
                    Perspectives by Hiren J. Shah
                  </h2>
                  <p className="text-[12px] text-white/45">
                    Founder & Managing Director · FormX Consultants
                  </p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/hiren-j-shah/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 border border-white/20 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-x-red hover:bg-x-red"
              >
                LinkedIn Profile
              </a>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, i) => (
              <Reveal key={post.slug} delay={0.03 * (i % 3)}>
                <Link
                  href={`/knowledge-center/${post.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group flex h-full flex-col overflow-hidden bg-[#111]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <AssetImage
                      alt={post.title}
                      slot={post.asset}
                      kind="article"
                      tone="dark"
                      fit="cover"
                      aspect="auto"
                      objectPosition="center"
                      zoomOnHover
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="absolute inset-0 h-full w-full"
                    />
                    <span className="absolute left-3 top-3 z-10 bg-x-red px-2 py-1 font-display text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col bg-[#111] p-5 md:p-6">
                    <div className="mb-2 flex items-center gap-2 text-[11px] text-white/45">
                      <span>{post.date}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-x-red">{post.author}</span>
                    </div>
                    <h2 className="font-display text-base font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red md:text-lg">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-white/55">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-block font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
                      Read article →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 border border-line p-6 md:p-8">
            <h3 className="font-display text-xl font-bold uppercase text-ink md:text-2xl">
              Subscribe for delivery notes
            </h3>
            <p className="mt-2 mb-5 max-w-xl text-sm text-ink-muted">
              Occasional insights on industrial planning — no noise.
            </p>
            <div className="max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Brief FORMX on your next industrial mandate"
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}
