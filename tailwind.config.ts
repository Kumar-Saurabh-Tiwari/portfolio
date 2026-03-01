import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-cal)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#e6f9ff",
          100: "#ccf3ff",
          200: "#99e7ff",
          300: "#66dbff",
          400: "#33cfff",
          500: "#00d4ff",
          600: "#00a3cc",
          700: "#007a99",
          800: "#005266",
          900: "#002933",
        },
        accent: {
          50: "#fff0f0",
          100: "#ffe0e0",
          200: "#ffc1c1",
          300: "#ffa2a2",
          400: "#ff8383",
          500: "#ff6b6b",
          600: "#cc5656",
          700: "#994040",
          800: "#662b2b",
          900: "#331515",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-down": "fadeInDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-left": "slideInLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-right": "slideInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 4s infinite",
        "float-slow": "float 12s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        "pulse-slow": "pulse 5s ease-in-out infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spinReverse 20s linear infinite",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "blur-in": "blurIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        wiggle: "wiggle 1s ease-in-out infinite",
        "morph-blob": "morphBlob 12s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        spinReverse: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        blurIn: {
          "0%": { filter: "blur(12px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.1)" },
          "100%": { boxShadow: "0 0 30px rgba(0, 212, 255, 0.25)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        morphBlob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 60% / 30% 50% 70% 60%" },
          "75%": { borderRadius: "60% 30% 60% 40% / 70% 40% 50% 60%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
