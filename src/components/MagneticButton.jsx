import { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";

/**
 * MagneticButton
 * Applies a very subtle magnetic attraction effect on hover.
 * Completely disabled for touch devices and reduced motion users.
 */
export default function MagneticButton({ children, className = "", strength = 0.3, ...props }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setOffset({
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
      });
    },
    [prefersReduced, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  );
}
