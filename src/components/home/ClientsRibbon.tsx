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
    <section className="border-y border-line bg-[#0a0a0a] py-12 text-white">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-x-red">
              Trusted Partnerships
            </span>
            <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
              Collaborating with Leading Developers & Architects
            </h3>
          </div>
          <span className="font-display text-[12px] font-semibold text-white/40">
            Ahmedabad · Gujarat · Pan-India
          </span>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, i) => (
            <Reveal key={client.name} delay={0.03 * i}>
              <div className="group flex h-24 flex-col justify-center border border-white/10 bg-white/[0.03] p-4 text-center transition-all duration-300 hover:border-x-red/50 hover:bg-white/[0.06]">
                <p className="font-display text-sm font-bold uppercase tracking-tight text-white/90 group-hover:text-x-red transition-colors">
                  {client.name}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/40">
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
