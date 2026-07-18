"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import BlogCard from "@/components/cards/BlogCard";
import BlogSidebar from "@/components/sections/BlogSidebar";
import { getFeaturedPost, getPostsByCategory } from "@/data/blog";

const PAGE_SIZE = 6;

export default function BlogGridSection() {
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const featured = getFeaturedPost();

  const posts = useMemo(() => {
    const list = getPostsByCategory(activeCategory);
    // The featured post gets its own card in the "All Insights" view, so it is
    // filtered out of the grid there to avoid showing it twice.
    return activeCategory === "All Insights"
      ? list.filter((p) => p.slug !== featured.slug)
      : list;
  }, [activeCategory, featured.slug]);

  const shown = posts.slice(0, visible);
  const hasMore = posts.length > visible;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisible(PAGE_SIZE);
  };

  return (
    <section id="insights" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#07162F] sm:text-4xl lg:text-5xl">
            Explore All Insights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5D667A] sm:text-lg">
            Founder notes, daily AI updates, academy announcements, and practical
            guidance for learners building a career in AI.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ------------------------- Main column ------------------------- */}
          <div className="lg:col-span-8">
            {activeCategory !== "All Insights" && (
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="text-sm text-[#5D667A]">
                  Showing{" "}
                  <span className="font-semibold text-[#07162F]">
                    {posts.length}
                  </span>{" "}
                  {posts.length === 1 ? "post" : "posts"} in
                </span>
                <span className="rounded-full bg-[#EEF6FF] px-3 py-1 text-xs font-semibold text-[#155DFC]">
                  {activeCategory}
                </span>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("All Insights")}
                  className="text-sm font-medium text-[#155DFC] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
                >
                  Clear filter
                </button>
              </div>
            )}

            {/* Featured card only in the unfiltered view */}
            {activeCategory === "All Insights" && (
              <div className="mb-6">
                <BlogCard post={featured} variant="featured" />
              </div>
            )}

            {shown.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {shown.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-[#DDE5F3] bg-[#F8FAFF] p-12 text-center">
                <SearchX
                  className="mx-auto mb-3 h-8 w-8 text-[#8B93A7]"
                  aria-hidden="true"
                />
                <p className="font-semibold text-[#07162F]">No posts yet</p>
                <p className="mt-1 text-sm text-[#5D667A]">
                  We haven&apos;t published in this category yet — check back soon.
                </p>
              </div>
            )}

            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#07162F] px-7 py-3 text-sm font-semibold text-[#07162F] transition-colors hover:bg-[#07162F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
                >
                  View More Blogs
                </button>
              </div>
            )}
          </div>

          {/* --------------------------- Sidebar --------------------------- */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
