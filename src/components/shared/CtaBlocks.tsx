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
            invert ? "bg-x-red text-white" : "bg-[#1a1a1a] text-white",
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
            <span className="text-x-red">Download PDF at /brochure/formx.pdf</span>
          </p>
        </div>
      </div>
      <Button
        href="/brochure/formx.pdf"
        variant={invert ? "primary" : "secondary"}
        className="w-full shrink-0 sm:w-auto"
        transitionTypes={["nav-forward"]}
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
    <section className="formx-cut-tr formx-edge formx-edge-lg bg-[#1a1a1a] py-12 text-white md:py-16">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
        <div className="max-w-xl">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[1.65rem] font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <Button
            href={primary.href}
            variant="primary"
            className="w-full sm:w-auto"
            transitionTypes={["nav-forward"]}
          >
            {primary.label}
            <ArrowRight className="size-4" />
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              variant="ghost-light"
              className="w-full sm:w-auto"
              transitionTypes={["nav-forward"]}
            >
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

  const count = items.length;
  const gridCols =
    count === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : count === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="border-t border-line bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
        <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
            {title}
          </h3>
          <span className="text-[11px] font-bold text-x-red uppercase tracking-wider">
            {count} Items
          </span>
        </div>
        <div className={cn("grid gap-4", gridCols)}>
          {items.map((item) => (
            <Link
              key={item.href + item.title}
              href={item.href}
              transitionTypes={["nav-forward"]}
              className="formx-cut-x formx-edge formx-edge-x x-hover-rail group flex flex-col justify-between border border-line bg-white p-5 transition-all duration-300 hover:border-x-red/40 hover:shadow-md"
            >
              <div>
                {item.meta ? (
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-x-red mb-1">
                    {item.meta}
                  </p>
                ) : null}
                <h4 className="font-display text-base font-bold text-ink transition-colors group-hover:text-x-red leading-snug">
                  {item.title}
                </h4>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-ink/40 group-hover:text-x-red transition-colors">
                <span>View Details</span>
                <span className="font-display transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
