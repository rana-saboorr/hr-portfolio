import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Users, Database, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const iconMap = { Users, Database };

function TimelineCard({ position, index, isLeft, dark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const Icon = iconMap[position.icon] || Users;

  return (
    <div
      ref={ref}
      className={`relative grid lg:grid-cols-2 gap-0 items-center ${
        isLeft ? "" : "lg:direction-rtl"
      }`}
    >
      {/* ── Desktop: alternating content/empty columns ── */}
      {/* Content column */}
      <motion.div
        className={`${isLeft ? "lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"}`}
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.1 }}
      >
        <div
          className="relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 group amoled-card"
        >
          {/* Gradient top accent line */}
          <div
            className="absolute top-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(90deg, #EF4444, #DC2626, #7F1D1D)" }}
            aria-hidden="true"
          />

          {/* Header */}
          <div className={`flex items-start gap-4 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
            {/* Icon badge */}
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(220,38,38,0.3)]"
              style={{ background: "linear-gradient(135deg, #EF4444, #991B1B)" }}
            >
              <Icon size={20} aria-hidden="true" />
            </div>

            <div className={`flex-1 ${isLeft ? "lg:text-right" : ""}`}>
              {/* Period + Current badge */}
              <div className={`flex items-center gap-2 mb-1 ${isLeft ? "lg:justify-end" : ""}`}>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-950/40 text-red-300 border border-red-900/40">
                  {position.period}
                </span>
                {position.isCurrent && (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                    <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444] animate-pulse" aria-hidden="true" />
                    Current Role
                  </span>
                )}
              </div>

              <h3 className="font-heading font-extrabold text-xl mb-0.5 text-white">
                {position.title}
              </h3>
              <p className="font-bold text-sm text-red-400">
                {position.company}
              </p>
              {position.duration && (
                <p className="text-xs font-mono mt-0.5 text-slate-400">
                  {position.duration}
                </p>
              )}
            </div>
          </div>

          {/* Responsibilities */}
          <ul className={`mt-5 flex flex-col gap-2.5 ${isLeft ? "lg:items-end" : ""}`}>
            {position.responsibilities.map((resp, i) => (
              <motion.li
                key={i}
                className={`flex items-start gap-2.5 text-sm text-slate-300 ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}
                initial={{ opacity: 0, x: isLeft ? 16 : -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.07 }}
              >
                <CheckCircle2
                  size={15}
                  className="flex-shrink-0 mt-0.5 text-red-400"
                  aria-hidden="true"
                />
                <span>{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* ── Desktop: empty column (opposite side) ── */}
      <div className={`hidden lg:block ${isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`} />
    </div>
  );
}

export default function Experience({ dark }) {
  const { experience } = portfolioData;
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      data-section="experience"
      className="section-pad bg-[#000000]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <SectionHeading
            label={experience.sectionLabel}
            heading={experience.heading}
            center
            dark={dark}
          />
        </div>

        {/* Timeline */}
        <div className="relative" ref={lineRef}>
          {/* Vertical timeline line — desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-red-950/40 overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 right-0 timeline-line rounded-full"
              initial={{ height: "0%" }}
              animate={lineInView ? { height: "100%" } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Timeline dot for each position — desktop */}
          <div className="hidden lg:block">
            {experience.positions.map((pos, i) => (
              <div
                key={pos.id}
                className="absolute left-1/2 -translate-x-1/2 z-10"
                style={{ top: `${i === 0 ? "12%" : "62%"}` }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full border-4 border-black bg-red-600 shadow-[0_0_12px_#EF4444]"
                  initial={{ scale: 0 }}
                  animate={lineInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.3, duration: 0.4, type: "spring" }}
                />
              </div>
            ))}
          </div>

          {/* Position cards */}
          <div className="flex flex-col gap-10 lg:gap-16">
            {experience.positions.map((pos, i) => (
              <TimelineCard
                key={pos.id}
                position={pos}
                index={i}
                isLeft={i % 2 === 0}
                dark={dark}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
