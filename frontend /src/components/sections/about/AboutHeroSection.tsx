"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, GraduationCap, Users, Target } from "lucide-react";
import HeroBackground from "@/components/layout/HeroBackground";

const floatingStats = [
  { icon: GraduationCap, label: "Structured tracks", value: "10+ modules" },
  { icon: Users, label: "Mentor guidance", value: "1:1 sessions" },
];

export default function AboutHeroSection() {
  return (
    <HeroBackground className="pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* ---------------------------- Copy ---------------------------- */}
          <div>
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 text-sm text-[#5D667A]"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-[#155DFC]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#C7D3E8]">
                  /
                </li>
                <li aria-current="page" className="font-medium text-[#07162F]">
                  About
                </li>
              </ol>
            </motion.nav>

            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E4EAF5] bg-white/80 px-4 py-2 text-sm font-medium text-[#07162F] shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-[#155DFC]" aria-hidden="true" />
              About GFF AI Academy
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-[#07162F] sm:text-5xl lg:text-[3.5rem]"
            >
              <span className="block">Building the Next</span>
              <span className="block text-brand-gradient">Generation of AI Talent</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mb-8 max-w-xl text-base leading-relaxed text-[#5D667A] sm:text-lg"
            >
              GFF AI Academy helps students, professionals, and institutions build
              practical AI skills through structured learning, mentor-led
              guidance, real-world projects, certification, and placement
              readiness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/apply"
                className="group inline-flex items-center gap-2 rounded-full bg-[#155DFC] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0F4BD8] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
              >
                Apply Now
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full border border-[#DDE5F3] bg-white px-6 py-3.5 text-sm font-semibold text-[#07162F] shadow-sm transition-all hover:border-[#155DFC] hover:text-[#155DFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
              >
                View Courses
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* --------------------------- Visual --------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg"
          >
            {/* red -> blue glow behind the image card */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70 blur-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(217,31,45,0.30) 0%, rgba(124,58,237,0.26) 45%, rgba(21,93,252,0.32) 100%)",
              }}
            />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 p-3 shadow-soft-lg backdrop-blur-md">
              <img
                src="/images/about-us/about-hero.jpg"
                alt="GFF AI Academy learners working through a project together"
                width={1300}
                height={1275}
                className="aspect-[5/4] w-full rounded-[2rem] object-cover"
              />
            </div>

            {/* Floating stat chips */}
            {floatingStats.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                className={`absolute hidden items-center gap-3 rounded-2xl border border-[#E4EAF5] bg-white/95 px-4 py-3 shadow-brand-soft backdrop-blur-md sm:flex ${
                  i === 0 ? "-left-6 top-12" : "-right-4 bottom-12"
                }`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF6FF]">
                  <Icon className="h-4 w-4 text-[#155DFC]" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-[#07162F]">
                    {value}
                  </span>
                  <span className="block text-xs text-[#5D667A]">{label}</span>
                </span>
              </motion.div>
            ))}

            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[#E4EAF5] bg-white/95 px-4 py-2.5 shadow-brand-soft backdrop-blur-md md:flex"
            >
              <Target className="h-4 w-4 text-[#D91F2D]" />
              <span className="whitespace-nowrap text-xs font-semibold text-[#07162F]">
                Placement-focused learning
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </HeroBackground>
  );
}
