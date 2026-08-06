"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

/** V3 — Why FORMX exists: observation before capability list */
export function WhyWeExist() {
  return (
    <section className="border-b border-line bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Why FORMX exists
            </p>
            <h2
              className="mt-3 font-display font-black uppercase leading-[1.06] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
            >
              Projects become expensive when disciplines meet too late
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
              Every unresolved coordination issue eventually appears on the construction site. That
              is why FORMX works <span className="font-semibold text-ink">Before Issue</span> —
              Architecture, Structure and Infrastructure answer each other before drawings leave the
              studio, with technical proficiency and practical wisdom.
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
              We do not measure success by sheet count. We measure it by whether the facility can be
              built, approved and operated without inventing answers on site.
            </p>
            <Link
              href="/#before-issue"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
            >
              The Before Issue method
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <VisualFrame
              slot="about/studio-cover.jpg"
              alt="FORMX Studio — people close to the work"
              fit="cover"
              aspect="portrait"
              tone="dark"
              caption="Reviews · markups · site walks — people close to the work"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
