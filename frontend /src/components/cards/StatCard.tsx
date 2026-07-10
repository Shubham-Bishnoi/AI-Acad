"use client";

import { motion } from "framer-motion";
import type { Stat } from "@/data/homeVariants";

interface StatCardProps {
  stat: Stat;
  index?: number;
  variant?: "default" | "large" | "compact";
}

export default function StatCard({ stat, index = 0, variant = "default" }: StatCardProps) {
  if (variant === "large") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="text-center"
      >
        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
        <div className="text-sm text-gray-500">{stat.label}</div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.08 }}
        className="text-center px-4"
      >
        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
        <div className="text-xs text-gray-500">{stat.label}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
      <div className="text-sm text-gray-500">{stat.label}</div>
    </motion.div>
  );
}
