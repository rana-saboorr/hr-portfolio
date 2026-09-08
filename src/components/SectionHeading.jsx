import { motion } from "motion/react";

/**
 * SectionHeading
 * Reusable animated section header with eyebrow label, large heading, and optional subheading.
 */
export default function SectionHeading({
  label,
  heading,
  subheading,
  center = false,
  dark = false,
}) {
  const align = center ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col gap-3.5 ${align}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {label && (
        <div className="flex items-center gap-2">
          {dark ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-red-400 bg-red-950/40 border border-red-900/40 shadow-[0_0_12px_rgba(220,38,38,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#EF4444] animate-pulse" />
              <span>{label.toUpperCase()}</span>
            </div>
          ) : (
            <span className="eyebrow">
              — {label}
            </span>
          )}
        </div>
      )}

      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            dark ? "text-slate-300" : "text-[var(--color-muted)]"
          } ${center ? "mx-auto" : ""}`}
        >
          {subheading}
        </p>
      )}
    </motion.div>
  );
}
