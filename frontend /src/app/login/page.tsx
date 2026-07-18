"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "admin">("student");

  return (
    <div className="min-h-screen flex">
      {/* Left - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFD9E8]/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EAF2FF]/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 text-center max-w-sm px-8">
          <img
            src="/images/gff-ai-logo.png"
            alt="GFF AI Academy"
            width={792}
            height={240}
            className="mx-auto mb-6 h-16 w-auto max-w-[230px] object-contain"
          />
          <h2 className="text-2xl font-bold text-[#07162F] mb-3">
            Welcome Back!
          </h2>
          <p className="text-sm text-[#5D667A] leading-relaxed">
            Sign in to access your dashboard, track your progress, and connect
            with your mentors.
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          {/* Logo */}
          <Link href="/" className="mb-8 inline-flex items-center" aria-label="GFF AI Academy — home">
            <img
              src="/images/gff-ai-logo.png"
              alt="GFF AI Academy"
              width={792}
              height={240}
              className="h-11 w-auto max-w-[180px] object-contain"
            />
          </Link>

          <h1 className="text-2xl font-bold text-[#07162F] mb-1">
            Sign In
          </h1>
          <p className="text-sm text-[#5D667A] mb-6">
            Choose your portal to continue
          </p>

          {/* Role Toggle */}
          <div className="flex rounded-xl bg-[#EEF3FB] p-1 mb-6">
            <button
              onClick={() => setRole("student")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                role === "student"
                  ? "bg-white text-[#07162F] shadow-sm"
                  : "text-[#5D667A]"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole("admin")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                role === "admin"
                  ? "bg-white text-[#07162F] shadow-sm"
                  : "text-[#5D667A]"
              }`}
            >
              Admin
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#07162F] mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm text-[#07162F] placeholder:text-[#9AA3B5] focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#07162F] mb-1.5">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-[#E4EAF5] text-sm text-[#07162F] placeholder:text-[#9AA3B5] focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#E4EAF5] text-[#155DFC] focus:ring-[#155DFC]"
                />
                <span className="text-xs text-[#5D667A]">Remember me</span>
              </label>
              <button
                type="button"
                className="text-xs text-[#155DFC] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <Link
              href={role === "student" ? "/dashboard" : "/admin"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#155DFC] text-white text-sm font-semibold hover:bg-[#0F4BD8] transition-all"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </Link>
          </form>

          <p className="text-center text-xs text-[#5D667A] mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/apply" className="text-[#155DFC] hover:underline font-medium">
              Apply Now
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
