import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  portfolioServices,
  portfolioClosing,
} from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Exact service typology language from FORMX.pdf */
export function ServiceTypologies() {
  return (
    <section className="border-y border-line bg-white py-20 md:py-24">
      <Container>
        <Reveal>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Our services
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            What we take on — after how we think
          </h2>
          <p className="mt-4 max-w-xl text-[14px] leading-[1.85] text-ink-muted">
            Four facility typologies from the FORMX brochure. Each one still depends on Architecture,
            Structure and Infrastructure answering together.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {portfolioServices.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i}>
              <Link
                href={item.href}
                transitionTypes={["nav-forward"]}
                className={`group flex h-full flex-col justify-between p-7 transition-colors md:p-8 ${
                  item.tone === "dark"
                    ? "bg-x-red text-white hover:bg-x-red-hover"
                    : "bg-[#f3e8e6] text-ink hover:bg-[#edd9d5]"
                }`}
              >
                <div>
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-tight md:text-2xl">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 text-[14px] leading-[1.8] ${
                      item.tone === "dark" ? "text-white/85" : "text-ink-muted"
                    }`}
                  >
                    {item.body}
                  </p>
                </div>
                <span
                  className={`mt-6 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] ${
                    item.tone === "dark" ? "text-white" : "text-x-red"
                  }`}
                >
                  Explore
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-[14px] leading-[1.85] text-ink-muted">
            {portfolioClosing}
          </p>
          <p className="mt-4 max-w-3xl text-[13px] leading-[1.75] text-ink/45">
            We also assist with quantity estimation, construction support, and coordination for
            seamless execution.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
