"use client";

import { motion } from "framer-motion";
import { Clock, ArrowUpRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top AI skills to boost your career in 2025",
    excerpt:
      "Explore the most in-demand AI skills that employers are looking for and how to develop them effectively.",
    author: "Dr. Sarah Chen",
    readTime: "8 min",
    color: "#EAF2FF",
    featured: true,
  },
  {
    id: 2,
    title: "Practical tips to develop prompt engineering skills",
    excerpt: "Master the art of prompting LLMs for better results.",
    author: "Priya Sharma",
    readTime: "6 min",
    color: "#E6F1FF",
    featured: false,
  },
  {
    id: 3,
    title: "Boost your career with core ML fundamentals",
    excerpt: "Why understanding the basics is crucial for long-term success.",
    author: "James Wilson",
    readTime: "5 min",
    color: "#FFD9E8",
    featured: false,
  },
  {
    id: 4,
    title: "Essential skills for new and experienced AI developers",
    excerpt: "From Python to MLOps - the complete skill roadmap.",
    author: "Alex Kim",
    readTime: "7 min",
    color: "#FFF5E0",
    featured: false,
  },
  {
    id: 5,
    title: "Top data skills for a data-driven world",
    excerpt: "Analytics, visualization, and storytelling with data.",
    author: "Marcus Thompson",
    readTime: "4 min",
    color: "#E8E0FF",
    featured: false,
  },
];

export default function BlogSection() {
  const featured = blogPosts.find((p) => p.featured);
  const others = blogPosts.filter((p) => !p.featured);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#07162F] leading-tight">
              Empower Your Journey with
              <br />
              Expert Career Insights
            </h2>
          </motion.div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-gradient text-white text-sm font-semibold transition-all group hover:opacity-90"
          >
            View All Blogs
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Asymmetric grid */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Featured article */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div
                className="h-64 sm:h-80 rounded-3xl flex items-center justify-center mb-4 overflow-hidden"
                style={{ backgroundColor: featured.color }}
              >
                <div className="w-24 h-24 rounded-3xl bg-white/40 backdrop-blur-sm flex items-center justify-center border border-white/60 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-10 h-10 text-[#07162F]/40" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-[#5D667A]">
                  {featured.author}
                </span>
                <span className="text-[#D1D5DB]">·</span>
                <span className="flex items-center gap-1 text-xs text-[#8B93A7]">
                  <Clock className="w-3 h-3" />
                  {featured.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#07162F] group-hover:text-[#155DFC] transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm text-[#5D667A] mt-1">{featured.excerpt}</p>
            </motion.div>
          )}

          {/* 2x2 grid */}
          <div className="grid grid-cols-2 gap-5">
            {others.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div
                  className="h-28 sm:h-36 rounded-2xl flex items-center justify-center mb-3 overflow-hidden"
                  style={{ backgroundColor: post.color }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-sm flex items-center justify-center border border-white/60 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-5 h-5 text-[#07162F]/40" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] text-[#5D667A]">
                    {post.author}
                  </span>
                  <span className="text-[#D1D5DB]">·</span>
                  <span className="flex items-center gap-1 text-[10px] text-[#8B93A7]">
                    <Clock className="w-2.5 h-2.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#07162F] group-hover:text-[#155DFC] transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
