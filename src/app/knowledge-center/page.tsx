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
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FORMX Engineering Journal | Technical Insights & Seismic Detailing",
  description:
    "Engineering technical notes, IS code compliance breakdowns, structural detailing guides, and cleanroom HVAC zoning schematics by Hiren J. Shah.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Publications"
        title="FORMX Engineering Journal"
        description="Technical notes, structural detailing guidelines, and multidisciplinary coordination insights for industrial project directors and promoters."
        crumbs={[{ label: "Engineering Journal" }]}
        image={{ slot: "insights/column-splice.jpg", kind: "article" }}
      />

      <ProofStrip />

      <section className="bg-white py-16 md:py-24">
        <Container>
          {/* Author & Technical Direction Panel */}
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 border border-line bg-[#121212] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8 formx-cut-x formx-edge formx-edge-x">
              <div className="flex items-center gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center bg-x-red font-display text-lg font-black text-white shadow-lg">
                  HJS
                </div>
                <div>
                  <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.22em] text-x-red">
                    Technical Leadership &amp; Editor
                  </span>
                  <h2 className="mt-1 font-display text-xl font-extrabold text-white sm:text-2xl">
                    Engineering Notes by Hiren J. Shah
                  </h2>
                  <p className="text-[12px] text-white/60">
                    Founder &amp; Managing Director · FORMX Consultants
                  </p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/hiren-j-shah/"
                target="_blank"
                rel="noopener noreferrer"
                className="formx-cut-sm inline-flex shrink-0 items-center gap-2 border border-white/20 bg-white/10 px-5 py-3 font-display text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition-all hover:border-x-red hover:bg-x-red"
              >
                LinkedIn Profile
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>

          {/* Technical Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, i) => (
              <Reveal key={post.slug} delay={0.04 * (i % 3)}>
                <Link
                  href={`/knowledge-center/${post.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="formx-cut-x formx-edge formx-edge-x x-hover-rail group flex h-full flex-col overflow-hidden border border-line bg-white shadow-sm transition-all duration-300 hover:border-x-red/50 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-[#0d0d0d]">
                    <AssetImage
                      alt={post.title}
                      slot={post.asset}
                      kind="article"
                      tone="dark"
                      fit="cover"
                      aspect="auto"
                      objectPosition="center"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute left-3.5 top-3.5 z-10 border border-x-red/40 bg-x-red px-2.5 py-1 font-display text-[9px] font-extrabold uppercase tracking-[0.18em] text-white shadow-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold text-ink/40">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="text-x-red">{post.author}</span>
                    </div>

                    <h2 className="font-display text-lg font-extrabold uppercase leading-snug tracking-tight text-ink transition-colors group-hover:text-x-red">
                      {post.title}
                    </h2>

                    <p className="mt-2.5 line-clamp-3 flex-1 text-[13px] leading-relaxed text-ink-muted">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 border-t border-line/60 pt-4">
                      <span className="inline-flex items-center gap-1.5 font-display text-[11px] font-extrabold uppercase tracking-[0.14em] text-x-red transition-all group-hover:translate-x-1">
                        Read Engineering Note →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Newsletter Subscription Box */}
          <div className="mt-14 border border-line bg-[#fafafa] p-6 md:p-10 formx-cut-x formx-edge formx-edge-x">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.22em] text-x-red">
                  Engineering Digest
                </span>
                <h3 className="mt-1 font-display text-2xl font-extrabold uppercase text-ink md:text-3xl">
                  Subscribe to Technical Delivery Notes
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Quarterly technical briefs on industrial structural codes, cleanroom utility distribution, and statutory approval processes.
                </p>
              </div>

              <div className="w-full">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Brief FORMX on your next industrial mandate"
        description="Consult with our engineering leads early on structural systems, civil grading, and MEP utility corridors."
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}
