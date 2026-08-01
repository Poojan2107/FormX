import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const clients = [
  { name: "Kalpataru Group", tag: "Corporate HQ Developer" },
  { name: "Vir Bhadra Enterprise", tag: "Industrial Manufacturing" },
  { name: "Nutan Vidhyalaya Trust", tag: "Institutional Campus" },
  { name: "Shashwat Empire", tag: "Commercial Real Estate" },
  { name: "Aviniya One", tag: "High-Rise Commercial" },
  { name: "Lavista Group", tag: "Hospitality & Retail" },
];

export function ClientsRibbon() {
  return (
    <section className="border-y border-line bg-[#0e0e0e] py-14 text-white">
      <Container>
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-x-red" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-x-red">
                Trusted Partnerships
              </span>
            </div>
            <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
              Collaborating with Leading Promoters &amp; Industrial Leaders
            </h3>
          </div>
          <span className="font-display text-[11px] font-semibold text-white/40 uppercase tracking-widest">
            15+ Industrial Clients Served
          </span>
        </Reveal>

        {/* Client Logos Grid Container */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, i) => (
            <Reveal key={client.name} delay={0.03 * i}>
              <div className="formx-cut-x formx-edge formx-edge-x group flex h-24 flex-col items-center justify-center border border-white/10 bg-white/[0.04] p-4 text-center transition-all duration-300 hover:border-x-red/60 hover:bg-white/[0.08] hover:shadow-[0_8px_24px_rgba(222,48,36,0.15)]">
                <p className="font-display text-xs font-extrabold uppercase tracking-tight text-white/90 group-hover:text-x-red transition-colors">
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
