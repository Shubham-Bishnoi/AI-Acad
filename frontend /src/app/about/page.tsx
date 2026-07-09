"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  FolderGit2,
  Award,
  Target,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/FAQSection";

const values = [
  {
    icon: Target,
    title: "Practical First",
    desc: "Every concept taught through real-world application.",
    color: "#DFFBF1",
  },
  {
    icon: Users,
    title: "Mentor-Driven",
    desc: "Personal guidance from industry professionals.",
    color: "#FFD9E8",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Focused",
    desc: "Structured path to placement readiness.",
    color: "#E6F1FF",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "High standards in curriculum and delivery.",
    color: "#FFF5E0",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Founded",
    desc: "GFF AI Academy was started with a mission to democratize AI education in India.",
  },
  {
    year: "2023",
    title: "First 1000 Students",
    desc: "Reached our first milestone of 1000 enrolled students with a 92% completion rate.",
  },
  {
    year: "2024",
    title: "Industry Partnerships",
    desc: "Partnered with 150+ companies for placements and introduced the tier system.",
  },
  {
    year: "2025",
    title: "Nationwide Reach",
    desc: "Expanded to serve 5,000+ students across India with 85% placement rate.",
  },
];

const stats = [
  { value: "5,000+", label: "Students Enrolled", icon: Users },
  { value: "150+", label: "Hiring Partners", icon: BookOpen },
  { value: "50+", label: "Expert Mentors", icon: Award },
  { value: "85%", label: "Placement Rate", icon: TrendingUp },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-[#5A6B69] mb-2">Home / About Us</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C1A] mb-4">
                Providing Unrivaled Quality in{" "}
                <span className="text-[#00A86B]">AI Education</span>
              </h1>
              <p className="text-base text-[#5A6B69] max-w-2xl leading-relaxed">
                GFF AI Academy is on a mission to make quality AI education
                accessible to every learner in India. We combine expert-led
                instruction, hands-on projects, and dedicated career support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-[#E8EDE9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#DFFBF1] flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-[#00A86B]" />
                  </div>
                  <div className="text-2xl font-bold text-[#071C1A]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#5A6B69]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFFBF1] text-xs font-medium text-[#008F5A] mb-4">
                  Our Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#071C1A] mb-4 leading-tight">
                  Making AI Education Accessible and Practical for Everyone
                </h2>
                <p className="text-sm text-[#5A6B69] leading-relaxed mb-4">
                  We believe that artificial intelligence is the most
                  transformative technology of our time, and everyone deserves
                  access to quality education in this field. Our mission is to
                  bridge the gap between academic learning and industry
                  requirements.
                </p>
                <p className="text-sm text-[#5A6B69] leading-relaxed">
                  Through our structured programs, mentor-led approach, and
                  strong industry connections, we ensure that every student who
                  completes our program is job-ready and confident in their AI
                  skills.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="p-5 rounded-2xl border border-[#E8EDE9] bg-[#F8FAF9]"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: v.color }}
                    >
                      <v.icon className="w-5 h-5 text-[#071C1A]" />
                    </div>
                    <h4 className="text-sm font-bold text-[#071C1A] mb-1">
                      {v.title}
                    </h4>
                    <p className="text-xs text-[#5A6B69]">{v.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-20 bg-[#F8FAF9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071C1A] text-center mb-10">
              Our Journey
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E8EDE9] md:-translate-x-px" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`hidden md:block md:w-1/2 ${
                        i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <span className="text-xs font-bold text-[#00A86B]">
                        {item.year}
                      </span>
                      <h3 className="text-base font-bold text-[#071C1A] mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5A6B69] mt-1">
                        {item.desc}
                      </p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#00A86B] border-2 border-white shadow-sm md:-translate-x-1.5 mt-1.5" />

                    <div className="pl-10 md:pl-0 md:w-1/2 md:hidden">
                      <span className="text-xs font-bold text-[#00A86B]">
                        {item.year}
                      </span>
                      <h3 className="text-base font-bold text-[#071C1A] mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5A6B69] mt-1">
                        {item.desc}
                      </p>
                    </div>

                    <div
                      className={`hidden md:block md:w-1/2 ${
                        i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071C1A] text-center mb-10">
              How GFF AI Academy Works
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Apply & Assess",
                  desc: "Submit your application, take the aptitude test, and interview with our mentors.",
                  color: "#DFFBF1",
                },
                {
                  step: "02",
                  title: "Learn & Build",
                  desc: "Go through structured modules, build real projects, and get personalized mentor feedback.",
                  color: "#FFD9E8",
                },
                {
                  step: "03",
                  title: "Certify & Place",
                  desc: "Earn your certification, complete placement prep, and get referred to hiring partners.",
                  color: "#E6F1FF",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center p-6"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="text-lg font-bold text-[#071C1A]">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#071C1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A6B69] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A86B] text-white text-sm font-semibold hover:bg-[#008F5A] transition-all"
              >
                Start Your Journey
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
