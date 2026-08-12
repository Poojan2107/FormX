import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
  variant?: "mark" | "full" | "lockup";
}) {
  const src = invert ? "/formx-logo-nav-on-dark.png" : "/formx-logo-nav.png";

  return (
    <span
      className={cn(
        "relative inline-flex items-center h-10 sm:h-11 md:h-12 w-auto shrink-0 select-none",
        className,
      )}
      aria-label="FormX Consultants"
    >
      <Image
        src={src}
        alt="FormX Consultants — Design | Engineering"
        width={320}
        height={140}
        className="h-full w-auto object-contain object-left"
        priority
        unoptimized
      />
    </span>
  );
}
