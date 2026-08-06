import type { Metadata } from "next";
import Link from "next/link";
import { privacyPolicy } from "@/data/legal";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FormX Consultants LLP handles inquiry data submitted through formxconsultants.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="fx-grain border-b border-line bg-bg pt-28 pb-16 md:pt-36 md:pb-20">
        <Container>
          <p className="eyebrow text-x-red">Legal</p>
          <h1
            className="editorial-title mt-5 max-w-[18ch] text-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            {privacyPolicy.title}
          </h1>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.9] text-ink-muted">
            {privacyPolicy.intro}
          </p>
          <p className="mt-4 font-label text-[10px] tracking-[0.2em] text-ink/40">
            Last updated · {privacyPolicy.updated}
          </p>
        </Container>
      </section>

      <section className="bg-bg py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {privacyPolicy.sections.map((section) => (
              <article key={section.heading} className="border-b border-line pb-10 last:border-0">
                <h2 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-4 text-[15px] leading-[1.9] text-ink-muted">{section.body}</p>
              </article>
            ))}
            <p className="text-[14px] text-ink/50">
              Also see our{" "}
              <Link href="/terms" transitionTypes={["nav-forward"]} className="text-x-red hover:text-ink">
                Terms of Use
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
