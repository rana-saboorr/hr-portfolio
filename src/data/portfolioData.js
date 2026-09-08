/**
 * portfolioData.js
 * ─────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all portfolio content.
 * Edit this file to update the website's content.
 *
 * INTENTIONAL PLACEHOLDERS (replace before going live):
 *   contact.email      → your real email address
 *   social.linkedin    → your real LinkedIn profile URL
 *   personal.hasPhoto  → set to true once you add /public/profile.jpg
 *
 * PHONE NUMBER:
 *   The phone number 03062508781 is already set.
 *   WhatsApp uses international format: 923062508781
 * ─────────────────────────────────────────────────────────
 */

export const portfolioData = {

  /* ─────────────────────────────── PERSONAL ─── */
  personal: {
    name: "Muddasir Abbas",
    firstName: "Muddasir",
    lastName: "Abbas",
    initials: "MA",
    title: "HR Professional",
    titleSecondary: "Human Resources Executive",
    qualification: "BA",
    location: "G-9, Islamabad, Pakistan",
    phone: "03062508781",
    phoneDisplay: "0306 2508781",
    phoneTel: "tel:03062508781",
    whatsapp: "https://wa.me/923062508781",

    // Profile image
    // Photo placed at /public/profile.jpg
    hasPhoto: true,
    photoPath: "/profile.jpg",
    photoAlt: "Muddasir Abbas — HR Professional",

    tagline: "Building Better Workplaces, One Hire at a Time.",
    positioning:
      "People-focused HR professional combining operational discipline, data accuracy, recruitment expertise, and employee relations experience.",
  },

  /* ─────────────────────────────── HERO ─── */
  hero: {
    eyebrow: "HR Professional",
    heading: "Muddasir Abbas",
    subheading: "Building Better Workplaces,\nOne Hire at a Time.",
    description:
      "People-focused HR professional combining operational discipline, data accuracy, recruitment expertise, and employee relations experience.",
    cta: {
      primary: { label: "Download CV", href: "/resume.pdf" },
      secondary: { label: "Contact Me", href: "#contact" },
      phone: { label: "Call 0306 2508781", href: "tel:03062508781" },
    },
    floatingCards: [
      { text: "HR Executive", sub: "Rana Group of Kasur" },
      { text: "People First", sub: "Employee Relations" },
      { text: "5+ Years in HR", sub: "Since 2021" },
    ],
  },

  /* ─────────────────────────────── ABOUT ─── */
  about: {
    sectionLabel: "About Me",
    heading: "People-first HR with a foundation in precision.",
    bio: [
      "Muddasir Abbas is an HR professional holding a Bachelor of Arts, with a career built on both data discipline and people skills.",
      "He started as a Data Operator at Mian Group (G-9), where he spent two years mastering accuracy, record-keeping, and operational efficiency. Since 2021, he has worked in Human Resources at Rana Group of Kasur, managing recruitment, employee relations, and day-to-day HR operations.",
      "His analytical foundation from data operations, combined with a people-first approach, shapes how he handles hiring, onboarding, and workplace culture.",
    ],
  },

  /* ─────────────────────────────── STATS ─── */
  stats: [
    {
      id: "years-hr",
      value: 5,
      suffix: "+",
      label: "Years in HR",
      isText: false,
    },
    {
      id: "total-experience",
      value: 7,
      suffix: "+",
      label: "Years Total Experience",
      isText: false,
    },
    {
      id: "organizations",
      value: 2,
      suffix: "",
      label: "Organizations",
      isText: false,
    },
    {
      id: "qualification",
      value: "BA",
      suffix: "",
      label: "Qualification",
      isText: true,
    },
  ],

  /* ─────────────────────────────── EXPERIENCE ─── */
  experience: {
    sectionLabel: "Career Journey",
    heading: "Experience built around people and precision.",
    positions: [
      {
        id: "rana-group",
        title: "HR Executive",
        company: "Rana Group of Kasur",
        period: "2021 – Present",
        isCurrent: true,
        icon: "Users",
        responsibilities: [
          "Leading recruitment and onboarding processes",
          "Managing employee relations and grievance handling",
          "Maintaining HR records, attendance, and leave management",
          "Supporting HR policy implementation and compliance",
          "Coordinating with department heads on staffing needs",
        ],
      },
      {
        id: "mian-group",
        title: "Data Operator",
        company: "Mian Group, G-9",
        period: "2019 – 2021",
        duration: "2 Years",
        isCurrent: false,
        icon: "Database",
        responsibilities: [
          "Accurate and timely data entry and record management",
          "Maintaining organized digital filing systems",
          "Supporting administrative and operational reporting",
          "Building a foundation of discipline and attention to detail",
        ],
      },
    ],
  },

  /* ─────────────────────────────── EDUCATION ─── */
  education: {
    sectionLabel: "Education",
    heading: "Academic foundation for professional excellence.",
    entries: [
      {
        id: "ba",
        degree: "Bachelor of Arts",
        shortDegree: "BA",
        description:
          "Academic foundation supporting a broad perspective, strong communication skills, and professional development across diverse disciplines.",
        // University details not provided — do not invent
      },
    ],
  },

  /* ─────────────────────────────── SKILLS ─── */
  skills: {
    sectionLabel: "Core Expertise",
    heading: "Skills that connect people, process, and performance.",
    groups: [
      {
        id: "hr-skills",
        label: "HR Skills",
        color: "indigo",
        icon: "Users",
        marquee: true,
        items: [
          { label: "Recruitment & Talent Acquisition", icon: "Search" },
          { label: "Onboarding & Induction", icon: "UserCheck" },
          { label: "Employee Relations", icon: "HeartHandshake" },
          { label: "HR Policy & Compliance", icon: "ShieldCheck" },
          { label: "Attendance & Leave Management", icon: "CalendarCheck" },
          { label: "Performance Support", icon: "TrendingUp" },
          { label: "Conflict Resolution", icon: "Scale" },
        ],
      },
      {
        id: "tools",
        label: "Tools & Software",
        color: "teal",
        icon: "Monitor",
        marquee: false,
        items: [
          { label: "MS Excel", icon: "Table" },
          { label: "MS Word", icon: "FileText" },
          { label: "MS Outlook", icon: "Mail" },
          { label: "HRIS / HR Software", icon: "Database" },
          { label: "Google Workspace", icon: "Globe" },
          { label: "Data Entry & Documentation", icon: "ClipboardList" },
        ],
      },
      {
        id: "soft-skills",
        label: "Soft Skills",
        color: "violet",
        icon: "Heart",
        marquee: false,
        items: [
          { label: "Communication", icon: "MessageSquare" },
          { label: "Problem Solving", icon: "Lightbulb" },
          { label: "Time Management", icon: "Clock" },
          { label: "Team Coordination", icon: "Network" },
          { label: "Confidentiality & Integrity", icon: "Lock" },
        ],
      },
    ],
  },

  /* ─────────────────────────────── SERVICES ─── */
  services: {
    sectionLabel: "What I Do",
    heading: "Practical HR support for better workplaces.",
    items: [
      {
        id: "recruitment",
        title: "Recruitment & Onboarding",
        description:
          "Supporting the hiring journey from candidate coordination through onboarding and induction.",
        icon: "UserPlus",
        color: "indigo",
      },
      {
        id: "employee-relations",
        title: "Employee Relations & Engagement",
        description:
          "Supporting positive workplace relationships and helping address employee concerns professionally.",
        icon: "HeartHandshake",
        color: "teal",
      },
      {
        id: "hr-policy",
        title: "HR Policy & Compliance Support",
        description:
          "Supporting implementation of HR policies, procedures, and workplace compliance practices.",
        icon: "ShieldCheck",
        color: "violet",
      },
      {
        id: "records",
        title: "Records, Payroll & Data Management",
        description:
          "Maintaining organized HR documentation, records, and data with accuracy and confidentiality.",
        icon: "FileText",
        color: "amber",
      },
      {
        id: "attendance",
        title: "Attendance & Leave Administration",
        description:
          "Managing attendance and leave-related records to support organized day-to-day HR operations.",
        icon: "CalendarCheck",
        color: "emerald",
      },
      {
        id: "training",
        title: "Training Coordination",
        description:
          "Helping coordinate employee learning, training activities, and internal development initiatives.",
        icon: "GraduationCap",
        color: "rose",
      },
    ],
  },

  /* ─────────────────────────────── CONTACT ─── */
  contact: {
    sectionLabel: "Get In Touch",
    heading: "Let's connect.",
    subheading:
      "Whether you're looking to discuss an HR opportunity, recruitment needs, or professional collaboration, I'd be happy to connect.",
    phone: "03062508781",
    phoneDisplay: "0306 2508781",
    phoneTel: "tel:03062508781",
    whatsapp: "https://wa.me/923062508781",
    location: "G-9, Islamabad, Pakistan",

    // ─── REPLACE THESE with actual values before going live ───
    email: "[your email address]",
    emailHref: "mailto:[your email address]",
    // ──────────────────────────────────────────────────────────
  },

  /* ─────────────────────────────── SOCIAL ─── */
  social: {
    // ─── REPLACE THIS with actual LinkedIn URL before going live ───
    linkedin: "[your LinkedIn URL]",
    // ──────────────────────────────────────────────────────────────
    phone: "tel:03062508781",
    whatsapp: "https://wa.me/923062508781",
  },

  /* ─────────────────────────────── FOOTER ─── */
  footer: {
    tagline: "Building Better Workplaces, One Hire at a Time.",
    copyright: "© 2026 Muddasir Abbas. All rights reserved.",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },

  /* ─────────────────────────────── NAV ─── */
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
};
