"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";
import { ExternalLink, Github, Play, X, Layers } from "lucide-react";

/**
 * Projects section — filterable card grid with smooth transitions, image parallax, and video modal.
 */
export default function Projects() {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [activeFilter, setActiveFilter] = useState("All");
  const [videoModal, setVideoModal] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative">
      <div className="section-divider" />
      <div className="relative bg-slate-50/70 dark:bg-white/[0.015]">
        <div className="section-container">
          <SectionHeading
            title="Featured"
            highlight="Projects"
            subtitle="A selection of projects I've built across fintech, health tech, e-commerce, and more"
          />

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-14"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                  activeFilter === cat
                    ? "text-white shadow-md shadow-primary-500/20"
                    : "bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/8 text-slate-500 dark:text-slate-400 hover:border-primary-500/40 hover:text-primary-600 dark:hover:text-primary-400 shadow-sm shadow-black/[0.02]"
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="filter-active"
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-500 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Project cards */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                    layout: { duration: 0.4 },
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="glass-card overflow-hidden group transition-shadow duration-500"
                >
                  {/* Image area */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-white/5">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/10 to-cyan-400/5">
                        <Layers className="w-10 h-10 text-primary-500/30" />
                      </div>
                    )}

                    {/* Hover overlay with action buttons */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center pb-4 gap-3"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 flex gap-3 translate-y-4 group-hover:translate-y-0">
                        {project.videoUrl && (
                          <motion.button
                            onClick={() => setVideoModal(project.videoUrl!)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-500 transition-all duration-200"
                            aria-label={`Play ${project.title} demo video`}
                          >
                            <Play className="w-4 h-4 fill-white" />
                          </motion.button>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-500 transition-all duration-200"
                            aria-label={`View ${project.title} live`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                        {project.codeUrl && (
                          <motion.a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-500 transition-all duration-200"
                            aria-label={`View ${project.title} source code`}
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>

                    {/* Video badge */}
                    {project.videoUrl && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        Demo
                      </motion.div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-primary-600 dark:text-primary-400 mb-1.5 block">
                      {project.category}
                    </span>
                    <h3 className="font-semibold text-[15px] mb-2 text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/8 text-slate-500 dark:text-slate-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ===== Video Modal ===== */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setVideoModal(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <video
                src={videoModal}
                controls
                autoPlay
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
