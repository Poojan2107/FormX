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
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 flex items-center gap-3 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
          {align === "center" ? null : (
            <span className="inline-block h-px w-8 bg-x-red" aria-hidden />
          )}
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-display text-balance",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-lead",
            invert ? "text-white/65" : "text-ink-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
