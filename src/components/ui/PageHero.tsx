import { cn } from "@/lib/cn";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AssetImage } from "@/components/ui/AssetImage";
import { TickerBand } from "@/components/home/Ticker";
import { BreadcrumbJsonLd } from "@/components/shared/JsonLd";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  className,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
  className?: string;
  image?: {
    slot: string;
    kind?: "facility" | "service" | "sector" | "article" | "studio" | "generic";
  };
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-white/10 bg-[#0a0a0a] text-white",
        className,
      )}
    >
      {crumbs ? <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, ...crumbs]} /> : null}
      {/* Faint full-bleed image layer */}
      {image ? (
        <>
          <div className="pointer-events-none absolute inset-0">
            <AssetImage
              alt="FormX — multidisciplinary design & engineering"
              slot={image.slot}
              kind={image.kind ?? "facility"}
              tone="dark"
              aspect="landscape"
              fit="cover"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/75 to-[#0a0a0a]/45"
            aria-hidden
          />
        </>
      ) : null}

      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 500px at 50% 0%, rgba(222,48,36,0.12), transparent 75%)",
        }}
        aria-hidden
      />

      {/* Ghost X watermark */}
      <div
        className="pointer-events-none absolute right-[-3%] top-[-16%] select-none font-display font-black leading-none text-white/[0.05]"
        style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
        aria-hidden
      >
        ×
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 pb-12 pt-12 sm:px-5 sm:pb-12 sm:pt-16 md:px-8 md:pb-14 md:pt-20">
        {crumbs ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-x-2 text-[12px] text-white/50"
          >
            <Link
              href="/"
              transitionTypes={["nav-back"]}
              className="transition-colors hover:text-x-red"
            >
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2">
                <ChevronRight className="size-3 text-white/30" />
                {c.href ? (
                  <Link
                    href={c.href}
                    transitionTypes={["nav-forward"]}
                    className="transition-colors hover:text-x-red"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/90">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="mb-3 flex items-center gap-3 font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
            <span className="inline-block h-px w-8 bg-x-red" aria-hidden />
            {eyebrow}
          </p>
        ) : null}

        <h1 className="max-w-3xl font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
          {title}
        </h1>

        {description ? (
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.8] text-white/65 md:text-base">
            {description}
          </p>
        ) : null}
      </div>

      <TickerBand tone="red" />
    </section>
  );
}
