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
import { LeadStrip } from "@/components/shared/LeadStrip";

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

      <ProofStrip />

      <section className="bg-white section-y">
        <Container>
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

          <div className="formx-cut-x formx-edge formx-edge-x mt-16 border border-line bg-white p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold uppercase text-ink">
              Subscribe for delivery notes
            </h3>
            <p className="mt-2 mb-6 max-w-xl prose-measure text-sm text-ink-muted">
              Occasional insights on industrial planning — no noise.
            </p>
            <div className="max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>

      <LeadStrip
        title="Need a tailored facility briefing?"
        subtitle="Share your site, capacity, and timeline — FORMX leads respond with coordinated multidisciplinary scope."
      />

      <CtaBand
        title="Brief FORMX on your next industrial mandate"
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}
