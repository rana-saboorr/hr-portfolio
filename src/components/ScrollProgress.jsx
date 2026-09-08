import { useScroll, useTransform, motion } from "motion/react";

/**
 * ScrollProgress
 * A 2px fixed bar at the top of the page that fills left-to-right
 * as the user scrolls, using the primary accent gradient.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress fixed top-0 left-0 right-0 z-[9999] h-[2.5px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #7F1D1D 0%, #DC2626 50%, #EF4444 100%)",
        boxShadow: "0 0 10px rgba(220, 38, 38, 0.7)",
      }}
    />
  );
}
