"use client";

import { motion } from "framer-motion";
import {
  Hammer,
  UserCheck,
  FolderGit2,
  LineChart,
  BadgeCheck,
  Briefcase,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    icon: Hammer,
    title: "Practical First",
    body: "Concepts arrive attached to something you are building.",
    accent: "#155DFC",
    tint: "#EEF6FF",
  },
  {
    icon: UserCheck,
    title: "Mentor Guided",
    body: "Practitioners review your work and correct course early.",
    accent: "#7C3AED",
    tint: "#F1EAFF",
  },
  {
    icon: FolderGit2,
    title: "Project Based",
    body: "Every module ends in an artefact worth showing.",
    accent: "#D91F2D",
    tint: "#FFE4EC",
  },
  {
    icon: LineChart,
    title: "Progress Tracked",
    body: "Milestones stay visible, so gaps surface before they grow.",
    accent: "#2563EB",
    tint: "#EAF2FF",
  },
  {
    icon: BadgeCheck,
    title: "Certification Ready",
    body: "Assessments map to recognised, demonstrable outcomes.",
    accent: "#9B5CF6",
    tint: "#F1EAFF",
  },
  {
    icon: Briefcase,
    title: "Placement Focused",
    body: "Readiness is a tracked stage, not an afterthought.",
    accent: "#EF3B4D",
    tint: "#FFE4EC",
  },
];

export default function AboutPhilosophySection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            pill="How we teach"
            title="Our Learning Philosophy"
            subtitle="Six principles that shape every track, every mentor session, and every project inside the academy."
            centered
            className="mx-auto [&>p]:mx-auto"
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, body, accent, tint }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-[#E4EAF5] bg-[#F8FAFF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#155DFC]/30 hover:bg-white hover:shadow-card-hover"
            >
              {/* soft accent wash that appears on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-60"
                style={{ backgroundColor: tint }}
              />
              <span
                className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: tint }}
              >
                <Icon className="h-5 w-5" style={{ color: accent }} aria-hidden="true" />
              </span>
              <h3 className="relative mb-2 text-base font-bold text-[#07162F]">
                {title}
              </h3>
              <p className="relative text-sm leading-relaxed text-[#5D667A]">
                {body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
