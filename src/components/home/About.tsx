import { about } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <AssetImage
              alt="FormX industrial design practice"
              slot="about/home-about.jpg"
              kind="studio"
              tone="light"
              label="About FormX"
              caption="Coordination that holds from concept to site"
              aspect="landscape"
              className="lg:aspect-[5/4]"
            />
          </Reveal>

          <Reveal delay={0.08} className="order-1 lg:order-2">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-ink-muted md:text-base">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 36)}>{p}</p>
              ))}
            </div>
            <Button href={about.cta.href} variant="outline" className="mt-8">
              {about.cta.label}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
