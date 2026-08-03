import { clients, brochureVisuals, portfolioContactNote } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

export function ClientsRibbon() {
  return (
    <section className="border-y border-line bg-[#0e0e0e] py-14 text-white">
      <Container>
        <Reveal className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-x-red" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-x-red">
              Who we partner with
            </span>
          </div>
          <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
            Architects · Developers · Civil Contractors · Industries · PMC · PEB &amp; Fabricators
          </h3>
          <p className="max-w-2xl text-[13px] leading-[1.75] text-white/50">
            {portfolioContactNote}
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <VisualFrame
            slot={brochureVisuals.partnersBanner}
            alt="FORMX partner types"
            fit="contain"
            aspect="cinema"
            tone="light"
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, i) => (
            <Reveal key={client.name} delay={0.03 * i}>
              <div className="formx-cut-x formx-edge formx-edge-x group flex h-24 flex-col items-center justify-center border border-white/10 bg-white/[0.04] p-4 text-center transition-all duration-300 hover:border-x-red/60 hover:bg-white/[0.08]">
                <p className="font-display text-xs font-extrabold uppercase tracking-tight text-white/90 transition-colors group-hover:text-x-red">
                  {client.name}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-white/40">
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
