import { motion } from "motion/react";
import {
  UserPlus, HeartHandshake, ShieldCheck, FileText, CalendarCheck, GraduationCap
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const iconMap = { UserPlus, HeartHandshake, ShieldCheck, FileText, CalendarCheck, GraduationCap };

const colorAccentMap = {
  indigo: { from: "#DC2626", to: "#EF4444", glow: "rgba(220,38,38,0.5)" },
  teal:   { from: "#B91C1C", to: "#DC2626", glow: "rgba(185,28,28,0.5)" },
  violet: { from: "#991B1B", to: "#B91C1C", glow: "rgba(153,27,27,0.5)" },
  amber:  { from: "#EF4444", to: "#F87171", glow: "rgba(239,68,68,0.5)"  },
  emerald:{ from: "#7F1D1D", to: "#991B1B", glow: "rgba(127,29,29,0.5)"  },
  rose:   { from: "#DC2626", to: "#7F1D1D", glow: "rgba(220,38,38,0.5)"  },
};

function ServiceCard({ service, index, dark }) {
  const Icon = iconMap[service.icon] || FileText;
  const colors = colorAccentMap[service.color] || colorAccentMap.indigo;

  return (
    <motion.article
      className={`relative group flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border cursor-default transition-all duration-300 ${
        dark
          ? "amoled-card"
          : "bg-white border-slate-200 shadow-sm"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      tabIndex={0}
      aria-label={service.title}
    >
      {/* Top 4K Gradient Accent */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${colors.from}, ${colors.to})` }}
        aria-hidden="true"
      />

      {/* Icon with HDR Glow */}
      <div className="relative">
        <div
          className="w-13 h-13 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg transition-transform duration-300 group-hover:scale-110"
          style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
        >
          <Icon size={22} className="text-white" aria-hidden="true" />
        </div>
        {/* Glow behind icon */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-xl pointer-events-none"
          style={{ background: colors.glow }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className={`font-heading font-extrabold text-lg leading-snug ${
          dark ? "text-white" : "text-slate-900"
        }`}>
          {service.title}
        </h3>
        <p className={`text-sm leading-relaxed ${
          dark ? "text-slate-300" : "text-[var(--color-muted)]"
        }`}>
          {service.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function Services({ dark }) {
  const { services } = portfolioData;

  return (
    <section
      id="services"
      data-section="services"
      className={`section-pad ${dark ? "bg-[#000000]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <SectionHeading
            label={services.sectionLabel}
            heading={services.heading}
            subheading="Areas where I can contribute meaningfully to an organisation's HR function."
            dark={dark}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.items.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}
