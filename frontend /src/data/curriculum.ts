export interface CurriculumModule {
  id: string;
  title: string;
  topics: CurriculumTopic[];
}

export interface CurriculumTopic {
  id: string;
  name: string;
  date: string;
  mentor: string;
  completed: boolean;
  resources: string[];
}

export const curriculum: CurriculumModule[] = [
  {
    id: "foundation",
    title: "Foundation Modules",
    topics: [
      {
        id: "py-basics",
        name: "Python Programming Basics",
        date: "Jan 20, 2025",
        mentor: "James Wilson",
        completed: true,
        resources: ["Python Cheat Sheet", "Jupyter Notebook"],
      },
      {
        id: "data-structures",
        name: "Data Structures & Algorithms",
        date: "Jan 25, 2025",
        mentor: "James Wilson",
        completed: true,
        resources: ["DSA Guide", "Practice Problems"],
      },
      {
        id: "numpy-pandas",
        name: "NumPy & Pandas for Data Science",
        date: "Feb 1, 2025",
        mentor: "Marcus Thompson",
        completed: true,
        resources: ["Pandas Cheat Sheet", "Dataset Pack"],
      },
      {
        id: "data-viz",
        name: "Data Visualization with Matplotlib & Seaborn",
        date: "Feb 5, 2025",
        mentor: "Marcus Thompson",
        completed: true,
        resources: ["Visualization Guide", "Color Palette Tool"],
      },
    ],
  },
  {
    id: "applied-ai",
    title: "Applied AI Modules",
    topics: [
      {
        id: "ml-intro",
        name: "Introduction to Machine Learning",
        date: "Feb 10, 2025",
        mentor: "Dr. Sarah Chen",
        completed: true,
        resources: ["ML Slides", "Jupyter Notebook"],
      },
      {
        id: "supervised",
        name: "Supervised Learning: Regression & Classification",
        date: "Feb 15, 2025",
        mentor: "Dr. Sarah Chen",
        completed: true,
        resources: ["Scikit-learn Guide", "Dataset"],
      },
      {
        id: "unsupervised",
        name: "Unsupervised Learning & Clustering",
        date: "Feb 22, 2025",
        mentor: "Dr. Sarah Chen",
        completed: false,
        resources: ["Clustering Algorithms Guide"],
      },
      {
        id: "neural-nets",
        name: "Neural Networks & Deep Learning Basics",
        date: "Mar 1, 2025",
        mentor: "Alex Kim",
        completed: false,
        resources: ["PyTorch Basics", "NN Visualization Tool"],
      },
      {
        id: "nlp",
        name: "Natural Language Processing Fundamentals",
        date: "Mar 8, 2025",
        mentor: "Alex Kim",
        completed: false,
        resources: ["NLP Toolkit", "HuggingFace Guide"],
      },
      {
        id: "genai",
        name: "Generative AI & Prompt Engineering",
        date: "Mar 15, 2025",
        mentor: "Priya Sharma",
        completed: false,
        resources: ["Prompt Engineering Guide", "OpenAI API Docs"],
      },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    topics: [
      {
        id: "proj-1",
        name: "Customer Churn Prediction Model",
        date: "Feb 20, 2025",
        mentor: "James Wilson",
        completed: true,
        resources: ["Project Brief", "Dataset"],
      },
      {
        id: "proj-2",
        name: "Sentiment Analysis on Social Media",
        date: "Mar 10, 2025",
        mentor: "Alex Kim",
        completed: false,
        resources: ["Project Brief", "Twitter API Guide"],
      },
      {
        id: "proj-3",
        name: "AI-Powered Chatbot with LLMs",
        date: "Mar 25, 2025",
        mentor: "Priya Sharma",
        completed: false,
        resources: ["Project Brief", "LangChain Guide"],
      },
      {
        id: "capstone",
        name: "Capstone: End-to-End AI Solution",
        date: "Apr 10, 2025",
        mentor: "Dr. Sarah Chen",
        completed: false,
        resources: ["Capstone Guidelines"],
      },
    ],
  },
  {
    id: "guest-lectures",
    title: "Guest Lectures",
    topics: [
      {
        id: "guest-1",
        name: "AI in Healthcare - Industry Insights",
        date: "Feb 28, 2025",
        mentor: "Guest: Dr. Emily Zhang (Mayo Clinic)",
        completed: true,
        resources: ["Recording", "Slides"],
      },
      {
        id: "guest-2",
        name: "Building Production ML Systems",
        date: "Mar 20, 2025",
        mentor: "Guest: Rahul Iyer (Google)",
        completed: false,
        resources: ["Recording"],
      },
    ],
  },
  {
    id: "certification-prep",
    title: "Certification Prep",
    topics: [
      {
        id: "cert-review",
        name: "Comprehensive Review Sessions",
        date: "Apr 5, 2025",
        mentor: "All Mentors",
        completed: false,
        resources: ["Review Guide", "Practice Exam"],
      },
      {
        id: "mock-exam",
        name: "Mock Certification Exam",
        date: "Apr 12, 2025",
        mentor: "Lisa Wang",
        completed: false,
        resources: ["Mock Exam Paper"],
      },
    ],
  },
  {
    id: "placement-prep",
    title: "Placement Prep",
    topics: [
      {
        id: "resume",
        name: "Resume Building Workshop",
        date: "Apr 15, 2025",
        mentor: "Lisa Wang",
        completed: false,
        resources: ["Resume Template", "LinkedIn Guide"],
      },
      {
        id: "mock-interview",
        name: "Mock Technical Interview",
        date: "Apr 18, 2025",
        mentor: "Lisa Wang",
        completed: false,
        resources: ["Interview Question Bank"],
      },
      {
        id: "portfolio",
        name: "Portfolio Presentation",
        date: "Apr 22, 2025",
        mentor: "All Mentors",
        completed: false,
        resources: ["Portfolio Guidelines"],
      },
    ],
  },
];
