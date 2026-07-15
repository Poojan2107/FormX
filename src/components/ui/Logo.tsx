import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  invert = false,
  variant = "mark",
}: {
  className?: string;
  invert?: boolean;
  variant?: "mark" | "full" | "lockup";
}) {
  if (variant === "lockup") {
    return (
      <span
        className={cn("relative inline-flex items-center", className)}
        aria-label="FormX Consultants"
      >
        <Image
          src="/formx-lockup.png"
          alt="FormX Consultants"
          width={220}
          height={72}
          className="h-12 w-auto object-contain object-left md:h-14"
          priority
        />
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label="FormX Consultants"
    >
      <span className="font-display text-[1.45rem] font-bold tracking-[-0.04em] md:text-[1.6rem]">
        <span className={invert ? "text-white" : "text-ink"}>Form</span>
        <span className="text-x-red">X</span>
      </span>
      {variant === "full" ? (
        <>
          <span
            className={cn(
              "mt-1.5 font-display text-[0.55rem] font-semibold uppercase tracking-[0.28em]",
              invert ? "text-white/85" : "text-ink",
            )}
          >
            Consultants
          </span>
          <span
            className={cn(
              "mt-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.18em]",
              invert ? "text-white/45" : "text-ink-muted",
            )}
          >
            Design <span className="text-x-red">|</span> Engineering
          </span>
        </>
      ) : null}
    </span>
  );
}
