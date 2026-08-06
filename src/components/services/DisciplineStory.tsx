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
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <VisualFrame
              slot={service.asset}
              alt={service.title}
              fit="contain"
              aspect="square"
              tone="dark"
              className="border border-line"
            />
            <p className="mt-3 editorial-meta text-ink/40">
              {story.family} · engineering artifact
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="eyebrow text-x-red">How this discipline thinks</p>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.9] text-ink-muted">{story.lead}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {story.thinking.map((item, i) => (
                <li
                  key={item}
                  className="flex h-full flex-col border border-line bg-[#faf9f6] px-5 py-5"
                >
                  <span className="editorial-meta text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 flex-1 text-[14.5px] font-medium leading-[1.75] text-ink">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-[#f7f6f2] py-16 md:py-20">
        <Container>
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col border border-ink/[0.08] bg-white p-7 md:p-8">
                <p className="eyebrow text-x-red">Artifacts we produce</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3.5">
                  {story.artifacts.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-[14.5px] leading-[1.7] text-ink">
                      <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="h-full">
              <div className="flex h-full flex-col border border-ink/[0.08] bg-white p-7 md:p-8">
                <p className="eyebrow text-x-red">GFC deliverables</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3.5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="border-l-2 border-x-red/40 pl-4 text-[14.5px] leading-[1.75] text-ink/65"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-x-red">On site</p>
            <p className="mt-4 text-[16px] leading-[1.9] text-ink-muted">{story.siteReality}</p>
            <p className="mt-6 text-[15px] leading-[1.9] text-ink/55">{service.summary}</p>
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
