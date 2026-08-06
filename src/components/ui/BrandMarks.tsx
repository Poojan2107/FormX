import { cn } from "@/lib/cn";

/** Decorative red X — used sparingly as brand factor */
export function XMark({
  className,
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={cn("text-x-red", className)}
    >
      <path
        d="M8 8 L40 40 M40 8 L8 40"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="square"
        className="origin-center"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: 0,
        }}
      />
    </svg>
  );
}

export function RedShape({
  variant,
  className,
}: {
  variant: "circle" | "petal" | "triangle" | "square";
  className?: string;
}) {
  const base = cn("absolute bg-x-red", className);

  if (variant === "circle") {
    return <span className={cn(base, "size-12 rounded-full md:size-14")} />;
  }
  if (variant === "petal") {
    return (
      <span
        className={cn(base, "size-12 md:size-14")}
        style={{ borderRadius: "100% 0 100% 100%" }}
      />
    );
  }
  if (variant === "triangle") {
    return (
      <span
        className={cn(base, "size-0 border-l-[28px] border-r-[28px] border-b-[48px] border-l-transparent border-r-transparent border-b-x-red bg-transparent md:border-l-[32px] md:border-r-[32px] md:border-b-[56px]")}
      />
    );
  }
  return <span className={cn(base, "size-11 md:size-12")} />;
}
