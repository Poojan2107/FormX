import type { Metadata } from "next";
import { clients } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Organisations that trust FormX for industrial design and engineering delivery.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Explore our clientele"
        description="Our clients are our biggest assets. Long-standing relationships and repeat collaborations reflect the reliability FormX brings to industrial mandates."
        crumbs={[
          { label: "Our Work", href: "/projects" },
          { label: "Our Clients" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {clients.map((client, i) => (
              <Reveal key={client.name} delay={0.02 * (i % 8)}>
                <div className="formx-cut-x formx-edge formx-edge-x group flex h-28 items-center justify-center border border-line bg-white px-4 transition-all duration-200 hover:border-x-red/35 hover:shadow-[0_8px_24px_rgba(222,48,36,0.06)]">
                  <span className="font-display text-base font-bold tracking-[0.04em] text-ink/50 transition-colors group-hover:text-ink/80">
                    {client.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to build with FormX?"
        description="Greenfield, expansion, or industrial park — engage from early planning through site support."
      />
    </>
  );
}
