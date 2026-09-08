import { motion } from "motion/react";
import { MapPin, Briefcase } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";

export default function About({ dark }) {
  const { about, stats, personal } = portfolioData;

  return (
    <section
      id="about"
      data-section="about"
      className="section-pad bg-[#000000]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── Left: Profile Visual ─── */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Outer Crimson Glow */}
              <div 
                className="absolute -inset-1 rounded-[2.5rem] opacity-60 blur-lg pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #EF4444, #DC2626, #7F1D1D)",
                }}
                aria-hidden="true"
              />

              {/* Main frame — full-bleed photo */}
              <div
                className="relative w-72 h-[26rem] sm:w-80 sm:h-[30rem] rounded-[2.2rem] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.95)]"
                style={{
                  border: "1.5px solid transparent",
                  background: "linear-gradient(145deg, #0a0204, #020001) padding-box, linear-gradient(135deg, #DC2626, #7F1D1D) border-box",
                }}
              >
                {/* Tech Corner Markers */}
                <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-red-500/90 rounded-tl z-20" aria-hidden="true" />
                <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-red-500/90 rounded-tr z-20" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-red-500/90 rounded-bl z-20" aria-hidden="true" />
                <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500/90 rounded-br z-20" aria-hidden="true" />

                {/* Full-bleed photo */}
                {personal.hasPhoto ? (
                  <div className="absolute inset-0 group">
                    <img
                      src={personal.photoPath}
                      alt={personal.photoAlt}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay for text legibility */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 45%, transparent 70%)",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center text-white text-6xl font-extrabold font-heading"
                    style={{ background: "linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #7F1D1D 100%)" }}
                  >
                    {personal.initials}
                  </div>
                )}

                {/* Overlaid info at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-10">
                  <p className="font-heading font-extrabold text-xl text-white drop-shadow-lg">
                    {personal.name}
                  </p>
                  <p className="text-xs font-semibold tracking-widest uppercase text-red-400 font-mono mt-0.5">
                    {personal.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-slate-300">
                    <MapPin size={11} className="text-red-400" aria-hidden="true" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["Talent Lead", "HR Ops", "People First"].map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-black/60 text-red-300 border border-red-900/60 backdrop-blur-sm"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Right: Content ─── */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              label={about.sectionLabel}
              heading={about.heading}
              dark={dark}
            />

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4">
              {about.bio.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-base leading-relaxed text-slate-300"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Quick facts strip */}
            <motion.div
              className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl border border-red-900/40 bg-[#060102] shadow-[0_0_20px_rgba(220,38,38,0.15)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                <Briefcase size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Currently at Rana Group of Kasur
                </p>
                <p className="text-xs text-red-400 font-mono">
                  HR Executive · 2021 – Present
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── Stats Grid ─── */}
        <motion.div
          className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="relative flex flex-col items-center justify-center gap-2 py-8 px-4 rounded-2xl border shadow-lg group cursor-default amoled-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              {/* Crimson Accent Line */}
              <div
                className="absolute top-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #EF4444, #DC2626, #7F1D1D)" }}
                aria-hidden="true"
              />
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isText={stat.isText}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
