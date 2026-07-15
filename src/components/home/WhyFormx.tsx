import { whyPoints, method } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const highlights = whyPoints.slice(0, 4);

export function WhyFormx() {
  return (
    <section id="why" className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why FormX"
            title="What sets the practice apart"
            description="Ownership, coordination, and senior involvement — delivered as one accountable window."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {highlights.map((point, i) => (
            <Reveal key={point.num} delay={0.04 * (i % 2)}>
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

        <Reveal className="mt-14 border border-line bg-white p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <SectionHeading eyebrow={method.eyebrow} title={method.title} />
            <p className="text-[15px] leading-[1.75] text-ink-muted">
              {method.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
