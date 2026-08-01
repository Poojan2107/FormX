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
          <div className="grid gap-3 md:grid-cols-3">
            {news.map((item, i) => (
              <Reveal key={item.slug} delay={0.04 * i}>
                <Link
                  href={`/news/${item.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group relative block min-h-[340px] overflow-hidden bg-[#111]"
                >
                  <AssetImage
                    alt={item.title}
                    slot={item.asset}
                    kind="article"
                    tone="dark"
                    fit="cover"
                    aspect="landscape"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                  <span className="absolute left-3 top-3 z-10 bg-x-red px-2 py-1 font-display text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                    News
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
                      {item.date}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red">
                      {item.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-white/60">
                      {item.excerpt}
                    </p>
                    <span className="mt-4 inline-block font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
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
