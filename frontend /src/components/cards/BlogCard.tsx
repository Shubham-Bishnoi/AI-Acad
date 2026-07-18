"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  PenLine,
  Sparkles,
  Newspaper,
  GraduationCap,
  BookOpen,
  Briefcase,
  Wrench,
  Brain,
} from "lucide-react";
import { LinkedInIcon } from "@/components/ui/BrandIcons";
import { getCategoryStyle, type BlogPost } from "@/data/blog";

/** Icon lookup for the gradient tiles. Keys match `categoryStyles[].icon`. */
const icons: Record<string, React.ElementType> = {
  PenLine,
  Sparkles,
  Newspaper,
  GraduationCap,
  Linkedin: LinkedInIcon,
  BookOpen,
  Briefcase,
  Wrench,
  Brain,
};

type Variant = "featured" | "default" | "compact";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  variant?: Variant;
}

/**
 * Visual for a post. Uses `post.image` when a CMS supplies one, otherwise
 * falls back to a branded gradient tile so the grid never shows broken images.
 */
function CardVisual({
  post,
  className,
  iconSize,
}: {
  post: BlogPost;
  className: string;
  iconSize: string;
}) {
  const style = getCategoryStyle(post.category);
  const Icon = icons[style.icon] ?? Sparkles;

  if (post.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={post.image}
          alt={post.imageAlt ?? post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${style.from} 0%, ${style.to} 100%)`,
      }}
    >
      {/* dot matrix, echoing the poster artwork */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-6 -top-8 h-32 w-32 rounded-full bg-white/15 blur-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
          <Icon className={`${iconSize} text-white`} />
        </div>
      </div>
    </div>
  );
}

function CategoryPill({ category }: { category: string }) {
  const style = getCategoryStyle(category);
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold"
      style={{ backgroundColor: style.pillBg, color: style.pillText }}
    >
      {category}
    </span>
  );
}

function Meta({ post, small = false }: { post: BlogPost; small?: boolean }) {
  const size = small ? "text-[11px]" : "text-xs";
  return (
    <div className={`flex flex-wrap items-center gap-2 ${size} text-[#5D667A]`}>
      {post.authorImage ? (
        <img
          src={post.authorImage}
          alt={`${post.author}, ${post.authorRole}`}
          className="h-5 w-5 rounded-full object-cover object-top"
        />
      ) : null}
      <span className="font-medium text-[#07162F]">{post.author}</span>
      <span aria-hidden="true" className="text-[#C7D3E8]">
        •
      </span>
      <time dateTime={post.publishedAt}>{post.date}</time>
      <span aria-hidden="true" className="text-[#C7D3E8]">
        •
      </span>
      <span className="inline-flex items-center gap-1 text-[#8B93A7]">
        <Clock className={small ? "h-3 w-3" : "h-3.5 w-3.5"} aria-hidden="true" />
        {post.readTime}
      </span>
    </div>
  );
}

export default function BlogCard({
  post,
  index = 0,
  variant = "default",
}: BlogCardProps) {
  const href = `/blog/${post.slug}`;

  /* ----------------------------- compact ----------------------------- */
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.06 }}
      >
        <Link
          href={href}
          className="group flex items-start gap-3 rounded-2xl p-2 transition-colors hover:bg-[#EEF6FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
        >
          <CardVisual
            post={post}
            className="h-16 w-16 shrink-0 rounded-xl"
            iconSize="h-5 w-5"
          />
          <div className="min-w-0">
            <h4 className="line-clamp-2 text-sm font-bold text-[#07162F] transition-colors group-hover:text-[#155DFC]">
              {post.title}
            </h4>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#5D667A]">
              {post.excerpt}
            </p>
          </div>
        </Link>
      </motion.div>
    );
  }

  /* ----------------------------- featured ---------------------------- */
  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group h-full"
      >
        <Link
          href={href}
          className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4EAF5] bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
        >
          <CardVisual
            post={post}
            className="h-56 w-full sm:h-72"
            iconSize="h-10 w-10"
          />
          <div className="flex flex-1 flex-col p-6 lg:p-7">
            <div className="mb-3 flex items-center gap-2">
              <CategoryPill category={post.category} />
              <span className="rounded-full bg-[#07162F] px-3 py-1 text-[11px] font-semibold text-white">
                Featured
              </span>
            </div>
            <h3 className="mb-3 text-xl font-bold leading-snug text-[#07162F] transition-colors group-hover:text-[#155DFC] lg:text-2xl">
              {post.title}
            </h3>
            <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-[#5D667A]">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center justify-between gap-3">
              <Meta post={post} />
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF6FF] text-[#155DFC] transition-colors group-hover:bg-brand-gradient group-hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  /* ----------------------------- default ----------------------------- */
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group h-full"
    >
      <Link
        href={href}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4EAF5] bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155DFC]"
      >
        <CardVisual post={post} className="h-44 w-full" iconSize="h-7 w-7" />
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3">
            <CategoryPill category={post.category} />
          </div>
          <h3 className="mb-2 line-clamp-2 text-base font-bold leading-snug text-[#07162F] transition-colors group-hover:text-[#155DFC]">
            {post.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#5D667A]">
            {post.excerpt}
          </p>
          <div className="mt-auto border-t border-[#EEF3FB] pt-3">
            <Meta post={post} small />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
