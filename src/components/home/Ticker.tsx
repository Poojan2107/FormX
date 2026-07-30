import { tickerItems } from "@/data/site";
import { cn } from "@/lib/cn";

type Tone = "red" | "black";

export function TickerBand({
  tone,
  reverse = false,
  className,
}: {
  tone: Tone;
  reverse?: boolean;
  className?: string;
}) {
  const items =
    tone === "red"
      ? tickerItems.slice(Math.ceil(tickerItems.length / 2))
      : tickerItems.slice(0, Math.ceil(tickerItems.length / 2));
  const source = items.length ? items : tickerItems;
  const row = [...source, ...source, ...source];
  const isRed = tone === "red";

  return (
    <div
      className={cn(
        "overflow-hidden",
        isRed ? "bg-x-red" : "bg-black",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "flex w-max py-3.5 md:py-4",
          reverse ? "animate-ticker-reverse" : "animate-ticker",
        )}
      >
        {row.map((item, i) => (
          <span
            key={`${tone}-${item}-${i}`}
            className="inline-flex items-center gap-4 px-5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white md:gap-5 md:px-6 md:text-[12px] md:tracking-[0.2em]"
          >
            <span
              className={cn(
                "inline-block size-1.5 rotate-45",
                isRed ? "bg-black" : "bg-x-red",
              )}
            />
            {item}
            {isRed ? (
              <span className="hidden font-display text-[10px] font-bold tracking-[0.12em] text-white/45 sm:inline">
                Form<span className="text-white">X</span>
              </span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}

/** @deprecated Use TickerBand — kept for import safety */
export function Ticker() {
  return <TickerBand tone="red" />;
}
