import Link from "next/link";
import { blogs } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function Resources() {
  return (
    <section id="resources" className="scroll-mt-32 bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Resources"
            title="Read our insights"
            description="Guidance for facility owners and project teams planning coordinated design and construction-ready packages."
          />
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {blogs.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={0.05 * i}>
              <Link
                href={`/knowledge-center/${post.slug}`}
                transitionTypes={["nav-forward"]}
                className="group relative block min-h-[300px] overflow-hidden bg-[#111]"
              >
                <AssetImage
                  alt={post.title}
                  slot={post.asset}
                  kind="article"
                  tone="dark"
                  fit="cover"
                  aspect="landscape"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    {post.date}
                  </p>
                  <h3 className="mt-2 font-display text-[17px] font-bold uppercase tracking-tight text-white transition-colors group-hover:text-x-red">
                    {post.title}
                  </h3>
                  <span className="mt-4 inline-block font-display text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
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
