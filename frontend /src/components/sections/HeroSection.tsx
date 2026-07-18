"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, BookOpen, Users, Brain, Code2 } from "lucide-react";
import HeroBackground from "@/components/layout/HeroBackground";
import PillButton from "@/components/ui/PillButton";

const floatingIcons = [
  { Icon: BookOpen, x: "8%", y: "20%", delay: 0, color: "#FFE4EC", fg: "#D91F2D" },
  { Icon: Sparkles, x: "85%", y: "15%", delay: 0.5, color: "#EAF2FF", fg: "#155DFC" },
  { Icon: Brain, x: "12%", y: "65%", delay: 1, color: "#F1EAFF", fg: "#7C3AED" },
  { Icon: Code2, x: "90%", y: "60%", delay: 1.5, color: "#E6F1FF", fg: "#2563EB" },
];

const avatarColors = ["#EAF2FF", "#FFE4EC", "#F1EAFF", "#E6F1FF", "#FFF3F7"];

export default function HeroSection() {
  return (
    <HeroBackground className="flex min-h-screen items-center">
      {/* Floating decorative icons */}
      {floatingIcons.map(({ Icon, x, y, delay, color, fg }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
        >
          <div
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center animate-float"
            style={{
              backgroundColor: color,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: fg }} />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl text-center md:-translate-y-8 lg:-translate-y-12">
          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E4EAF5] bg-white/80 px-4 py-2 text-sm font-medium text-[#5D667A] shadow-sm backdrop-blur-sm">
              <Brain className="w-4 h-4 text-[#155DFC]" />
              Learn AI From Industry Experts
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 text-[1.9rem] font-bold leading-[1.12] tracking-tight text-[#07162F] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">Build Your Future With</span>
            <span className="block whitespace-nowrap text-brand-gradient">
              GFF AI Academy
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-[#5D667A] sm:text-lg"
          >
            Master practical AI skills through structured learning, mentor-led
            guidance, real projects, certification, and placement readiness.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-6 max-w-xl"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9AA3B5]" />
              <input
                type="text"
                placeholder="Search AI, Python, ML, GenAI..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-[#E4EAF5] text-sm text-[#07162F] placeholder:text-[#9AA3B5] focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all shadow-sm"
              />
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-4"
          >
            <PillButton href="/apply" variant="primary" size="lg">
              Apply Now
            </PillButton>
            <PillButton href="/courses" variant="secondary" size="lg">
              View Courses
            </PillButton>
          </motion.div>

          {/* Avatar pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-2 sm:gap-3"
          >
            <div className="flex items-center -space-x-3">
              {avatarColors.map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-[#07162F]"
                  style={{ backgroundColor: color }}
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              ))}
            </div>
            <div className="ml-2 text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((s) => (
                  <span key={s} className="text-[#F5B53F] text-sm">
                    ★
                  </span>
                ))}
                <span className="text-[#9AA3B5] text-sm">★</span>
                <span className="text-xs text-[#5D667A] ml-1">4.8</span>
              </div>
              <p className="text-xs text-[#5D667A]">
                <span className="font-semibold text-[#07162F]">5,000+</span>{" "}
                students enrolled
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </HeroBackground>
  );
}
