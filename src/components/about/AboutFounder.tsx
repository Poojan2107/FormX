import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { leadership } from "@/data/content";
import { aboutPage, site } from "@/data/site";

const sectorExperience = [
  { name: "Pharmaceuticals", note: "Cleanroom-ready frames" },
  { name: "Food Processing", note: "Hygienic plant layouts" },
  { name: "Chemical", note: "Process-heavy structures" },
  { name: "Textile", note: "Long-span sheds" },
  { name: "Engineering", note: "Machine & crane loads" },
  { name: "Automobile", note: "Assembly & PEB halls" },
  { name: "Warehouses", note: "Logistics & storage" },
] as const;

const practiceFocus = [
  { label: "Architecture", note: "Planning & form" },
  { label: "Structure", note: "RCC · Steel · PEB" },
  { label: "Infrastructure", note: "Site execution" },
] as const;

export function AboutFounder() {
  const founder = leadership.find((p) => p.featured);
  if (!founder) return null;

  const linkedin = founder.linkedin ?? site.hirenLinkedin;

  return (
    <section className="overflow-hidden border-b border-ink/[0.08] bg-white">
      <Container className="py-16 md:py-24 lg:py-28">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.32em] text-x-red">
              Leadership &amp; Governance
            </p>
            <h2
              className="mt-3 font-display font-black leading-[0.98] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              Partners close to the work
            </h2>
            <p className="mt-4 max-w-[58ch] text-[15.5px] leading-[1.8] text-ink/70 md:text-[16.5px]">
              Led by Founder &amp; Managing Partner Hiren J. Shah — structural design,
              architecture planning &amp; site execution held in the same room as every
              issue decision.
            </p>
          </div>
        </Reveal>

        {/* Portrait + bio stretch together — no dead space under the image */}
        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-stretch lg:gap-12 xl:gap-14">
          <Reveal className="h-full lg:col-span-5">
            <figure className="group relative h-full min-h-[420px] md:min-h-[520px] lg:min-h-0">
              <div className="formx-cut-lg relative h-full min-h-[inherit] overflow-hidden bg-[#111110] lg:absolute lg:inset-0 lg:min-h-0">
                <AssetImage
                  alt={founder.name}
                  slot={founder.asset}
                  kind="team"
                  fit="cover"
                  aspect="auto"
                  className="absolute inset-0 h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                <span
                  aria-hidden
                  className="absolute left-0 top-0 z-10 h-full w-[3px] bg-x-red"
                />
                <span
                  aria-hidden
                  className="absolute left-0 top-0 z-10 h-[3px] w-28 bg-x-red"
                />

                <div className="absolute left-4 top-4 z-10 border border-white/25 bg-black/70 px-3 py-1.5 backdrop-blur-md">
                  <p className="font-label text-[9.5px] font-bold tracking-[0.22em] text-white">
                    Grade 1 Structural Engineer
                  </p>
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/75 to-transparent px-6 pb-6 pt-32 md:px-7 md:pb-7">
                  <p className="font-label text-[10px] font-bold tracking-[0.28em] text-x-red">
                    {founder.role}
                  </p>
                  <p className="mt-1.5 font-display text-[1.65rem] font-black leading-none tracking-tight text-white md:text-[1.85rem]">
                    {founder.name}
                  </p>
                  <p className="mt-2 text-[12.5px] text-white/65">
                    FormX Consultants LLP · Ahmedabad
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col lg:col-span-7">
            <p className="font-label text-[10.5px] font-bold tracking-[0.28em] text-x-red">
              {founder.role}
            </p>
            <h3
              className="mt-2 font-display font-black tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(2rem, 3.4vw, 2.85rem)" }}
            >
              {founder.name}
            </h3>
            <p className="mt-2 font-label text-[10.5px] font-semibold tracking-[0.18em] text-ink/45">
              Structural Engineer, Grade 1 · AMC / BMC
            </p>

            <blockquote className="relative mt-7 border-l-[3px] border-x-red pl-5 md:pl-6">
              <p className="font-display text-[1.15rem] font-bold leading-[1.35] tracking-tight text-ink md:text-[1.28rem]">
                &ldquo;Keeps judgement close — desk reviews, coordination meetings,
                site walks, and markups that push every package toward clarity.&rdquo;
              </p>
              <footer className="mt-3 font-label text-[10px] font-bold tracking-[0.22em] text-x-red">
                Engineering Quality Standard
              </footer>
            </blockquote>

            <div className="mt-7 space-y-4 border-t border-ink/[0.08] pt-7 text-[15.5px] leading-[1.85] text-ink/75 md:text-[16px]">
              <p>{founder.bio}</p>
              <p className="text-ink/65">{aboutPage.collaboration}</p>
            </div>
          </Reveal>
        </div>

        {/* Full-width practice strip + CTA — sits under both columns */}
        <Reveal delay={0.1}>
          <div className="mt-10 border-t border-ink/[0.1] pt-8 md:mt-12">
            <ul className="grid gap-0 sm:grid-cols-3">
              {practiceFocus.map((item, i) => (
                <li
                  key={item.label}
                  className={`group flex items-start gap-4 py-4 sm:py-0 sm:pr-6 ${
                    i < practiceFocus.length - 1 ? "sm:border-r sm:border-ink/[0.1]" : ""
                  } ${i > 0 ? "sm:pl-6" : ""}`}
                >
                  <span className="mt-0.5 font-label text-[10px] font-bold tracking-[0.18em] text-x-red">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-display text-[15.5px] font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red">
                      {item.label}
                    </p>
                    <p className="mt-1 font-label text-[10px] font-semibold tracking-[0.16em] text-ink/45">
                      {item.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {linkedin ? (
              <div className="mt-8 flex flex-col gap-4 border-t border-ink/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fx-btn-primary group inline-flex w-fit items-center gap-3 px-7 py-3.5 text-[11px] font-bold tracking-[0.18em] shadow-sm transition-shadow hover:shadow-md"
                >
                  <svg className="size-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="font-label text-[10px] font-bold tracking-[0.18em] text-ink/40">
                  Grade 1 Structural Engineer · Gujarat
                </p>
              </div>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

const sectorGridSpan = [
  "sm:col-span-1 lg:col-span-3",
  "sm:col-span-1 lg:col-span-3",
  "sm:col-span-1 lg:col-span-3",
  "sm:col-span-1 lg:col-span-3",
  "sm:col-span-1 lg:col-span-4",
  "sm:col-span-1 lg:col-span-4",
  "sm:col-span-2 lg:col-span-4",
] as const;

export function AboutSectorExperience() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/[0.08] bg-[#08080a] py-14 text-white md:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 70% at 0% 40%, rgba(222,48,36,0.14), transparent 55%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-15" aria-hidden />

      <Container className="relative z-10">
        <Reveal>
          <div className="flex flex-col gap-3 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="max-w-xl">
              <p className="font-label text-[10px] font-bold tracking-[0.3em] text-x-red">
                Industries Served
              </p>
              <h3
                className="mt-3 font-display font-black leading-[1.05] tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(1.65rem, 2.8vw, 2.25rem)" }}
              >
                Specialized Sector Experience
              </h3>
            </div>
            <p className="max-w-[40ch] text-[14px] leading-[1.7] text-white/50 md:text-right">
              Facilities that must operate day after day — designed with the same
              coordination standard across industries.
            </p>
          </div>
        </Reveal>

        {/* 4 + 3 matrix — row two spans full width with no orphan cell */}
        <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-12">
          {sectorExperience.map((sector, i) => (
            <Reveal key={sector.name} delay={0.03 * i} className={`h-full ${sectorGridSpan[i]}`}>
              <li className="group relative flex h-full min-h-[118px] flex-col justify-between bg-[#08080a] px-5 py-5 transition-colors duration-300 hover:bg-[#0f0f11] md:min-h-[124px] md:px-6 md:py-6">
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-x-red transition-all duration-300 group-hover:w-full" />
                <div className="flex items-center justify-between gap-3">
                  <span className="font-label text-[10px] font-bold tracking-[0.2em] text-x-red/80 transition-colors group-hover:text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-x-red/40 transition-colors group-hover:bg-x-red"
                  />
                </div>
                <div className="mt-5">
                  <p className="font-display text-[1.05rem] font-bold tracking-tight text-white md:text-[1.12rem]">
                    {sector.name}
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-snug text-white/45 transition-colors group-hover:text-white/65">
                    {sector.note}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function AboutClose({ brochure }: { brochure: ReactNode }) {
  return (
    <section className="bg-[#fafaf8] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.32em] text-x-red">
              Next Step
            </p>
            <h2
              className="mt-4 max-w-[14ch] font-display font-black leading-[1.02] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)" }}
            >
              Discuss your next facility
            </h2>
            <p className="mt-5 max-w-[38ch] text-[15.5px] leading-[1.8] text-ink/70">
              Share facility type, location, and timeline — senior leads engage early on
              Architecture, Structure and Infrastructure.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group inline-flex items-center gap-3 px-8 py-4 text-[11px] font-bold tracking-[0.2em] shadow-md hover:shadow-lg"
              >
                Enquire Now
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            {brochure}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
