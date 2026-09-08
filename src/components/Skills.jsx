import { motion } from "motion/react";
import {
  Users, Monitor, Heart,
  Search, UserCheck, HeartHandshake, ShieldCheck, CalendarCheck, TrendingUp, Scale,
  Table, FileText, Mail, Database, Globe, ClipboardList,
  MessageSquare, Lightbulb, Clock, Network, Lock,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import { useReducedMotion } from "../hooks/useReducedMotion";

const iconMap = {
  Users, Monitor, Heart,
  Search, UserCheck, HeartHandshake, ShieldCheck, CalendarCheck, TrendingUp, Scale,
  Table, FileText, Mail, Database, Globe, ClipboardList,
  MessageSquare, Lightbulb, Clock, Network, Lock,
};

const colorMap = {
  indigo: {
    darkBg: "bg-red-950/40",
    darkText: "text-red-200",
    darkBorder: "border-red-900/40 shadow-[0_0_10px_rgba(220,38,38,0.15)]",
  },
  teal: {
    darkBg: "bg-[#180306]",
    darkText: "text-red-300",
    darkBorder: "border-red-800/40 shadow-[0_0_10px_rgba(220,38,38,0.15)]",
  },
  violet: {
    darkBg: "bg-red-900/20",
    darkText: "text-red-300",
    darkBorder: "border-red-900/50 shadow-[0_0_10px_rgba(185,28,28,0.15)]",
  },
};

function SkillPill({ skill, color, dark }) {
  const c = colorMap[color] || colorMap.indigo;
  const Icon = iconMap[skill.icon];

  return (
    <motion.span
      className={`skill-pill border flex-shrink-0 font-medium ${c.darkBg} ${c.darkText} ${c.darkBorder}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {Icon && <Icon size={13} className="text-red-400" aria-hidden="true" />}
      {skill.label}
    </motion.span>
  );
}

function MarqueeRow({ items, color, dark }) {
  // Duplicate items to create seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full" aria-hidden="true">
      <div className="marquee-track gap-3">
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.label}-${i}`} skill={skill} color={color} dark={dark} />
        ))}
      </div>
    </div>
  );
}

function StaticPillGroup({ items, color, dark }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((skill, i) => (
        <motion.div
          key={skill.label}
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <SkillPill skill={skill} color={color} dark={dark} />
        </motion.div>
      ))}
    </div>
  );
}

function SkillGroup({ group, dark, index }) {
  const GroupIcon = iconMap[group.icon] || Users;

  return (
    <motion.div
      className="rounded-2xl border p-6 sm:p-8 amoled-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      {/* Group header */}
      <div className="flex items-center gap-3.5 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-950/40 text-red-300 border border-red-900/40 shadow-[0_0_12px_rgba(220,38,38,0.2)]">
          <GroupIcon size={20} className="text-red-400" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
            {group.label}
          </h3>
          <p className="text-xs font-mono text-red-400">
            {group.items.length} competencies
          </p>
        </div>
      </div>

      {/* Accessible hidden list for screen readers */}
      <ul className="sr-only">
        {group.items.map((s) => <li key={s.label}>{s.label}</li>)}
      </ul>

      {/* Visual display */}
      {group.marquee ? (
        <MarqueeRow items={group.items} color={group.color} dark={dark} />
      ) : (
        <StaticPillGroup items={group.items} color={group.color} dark={dark} />
      )}
    </motion.div>
  );
}

export default function Skills({ dark }) {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      data-section="skills"
      className="section-pad bg-[#000000]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <SectionHeading
            label={skills.sectionLabel}
            heading={skills.heading}
            subheading="A combination of operational HR expertise, digital tools, and interpersonal capabilities."
            dark={dark}
          />
        </div>

        <div className="flex flex-col gap-6">
          {skills.groups.map((group, i) => (
            <SkillGroup key={group.id} group={group} dark={dark} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
