"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Quote,
  ArrowRight,
  Users,
  Award,
  Briefcase,
  Headphones,
  TrendingUp,
} from "lucide-react";
import CourseCard from "@/components/cards/CourseCard";
import MentorCard from "@/components/cards/MentorCard";
import {
  courses,
  categories,
  mentors,
  testimonials,
  blogPosts,
  featuresV3,
  marqueeItems,
} from "@/data/homeVariants";
import HeroBackground from "@/components/layout/HeroBackground";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomeVersion3() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses =
    activeCategory === "All Categories"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroBackground className="pb-12 md:pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Your New Journey</span>
              <br />
              <span className="text-gray-900">With AI Growth</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Start with AI fundamentals, build real projects, complete certification, and become
              placement ready through a structured academy journey.
            </p>
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. AI Development"
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC] shadow-sm"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#155DFC] text-white font-medium rounded-full transition-colors hover:bg-[#0F4BD8] shadow-lg shadow-[#155DFC]/20"
              >
                Find Courses
              </motion.button>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#155DFC] text-white font-medium rounded-full hover:bg-[#0F4BD8] transition-colors text-sm"
              >
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-[#155DFC] hover:text-[#155DFC] transition-colors text-sm"
              >
                View Courses
              </motion.button>
            </div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* ===== MARQUEE ===== */}
      <section className="py-4 bg-[#FFF3F7] overflow-hidden">
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center mx-8 text-lg md:text-xl font-semibold text-gray-800">
                {item}
                <span className="ml-8 w-2 h-2 rounded-full bg-[#D91F2D]" />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== POPULAR COURSES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Popular Courses</h2>
          </FadeIn>
          {/* Category Tabs */}
          <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                  ? "bg-[#155DFC] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} variant="v3" />
            ))}
          </div>
          <FadeIn delay={0.3} className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              Explore All Courses
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHY CHOOSE US - PINK BG ===== */}
      <section className="py-16 md:py-24 bg-[#FFF3F7]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-soft-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                    alt="Students learning"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 right-4 md:right-8 bg-white rounded-2xl p-4 shadow-lg"
                >
                  <p className="text-xs text-gray-500 mb-1">Average Class Completion Rate</p>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#D91F2D]" />
                    <span className="text-xs font-medium text-[#D91F2D]">65+</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">95%</p>
                </motion.div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Your Learning Journey
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Explore courses that expand your AI abilities, covering key areas like machine learning,
                generative AI, and data analytics for career growth and innovation.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Users, title: "Experience Mentors", desc: "Expert mentors fostering growth through personalized guidance." },
                  { icon: Award, title: "Course Certification", desc: "Recognized proof of skills and knowledge gained in courses." },
                  { icon: Briefcase, title: "Job Placement", desc: "Dedicated support to help you find and secure your dream job." },
                  { icon: Headphones, title: "Lifetime Support", desc: "Continuous online support for students for ultimate success." },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFE4EC] flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-5 h-5 text-[#D91F2D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{f.title}</h4>
                      <p className="text-sm text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D91F2D] text-white font-medium rounded-full hover:bg-[#C41926] transition-colors"
              >
                Explore Courses
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </FadeIn>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {featuresV3.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`${feature.bgColor} rounded-3xl p-8 text-center`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#155DFC] transition-colors"
                >
                  {feature.action}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MENTORS ===== */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Learn from the Best Talent
              </h2>
              <p className="text-[#9DBBFF]/80">in the Industry</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              View All Mentors
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {mentors.slice(0, 8).map((mentor, i) => (
              <MentorCard key={mentor.id} mentor={mentor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Happy Students Say About Our Courses
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8"
              >
                <Quote className="w-10 h-10 text-gray-300 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EAF2FF] flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#0F4BD8]">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Empower Your Journey with<br />Expert Career Insights
            </h2>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#155DFC] text-white font-medium rounded-full hover:bg-[#0F4BD8] transition-colors"
            >
              View All Blogs
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-2">
                    {post.author} &bull; {post.readTime} read
                  </p>
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#155DFC] transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="gradient-cta rounded-3xl p-8 md:p-16 text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Join Driven Professionals & Launch Your Dream Career Today!
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Connect with a network of driven professionals, gain valuable insights, and
                access resources that propel you toward your dream career in AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-[#155DFC] text-white font-medium rounded-full hover:bg-[#0F4BD8] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Join With Us
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
