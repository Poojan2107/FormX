import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { LeadStrip } from "@/components/shared/LeadStrip";

export const metadata: Metadata = {
  title: "News & Events | FORMX Consultants Practice Updates",
  description:
    "Updates from FORMX Consultants — practice news, openings, greenfield delivery notes, and engineering team announcements.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="News & Events"
        description="Practice updates, delivery notes, and opportunities across the FORMX team."
        crumbs={[
          { label: "Resources", href: "/knowledge-center" },
          { label: "News & Events" },
        ]}
        image={{ slot: "news/expansion.jpg", kind: "article" }}
      />

      <ProofStrip />

      <section className="bg-white section-y">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {news.map((item, i) => (
              <Reveal key={item.slug} delay={0.04 * i}>
                <Link
                  href={`/news/${item.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="x-desat formx-cut-x formx-edge formx-edge-x x-hover-rail group flex h-full flex-col border border-line bg-white transition-all hover:border-x-red/35 hover:shadow-[0_12px_36px_rgba(222,48,36,0.06)]"
                >
                  <AssetImage
                    alt={item.title}
                    slot={item.asset}
                    kind="article"
                    tone="dark"
                    label="News"
                    aspect="landscape"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-x-red">
                      {item.date}
                    </p>
                    <h2 className="mt-3 font-display text-xl font-bold text-ink group-hover:text-x-red">
                      {item.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-ink-muted line-clamp-3">
                      {item.excerpt}
                    </p>
                    <span className="mt-5 inline-block text-[12px] font-semibold uppercase tracking-[0.12em] text-x-red transition-transform duration-300 group-hover:translate-x-1">
                      Read update →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <LeadStrip
        title="Follow FORMX for the next delivery note"
        subtitle="Or brief our leads directly on your greenfield or expansion mandate."
      />

      <CtaBand
        title="Ready to start a facility conversation?"
        secondary={{ label: "View knowledge center", href: "/knowledge-center" }}
      />
    </>
  );
}
