"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Become a Mentor?",
    body: "Join GFF AI Academy to share your expertise, guide learners through real projects, and shape the next generation of AI talent.",
    cta: "Join with Us",
    href: "/contact",
    image: "/images/about-us/char-mentor.png",
    alt: "Illustration of an AI mentor working at a laptop",
    bg: "#F1EAFF",
    button: "bg-[#07162F] hover:bg-[#0B1026]",
  },
  {
    title: "Get AI Courses",
    body: "Join as a learner to access structured AI tracks, build a project portfolio, and work towards certification and placement readiness.",
    cta: "Start Learning",
    href: "/courses",
    image: "/images/about-us/char-student.png",
    alt: "Illustration of a student learning at a laptop",
    bg: "#FFF3F7",
    button: "bg-[#155DFC] hover:bg-[#0F4BD8]",
  },
];

export default function AboutJoinCardsSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex items-center gap-4 overflow-hidden rounded-[2rem] p-7 sm:p-9"
              style={{ backgroundColor: card.bg }}
            >
              <div className="relative z-10 max-w-sm">
                <h3 className="mb-3 text-2xl font-bold leading-snug text-[#07162F] sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[#5D667A]">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC] ${card.button}`}
                >
                  {card.cta}
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>

              <img
                src={card.image}
                alt={card.alt}
                className="pointer-events-none absolute -bottom-2 right-2 hidden h-[88%] w-auto object-contain sm:block"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
