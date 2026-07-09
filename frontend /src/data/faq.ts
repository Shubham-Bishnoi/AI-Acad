export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who can join GFF AI Academy?",
    answer:
      "GFF AI Academy welcomes anyone passionate about learning AI. Whether you're a college student, working professional, or career switcher, our programs are designed to accommodate various backgrounds. No prior AI experience is required for our beginner tracks.",
  },
  {
    id: "faq-2",
    question: "Is prior coding experience required?",
    answer:
      "Not necessarily. Our AI Foundations & Python track starts from scratch. However, basic familiarity with programming concepts is helpful for intermediate and advanced tracks. We offer pre-course materials to help you get up to speed.",
  },
  {
    id: "faq-3",
    question: "Will I get a certificate after completion?",
    answer:
      "Yes! Upon successful completion of your learning track and the final assessment, you'll receive an industry-recognized certificate from GFF AI Academy. Our certificates are valued by hiring partners.",
  },
  {
    id: "faq-4",
    question: "How is my progress tracked?",
    answer:
      "Your progress is tracked through our comprehensive dashboard. It includes session attendance, assignment scores, project submissions, mentor feedback, and milestone completion. You and your assigned mentor can monitor your journey in real-time.",
  },
  {
    id: "faq-5",
    question: "Will there be hands-on projects?",
    answer:
      "Absolutely. Every learning track includes multiple hands-on projects that simulate real-world AI challenges. You'll build a portfolio of projects that you can showcase to potential employers.",
  },
  {
    id: "faq-6",
    question: "Is placement support included?",
    answer:
      "Yes, placement support is included for Gold and Silver tier students. This includes resume reviews, mock interviews, portfolio building, and referrals to our 150+ hiring partners. Our placement team works with you until you land your dream role.",
  },
  {
    id: "faq-7",
    question: "What is the tier system?",
    answer:
      "Students are allocated into Gold, Silver, or Bronze tiers based on their entrance assessment and interview performance. Gold tier receives maximum mentor attention, priority placement support, and exclusive resources. Silver and Bronze tiers offer excellent value with scaled support.",
  },
  {
    id: "faq-8",
    question: "Can I switch my specialization?",
    answer:
      "Yes, you can request a specialization switch within the first two weeks of onboarding. After that, switching is possible but may require additional assessments. Contact your mentor to discuss options.",
  },
];
