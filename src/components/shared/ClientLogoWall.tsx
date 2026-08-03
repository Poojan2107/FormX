import { clients, brochureVisuals, portfolioContactNote } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

export function ClientLogoWall() {
  return (
    <section className="border-y border-line bg-[#0e0e0e] py-10 text-white md:py-14">
      <Container>
        <Reveal className="mb-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-x-red" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-x-red">
              Who we partner with
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-[13px] leading-[1.75] text-white/55">
            {portfolioContactNote}
          </p>
        </Reveal>

        <Reveal className="mb-8">
          <VisualFrame
            slot={brochureVisuals.partnersBanner}
            alt="FORMX partner types from brochure"
            fit="contain"
            aspect="cinema"
            tone="light"
            className="bg-white"
          />
        </Reveal>

        <div className="grid grid-cols-2 border border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, i) => (
            <Reveal key={client.name} delay={0.02 * i}>
              <div
                className={`group flex min-h-[72px] flex-col justify-center px-4 py-4 transition-colors hover:bg-white/[0.06] ${
                  i % 2 === 0 ? "border-r border-white/10" : ""
                } ${i < 4 ? "border-b border-white/10 sm:border-b-0" : ""} ${
                  i < 5 ? "lg:border-r lg:border-white/10" : "lg:border-r-0"
                } sm:border-r sm:border-white/10`}
              >
                <p className="font-display text-[11px] font-extrabold uppercase tracking-tight text-white/90 transition-colors group-hover:text-x-red sm:text-[12px]">
                  {client.name}
                </p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35">
                  {client.tag}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
