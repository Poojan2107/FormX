import { cn } from "@/lib/cn";

/**
 * Reliable Form× wordmark — do NOT use broken public/formx-logo.png
 * (that file is a near-empty 15k canvas with only a faint red ×).
 * Solid PNG is for light surfaces; this mark works on any surface.
 */
export function BrandMark({
  className,
  tone = "dark",
  size = "md",
  showSub = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "hero";
  showSub?: boolean;
}) {
  const onDark = tone === "dark";
  const sizes = {
    sm: { form: "text-xl", x: "text-xl", sub: "text-[8px]", track: "tracking-[0.28em]" },
    md: { form: "text-2xl", x: "text-2xl", sub: "text-[9px]", track: "tracking-[0.32em]" },
    lg: { form: "text-4xl md:text-5xl", x: "text-4xl md:text-5xl", sub: "text-[10px]", track: "tracking-[0.36em]" },
    hero: {
      form: "text-[clamp(3.5rem,12vw,8.5rem)]",
      x: "text-[clamp(3.5rem,12vw,8.5rem)]",
      sub: "text-[11px] md:text-[13px]",
      track: "tracking-[0.42em]",
    },
  }[size];

  return (
    <span
      className={cn("inline-flex flex-col items-start", className)}
      aria-label="FormX Consultants"
    >
      <span
        className={cn(
          "font-display font-black leading-none tracking-[-0.04em]",
          sizes.form,
          onDark ? "text-white" : "text-ink",
        )}
      >
        Form
        <span className={cn("text-x-red", sizes.x)}>×</span>
      </span>
      {showSub ? (
        <span
          className={cn(
            "mt-2 font-label font-semibold uppercase",
            sizes.sub,
            sizes.track,
            onDark ? "text-white/45" : "text-ink/45",
          )}
        >
          Consultants
        </span>
      ) : null}
    </span>
  );
}
