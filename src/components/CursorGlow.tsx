import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "button, a[href], input, textarea, select, [role='button'], .cursor-glow-target";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, {
    stiffness: 520,
    damping: 32,
    mass: 0.05,
  });

  const springY = useSpring(cursorY, {
    stiffness: 520,
    damping: 32,
    mass: 0.05,
  });

  const opacity = useMotionValue(0.16);
  const scale = useMotionValue(1);
  const blur = useMotionValue(18);
  const glow = useMotionValue(0.18);

  const interactiveRef = useRef(false);

  const lastPosition = useRef({
    x: -100,
    y: -100,
  });

  const frame = useRef<number | null>(null);

  /* =========================================
     ENABLE ONLY ON DESKTOP
  ========================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const updateEnabled = () => {
      setEnabled(mediaQuery.matches && !("ontouchstart" in window));
    };

    updateEnabled();

    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);

      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  /* =========================================
     POINTER TRACKING
  ========================================= */

  useEffect(() => {
    if (!enabled) return;

    const updatePosition = () => {
      frame.current = null;

      cursorX.set(lastPosition.current.x);
      cursorY.set(lastPosition.current.y);
    };

    const handlePointerMove = (event: PointerEvent) => {
      lastPosition.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (!frame.current) {
        frame.current = requestAnimationFrame(updatePosition);
      }

      const target = (event.target as HTMLElement)?.closest(
        INTERACTIVE_SELECTOR,
      );

      const isInteractive = Boolean(target);

      if (isInteractive !== interactiveRef.current) {
        interactiveRef.current = isInteractive;

        if (isInteractive) {
          opacity.set(0.28);

          scale.set(1.15);

          blur.set(28);

          glow.set(0.28);
        } else {
          opacity.set(0.16);

          scale.set(1);

          blur.set(18);

          glow.set(0.18);
        }
      }
    };

    document.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);

      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [enabled, cursorX, cursorY, opacity, scale, blur, glow]);

  if (!enabled) {
    return null;
  }

  /* =========================================
     FILTER
  ========================================= */

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        top-0
        left-0
        z-[9999]
        h-8
        w-8
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
      "
      style={{
        x: springX,
        y: springY,
        scale,
        opacity,
        filter: "drop-shadow(0 0 24px rgba(255, 145, 60, 0.45)) blur(12px)",
        mixBlendMode: "screen",
        background:
          "radial-gradient(circle, rgba(255, 170, 90, 0.95) 20%, rgba(255, 120, 50, 0.55) 45%, rgba(255, 90, 30, 0.2) 70%, transparent 85%)",
        willChange: "transform, opacity, filter",
      }}
    />
  );
}
