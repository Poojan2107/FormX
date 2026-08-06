import type { Metadata } from "next";
import Link from "next/link";
import { termsOfUse } from "@/data/legal";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the FormX Consultants LLP website — information only; engagements begin with written agreement.",
};

export default function TermsPage() {
  return (
    <>
      <section className="fx-grain border-b border-black bg-[#0a0a09] text-white">
        <Container className="pb-14 pt-28 md:pb-20 md:pt-36">
          <p className="eyebrow text-x-red">Legal</p>
          <h1
            className="mt-5 max-w-[14ch] font-display font-black leading-[0.96] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            {termsOfUse.title}
          </h1>
          <p className="fx-read-wide mt-6 text-[16px] text-white/55">{termsOfUse.intro}</p>
          <p className="mt-5 font-label text-[10px] tracking-[0.2em] text-white/35">
            Last updated · {termsOfUse.updated}
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {termsOfUse.sections.map((section) => (
              <article
                key={section.heading}
                className="border-b border-ink/[0.08] pb-10 last:border-0"
              >
                <h2 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                  {section.heading}
                </h2>
                <p className="fx-read-wide mt-4 text-[15px] text-ink/58">{section.body}</p>
              </article>
            ))}
            <p className="font-body text-[14px] text-ink/45">
              Also see our{" "}
              <Link
                href="/privacy"
                transitionTypes={["nav-forward"]}
                className="font-semibold text-x-red hover:text-ink"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
