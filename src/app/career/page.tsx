import type { Metadata } from "next";
import { careerRoles, site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Build industrial projects with FormX — openings across architecture, structure, and coordination.",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build with FormX"
        description="We look for professionals who value ownership, coordination, and industrial delivery craft — designers and engineers who want to see ideas land cleanly at site."
        crumbs={[
          { label: "Contact Us", href: "/contact" },
          { label: "Career" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="formx-cut-x formx-edge formx-edge-x mb-12 grid gap-4 border border-line bg-white p-6 md:grid-cols-3 md:p-8">
            {[
              ["Culture", "Partner-led, site-aware, ownership first"],
              ["Practice", "Architecture · Structure · MEPF as one"],
              ["Growth", "Complex industrial mandates, real accountability"],
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
                      <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">
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
                    <div className="formx-cut-sm formx-edge formx-edge-sm flex flex-col justify-between gap-4 border border-line bg-white p-5">
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
            <p className="mt-3 max-w-2xl text-[15px] text-white/60">
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

      <CtaBand title="Questions about joining FormX?" primary={{ label: "Contact us", href: "/contact" }} />
    </>
  );
}
