"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Pillar = {
  id: string;
  title: string;
  description: string;
};

export function EventPillarsGraphic({
  pillars,
  className,
}: {
  pillars: readonly Pillar[];
  className?: string;
}) {
  const reduce = useReducedMotion();

  const p0 = pillars[0]; // Structural Integrity
  const p1 = pillars[1]; // Functional Design
  const p2 = pillars[2]; // Technical Expertise
  const p3 = pillars[3]; // Collaborative Insight

  return (
    <div className={cn("relative w-full overflow-hidden bg-[#f4f2ec] py-16 md:py-24", className)}>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-4">
          
          {/* LEFT SIDE CALLOUTS */}
          <div className="flex flex-col justify-around space-y-10 lg:col-span-4 lg:py-14 lg:space-y-0 lg:text-right">
            {/* Top Left: Structural Integrity */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-end"
            >
              <span className="mb-4 h-[2.5px] w-16 bg-x-red" />
              <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold tracking-[-0.01em] text-ink">
                {p0?.title ?? "Structural Integrity"}
              </h3>
              <p className="mt-2 text-center text-[14px] leading-relaxed text-ink/75 lg:max-w-[280px] lg:text-right">
                {p0?.description ?? "Design safe, reliable Structural systems"}
              </p>
            </motion.div>

            {/* Bottom Left: Technical Expertise */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center lg:items-end"
            >
              <span className="mb-4 h-[2.5px] w-16 bg-x-red" />
              <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold tracking-[-0.01em] text-ink">
                {p2?.title ?? "Technical Expertise"}
              </h3>
              <p className="mt-2 text-center lg:text-right text-[14px] leading-relaxed text-ink/75 lg:max-w-[280px]">
                {p2?.description ?? "Apply engineering principles and best practices"}
              </p>
            </motion.div>
          </div>

          {/* CENTER: THE 4-PILLAR CLASSICAL TEMPLE GRAPHIC */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:col-span-4"
          >
            <div className="relative w-full max-w-[340px] md:max-w-[380px]">
              <svg
                viewBox="0 0 400 420"
                className="h-auto w-full filter drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Black PNG icons → white on red columns */}
                  <filter id="fxIconWhite" colorInterpolationFilters="sRGB">
                    <feColorMatrix
                      type="matrix"
                      values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0"
                    />
                  </filter>
                </defs>

                {/* Triangular Roof Pediment */}
                <polygon points="200,28 380,95 20,95" fill="#e03128" />
                {/* Roof Ridge & Trim */}
                <path d="M20 95 H380 V110 H20 Z" fill="#c42820" />
                <path d="M25 110 H375 V118 H25 Z" fill="#9a1f1a" />

                {/* Pillar 1 (AXIS A - Darkest Burgundy) */}
                <g>
                  <rect x="35" y="118" width="70" height="12" fill="#3f0b09" rx="1" />
                  <rect x="40" y="130" width="60" height="8" fill="#520e0b" />
                  <rect x="44" y="138" width="52" height="210" fill="#3f0b09" />
                  <line x1="52" y1="138" x2="52" y2="348" stroke="#2b0706" strokeWidth="2" />
                  <line x1="88" y1="138" x2="88" y2="348" stroke="#2b0706" strokeWidth="2" />
                  <image
                    href="/assets/icons/pillar-structural-integrity.png"
                    x="52"
                    y="210"
                    width="36"
                    height="36"
                    filter="url(#fxIconWhite)"
                  />
                  <rect x="40" y="348" width="60" height="8" fill="#520e0b" />
                  <rect x="35" y="356" width="70" height="12" fill="#3f0b09" rx="1" />
                </g>

                {/* Pillar 2 (AXIS B - Medium Burgundy) */}
                <g>
                  <rect x="125" y="118" width="70" height="12" fill="#781411" rx="1" />
                  <rect x="130" y="130" width="60" height="8" fill="#8e1914" />
                  <rect x="134" y="138" width="52" height="210" fill="#781411" />
                  <line x1="142" y1="138" x2="142" y2="348" stroke="#5a0f0d" strokeWidth="2" />
                  <line x1="178" y1="138" x2="178" y2="348" stroke="#5a0f0d" strokeWidth="2" />
                  <image
                    href="/assets/icons/pillar-functional-design.png"
                    x="142"
                    y="210"
                    width="36"
                    height="36"
                    filter="url(#fxIconWhite)"
                  />
                  <rect x="130" y="348" width="60" height="8" fill="#8e1914" />
                  <rect x="125" y="356" width="70" height="12" fill="#781411" rx="1" />
                </g>

                {/* Pillar 3 (AXIS C - Medium Red) */}
                <g>
                  <rect x="215" y="118" width="70" height="12" fill="#b8221b" rx="1" />
                  <rect x="220" y="130" width="60" height="8" fill="#ce2820" />
                  <rect x="224" y="138" width="52" height="210" fill="#b8221b" />
                  <line x1="232" y1="138" x2="232" y2="348" stroke="#921a15" strokeWidth="2" />
                  <line x1="268" y1="138" x2="268" y2="348" stroke="#921a15" strokeWidth="2" />
                  <image
                    href="/assets/icons/pillar-technical-expertise.png"
                    x="232"
                    y="210"
                    width="36"
                    height="36"
                    filter="url(#fxIconWhite)"
                  />
                  <rect x="220" y="348" width="60" height="8" fill="#ce2820" />
                  <rect x="215" y="356" width="70" height="12" fill="#b8221b" rx="1" />
                </g>

                {/* Pillar 4 (AXIS D - Bright Vivid Red) */}
                <g>
                  <rect x="305" y="118" width="70" height="12" fill="#e03128" rx="1" />
                  <rect x="310" y="130" width="60" height="8" fill="#eb4138" />
                  <rect x="314" y="138" width="52" height="210" fill="#e03128" />
                  <line x1="322" y1="138" x2="322" y2="348" stroke="#b8231c" strokeWidth="2" />
                  <line x1="358" y1="138" x2="358" y2="348" stroke="#b8231c" strokeWidth="2" />
                  <image
                    href="/assets/icons/pillar-collaborative-insight.png"
                    x="322"
                    y="210"
                    width="36"
                    height="36"
                    filter="url(#fxIconWhite)"
                  />
                  <rect x="310" y="348" width="60" height="8" fill="#eb4138" />
                  <rect x="305" y="356" width="70" height="12" fill="#e03128" rx="1" />
                </g>

                {/* Bottom Foundation Base Slabs */}
                <path d="M15 368 H385 V382 H15 Z" fill="#b8221b" />
                <path d="M10 382 H390 V398 H10 Z" fill="#781411" />
              </svg>
            </div>
          </motion.div>

          {/* RIGHT SIDE CALLOUTS */}
          <div className="flex flex-col justify-around space-y-10 lg:col-span-4 lg:py-14 lg:space-y-0 lg:text-left">
            {/* Top Right: Functional Design */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-start"
            >
              <span className="mb-4 h-[2.5px] w-16 bg-x-red" />
              <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold tracking-[-0.01em] text-ink">
                {p1?.title ?? "Functional Design"}
              </h3>
              <p className="mt-2 text-center lg:text-left text-[14px] leading-relaxed text-ink/75 lg:max-w-[280px]">
                {p1?.description ?? "Create spaces that meet user needs"}
              </p>
            </motion.div>

            {/* Bottom Right: Collaborative Insight */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center lg:items-start"
            >
              <span className="mb-4 h-[2.5px] w-16 bg-x-red" />
              <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold tracking-[-0.01em] text-ink">
                {p3?.title ?? "Collaborative Insight"}
              </h3>
              <p className="mt-2 text-center lg:text-left text-[14px] leading-relaxed text-ink/75 lg:max-w-[280px]">
                {p3?.description ?? "Integrate architecture and practical feedback"}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
