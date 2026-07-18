"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  Award,
  Briefcase,
  Headphones,
  ChevronDown,
  Quote,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import CourseCard from "@/components/cards/CourseCard";
import MentorCard from "@/components/cards/MentorCard";
import {
  courses,
  categories,
  mentors,
  faqItems,
  testimonials,
  blogPosts,
  featuresV2,
  howItWorksSteps,
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

function FAQItem({ item, isOpen, onClick }: { item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className={`text-sm md:text-base font-medium ${isOpen ? "text-[#155DFC]" : "text-gray-900"}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? "text-[#155DFC]" : "text-gray-400"}`} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{item.answer}</div>
      </motion.div>
    </motion.div>
  );
}

export default function HomeVersion2() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredCourses =
    activeCategory === "All Categories"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <HeroBackground className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Best AI Courses to{" "}
                <span className="text-brand-gradient">Expand Your</span>{" "}
                Digital Abilities
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Explore practical AI, machine learning, and generative AI skills through
                structured learning, mentor guidance, real projects, and placement readiness.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#155DFC] text-white font-medium rounded-full hover:bg-[#0F4BD8] transition-colors shadow-lg shadow-[#155DFC]/20"
                >
                  Explore Courses
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-[#155DFC] hover:text-[#155DFC] transition-colors"
                >
                  Apply Now
                </motion.button>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2F6BFF] to-[#155DFC] border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-white">{String.fromCharCode(64 + i)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Over 5,000 Students Land Jobs</p>
                  <p className="text-xs text-gray-500">Join our growing community</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=500&fit=crop"
                  alt="Student learning"
                  className="w-full h-auto object-cover"
                />
                {/* Floating student badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
                >
                  <div className="flex -space-x-1.5">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2F6BFF] to-[#155DFC] border border-white"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-900">120K Students</span>
                </motion.div>
              </div>
              {/* Rotating badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#155DFC] rounded-full flex items-center justify-center shadow-lg"
              >
                <div className="relative w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      />
                    </defs>
                    <text className="fill-white text-[8px] uppercase tracking-[0.3em]">
                      <textPath href="#circlePath">
                        Learn Digital Abilities &bull; AI Powered &bull;
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </HeroBackground>

      {/* ===== CHOSEN FOR YOU ===== */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Platform&apos;s Top Courses
            </h2>
            <p className="text-lg text-gray-500">Chosen Just for You</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {courses.slice(0, 3).map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} variant="featured" />
            ))}
          </div>
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
              <CourseCard key={course.id} course={course} index={i} variant="default" />
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

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unlock New Potential with<br />AI Skills Mastery
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our structured learning approach helps you master AI skills step by step,
                from fundamentals to advanced applications, with real-world projects.
              </p>
              <div className="space-y-4">
                {howItWorksSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#EAF2FF] flex items-center justify-center flex-shrink-0">
                      {i === 0 && <Users className="w-5 h-5 text-[#155DFC]" />}
                      {i === 1 && <GraduationCap className="w-5 h-5 text-[#155DFC]" />}
                      {i === 2 && <TrendingUp className="w-5 h-5 text-[#155DFC]" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {courses.slice(0, 4).map((course) => (
                  <motion.div
                    key={course.id}
                    whileHover={{ y: -4 }}
                    className="relative rounded-xl overflow-hidden aspect-square cursor-pointer"
                  >
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-xs font-medium text-white/80">{course.category}</p>
                      <p className="text-sm font-semibold text-white truncate">{course.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-soft-lg">
                  <img
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&h=500&fit=crop"
                    alt="Students collaborating"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 md:right-8 bg-white rounded-2xl p-4 shadow-lg"
                >
                  <p className="text-xs text-gray-500 mb-1">Average Class Completion Rate</p>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#155DFC]" />
                    <span className="text-xs font-medium text-[#155DFC]">65+</span>
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
                Choose us for expert-led AI skills development, tailored resources, and
                practical, real-world projects that empower your learning and career growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {featuresV2.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] flex items-center justify-center flex-shrink-0">
                      {feature.icon === "Users" && <Users className="w-5 h-5 text-[#155DFC]" />}
                      {feature.icon === "Award" && <Award className="w-5 h-5 text-[#155DFC]" />}
                      {feature.icon === "Briefcase" && <Briefcase className="w-5 h-5 text-[#155DFC]" />}
                      {feature.icon === "Headphones" && <Headphones className="w-5 h-5 text-[#155DFC]" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 mb-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">100,000+</p>
                  <p className="text-sm text-gray-500">Students enhanced skills</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">20,000+</p>
                  <p className="text-sm text-gray-500">Careers built successfully</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#155DFC] text-white font-medium rounded-full hover:bg-[#0F4BD8] transition-colors"
              >
                More About Us
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </FadeIn>
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

      {/* ===== FAQ ===== */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Quick answers to common queries about our platform and courses.
            </p>
          </FadeIn>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-16 md:py-24 bg-white">
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
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  {post.author} &bull; {post.readTime} read
                </p>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#155DFC] transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
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
