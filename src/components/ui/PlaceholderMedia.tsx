import { cn } from "@/lib/cn";

type Kind =
  | "facility"
  | "service"
  | "sector"
  | "article"
  | "studio"
  | "generic";

const kindCopy: Record<
  Kind,
  { overlay: string; lines: [string, string, string] }
> = {
  facility: {
    overlay: "Facility visual",
    lines: ["Architectural layout", "Process bay", "Utility coordination"],
  },
  service: {
    overlay: "Service scope",
    lines: ["Design packages", "Coordination model", "Site documentation"],
  },
  sector: {
    overlay: "Sector facility",
    lines: ["Industry zoning", "Systems design", "Expansion planning"],
  },
  article: {
    overlay: "Technical insight",
    lines: ["Planning notes", "Engineering review", "Delivery lessons"],
  },
  studio: {
    overlay: "Practice visual",
    lines: ["Team reviews", "Drawing coordination", "Delivery sessions"],
  },
  generic: {
    overlay: "Project visual",
    lines: ["Architecture", "Structure", "MEP & Utilities"],
  },
};

export function PlaceholderMedia({
  label,
  caption,
  kind = "generic",
  aspect = "landscape",
  className,
  tone = "dark",
}: {
  label?: string;
  caption?: string;
  kind?: Kind;
  aspect?: "landscape" | "portrait" | "square" | "wide";
  className?: string;
  tone?: "light" | "dark";
}) {
  const aspects = {
    landscape: "aspect-[16/10]",
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  };

  const isDark = tone === "dark";
  const copy = kindCopy[kind];

  // Strip any "Drop file →" dev notes from caption
  const displayCaption =
    caption && caption.startsWith("Drop file") ? undefined : caption;

  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        aspects[aspect],
        isDark ? "bg-[#111111]" : "bg-[#f0f0f0]",
        className,
      )}
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]",
          isDark ? "pattern-grid-dark" : "pattern-grid",
        )}
      />
      {isDark ? (
        <div className="absolute inset-0 pattern-stripe opacity-20" />
      ) : null}

      {/* Accent glow */}
      <div
        className="absolute -right-10 -top-10 size-48 rounded-full opacity-15 transition-opacity duration-300 group-hover:opacity-30"
        style={{
          background: "radial-gradient(circle, #de3024 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Schematic blocks — read as facility content */}
      <div className="absolute inset-6 grid grid-cols-3 gap-2 opacity-30 md:inset-8">
        <div
          className={cn(
            "col-span-2 row-span-2 rounded-sm border",
            isDark ? "border-white/10" : "border-black/8",
          )}
        />
        <div
          className={cn(
            "rounded-sm border",
            isDark
              ? "border-white/10 bg-x-red/15"
              : "border-black/8 bg-x-red/8",
          )}
        />
        <div
          className={cn(
            "rounded-sm border",
            isDark ? "border-white/10" : "border-black/8",
          )}
        />
        <div
          className={cn(
            "col-span-3 h-8 rounded-sm border",
            isDark ? "border-white/10" : "border-black/8",
          )}
        />
      </div>

      {/* Left red accent line */}
      <div className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-x-red transition-transform duration-300 group-hover:scale-y-100" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
            {label ?? copy.overlay}
          </p>
          <span className="font-display text-base font-light text-x-red/40 transition-colors duration-200 group-hover:text-x-red">
            ×
          </span>
        </div>

        <div>
          {displayCaption ? (
            <p
              className={cn(
                "mb-3 max-w-[16rem] font-display text-base font-bold leading-snug tracking-tight md:text-lg",
                isDark ? "text-white/80" : "text-ink",
              )}
            >
              {displayCaption}
            </p>
          ) : null}
          <ul className="space-y-1">
            {copy.lines.map((line) => (
              <li
                key={line}
                className={cn(
                  "text-[10px] uppercase tracking-[0.12em]",
                  isDark ? "text-white/35" : "text-ink/40",
                )}
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
