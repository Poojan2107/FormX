import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * FormX icon mannerism — literal engineering metaphors, readable at a glance.
 * viewBox 48 · stroke 1.75 · body currentColor · accent text-x-red
 * Asset PNGs (black on transparent) via EventAssetIcon for sourced Noun Project set.
 */

type IconProps = { className?: string };

const S = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("size-10 shrink-0", className)} fill="none" aria-hidden>
      {children}
    </svg>
  );
}

export function EventIconFrame({
  children,
  className,
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const box = size === "sm" ? "size-8" : size === "lg" ? "size-12" : "size-10";
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center [&_img]:h-full [&_img]:w-full [&_svg]:h-full [&_svg]:w-full",
        box,
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Black-on-transparent PNGs from /public/assets/icons */
export function EventAssetIcon({
  src,
  alt,
  className,
  invert = false,
  /** Paint glyph with currentColor (inherits text-x-red / text-ink) */
  asCurrentColor = false,
}: {
  src: string;
  alt: string;
  className?: string;
  /** White glyph on dark/red surfaces */
  invert?: boolean;
  asCurrentColor?: boolean;
}) {
  if (asCurrentColor) {
    return (
      <span
        role="img"
        aria-label={alt}
        className={cn("block size-full bg-current", className)}
        style={{
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={96}
      height={96}
      className={cn(
        "size-full object-contain",
        invert && "brightness-0 invert",
        className,
      )}
    />
  );
}

const ASSET = {
  integrity: "/assets/icons/pillar-structural-integrity.png",
  functional: "/assets/icons/pillar-functional-design.png",
  technical: "/assets/icons/pillar-technical-expertise.png",
  collaborative: "/assets/icons/pillar-collaborative-insight.png",
  architects: "/assets/icons/partner-architects.png",
  contractors: "/assets/icons/partner-contractors.png",
  partnerships: "/assets/icons/value-partnerships.png",
  construction: "/assets/icons/service-construction.png",
} as const;

export function IconPillar({ className }: IconProps) {
  return (
    <EventAssetIcon
      src={ASSET.integrity}
      alt="Structural Integrity"
      className={className}
    />
  );
}

export function IconDesk({ className }: IconProps) {
  return (
    <EventAssetIcon
      src={ASSET.functional}
      alt="Functional Design"
      className={className}
    />
  );
}

export function IconCode({ className }: IconProps) {
  return (
    <EventAssetIcon
      src={ASSET.technical}
      alt="Technical Expertise"
      className={className}
    />
  );
}

export function IconCollaborative({ className }: IconProps) {
  return (
    <EventAssetIcon
      src={ASSET.collaborative}
      alt="Collaborative Insight"
      className={className}
    />
  );
}

/** Handshake — Long-term Partnerships (values) */
export function IconHandshake({ className }: IconProps) {
  return (
    <EventAssetIcon
      src={ASSET.partnerships}
      alt="Long-term Partnerships"
      asCurrentColor
      className={className}
    />
  );
}

export function IconDrafting({ className }: IconProps) {
  return (
    <EventAssetIcon src={ASSET.architects} alt="Architects" className={className} />
  );
}

export function IconHardhat({ className }: IconProps) {
  return (
    <EventAssetIcon src={ASSET.contractors} alt="Contractors" className={className} />
  );
}


/* ════════════════════════════════════════════════════════
   SERVICES
════════════════════════════════════════════════════════ */

export function IconArchitecture({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...S} d="M6 42h36" />
      {/* pediment roof */}
      <path {...S} d="M8 24L24 8l16 16" />
      <path {...S} d="M8 24h32" className="text-x-red" />
      {/* columns */}
      <path {...S} d="M12 24v18M20 24v18M28 24v18M36 24v18" />
      {/* steps */}
      <path {...S} d="M10 42h28M12 39h24" />
    </Svg>
  );
}

export function IconBuilding({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...S} d="M6 42h36" />
      <path {...S} d="M12 42V8h24v34" />
      {/* floors */}
      <path {...S} d="M12 16h24M12 24h24M12 32h24" />
      {/* window dashes — red accent */}
      <path {...S} d="M16 11v3M22 11v3M28 11v3" className="text-x-red" />
      <path {...S} d="M16 19v3M22 19v3M28 19v3" className="text-x-red" />
      <path {...S} d="M16 27v3M22 27v3M28 27v3" className="text-x-red" />
      {/* door */}
      <path {...S} d="M21 42v-6h6v6" />
    </Svg>
  );
}

export function IconSteel({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...S} d="M6 42h36" />
      {/* portal columns */}
      <path {...S} d="M12 42V14M36 42V14" />
      {/* beams */}
      <path {...S} d="M12 14h24M12 26h24" />
      {/* bracing X */}
      <path {...S} d="M12 26L36 14M12 14L36 26" className="text-x-red" />
      {/* base plates */}
      <path {...S} d="M8 42h8M32 42h8" />
    </Svg>
  );
}

export function IconWarehouse({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...S} d="M4 42h40" />
      {/* saw-tooth / gable factory */}
      <path {...S} d="M6 42V28l6-8 6 8 6-8 6 8 6-8 6 8v14" />
      <path {...S} d="M6 28h36" className="text-x-red" />
      {/* chimney */}
      <path {...S} d="M34 20V10h5v10" />
      <path {...S} d="M35 8c1-2 2-2 3 0" className="text-x-red" />
      {/* door */}
      <path {...S} d="M20 42V32h10v10" />
    </Svg>
  );
}

export function IconTowers({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...S} d="M4 42h40" />
      <path {...S} d="M6 42V26h11v16" />
      <path {...S} d="M19 42V8h12v34" />
      <path {...S} d="M33 42V20h9v22" />
      {/* windows */}
      <path {...S} d="M22 12h2M27 12h2M22 18h2M27 18h2M22 24h2M27 24h2" className="text-x-red" />
      <path {...S} d="M8 30h4M8 35h4M35 26h4M35 32h4" />
    </Svg>
  );
}

export function IconAudit({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* clipboard */}
      <rect {...S} x="8" y="8" width="22" height="32" rx="2" />
      <path {...S} d="M15 8V5h8v3" />
      {/* checklist ticks */}
      <path {...S} d="M13 18l2.5 2.5L21 15" className="text-x-red" />
      <path {...S} d="M13 26l2.5 2.5L21 23" className="text-x-red" />
      <path {...S} d="M13 34h10" />
      {/* magnifier */}
      <circle {...S} cx="34" cy="32" r="8" />
      <path {...S} d="M40 38l5 5" />
    </Svg>
  );
}

export function IconCrane({ className }: IconProps) {
  return (
    <EventAssetIcon
      src={ASSET.construction}
      alt="Construction Stage Engineering Support"
      className={className}
    />
  );
}

export function IconInfrastructure({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* roadway */}
      <path {...S} d="M4 34h40M4 40h40" />
      <path {...S} d="M8 37h5M17 37h5M26 37h5M35 37h5" className="text-x-red" />
      {/* utility poles */}
      <path {...S} d="M12 34V12M36 34V12" />
      <path {...S} d="M8 16h8M32 16h8" />
      {/* overhead line */}
      <path {...S} d="M12 16c8 6 16 6 24 0" className="text-x-red" />
    </Svg>
  );
}

/* ════════════════════════════════════════════════════════
   VALUES — match PPT: people · gear · handshake · target
════════════════════════════════════════════════════════ */

/** Three people — centre larger (Young Minds) */
export function IconPeople({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* left */}
      <circle {...S} cx="11" cy="14" r="4" />
      <path {...S} d="M4 36c1-7 3.5-10 7-10s6 3 7 10" />
      {/* right */}
      <circle {...S} cx="37" cy="14" r="4" />
      <path {...S} d="M30 36c1-7 3.5-10 7-10s6 3 7 10" />
      {/* centre lead */}
      <circle {...S} cx="24" cy="11" r="5.5" />
      <path {...S} d="M12 38c2-9 6-13 12-13s10 4 12 13" />
      {/* red heart/energy accent */}
      <circle cx="24" cy="22" r="2" className="fill-x-red stroke-none" />
    </Svg>
  );
}

/** Single gear with red hub (Practical Solutions) */
export function IconGears({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle {...S} cx="24" cy="24" r="11" />
      {/* teeth */}
      <path {...S} d="M24 8v4M24 36v4M8 24h4M36 24h4" />
      <path {...S} d="M12.5 12.5l2.8 2.8M32.7 32.7l2.8 2.8M12.5 35.5l2.8-2.8M32.7 15.3l2.8-2.8" />
      {/* hub */}
      <circle {...S} cx="24" cy="24" r="4.5" className="text-x-red" />
      <circle cx="24" cy="24" r="2" className="fill-x-red stroke-none" />
    </Svg>
  );
}

export function IconPartnerships({ className }: IconProps) {
  return <IconHandshake className={className} />;
}

/** Bullseye + arrow into centre (Excellence) */
export function IconTarget({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle {...S} cx="22" cy="28" r="14" />
      <circle {...S} cx="22" cy="28" r="9" />
      <circle {...S} cx="22" cy="28" r="4" />
      <circle cx="22" cy="28" r="2" className="fill-x-red stroke-none" />
      {/* arrow from top-right into centre */}
      <path {...S} d="M38 10L26 22" className="text-x-red" />
      <path {...S} d="M38 10l-6 1 1 6" className="text-x-red" />
    </Svg>
  );
}

/* ════════════════════════════════════════════════════════
   PARTNERS — Architects/Contractors use ASSET PNGs above;
   remaining stay custom SVG (user: only those six changed)
════════════════════════════════════════════════════════ */

/** Three towers skyline (Developers) */
export function IconDeveloper({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...S} d="M4 42h40" />
      <path {...S} d="M6 42V24h12v18" />
      <path {...S} d="M20 42V8h14v34" />
      <path {...S} d="M36 42V18h8v24" />
      <path {...S} d="M24 12h2M30 12h2M24 18h2M30 18h2M24 24h2M30 24h2" className="text-x-red" />
    </Svg>
  );
}

/** Factory + chimneys + smoke (Industrialists) */
export function IconIndustry({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...S} d="M4 42h40" />
      <path {...S} d="M6 42V28l8 6V28l8 6V22h18v20" />
      {/* twin chimneys */}
      <path {...S} d="M30 22V10h4v12M36 22V8h4v14" />
      <path {...S} d="M31 8c1-3 2-3 3 0M37 6c1-3 2-3 3 0" className="text-x-red" />
      <path {...S} d="M10 34h4M20 30h4" className="text-x-red" />
    </Svg>
  );
}

/** PMC — professional bust with tie */
export function IconPmc({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle {...S} cx="24" cy="14" r="7" />
      <path {...S} d="M10 40c2-10 7-14 14-14s12 4 14 14" />
      {/* collar */}
      <path {...S} d="M18 28l6 4 6-4" />
      {/* tie */}
      <path {...S} d="M24 28v10" className="text-x-red" />
      <path {...S} d="M22 30h4l-2 8z" className="text-x-red" />
    </Svg>
  );
}

/** PEB portal frame — clear rafters + columns */
export function IconPeb({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...S} d="M4 42h40" />
      <path {...S} d="M10 42V28" />
      <path {...S} d="M38 42V28" />
      <path {...S} d="M10 28L24 12L38 28" className="text-x-red" />
      <path {...S} d="M10 28h28" />
      {/* ridge plate */}
      <path {...S} d="M22 12h4" className="text-x-red" />
      {/* purlin */}
      <path {...S} d="M14 34h20" />
    </Svg>
  );
}

/** Consultants — document + approval check */
export function IconConsultant({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...S} d="M12 6h16l8 8v28H12V6z" />
      <path {...S} d="M28 6v8h8" />
      <path {...S} d="M16 20h14M16 26h14M16 32h8" />
      <path {...S} d="M28 32l3.5 3.5L40 27" className="text-x-red" />
    </Svg>
  );
}

/* ── Maps ────────────────────────────────────────────── */

export const pillarIcons = {
  integrity: IconPillar,
  functional: IconDesk,
  technical: IconCode,
  collaborative: IconCollaborative,
} as const;

export const serviceIcons = {
  architecture: IconArchitecture,
  rcc: IconBuilding,
  steel: IconSteel,
  industrial: IconWarehouse,
  commercial: IconTowers,
  audits: IconAudit,
  construction: IconCrane,
  infrastructure: IconInfrastructure,
} as const;

export const valueIcons = {
  young: IconPeople,
  practical: IconGears,
  partnerships: IconHandshake,
  excellence: IconTarget,
} as const;

export const partnerIcons = {
  architects: IconDrafting,
  contractors: IconHardhat,
  developers: IconDeveloper,
  industrialists: IconIndustry,
  pmc: IconPmc,
  peb: IconPeb,
  consultants: IconConsultant,
} as const;
