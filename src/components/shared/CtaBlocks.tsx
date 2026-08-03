import Link from "next/link";
import { ArrowRight, Download, FileText, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";
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
            Company Brochure
          </p>
          <p
            className={cn(
              "mt-1 text-sm prose-measure",
              invert ? "text-white/55" : "text-ink-muted",
            )}
          >
            Capabilities, sectors, and delivery approach — ready for promoter &amp; stakeholder review.
          </p>
        </div>
      </div>
      <Button
        href="/brochure/formx.pdf"
        variant={invert ? "primary" : "secondary"}
        className="w-full shrink-0 sm:w-auto"
        transitionTypes={["nav-forward"]}
      >
        Download PDF Brochure
        <Download className="size-4" />
      </Button>
    </div>
  );
}

export function CtaBand({
  eyebrow = "Start A Project Conversation",
  title,
  description,
  primary = { label: "Talk to our engineering team", href: "/contact" },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-[#141414] py-12 text-white md:py-14">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
        <div className="max-w-xl prose-measure">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {description}
            </p>
          ) : null}

          {/* Quick Direct Affordance: Phone & WhatsApp */}
          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-xs font-semibold text-white/70">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-x-red"
            >
              <Phone className="size-3.5 text-x-red" />
              <span>{site.phone}</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400"
            >
              <MessageSquare className="size-3.5 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap shrink-0">
          <Button
            href={primary.href}
            variant="primary"
            className="w-full sm:w-auto px-7 py-4"
            transitionTypes={["nav-forward"]}
          >
            {primary.label}
            <ArrowRight className="size-4" />
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              variant="ghost-light"
              className="w-full sm:w-auto px-6 py-4"
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
  items: { href: string; title: string; meta?: string; image?: string }[];
}) {
  if (!items.length) return null;

  const count = items.length;
  const gridCols =
    count === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : count === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const hasImages = items.some((i) => i.image);

  return (
    <section className="border-t border-line bg-white py-12 md:py-14">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
        <div className="mb-5 flex items-end justify-between gap-4 border-b border-line pb-3">
          <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink md:text-xl">
            {title}
          </h3>
          <span className="font-display text-[10px] font-bold uppercase tracking-wider text-x-red">
            {count} items
          </span>
        </div>
        <div className={cn("grid gap-2.5", gridCols)}>
          {items.map((item) =>
            hasImages && item.image ? (
              <Link
                key={item.href + item.title}
                href={item.href}
                transitionTypes={["nav-forward"]}
                className="group relative block aspect-[16/10] overflow-hidden bg-[#111]"
              >
                <AssetImage
                  alt={item.title}
                  slot={item.image}
                  kind="facility"
                  aspect="auto"
                  fit="cover"
                  tone="dark"
                  zoomOnHover
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {item.meta ? (
                    <p className="font-display text-[9px] font-bold uppercase tracking-[0.14em] text-x-red">
                      {item.meta}
                    </p>
                  ) : null}
                  <h4 className="mt-1 font-display text-sm font-bold uppercase leading-snug text-white transition-colors group-hover:text-x-red">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ) : (
              <Link
                key={item.href + item.title}
                href={item.href}
                transitionTypes={["nav-forward"]}
                className="group flex flex-col justify-between border border-line p-4 transition-colors hover:border-x-red/40"
              >
                <div>
                  {item.meta ? (
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-x-red">
                      {item.meta}
                    </p>
                  ) : null}
                  <h4 className="font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-x-red">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-4 font-display text-[11px] font-bold uppercase tracking-wider text-ink/35 transition-colors group-hover:text-x-red">
                  View →
                </p>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
