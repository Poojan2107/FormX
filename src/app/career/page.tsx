import type { Metadata } from "next";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers at FORMX | Join the Studio",
  description:
    "Join FORMX Consultants in Ahmedabad. Share your portfolio with career@formxconsultants.com.",
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
            We are a dynamic team of structural engineers and designers. If you want to work on
            industrial, residential and institutional structures with technical proficiency and
            practical wisdom — write to us.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="max-w-2xl border border-line p-8 md:p-10">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
              Applications
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
              Open roles are shared by invitation
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
              Send your CV and portfolio to{" "}
              <a href={`mailto:${site.careerEmail}`} className="font-semibold text-ink underline">
                {site.careerEmail}
              </a>{" "}
              with the discipline you want to own. We review applications on a rolling basis.
            </p>
            <Button
              href={`mailto:${site.careerEmail}?subject=${encodeURIComponent("Career application — FORMX")}`}
              variant="primary"
              className="mt-8"
            >
              Email your application
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
