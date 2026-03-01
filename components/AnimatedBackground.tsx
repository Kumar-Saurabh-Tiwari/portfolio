"use client";

import { motion } from "framer-motion";

/**
 * Floating gradient meshes with morphing blobs for visual depth.
 * Animated using framer-motion for smooth, GPU-accelerated transitions.
 */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary top-left orb */}
      <motion.div
        className="bg-orb w-[600px] h-[600px] bg-primary-400/20 dark:bg-primary-500/30 -top-48 -left-48"
        style={{ position: "absolute" }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan bottom-right orb */}
      <motion.div
        className="bg-orb w-[500px] h-[500px] bg-cyan-300/15 dark:bg-cyan-400/20 bottom-20 right-[-10%]"
        style={{ position: "absolute" }}
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Center-left accent orb */}
      <motion.div
        className="bg-orb w-[350px] h-[350px] bg-primary-300/10 dark:bg-accent-500/10 top-[45%] left-[25%]"
        style={{ position: "absolute" }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* New: top-right small orb */}
      <motion.div
        className="bg-orb w-[250px] h-[250px] bg-violet-400/10 dark:bg-violet-500/8 top-[20%] right-[15%]"
        style={{ position: "absolute" }}
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 20, -25, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* New: bottom-left accent orb */}
      <motion.div
        className="bg-orb w-[300px] h-[300px] bg-emerald-300/8 dark:bg-emerald-500/6 bottom-[15%] left-[10%]"
        style={{ position: "absolute" }}
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -20, 30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
