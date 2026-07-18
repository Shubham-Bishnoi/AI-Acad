"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "ML Engineer at Google",
    quote:
      "GFF AI Academy transformed my career. The mentor-led approach and real projects gave me the confidence and skills to crack my dream job at Google.",
    outcome: "Placed at Google",
    bg: "#EAF2FF",
  },
  {
    id: 2,
    name: "Ananya Krishnan",
    role: "Data Scientist at Flipkart",
    quote:
      "The structured curriculum and placement support were exceptional. Within 3 months of completion, I had multiple offers in hand. Best decision I ever made!",
    outcome: "3 offers in hand",
    bg: "#FFD9E8",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "AI Product Manager at Microsoft",
    quote:
      "Coming from a non-tech background, I was worried. But the beginner-friendly approach and patient mentors made AI accessible. Now I'm leading AI products at Microsoft!",
    outcome: "Career switch success",
    bg: "#E6F1FF",
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "NLP Researcher at Amazon",
    quote:
      "The depth of content in the NLP and GenAI modules was incredible. The mentors actually work in the field, so you're learning cutting-edge techniques.",
    outcome: "Research role",
    bg: "#FFF5E0",
  },
  {
    id: 5,
    name: "Aditya Patel",
    role: "AI Engineer at Tesla",
    quote:
      "The capstone project was a game-changer. I built an autonomous driving perception model that became the centerpiece of my portfolio. Landed my dream role!",
    outcome: "Top placement",
    bg: "#FFE8E0",
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading
            title="Key Takeaways from Successful Graduate Experiences"
            subtitle="Hear from our alumni who transformed their careers through GFF AI Academy."
            centered={false}
            className="max-w-2xl"
          />
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-[#E4EAF5] flex items-center justify-center hover:border-[#155DFC] hover:text-[#155DFC] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-[#E4EAF5] flex items-center justify-center hover:border-[#155DFC] hover:text-[#155DFC] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[300px] sm:min-w-[340px] snap-start"
            >
              <div className="bg-[#F8FAFF] rounded-3xl p-6 border border-[#E4EAF5] h-full hover:shadow-hover transition-shadow duration-300">
                <Quote className="w-8 h-8 text-[#155DFC]/30 mb-4" />
                <p className="text-sm text-[#5D667A] leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E4EAF5]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-[#07162F]"
                    style={{ backgroundColor: t.bg }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#07162F]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#5D667A] truncate">{t.role}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#EAF2FF] text-[#0F4BD8] shrink-0">
                    {t.outcome}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
