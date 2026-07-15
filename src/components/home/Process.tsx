import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RedShape } from "@/components/ui/BrandMarks";
import { TiltCard } from "@/components/ui/TiltCard";

export function Process() {
  return (
    <section className="bg-white section-y">
      <Container>
        <Reveal>
          <SectionHeading
            title="Our development process"
            description="A structured, design-first approach that reduces delivery risk, ensures clarity, and keeps industrial projects predictable from concept to site."
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={0.06 * i}>
              <TiltCard
                intensity={5}
                className="group h-full min-h-[280px] border-0 bg-black p-7 text-white md:p-8"
              >
                <div className="relative mb-10 inline-flex h-14 items-center">
                  <RedShape
                    variant={step.shape}
                    className="relative z-0 opacity-95 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-display text-3xl font-bold text-white mix-blend-difference">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-white md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-white/55">
                  {step.body}
                </p>
                <span className="mt-8 block h-px w-0 bg-x-red transition-all duration-300 group-hover:w-12" />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
