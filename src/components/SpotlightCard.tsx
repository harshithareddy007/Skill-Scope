import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import type { ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);

    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
        relative
        overflow-hidden
        transition-all
        duration-500
        ${className}
      `}
    >
      {/* =========================================
          MAIN SPOTLIGHT
      ========================================= */}

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              280px circle at ${mouseX}px ${mouseY}px,
              rgba(232,93,42,0.14),
              transparent 65%
            )
          `,
        }}
      />

      {/* =========================================
          SOFT INNER LIGHT
      ========================================= */}

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              180px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.045),
              transparent 60%
            )
          `,
        }}
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
