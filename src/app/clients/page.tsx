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
          <p className="mb-8 text-sm text-ink-muted">
            Drop client logo SVGs into{" "}
            <code className="text-x-red">/public/assets/clients/</code> matching
            each slot below — names remain until logos are added.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {clients.map((client, i) => (
              <Reveal key={client.name} delay={0.02 * (i % 8)}>
                <div
                  className="x-border flex h-28 flex-col items-center justify-center gap-1 border border-line bg-[#fafafa] px-4 transition-colors"
                  title={`assets/${client.logo}`}
                >
                  <span className="font-display text-sm font-bold tracking-[0.06em] text-ink/50">
                    {client.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.14em] text-ink/30">
                    {client.logo.split("/").pop()}
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
