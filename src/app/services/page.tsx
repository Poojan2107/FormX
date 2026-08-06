import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  services,
  portfolioServices,
  portfolioServicesNote,
  portfolioClosing,
} from "@/data/site";
import { getServiceStory } from "@/data/serviceStories";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services | Architecture · Structure · Infrastructure",
  description:
    "High-rise & residential, industrial, institutional & commercial, strengthening & retrofitting — Architecture, Structure and Infrastructure.",
};

const groups = [
  {
    title: "Architecture",
    slugs: ["architectural-design", "sustainable-design"],
  },
  {
    title: "Structure",
    slugs: ["structural-engineering", "civil-engineering"],
  },
  {
    title: "Infrastructure",
    slugs: ["site-infrastructure", "project-management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="fx-grain border-b border-black bg-[#0a0a09] text-white">
        <Container className="pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Services</p>
              <h1
                className="mt-5 max-w-[16ch] font-display font-black leading-[0.96] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
              >
                Three disciplines, one facility.
              </h1>
            </div>
            <div className="lg:pb-1">
              <p className="text-[15.5px] leading-[1.9] text-white/55 md:text-[16.5px]">
                FormX does not treat Architecture, Structure, and Infrastructure as parallel silos.
                They are coordinated against the same reality before anything is issued.
              </p>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/40">{portfolioServicesNote}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 md:py-24">
        <Container>
          <p className="eyebrow text-x-red">Typologies</p>
          <h2 className="mt-3 max-w-[20ch] font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            What FormX takes on
          </h2>
          <div className="mt-10 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
            {portfolioServices.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <Link
                  href={item.href}
                  transitionTypes={["nav-forward"]}
                  className="group grid gap-4 py-9 md:grid-cols-12 md:items-baseline md:gap-8 md:py-11"
                >
                  <span className="font-label text-[10px] tracking-[0.24em] text-x-red md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.85] text-ink/58 md:col-span-6">
                    {item.body}
                  </p>
                  <span className="hidden justify-end md:col-span-1 md:flex">
                    <ArrowUpRight className="size-5 text-ink/15 transition-colors group-hover:text-x-red" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-[15px] leading-[1.85] text-ink/45">{portfolioClosing}</p>
        </Container>
      </section>

      <section className="bg-[#fafaf8] py-16 md:py-24">
        <Container>
          <p className="eyebrow text-x-red">Disciplines</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            Architecture · Structure · Infrastructure
          </h2>
          <div className="mt-12 grid gap-0 border-t border-ink/[0.08] lg:grid-cols-3">
            {groups.map((g) => (
              <div
                key={g.title}
                className="border-b border-ink/[0.08] py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                  {g.title}
                </h3>
                <ul className="mt-6 space-y-0">
                  {g.slugs.map((slug) => {
                    const svc = services.find((s) => s.slug === slug);
                    if (!svc) return null;
                    const story = getServiceStory(svc);
                    return (
                      <li key={slug} className="border-t border-ink/[0.08] first:border-t-0">
                        <Link
                          href={`/services/${slug}`}
                          transitionTypes={["nav-forward"]}
                          className="group flex items-start justify-between gap-4 py-5"
                        >
                          <span>
                            <span className="block font-display text-[15px] font-bold tracking-tight text-ink transition-colors group-hover:text-x-red">
                              {svc.title}
                            </span>
                            {story?.lead ? (
                              <span className="mt-1.5 block text-[13px] leading-[1.7] text-ink/45 line-clamp-2">
                                {story.lead}
                              </span>
                            ) : null}
                          </span>
                          <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-ink/20 transition-colors group-hover:text-x-red" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="fx-grain border-t border-black bg-[#0a0a09] py-16 text-white md:py-20">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-x-red">Continue</p>
              <p className="mt-4 text-[16px] leading-[1.9] text-white/58">
                Bring the plot, the process and the constraints. FormX starts before issue — not
                after tender.
              </p>
            </div>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="fx-btn-primary shrink-0"
            >
              Discuss your facility
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
