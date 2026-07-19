"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: Compass,
    label: "Mission",
    title: "Practical AI education, made accessible",
    body: "To make practical AI education accessible, structured, and career-oriented for learners and institutions.",
    accent: "#155DFC",
    tint: "#EEF6FF",
  },
  {
    icon: Eye,
    label: "Vision",
    title: "An AI-ready talent ecosystem",
    body: "To build an AI-ready talent ecosystem through learning, projects, certification, mentorship, and industry alignment.",
    accent: "#7C3AED",
    tint: "#F1EAFF",
  },
  {
    icon: Rocket,
    label: "Approach",
    title: "Learn by building, grow with mentors",
    body: "Learn by building. Grow with mentors. Become placement ready — every stage of the journey is designed around doing, not just watching.",
    accent: "#D91F2D",
    tint: "#FFE4EC",
  },
];

export default function AboutMissionSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            pill="What drives us"
            title="Mission, Vision & Approach"
            subtitle="The three commitments that shape how every GFF AI Academy programme is designed and delivered."
            centered
            className="mx-auto [&>p]:mx-auto"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, label, title, body, accent, tint }, i) => (
            <motion.article
              key={label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex h-full flex-col rounded-3xl border border-[#E4EAF5] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: tint }}
              >
                <Icon className="h-5 w-5" style={{ color: accent }} aria-hidden="true" />
              </span>

              <span
                className="mb-2 text-xs font-bold uppercase tracking-[0.14em]"
                style={{ color: accent }}
              >
                {label}
              </span>
              <h3 className="mb-3 text-lg font-bold leading-snug text-[#07162F]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#5D667A]">{body}</p>
            </motion.article>
          ))}
        </div>

        {/* Supporting visual + quick proof points */}
        <div className="mt-16 grid items-center gap-10 rounded-[2.5rem] border border-[#E4EAF5] bg-[#F8FAFF] p-6 lg:grid-cols-2 lg:gap-14 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl shadow-soft"
          >
            <img
              src="/images/about-us/about-mentor-led.jpg"
              alt="A GFF AI Academy mentor walking learners through project work"
              width={1200}
              height={1033}
              className="aspect-[16/11] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-2xl font-bold leading-snug tracking-tight text-[#07162F] sm:text-3xl">
              Built around outcomes, not lecture hours
            </h3>
            <p className="mb-6 text-base leading-relaxed text-[#5D667A]">
              Every track pairs structured theory with something you actually
              build. Mentors review the work, progress stays visible, and the
              path from first module to placement readiness is defined from day
              one.
            </p>
            <ul className="space-y-3">
              {[
                "Structured modules with clear milestones",
                "Mentor review on real project work",
                "Certification and placement readiness built in",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#155DFC]"
                  />
                  <span className="text-sm leading-relaxed text-[#5D667A]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
