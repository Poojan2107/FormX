import type { Metadata } from "next";
import { careerRoles, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers at FORMX | Architecture, Structure & Infrastructure",
  description:
    "Join FORMX Consultants in Ahmedabad — openings across architecture, structural engineering and infrastructure for construction-ready industrial delivery.",
};

export default function CareerPage() {
  return (
    <>
      <section className="border-b border-line bg-white pt-24 pb-14 md:pt-32 md:pb-16">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Careers
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Build with FORMX
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            We hire people who stay close to the work—coordination, buildability and construction-ready
            craft that lands cleanly at site.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-16">
        <Container>
          <div className="mb-10 grid gap-6 border-y border-line py-8 md:grid-cols-3">
            {[
              ["Culture", "Coordinated, site-aware, ownership first"],
              ["Practice", "Architecture · Structure · Infrastructure as one"],
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
                <article className="border border-line p-6 md:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                    <div>
                      <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                        {role.dept}
                      </p>
                      <h2 className="mt-2 font-display text-xl font-bold uppercase text-ink">
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
                    <div className="flex flex-col justify-between gap-4 border border-line bg-[#fafafa] p-5">
                      <div className="space-y-2 text-[13px] text-ink-muted">
                        <p>
                          <span className="font-semibold text-ink">Type:</span> {role.type}
                        </p>
                        <p>
                          <span className="font-semibold text-ink">Location:</span> {role.location}
                        </p>
                        <p>
                          <span className="font-semibold text-ink">Experience:</span>{" "}
                          {role.experience}
                        </p>
                      </div>
                      <Button
                        href={`mailto:${site.careerEmail}?subject=${encodeURIComponent(
                          `Application — ${role.title}`,
                        )}`}
                        variant="primary"
                        className="w-full"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-[#0d0d0d] py-14 text-white">
        <Container>
          <p className="max-w-xl text-[15px] leading-[1.85] text-white/65">
            Do not see a matching role? Write to {site.careerEmail} with your portfolio and the
            discipline you want to own.
          </p>
        </Container>
      </section>
    </>
  );
}
