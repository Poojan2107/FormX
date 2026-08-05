import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  portfolioServices,
  portfolioClosing,
} from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Four typologies — engineering voice, no × stamps */
export function ServiceTypologies() {
  return (
    <section className="border-y border-line bg-white py-20 md:py-24">
      <Container>
        <Reveal>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Our services
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            What we lock Before Issue
          </h2>
          <p className="mt-4 measure-studio text-[14px] leading-[1.85] text-ink-muted">
            Four facility typologies — constraints first, sheets second.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {portfolioServices.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i}>
              <Link
                href={item.href}
                transitionTypes={["nav-forward"]}
                className={`group flex h-full min-h-[280px] flex-col justify-between p-6 transition-colors md:min-h-[320px] md:p-7 ${
                  item.tone === "dark"
                    ? "bg-x-red text-white hover:bg-x-red-hover"
                    : "bg-[#f6eeec] text-ink hover:bg-[#f0e4e0]"
                }`}
              >
                <div>
                  <span
                    className={`font-display text-[10px] font-bold uppercase tracking-[0.2em] ${
                      item.tone === "dark" ? "text-white/70" : "text-x-red"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold uppercase leading-snug tracking-tight md:text-xl">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 text-[13px] leading-[1.75] ${
                      item.tone === "dark" ? "text-white/85" : "text-ink-muted"
                    }`}
                  >
                    {item.body}
                  </p>
                </div>
                <span
                  className={`mt-8 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] ${
                    item.tone === "dark" ? "text-white" : "text-x-red"
                  }`}
                >
                  Explore
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-[14px] leading-[1.85] text-ink-muted">
            {portfolioClosing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
