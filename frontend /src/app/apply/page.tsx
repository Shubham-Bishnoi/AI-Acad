"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
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
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFF] p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#EAF2FF] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-[#155DFC]" />
          </div>
          <h1 className="text-2xl font-bold text-[#07162F] mb-2">
            Application Submitted!
          </h1>
          <p className="text-sm text-[#5D667A] mb-6">
            Thank you for applying to GFF AI Academy. Our team will review your
            application and get back to you within 3-5 business days.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#155DFC] text-white text-sm font-semibold hover:bg-[#0F4BD8] transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Header */}
      <div className="bg-white border-b border-[#E4EAF5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="GFF AI Academy — home">
            <img
              src="/images/gff-ai-logo.png"
              alt="GFF AI Academy"
              width={792}
              height={240}
              className="h-9 w-auto max-w-[145px] object-contain sm:h-10 sm:max-w-[165px]"
            />
          </Link>
          <span className="text-xs text-[#5D667A]">Student Application</span>
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
            <h1 className="text-2xl sm:text-3xl font-bold text-[#07162F] mb-2">
              Student Application
            </h1>
            <p className="text-sm text-[#5D667A]">
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
            <div className="bg-white rounded-2xl border border-[#E4EAF5] p-6">
              <h3 className="text-sm font-bold text-[#07162F] mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-[#155DFC]" />
                Personal Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    College/University *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
                    placeholder="IIT Bombay"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    Degree/Course *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
                    placeholder="B.Tech Computer Science"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    Year/Semester *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
                    placeholder="3rd Year"
                  />
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="bg-white rounded-2xl border border-[#E4EAF5] p-6">
              <h3 className="text-sm font-bold text-[#07162F] mb-4 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-[#155DFC]" />
                Your Links (Optional)
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    GitHub
                  </label>
                  <div className="relative">
                    <Code2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA3B5]" />
                    <input
                      type="url"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
                      placeholder="github.com/username"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    LinkedIn
                  </label>
                  <div className="relative">
                    <ExternalLink className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA3B5]" />
                    <input
                      type="url"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    Portfolio/Projects
                  </label>
                  <div className="relative">
                    <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA3B5]" />
                    <input
                      type="url"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]"
                      placeholder="your-portfolio.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl border border-[#E4EAF5] p-6">
              <h3 className="text-sm font-bold text-[#07162F] mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#155DFC]" />
                Program Preferences
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-2">
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
                            ? "bg-[#155DFC] text-white"
                            : "bg-[#EEF3FB] text-[#5D667A] hover:bg-[#E4EAF5]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#07162F] mb-1.5">
                    Statement of Interest *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] resize-none"
                    placeholder="Why do you want to join GFF AI Academy? What are your career goals?"
                  />
                </div>
              </div>
            </div>

            {/* Resume */}
            <div className="bg-white rounded-2xl border border-[#E4EAF5] p-6">
              <h3 className="text-sm font-bold text-[#07162F] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#155DFC]" />
                Resume/CV (Optional)
              </h3>
              <div className="border-2 border-dashed border-[#E4EAF5] rounded-xl p-8 text-center hover:border-[#155DFC]/40 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-[#9AA3B5] mx-auto mb-2" />
                <p className="text-sm text-[#5D667A]">
                  Drag and drop your resume here, or{" "}
                  <span className="text-[#155DFC] font-medium">browse</span>
                </p>
                <p className="text-xs text-[#9AA3B5] mt-1">
                  Supports PDF, DOC up to 5MB
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between pt-4">
              <Link
                href="/"
                className="text-sm text-[#5D667A] hover:text-[#07162F] transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#155DFC] text-white text-sm font-semibold hover:bg-[#0F4BD8] transition-all"
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
