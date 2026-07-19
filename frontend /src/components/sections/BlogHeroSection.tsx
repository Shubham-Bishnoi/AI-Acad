"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, PenLine, Mail, ArrowUpRight, ArrowDown } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/BrandIcons";
import HeroBackground from "@/components/layout/HeroBackground";

/** Small floating chips shown around the founder portrait. */
const floatingCards = [
  {
    icon: Sparkles,
    label: "Daily AI Notes",
    className: "left-0 top-16 lg:-left-10",
    delay: 0.5,
  },
  {
    icon: PenLine,
    label: "Founder Letter",
    className: "right-0 top-4 lg:-right-6",
    delay: 0.65,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn Updates",
    className: "left-0 bottom-28 lg:-left-14",
    delay: 0.8,
  },
  {
    icon: Mail,
    label: "Academy Newsletter",
    className: "right-0 bottom-10 lg:-right-8",
    delay: 0.95,
  },
];

export default function BlogHeroSection() {
  return (
    <HeroBackground className="pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
          {/* ------------------------- Left: copy ------------------------- */}
          <div>
            {/* Breadcrumb */}
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 text-sm text-[#5D667A]"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-[#155DFC]"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#C7D3E8]">
                  /
                </li>
                <li aria-current="page" className="font-medium text-[#07162F]">
                  Blog
                </li>
              </ol>
            </motion.nav>

            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E4EAF5] bg-white/80 px-4 py-2 text-sm font-medium text-[#07162F] shadow-sm backdrop-blur-sm"
            >
              <PenLine className="h-4 w-4 text-[#D91F2D]" aria-hidden="true" />
              Founder Insights
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-[#07162F] sm:text-5xl lg:text-6xl"
            >
              <span className="block">AI Insights, Founder Notes</span>
              <span className="block text-brand-gradient">
                &amp; Academy Updates
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mb-8 max-w-xl text-base leading-relaxed text-[#5D667A] sm:text-lg"
            >
              Meet Ashish Chandra, Founder of GFF AI. Through this space we share
              practical AI insights, academy updates, newsletters, LinkedIn
              reflections, and the daily developments shaping the future of
              learning and intelligent transformation.
            </motion.p>

            {/* Founder mini-card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="mb-8 max-w-xl rounded-3xl border border-white/70 bg-white/70 p-5 shadow-brand-soft backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/images/AshishC.PNG"
                  alt="Ashish Chandra, Founder of GFF AI"
                  width={1024}
                  height={1536}
                  className="h-14 w-14 shrink-0 rounded-2xl object-cover object-top"
                />
                <div className="min-w-0">
                  <p className="text-base font-bold text-[#07162F]">
                    Ashish Chandra
                  </p>
                  <p className="text-sm text-[#155DFC]">Founder, GFF AI</p>
                </div>
              </div>
              <div className="divider-brand my-4 rounded-full" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-[#5D667A]">
                Ashish shares practical perspectives on AI adoption, learning
                pathways, emerging technologies, and the skills students and
                professionals need to stay ahead.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#insights"
                className="group inline-flex items-center gap-2 rounded-full bg-[#155DFC] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0F4BD8] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
              >
                Read Latest Insights
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="#linkedin-updates"
                className="inline-flex items-center gap-2 rounded-full border border-[#DDE5F3] bg-white px-6 py-3.5 text-sm font-semibold text-[#07162F] shadow-sm transition-all hover:border-[#155DFC] hover:text-[#155DFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
              >
                Follow Updates
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* ---------------------- Right: portrait ---------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            {/* red -> blue glow behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70 blur-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(217,31,45,0.35) 0%, rgba(124,58,237,0.30) 45%, rgba(21,93,252,0.35) 100%)",
              }}
            />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 p-3 shadow-soft-lg backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/images/AshishC.PNG"
                  alt="Ashish Chandra, Founder of GFF AI"
                  width={1024}
                  height={1536}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                {/* navy scrim so the caption stays readable */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07162F]/85 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-lg font-bold text-white">Ashish Chandra</p>
                  <p className="text-sm text-[#9DBBFF]">Founder, GFF AI</p>
                </div>
              </div>
            </div>

            {/* Floating chips — decorative, hidden from AT and on small screens */}
            {floatingCards.map(({ icon: Icon, label, className, delay }) => (
              <motion.div
                key={label}
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay }}
                className={`absolute hidden items-center gap-2 rounded-2xl border border-[#E4EAF5] bg-white/90 px-3.5 py-2.5 shadow-brand-soft backdrop-blur-md sm:flex ${className}`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EEF6FF]">
                  <Icon className="h-3.5 w-3.5 text-[#155DFC]" />
                </span>
                <span className="whitespace-nowrap text-xs font-semibold text-[#07162F]">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </HeroBackground>
  );
}
