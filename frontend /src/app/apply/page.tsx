"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Upload,
  ArrowRight,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Building2,
  BookOpen,
  Calendar,
  Code2,
  ExternalLink,
  Link2,
  FileText,
} from "lucide-react";
import Link from "next/link";

const specializations = [
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Generative AI",
  "AI Agents & Automation",
  "Data Science",
  "MLOps",
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [spec, setSpec] = useState("");

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAF9] p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#DFFBF1] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-[#00A86B]" />
          </div>
          <h1 className="text-2xl font-bold text-[#071C1A] mb-2">
            Application Submitted!
          </h1>
          <p className="text-sm text-[#5A6B69] mb-6">
            Thank you for applying to GFF AI Academy. Our team will review your
            application and get back to you within 3-5 business days.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A86B] text-white text-sm font-semibold hover:bg-[#008F5A] transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      {/* Header */}
      <div className="bg-white border-b border-[#E8EDE9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00A86B] flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-[#071C1A]">
              GFF AI Academy
            </span>
          </Link>
          <span className="text-xs text-[#5A6B69]">Student Application</span>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#071C1A] mb-2">
              Student Application
            </h1>
            <p className="text-sm text-[#5A6B69]">
              Fill in your details below to apply for the AI program.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            {/* Personal Info */}
            <div className="bg-white rounded-2xl border border-[#E8EDE9] p-6">
              <h3 className="text-sm font-bold text-[#071C1A] mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-[#00A86B]" />
                Personal Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B]"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    College/University *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B]"
                    placeholder="IIT Bombay"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    Degree/Course *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B]"
                    placeholder="B.Tech Computer Science"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    Year/Semester *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B]"
                    placeholder="3rd Year"
                  />
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="bg-white rounded-2xl border border-[#E8EDE9] p-6">
              <h3 className="text-sm font-bold text-[#071C1A] mb-4 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-[#00A86B]" />
                Your Links (Optional)
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    GitHub
                  </label>
                  <div className="relative">
                    <Code2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3A3A3]" />
                    <input
                      type="url"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B]"
                      placeholder="github.com/username"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    LinkedIn
                  </label>
                  <div className="relative">
                    <ExternalLink className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3A3A3]" />
                    <input
                      type="url"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B]"
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    Portfolio/Projects
                  </label>
                  <div className="relative">
                    <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3A3A3]" />
                    <input
                      type="url"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B]"
                      placeholder="your-portfolio.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl border border-[#E8EDE9] p-6">
              <h3 className="text-sm font-bold text-[#071C1A] mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#00A86B]" />
                Program Preferences
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-2">
                    Preferred Specialization *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {specializations.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSpec(s)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                          spec === s
                            ? "bg-[#00A86B] text-white"
                            : "bg-[#F0F4F2] text-[#5A6B69] hover:bg-[#E8EDE9]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#071C1A] mb-1.5">
                    Statement of Interest *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B] resize-none"
                    placeholder="Why do you want to join GFF AI Academy? What are your career goals?"
                  />
                </div>
              </div>
            </div>

            {/* Resume */}
            <div className="bg-white rounded-2xl border border-[#E8EDE9] p-6">
              <h3 className="text-sm font-bold text-[#071C1A] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#00A86B]" />
                Resume/CV (Optional)
              </h3>
              <div className="border-2 border-dashed border-[#E8EDE9] rounded-xl p-8 text-center hover:border-[#00A86B]/40 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-[#A3A3A3] mx-auto mb-2" />
                <p className="text-sm text-[#5A6B69]">
                  Drag and drop your resume here, or{" "}
                  <span className="text-[#00A86B] font-medium">browse</span>
                </p>
                <p className="text-xs text-[#A3A3A3] mt-1">
                  Supports PDF, DOC up to 5MB
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between pt-4">
              <Link
                href="/"
                className="text-sm text-[#5A6B69] hover:text-[#071C1A] transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#00A86B] text-white text-sm font-semibold hover:bg-[#008F5A] transition-all"
              >
                Submit Application
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
