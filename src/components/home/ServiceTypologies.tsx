import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioServices, portfolioClosing } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceTypologies() {
  return (
    <section className="border-y border-line bg-[#fafafa] py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="font-label text-[11px] tracking-[0.28em] text-x-red">Practice</p>
          <h2
            className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
          >
            Four ways a facility asks to be engineered
          </h2>
          <p className="mt-6 max-w-[42ch] text-[16px] font-medium leading-[1.8] text-ink-muted">
            Same discipline every time — Architecture, Structure and Infrastructure must agree before
            sheets leave.
          </p>
        </Reveal>

        <div className="mt-14 space-y-0">
          {portfolioServices.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i}>
              <Link
                href={item.href}
                transitionTypes={["nav-forward"]}
                className="group grid gap-4 border-t border-ink/10 py-8 transition-colors last:border-b md:grid-cols-12 md:items-center md:gap-8 md:py-10"
              >
                <span className="font-display text-4xl font-black text-ink/10 transition-colors group-hover:text-x-red md:col-span-2 md:text-5xl">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4 md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-[15px] font-medium leading-[1.75] text-ink-muted md:col-span-5">
                  {item.body}
                </p>
                <span className="hidden md:col-span-1 md:flex md:justify-end">
                  <ArrowUpRight className="size-6 text-ink/15 transition-colors group-hover:text-x-red" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-[15px] leading-[1.8] text-ink/45">{portfolioClosing}</p>
      </Container>
    </section>
  );
}
