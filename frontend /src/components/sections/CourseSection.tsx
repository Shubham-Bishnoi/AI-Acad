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
      className="bg-white rounded-3xl border border-[#E8EDE9] overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image side */}
        <div className="relative h-56 md:h-auto min-h-[280px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                course.category === "AI Foundations"
                  ? "linear-gradient(135deg, #DFFBF1, #E6F1FF)"
                  : course.category === "Machine Learning"
                  ? "linear-gradient(135deg, #E8E0FF, #FFD9E8)"
                  : course.category === "Generative AI"
                  ? "linear-gradient(135deg, #FFD9E8, #E6F1FF)"
                  : "linear-gradient(135deg, #E6F1FF, #DFFBF1)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-3xl bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/50">
              <BookOpen className="w-12 h-12 text-[#071C1A]/40" />
            </div>
          </div>
          {course.popular && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#071C1A] text-white text-xs font-medium">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              Popular
            </span>
          )}
        </div>

        {/* Content side */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0F4F2] text-xs font-medium text-[#5A6B69] w-fit mb-3">
            {course.category}
          </span>
          <h3 className="text-xl lg:text-2xl font-bold text-[#071C1A] mb-3">
            {course.title}
          </h3>
          <p className="text-sm text-[#5A6B69] leading-relaxed mb-4">
            {course.description}
          </p>
          <div className="flex items-center gap-4 mb-5">
            <span className="flex items-center gap-1.5 text-xs text-[#5A6B69]">
              <Clock className="w-3.5 h-3.5" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#5A6B69]">
              <BookOpen className="w-3.5 h-3.5" />
              {course.sessions} sessions
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#DFFBF1] text-[#008F5A]"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={`/courses#${course.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5E5E5] text-sm font-semibold text-[#071C1A] hover:border-[#00A86B] hover:text-[#00A86B] transition-all w-fit group"
          >
            View Details
            <span className="w-6 h-6 rounded-full bg-[#071C1A] group-hover:bg-[#00A86B] flex items-center justify-center transition-colors">
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
      className="bg-white rounded-2xl border border-[#E8EDE9] overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
    >
      {/* Image */}
      <div
        className="relative h-40 flex items-center justify-center"
        style={{
          background:
            course.category === "AI Foundations"
              ? "linear-gradient(135deg, #DFFBF1, #E6F1FF)"
              : course.category === "Machine Learning"
              ? "linear-gradient(135deg, #E8E0FF, #FFD9E8)"
              : course.category === "Generative AI"
              ? "linear-gradient(135deg, #FFD9E8, #E6F1FF)"
              : course.category === "Projects"
              ? "linear-gradient(135deg, #FFF5E0, #FFE8E0)"
              : course.category === "Placement Prep"
              ? "linear-gradient(135deg, #E6F1FF, #DFFBF1)"
              : "linear-gradient(135deg, #E8E0FF, #E6F1FF)",
        }}
      >
        <div className="w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center border border-white/60">
          <BookOpen className="w-7 h-7 text-[#071C1A]/40" />
        </div>
        {course.popular && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#071C1A] text-white text-[10px] font-medium">
            <Flame className="w-3 h-3 text-orange-400" />
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 lg:p-5">
        <span className="text-xs font-medium text-[#00A86B]">
          {course.category}
        </span>
        <h3 className="text-base font-bold text-[#071C1A] mt-1 mb-2 line-clamp-2 group-hover:text-[#00A86B] transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-[#5A6B69] line-clamp-2 mb-3">
          {course.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-[#8B9A97]">
              <Clock className="w-3 h-3" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#8B9A97]">
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
                  ? "bg-[#00A86B] text-white shadow-sm"
                  : "bg-[#F0F4F2] text-[#5A6B69] hover:bg-[#E8EDE9]"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002B24] text-white text-sm font-semibold hover:bg-[#062E2A] transition-all group"
          >
            View All Courses
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
