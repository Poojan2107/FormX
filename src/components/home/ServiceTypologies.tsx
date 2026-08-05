import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioServices, portfolioClosing } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceTypologies() {
  return (
    <section className="border-b border-line bg-bg section-y">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="font-label text-[11px] text-x-red">Practice</p>
          <h2
            className="mt-3 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            What we lock before sheets leave
          </h2>
          <p className="mt-6 measure-essay text-[17px] leading-[1.8] text-ink-muted">
            Four facility typologies. Same discipline every time: Architecture, Structure and
            Infrastructure must agree.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {portfolioServices.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i}>
              <Link
                href={item.href}
                transitionTypes={["nav-forward"]}
                className="group grid gap-4 py-8 transition-colors md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <span className="font-display text-sm font-bold text-x-red md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4 md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.75] text-ink-muted md:col-span-6">{item.body}</p>
                <span className="hidden justify-end md:col-span-1 md:flex">
                  <ArrowUpRight className="size-5 text-ink/25 transition-colors group-hover:text-x-red" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-[15px] leading-[1.8] text-ink/50">{portfolioClosing}</p>
      </Container>
    </section>
  );
}
