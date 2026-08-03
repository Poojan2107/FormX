import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export const metadata: Metadata = {
  title: "FORMX Engineering Journal | Technical Notes & Construction Lessons",
  description:
    "Engineering technical notes, IS code references, structural detailing and construction lessons from FORMX practice.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      {/* Journal masthead — not Medium hero */}
      <section className="border-b border-line bg-[#0d0d0d] pt-24 pb-14 text-white md:pt-32 md:pb-16">
        <Container>
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.32em] text-x-red">
            FORMX Engineering Journal
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Technical notes from practice
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-white/60">
            Whitepaper-length thinking on detailing, IS codes, site observations and construction
            lessons—written for project directors and engineering leads, not as blog content marketing.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
            <span>IS code references</span>
            <span>Detailing examples</span>
            <span>Site observations</span>
            <span>Founder insights</span>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Current issue notes
            </p>
          </Reveal>

          {/* Publication list — not article cards */}
          <div className="mt-10 divide-y divide-line border-y border-line">
            {blogs.map((post, i) => (
              <Reveal key={post.slug} delay={0.03 * i}>
                <Link
                  href={`/knowledge-center/${post.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group grid gap-4 py-8 transition-colors hover:bg-[#fafafa] md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-2">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                      Note {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[12px] text-ink/40">{post.date}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-ink/40">
                      {post.category}
                    </p>
                    <p className="mt-1 text-[12px] text-ink-muted">{post.author}</p>
                  </div>
                  <div className="md:col-span-7">
                    <h2 className="font-display text-xl font-extrabold uppercase leading-snug tracking-tight text-ink group-hover:text-x-red md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-ink-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-block font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                      Open technical note →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-8 border border-line bg-[#f7f7f7] p-8 md:grid-cols-2 md:p-10">
            <div>
              <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.22em] text-x-red">
                Journal digest
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-ink">
                Receive technical delivery notes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Occasional briefs on structural codes, utility coordination and statutory processes—no
                marketing drip.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Container>
      </section>
    </>
  );
}
