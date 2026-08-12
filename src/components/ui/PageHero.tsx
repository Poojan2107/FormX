import { cn } from "@/lib/cn";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AssetImage } from "@/components/ui/AssetImage";
import { BreadcrumbJsonLd } from "@/components/shared/JsonLd";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  className,
  image,
  clean = false,
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
  clean?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-white/10 bg-[#0c0c0c] text-white",
        className,
      )}
    >
      {crumbs && !clean ? (
        <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, ...crumbs]} />
      ) : null}

      {image ? (
        <>
          <div className="pointer-events-none absolute inset-0">
            <AssetImage
              alt=""
              slot={image.slot}
              kind={image.kind ?? "facility"}
              tone="dark"
              aspect="auto"
              fit="contain"
              objectPosition="center"
              sizes="100vw"
              priority
              className="absolute inset-0 h-full w-full opacity-80"
            />
          </div>
          {/* Cinematic scrim — photography readable on the right */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 420px at 70% 20%, rgba(222,48,36,0.12), transparent 70%)",
          }}
          aria-hidden
        />
      )}

      {!clean ? (
        <div className="absolute left-0 top-0 z-10 h-24 w-1 bg-gradient-to-b from-x-red to-transparent" />
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 pb-16 pt-18 sm:px-6 sm:pb-20 sm:pt-24 md:px-8 md:pb-24 md:pt-28">
        {crumbs && !clean ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-x-2 text-[12px] font-semibold text-white/50"
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
                  <span className="font-bold text-white/90">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="mb-4 flex items-center gap-3 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            {!clean ? <span className="inline-block h-px w-8 bg-x-red" aria-hidden /> : null}
            {eyebrow}
          </p>
        ) : null}

        <h1 className="max-w-4xl font-display text-2xl xs:text-3xl font-extrabold uppercase leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.6rem]">
          {title}
        </h1>

        {description ? (
          <p className="mt-6 max-w-[64ch] text-[15px] leading-[1.8] text-white/70 md:text-base font-normal">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
