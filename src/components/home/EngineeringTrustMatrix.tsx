import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { ShieldCheck, Award, Layers, CheckCircle2, Building2, MapPin } from "lucide-react";
import { formxNumbers } from "@/data/site";
import { Counter } from "@/components/ui/Counter";

const clients = [
  { name: "Kalpataru Group", tag: "Corporate HQ", slot: "clients/kalpataru.png" },
  { name: "Vir Bhadra Enterprise", tag: "Industrial Facility", slot: "clients/vir-bhadra.png" },
  { name: "Nutan Vidhyalaya Trust", tag: "Campus Development", slot: "clients/nutan-vidhyalaya.png" },
  { name: "Shashwat Empire", tag: "Commercial Real Estate", slot: "clients/shashwat.png" },
  { name: "Aviniya One", tag: "High-Rise Commercial", slot: "clients/aviniya.png" },
  { name: "Lavista Group", tag: "Hospitality & Retail", slot: "clients/lavista.png" },
];

export function EngineeringTrustMatrix() {
  return (
    <section className="border-b border-line bg-[#0d0d0d] py-16 text-white md:py-24">
      <Container>
        {/* Section Header */}
        <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Engineering Authority &amp; Proof
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl leading-[1.08]">
              Empirical Evidence Over Marketing
            </h2>
            <p className="mt-2.5 prose-measure text-[14px] leading-relaxed text-white/70">
              Verified metrics, statutory code compliance, and promoter trust across industrial hubs in India.
            </p>
          </div>

          <span className="font-display text-[11px] font-bold text-white/40 uppercase tracking-widest">
            IS 456 · IS 800 · IS 1893 Certified
          </span>
        </Reveal>

        {/* 6-Metric Empirical Evidence Grid */}
        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {formxNumbers.map((stat, i) => (
            <Reveal key={stat.label} delay={0.04 * i}>
              <div className="formx-cut-x formx-edge formx-edge-x flex h-full flex-col justify-between border border-white/10 bg-white/[0.04] p-5 transition-all hover:border-x-red/50 hover:bg-white/[0.08]">
                <div>
                  <p className="font-display text-3xl font-black text-white md:text-4xl">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={Number.isInteger(stat.value) ? 0 : 1}
                    />
                  </p>
                  <p className="mt-1 font-display text-[11px] font-extrabold uppercase tracking-tight text-x-red">
                    {stat.label}
                  </p>
                </div>
                <p className="mt-3 border-t border-white/10 pt-2 text-[10px] font-medium text-white/50">
                  {stat.highlight ?? stat.sublabel}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Credentials & Code Certification Ribbon */}
        <Reveal className="mb-14 grid grid-cols-2 gap-4 border-y border-white/15 py-8 md:grid-cols-4 md:gap-6">
          <div className="flex items-center gap-3.5">
            <ShieldCheck className="size-6 text-x-red shrink-0" />
            <div>
              <p className="font-display text-[11px] font-extrabold uppercase tracking-tight text-white">
                Seismic &amp; Wind Code Certified
              </p>
              <p className="text-[10px] text-white/50">IS 1893 &amp; IS 875 Compliant</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <Award className="size-6 text-x-red shrink-0" />
            <div>
              <p className="font-display text-[11px] font-extrabold uppercase tracking-tight text-white">
                25+ Delivered Facilities
              </p>
              <p className="text-[10px] text-white/50">Turnkey &amp; Greenfield</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <Layers className="size-6 text-x-red shrink-0" />
            <div>
              <p className="font-display text-[11px] font-extrabold uppercase tracking-tight text-white">
                10 Integrated Disciplines
              </p>
              <p className="text-[10px] text-white/50">Single-Window Accountable</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <CheckCircle2 className="size-6 text-x-red shrink-0" />
            <div>
              <p className="font-display text-[11px] font-extrabold uppercase tracking-tight text-white">
                100% GFC Construction Ready
              </p>
              <p className="text-[10px] text-white/50">Zero On-Site Clash Rework</p>
            </div>
          </div>
        </Reveal>

        {/* Promoters & Corporate Developers Logo Wall */}
        <div>
          <Reveal className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-base font-extrabold uppercase tracking-tight text-white">
              Trusted By Leading Industrial Promoters &amp; Developers
            </h3>
            <span className="font-display text-[10px] font-bold text-x-red uppercase tracking-wider">
              15+ Corporate Clients
            </span>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, i) => (
              <Reveal key={client.name} delay={0.03 * i}>
                <div className="formx-cut-x formx-edge formx-edge-x group flex h-24 flex-col items-center justify-center border border-white/10 bg-white/[0.03] p-4 text-center transition-all duration-300 hover:border-x-red/60 hover:bg-white/[0.08] hover:shadow-[0_8px_24px_rgba(222,48,36,0.18)]">
                  <AssetImage
                    alt={client.name}
                    slot={client.slot}
                    kind="client"
                    tone="dark"
                    fit="contain"
                    caption={client.name}
                    className="max-h-12 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100"
                  />
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-white/40">
                    {client.tag}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
