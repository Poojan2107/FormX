import { tickerItems } from "@/data/site";

function Row({
  items,
  tone,
  reverse = false,
}: {
  items: string[];
  tone: "ink" | "x";
  reverse?: boolean;
}) {
  const row = [...items, ...items, ...items];
  const ink = tone === "ink";

  return (
    <div
      className={
        ink
          ? "overflow-hidden bg-black py-2.5"
          : "overflow-hidden bg-x-red py-2.5"
      }
    >
      <div
        className={
          reverse
            ? "animate-ticker-reverse flex w-max gap-0"
            : "animate-ticker flex w-max gap-0"
        }
      >
        {row.map((item, i) => (
          <span
            key={`${tone}-${item}-${i}`}
            className={
              ink
                ? "inline-flex items-center gap-5 px-5 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
                : "inline-flex items-center gap-5 px-5 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
            }
          >
            <span
              className={
                ink
                  ? "inline-block size-1.5 rotate-45 bg-x-red"
                  : "inline-block size-1.5 rotate-45 bg-black"
              }
              aria-hidden
            />
            {item}
            {!ink ? (
              <span className="font-display text-[10px] font-bold text-white/50">
                Form
                <span className="text-white">X</span>
              </span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  const half = Math.ceil(tickerItems.length / 2);
  const a = tickerItems.slice(0, half);
  const b = tickerItems.slice(half);

  return (
    <div className="relative border-y border-black/10" aria-hidden>
      <Row items={a.length ? a : tickerItems} tone="ink" />
      <Row items={b.length ? b : tickerItems} tone="x" reverse />
      {/* Soft join line */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/25" />
    </div>
  );
}
