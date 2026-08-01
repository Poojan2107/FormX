import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose-measure",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3.5 flex items-center gap-3 font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
          {align === "center" ? null : (
            <span className="inline-block h-px w-8 bg-x-red" aria-hidden />
          )}
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.08]",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lead prose-measure",
            invert ? "text-white/70" : "text-ink-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
