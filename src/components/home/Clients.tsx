import Link from "next/link";
import { clients } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Clients() {
  const row1 = clients.slice(0, Math.ceil(clients.length / 2));
  const row2 = clients.slice(Math.ceil(clients.length / 2));
  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];

  return (
    <section
      id="clients"
      className="scroll-mt-32 overflow-hidden bg-white py-20 md:py-24"
    >
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Our clients"
            title="Trusted by leading organisations"
            description="Manufacturing, infrastructure, and institutional clients across India that value coordinated, construction-ready design."
            align="center"
            className="mx-auto max-w-2xl"
          />
          <Link
            href="/clients"
            className="text-[13px] font-semibold text-ink transition-colors hover:text-x-red"
          >
            View all clients →
          </Link>
        </Reveal>
      </Container>

      {/* Dual-row marquee */}
      <div className="relative mt-12 space-y-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        {/* Row 1 — left to right */}
        <div className="animate-marquee flex w-max gap-3">
          {marquee1.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="formx-cut-sm formx-edge formx-edge-sm flex h-[68px] w-48 shrink-0 items-center justify-center border border-line bg-white px-5 transition-all duration-200 hover:border-x-red/30 hover:shadow-[0_4px_20px_rgba(222,48,36,0.06)]"
              title={client.name}
            >
              <span className="font-display text-[13px] font-bold tracking-[0.06em] text-ink/60 transition-colors hover:text-ink">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 — right to left */}
        <div className="animate-marquee-reverse flex w-max gap-3" style={{ animationDuration: "48s" }}>
          {marquee2.map((client, i) => (
            <div
              key={`${client.name}-r2-${i}`}
              className="formx-cut-sm formx-edge formx-edge-sm flex h-[68px] w-48 shrink-0 items-center justify-center border border-line bg-white px-5 transition-all duration-200 hover:border-x-red/30 hover:shadow-[0_4px_20px_rgba(222,48,36,0.06)]"
              title={client.name}
            >
              <span className="font-display text-[13px] font-bold tracking-[0.06em] text-ink/60 transition-colors hover:text-ink">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
