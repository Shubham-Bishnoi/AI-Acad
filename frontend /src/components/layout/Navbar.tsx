"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Mentors", href: "/mentors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navState, setNavState] = useState<"top" | "hidden" | "visible">("top");

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen) {
        previousScrollY = currentScrollY;
        setNavState(currentScrollY <= 20 ? "top" : "visible");
        return;
      }

      if (currentScrollY <= 20) {
        setNavState("top");
      } else if (currentScrollY > previousScrollY && currentScrollY > 80) {
        setNavState("hidden");
      } else if (currentScrollY < previousScrollY && currentScrollY > 80) {
        setNavState("visible");
      }

      previousScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const isTop = navState === "top";
  const isVisible = navState === "visible";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
        navState === "hidden" && !isOpen
          ? "-translate-y-full"
          : "translate-y-0",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 pt-3 sm:px-6 lg:px-8 lg:pt-4">
        <div
          className={clsx(
            "flex items-center justify-between px-4 lg:px-6 transition-all duration-300 ease-out",
            isTop
              ? "h-16 lg:h-[76px] bg-transparent border border-transparent shadow-none"
              : "h-14 lg:h-[68px] rounded-full border border-black/5 bg-white/85 shadow-[0_12px_40px_rgba(7,28,26,0.10)] backdrop-blur-xl",
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className={clsx(
                "flex items-center justify-center rounded-xl bg-[#00A86B] transition-all duration-300",
                isVisible ? "h-8 w-8" : "h-9 w-9",
              )}
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span
              className={clsx(
                "font-bold tracking-tight text-[#071C1A] transition-all duration-300",
                isVisible ? "text-base lg:text-[17px]" : "text-lg",
              )}
            >
              GFF AI Academy
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-medium text-[#5A6B69] transition-all duration-200 hover:text-[#071C1A]",
                  isTop ? "hover:bg-white/55" : "hover:bg-[#F0F4F2]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full px-5 py-2 text-sm font-medium text-[#5A6B69] transition-colors hover:text-[#071C1A]"
            >
              Student Login
            </Link>
            <Link
              href="/apply"
              className="group inline-flex items-center gap-2 rounded-full bg-[#00A86B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#008F5A] hover:shadow-md"
            >
              Apply Now
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "rounded-xl p-2 transition-colors lg:hidden",
              isTop ? "hover:bg-white/55" : "hover:bg-[#F0F4F2]",
            )}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-[#071C1A]" />
            ) : (
              <Menu className="w-5 h-5 text-[#071C1A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-3 overflow-hidden rounded-3xl border border-black/5 bg-white/95 shadow-[0_18px_50px_rgba(7,28,26,0.12)] backdrop-blur-xl lg:hidden sm:mx-6 lg:mx-8"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-[#5A6B69] hover:text-[#071C1A] hover:bg-[#F0F4F2] transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 space-y-2 border-t border-[#E8EDE9] pt-3">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-center text-[#5A6B69] hover:bg-[#F0F4F2] transition-all"
                >
                  Student Login
                </Link>
                <Link
                  href="/apply"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#00A86B] text-white text-sm font-semibold hover:bg-[#008F5A] transition-all"
                >
                  Apply Now
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
