"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/** Soft pastel stat tiles, kept within the red-blue-purple brand range. */
const stats = [
  { value: "10+", label: "Learning modules", bg: "#EEF6FF", text: "#0F4BD8" },
  { value: "6+", label: "Career tracks", bg: "#F1EAFF", text: "#6D28D9" },
  { value: "1:1", label: "Mentor guidance", bg: "#EAF2FF", text: "#155DFC" },
  { value: "100%", label: "Project-based portfolio", bg: "#FFE4EC", text: "#B01824" },
];

export default function AboutAchievementSection() {
  return (
    <section className="bg-[#F8FAFF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ------------------------ Video card ------------------------ */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="overflow-hidden rounded-[2rem] bg-[#0B1026] shadow-soft-lg">
              <video
                src="/images/about-us/about-video.mp4"
                poster="/images/about-us/about-hero.jpg"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label="A short introduction to the GFF AI Academy learning experience"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* overlapping caption card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="relative z-10 mx-auto -mt-6 w-[86%] rounded-2xl border border-[#E4EAF5] bg-white px-6 py-4 text-center shadow-soft-lg"
            >
              <p className="text-base font-bold text-[#07162F]">
                Making Career Impact Together
              </p>
              <p className="mt-0.5 text-sm text-[#5D667A]">
                Ashish Chandra, Founder — GFF AI
              </p>
            </motion.div>
          </motion.div>

          {/* ---------------------- Heading + stats ---------------------- */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-balance text-3xl font-bold leading-tight tracking-tight text-[#07162F] sm:text-4xl lg:text-5xl"
            >
              A Journey of Achievement and AI Growth
            </motion.h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-2xl px-6 py-7"
                  style={{ backgroundColor: stat.bg }}
                >
                  <p
                    className="text-3xl font-bold leading-none lg:text-4xl"
                    style={{ color: stat.text }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-[#07162F]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="mt-8"
            >
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-[#155DFC] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0F4BD8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
              >
                Explore Courses
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
