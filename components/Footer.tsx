"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { socialLinks } from "@/lib/data";
import {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  ArrowUp,
  Heart,
  Code2,
} from "lucide-react";

const socialIconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
};

/**
 * Footer — copyright, social links, and animated back-to-top button.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-[#0a0a14]/50 backdrop-blur-sm overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Code2 className="w-5 h-5 text-primary-500" />
              <span className="font-bold text-sm">
                Saurabh<span className="text-primary-500">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} Saurabh Kumar Tiwari. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 flex items-center justify-center md:justify-start gap-1">
              Built with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 text-accent-500 fill-accent-500" />
              </motion.span>{" "}
              using Next.js & Tailwind CSS
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-2.5"
          >
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
                  className="w-9 h-9 rounded-lg border border-slate-200/80 dark:border-white/8 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-primary-500 hover:border-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/20 transition-colors duration-300 shadow-sm shadow-black/[0.02]"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-primary-500/15 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
