import { FormxTransparentLogo } from "@/components/ui/FormxTransparentLogo";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
  variant?: "mark" | "full" | "lockup";
}) {
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <FormxTransparentLogo dark={invert} size="md" />
    </div>
  );
}
