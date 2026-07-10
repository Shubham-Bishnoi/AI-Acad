"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, BookOpen, ArrowUpRight, X, Flame, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBackground from "@/components/layout/HeroBackground";
import { courses, courseCategories, Course } from "@/data/courses";

function CourseDetailModal({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="relative h-48 overflow-hidden rounded-t-3xl">
          <img
            src={course.image}
            alt={course.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071C1A]/28 via-transparent to-white/12" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 transition-colors hover:bg-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#F0F4F2] text-xs font-medium text-[#5A6B69]">
              {course.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#DFFBF1] text-xs font-medium text-[#008F5A]">
              {course.level}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-[#071C1A] mb-3">
            {course.title}
          </h2>
          <p className="text-sm text-[#5A6B69] leading-relaxed mb-5">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-[#E8EDE9]">
            <span className="flex items-center gap-1.5 text-sm text-[#5A6B69]">
              <Clock className="w-4 h-4 text-[#00A86B]" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-[#5A6B69]">
              <BookOpen className="w-4 h-4 text-[#00A86B]" />
              {course.sessions} sessions
            </span>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-[#071C1A] mb-3">What you will get</h4>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-[#DFFBF1] text-[#008F5A]"
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          {course.curriculum && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#071C1A] mb-3">
                Curriculum Highlights
              </h4>
              <ul className="space-y-2">
                {course.curriculum.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#5A6B69]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#DFFBF1] text-[#00A86B] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A86B] text-white text-sm font-semibold hover:bg-[#008F5A] transition-all"
          >
            Apply for This Course
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filtered = courses.filter((c) => {
    const matchCat =
      activeCategory === "All Categories" || c.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <HeroBackground className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-[#5A6B69] mb-2">
                Home / Courses
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C1A] mb-4">
                Explore Our Courses
              </h1>
              <p className="text-base text-[#5A6B69] max-w-xl">
                Industry-aligned AI courses designed to take you from beginner to
                job-ready professional.
              </p>
            </motion.div>
          </div>
        </HeroBackground>

        {/* Courses */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3A3A3]" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-[#F8FAF9] border border-[#E8EDE9] text-sm text-[#071C1A] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B] transition-all"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {courseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                    ? "bg-[#00A86B] text-white shadow-sm"
                    : "bg-[#F0F4F2] text-[#5A6B69] hover:bg-[#E8EDE9]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setSelectedCourse(course)}
                  className="bg-[#F8FAF9] rounded-2xl border border-[#E8EDE9] overflow-hidden hover:shadow-hover transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071C1A]/26 via-transparent to-white/10" />
                    {course.popular && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#071C1A] text-white text-[10px] font-medium">
                        <Flame className="w-3 h-3 text-orange-400" />
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-[#00A86B]">
                      {course.category}
                    </span>
                    <h3 className="text-base font-bold text-[#071C1A] mt-1 mb-2 group-hover:text-[#00A86B] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-[#5A6B69] line-clamp-2 mb-3">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-[#8B9A97]">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#8B9A97]">
                        <BookOpen className="w-3 h-3" />
                        {course.sessions} sessions
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#5A6B69]">
                  No courses found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedCourse && (
          <CourseDetailModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
