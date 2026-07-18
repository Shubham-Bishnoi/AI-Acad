"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/BrandIcons";
import { getPostsBySource, type BlogSourceType } from "@/data/blog";

/**
 * Presentation config per feed type. When these become live feeds
 * (LinkedIn API, the daily AI update automation, a newsletter system),
 * only the data source changes — this mapping stays as-is.
 */
const sourceMeta: Record<
  string,
  { label: string; Icon: React.ElementType; accent: string; tint: string }
> = {
  linkedin: {
    label: "LinkedIn Post",
    Icon: LinkedInIcon,
    accent: "#0F4BD8",
    tint: "#EAF2FF",
  },
  "daily-update": {
    label: "Daily AI Update",
    Icon: Sparkles,
    accent: "#7C3AED",
    tint: "#F1EAFF",
  },
  newsletter: {
    label: "Newsletter Issue",
    Icon: Mail,
    accent: "#D91F2D",
    tint: "#FFE4EC",
  },
};

const FEED_TYPES: BlogSourceType[] = ["linkedin", "daily-update", "newsletter"];

export default function LinkedInUpdatesSection() {
  // One card per feed type, newest first, so the row always shows the mix.
  const posts = FEED_TYPES.map((type) => getPostsBySource([type])[0]).filter(
    Boolean,
  );

  return (
    <section
      id="linkedin-updates"
      className="relative overflow-hidden bg-[#F8FAFF] py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#155DFC]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#D91F2D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EEF6FF] px-4 py-2 text-sm font-medium text-[#155DFC]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#155DFC]"
              />
              Live from the team
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#07162F] sm:text-4xl">
              Latest from LinkedIn &amp; Daily AI Notes
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5D667A]">
              Short-form reflections, weekly signal roundups, and newsletter
              issues — published as the field moves.
            </p>
          </div>
          <Link
            href="/blog#insights"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#DDE5F3] bg-white px-5 py-2.5 text-sm font-semibold text-[#07162F] transition-all hover:border-[#155DFC] hover:text-[#155DFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
          >
            View all updates
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => {
            const meta = sourceMeta[post.sourceType] ?? sourceMeta.linkedin;
            const { Icon } = meta;

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group h-full"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4EAF5] bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
                >
                  {post.image ? (
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt ?? post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
                        style={{
                          backgroundColor: meta.tint,
                          color: meta.accent,
                        }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {meta.label}
                      </span>
                      <time
                        dateTime={post.publishedAt}
                        className="text-xs text-[#8B93A7]"
                      >
                        {post.date}
                      </time>
                    </div>

                    <h3 className="mb-3 text-lg font-bold leading-snug text-[#07162F] transition-colors group-hover:text-[#155DFC]">
                      {post.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-[#5D667A]">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-[#EEF3FB] pt-4">
                      <div className="flex items-center gap-2">
                        {post.authorImage ? (
                          <img
                            src={post.authorImage}
                            alt={`${post.author}, ${post.authorRole}`}
                            className="h-7 w-7 rounded-full object-cover object-top"
                          />
                        ) : null}
                        <div className="leading-tight">
                          <p className="text-xs font-semibold text-[#07162F]">
                            {post.author}
                          </p>
                          <p className="text-[11px] text-[#8B93A7]">
                            {post.authorRole}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#155DFC]">
                        Read More
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
