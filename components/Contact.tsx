"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contactInfo, formEndpoint, socialLinks } from "@/lib/data";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/lib/animations";

const socialIconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
};

/**
 * Contact section — animated info cards + polished contact form.
 */
export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const btn = e.currentTarget.querySelector("button[type=submit]");
    if (btn) {
      setSending(true);
      setTimeout(() => {
        setSending(false);
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      }, 4000);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "from-primary-500/10 to-cyan-400/5",
    },
    {
      icon: Phone,
      label: "Phone / Telegram",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
      color: "from-violet-500/10 to-purple-400/5",
      extra: (
        <a
          href={contactInfo.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary-500 hover:underline"
        >
          {contactInfo.telegram}
        </a>
      ),
    },
    {
      icon: MapPin,
      label: "Location",
      value: contactInfo.location,
      href: contactInfo.locationUrl,
      target: "_blank" as const,
      color: "from-emerald-500/10 to-green-400/5",
    },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-divider" />
      <div className="section-container">
        <SectionHeading
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind? Let's discuss how we can work together."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className="glass-card p-5 flex items-start gap-4 group cursor-default"
              >
                <motion.div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-5 h-5 text-primary-500" />
                </motion.div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mb-1">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.target || undefined}
                    rel="noopener noreferrer"
                    className="font-medium text-sm text-slate-700 dark:text-slate-200 hover:text-primary-500 transition-colors"
                  >
                    {item.value}
                  </a>
                  {item.extra && <div className="mt-1">{item.extra}</div>}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div variants={staggerItem} className="flex gap-3 pt-2">
              {socialLinks.map((link, i) => {
                const Icon = socialIconMap[link.icon] || Github;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary-500 hover:border-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/20 transition-colors duration-300 shadow-sm"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              action={formEndpoint}
              method="POST"
              target="_blank"
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="fullName" className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="input-modern"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label htmlFor="email" className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="input-modern"
                  />
                </motion.div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="phone" className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="Mobile Number"
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    className="input-modern"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <label htmlFor="subject" className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="Email Subject"
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    className="input-modern"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="input-modern resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-cyan-500 text-white font-semibold rounded-xl shadow-md shadow-primary-500/15 hover:shadow-lg hover:shadow-primary-500/25 transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
