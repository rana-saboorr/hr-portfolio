import { motion } from "motion/react";
import { Phone, Linkedin, MessageCircle, MapPin, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer({ dark }) {
  const { footer, personal, social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className={`relative border-t ${
        dark
          ? "bg-[#000000] border-white/10"
          : "bg-white border-[var(--color-border)]"
      }`}
      aria-label="Site footer"
    >
      {/* AMOLED Dark Red Gradient accent top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #450A0A, #991B1B, #EF4444, #991B1B, #450A0A)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-10">

          {/* ─── Brand Column ─── */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-extrabold font-heading shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                style={{ background: "linear-gradient(135deg, #EF4444, #DC2626, #7F1D1D)" }}
              >
                MA
              </div>
              <div>
                <p className={`font-heading font-extrabold text-base ${dark ? "text-white" : "text-[var(--color-text)]"}`}>
                  {personal.name}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-red-400">{personal.title}</p>
              </div>
            </div>

            <p className={`text-sm leading-relaxed max-w-xs italic ${dark ? "text-slate-400" : "text-[var(--color-muted)]"}`}>
              "{footer.tagline}"
            </p>

            <div className={`flex items-center gap-1.5 text-xs ${dark ? "text-slate-500" : "text-[var(--color-muted-light)]"}`}>
              <MapPin size={12} aria-hidden="true" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* ─── Navigation Column ─── */}
          <nav aria-label="Footer navigation">
            <p className={`font-heading font-semibold text-sm mb-4 ${dark ? "text-white" : "text-[var(--color-text)]"}`}>
              Navigation
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm link-underline transition-colors duration-200 ${
                      dark
                        ? "text-slate-400 hover:text-red-400"
                        : "text-[var(--color-muted)] hover:text-red-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ─── Contact Column ─── */}
          <div>
            <p className={`font-heading font-semibold text-sm mb-4 ${dark ? "text-white" : "text-[var(--color-text)]"}`}>
              Get In Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={personal.phoneTel}
                className={`flex items-center gap-2.5 text-sm link-underline transition-colors duration-200 ${
                  dark ? "text-slate-400 hover:text-red-400" : "text-[var(--color-muted)] hover:text-red-600"
                }`}
                aria-label={`Call ${personal.phoneDisplay}`}
              >
                <Phone size={14} className="text-red-500" aria-hidden="true" />
                {personal.phoneDisplay}
              </a>

              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 text-sm link-underline transition-colors duration-200 ${
                  dark ? "text-slate-400 hover:text-red-400" : "text-[var(--color-muted)] hover:text-red-600"
                }`}
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={14} className="text-red-500" aria-hidden="true" />
                WhatsApp
              </a>

              {!social.linkedin.startsWith("[") && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 text-sm link-underline transition-colors duration-200 ${
                    dark ? "text-slate-400 hover:text-red-400" : "text-[var(--color-muted)] hover:text-red-600"
                  }`}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={14} className="text-red-500" aria-hidden="true" />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t ${
          dark ? "border-[var(--color-dark-border)]" : "border-[var(--color-border)]"
        }`}>
          <p className={`text-xs ${dark ? "text-slate-500" : "text-[var(--color-muted-light)]"}`}>
            {footer.copyright}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className={`flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl border transition-colors duration-200 ${
              dark
                ? "border-white/10 text-slate-400 hover:text-red-400 hover:border-red-900/40 hover:bg-red-950/20"
                : "border-[var(--color-border)] text-[var(--color-muted)] hover:text-red-600 hover:border-red-600/30 hover:bg-red-50"
            }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll back to top"
          >
            <ArrowUp size={13} aria-hidden="true" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
