import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/FAQSection";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import AboutMissionSection from "@/components/sections/about/AboutMissionSection";
import AboutWhyExistSection from "@/components/sections/about/AboutWhyExistSection";
import AboutPhilosophySection from "@/components/sections/about/AboutPhilosophySection";
import AboutAchievementSection from "@/components/sections/about/AboutAchievementSection";
import AboutJourneySection from "@/components/sections/about/AboutJourneySection";
import AboutJoinCardsSection from "@/components/sections/about/AboutJoinCardsSection";
import AboutDifferenceSection from "@/components/sections/about/AboutDifferenceSection";
import AboutCTASection from "@/components/sections/about/AboutCTASection";

export const metadata: Metadata = {
  title: "About GFF AI Academy | Building the Next Generation of AI Talent",
  description:
    "GFF AI Academy helps students, professionals, and institutions build practical AI skills through structured learning, mentor-led guidance, real projects, certification, and placement readiness.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutHeroSection />
        <AboutMissionSection />
        <AboutWhyExistSection />
        <AboutAchievementSection />
        <AboutPhilosophySection />
        <AboutJourneySection />
        <AboutDifferenceSection />
        <AboutJoinCardsSection />
        <FAQSection />
        <AboutCTASection />
      </main>
      <Footer />
    </>
  );
}
