"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { heroData, socialLinks } from "@/lib/data";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Mail,
  Sparkles,
} from "lucide-react";
import { useMousePosition } from "@/lib/animations";

/** Map icon names from data to Lucide components */
const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
};

/**
 * Hero section — profile photo, name, animated roles, tagline, social links, and CTA.
 * Enhanced with parallax, blur-in, and staggered reveal animations.
 */
export default function Hero() {
  const typeSequence = heroData.roles.flatMap((role) => [role, 2000]);
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax for the profile image
  const { mouseX, mouseY } = useMousePosition(imageContainerRef);
  const imgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 100,
    damping: 20,
  });
  const imgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), {
    stiffness: 100,
    damping: 20,
  });

  // Stagger animation config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative gradient meshes */}
      <motion.div
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-primary-500/[0.1] via-cyan-400/[0.06] to-transparent rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary-500/[0.08] via-cyan-400/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        aria-hidden="true"
      />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 dark:opacity-[0.02] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0a0a14 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary-400/30 dark:bg-primary-400/20"
          style={{
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      ))}

      <motion.div style={{ opacity: opacityHero }} className="section-container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Left: Text content */}
          <motion.div
            style={{ y: yText }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Greeting badge */}
            <motion.p
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-primary-600 dark:text-primary-400 mb-6 px-4 py-1.5 bg-primary-500/[0.08] dark:bg-primary-500/10 rounded-full border border-primary-500/15 w-fit mx-auto lg:mx-0"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary-500"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Sparkles className="w-3.5 h-3.5" />
              {heroData.greeting}
            </motion.p>

            {/* Name with character-by-character reveal */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              {heroData.name.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {i === 0 ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    <span> {word}</span>
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Animated role */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-500 dark:text-slate-300 mb-8 h-10"
            >
              <span className="text-slate-400 dark:text-slate-500">I&apos;m a </span>
              <TypeAnimation
                sequence={typeSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-[1.8]"
            >
              {heroData.description}
            </motion.p>

            {/* Social links with staggered entrance */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-10">
              {socialLinks.map((link, i) => {
                const Icon = iconMap[link.icon] || Github;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary-500 hover:border-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/25 transition-colors duration-300 shadow-sm"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="magnetic-btn inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-shadow duration-300 text-[15px]"
              >
                <Mail className="w-4 h-4" />
                Let&apos;s Talk
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 text-[15px] shadow-sm"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Profile photo with parallax & tilt */}
          <motion.div
            ref={imageContainerRef}
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <motion.div className="relative" style={{ x: imgX, y: imgY }}>
              {/* Animated glow behind image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/25 to-cyan-400/15 dark:from-primary-500/15 dark:to-cyan-400/10 rounded-full blur-3xl scale-125"
                animate={{
                  scale: [1.2, 1.35, 1.2],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Profile image */}
              <motion.div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[3px] border-white dark:border-white/10 shadow-2xl shadow-primary-500/10 ring-1 ring-primary-500/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={heroData.profileImage}
                  alt={heroData.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </motion.div>

              {/* Animated decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-primary-500/15 dark:border-primary-500/10 scale-[1.18]"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-dotted border-cyan-400/10 dark:border-cyan-400/8 scale-[1.35]"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating badge - status */}
              <motion.div
                className="absolute bottom-4 right-4 w-5 h-5 bg-emerald-400 rounded-full border-[3px] border-white dark:border-[#0a0a14] shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Floating tech badge */}
              <motion.div
                className="absolute -top-2 -right-2 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200/80 dark:border-white/10 text-xs font-semibold text-primary-600 dark:text-primary-400"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚡ Available
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary-500 transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[11px] uppercase tracking-widest font-medium">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
