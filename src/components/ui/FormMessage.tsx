import type { ReactNode } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

/** Inline form feedback with proper live-region semantics (alert/status). */
export function FormMessage({
  tone = "error",
  id,
  className,
  children,
}: {
  tone?: "error" | "success";
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const error = tone === "error";
  const Icon = error ? AlertCircle : CheckCircle2;
  return (
    <p
      id={id}
      role={error ? "alert" : "status"}
      className={cn(
        "flex items-start gap-1.5 font-medium leading-snug",
        error ? "text-x-red" : "text-emerald-600",
        className,
      )}
    >
      <Icon className="mt-px size-3.5 shrink-0" aria-hidden />
      <span>{children}</span>
    </p>
  );
}
