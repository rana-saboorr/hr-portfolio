import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Mail, Linkedin, MessageCircle, Send, CheckCircle, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function ContactItem({ icon: Icon, label, value, href, dark }) {
  const isPlaceholder = value?.startsWith("[");

  return (
    <div className="flex items-start gap-4">
      <div 
        className={`w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center ${
          dark 
            ? "bg-red-950/40 border border-red-900/40 text-red-400 shadow-[0_0_12px_rgba(220,38,38,0.2)]" 
            : "bg-red-50 border border-red-100 text-red-600"
        }`}
      >
        <Icon size={19} aria-hidden="true" />
      </div>
      <div>
        <p className={`text-[11px] font-mono font-bold uppercase tracking-wider mb-0.5 ${dark ? "text-red-400" : "text-slate-500"}`}>
          {label}
        </p>
        {href && !isPlaceholder ? (
          <a
            href={href}
            className={`text-sm font-semibold link-underline transition-colors ${
              dark ? "text-white hover:text-red-300" : "text-slate-900 hover:text-red-600"
            }`}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {value}
          </a>
        ) : (
          <p className={`text-sm font-semibold ${
            isPlaceholder
              ? "text-red-400/60 italic font-mono text-xs"
              : dark ? "text-white" : "text-slate-900"
          }`}>
            {isPlaceholder ? "Add to portfolioData.js" : value}
          </p>
        )}
      </div>
    </div>
  );
}

function validateForm(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Your name is required.";
  if (!fields.email.trim()) {
    errors.email = "Your email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) errors.message = "A message is required.";
  else if (fields.message.trim().length < 10) errors.message = "Message is too short.";
  return errors;
}

export default function Contact({ dark }) {
  const { contact, social, personal } = portfolioData;

  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Front-end only — no email is sent.
    setSubmitted(true);
  };

  const handleReset = () => {
    setFields({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className={`section-pad ${dark ? "bg-[#000000]" : "bg-slate-50"}`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <SectionHeading
            label={contact.sectionLabel}
            heading={contact.heading}
            subheading={contact.subheading}
            center
            dark={dark}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ─── Left: Contact Details ─── */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`rounded-2xl border p-7 flex flex-col gap-6 ${
                dark
                  ? "amoled-card"
                  : "bg-white border-slate-200 shadow-md"
              }`}
            >
              <ContactItem
                icon={Phone}
                label="Phone"
                value={contact.phoneDisplay}
                href={contact.phoneTel}
                dark={dark}
              />
              <ContactItem
                icon={MapPin}
                label="Location"
                value={contact.location}
                dark={dark}
              />
              <ContactItem
                icon={Mail}
                label="Email"
                value={contact.email}
                href={contact.email.startsWith("[") ? null : contact.emailHref}
                dark={dark}
              />
              <ContactItem
                icon={Linkedin}
                label="LinkedIn"
                value={social.linkedin.startsWith("[") ? "[your LinkedIn URL]" : social.linkedin}
                href={social.linkedin.startsWith("[") ? null : social.linkedin}
                dark={dark}
              />
            </div>

            {/* WhatsApp + Call CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={contact.phoneTel}
                className={`flex items-center justify-center gap-2 flex-1 px-5 py-3.5 rounded-xl text-sm font-bold border transition-all duration-200 ${
                  dark
                    ? "border-red-900/50 text-red-300 bg-red-950/40 hover:bg-red-900/50 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                    : "border-slate-300 text-slate-800 hover:border-red-600 hover:text-red-600"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                aria-label={`Call Muddasir Abbas at ${contact.phoneDisplay}`}
              >
                <Phone size={15} className={dark ? "text-red-400" : ""} aria-hidden="true" />
                Call {contact.phoneDisplay}
              </motion.a>

              <motion.a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 px-5 py-3.5 rounded-xl text-sm font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all"
                style={{ background: "linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #991B1B 100%)" }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(220,38,38,0.65)" }}
                whileTap={{ scale: 0.96 }}
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={16} className="text-white font-bold" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
                <ExternalLink size={12} aria-hidden="true" className="opacity-80" />
              </motion.a>
            </div>
          </motion.div>

          {/* ─── Right: Contact Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div
              className={`rounded-2xl border p-7 sm:p-8 ${
                dark
                  ? "amoled-card"
                  : "bg-white border-slate-200 shadow-md"
              }`}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ─ Success State ─ */
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center gap-5 py-10 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 14 }}
                    >
                      <CheckCircle size={52} className="text-red-500" aria-hidden="true" />
                    </motion.div>
                    <div>
                      <h3 className={`font-heading font-bold text-xl mb-2 ${dark ? "text-white" : "text-[var(--color-text)]"}`}>
                        Message Prepared!
                      </h3>
                      <p className={`text-sm max-w-xs mx-auto ${dark ? "text-slate-400" : "text-[var(--color-muted)]"}`}>
                        Thank you! Your message has been prepared successfully. You can reach Muddasir directly by phone or WhatsApp for an immediate response.
                      </p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-sm text-red-400 font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* ─ Form ─ */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className={`font-heading font-bold text-lg mb-1 ${dark ? "text-white" : "text-[var(--color-text)]"}`}>
                      Send a message
                    </h3>

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-name"
                        className={`text-sm font-semibold ${dark ? "text-slate-300" : "text-[var(--color-text-secondary)]"}`}
                      >
                        Your Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Full name"
                        value={fields.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? "!border-red-500 !ring-red-500/20" : ""}`}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        aria-invalid={!!errors.name}
                        required
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="text-xs text-red-500 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-email"
                        className={`text-sm font-semibold ${dark ? "text-slate-300" : "text-[var(--color-text-secondary)]"}`}
                      >
                        Your Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={fields.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? "!border-red-500 !ring-red-500/20" : ""}`}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={!!errors.email}
                        required
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="text-xs text-red-500 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-message"
                        className={`text-sm font-semibold ${dark ? "text-slate-300" : "text-[var(--color-text-secondary)]"}`}
                      >
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="What would you like to discuss?"
                        value={fields.message}
                        onChange={handleChange}
                        className={`form-input resize-none ${errors.message ? "!border-red-500 !ring-red-500/20" : ""}`}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        aria-invalid={!!errors.message}
                        required
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="text-xs text-red-500 font-medium">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white text-sm font-extrabold shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all"
                      style={{ background: "linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #991B1B 100%)" }}
                      whileHover={{ scale: 1.02, boxShadow: "0 0 35px rgba(220,38,38,0.65)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Send size={16} className="text-white" aria-hidden="true" />
                      <span>Send Message</span>
                    </motion.button>

                    <p className={`text-xs text-center ${dark ? "text-slate-500" : "text-[var(--color-muted-light)]"}`}>
                      This form is for message preparation only and does not send an email automatically.
                      For direct contact, please use the phone or WhatsApp options.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
