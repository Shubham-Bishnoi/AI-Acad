export interface Course {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  lectures: number;
  image: string;
  instructor?: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  bgColor: string;
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
}

// GFF AI Academy Courses
export const courses: Course[] = [
  {
    id: "1",
    title: "AI Foundations & Python",
    category: "AI Development",
    price: "$199",
    duration: "6 weeks",
    lectures: 42,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    instructor: "Dr. Sarah Chen",
  },
  {
    id: "2",
    title: "Machine Learning Essentials",
    category: "Machine Learning",
    price: "$249",
    duration: "8 weeks",
    lectures: 56,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    instructor: "Prof. Michael Park",
  },
  {
    id: "3",
    title: "Generative AI & Prompt Engineering",
    category: "Generative AI",
    price: "$179",
    duration: "5 weeks",
    lectures: 35,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    instructor: "Alex Thompson",
  },
  {
    id: "4",
    title: "AI Agents & Automation",
    category: "AI Agents",
    price: "$299",
    duration: "7 weeks",
    lectures: 48,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    instructor: "Dr. James Wilson",
  },
  {
    id: "5",
    title: "Data Analytics with AI",
    category: "Data Analytics",
    price: "$219",
    duration: "6 weeks",
    lectures: 40,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    instructor: "Lisa Rodriguez",
  },
  {
    id: "6",
    title: "Capstone Project & Portfolio",
    category: "Project",
    price: "$349",
    duration: "10 weeks",
    lectures: 30,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    instructor: "Industry Mentors",
  },
];

export const categories = [
  "All Categories",
  "AI Development",
  "Machine Learning",
  "Generative AI",
  "AI Agents",
  "Data Analytics",
];

export const mentors: Mentor[] = [
  { id: "1", name: "Dr. Sarah Chen", role: "AI Research Lead", bgColor: "bg-amber-100" },
  { id: "2", name: "Prof. Michael Park", role: "ML Engineer", bgColor: "bg-green-100" },
  { id: "3", name: "Alex Thompson", role: "Gen AI Specialist", bgColor: "bg-pink-100" },
  { id: "4", name: "Dr. James Wilson", role: "AI Architect", bgColor: "bg-blue-100" },
  { id: "5", name: "Lisa Rodriguez", role: "Data Scientist", bgColor: "bg-purple-100" },
  { id: "6", name: "David Kim", role: "NLP Engineer", bgColor: "bg-yellow-100" },
  { id: "7", name: "Emma Watson", role: "AI Product Lead", bgColor: "bg-red-100" },
  { id: "8", name: "Raj Patel", role: "Deep Learning Expert", bgColor: "bg-teal-100" },
];

export const statsV2 = [
  { value: "120K+", label: "Active Students" },
  { value: "50+", label: "Expert Mentors" },
  { value: "95%", label: "Completion Rate" },
  { value: "10K+", label: "Job Placements" },
];

export const statsV3 = [
  { value: "117K+", label: "Students Worldwide" },
  { value: "87K+", label: "Successfully Graduated" },
  { value: "87%", label: "Course Complete Rate" },
  { value: "15K+", label: "Job Placement" },
];

export const faqItems: FAQItem[] = [
  {
    question: "Can I track my assignments and progress?",
    answer: "Yes, our platform offers a comprehensive dashboard where students can view their progress, monitor feedback on assignments, check upcoming due dates, and see detailed analytics of their learning journey.",
  },
  {
    question: "Does the platform support live classes and video lessons?",
    answer: "Absolutely! We offer both live interactive sessions with mentors and pre-recorded video lessons that you can access anytime. All live sessions are recorded for later review.",
  },
  {
    question: "How can I communicate with my instructor?",
    answer: "You can communicate with instructors through our built-in messaging system, live Q&A sessions, weekly office hours, and dedicated Slack community channels for each course.",
  },
  {
    question: "What support is available for students?",
    answer: "We provide 24/7 technical support, dedicated mentors, peer study groups, career counseling, resume review services, and interview preparation sessions.",
  },
  {
    question: "Are there interactive features for hands-on learning?",
    answer: "Yes! Our courses include interactive coding environments, real-world projects, AI-powered coding assistants, collaborative workspaces, and hands-on labs for practical experience.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "This platform transformed my career! The AI courses are well-structured, with knowledgeable mentors who simplify complex topics. The hands-on projects were invaluable for my portfolio.",
    name: "Samuel John",
    role: "AI Engineer at TechCorp",
  },
  {
    id: "2",
    quote: "The mentorship and community support here are exceptional. I went from knowing nothing about AI to building my own models in just 6 months. Highly recommended for anyone looking to break into AI!",
    name: "Robert David",
    role: "ML Engineer at DataFlow",
  },
  {
    id: "3",
    quote: "Best investment I made for my career. The curriculum is up-to-date with industry trends, and the placement support helped me land my dream job within weeks of graduating.",
    name: "Maria Garcia",
    role: "Data Scientist at AIStartup",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top AI Skills to Boost Your Career in 2025",
    excerpt: "Explore key AI skills that are in high demand and learn how to position yourself for success in the rapidly evolving tech landscape.",
    author: "Michael Steiner",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Essential Python Skills for New and Experienced Developers",
    excerpt: "Master the Python programming skills that form the foundation of AI and machine learning development.",
    author: "James R.",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "How to Build a Successful Career in Generative AI",
    excerpt: "Discover the pathways to becoming a generative AI specialist and the skills you need to thrive in this exciting field.",
    author: "William H.",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
];

export const marqueeItems = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Machine Learning",
  "Generative AI",
  "Data Science",
  "LLMs",
  "Computer Vision",
  "NLP",
  "Deep Learning",
  "MLOps",
  "AI Agents",
];

export const featuresV2 = [
  {
    icon: "Users",
    title: "Expert Mentors",
    description: "Learn from industry professionals with years of real-world AI experience.",
  },
  {
    icon: "Award",
    title: "Certification",
    description: "Earn recognized certificates to showcase your skills to employers.",
  },
  {
    icon: "Briefcase",
    title: "Job Placement",
    description: "Get dedicated support to help you find and secure your dream AI role.",
  },
  {
    icon: "Headphones",
    title: "Lifetime Support",
    description: "Access continuous support and community resources even after graduation.",
  },
];

export const featuresV3 = [
  {
    title: "Sign up and get started",
    description: "Create your account and unlock access to all AI courses, expert tools, and begin your journey to success.",
    action: "Get Started",
    bgColor: "bg-pink-50",
  },
  {
    title: "Explore courses & growth",
    description: "Discover courses designed for your goals, offering personalized content to boost skills and accelerate progress.",
    action: "Get Started",
    bgColor: "bg-purple-50",
  },
  {
    title: "Get your dream job",
    description: "Achieve your dream career by building essential AI skills, enhancing your resume, and mastering interviews.",
    action: "Get Started",
    bgColor: "bg-green-50",
  },
];

export const howItWorksSteps = [
  {
    icon: "UserPlus",
    title: "Sign up and get started",
    description: "Create your account, and start learning instantly.",
  },
  {
    icon: "BookOpen",
    title: "Explore courses tailored to you",
    description: "Browse a range of courses across various AI fields.",
  },
  {
    icon: "TrendingUp",
    title: "Keep learning and growing",
    description: "Continue exploring and advancing your AI skills!",
  },
];
