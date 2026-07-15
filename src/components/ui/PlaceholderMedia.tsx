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
    overlay: "Plant visual",
    lines: ["Building massing", "Process bay layout", "Utility corridors"],
  },
  service: {
    overlay: "Service scope",
    lines: ["Design packages", "Coordination model", "Site support"],
  },
  sector: {
    overlay: "Sector facility",
    lines: ["Industry zoning", "Special systems", "Expansion logic"],
  },
  article: {
    overlay: "Insight cover",
    lines: ["Planning notes", "Risk checklist", "Delivery lessons"],
  },
  studio: {
    overlay: "Practice visual",
    lines: ["Team reviews", "Drawing boards", "Partner sessions"],
  },
  generic: {
    overlay: "Project visual",
    lines: ["Architecture", "Structure", "MEPF"],
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

  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        aspects[aspect],
        isDark ? "bg-[#0f0f0f]" : "bg-[#ececec]",
        className,
      )}
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
      }}
    >
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]",
          isDark ? "pattern-grid-dark" : "pattern-grid",
        )}
      />
      {isDark ? (
        <div className="absolute inset-0 pattern-stripe opacity-30" />
      ) : null}

      {/* Schematic blocks — read as facility content */}
      <div className="absolute inset-6 grid grid-cols-3 gap-2 opacity-40 md:inset-8">
        <div
          className={cn(
            "col-span-2 row-span-2 border",
            isDark ? "border-white/15" : "border-black/10",
          )}
        />
        <div
          className={cn(
            "border",
            isDark ? "border-white/15 bg-x-red/20" : "border-black/10 bg-x-red/10",
          )}
        />
        <div
          className={cn(
            "border",
            isDark ? "border-white/15" : "border-black/10",
          )}
        />
        <div
          className={cn(
            "col-span-3 h-8 border",
            isDark ? "border-white/15" : "border-black/10",
          )}
        />
      </div>

      <div
        className="absolute -right-10 -top-10 size-40 rounded-full opacity-20 transition-opacity group-hover:opacity-35"
        style={{
          background: "radial-gradient(circle, #de3024 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-x-red transition-transform duration-300 group-hover:scale-y-100" />

      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
            {label ?? copy.overlay}
          </p>
          <span className="font-display text-lg font-bold text-x-red/50 transition-colors group-hover:text-x-red">
            X
          </span>
        </div>

        <div>
          {caption ? (
            <p
              className={cn(
                "mb-3 max-w-[16rem] font-display text-base font-bold tracking-tight md:text-lg",
                isDark ? "text-white" : "text-ink",
              )}
            >
              {caption}
            </p>
          ) : null}
          <ul className="space-y-1">
            {copy.lines.map((line) => (
              <li
                key={line}
                className={cn(
                  "text-[11px] uppercase tracking-[0.12em]",
                  isDark ? "text-white/45" : "text-ink-muted",
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
