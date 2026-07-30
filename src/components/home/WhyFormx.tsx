import { whyPoints, method } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function WhyFormx() {
  return (
    <section id="why" className="scroll-mt-32 bg-[#fafafa] section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why FormX"
            title="What sets the practice apart"
            description="Construction readiness, multidisciplinary coordination, and execution support — delivered as one accountable window."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point, i) => (
            <Reveal key={point.num} delay={0.04 * (i % 3)}>
              <div className="formx-cut-x formx-edge formx-edge-x group h-full border border-line bg-white p-5 transition-all duration-300 hover:border-x-red/30 hover:shadow-[0_8px_24px_rgba(222,48,36,0.05)] md:p-6">
                <p className={cn(
                  "font-display text-[11px] font-bold tracking-[0.16em] text-x-red"
                )}>
                  {point.num}
                </p>
                <h3 className="mt-3 font-display text-base font-bold leading-snug tracking-tight text-ink md:text-lg">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.75] text-ink-muted">
                  {point.body}
                </p>
                <span className="mt-5 block h-0.5 w-0 bg-x-red transition-all duration-300 group-hover:w-8" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="formx-cut-x formx-edge formx-edge-x mt-5 border border-line bg-[#1a1a1a] p-6 text-white md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <SectionHeading
              eyebrow={method.eyebrow}
              title={method.title}
              className="[&_*]:text-white [&_.text-ink-muted]:text-white/50"
            />
            <p className="text-[14px] leading-[1.8] text-white/55 md:text-[15px]">
              {method.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
