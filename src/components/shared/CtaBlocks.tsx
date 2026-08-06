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
            Architecture, Structure and Infrastructure — ready for promoter &amp; stakeholder review.
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
      <section className="bg-[#141414] py-14 text-white md:py-16">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
        <div className="max-w-xl prose-measure">
          <p className="eyebrow text-x-red">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.85] text-white/60">
              {description}
            </p>
          ) : null}

          {/* Quick Direct Affordance: Phone & WhatsApp */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-xs font-semibold text-white/70">
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
              className="inline-flex items-center gap-1.5 transition-colors hover:text-x-red"
            >
              <MessageSquare className="size-3.5 text-x-red" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
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
  viewAllHref,
}: {
  title: string;
  items: { href: string; title: string; meta?: string; image?: string }[];
  viewAllHref?: string;
}) {
  if (!items.length) return null;

  const count = items.length;
  const gridCols =
    count === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : count === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const hasImages = items.every((i) => i.image);

  return (
    <section className="border-t border-line bg-[#f7f6f2] py-14 md:py-18">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 border-b border-ink/[0.08] pb-5">
          <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
            {title}
          </h3>
          {viewAllHref ? (
            <Link
              href={viewAllHref}
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-1.5 font-label text-[10px] tracking-[0.18em] text-x-red"
            >
              View all
              <ArrowRight className="size-3.5" />
            </Link>
          ) : (
            <span className="eyebrow text-x-red">{count} items</span>
          )}
        </div>
        <div className={cn("grid items-stretch gap-4", gridCols)}>
          {items.map((item) =>
            hasImages && item.image ? (
              <Link
                key={item.href + item.title}
                href={item.href}
                transitionTypes={["nav-forward"]}
                className="group flex h-full flex-col overflow-hidden border border-ink/[0.08] bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
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
                </div>
                <div className="flex flex-1 flex-col p-5">
                  {item.meta ? (
                    <p className="editorial-meta text-x-red">{item.meta}</p>
                  ) : null}
                  <h4 className="mt-2 font-display text-[1.05rem] font-bold leading-snug text-ink transition-colors group-hover:text-x-red">
                    {item.title}
                  </h4>
                  <p className="mt-auto pt-5 font-label text-[10px] text-ink/35 transition-colors group-hover:text-x-red">
                    Explore →
                  </p>
                </div>
              </Link>
            ) : (
              <Link
                key={item.href + item.title}
                href={item.href}
                transitionTypes={["nav-forward"]}
                className="group flex h-full min-h-[140px] flex-col justify-between border border-ink/[0.08] bg-white p-5 transition-colors hover:border-x-red/40"
              >
                <div>
                  {item.meta ? (
                    <p className="mb-2 editorial-meta text-x-red">{item.meta}</p>
                  ) : null}
                  <h4 className="font-display text-[1.05rem] font-bold leading-snug text-ink transition-colors group-hover:text-x-red">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-5 font-label text-[10px] text-ink/35 transition-colors group-hover:text-x-red">
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
