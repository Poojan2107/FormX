import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Official FormX lockup assets:
 * - formx-logo-solid.png — light surfaces (nav, light footer strips)
 * - formx-logo.png — dark surfaces (FORM in near-white + red ×)
 */
export function Logo({
  className,
  invert = false,
  variant = "full",
}: {
  className?: string;
  invert?: boolean;
  variant?: "mark" | "full" | "lockup";
}) {
  const src = invert ? "/formx-logo.png" : "/formx-logo-solid.png";
  const height = variant === "mark" ? 36 : 48;

  return (
    <span
      className={cn(
        "relative inline-flex items-center overflow-hidden",
        variant === "mark" ? "h-8 md:h-9" : "h-10 md:h-12",
        className,
      )}
      aria-label="FormX Consultants"
    >
      <Image
        src={src}
        alt="FormX Consultants — Design | Engineering"
        width={variant === "mark" ? 140 : 200}
        height={height}
        className="h-full w-auto object-contain object-left"
        priority
      />
    </span>
  );
}
