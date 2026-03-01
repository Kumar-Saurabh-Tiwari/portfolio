"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";
import {
  Code2,
  Paintbrush,
  Server,
  Bell,
  Cloud,
  Plug,
  Terminal,
  Smartphone,
  Brain,
  MessagesSquare,
  Gem,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

/** Map icon string names to actual Lucide components */
const iconMap: Record<string, LucideIcon> = {
  Code2,
  Paintbrush,
  Server,
  Bell,
  Cloud,
  Plug,
  Terminal,
  Smartphone,
  Brain,
  MessagesSquare,
  Gem,
  ShieldCheck,
};

/**
 * Services section — card grid with animated icons, hover scale, and staggered entrance.
 */
export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="section-divider" />
      <div className="section-container">
        <SectionHeading
          title="My"
          highlight="Services"
          subtitle="What I can build for you"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Code2;

            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className="glass-card p-6 group transition-shadow duration-500 cursor-default"
              >
                {/* Animated icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-cyan-400/5 flex items-center justify-center mb-4 group-hover:from-primary-500/20 group-hover:to-cyan-400/10 transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-5.5 h-5.5 text-primary-600 dark:text-primary-400" />
                </motion.div>

                {/* Title */}
                <h3 className="font-semibold text-[15px] mb-2 text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tech tags with hover effect */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03 + tagIdx * 0.05 }}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-primary-500/[0.06] text-primary-700 dark:text-primary-400 border border-primary-500/10 font-medium hover:bg-primary-500/[0.12] transition-colors duration-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Subtle bottom highlight on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/0 to-transparent group-hover:via-primary-500/50 transition-all duration-500 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
