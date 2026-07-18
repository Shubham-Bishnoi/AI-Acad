import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CourseSection from "@/components/sections/CourseSection";
import MentorSection from "@/components/sections/MentorSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import JourneySection from "@/components/sections/JourneySection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CodingPotentialWaitlistSection from "@/components/sections/CodingPotentialWaitlistSection";
import FAQSection from "@/components/sections/FAQSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CourseSection />
        <MentorSection />
        <WhyChooseSection />
        <JourneySection />
        <TestimonialSection />
        <CodingPotentialWaitlistSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
