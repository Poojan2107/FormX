import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function BrochureCta({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 border p-6 md:flex-row md:items-center md:justify-between md:p-8",
        invert
          ? "border-white/15 bg-white/5 text-white"
          : "border-line bg-white text-ink",
        className,
      )}
    >
      <div className="flex gap-4">
        <span
          className={cn(
            "inline-flex size-12 shrink-0 items-center justify-center",
            invert ? "bg-x-red text-white" : "bg-black text-white",
          )}
        >
          <FileText className="size-5" />
        </span>
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            Company brochure
          </p>
          <p
            className={cn(
              "mt-1 text-sm",
              invert ? "text-white/55" : "text-ink-muted",
            )}
          >
            Capabilities, sectors, and delivery approach — ready for stakeholder
            sharing.{" "}
            <span className="text-x-red">Replace PDF at /brochure/formx.pdf</span>
          </p>
        </div>
      </div>
      <Button
        href="/brochure/formx.pdf"
        variant={invert ? "primary" : "secondary"}
        className="shrink-0"
      >
        Download brochure
        <Download className="size-4" />
      </Button>
    </div>
  );
}

export function CtaBand({
  eyebrow = "Next step",
  title,
  description,
  primary = { label: "Contact FormX", href: "/contact" },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-black py-12 text-white md:py-16">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
        <div className="max-w-xl">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={primary.href} variant="primary">
            {primary.label}
            <ArrowRight className="size-4" />
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="ghost-light">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({
  title,
  items,
}: {
  title: string;
  items: { href: string; title: string; meta?: string }[];
}) {
  if (!items.length) return null;
  return (
    <section className="border-t border-line bg-white py-16">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
          {title}
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="x-border group border border-line bg-white p-6 transition-colors hover:border-transparent"
            >
              {item.meta ? (
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                  {item.meta}
                </p>
              ) : null}
              <h4 className="mt-2 font-display text-lg font-bold text-ink transition-colors group-hover:text-x-red">
                {item.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
