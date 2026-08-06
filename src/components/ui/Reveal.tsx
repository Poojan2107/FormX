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
  bottom: { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } },
  left:   { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } },
  right:  { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } },
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
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      variants={v}
      {...props}
    >
      {children}
    </motion.div>
  );
}
