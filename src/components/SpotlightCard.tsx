import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

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

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {

    const rect =
      e.currentTarget.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left
    );

    mouseY.set(
      e.clientY - rect.top
    );

  }

  return (

    <motion.div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden ${className}`}
    >

      {/* SOFT ORANGE SPOTLIGHT */}

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              240px circle at ${mouseX}px ${mouseY}px,
              rgba(255,68,0,0.10),
              transparent 60%
            )
          `,
        }}
      />

      {/* SUBTLE BORDER LIGHT */}

      <motion.div
        className="pointer-events-none absolute inset-[1px] rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              180px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.05),
              transparent 55%
            )
          `,
        }}
      />

      {/* CONTENT */}

      <div className="relative z-10 h-full">

        {children}

      </div>

    </motion.div>

  );
}