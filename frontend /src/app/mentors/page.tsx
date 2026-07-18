"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBackground from "@/components/layout/HeroBackground";
import { mentors } from "@/data/mentors";

export default function MentorsPage() {
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
              <p className="text-sm text-[#5D667A] mb-2">Home / Mentors</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07162F] mb-4">
                Meet Our Industry&apos;s{" "}
                <span className="text-[#155DFC]">Leading Expert Mentors</span>
              </h1>
              <p className="text-base text-[#5D667A] max-w-xl">
                Learn from professionals who have built AI systems at the
                world&apos;s top technology companies.
              </p>
            </motion.div>
          </div>
        </HeroBackground>

        {/* Featured Mentors - Dark Band */}
        <section className="py-16 bg-[#07162F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Learn from the Best Talent
                  <br />
                  in the Industry
                </h2>
              </div>
              <a
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#07162F] text-sm font-semibold hover:bg-gray-100 transition-all group"
              >
                View All Mentors
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {mentors.slice(0, 5).map((mentor, i) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="w-24 h-40 sm:w-28 sm:h-48 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold text-[#07162F]"
                    style={{ backgroundColor: mentor.bgColor }}
                  >
                    {mentor.initials}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {mentor.name}
                  </h4>
                  <p className="text-xs text-gray-400">{mentor.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Mentors Grid */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#07162F] mb-8 text-center">
              All Mentors
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {mentors.map((mentor, i) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-[#F8FAFF] rounded-3xl border border-[#E4EAF5] p-6 text-center hover:shadow-hover transition-all duration-300"
                >
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-[#07162F]"
                    style={{ backgroundColor: mentor.bgColor }}
                  >
                    {mentor.initials}
                  </div>
                  <h3 className="text-base font-bold text-[#07162F] mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-[#5D667A] mb-4">{mentor.role}</p>
                  <p className="text-xs text-[#5D667A] leading-relaxed mb-4 line-clamp-3">
                    {mentor.bio}
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-[#8B93A7] mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {mentor.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {mentor.courses} courses
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {mentor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#EEF3FB] text-[#5D667A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#F8FAFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl font-bold text-[#07162F] mb-3">
              Want to learn from these mentors?
            </h3>
            <p className="text-sm text-[#5D667A] mb-6">
              Apply now and get matched with the best mentor for your goals.
            </p>
            <a
              href="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#155DFC] text-white text-sm font-semibold hover:bg-[#0F4BD8] transition-all"
            >
              Apply Now
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
