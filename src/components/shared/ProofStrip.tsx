import { Container } from "@/components/ui/Container";

const items = [
  { label: "IS & NBC Compliant", note: "Code-ready packages" },
  { label: "25+ Projects", note: "Turnkey & greenfield" },
  { label: "10 Disciplines", note: "Single-window delivery" },
  { label: "GFC Ready", note: "Clash-free coordination" },
];

export function ProofStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "border-b border-line bg-white py-3.5"
          : "border-b border-line bg-white py-4 md:py-5"
      }
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex min-w-0 items-baseline gap-2 ${
                i > 0 ? "md:border-l md:border-line md:pl-6" : ""
              }`}
            >
              <span className="font-display text-[11px] font-bold uppercase tracking-tight text-ink">
                {item.label}
              </span>
              <span className="hidden text-[11px] text-ink/40 sm:inline">
                {item.note}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
