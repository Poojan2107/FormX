import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPage, trustMetrics } from "@/data/site";
import { leadership } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About FORMX Consultants | Multidisciplinary Engineering Consultancy, Ahmedabad",
  description:
    "FORMX is an engineering consultancy delivering coordinated Architecture, Structure, Infrastructure and Execution support from concept to GFC in Ahmedabad, India.",
};

const documentaryShots = [
  { slot: "about/studio-cover.jpg", caption: "Coordination meeting" },
  { slot: "about/home-about.jpg", caption: "Studio review" },
  { slot: "projects/pdf_p4_1.jpeg", caption: "Site execution" },
  { slot: "services/structural.jpg", caption: "Drawing review" },
];

export default function AboutPage() {
  const founder = leadership.find((p) => p.featured);

  return (
    <>
      {/* Clean hero — no BG photo clutter */}
      <section className="border-b border-line bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.28em] text-x-red">
            {aboutPage.tagline}
          </p>
          <h1
            className="mt-4 max-w-4xl font-display font-black uppercase leading-[1.02] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}
          >
            Bridging design intent with on-site execution
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            {aboutPage.intro}
          </p>
        </Container>
      </section>

      {/* Sparse metrics — truthful only */}
      <section className="border-b border-line bg-[#f7f7f7] py-12">
        <Container className="grid gap-8 sm:grid-cols-3">
          {trustMetrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-4xl font-black text-ink md:text-5xl">{m.value}</p>
              <p className="mt-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-ink/45">
                {m.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Company philosophy */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Company philosophy
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Engineering designed for execution
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
              {aboutPage.philosophy}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Why FORMX exists */}
      <section className="border-y border-line bg-[#0d0d0d] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Why FORMX exists
            </p>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-8">
            <p className="text-[18px] leading-[1.9] text-white/80 md:text-[20px]">
              {aboutPage.whyExists}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Vision / Mission / Values — editorial columns */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Principles
            </p>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
            {aboutPage.principles.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.85] text-ink-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder vision — documentary, not profile card */}
      {founder ? (
        <section className="border-t border-line bg-[#fafafa] py-20 md:py-28">
          <Container>
            <Reveal>
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Founder vision
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                {founder.name}
              </h2>
              <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/45">
                {founder.role} · Structural designers, architecture planning &amp; site execution
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-5">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111]">
                  <AssetImage
                    alt={founder.name}
                    slot={founder.asset}
                    kind="team"
                    fit="cover"
                    aspect="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08} className="flex flex-col justify-center lg:col-span-7">
                <p className="text-[16px] leading-[1.9] text-ink-muted">{aboutPage.founderVision}</p>
                <p className="mt-6 text-[15px] leading-[1.85] text-ink-muted">{founder.bio}</p>
                {founder.linkedin ? (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
                  >
                    Connect on LinkedIn →
                  </a>
                ) : null}
              </Reveal>
            </div>

            {/* Documentary strip */}
            <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
              {documentaryShots.map((shot, i) => (
                <Reveal key={shot.caption} delay={0.04 * i}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                    <AssetImage
                      alt={shot.caption}
                      slot={shot.slot}
                      kind="studio"
                      fit="cover"
                      aspect="auto"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <p className="absolute bottom-3 left-3 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white/80">
                      {shot.caption}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Multidisciplinary collaboration */}
      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Multidisciplinary collaboration
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              How disciplines work as one package
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="text-[16px] leading-[1.9] text-ink-muted">{aboutPage.collaboration}</p>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
            >
              Explore practice disciplines
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* How projects move through the office */}
      <section className="border-y border-line bg-[#0d0d0d] py-20 text-white md:py-28">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Through the office
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              How projects move
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-white/65">
              {aboutPage.studioFlow}
            </p>
            <p className="mt-6 max-w-2xl text-[14px] leading-[1.85] text-white/45">
              For the physical construction narrative—foundation through finished facility—see the
              Building Construction Sequence on the home page. That sequence is how FORMX thinks about
              buildability.
            </p>
            <Link
              href="/#projects"
              className="mt-8 inline-flex font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
            >
              Return to headquarters →
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Invitation */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Invitation
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Discuss your next facility
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
              Share location, facility type and timeline. Practice leads engage early—before grids and
              utility corridors harden into expensive constraints.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-x-red-hover"
            >
              Talk to our engineering team
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
