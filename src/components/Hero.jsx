import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Download, Mail, Phone, ArrowDown,
  Briefcase, Users, Star, MapPin,
  Shield, TrendingUp, Clock,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useReducedMotion } from "../hooks/useReducedMotion";

const EASE = [0.22, 1, 0.36, 1];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.65, ease: EASE, delay },
  };
}

// Quick-stat pill for left side
function StatPill({ icon: Icon, value, label, delay }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-red-900/40 bg-red-950/10 backdrop-blur-sm"
    >
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-700 to-red-950 flex items-center justify-center flex-shrink-0">
        <Icon size={14} className="text-red-200" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-extrabold text-white leading-none">{value}</p>
        <p className="text-[10px] font-mono text-red-400 mt-0.5 leading-none">{label}</p>
      </div>
    </motion.div>
  );
}

export default function Hero({ dark }) {
  const { hero, personal } = portfolioData;
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -100]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -60]);
  const profileY = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -50]);

  return (
    <section
      id="home"
      data-section="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]"
    >
      {/* ── Ambient crimson blooms ── */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-56 -left-56 w-[700px] h-[700px] rounded-full pointer-events-none blob-animate"
        style={{
          y: blobY1,
          background:
            "radial-gradient(circle, rgba(220,38,38,0.16) 0%, rgba(153,27,27,0.06) 55%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full pointer-events-none blob-animate-delay"
        style={{
          y: blobY2,
          background:
            "radial-gradient(circle, rgba(185,28,28,0.18) 0%, rgba(127,29,29,0.06) 55%, transparent 75%)",
        }}
      />
      {/* Subtle scan-line texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(220,38,38,0.4) 2px, rgba(220,38,38,0.4) 3px)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

          {/* ══════════════ LEFT: Content ══════════════ */}
          <div className="flex flex-col gap-6 max-w-xl">

            {/* Eyebrow badges */}
            <motion.div {...fadeUp(0.05)} className="flex flex-wrap items-center gap-2.5">
              <div className="oled-badge">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#EF4444]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-red-300">
                  Available · {hero.eyebrow}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-red-950/60 text-slate-300 bg-red-950/15">
                <MapPin size={10} className="text-red-400" aria-hidden="true" />
                G-9, Islamabad, Pakistan
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-heading text-5xl sm:text-6xl xl:text-[4.5rem] font-extrabold tracking-tight leading-[1.04]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {hero.heading.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 38, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.1 }}
                >
                  {i === 1 ? (
                    <span
                      className="gradient-text-4k drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]"
                    >
                      {word}
                    </span>
                  ) : (
                    <span className="text-white">{word}</span>
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Divider line */}
            <motion.div
              {...fadeUp(0.38)}
              className="h-px w-24 rounded-full"
              style={{ background: "linear-gradient(90deg, #EF4444, #7F1D1D, transparent)" }}
            />

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.42)}
              className="text-xl sm:text-2xl font-heading font-semibold leading-snug tracking-tight text-slate-100"
            >
              {hero.subheading.split("\n").map((line, i) => (
                <span key={i} className={i > 0 ? "block" : ""}>
                  {i === 0 ? line : <span className="gradient-text-red">{line}</span>}
                </span>
              ))}
            </motion.p>

            {/* Description */}
            <motion.p
              {...fadeUp(0.52)}
              className="text-base sm:text-[0.95rem] leading-relaxed text-slate-400"
            >
              {hero.description}
            </motion.p>

            {/* Quick-stat pills */}
            <motion.div
              {...fadeUp(0.58)}
              className="flex flex-wrap gap-2.5"
            >
              <StatPill icon={Briefcase}   value="5+ Years"       label="HR Experience"         delay={0.6} />
              <StatPill icon={Users}       value="Rana Group"     label="Current Employer"       delay={0.66} />
              <StatPill icon={Shield}      value="G-9, ISB"       label="Based in Islamabad"     delay={0.72} />
              <StatPill icon={TrendingUp}  value="7+ Years"       label="Total Experience"       delay={0.78} />
              <StatPill icon={Star}        value="BA"             label="Qualification"          delay={0.84} />
              <StatPill icon={Clock}       value="2021–Now"       label="At Rana Group"          delay={0.90} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.72)} className="flex flex-wrap items-center gap-3 pt-1">
              {/* Primary */}
              <motion.a
                href={hero.cta.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-download-cv"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-white text-sm font-bold font-body shadow-[0_0_28px_rgba(220,38,38,0.4)] transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #EF4444 0%, #DC2626 55%, #991B1B 100%)",
                }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(220,38,38,0.65)" }}
                whileTap={{ scale: 0.96 }}
                aria-label="Download Muddasir Abbas's CV"
              >
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                {hero.cta.primary.label}
              </motion.a>

              {/* Secondary */}
              <motion.a
                href={hero.cta.secondary.href}
                id="hero-contact-me"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold font-body border border-red-900/60 text-white bg-red-950/15 hover:bg-red-950/30 hover:border-red-500/50 hover:shadow-[0_0_18px_rgba(220,38,38,0.25)] transition-all duration-200"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Mail size={15} className="text-red-400" aria-hidden="true" />
                {hero.cta.secondary.label}
              </motion.a>

              {/* Phone */}
              <motion.a
                href={hero.cta.phone.href}
                id="hero-call-phone"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold font-body border border-red-900/40 text-red-300 bg-red-950/25 hover:bg-red-900/35 shadow-[0_0_12px_rgba(220,38,38,0.15)] transition-all duration-200"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                aria-label={`Call Muddasir Abbas at ${personal.phoneDisplay}`}
              >
                <Phone size={14} className="text-red-400" aria-hidden="true" />
                {hero.cta.phone.label}
              </motion.a>
            </motion.div>
          </div>

          {/* ══════════════ RIGHT: Full-Bleed Profile Card ══════════════ */}
          <motion.div
            className="flex justify-center lg:justify-end"
            style={{ y: profileY }}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          >
            <div className="relative">

              {/* Outer crimson aura glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[3rem] pointer-events-none blur-2xl opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, #EF4444 0%, #DC2626 40%, #991B1B 70%, #450A0A 100%)",
                }}
              />

              {/* ── Main card ── */}
              <div
                className="relative w-72 h-[34rem] sm:w-[22rem] sm:h-[38rem] lg:w-[24rem] lg:h-[42rem] rounded-[2.8rem] overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.98)]"
                style={{
                  border: "1.5px solid transparent",
                  background:
                    "linear-gradient(145deg, #100204, #020001) padding-box, linear-gradient(150deg, #DC2626 0%, #7F1D1D 50%, #300505 100%) border-box",
                }}
              >
                {/* HUD corner marks */}
                {[
                  "top-4 left-4 border-t-2 border-l-2 rounded-tl",
                  "top-4 right-4 border-t-2 border-r-2 rounded-tr",
                  "bottom-4 left-4 border-b-2 border-l-2 rounded-bl",
                  "bottom-4 right-4 border-b-2 border-r-2 rounded-br",
                ].map((cls, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    className={`absolute w-5 h-5 border-red-500/80 z-20 ${cls}`}
                  />
                ))}

                {/* Scan line — top */}
                <motion.div
                  aria-hidden="true"
                  className="absolute left-0 right-0 h-px z-20 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.6), transparent)" }}
                  animate={prefersReduced ? {} : { top: ["8%", "92%", "8%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                {/* Full-bleed photo */}
                {personal.hasPhoto ? (
                  <div className="absolute inset-0 group">
                    <img
                      src={personal.photoPath}
                      alt={personal.photoAlt}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                    />
                    {/* Gradient mask — bottom fade */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.1) 58%, transparent 75%)",
                      }}
                    />
                    {/* Left edge ambient */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 40%)",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #7F1D1D 100%)",
                    }}
                  >
                    <span className="text-white text-7xl font-extrabold font-heading">
                      {personal.initials}
                    </span>
                  </div>
                )}

                {/* ── Top status badge ── */}
                <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-red-900/50 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#EF4444]" />
                    <span className="text-[10px] font-mono font-bold text-red-300 tracking-widest uppercase">
                      HR Professional
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-black/70 border border-red-900/40 backdrop-blur-md">
                    <span className="text-[10px] font-mono text-slate-400">2021–Present</span>
                  </div>
                </div>

                {/* ── Bottom overlay: name + info ── */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-5 pt-12">
                  {/* Name */}
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Muddasir Abbas
                  </h2>
                  <p className="text-[11px] font-mono font-semibold tracking-widest uppercase text-red-400 mt-0.5">
                    HR Executive · Talent Lead
                  </p>

                  {/* Divider */}
                  <div
                    className="my-2.5 h-px w-full opacity-40 rounded-full"
                    style={{ background: "linear-gradient(90deg, #DC2626, #7F1D1D, transparent)" }}
                  />

                  {/* Info row */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300 mb-2.5">
                    <MapPin size={10} className="text-red-400 flex-shrink-0" aria-hidden="true" />
                    <span>G-9, Islamabad, Pakistan</span>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {["Rana Group", "Talent Acq.", "98% Ret.", "People First"].map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/65 text-red-300 border border-red-900/55 backdrop-blur-sm"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Floating chip: HR Executive ── */}
              <motion.div
                id="hero-chip-executive"
                className="absolute -top-5 -right-5 lg:-right-7 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl text-xs font-semibold bg-[#0d0204] text-white border border-red-900/55 shadow-[0_0_24px_rgba(220,38,38,0.28),0_8px_32px_rgba(0,0,0,0.85)]"
                animate={prefersReduced ? {} : { y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center shadow-md">
                  <Briefcase size={13} aria-hidden="true" />
                </div>
                <div>
                  <p className="leading-none font-bold text-white">HR Executive</p>
                  <p className="text-[10px] text-red-400 font-mono mt-0.5">Rana Group</p>
                </div>
              </motion.div>

              {/* ── Floating chip: Experience ── */}
              <motion.div
                id="hero-chip-experience"
                className="absolute -bottom-5 -left-5 lg:-left-7 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl text-xs font-semibold bg-[#0d0204] text-white border border-red-900/55 shadow-[0_0_24px_rgba(220,38,38,0.28),0_8px_32px_rgba(0,0,0,0.85)]"
                animate={prefersReduced ? {} : { y: [0, 7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center shadow-md">
                  <Users size={13} aria-hidden="true" />
                </div>
                <div>
                  <p className="leading-none font-bold text-white">5+ Years HR</p>
                  <p className="text-[10px] text-red-400 font-mono mt-0.5">People First</p>
                </div>
              </motion.div>

              {/* ── Floating chip: Certified ── */}
              <motion.div
                id="hero-chip-certified"
                className="absolute -bottom-8 right-8 lg:right-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold bg-[#0d0204] text-white border border-red-900/45 shadow-[0_4px_20px_rgba(0,0,0,0.7)]"
                animate={prefersReduced ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                <Star size={12} className="text-red-500 fill-red-500" aria-hidden="true" />
                <span className="text-red-300">Certified Professional</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          aria-hidden="true"
        >
          <span className="text-[0.6rem] tracking-[0.18em] uppercase font-medium">
            Scroll to explore
          </span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={15} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
