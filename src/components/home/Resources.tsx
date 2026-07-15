import Link from "next/link";
import { blogs } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function Resources() {
  return (
    <section id="resources" className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Resources"
            title="Read our insights"
            description="Guidance for facility owners and project teams planning industrial development."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogs.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={0.05 * i}>
              <Link
                href={`/knowledge-center/${post.slug}`}
                className="x-border group flex h-full flex-col border border-line bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
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
                    {post.date}
                  </p>
                  <h3 className="mt-3 font-display text-[17px] font-bold tracking-tight text-ink transition-colors group-hover:text-x-red">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-ink-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 text-[13px] font-semibold text-ink">
                    Read more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
