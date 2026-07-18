export interface Mentor {
  id: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  students: string;
  courses: number;
  bgColor: string;
  initials: string;
}

export const mentors: Mentor[] = [
  {
    id: "dr-sarah-chen",
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    bio: "Former Google AI researcher with 12+ years in deep learning and neural architectures. PhD from MIT in Computer Science.",
    tags: ["AI", "ML", "Deep Learning", "Research"],
    students: "2,400+",
    courses: 4,
    bgColor: "#FFD9E8",
    initials: "SC",
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Senior ML Engineer",
    bio: "Built recommendation systems at Netflix and Spotify. Expert in production ML systems and MLOps.",
    tags: ["ML", "Python", "MLOps", "Product"],
    students: "1,800+",
    courses: 3,
    bgColor: "#EAF2FF",
    initials: "JW",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "GenAI Product Lead",
    bio: "Led AI product teams at OpenAI and Anthropic. Specialist in LLM applications and prompt engineering.",
    tags: ["GenAI", "LLMs", "Product", "Career"],
    students: "3,200+",
    courses: 5,
    bgColor: "#E6F1FF",
    initials: "PS",
  },
  {
    id: "marcus-thompson",
    name: "Marcus Thompson",
    role: "Data Science Director",
    bio: "15 years in data science across finance and healthcare. Expert in statistical modeling and data-driven decision making.",
    tags: ["Data Science", "Analytics", "Python", "Career"],
    students: "1,500+",
    courses: 3,
    bgColor: "#FFF5E0",
    initials: "MT",
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "AI Engineering Manager",
    bio: "Manages AI engineering teams at Meta. Focuses on AI agent systems, automation, and scalable AI architectures.",
    tags: ["AI Agents", "Automation", "System Design", "Career"],
    students: "2,100+",
    courses: 4,
    bgColor: "#E8E0FF",
    initials: "ER",
  },
  {
    id: "alex-kim",
    name: "Alex Kim",
    role: "NLP Research Scientist",
    bio: "Published researcher in NLP with focus on transformer architectures. Former research scientist at DeepMind.",
    tags: ["NLP", "LLMs", "Research", "GenAI"],
    students: "1,200+",
    courses: 2,
    bgColor: "#FFE8E0",
    initials: "AK",
  },
  {
    id: "lisa-wang",
    name: "Lisa Wang",
    role: "Career Coach & AI Mentor",
    bio: "Helped 500+ students transition into AI roles. Former hiring manager at top tech companies.",
    tags: ["Career", "Placement", "Interview Prep", "Coaching"],
    students: "4,000+",
    courses: 3,
    bgColor: "#EAF2FF",
    initials: "LW",
  },
  {
    id: "raj-patel",
    name: "Raj Patel",
    role: "Computer Vision Expert",
    bio: "Specialist in computer vision and image processing. Built autonomous vehicle perception systems at Tesla.",
    tags: ["Computer Vision", "Deep Learning", "Python", "Projects"],
    students: "1,600+",
    courses: 3,
    bgColor: "#E6F1FF",
    initials: "RP",
  },
];
