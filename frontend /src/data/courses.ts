export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  sessions: number;
  tags: string[];
  image: string;
  popular?: boolean;
  curriculum?: string[];
}

export const courseCategories = [
  "All Categories",
  "AI Foundations",
  "Python",
  "Machine Learning",
  "Generative AI",
  "Projects",
  "Placement Prep",
];

export const courses: Course[] = [
  {
    id: "ai-foundations",
    title: "AI Foundations & Python for Beginners",
    description:
      "Start your AI journey with Python fundamentals, data types, control flow, functions, and an introduction to AI concepts. No prior experience needed.",
    category: "AI Foundations",
    level: "Beginner",
    duration: "6 weeks",
    sessions: 24,
    tags: ["Beginner Friendly", "Mentor Led", "Project Based", "Certification"],
    image: "/images/code.jpg",
    popular: true,
    curriculum: [
      "Python Basics & Environment Setup",
      "Data Types, Variables & Operators",
      "Control Flow & Loops",
      "Functions & Modules",
      "Introduction to AI & ML Concepts",
      "Your First AI Project",
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning Essentials",
    description:
      "Master core ML algorithms including regression, classification, clustering, and model evaluation. Build real-world predictive models.",
    category: "Machine Learning",
    level: "Intermediate",
    duration: "8 weeks",
    sessions: 32,
    tags: ["Project Based", "Mentor Led", "Certification"],
    image: "/images/digital.jpg",
    popular: true,
    curriculum: [
      "ML Pipeline & Data Preprocessing",
      "Supervised Learning: Regression",
      "Supervised Learning: Classification",
      "Unsupervised Learning: Clustering",
      "Model Evaluation & Validation",
      "Feature Engineering",
      "Ensemble Methods",
      "Capstone ML Project",
    ],
  },
  {
    id: "generative-ai",
    title: "Generative AI & Prompt Engineering",
    description:
      "Learn to leverage LLMs, build prompts, create AI-powered applications, and understand the architecture behind ChatGPT and similar models.",
    category: "Generative AI",
    level: "Intermediate",
    duration: "6 weeks",
    sessions: 24,
    tags: ["Beginner Friendly", "Mentor Led", "Project Based"],
    image: "/images/stakeholder.jpg",
    popular: true,
    curriculum: [
      "Introduction to Generative AI",
      "LLM Architecture & Tokenization",
      "Prompt Engineering Fundamentals",
      "Advanced Prompting Techniques",
      "Building AI Applications",
      "Final GenAI Project",
    ],
  },
  {
    id: "ai-agents",
    title: "AI Agents and Automation",
    description:
      "Build autonomous AI agents, understand agent architectures, tool use, and create automated workflows using modern AI frameworks.",
    category: "Generative AI",
    level: "Advanced",
    duration: "5 weeks",
    sessions: 20,
    tags: ["Project Based", "Mentor Led"],
    image: "/images/html-css.jpg",
    curriculum: [
      "Agent Architecture & Design Patterns",
      "Tool Use & Function Calling",
      "Memory & Context Management",
      "Multi-Agent Systems",
      "Production AI Agent Project",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics with AI",
    description:
      "Learn to analyze data using AI-powered tools, create visualizations, derive insights, and build data-driven decision systems.",
    category: "AI Foundations",
    level: "Beginner",
    duration: "5 weeks",
    sessions: 20,
    tags: ["Beginner Friendly", "Certification"],
    image: "/images/google ads.jpg",
    curriculum: [
      "Data Collection & Cleaning",
      "Exploratory Data Analysis",
      "Visualization with Python",
      "AI-Powered Insights",
      "Analytics Dashboard Project",
    ],
  },
  {
    id: "capstone-project",
    title: "Capstone Project & Portfolio Building",
    description:
      "Apply everything you've learned to build a comprehensive AI project, document it, and create a professional portfolio.",
    category: "Projects",
    level: "Advanced",
    duration: "4 weeks",
    sessions: 16,
    tags: ["Project Based", "Certification", "Placement Ready"],
    image: "/images/ux research.jpg",
    curriculum: [
      "Project Planning & Scope Definition",
      "Data Collection & Processing",
      "Model Development & Training",
      "Portfolio Documentation & Presentation",
    ],
  },
  {
    id: "placement-prep",
    title: "Placement Preparation & Interview Readiness",
    description:
      "Resume building, mock interviews, aptitude training, and soft skills development to ensure you're placement-ready.",
    category: "Placement Prep",
    level: "All Levels",
    duration: "3 weeks",
    sessions: 12,
    tags: ["Certification", "Placement Ready"],
    image: "/images/design.jpg",
    curriculum: [
      "Resume Building & LinkedIn Optimization",
      "Technical Interview Preparation",
      "Mock Interviews & Feedback",
      "Soft Skills & Communication",
    ],
  },
  {
    id: "deep-learning",
    title: "Deep Learning & Neural Networks",
    description:
      "Dive into neural networks, CNNs, RNNs, and transfer learning. Build and train deep learning models for computer vision and NLP tasks.",
    category: "Machine Learning",
    level: "Advanced",
    duration: "8 weeks",
    sessions: 32,
    tags: ["Project Based", "Mentor Led", "Certification"],
    image: "/images/financial.jpg",
    curriculum: [
      "Neural Network Fundamentals",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks & LSTMs",
      "Transfer Learning & Fine-tuning",
      "Computer Vision Applications",
      "NLP with Deep Learning",
      "Model Deployment",
      "Deep Learning Capstone",
    ],
  },
];
