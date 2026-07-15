import Link from "next/link";
import { clients } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Clients() {
  const row = [...clients, ...clients];

  return (
    <section id="clients" className="scroll-mt-24 overflow-hidden bg-white py-20 md:py-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Our clients"
            title="Explore our clientele"
            description="Our clients are our biggest assets — trust built through repeat collaborations and dependable delivery."
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

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24" />
        <div className="animate-marquee flex w-max gap-3">
          {row.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="x-border flex h-[72px] w-44 shrink-0 items-center justify-center border border-line bg-white px-4"
              title={`Logo slot: assets/${client.logo}`}
            >
              <span className="font-display text-[12px] font-bold tracking-[0.08em] text-ink/40">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
