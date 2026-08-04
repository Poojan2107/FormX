import type { Service } from "@/data/services";
import { getServiceStory, type DisciplineFamily } from "@/data/serviceStories";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

const familyTone: Record<DisciplineFamily, string> = {
  architecture: "from-[#1a1512] to-[#0c0c0c]",
  structure: "from-[#12151a] to-[#0a0a0a]",
  fire: "from-[#1a100f] to-[#0c0c0c]",
  electrical: "from-[#10141a] to-[#0a0a0a]",
  mechanical: "from-[#101816] to-[#0a0a0a]",
  infrastructure: "from-[#141410] to-[#0a0a0a]",
  delivery: "from-[#141414] to-[#0a0a0a]",
};

export function DisciplineStory({ service }: { service: Service }) {
  const story = getServiceStory(service);

  return (
    <>
      {/* Discipline motif band */}
      <section className={cn("bg-gradient-to-b text-white", familyTone[story.family])}>
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              {story.motif}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              {service.title}
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-white/70">
              {story.lead}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* How this discipline thinks */}
      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#111] lg:aspect-auto lg:min-h-[420px]">
              <AssetImage
                alt={service.title}
                slot={service.asset}
                kind="service"
                fit="cover"
                aspect="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Engineering artifact language · {story.family}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Engineering thinking
            </p>
            <ul className="mt-6 space-y-5">
              {story.thinking.map((item, i) => (
                <li key={item} className="border-l-2 border-x-red pl-5">
                  <span className="font-display text-[10px] font-bold text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-[15px] font-medium leading-snug text-ink">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Artifacts + deliverables */}
      <section className="border-y border-line bg-[#f7f7f7] py-16 md:py-20">
        <Container className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
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
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              GFC deliverables
            </p>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="border-l-2 border-line pl-4 text-[14px] text-ink-muted">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Site reality */}
      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              On site
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-ink-muted">{story.siteReality}</p>
            <p className="mt-6 text-[14px] leading-[1.85] text-ink-muted">{service.summary}</p>
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
