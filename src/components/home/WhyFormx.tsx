import { whyPoints, method } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyFormx() {
  return (
    <section id="why" className="scroll-mt-24 bg-[#fafafa] py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why FormX"
            title="Why is FormX your preferred design partner?"
            description="Differentiators that reduce delivery risk — ownership, coordination, and senior involvement on industrial mandates."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-11 md:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point, i) => (
            <Reveal key={point.num} delay={0.04 * (i % 3)}>
              <p className="font-display text-[11px] font-bold tracking-[0.16em] text-x-red">
                {point.num}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink">
                {point.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">
                {point.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border border-line bg-white p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            <SectionHeading eyebrow={method.eyebrow} title={method.title} />
            <p className="text-[15px] leading-[1.75] text-ink-muted md:text-base">
              {method.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
