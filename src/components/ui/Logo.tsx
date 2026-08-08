import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Official FormX lockup.
 * - Light surfaces: cropped transparent ink lockup
 * - Dark surfaces: white + red X variant (no plate)
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
  const mark = variant === "mark";
  const src = invert ? "/formx-logo-nav-on-dark.png" : "/formx-logo-nav.png";

  return (
    <span
      className={cn(
        "relative inline-flex items-center",
        mark ? "h-8 md:h-9" : "h-10 md:h-12",
        className,
      )}
      aria-label="FormX Consultants"
    >
      <Image
        src={src}
        alt="FormX Consultants — Design | Engineering"
        width={mark ? 150 : 200}
        height={mark ? 73 : 97}
        className="h-full w-auto object-contain object-left"
        priority
      />
    </span>
  );
}
