"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  pill?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  pill,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {pill && (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DFFBF1] text-[#008F5A] text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00A86B]"></span>
          {pill}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C1A] leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#5A6B69] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
