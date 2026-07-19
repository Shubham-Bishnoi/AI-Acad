"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, PenLine } from "lucide-react";
import BlogCard from "@/components/cards/BlogCard";
import { getFeaturedPost, getSortedPosts } from "@/data/blog";

/**
 * Homepage teaser for /blog. Reads from the shared blog data so the homepage
 * and the blog page can never drift apart.
 */
export default function BlogSection() {
  const founderNote = getFeaturedPost();
  const latest = getSortedPosts()
    .filter((p) => p.slug !== founderNote.slug)
    .slice(0, 3);

  return (
    <section className="bg-[#F8FAFF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#07162F] sm:text-4xl">
              AI Insights &amp; Academy Updates
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5D667A]">
              Founder notes, daily AI updates, and practical guidance for
              learners building a career in AI.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#155DFC] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F4BD8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC] sm:inline-flex"
          >
            View All Insights
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Founder note highlight */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group lg:col-span-1"
          >
            <Link
              href={`/blog/${founderNote.slug}`}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-brand-navy p-7 text-white transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#155DFC]/30 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-[#D91F2D]/25 blur-3xl"
              />
              <div className="relative flex h-full flex-col">
                <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                  <PenLine className="h-3.5 w-3.5" aria-hidden="true" />
                  Founder Note
                </span>
                <h3 className="mb-3 text-xl font-bold leading-snug">
                  {founderNote.title}
                </h3>
                <p className="mb-6 line-clamp-4 text-sm leading-relaxed text-white/70">
                  {founderNote.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
                  {founderNote.authorImage ? (
                    <img
                      src={founderNote.authorImage}
                      alt={`${founderNote.author}, ${founderNote.authorRole}`}
                      className="h-10 w-10 rounded-full object-cover object-top"
                    />
                  ) : null}
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">{founderNote.author}</p>
                    <p className="text-xs text-[#9DBBFF]">
                      {founderNote.authorRole}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Latest posts */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            {latest.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#155DFC] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F4BD8]"
          >
            View All Insights
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
