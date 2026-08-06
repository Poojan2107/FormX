import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Careers at FORMX | Join the Studio",
  description:
    "Join FORMX Consultants in Ahmedabad. Share your portfolio with career@formxconsultants.com.",
};

export default function CareerPage() {
  return (
    <>
      <section className="fx-grain border-b border-black bg-[#0a0a09] text-white">
        <Container className="pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Careers</p>
              <h1
                className="mt-5 max-w-[12ch] font-display font-black leading-[0.96] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)" }}
              >
                Build with FormX
              </h1>
            </div>
            <p className="text-[15.5px] leading-[1.9] text-white/55 md:text-[16.5px] lg:pb-1">
              Structural engineers and designers who want work that holds on site — industrial,
              residential and institutional — write to the studio.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <p className="eyebrow text-x-red">Applications</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                Open roles by invitation
              </h2>
              <p className="mt-5 max-w-[48ch] text-[15.5px] leading-[1.9] text-ink/58">
                We do not publish a standing roles board. Send your CV and portfolio to{" "}
                <a
                  href={`mailto:${site.careerEmail}`}
                  className="font-semibold text-x-red hover:text-ink"
                >
                  {site.careerEmail}
                </a>{" "}
                with the discipline you want to own. Applications are reviewed on a rolling basis.
              </p>
              <ul className="mt-10 space-y-4 border-t border-ink/[0.08] pt-8">
                {["Architecture", "Structure", "Infrastructure"].map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 text-[15px] font-medium text-ink"
                  >
                    <span className="font-display text-sm font-black text-x-red">×</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="border border-ink/[0.08] bg-[#fafaf8] p-7 md:p-8 lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-x-red">Studio</p>
              <p className="mt-4 text-[14px] leading-[1.8] text-ink/55">{site.addressDetail}</p>
              <a
                href={`mailto:${site.careerEmail}?subject=${encodeURIComponent("Career application — FORMX")}`}
                className="fx-btn-primary mt-8 inline-flex w-full justify-center"
              >
                Email your application
                <ArrowRight className="size-3.5" />
              </a>
              <p className="mt-5 text-[13px] leading-[1.75] text-ink/40">
                Prefer a facility brief?{" "}
                <Link href="/contact" className="font-semibold text-x-red hover:text-ink">
                  Contact the studio
                </Link>
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
