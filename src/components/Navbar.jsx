import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Briefcase } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = ["home", "about", "experience", "education", "skills", "services", "contact"];

export default function Navbar({ dark, onToggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { nav, personal } = portfolioData;

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false);
    // Lenis handles the smooth scroll; clicking a hash link is enough
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.header
        role="banner"
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl rounded-2xl transition-all duration-500 ${
          scrolled
            ? dark
              ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.08)] border border-white/10"
              : "glass shadow-[0_4px_24px_rgba(79,70,229,0.12)] border border-[var(--color-border)]"
            : dark
            ? "bg-black/30 backdrop-blur-md border border-white/5"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className="flex items-center justify-between px-4 sm:px-6 py-3"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            aria-label="Muddasir Abbas — Home"
            onClick={() => handleNavClick("#home")}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold font-heading bg-gradient-to-br from-[#00F0FF] via-[#6366F1] to-[#A855F7] shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform duration-200">
              MA
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading font-bold text-sm sm:text-base tracking-tight transition-colors duration-300 ${
                  dark ? "text-white" : "text-slate-900"
                }`}
              >
                Muddasir Abbas
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-cyan-400 font-mono hidden sm:block">
                HR Executive
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {nav.links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? dark
                          ? "text-cyan-300 bg-cyan-500/10 shadow-[0_0_12px_rgba(0,240,255,0.2)] border border-cyan-500/25"
                          : "text-[var(--color-primary)] bg-[var(--color-primary)]/8"
                        : dark
                        ? "text-slate-300 hover:text-white hover:bg-white/5"
                        : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-slate-100"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        className="absolute inset-x-2 bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                        layoutId="nav-underline"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Availability Dot for AMOLED */}
            <div className={`hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border ${
              dark 
                ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/30 shadow-[0_0_12px_rgba(0,245,155,0.15)]" 
                : "bg-emerald-50 text-emerald-700 border-emerald-200"
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00F59B]" />
              <span>Available</span>
            </div>

            {/* Dark mode toggle */}
            <motion.button
              onClick={onToggleDark}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                dark
                  ? "bg-white/10 text-cyan-300 hover:bg-white/15 border border-white/10 shadow-[0_0_12px_rgba(0,240,255,0.15)]"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
              aria-label={dark ? "Switch to light mode" : "Switch to AMOLED mode"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {dark ? <Sun size={16} className="text-amber-300" /> : <Moon size={16} />}
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.93 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.nav
              id="mobile-menu"
              role="dialog"
              aria-label="Mobile navigation menu"
              className={`fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col md:hidden shadow-2xl ${
                dark ? "bg-[var(--color-dark-surface)]" : "bg-white"
              }`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
                    MA
                  </div>
                  <span className={`font-heading font-semibold text-sm ${dark ? "text-white" : "text-[var(--color-text)]"}`}>
                    Muddasir Abbas
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    dark ? "text-slate-400 hover:text-white hover:bg-white/10" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  } transition-colors`}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-col px-4 py-4 gap-1 flex-1" role="list">
                {nav.links.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                            : dark
                            ? "text-slate-300 hover:text-white hover:bg-white/8"
                            : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-slate-50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? "bg-[var(--color-primary)]" : "bg-transparent"
                          }`}
                        />
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Footer of drawer */}
              <div className="px-6 py-5 border-t border-[var(--color-border)]">
                <p className={`text-xs ${dark ? "text-slate-500" : "text-[var(--color-muted-light)]"}`}>
                  HR Professional · Kasur, Punjab
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
