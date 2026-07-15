import { cn } from "@/lib/cn";
import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <section className={cn("border-b border-line bg-white", className)}>
      <div className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-16 lg:py-20">
        {crumbs ? (
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[12px] text-ink-muted">
            <Link href="/" className="transition-colors hover:text-x-red">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2">
                <span className="text-line">/</span>
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-x-red">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="mb-3 flex items-center gap-3 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
            <span className="inline-block h-px w-8 bg-x-red" aria-hidden />
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-display text-balance text-ink">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lead text-ink-muted">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
