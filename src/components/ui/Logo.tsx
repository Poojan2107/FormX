import Image from "next/image";
import { BrandMark } from "@/components/ui/BrandMark";
import { cn } from "@/lib/cn";

/**
 * Official lockup on light surfaces (formx-logo-solid.png).
 * On dark surfaces use BrandMark — public/formx-logo.png is a broken asset
 * (15k canvas, essentially only a red ×).
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
  if (invert) {
    return (
      <BrandMark
        tone="dark"
        size={variant === "mark" ? "sm" : "md"}
        showSub={variant !== "mark"}
        className={className}
      />
    );
  }

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
        src="/formx-logo-solid.png"
        alt="FormX Consultants — Design | Engineering"
        width={variant === "mark" ? 140 : 200}
        height={variant === "mark" ? 36 : 48}
        className="h-full w-auto object-contain object-left"
        priority
      />
    </span>
  );
}
