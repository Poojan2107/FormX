import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  invert = false,
  variant = "full",
}: {
  className?: string;
  invert?: boolean;
  variant?: "mark" | "full" | "lockup";
}) {
  if (variant === "lockup") {
    return (
      <span
        className={cn("relative inline-flex items-center h-10 md:h-12 w-auto overflow-hidden", className)}
        aria-label="FormX Consultants"
      >
        <Image
          src="/formx-lockup.png"
          alt="FormX Consultants"
          width={220}
          height={60}
          className="h-full w-auto object-contain object-left"
          priority
        />
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex flex-col leading-none select-none", className)}
      aria-label="FormX Consultants"
    >
      <span className="font-display text-[1.4rem] md:text-[1.65rem] font-black tracking-[-0.03em] uppercase">
        <span className={invert ? "text-white" : "text-ink"}>Form</span>
        <span className="text-x-red font-black">×</span>
      </span>
      <span
        className={cn(
          "mt-0.5 font-display text-[0.6rem] font-extrabold uppercase tracking-[0.26em]",
          invert ? "text-white/90" : "text-ink/90",
        )}
      >
        Consultants
      </span>
      <span
        className={cn(
          "mt-0.5 font-display text-[0.5rem] font-bold uppercase tracking-[0.18em]",
          invert ? "text-white/50" : "text-ink-muted/70",
        )}
      >
        Design <span className="text-x-red font-bold">|</span> Engineering
      </span>
    </span>
  );
}
