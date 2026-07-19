"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutCTASection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="gradient-cta rounded-[2rem] p-8 text-center sm:p-12 lg:rounded-[2.5rem] lg:p-16"
        >
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-balance text-2xl font-bold leading-tight tracking-tight text-[#07162F] sm:text-3xl lg:text-4xl">
              Start Your AI Learning Journey
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-[#5D667A] sm:text-base">
              Join GFF AI Academy and move through a structured path from
              beginner learning to certification and placement readiness.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/apply"
                className="group inline-flex items-center gap-2 rounded-full bg-[#155DFC] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0F4BD8] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
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
                className="inline-flex items-center gap-2 rounded-full border border-[#DDE5F3] bg-white px-7 py-3.5 text-sm font-semibold text-[#07162F] shadow-sm transition-all hover:border-[#155DFC] hover:text-[#155DFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
              >
                View Courses
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
