"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  FileText,
  ClipboardCheck,
  MessageSquare,
  Award,
  Rocket,
  BookOpen,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Circle,
  Lock,
  ChevronDown,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { journeyStages } from "@/data/studentJourney";

const stageIcons: Record<string, React.ElementType> = {
  registered: UserPlus,
  "intake-submitted": FileText,
  assessment: ClipboardCheck,
  interview: MessageSquare,
  "tier-allocation": Award,
  onboarding: Rocket,
  learning: BookOpen,
  certification: BadgeCheck,
  "placement-readiness": Briefcase,
  placed: CheckCircle2,
  alumni: GraduationCap,
};

const statusConfig = {
  completed: {
    bg: "bg-green-50",
    border: "border-green-200",
    dot: "bg-green-500",
    text: "text-green-700",
    line: "bg-green-400",
  },
  "in-progress": {
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-400",
    text: "text-amber-700",
    line: "bg-amber-300",
  },
  "action-needed": {
    bg: "bg-red-50",
    border: "border-red-200",
    dot: "bg-red-500",
    text: "text-red-700",
    line: "bg-red-300",
  },
  locked: {
    bg: "bg-gray-50",
    border: "border-gray-200",
    dot: "bg-gray-300",
    text: "text-gray-500",
    line: "bg-gray-200",
  },
};

function JourneyStep({
  stage,
  index,
  isLast,
}: {
  stage: (typeof journeyStages)[0];
  index: number;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = stageIcons[stage.id] || Circle;
  const status = statusConfig[stage.status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative"
    >
      {/* Connecting line */}
      {!isLast && (
        <div
          className={`absolute left-5 top-10 w-0.5 h-full ${
            stage.status === "completed" ? "bg-green-400" : "bg-gray-200"
          }`}
        />
      )}

      <div
        className={`relative flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${status.bg} ${status.border} hover:shadow-sm`}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Icon dot */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${status.dot} text-white`}
        >
          {stage.status === "locked" ? (
            <Lock className="w-4 h-4" />
          ) : (
            <Icon className="w-4 h-4" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className={`text-sm font-bold ${status.text}`}>{stage.label}</h4>
            <div className="flex items-center gap-2">
              {stage.status === "completed" && stage.date && (
                <span className="text-xs text-gray-400 hidden sm:block">
                  {stage.date}
                </span>
              )}
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">{stage.description}</p>

          {/* Expanded details */}
          <AnimatePresence>
            {expanded && stage.details && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-2 p-2.5 bg-white/70 rounded-xl text-xs text-gray-600">
                  {stage.details}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function JourneySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Heading + Visual */}
          <div>
            <SectionHeading
              pill="Student Journey"
              title="Your Path From Registration to Placement"
              subtitle="A structured, milestone-driven approach that takes you from beginner to job-ready AI professional."
              centered={false}
            />

            {/* Feature cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Learn by Building",
                  desc: "Every concept is reinforced with hands-on projects",
                  color: "#EAF2FF",
                },
                {
                  title: "Track Your Progress",
                  desc: "Real-time dashboard shows exactly where you stand",
                  color: "#E6F1FF",
                },
                {
                  title: "Become Placement Ready",
                  desc: "Dedicated career support until you get hired",
                  color: "#FFD9E8",
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-2xl border border-[#E4EAF5] bg-white"
                >
                  <div
                    className="w-8 h-8 rounded-xl mb-2"
                    style={{ backgroundColor: card.color }}
                  />
                  <h4 className="text-sm font-bold text-[#07162F] mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#5D667A]">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-2">
            {journeyStages.map((stage, i) => (
              <JourneyStep
                key={stage.id}
                stage={stage}
                index={i}
                isLast={i === journeyStages.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
