"use client";

import { motion } from "framer-motion";

export function DrawingLineAnimation({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Blueprint Grid / Guide lines */}
      <line x1="0" y1="20" x2="600" y2="20" stroke="rgba(222,48,36,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="0" y1="60" x2="600" y2="60" stroke="rgba(222,48,36,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(222,48,36,0.15)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Animated Blueprint CAD Drawing Line */}
      <motion.path
        d="M 10 60 L 120 60 L 170 20 L 290 20 L 340 100 L 460 100 L 510 60 L 590 60"
        stroke="#de3024"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.85 }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      />

      {/* Animated CAD Node Points */}
      <motion.circle cx="170" cy="20" r="3" fill="#de3024" initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ delay: 0.8, duration: 0.4 }} />
      <motion.circle cx="340" cy="100" r="3" fill="#de3024" initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ delay: 1.8, duration: 0.4 }} />
      <motion.circle cx="510" cy="60" r="3" fill="#de3024" initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ delay: 2.8, duration: 0.4 }} />
    </svg>
  );
}
