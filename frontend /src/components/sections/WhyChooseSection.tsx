"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  FolderGit2,
  Award,
  Briefcase,
  Network,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: BookOpen,
    title: "Practical AI Curriculum",
    description:
      "Learn by doing with hands-on projects that mirror real industry challenges, not just theory.",
    color: "#DFFBF1",
  },
  {
    icon: Users,
    title: "Mentor-Led Learning",
    description:
      "Get personalized guidance from industry experts who've built AI systems at top tech companies.",
    color: "#FFD9E8",
  },
  {
    icon: FolderGit2,
    title: "Real Projects",
    description:
      "Build a portfolio of production-ready AI projects that impress hiring managers.",
    color: "#E6F1FF",
  },
  {
    icon: Award,
    title: "Certification Support",
    description:
      "Earn industry-recognized certificates that validate your AI skills to employers.",
    color: "#FFF5E0",
  },
  {
    icon: Briefcase,
    title: "Placement Readiness",
    description:
      "Resume reviews, mock interviews, and direct referrals to 150+ hiring partners.",
    color: "#E8E0FF",
  },
  {
    icon: Network,
    title: "Alumni Network",
    description:
      "Join a thriving community of AI professionals for lifelong learning and career growth.",
    color: "#FFE8E0",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose GFF AI Academy"
          subtitle="We combine expert-led instruction, hands-on projects, and dedicated career support to accelerate your AI career."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#F8FAF9] rounded-3xl p-6 border border-[#E8EDE9] hover:border-[#00A86B]/30 hover:shadow-hover transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                style={{ backgroundColor: reason.color }}
              >
                <reason.icon className="w-5 h-5 text-[#071C1A]" />
              </div>
              <h3 className="text-base font-bold text-[#071C1A] mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-[#5A6B69] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center image / stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16"
        >
          {[
            { value: "5,000+", label: "Students Enrolled" },
            { value: "150+", label: "Hiring Partners" },
            { value: "95%", label: "Completion Rate" },
            { value: "85%", label: "Placement Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#00A86B] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#5A6B69]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
