import { whyPoints, method } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Cpu, Layers, Ruler, Zap, CheckCircle2 } from "lucide-react";

const icons = [ShieldCheck, Cpu, Layers, Ruler, Zap, CheckCircle2];

export function WhyFormx() {
  return (
    <section id="why" className="scroll-mt-32 bg-[#fafafa] section-y border-t border-line">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why FormX"
            title="What sets our practice apart"
            description="Construction readiness, multidisciplinary coordination, and execution support — delivered as one accountable window."
          />
        </Reveal>

        {/* Clean Icon-Rich Advantage Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={point.num} delay={0.04 * (i % 3)} className="h-full">
                <div className="group flex h-full flex-col justify-between border border-line bg-white p-6 transition-all duration-300 hover:border-x-red/40 hover:shadow-[0_12px_28px_rgba(222,48,36,0.08)] md:p-7">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex size-10 items-center justify-center rounded-sm bg-x-red/10 text-x-red">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-display text-[11px] font-bold text-ink/30">
                        {point.num}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold leading-snug tracking-tight text-ink group-hover:text-x-red transition-colors md:text-lg">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.75] text-ink-muted">
                      {point.body}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-line/60 pt-4 flex items-center justify-between">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
                      FormX Standard
                    </span>
                    <span className="h-0.5 w-6 bg-x-red transition-all duration-300 group-hover:w-10" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Execution Method Banner */}
        <Reveal className="mt-8 border border-line bg-[#161616] p-6 text-white md:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <SectionHeading
              eyebrow={method.eyebrow}
              title={method.title}
              className="[&_*]:text-white [&_.text-ink-muted]:text-white/60"
            />
            <p className="text-[14px] leading-[1.8] text-white/70 md:text-[15px]">
              {method.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
