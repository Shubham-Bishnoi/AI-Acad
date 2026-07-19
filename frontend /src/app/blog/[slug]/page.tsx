import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowUpRight, Quote } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/cards/BlogCard";
import BlogSidebar from "@/components/sections/BlogSidebar";
import {
  blogPosts,
  getCategoryStyle,
  getPostBySlug,
  getRelatedPosts,
  type ContentBlock,
} from "@/data/blog";

type Params = { slug: string };

/** Required for `output: "export"` — pre-renders one page per post. */
export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Post not found | GFF AI Academy" };

  return {
    title: `${post.title} | GFF AI Academy`,
    description: post.excerpt,
  };
}

/** Renders one editorial block. Mirrors the ContentBlock union in @/data/blog. */
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mb-4 mt-12 text-2xl font-bold tracking-tight text-[#07162F] sm:text-3xl">
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="mb-3 mt-10 text-lg font-bold text-[#07162F]">
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul className="mb-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#155DFC]"
              />
              <span className="text-base leading-relaxed text-[#5D667A]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <figure className="my-10 overflow-hidden rounded-3xl border border-[#E4EAF5] bg-[#F6F1FF] p-8 text-center sm:p-10">
          <Quote
            className="mx-auto mb-4 h-8 w-8 text-[#7C3AED]/40"
            aria-hidden="true"
          />
          <blockquote className="text-xl font-bold leading-snug text-[#07162F] sm:text-2xl">
            &ldquo;{block.text}&rdquo;
          </blockquote>
        </figure>
      );

    case "paragraph":
    default:
      return (
        <p className="mb-6 text-base leading-relaxed text-[#5D667A]">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const style = getCategoryStyle(post.category);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ------------------- Breadcrumb + hero image ------------------- */}
        <section className="gradient-hero relative overflow-hidden pb-12 pt-22 sm:pt-24 lg:pb-16 lg:pt-28">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#5D667A]">
              <ol className="flex flex-wrap items-center gap-2">
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
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-[#155DFC]"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#C7D3E8]">
                  /
                </li>
                <li aria-current="page" className="font-medium text-[#07162F]">
                  Blog Details
                </li>
              </ol>
            </nav>

            {post.image ? (
              <img
                src={post.image}
                alt={post.imageAlt ?? post.title}
                className="aspect-[16/9] w-full rounded-3xl object-cover shadow-soft-lg sm:aspect-[21/9]"
              />
            ) : (
              <div
                className="flex aspect-[16/9] w-full items-center justify-center rounded-3xl sm:aspect-[21/9]"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${style.from} 0%, ${style.to} 100%)`,
                }}
              />
            )}
          </div>
        </section>

        {/* --------------------- Article + sidebar --------------------- */}
        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Article */}
              <article className="lg:col-span-8">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[#5D667A]">
                  {post.authorImage ? (
                    <img
                      src={post.authorImage}
                      alt={`${post.author}, ${post.authorRole}`}
                      className="h-9 w-9 rounded-full object-cover object-top"
                    />
                  ) : null}
                  <span className="font-semibold text-[#07162F]">
                    {post.author}
                  </span>
                  <span aria-hidden="true" className="text-[#C7D3E8]">
                    •
                  </span>
                  <time dateTime={post.publishedAt}>{post.date}</time>
                  <span aria-hidden="true" className="text-[#C7D3E8]">
                    •
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readTime}
                  </span>
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={{
                      backgroundColor: style.pillBg,
                      color: style.pillText,
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <h1 className="mb-6 text-balance text-[2rem] font-bold leading-[1.15] tracking-tight text-[#07162F] sm:text-4xl lg:text-5xl">
                  {post.title}
                </h1>

                {/* Lead paragraph */}
                <p className="mb-2 text-lg font-medium leading-relaxed text-[#07162F]">
                  {post.excerpt}
                </p>

                <div
                  aria-hidden="true"
                  className="divider-brand my-8 w-24 rounded-full"
                />

                {post.body?.map((block, i) => (
                  <Block key={i} block={block} />
                ))}

                {/* Author footer */}
                <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-[#E4EAF5] bg-[#F8FAFF] p-6 sm:flex-row sm:items-center">
                  {post.authorImage ? (
                    <img
                      src={post.authorImage}
                      alt={`${post.author}, ${post.authorRole}`}
                      className="h-16 w-16 shrink-0 rounded-2xl object-cover object-top"
                    />
                  ) : null}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8B93A7]">
                      Written by
                    </p>
                    <p className="text-lg font-bold text-[#07162F]">
                      {post.author}
                    </p>
                    <p className="text-sm text-[#155DFC]">{post.authorRole}</p>
                  </div>
                  <Link
                    href="/blog"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#DDE5F3] bg-white px-5 py-2.5 text-sm font-semibold text-[#07162F] transition-all hover:border-[#155DFC] hover:text-[#155DFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC] sm:ml-auto sm:mt-0"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    All insights
                  </Link>
                </div>
              </article>

              {/* Sidebar — link mode (no local grid to filter here) */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------- Related ---------------------------- */}
        {related.length > 0 && (
          <section className="bg-[#F8FAFF] py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight text-[#07162F] sm:text-3xl">
                  Related Insights
                </h2>
                <Link
                  href="/blog"
                  className="hidden shrink-0 items-center gap-2 rounded-full bg-[#155DFC] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F4BD8] sm:inline-flex"
                >
                  View All
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item, i) => (
                  <BlogCard key={item.id} post={item} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
