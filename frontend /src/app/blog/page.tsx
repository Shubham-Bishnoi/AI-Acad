import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHeroSection from "@/components/sections/BlogHeroSection";
import BlogGridSection from "@/components/sections/BlogGridSection";
import LinkedInUpdatesSection from "@/components/sections/LinkedInUpdatesSection";

export const metadata: Metadata = {
  title: "Insights & Founder Notes | GFF AI Academy",
  description:
    "AI insights, founder notes from Ashish Chandra, daily AI updates, newsletters, and academy announcements from GFF AI Academy.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <BlogHeroSection />
        <BlogGridSection />
        <LinkedInUpdatesSection />
      </main>
      <Footer />
    </>
  );
}
