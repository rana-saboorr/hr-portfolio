import { motion } from "motion/react";
import { useCounter } from "../hooks/useCounter";

/**
 * AnimatedCounter
 * Displays a number that counts up when it enters the viewport.
 * For text values (like "BA"), uses a simple reveal instead.
 */
export default function AnimatedCounter({ value, suffix = "", label, isText = false }) {
  const { ref, displayValue } = useCounter(value, 1800, isText);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-1 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="text-4xl sm:text-5xl font-extrabold font-heading gradient-text-4k drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] leading-none"
        aria-live="polite"
      >
        {isText ? (
          <motion.span
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {value}
          </motion.span>
        ) : (
          <>
            {displayValue}
            {suffix}
          </>
        )}
      </div>
      <p className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-400 leading-tight max-w-[120px] mt-1">
        {label}
      </p>
    </motion.div>
  );
}
