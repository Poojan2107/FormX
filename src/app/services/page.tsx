import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  title: "Our Services | Design Solutions in Engineering & Architecture | FORMX",
  description:
    "High-rise & residential, industrial projects, institutional & commercial, and strengthening & retrofitting — plus quantity estimation and construction support.",
};

const groups = [
  {
    title: "Architecture & Planning",
    slugs: ["architectural-design", "site-infrastructure", "sustainable-design"],
  },
  {
    title: "Structure & Civil",
    slugs: ["structural-engineering", "civil-engineering"],
  },
  {
    title: "Utilities & Fire",
    slugs: [
      "mechanical-utility-engineering",
      "hvac-engineering",
      "electrical-engineering",
      "fire-protection-engineering",
    ],
  },
  {
    title: "Delivery",
    slugs: ["project-management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Our services
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Design solutions in engineering &amp; architecture
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            {portfolioServicesNote}
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-16">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2">
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
                    <h2 className="font-display text-xl font-extrabold uppercase tracking-tight md:text-2xl">
                      {item.title}
                    </h2>
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
          <p className="mt-10 max-w-3xl text-[14px] leading-[1.85] text-ink-muted">
            {portfolioClosing}
          </p>
        </Container>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="border-t border-line py-14 md:py-16">
          <Container>
            <Reveal>
              <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink md:text-2xl">
                {group.title}
              </h2>
            </Reveal>
            <div className="mt-8 divide-y divide-line">
              {group.slugs.map((slug) => {
                const service = services.find((s) => s.slug === slug);
                if (!service) return null;
                const story = getServiceStory(service);
                return (
                  <Reveal key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      transitionTypes={["nav-forward"]}
                      className="group grid gap-3 py-6 transition-colors hover:bg-[#fafafa] md:grid-cols-12 md:gap-6 md:py-8"
                    >
                      <div className="md:col-span-4">
                        <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-ink group-hover:text-x-red">
                          {service.title}
                        </h3>
                      </div>
                      <div className="md:col-span-7">
                        <p className="text-[14px] leading-[1.8] text-ink-muted">
                          {story?.lead ?? service.summary}
                        </p>
                      </div>
                      <div className="flex items-center md:col-span-1 md:justify-end">
                        <ArrowUpRight className="size-4 text-x-red opacity-40 transition-opacity group-hover:opacity-100" />
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
