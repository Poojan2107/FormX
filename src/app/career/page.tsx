import type { Metadata } from "next";
import { careerRoles, site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/shared/CtaBlocks";
import { ProofStrip } from "@/components/shared/ProofStrip";
import { LeadStrip } from "@/components/shared/LeadStrip";

export const metadata: Metadata = {
  title: "Careers at FORMX | Architecture, Structure, Civil & MEP Roles",
  description:
    "Join FORMX Consultants in Ahmedabad — openings across architecture, structural engineering, civil, and MEP for construction-ready industrial delivery.",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build with FORMX"
        description="Professionals who value coordination, buildability, and construction-ready craft — packages that land cleanly at site."
        crumbs={[{ label: "Career" }]}
      />

      <ProofStrip />

      <section className="relative overflow-hidden bg-[#0c0c0c]">
        <div className="absolute inset-0">
          <AssetImage
            alt="FORMX practice"
            slot="about/home-about.jpg"
            kind="studio"
            fit="cover"
            tone="dark"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        </div>
        <Container className="relative z-10 py-14 md:py-16">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
            Join the practice
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
            Build facilities that land cleanly at site
          </h2>
          <p className="mt-3 max-w-[55ch] text-[14px] leading-relaxed text-white/60">
            Coordinated Architecture, Structure, Civil &amp; MEP — ownership first, site-aware delivery.
          </p>
        </Container>
      </section>

      <section className="bg-white section-y">
        <Container>
          <div className="mb-10 grid gap-4 border-y border-line py-6 md:grid-cols-3">
            {[
              ["Culture", "Coordinated, site-aware, ownership first"],
              ["Practice", "Architecture · Structure · Civil · MEP as one"],
              ["Growth", "Complex facility mandates, real accountability"],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                  {t}
                </p>
                <p className="mt-2 text-sm text-ink-muted">{d}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            {careerRoles.map((role, i) => (
              <Reveal key={role.title} delay={0.04 * i}>
                <article className="formx-cut-x formx-edge formx-edge-x border border-line p-6 md:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                    <div>
                      <h2 className="font-display text-xl font-bold uppercase text-ink">
                        {role.title}
                      </h2>
                      <p className="mt-2 max-w-[70ch] text-[14px] leading-[1.65] text-ink-muted">
                        {role.blurb}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {role.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="border-l-2 border-x-red pl-3 text-[13px] text-ink-muted"
                          >
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="formx-cut-sm formx-edge formx-edge-sm flex flex-col justify-between gap-4 border border-line bg-[#fafafa] p-5">
                      <div className="space-y-2 text-[13px] text-ink-muted">
                        <p>
                          <span className="font-semibold text-ink">Type:</span>{" "}
                          {role.type}
                        </p>
                        <p>
                          <span className="font-semibold text-ink">Location:</span>{" "}
                          {role.location}
                        </p>
                        <p>
                          <span className="font-semibold text-ink">Experience:</span>{" "}
                          {role.experience}
                        </p>
                      </div>
                      <Button
                        href={`mailto:${site.careerEmail}?subject=${encodeURIComponent(role.title)}`}
                        variant="primary"
                        className="w-fit"
                      >
                        Apply now
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="formx-cut-lg formx-edge formx-edge-lg mt-12 border border-line bg-[#1a1a1a] p-8 text-white md:p-10">
            <h3 className="font-display text-2xl font-bold uppercase">
              Open application
            </h3>
            <p className="mt-3 max-w-2xl prose-measure text-[15px] text-white/60">
              Don’t see a matching role? Send your CV to{" "}
              <a
                href={`mailto:${site.careerEmail}`}
                className="font-semibold text-white hover:text-x-red"
              >
                {site.careerEmail}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <LeadStrip
        title="Questions about joining FORMX?"
        subtitle={`Email ${site.careerEmail} with your CV and preferred discipline.`}
      />

      <CtaBand
        title="Prefer to speak with the practice first?"
        primary={{ label: "Contact FORMX", href: "/contact" }}
        secondary={{ label: `Email careers`, href: `mailto:${site.careerEmail}` }}
      />
    </>
  );
}
