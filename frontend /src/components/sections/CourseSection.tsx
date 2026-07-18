"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, BookOpen, ArrowUpRight, Flame } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { courses, courseCategories, Course } from "@/data/courses";

function FeaturedCourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl border border-[#E4EAF5] overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image side */}
        <div className="relative h-56 md:h-auto min-h-[280px] overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#07162F]/22 via-transparent to-white/16" />
          {course.popular && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#07162F] text-white text-xs font-medium">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              Popular
            </span>
          )}
        </div>

        {/* Content side */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EEF3FB] text-xs font-medium text-[#5D667A] w-fit mb-3">
            {course.category}
          </span>
          <h3 className="text-xl lg:text-2xl font-bold text-[#07162F] mb-3">
            {course.title}
          </h3>
          <p className="text-sm text-[#5D667A] leading-relaxed mb-4">
            {course.description}
          </p>
          <div className="flex items-center gap-4 mb-5">
            <span className="flex items-center gap-1.5 text-xs text-[#5D667A]">
              <Clock className="w-3.5 h-3.5" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#5D667A]">
              <BookOpen className="w-3.5 h-3.5" />
              {course.sessions} sessions
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#EAF2FF] text-[#0F4BD8]"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={`/courses#${course.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E4EAF5] text-sm font-semibold text-[#07162F] hover:border-[#155DFC] hover:text-[#155DFC] transition-all w-fit group"
          >
            View Details
            <span className="w-6 h-6 rounded-full bg-[#07162F] group-hover:bg-[#155DFC] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-[#E4EAF5] overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07162F]/26 via-transparent to-white/10" />
        {course.popular && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#07162F] text-white text-[10px] font-medium">
            <Flame className="w-3 h-3 text-orange-400" />
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 lg:p-5">
        <span className="text-xs font-medium text-[#155DFC]">
          {course.category}
        </span>
        <h3 className="text-base font-bold text-[#07162F] mt-1 mb-2 line-clamp-2 group-hover:text-[#155DFC] transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-[#5D667A] line-clamp-2 mb-3">
          {course.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-[#8B93A7]">
              <Clock className="w-3 h-3" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#8B93A7]">
              <BookOpen className="w-3 h-3" />
              {course.sessions}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CourseSection() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredCourses =
    activeCategory === "All Categories"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  const featured = filteredCourses.find((c) => c.popular) || filteredCourses[0];
  const others = filteredCourses.filter((c) => c.id !== featured?.id);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Become In Demand In The AI Job Market"
          subtitle="Industry-aligned courses designed to take you from beginner to job-ready AI professional"
          centered
        />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mt-10 mb-10"
        >
          {courseCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#155DFC] text-white shadow-sm"
                  : "bg-[#EEF3FB] text-[#5D667A] hover:bg-[#E4EAF5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Course */}
        {featured && <FeaturedCourseCard course={featured} />}

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          <AnimatePresence mode="popLayout">
            {others.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </AnimatePresence>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gradient text-white text-sm font-semibold transition-all group hover:opacity-90"
          >
            View All Courses
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
