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
        scale: 1.01,
      }}
      transition={{
        duration: 0.16,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
relative
overflow-hidden
border border-white/[0.12]
bg-white/[0.03]
shadow-[0_0_40px_rgba(255,68,0,0.03)]
transition-all
duration-200
hover:-translate-y-1
hover:scale-[1.01]
hover:border-[#FF4400]/30
hover:bg-white/[0.045]
hover:shadow-[0_0_50px_rgba(255,68,0,0.08)]
        ${className}
      `}
    >
      {/* =========================================
          MAIN SPOTLIGHT
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-60" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              220px circle at ${mouseX}px ${mouseY}px,
              rgba(255,68,0,0.10),
              transparent 65%
            )
          `,
        }}
      />

      {/* =========================================
          SOFT INNER LIGHT
      ========================================= */}

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
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
