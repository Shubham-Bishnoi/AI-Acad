"use client";

import { motion } from "framer-motion";
import {
  Layers,
  FlaskConical,
  Map,
  Gauge,
  Building2,
  Target,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const differentiators = [
  {
    icon: Layers,
    title: "Not Just Courses",
    body: "A complete journey — intake, mentorship, projects, certification, and placement readiness — rather than a video library.",
  },
  {
    icon: FlaskConical,
    title: "Real AI Projects",
    body: "You build systems that run, using the same tools and trade-offs practitioners face day to day.",
  },
  {
    icon: Map,
    title: "Guided Student Journey",
    body: "Ten defined stages mean you always know your current position and the next milestone.",
  },
  {
    icon: Gauge,
    title: "Performance Visibility",
    body: "Progress, assessments, and readiness stay visible, so support arrives before you fall behind.",
  },
  {
    icon: Building2,
    title: "Industry-Relevant Curriculum",
    body: "Tracks are shaped by mentors who still build in production, and revised as the field moves.",
  },
  {
    icon: Target,
    title: "Career Readiness",
    body: "Portfolio, résumé, and interview preparation are treated as trainable skills in their own right.",
  },
];

const stats = [
  { value: "10+", label: "Learning modules" },
  { value: "6+", label: "Career tracks" },
  { value: "1:1", label: "Mentor guidance" },
  { value: "100%", label: "Project-based portfolio" },
];

export default function AboutDifferenceSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            pill="What sets us apart"
            title="What Makes Us Different"
            subtitle="Six things that change the experience of learning AI with GFF AI Academy."
            centered
            className="mx-auto [&>p]:mx-auto"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map(({ icon: Icon, title, body }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group flex h-full flex-col rounded-3xl border border-[#E4EAF5] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF6FF] transition-colors duration-300 group-hover:bg-[#155DFC]">
                <Icon
                  className="h-5 w-5 text-[#155DFC] transition-colors duration-300 group-hover:text-white"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mb-2 text-lg font-bold leading-snug text-[#07162F]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#5D667A]">{body}</p>
            </motion.article>
          ))}
        </div>

        {/* Wide image band + stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-16 overflow-hidden rounded-[2.5rem] border border-[#E4EAF5] bg-[#F8FAFF]"
        >
          <img
            src="/images/about-us/about-wide-band.jpg"
            alt="GFF AI Academy learners collaborating across workstations"
            width={2200}
            height={736}
            className="aspect-[21/9] w-full object-cover"
          />

          <dl className="grid grid-cols-2 divide-[#E4EAF5] border-t border-[#E4EAF5] lg:grid-cols-4 lg:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-bold text-[#155DFC] lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-[#5D667A]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
