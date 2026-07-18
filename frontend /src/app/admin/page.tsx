"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  UserCheck,
  Layers,
  CalendarCheck,
  BarChart3,
  Megaphone,
  FileBarChart,
  ChevronDown,
  Search,
  ArrowLeft,
  Star,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";

const adminModules = [
  { id: "students", label: "Student Master", icon: Users, color: "#EAF2FF" },
  { id: "applications", label: "Applications", icon: FileBarChart, color: "#FFD9E8" },
  { id: "tiers", label: "Tier Allocation", icon: Star, color: "#E6F1FF" },
  { id: "batches", label: "Batch Management", icon: Layers, color: "#FFF5E0" },
  { id: "attendance", label: "Attendance", icon: CalendarCheck, color: "#E8E0FF" },
  { id: "marks", label: "Marks Update", icon: BarChart3, color: "#FFE8E0" },
  { id: "announcements", label: "Announcements", icon: Megaphone, color: "#EAF2FF" },
  { id: "reports", label: "Reports", icon: FileBarChart, color: "#FFD9E8" },
];

const mockStudents = [
  { id: "S001", name: "Aarav Sharma", email: "aarav@email.com", tier: "Gold", batch: "B3", status: "Learning", progress: 65 },
  { id: "S002", name: "Priya Patel", email: "priya@email.com", tier: "Silver", batch: "B3", status: "Learning", progress: 48 },
  { id: "S003", name: "Rohan Mehta", email: "rohan@email.com", tier: "Gold", batch: "B2", status: "Placement", progress: 92 },
  { id: "S004", name: "Ananya Krishnan", email: "ananya@email.com", tier: "Bronze", batch: "B4", status: "Onboarding", progress: 15 },
  { id: "S005", name: "Vikram Singh", email: "vikram@email.com", tier: "Silver", batch: "B2", status: "Learning", progress: 78 },
];

const tierOptions = ["Gold", "Silver", "Bronze"];
const statusOptions = ["Registered", "Assessment", "Interview", "Onboarding", "Learning", "Certification", "Placement", "Alumni"];

function StudentTable() {
  const [students, setStudents] = useState(mockStudents);
  const [search, setSearch] = useState("");

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase())
  );

  const updateTier = (id: string, tier: string) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, tier } : s)));
  };

  const updateStatus = (id: string, status: string) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  };

  return (
    <div>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA3B5]" />
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#E4EAF5]">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#F8FAFF]">
              <th className="text-left py-3 px-4 font-semibold text-[#07162F]">ID</th>
              <th className="text-left py-3 px-4 font-semibold text-[#07162F]">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-[#07162F]">Tier</th>
              <th className="text-left py-3 px-4 font-semibold text-[#07162F]">Batch</th>
              <th className="text-left py-3 px-4 font-semibold text-[#07162F]">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-[#07162F]">Progress</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((student) => (
              <tr key={student.id} className="border-t border-[#EEF3FB] hover:bg-[#FAFCFF]">
                <td className="py-3 px-4 text-[#5D667A]">{student.id}</td>
                <td className="py-3 px-4">
                  <p className="font-medium text-[#07162F]">{student.name}</p>
                  <p className="text-[10px] text-[#8B93A7]">{student.email}</p>
                </td>
                <td className="py-3 px-4">
                  <select
                    value={student.tier}
                    onChange={(e) => updateTier(student.id, e.target.value)}
                    className="text-xs bg-[#F8FAFF] border border-[#E4EAF5] rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#155DFC]"
                  >
                    {tierOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-3 px-4 text-[#5D667A]">{student.batch}</td>
                <td className="py-3 px-4">
                  <select
                    value={student.status}
                    onChange={(e) => updateStatus(student.id, e.target.value)}
                    className="text-xs bg-[#F8FAFF] border border-[#E4EAF5] rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#155DFC]"
                  >
                    {statusOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-[#EEF3FB] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#155DFC] rounded-full"
                        style={{ width: `${student.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-[#5D667A]">{student.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AnnouncementForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("info");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-[#07162F] mb-1.5">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30"
          placeholder="Announcement title"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#07162F] mb-1.5">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none"
          >
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="success">Success</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-[#07162F] mb-1.5">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none"
          >
            <option>General</option>
            <option>Academic</option>
            <option>Placement</option>
            <option>Guest Lecture</option>
            <option>System</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-[#07162F] mb-1.5">Message</label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 resize-none"
          placeholder="Announcement message"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2.5 rounded-full bg-[#155DFC] text-white text-sm font-semibold hover:bg-[#0F4BD8] transition-all"
      >
        Post Announcement
      </button>
    </form>
  );
}

export default function AdminPage() {
  const [activeModule, setActiveModule] = useState("students");

  const stats = [
    { label: "Total Students", value: "5,000+", icon: Users, color: "#EAF2FF" },
    { label: "Active Batches", value: "12", icon: Layers, color: "#FFD9E8" },
    { label: "Pending Apps", value: "234", icon: FileBarChart, color: "#E6F1FF" },
    { label: "Placement Rate", value: "85%", icon: CheckCircle2, color: "#FFF5E0" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Header */}
      <header className="bg-white border-b border-[#E4EAF5] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="w-8 h-8 rounded-lg bg-[#EEF3FB] flex items-center justify-center hover:bg-[#E4EAF5] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#5D667A]" />
            </Link>
            <div className="flex items-center gap-3">
              <img
                src="/images/gff-ai-logo.png"
                alt="GFF AI Academy"
                width={792}
                height={240}
                className="h-8 w-auto max-w-[130px] object-contain"
              />
              <span className="border-l border-[#E4EAF5] pl-3 text-sm font-bold text-[#07162F]">
                Admin Portal
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EAF2FF] flex items-center justify-center text-xs font-bold text-[#0F4BD8]">
              A
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-[#E4EAF5] p-5"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon className="w-5 h-5 text-[#07162F]" />
              </div>
              <p className="text-2xl font-bold text-[#07162F]">{stat.value}</p>
              <p className="text-xs text-[#5D667A]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Module Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {adminModules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeModule === mod.id
                  ? "bg-[#07162F] text-white"
                  : "bg-white text-[#5D667A] border border-[#E4EAF5] hover:bg-[#EEF3FB]"
              }`}
            >
              <mod.icon className="w-4 h-4" />
              {mod.label}
            </button>
          ))}
        </div>

        {/* Module Content */}
        <motion.div
          key={activeModule}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl border border-[#E4EAF5] p-6"
        >
          {activeModule === "students" && (
            <div>
              <h2 className="text-lg font-bold text-[#07162F] mb-4">
                Student Master
              </h2>
              <StudentTable />
            </div>
          )}

          {activeModule === "applications" && (
            <div>
              <h2 className="text-lg font-bold text-[#07162F] mb-4">
                Application Status
              </h2>
              <div className="overflow-x-auto rounded-xl border border-[#E4EAF5]">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-[#F8FAFF]">
                      <th className="text-left py-3 px-4 font-semibold">ID</th>
                      <th className="text-left py-3 px-4 font-semibold">Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Specialization</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "A001", name: "Neha Gupta", spec: "GenAI", status: "Pending Review" },
                      { id: "A002", name: "Kiran Reddy", spec: "ML", status: "Assessment Sent" },
                      { id: "A003", name: "Sneha Joshi", spec: "NLP", status: "Interview Scheduled" },
                      { id: "A004", name: "Arjun Nair", spec: "Computer Vision", status: "Pending Review" },
                    ].map((app) => (
                      <tr key={app.id} className="border-t border-[#EEF3FB]">
                        <td className="py-3 px-4 text-[#5D667A]">{app.id}</td>
                        <td className="py-3 px-4 font-medium text-[#07162F]">{app.name}</td>
                        <td className="py-3 px-4 text-[#5D667A]">{app.spec}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700">
                            {app.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-[10px] text-[#155DFC] font-medium hover:underline">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeModule === "announcements" && (
            <div>
              <h2 className="text-lg font-bold text-[#07162F] mb-4">
                Post Announcement
              </h2>
              <AnnouncementForm />
            </div>
          )}

          {!["students", "applications", "announcements"].includes(activeModule) && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-[#EEF3FB] flex items-center justify-center mx-auto mb-4">
                {(() => {
                  const mod = adminModules.find((m) => m.id === activeModule);
                  const Icon = mod?.icon || AlertCircle;
                  return <Icon className="w-7 h-7 text-[#9AA3B5]" />;
                })()}
              </div>
              <h3 className="text-base font-bold text-[#07162F] mb-1">
                {adminModules.find((m) => m.id === activeModule)?.label}
              </h3>
              <p className="text-sm text-[#5D667A]">
                This module is coming soon.
              </p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
