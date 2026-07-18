"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-cta rounded-[32px] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/30 rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#07162F] leading-tight mb-4">
              Start Your AI Learning Journey With GFF AI Academy
            </h2>
            <p className="text-sm sm:text-base text-[#5D667A] mb-8 leading-relaxed">
              Apply today and move through a structured path from learning to
              certification and placement readiness.
            </p>

            <form
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#E4EAF5] text-sm text-[#07162F] placeholder:text-[#9AA3B5] focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all shadow-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-gradient text-white text-sm font-semibold transition-all group shadow-sm hover:opacity-90 hover:shadow-md shrink-0"
              >
                Join With Us
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
