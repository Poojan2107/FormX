import { Check } from "lucide-react";
import { philosophy } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";

const collab = [
  "Cross-functional expertise",
  "Clear coordination",
  "Integrated workflows",
  "Reliable outcomes",
];

export function Philosophy() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Design philosophy"
              title="Thoughtful. Practical. Sustainable."
            />
            <div className="mt-10 space-y-8">
              {philosophy.map((item) => (
                <div key={item.num} className="border-l-2 border-x-red pl-5">
                  <h3 className="font-display text-lg font-bold text-ink">
                    <span className="text-x-red">{item.num}.</span> {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 hidden md:block">
              <PlaceholderMedia
                aspect="wide"
                tone="light"
                label="Philosophy visual"
                caption="Integrated thinking, practical outcomes"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="formx-cut-lg formx-edge formx-edge-lg flex h-full flex-col justify-between border border-line bg-[#1a1a1a] p-8 text-white md:p-10">
              <div>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
                  Collaboration
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-balance md:text-3xl">
                  Better designs start with better collaboration
                </h3>
                <ul className="mt-8 space-y-3.5">
                  {collab.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[14px] text-white/70"
                    >
                      <Check className="size-4 shrink-0 text-x-red" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[13px] text-white/45">
                  Because the best results are built by a team.
                </p>
              </div>
              <Button href="/contact" variant="primary" className="mt-10 w-fit">
                Book a consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
