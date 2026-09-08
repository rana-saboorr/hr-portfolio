import { motion } from "motion/react";
import { GraduationCap, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Education({ dark }) {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      data-section="education"
      className={`section-pad ${dark ? "bg-[#000000]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <SectionHeading
            label={education.sectionLabel}
            heading={education.heading}
            center
            dark={dark}
          />
        </div>

        <div className="flex justify-center">
          <motion.div
            className={`relative w-full max-w-2xl rounded-3xl border overflow-hidden shadow-2xl group ${
              dark
                ? "amoled-card"
                : "bg-white border-slate-200"
            }`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            {/* Dark Red Gradient header band */}
            <div
              className="h-1.5 w-full"
              style={{ background: "linear-gradient(90deg, #EF4444, #DC2626, #7F1D1D)" }}
              aria-hidden="true"
            />

            <div className="p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

                {/* Degree badge */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-white font-extrabold shadow-[0_0_25px_rgba(220,38,38,0.4)]"
                    style={{ background: "linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #7F1D1D 100%)" }}
                  >
                    <span className="text-3xl font-extrabold font-heading">BA</span>
                  </div>
                  <div
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                    style={{ background: "linear-gradient(90deg, #DC2626, #7F1D1D)" }}
                  >
                    <GraduationCap size={13} aria-hidden="true" />
                    Completed
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 text-center sm:text-left">
                  <div>
                    <p className="text-xs font-mono font-bold uppercase tracking-wider mb-1.5 text-red-400">
                      Bachelor's Degree
                    </p>
                    <h3 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
                      Bachelor of Arts
                    </h3>
                  </div>

                  <p className="text-base leading-relaxed max-w-md text-slate-300">
                    {education.entries[0].description}
                  </p>

                  {/* Key competencies developed */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                    {[
                      "Critical Thinking",
                      "Communication",
                      "Research & Analysis",
                      "Professional Writing",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-red-950/40 text-red-300 border border-red-900/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-slate-400 font-mono text-xs">
                    <BookOpen size={13} className="text-red-400" aria-hidden="true" />
                    <span>Academic credential supporting a professional HR career</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
