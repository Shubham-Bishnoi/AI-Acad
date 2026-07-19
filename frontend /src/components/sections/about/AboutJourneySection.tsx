"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * The same ten-stage student lifecycle used by the dashboard, retold here as an
 * About-page narrative rather than a progress tracker — no statuses, no
 * personal data, just the shape of the journey.
 */
const stages = [
  { step: "01", title: "Register", body: "Create your academy account and join an upcoming cohort." },
  { step: "02", title: "Submit Intake", body: "Share your background, goals, and the track you are aiming for." },
  { step: "03", title: "Assessment", body: "A short aptitude and technical screening to find your starting point." },
  { step: "04", title: "Interview", body: "A one-to-one conversation with a mentor about direction and fit." },
  { step: "05", title: "Tier Allocation", body: "You are placed in the tier that matches your current level." },
  { step: "06", title: "Onboarding", body: "Orientation, platform walkthrough, and goal setting for the term." },
  { step: "07", title: "Learning", body: "Structured modules paired with hands-on project work." },
  { step: "08", title: "Certification", body: "Final assessment and a certificate that reflects real capability." },
  { step: "09", title: "Placement Readiness", body: "Résumé review, mock interviews, and portfolio preparation." },
  { step: "10", title: "Alumni", body: "Ongoing access to the network, resources, and future cohorts." },
];

export default function AboutJourneySection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFF] py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="brand-orb-drift-a pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#155DFC]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="brand-orb-drift-b pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#D91F2D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            pill="The academy journey"
            title="From First Module to Placement Ready"
            subtitle="A defined ten-stage path, so you always know where you are and what comes next."
            centered
            className="mx-auto [&>p]:mx-auto"
          />
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((stage, i) => (
            <motion.li
              key={stage.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.07 }}
              className="group relative h-full rounded-3xl border border-[#E4EAF5] bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF6FF] text-xs font-bold text-[#155DFC]">
                  {stage.step}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-gradient-to-r from-[#C9DCFF] to-transparent"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-bold text-[#07162F]">
                {stage.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#5D667A]">{stage.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
