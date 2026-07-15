import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Updates from FormX Consultants — practice news, openings, and delivery notes.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="News & Events"
        description="Practice updates, delivery notes, and opportunities across the FormX team."
        crumbs={[
          { label: "Resources", href: "/knowledge-center" },
          { label: "News & Events" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {news.map((item, i) => (
              <Reveal key={item.slug} delay={0.04 * i}>
                <Link
                  href={`/news/${item.slug}`}
                  className="x-border group flex h-full flex-col border border-line bg-white transition-colors hover:border-transparent"
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
                    <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-ink-muted">
                      {item.excerpt}
                    </p>
                    <span className="mt-5 text-sm font-semibold">Read →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
