"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right" | "fade";
};

const variants = {
  bottom: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  left:   { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
  right:  { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } },
  fade:   { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  from = "bottom",
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const v = variants[from];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      variants={v}
      {...props}
    >
      {children}
    </motion.div>
  );
}
