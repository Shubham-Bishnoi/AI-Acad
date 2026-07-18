"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { mentors } from "@/data/mentors";

function MentorCard({ mentor, index }: { mentor: (typeof mentors)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-3xl border border-[#E4EAF5] p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300 group"
    >
      {/* Avatar with colored background */}
      <div
        className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-[#07162F] group-hover:scale-105 transition-transform"
        style={{ backgroundColor: mentor.bgColor }}
      >
        {mentor.initials}
      </div>

      <h3 className="text-base font-bold text-[#07162F] mb-1">{mentor.name}</h3>
      <p className="text-xs text-[#5D667A] mb-4">{mentor.role}</p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {mentor.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#EEF3FB] text-[#5D667A]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function MentorSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet the Next Generation of Masterful Mentors"
          subtitle="Connect with the next wave of expert mentors, guiding you with fresh perspectives, innovative insights, and proven expertise."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {mentors.map((mentor, i) => (
            <MentorCard key={mentor.id} mentor={mentor} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="/mentors"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gradient text-white text-sm font-semibold transition-all group shadow-sm hover:opacity-90 hover:shadow-md"
          >
            View All Mentors
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
