"use client";

import { Reveal } from "@/components/ui/Reveal";

/**
 * Partner type data matching the brochure specification
 */
export const PARTNER_TYPES = [
  {
    id: "architects",
    title: "ARCHITECTS",
    subtitle: "Design partners",
    icon: (
      <svg
        className="size-12 md:size-14 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Drawing Board / Paper */}
        <path
          d="M12 48L44 16"
          stroke="#111110"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Ruler */}
        <path
          d="M20 54L52 22"
          stroke="#111110"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M25 43L29 47" stroke="#e03128" strokeWidth="2" strokeLinecap="round" />
        <path d="M31 37L35 41" stroke="#e03128" strokeWidth="2" strokeLinecap="round" />
        <path d="M37 31L41 35" stroke="#e03128" strokeWidth="2" strokeLinecap="round" />
        <path d="M43 25L47 29" stroke="#e03128" strokeWidth="2" strokeLinecap="round" />
        {/* Pencil */}
        <path
          d="M16 36L36 16L42 22L22 42L14 44L16 36Z"
          stroke="#111110"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M14 44L19 39" stroke="#e03128" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "developers",
    title: "DEVELOPERS",
    subtitle: "Promoters & owners",
    icon: (
      <svg
        className="size-12 md:size-14 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Tower */}
        <rect
          x="16"
          y="18"
          width="18"
          height="36"
          rx="1"
          stroke="#111110"
          strokeWidth="2.5"
        />
        {/* High-Rise Secondary Tower */}
        <rect
          x="34"
          y="12"
          width="16"
          height="42"
          rx="1"
          stroke="#111110"
          strokeWidth="2.5"
        />
        {/* Windows Main */}
        <rect x="20" y="24" width="4" height="4" fill="#111110" />
        <rect x="26" y="24" width="4" height="4" fill="#111110" />
        <rect x="20" y="32" width="4" height="4" fill="#111110" />
        <rect x="26" y="32" width="4" height="4" fill="#111110" />
        <rect x="20" y="40" width="4" height="4" fill="#e03128" />
        <rect x="26" y="40" width="4" height="4" fill="#111110" />
        {/* Windows High-Rise */}
        <rect x="38" y="18" width="3" height="3" fill="#111110" />
        <rect x="43" y="18" width="3" height="3" fill="#111110" />
        <rect x="38" y="26" width="3" height="3" fill="#111110" />
        <rect x="43" y="26" width="3" height="3" fill="#e03128" />
        <rect x="38" y="34" width="3" height="3" fill="#111110" />
        <rect x="43" y="34" width="3" height="3" fill="#111110" />
        <rect x="38" y="42" width="3" height="3" fill="#111110" />
        <rect x="43" y="42" width="3" height="3" fill="#111110" />
      </svg>
    ),
  },
  {
    id: "contractors",
    title: "CIVIL CONTRACTORS",
    subtitle: "Execution partners",
    icon: (
      <svg
        className="size-12 md:size-14 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Helmet Dome */}
        <path
          d="M16 38C16 27.5 23.16 19 32 19C40.84 19 48 27.5 48 38H16Z"
          stroke="#111110"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Brim */}
        <path
          d="M10 40C10 40 20 38 32 38C44 38 54 40 54 40L52 44C52 44 42 42 32 42C22 42 12 44 12 44L10 40Z"
          fill="#111110"
          stroke="#111110"
          strokeWidth="1.5"
        />
        {/* Center Ridge Accent */}
        <path
          d="M32 19V38"
          stroke="#e03128"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M26 23C26 23 29 20 32 20C35 20 38 23 38 23"
          stroke="#111110"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: "industries",
    title: "INDUSTRIES",
    subtitle: "Industrial houses & pharma",
    icon: (
      <svg
        className="size-12 md:size-14 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Factory Outline */}
        <path
          d="M12 48V32L24 24V32L36 24V48H12Z"
          stroke="#111110"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <rect
          x="36"
          y="18"
          width="16"
          height="30"
          stroke="#111110"
          strokeWidth="2.5"
        />
        {/* Chimney Stacks */}
        <path d="M40 18V12" stroke="#111110" strokeWidth="2.5" />
        <path d="M48 18V14" stroke="#111110" strokeWidth="2.5" />
        {/* Smoke Puffs */}
        <circle cx="40" cy="9" r="2" stroke="#e03128" strokeWidth="1.5" />
        <circle cx="48" cy="10" r="1.5" stroke="#e03128" strokeWidth="1.5" />
        {/* Windows */}
        <rect x="40" y="24" width="3" height="3" fill="#e03128" />
        <rect x="45" y="24" width="3" height="3" fill="#e03128" />
        <rect x="40" y="30" width="3" height="3" fill="#111110" />
        <rect x="45" y="30" width="3" height="3" fill="#111110" />
        <rect x="18" y="38" width="4" height="6" fill="#111110" />
      </svg>
    ),
  },
  {
    id: "pmc",
    title: "PMC",
    subtitle: "Project management",
    icon: (
      <svg
        className="size-12 md:size-14 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle cx="32" cy="20" r="7" stroke="#111110" strokeWidth="2.5" />
        {/* Shoulders / Suit */}
        <path
          d="M16 48C16 38.0589 23.1634 30 32 30C40.8366 30 48 38.0589 48 48"
          stroke="#111110"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Shirt Collar */}
        <path d="M26 30L32 36L38 30" stroke="#111110" strokeWidth="2" />
        {/* Red Tie */}
        <path
          d="M32 36L34.5 40L32 46L29.5 40L32 36Z"
          fill="#e03128"
          stroke="#e03128"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "peb",
    title: "PEB & FABRICATORS",
    subtitle: "Steel & PEB vendors",
    icon: (
      <svg
        className="size-12 md:size-14 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* PEB Portal Frame */}
        <path
          d="M12 48V24L32 14L52 24V48"
          stroke="#111110"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Internal Truss Lines */}
        <path d="M12 24H52" stroke="#111110" strokeWidth="2" />
        <path d="M32 14V24" stroke="#e03128" strokeWidth="2" />
        <path d="M22 19L32 24L42 19" stroke="#111110" strokeWidth="1.8" />
        <path d="M12 36H52" stroke="#e03128" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
  },
] as const;

interface PartnerTypesBannerProps {
  showHeading?: boolean;
  className?: string;
}

export function PartnerTypesBanner({
  showHeading = true,
  className = "",
}: PartnerTypesBannerProps) {
  return (
    <div className={`w-full ${className}`}>
      {showHeading && (
        <Reveal>
          <div className="mb-8 text-center md:mb-10">
            <h3 className="font-display text-2xl font-black uppercase tracking-wider text-ink sm:text-3xl md:text-4xl">
              WHO WE PARTNER WITH
            </h3>
            <div
              aria-hidden
              className="mx-auto mt-3 h-[3.5px] w-36 bg-x-red shadow-[0_0_10px_rgba(224,49,40,0.5)] md:w-48"
            />
          </div>
        </Reveal>
      )}

      <Reveal delay={0.08}>
        {/* Outer Frame matching the requested design border */}
        <div className="formx-card relative overflow-hidden rounded-2xl border-[3px] border-ink bg-[#f7f6f2] p-3 shadow-xl md:p-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNER_TYPES.map((partner) => (
              <div
                key={partner.id}
                className="group relative flex flex-col items-center justify-between rounded-xl border border-ink/20 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-x-red hover:shadow-lg md:p-6"
              >
                {/* Icon Container */}
                <div className="flex h-16 w-full items-center justify-center">
                  {partner.icon}
                </div>

                {/* Title */}
                <div className="mt-4 flex flex-1 items-center justify-center">
                  <span className="font-display text-[13px] font-black leading-snug tracking-tight text-x-red transition-colors group-hover:text-ink md:text-[14px]">
                    {partner.title}
                  </span>
                </div>

                {/* Subtitle / Tag */}
                <span className="mt-2 text-[10.5px] font-medium tracking-wide text-ink/50 transition-colors group-hover:text-ink/75">
                  {partner.subtitle}
                </span>

                {/* Bottom Red Accent Line on Hover */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 bg-x-red transition-all duration-300 group-hover:w-3/4"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
