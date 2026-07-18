"use client";

import { motion } from "framer-motion";
import { Clock, FileText } from "lucide-react";
import type { Course } from "@/data/homeVariants";

interface CourseCardProps {
  course: Course;
  index?: number;
  variant?: "default" | "featured" | "v3";
}

export default function CourseCard({ course, index = 0, variant = "default" }: CourseCardProps) {
  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -6 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
              {course.category}
            </span>
            <span className="text-sm font-semibold text-[#155DFC]">{course.price}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#155DFC] transition-colors">
            {course.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              <span>{course.lectures} lectures</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "v3") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ y: -6 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 text-xs font-medium bg-white/90 text-gray-700 rounded-full shadow-sm">
              {course.category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-3 group-hover:text-[#155DFC] transition-colors line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              <span>{course.lectures} lectures</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#EAF2FF] flex items-center justify-center">
                <span className="text-xs font-medium text-[#0F4BD8]">
                  {course.instructor?.charAt(0) || "G"}
                </span>
              </div>
              <span className="text-xs text-gray-600">{course.instructor}</span>
            </div>
            <span className="text-sm font-semibold text-[#155DFC]">{course.price}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
            {course.category}
          </span>
          <span className="text-sm font-semibold text-[#155DFC]">{course.price}</span>
        </div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-[#155DFC] transition-colors line-clamp-2">
          {course.title}
        </h3>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="w-3 h-3" />
            <span>{course.lectures} lectures</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
