"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { aboutData } from "@/lib/data";
import { Briefcase, GraduationCap, MapPin, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/lib/animations";

/**
 * About section — personal bio with animated info cards and reveal effects.
 */
export default function About() {
  const infoCards = [
    {
      icon: Briefcase,
      label: "Experience",
      value: "Full Stack Developer",
      sub: "Multiple years of hands-on delivery",
      color: "from-primary-500/10 to-cyan-400/5",
      hoverColor: "group-hover:from-primary-500/20 group-hover:to-cyan-400/10",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "BCA",
      sub: "Makhanlal Chaturvedi National University",
      color: "from-violet-500/10 to-purple-400/5",
      hoverColor: "group-hover:from-violet-500/20 group-hover:to-purple-400/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rewa, M.P., India",
      sub: "Available for remote work worldwide",
      color: "from-emerald-500/10 to-green-400/5",
      hoverColor: "group-hover:from-emerald-500/20 group-hover:to-green-400/10",
    },
  ];

  return (
    <section id="about" className="relative">
      {/* Subtle top divider */}
      <div className="section-divider" />
      <div className="section-container">
        <SectionHeading title="About" highlight="Me" />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left: quick info cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 space-y-5"
          >
            {infoCards.map((item, i) => (
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
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} ${item.hoverColor} flex items-center justify-center flex-shrink-0 transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-5 h-5 text-primary-500" />
                </motion.div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mb-1">
                    {item.label}
                  </p>
                  <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">{item.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Stats mini-card */}
            <motion.div
              variants={staggerItem}
              className="glass-card p-5 flex items-center gap-4 group"
            >
              <motion.div
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-400/5 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <TrendingUp className="w-5 h-5 text-amber-500" />
              </motion.div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mb-1">
                  Projects
                </p>
                <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">12+ Completed</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Across Fintech, Health, & E-commerce
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: bio paragraphs with staggered reveal */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3 space-y-5"
          >
            {aboutData.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-slate-600 dark:text-slate-300 leading-[1.85] text-[15px]"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
