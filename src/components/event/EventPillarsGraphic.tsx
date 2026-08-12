"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Pillar = {
  id: string;
  title: string;
  description: string;
};

function RedMaskIcon({ src }: { src: string }) {
  return (
    <span
      className="mb-3 size-14 sm:size-16 bg-x-red shrink-0 transition-transform duration-300 hover:scale-110"
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
      aria-hidden
    />
  );
}

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
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-4">
          
          {/* LEFT SIDE CALLOUTS (Vertically aligned flush to match pillar top & bottom height ratio) */}
          <div className="flex flex-col justify-between space-y-12 lg:col-span-4 lg:space-y-0 lg:py-0 h-full lg:text-right">
            {/* Top Left: Structural Integrity */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-end justify-start"
            >
              <RedMaskIcon src="/assets/icons/pillar-structural-integrity.png" />
              <span className="mb-3.5 h-[3.5px] w-28 rounded-full bg-x-red shadow-[0_2px_8px_rgba(224,49,40,0.35)]" />
              <h3 className="font-display text-[clamp(1.4rem,2.3vw,1.85rem)] font-black uppercase leading-[1.05] tracking-[-0.025em] text-ink text-center lg:text-right">
                Structural
                <br />
                Integrity
              </h3>
              <p className="mt-3 text-center font-body text-[14.5px] sm:text-[15.5px] font-medium leading-relaxed text-ink/80 max-w-[290px] lg:text-right">
                {p0?.description ?? "Design safe, reliable Structural systems"}
              </p>
            </motion.div>

            {/* Bottom Left: Technical Expertise */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center lg:items-end justify-end"
            >
              <RedMaskIcon src="/assets/icons/pillar-technical-expertise.png" />
              <span className="mb-3.5 h-[3.5px] w-28 rounded-full bg-x-red shadow-[0_2px_8px_rgba(224,49,40,0.35)]" />
              <h3 className="font-display text-[clamp(1.4rem,2.3vw,1.85rem)] font-black uppercase leading-[1.05] tracking-[-0.025em] text-ink text-center lg:text-right">
                Technical
                <br />
                Expertise
              </h3>
              <p className="mt-3 text-center font-body text-[14.5px] sm:text-[15.5px] font-medium leading-relaxed text-ink/80 max-w-[290px] lg:text-right">
                {p2?.description ?? "Apply engineering principles and best practices"}
              </p>
            </motion.div>
          </div>

          {/* CENTER: THE CLEAN 4-PILLAR ARCHITECTURAL TEMPLE GRAPHIC */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:col-span-4 lg:py-0 h-full"
          >
            <div className="relative w-full max-w-[360px] md:max-w-[420px] lg:max-w-[450px]">
              <svg
                viewBox="0 28 400 370"
                className="h-auto w-full filter drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                  <rect x="310" y="348" width="60" height="8" fill="#eb4138" />
                  <rect x="305" y="356" width="70" height="12" fill="#e03128" rx="1" />
                </g>

                {/* Bottom Foundation Base Slabs */}
                <path d="M15 368 H385 V382 H15 Z" fill="#b8221b" />
                <path d="M10 382 H390 V398 H10 Z" fill="#781411" />
              </svg>
            </div>
          </motion.div>

          {/* RIGHT SIDE CALLOUTS (Vertically aligned flush to match pillar top & bottom height ratio) */}
          <div className="flex flex-col justify-between space-y-12 lg:col-span-4 lg:space-y-0 lg:py-0 h-full lg:text-left">
            {/* Top Right: Functional Design */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-start justify-start"
            >
              <RedMaskIcon src="/assets/icons/pillar-functional-design.png" />
              <span className="mb-3.5 h-[3.5px] w-28 rounded-full bg-x-red shadow-[0_2px_8px_rgba(224,49,40,0.35)]" />
              <h3 className="font-display text-[clamp(1.4rem,2.3vw,1.85rem)] font-black uppercase leading-[1.05] tracking-[-0.025em] text-ink text-center lg:text-left">
                Functional
                <br />
                Design
              </h3>
              <p className="mt-3 text-center font-body text-[14.5px] sm:text-[15.5px] font-medium leading-relaxed text-ink/80 max-w-[290px] lg:text-left">
                {p1?.description ?? "Create spaces that meet user needs"}
              </p>
            </motion.div>

            {/* Bottom Right: Collaborative Insight */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center lg:items-start justify-end"
            >
              <RedMaskIcon src="/assets/icons/pillar-collaborative-insight.png" />
              <span className="mb-3.5 h-[3.5px] w-28 rounded-full bg-x-red shadow-[0_2px_8px_rgba(224,49,40,0.35)]" />
              <h3 className="font-display text-[clamp(1.4rem,2.3vw,1.85rem)] font-black uppercase leading-[1.05] tracking-[-0.025em] text-ink text-center lg:text-left">
                Collaborative
                <br />
                Insight
              </h3>
              <p className="mt-3 text-center font-body text-[14.5px] sm:text-[15.5px] font-medium leading-relaxed text-ink/80 max-w-[290px] lg:text-left">
                {p3?.description ?? "Integrate architecture and practical feedback"}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
