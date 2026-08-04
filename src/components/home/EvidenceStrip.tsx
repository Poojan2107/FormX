import Link from "next/link";
import { formxEvidence } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

function EvidenceCard({
  item,
  delay,
}: {
  item: (typeof formxEvidence)[number];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <VisualFrame
        slot={item.slot}
        alt={item.caption}
        fit={item.fit}
        aspect="landscape"
        tone="dark"
        className="border border-line"
      />
      <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
        {item.label}
      </p>
      <p className="mt-1 text-[13px] leading-[1.7] text-ink-muted">{item.caption}</p>
    </Reveal>
  );
}

/** PDF/brochure evidence — process + built proof */
export function EvidenceStrip() {
  return (
    <section className="border-b border-line bg-white py-20 md:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Evidence from the practice
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            Models. Frames. Sites. Built work.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
            From the FORMX brochure and project record. Each frame proves a stage of Before Issue —
            thinking, structure, site, and completed facility.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {formxEvidence.map((item, i) => {
            const card = <EvidenceCard item={item} delay={0.04 * i} />;
            if ("href" in item && item.href) {
              return (
                <Link
                  key={item.slot}
                  href={item.href}
                  transitionTypes={["nav-forward"]}
                  className="block transition-opacity hover:opacity-90"
                >
                  {card}
                </Link>
              );
            }
            return <div key={item.slot}>{card}</div>;
          })}
        </div>
      </Container>
    </section>
  );
}
