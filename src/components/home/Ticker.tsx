import { tickerItems } from "@/data/site";

export function Ticker() {
  const row = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-black py-3">
      <div className="animate-ticker flex w-max gap-8">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-8 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white/70"
          >
            <span className="text-x-red">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
