"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "admin">("student");

  return (
    <div className="min-h-screen flex">
      {/* Left - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFD9E8]/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DFFBF1]/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 text-center max-w-sm px-8">
          <div className="w-16 h-16 rounded-2xl bg-[#00A86B] flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#071C1A] mb-3">
            Welcome Back!
          </h2>
          <p className="text-sm text-[#5A6B69] leading-relaxed">
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
          <Link href="/" className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-[#00A86B] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-[#071C1A]">
              GFF AI Academy
            </span>
          </Link>

          <h1 className="text-2xl font-bold text-[#071C1A] mb-1">
            Sign In
          </h1>
          <p className="text-sm text-[#5A6B69] mb-6">
            Choose your portal to continue
          </p>

          {/* Role Toggle */}
          <div className="flex rounded-xl bg-[#F0F4F2] p-1 mb-6">
            <button
              onClick={() => setRole("student")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                role === "student"
                  ? "bg-white text-[#071C1A] shadow-sm"
                  : "text-[#5A6B69]"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole("admin")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                role === "admin"
                  ? "bg-white text-[#071C1A] shadow-sm"
                  : "text-[#5A6B69]"
              }`}
            >
              Admin
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#071C1A] mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm text-[#071C1A] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B] transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#071C1A] mb-1.5">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E8EDE9] text-sm text-[#071C1A] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#00A86B]/30 focus:border-[#00A86B] transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#E8EDE9] text-[#00A86B] focus:ring-[#00A86B]"
                />
                <span className="text-xs text-[#5A6B69]">Remember me</span>
              </label>
              <button
                type="button"
                className="text-xs text-[#00A86B] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <Link
              href={role === "student" ? "/dashboard" : "/admin"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00A86B] text-white text-sm font-semibold hover:bg-[#008F5A] transition-all"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </Link>
          </form>

          <p className="text-center text-xs text-[#5A6B69] mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/apply" className="text-[#00A86B] hover:underline font-medium">
              Apply Now
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
