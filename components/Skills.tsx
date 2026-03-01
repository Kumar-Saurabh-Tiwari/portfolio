"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Skills section — grouped by category with animated chips and hover micro-interactions.
 */
export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-divider" />
      <div className="relative bg-slate-50/70 dark:bg-white/[0.015]">
        <div className="section-container">
          <SectionHeading
            title="My"
            highlight="Skills"
            subtitle="Technologies & tools I use to bring ideas to life"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                variants={staggerItem}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className="glass-card p-6 group transition-shadow duration-500"
              >
                {/* Category title */}
                <h3 className="font-semibold text-base mb-5 flex items-center gap-2.5">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-cyan-400 inline-block"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: catIdx * 0.3 }}
                  />
                  <span className="text-slate-800 dark:text-slate-100">{category.title}</span>
                </h3>

                {/* Skill chips with stagger */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.7, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIdx * 0.08 + skillIdx * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/8 text-slate-600 dark:text-slate-300 hover:bg-primary-500/5 hover:border-primary-500/25 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md hover:shadow-primary-500/5 transition-colors duration-250 cursor-default shadow-sm shadow-black/[0.02]"
                    >
                      <span className="text-sm">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
