"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import {
  LinkedInIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/ui/BrandIcons";
import BlogCard from "@/components/cards/BlogCard";
import {
  blogCategories,
  getCategoryCounts,
  getRecentPosts,
} from "@/data/blog";

const socials = [
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: XIcon, label: "X (Twitter)" },
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: InstagramIcon, label: "Instagram" },
];

interface BlogSidebarProps {
  /** Omit both props to render in "link mode" (used on article pages), where
   *  categories navigate to /blog instead of filtering in place. */
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  /** Hide the newsletter card where the page already has one. */
  showNewsletter?: boolean;
}

/**
 * Newsletter capture. Front-end only for now — matches the existing pattern
 * used by CTASection/contact (preventDefault, no network call). When a
 * newsletter backend exists, POST from `handleSubmit` and keep the UI intact.
 */
function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-6 text-white">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#155DFC]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-[#D91F2D]/25 blur-3xl"
      />
      <div className="relative">
        <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
          <Mail className="h-5 w-5 text-white" aria-hidden="true" />
        </span>
        <h3 className="mb-2 text-lg font-bold">Join the AI Academy Newsletter</h3>
        <p className="mb-5 text-sm leading-relaxed text-white/70">
          Get founder notes, daily AI updates, student resources, and upcoming
          academy announcements.
        </p>

        {done ? (
          <p
            role="status"
            className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white"
          >
            <Check className="h-4 w-4" aria-hidden="true" />
            Thanks — you&apos;re on the list.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function BlogSidebar({
  activeCategory,
  onCategoryChange,
  showNewsletter = true,
}: BlogSidebarProps) {
  const counts = getCategoryCounts();
  const recent = getRecentPosts(4);
  const isFilterMode = typeof onCategoryChange === "function";

  return (
    <aside className="space-y-8" aria-label="Blog sidebar">
      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-[#E4EAF5] bg-white p-6 shadow-card"
      >
        <h3 className="mb-4 text-lg font-bold text-[#07162F]">Categories</h3>
        <ul className="space-y-1">
          {blogCategories.map((category) => {
            const isActive = category === activeCategory;
            const rowClass = `flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC] ${
              isActive
                ? "bg-[#EEF6FF] font-semibold text-[#155DFC]"
                : "text-[#5D667A] hover:bg-[#F8FAFF] hover:text-[#07162F]"
            }`;
            const inner = (
              <>
                <span>{category}</span>
                <span
                  className={`text-xs ${
                    isActive ? "text-[#155DFC]" : "text-[#8B93A7]"
                  }`}
                >
                  {counts[category] ?? 0}
                </span>
              </>
            );

            return (
              <li key={category}>
                {isFilterMode ? (
                  <button
                    type="button"
                    onClick={() => onCategoryChange?.(category)}
                    aria-current={isActive ? "true" : undefined}
                    className={rowClass}
                  >
                    {inner}
                  </button>
                ) : (
                  // Article pages have no local grid to filter, so categories
                  // navigate back to the listing instead.
                  <Link href="/blog#insights" className={rowClass}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>

      {/* Recent blogs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-3xl border border-[#E4EAF5] bg-white p-6 shadow-card"
      >
        <h3 className="mb-4 text-lg font-bold text-[#07162F]">Recent Blogs</h3>
        <div className="space-y-2">
          {recent.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} variant="compact" />
          ))}
        </div>
      </motion.div>

      {/* Newsletter */}
      {showNewsletter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <NewsletterCard />
        </motion.div>
      )}

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center gap-3 rounded-3xl border border-[#E4EAF5] bg-white p-6 shadow-card"
      >
        <span className="text-sm font-semibold text-[#07162F]">Follow us:</span>
        <div className="flex items-center gap-2">
          {socials.map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4EAF5] text-[#5D667A] transition-all hover:border-[#155DFC] hover:text-[#155DFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </motion.div>
    </aside>
  );
}
