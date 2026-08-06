import type { Service } from "@/data/services";
import { getServiceStory } from "@/data/serviceStories";
import { Container } from "@/components/ui/Container";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

/** Images as evidence frames — not full-bleed lifestyle heroes */
export function DisciplineStory({ service }: { service: Service }) {
  const story = getServiceStory(service);

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <VisualFrame
              slot={service.asset}
              alt={service.title}
              fit="contain"
              aspect="landscape"
              tone="dark"
              className="border border-line"
            />
            <p className="mt-3 editorial-meta text-ink/40">
              {story.family} · engineering artifact
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="eyebrow text-x-red">
              How this discipline thinks
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.9] text-ink-muted">{story.lead}</p>
            <ul className="mt-8 space-y-5">
              {story.thinking.map((item, i) => (
                <li key={item} className="x-hover-rail border border-line bg-[#faf9f6] px-5 py-5">
                  <span className="editorial-meta text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-[15px] font-medium leading-[1.75] text-ink">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-[#f7f7f7] py-16 md:py-20">
        <Container className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-x-red">
              Artifacts we produce
            </p>
            <ul className="mt-6 space-y-3">
              {story.artifacts.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[14px] text-ink">
                  <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="eyebrow text-x-red">
              GFC deliverables
            </p>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="border-l-2 border-line pl-4 text-[14px] leading-[1.8] text-ink-muted">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-x-red">
              On site
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-ink-muted">{story.siteReality}</p>
            <p className="mt-6 text-[15px] leading-[1.9] text-ink-muted">{service.summary}</p>
            <Button href="/contact" variant="primary" className="mt-8 gap-2">
              Discuss how this discipline applies to your facility
              <ArrowUpRight className="size-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
