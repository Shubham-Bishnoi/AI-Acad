"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, MessageCircle, Globe, ExternalLink, Camera, Mail, Phone, MapPin } from "lucide-react";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Mentors", href: "/mentors" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Student Dashboard", href: "/dashboard" },
  { label: "Apply Now", href: "/apply" },
  { label: "Student Login", href: "/login" },
  { label: "FAQ", href: "/about#faq" },
];

export default function Footer() {
  return (
    <footer className="gradient-footer relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#DFFBF1]/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD9E8]/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#00A86B] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-[#071C1A]">
                GFF AI Academy
              </span>
            </Link>
            <p className="text-sm text-[#5A6B69] leading-relaxed max-w-xs mb-6">
              Master practical AI skills through structured learning, mentor-led
              guidance, real projects, and placement readiness.
            </p>
            <div className="flex items-center gap-3">
              {[MessageCircle, Globe, ExternalLink, Camera].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center hover:border-[#00A86B] hover:text-[#00A86B] transition-colors text-[#5A6B69]"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-semibold text-[#071C1A] mb-4">Pages</h4>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5A6B69] hover:text-[#00A86B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-[#071C1A] mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5A6B69] hover:text-[#00A86B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-[#071C1A] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00A86B] mt-0.5 shrink-0" />
                <span className="text-sm text-[#5A6B69]">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00A86B] mt-0.5 shrink-0" />
                <span className="text-sm text-[#5A6B69]">
                  hello@gffaiacademy.in
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00A86B] mt-0.5 shrink-0" />
                <span className="text-sm text-[#5A6B69]">
                  Bengaluru, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E0E8E4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8B9A97]">
            &copy; {new Date().getFullYear()} GFF AI Academy. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-[#8B9A97] hover:text-[#5A6B69] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-[#8B9A97] hover:text-[#5A6B69] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
