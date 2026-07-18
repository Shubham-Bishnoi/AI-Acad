"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Circle,
  Lock,
  ChevronDown,
  ChevronUp,
  Clock,
  TrendingUp,
  FileText,
  Bell,
  Calendar,
  Target,
  Star,
  AlertCircle,
  ArrowRight,
  BarChart3,
  User,
  LogOut,
  Home,
} from "lucide-react";
import {
  studentProfile,
  journeyStages,
  statusColors,
} from "@/data/studentJourney";
import { curriculum } from "@/data/curriculum";
import { assessments } from "@/data/announcements";
import { announcements } from "@/data/announcements";

/* ─── Sidebar ─── */
function Sidebar() {
  const links = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
    { icon: BookOpen, label: "My Courses", href: "#", active: false },
    { icon: Calendar, label: "Schedule", href: "#", active: false },
    { icon: FileText, label: "Assignments", href: "#", active: false },
    { icon: BarChart3, label: "Progress", href: "#", active: false },
    { icon: Target, label: "Placement", href: "#", active: false },
    { icon: User, label: "Profile", href: "#", active: false },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-[#E4EAF5] h-screen sticky top-0">
      <div className="p-6">
        <Link href="/" className="flex items-center" aria-label="GFF AI Academy — home">
          <img
            src="/images/gff-ai-logo.png"
            alt="GFF AI Academy"
            width={792}
            height={240}
            className="h-9 w-auto max-w-[150px] object-contain"
          />
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              link.active
                ? "bg-[#EAF2FF] text-[#0F4BD8]"
                : "text-[#5D667A] hover:bg-[#EEF3FB] hover:text-[#07162F]"
            }`}
          >
            <link.icon className="w-4 h-4" />
            {link.label}
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-[#E4EAF5]">
        <a
          href="/"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-[#5D667A] hover:bg-[#EEF3FB] transition-all"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </a>
      </div>
    </aside>
  );
}

/* ─── Dashboard Header ─── */
function DashboardHeader() {
  const tierColors = {
    Gold: "bg-[#FFF5E0] text-[#92400E] border-[#FCD34D]",
    Silver: "bg-[#EEF3FB] text-[#475569] border-[#CBD5E1]",
    Bronze: "bg-[#FFE8E0] text-[#9A3412] border-[#FDBA74]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-[#E4EAF5] p-6"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EAF2FF] to-[#E6F1FF] flex items-center justify-center text-lg font-bold text-[#07162F]">
            {studentProfile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#07162F]">
              Welcome back, {studentProfile.name.split(" ")[0]}!
            </h2>
            <p className="text-xs text-[#5D667A]">
              {studentProfile.batch} · {studentProfile.status}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold border ${
              tierColors[studentProfile.tier]
            }`}
          >
            {studentProfile.tier} Tier
          </span>
          <button className="relative w-9 h-9 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] flex items-center justify-center hover:bg-[#EEF3FB] transition-colors">
            <Bell className="w-4 h-4 text-[#5D667A]" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[#E4EAF5]">
        {[
          { label: "Mentor", value: studentProfile.mentor, icon: User },
          { label: "Start Date", value: studentProfile.startDate, icon: Calendar },
          {
            label: "Overall Progress",
            value: "65%",
            icon: TrendingUp,
          },
          {
            label: "Current Module",
            value: "Neural Networks",
            icon: BookOpen,
          },
        ].map((stat) => (
          <div key={stat.label} className="p-3 rounded-xl bg-[#F8FAFF]">
            <div className="flex items-center gap-1.5 mb-1">
              <stat.icon className="w-3 h-3 text-[#8B93A7]" />
              <span className="text-[10px] text-[#8B93A7] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#07162F] truncate">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Action Card ─── */
function ActionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gradient-to-r from-[#155DFC] to-[#0F4BD8] rounded-2xl p-5 text-white"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold mb-1">Your Next Action</h3>
          <p className="text-xs text-white/80 mb-3">
            Complete your Neural Networks assignment before Mar 5, 2025.
          </p>
          <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#155DFC] text-xs font-semibold hover:bg-white/90 transition-colors">
            Complete Now
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Journey Timeline ─── */
function JourneyTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl border border-[#E4EAF5] p-6"
    >
      <h3 className="text-base font-bold text-[#07162F] mb-4 flex items-center gap-2">
        <Target className="w-4 h-4 text-[#155DFC]" />
        Your Journey
      </h3>
      <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
        {journeyStages.map((stage, i) => {
          const Icon =
            stage.status === "completed"
              ? CheckCircle2
              : stage.status === "locked"
              ? Lock
              : Circle;
          const colors = statusColors[stage.status];

          return (
            <div
              key={stage.id}
              className={`flex items-center gap-3 p-3 rounded-xl ${colors.bg} border ${colors.border}`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${colors.text}`} />
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-semibold ${colors.text}`}>
                  {stage.label}
                </p>
                {stage.status === "completed" && stage.date && (
                  <p className="text-[10px] text-gray-400">{stage.date}</p>
                )}
              </div>
              {stage.details && (
                <span className="text-[10px] text-gray-400 shrink-0">
                  {stage.details}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ─── Curriculum Accordion ─── */
function CurriculumAccordion() {
  const [openModule, setOpenModule] = useState<string | null>("foundation");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-2xl border border-[#E4EAF5] p-6"
    >
      <h3 className="text-base font-bold text-[#07162F] mb-4 flex items-center gap-2">
        <BookOpen className="w-4 h-4 text-[#155DFC]" />
        Curriculum Progress
      </h3>
      <div className="space-y-2">
        {curriculum.map((module) => {
          const completed = module.topics.filter((t) => t.completed).length;
          const total = module.topics.length;
          const pct = Math.round((completed / total) * 100);

          return (
            <div
              key={module.id}
              className="border border-[#E4EAF5] rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenModule(openModule === module.id ? null : module.id)
                }
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FAFCFF] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h4 className="text-sm font-semibold text-[#07162F]">
                      {module.title}
                    </h4>
                    <span className="text-[10px] text-[#5D667A] bg-[#EEF3FB] px-2 py-0.5 rounded-full">
                      {completed}/{total}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 bg-[#EEF3FB] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#155DFC] rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                {openModule === module.id ? (
                  <ChevronUp className="w-4 h-4 text-[#5D667A] ml-3" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#5D667A] ml-3" />
                )}
              </button>

              {openModule === module.id && (
                <div className="px-4 pb-4 border-t border-[#E4EAF5]">
                  <div className="space-y-2 mt-3">
                    {module.topics.map((topic) => (
                      <div
                        key={topic.id}
                        className="flex items-center gap-3 py-2"
                      >
                        {topic.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-[#155DFC] shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-300 shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-xs ${
                              topic.completed
                                ? "text-[#07162F]"
                                : "text-[#5D667A]"
                            }`}
                          >
                            {topic.name}
                          </p>
                          <p className="text-[10px] text-[#8B93A7]">
                            {topic.date} · {topic.mentor}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ─── Attendance & Marks ─── */
function AttendanceMarks() {
  const completedAssessments = assessments.filter(
    (a) => a.status === "completed"
  );
  const avgScore =
    completedAssessments.length > 0
      ? Math.round(
          completedAssessments.reduce((s, a) => s + a.score, 0) /
            completedAssessments.length
        )
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-2xl border border-[#E4EAF5] p-6"
    >
      <h3 className="text-base font-bold text-[#07162F] mb-4 flex items-center gap-2">
        <BarChart3 className="w-4 h-4 text-[#155DFC]" />
        Attendance & Marks
      </h3>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {[
          { label: "Attendance", value: "92%", color: "bg-[#EAF2FF] text-[#0F4BD8]" },
          { label: "Assessments Done", value: "4/5", color: "bg-[#E6F1FF] text-blue-700" },
          { label: "Avg Score", value: `${avgScore}%`, color: "bg-[#FFF5E0] text-amber-700" },
          { label: "Cert Status", value: "In Progress", color: "bg-[#FFD9E8] text-pink-700" },
        ].map((s) => (
          <div key={s.label} className={`p-3 rounded-xl ${s.color}`}>
            <p className="text-[10px] font-medium opacity-70 uppercase">
              {s.label}
            </p>
            <p className="text-lg font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[#E4EAF5]">
              <th className="text-left py-2 text-[#8B93A7] font-medium">
                Assessment
              </th>
              <th className="text-center py-2 text-[#8B93A7] font-medium">
                Score
              </th>
              <th className="text-center py-2 text-[#8B93A7] font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((a) => (
              <tr key={a.id} className="border-b border-[#EEF3FB]">
                <td className="py-2.5 text-[#07162F]">{a.name}</td>
                <td className="py-2.5 text-center">
                  {a.status === "completed" ? (
                    <span className="font-semibold text-[#07162F]">
                      {a.score}/{a.maxScore}
                    </span>
                  ) : (
                    <span className="text-[#9AA3B5]">-</span>
                  )}
                </td>
                <td className="py-2.5 text-center">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      a.status === "completed"
                        ? "bg-[#EFF5FF] text-[#0F4BD8]"
                        : a.status === "upcoming"
                        ? "bg-gray-50 text-gray-500"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

/* ─── Placement Readiness ─── */
function PlacementReadiness() {
  const checklist = [
    { label: "Resume Review", status: "completed", detail: "Approved" },
    { label: "LinkedIn Optimization", status: "completed", detail: "Done" },
    { label: "Mock Interview 1", status: "completed", detail: "Completed" },
    { label: "Mock Interview 2", status: "upcoming", detail: "Apr 18" },
    { label: "Portfolio Building", status: "in-progress", detail: "In Progress" },
    { label: "Placement Status", status: "locked", detail: "Not Started" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-2xl border border-[#E4EAF5] p-6"
    >
      <h3 className="text-base font-bold text-[#07162F] mb-4 flex items-center gap-2">
        <Award className="w-4 h-4 text-[#155DFC]" />
        Placement Readiness
      </h3>

      <div className="space-y-2">
        {checklist.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFF]"
          >
            {item.status === "completed" ? (
              <CheckCircle2 className="w-4 h-4 text-[#155DFC] shrink-0" />
            ) : item.status === "in-progress" ? (
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            ) : item.status === "upcoming" ? (
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
            ) : (
              <Lock className="w-4 h-4 text-gray-300 shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[#07162F]">{item.label}</p>
            </div>
            <span
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ${
                item.status === "completed"
                  ? "bg-[#EFF5FF] text-[#0F4BD8]"
                  : item.status === "in-progress"
                  ? "bg-amber-50 text-amber-700"
                  : item.status === "upcoming"
                  ? "bg-blue-50 text-blue-700"
                  : "bg-gray-50 text-gray-500"
              }`}
            >
              {item.detail}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Announcements ─── */
function AnnouncementsSection() {
  const typeColors: Record<string, string> = {
    info: "bg-blue-50 text-blue-700 border-blue-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    success: "bg-green-50 text-green-700 border-green-200",
    urgent: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white rounded-2xl border border-[#E4EAF5] p-6"
    >
      <h3 className="text-base font-bold text-[#07162F] mb-4 flex items-center gap-2">
        <Bell className="w-4 h-4 text-[#155DFC]" />
        Announcements
      </h3>

      <div className="space-y-3">
        {announcements.slice(0, 3).map((ann) => (
          <div
            key={ann.id}
            className={`p-3 rounded-xl border ${typeColors[ann.type]}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase opacity-70">
                {ann.category}
              </span>
              <span className="text-[10px] opacity-50">· {ann.date}</span>
            </div>
            <p className="text-xs font-semibold">{ann.title}</p>
            <p className="text-[11px] opacity-70 mt-0.5 line-clamp-2">
              {ann.message}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Dashboard ─── */
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF] flex">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <DashboardHeader />
          <ActionCard />

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <CurriculumAccordion />
              <AttendanceMarks />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <JourneyTimeline />
              <PlacementReadiness />
              <AnnouncementsSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
