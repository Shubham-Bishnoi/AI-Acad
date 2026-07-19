"use client";

import { motion } from "framer-motion";

/**
 * Left: three icon-led reasons. Right: an overlapping two-photo collage with a
 * floating learner-count card and a dotted grid, matching the reference
 * composition. The front photo is deliberately a transparent-notched PNG so the
 * upper photo can overlap it cleanly.
 */
const reasons = [
  {
    icon: "/images/about-us/icon-expert.svg",
    title: "Mentor-led learning",
    body: "Learn from practitioners who still build AI systems in production, not just teach them.",
    tint: "#EEF6FF",
  },
  {
    icon: "/images/about-us/icon-paths.svg",
    title: "Structured learning paths",
    body: "A defined track from fundamentals to specialisation, matched to your starting level.",
    tint: "#FFE4EC",
  },
  {
    icon: "/images/about-us/icon-interactive.svg",
    title: "Project-based progress",
    body: "Every module ends in something that runs, with progress tracked at each milestone.",
    tint: "#F1EAFF",
  },
];

export default function AboutWhyExistSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* ------------------------- Left: copy ------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-[#07162F] sm:text-4xl lg:text-5xl">
              Why GFF AI Academy Exists
            </h2>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-[#5D667A]">
              AI is changing every industry, but most learners still face
              scattered resources, theory-heavy courses, and no clear path to
              real-world application. We bring structure, mentorship, projects,
              and progress tracking into one journey.
            </p>

            <ul className="space-y-8">
              {reasons.map(({ icon, title, body, tint }, i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: tint }}
                  >
                    <img src={icon} alt="" aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-bold text-[#07162F]">
                      {title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-[#5D667A]">
                      {body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ----------------------- Right: collage ----------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* dotted grid, echoing the reference */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 left-0 h-40 w-40 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #C7D3E8 1.5px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* back photo — mentor at the whiteboard */}
            <div className="relative ml-auto w-[86%] overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src="/images/about-us/about-mentor-led.jpg"
                alt="A GFF AI Academy mentor leading a session"
                width={1200}
                height={1033}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* floating learner-count card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="absolute right-0 top-6 rounded-2xl border border-[#E4EAF5] bg-white/95 p-4 shadow-soft-lg backdrop-blur-md sm:right-2"
            >
              <p className="mb-2.5 text-sm font-bold text-[#07162F] sm:text-base">
                1,000+ Learners
              </p>
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((n) => (
                  <span
                    key={n}
                    aria-hidden="true"
                    className="h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-[#EEF3FB]"
                  >
                    <img
                      src="/images/about-us/avatar.png"
                      alt=""
                      className="h-full w-full object-cover opacity-70"
                    />
                  </span>
                ))}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#EEF6FF] text-sm font-bold text-[#155DFC]">
                  +
                </span>
              </div>
            </motion.div>

            {/* front photo — notched PNG so the card above nests into it */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative -mt-16 w-[78%] sm:-mt-20"
            >
              <img
                src="/images/about-us/collage-front.png"
                alt="GFF AI Academy learners working through course material"
                width={512}
                height={455}
                className="w-full drop-shadow-[0_18px_40px_rgba(7,22,47,0.14)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
