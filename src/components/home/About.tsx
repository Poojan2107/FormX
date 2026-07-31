import { about } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { ShieldCheck, Cpu, Layers, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-32 bg-white section-y">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden border border-line bg-gray-100 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <AssetImage
                alt="FormX industrial design practice"
                slot="about/home-about.jpg"
                kind="studio"
                tone="light"
                label="About FormX"
                caption="Coordination that holds from concept to site"
                aspect="landscape"
                fit="cover"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-1 lg:order-2">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-ink-muted md:text-base">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 36)}>{p}</p>
              ))}
            </div>

            {/* Capability Badges Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line/60 pt-5">
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-ink">
                <ShieldCheck className="size-4 text-x-red shrink-0" />
                100% GFC Construction Ready
              </div>
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-ink">
                <CheckCircle2 className="size-4 text-x-red shrink-0" />
                IS 1893 Seismic Detailing
              </div>
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-ink">
                <Cpu className="size-4 text-x-red shrink-0" />
                BIM 3D Coordinated
              </div>
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-ink">
                <Layers className="size-4 text-x-red shrink-0" />
                Pan-India Greenfield Delivery
              </div>
            </div>

            <Button href={about.cta.href} variant="primary" className="mt-8 px-7 py-3.5">
              {about.cta.label} →
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
