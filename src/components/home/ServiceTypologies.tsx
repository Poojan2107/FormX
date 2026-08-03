import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Founder overlay: service typology — not only 10 discipline cards */
const typologies = [
  {
    title: "High-Rise & Residential",
    body: "Resilient high-rise and residential structures—safe, resource-optimized frames that support architectural vision and long-term use.",
    href: "/services/structural-engineering",
    tone: "dark" as const,
  },
  {
    title: "Industrial Projects",
    body: "Manufacturing facilities engineered for operational flow, heavy loads, safety and phased expansion.",
    href: "/sectors/industrial-park",
    tone: "light" as const,
  },
  {
    title: "Institutional & Commercial",
    body: "Schools, hospitals and office buildings designed for usability, structural integrity and statutory compliance.",
    href: "/projects",
    tone: "light" as const,
  },
  {
    title: "Strengthening & Retrofitting",
    body: "NDT assessment, beam/column jacketing, load reassessment, solar mounting vetting (IS 875 Part 3) and life extension of existing industrial assets.",
    href: "/services/structural-engineering",
    tone: "dark" as const,
  },
];

export function ServiceTypologies() {
  return (
    <section className="border-y border-line bg-white py-20 md:py-24">
      <Container>
        <Reveal>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Our services
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            Design solutions in engineering &amp; architecture
          </h2>
          <p className="mt-4 max-w-xl text-[14px] leading-[1.85] text-ink-muted">
            We also assist with quantity estimation, construction support and coordination for seamless
            execution.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {typologies.map((item, i) => (
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
            At FormX, we don&apos;t just design structures—we craft lasting solutions that reflect
            stability, creativity and precision. Every structure has a story—and we&apos;re here to
            engineer it right.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
