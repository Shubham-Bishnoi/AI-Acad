export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "urgent";
  date: string;
  category: string;
}

export const announcements: Announcement[] = [
  {
    id: "ann-1",
    title: "Guest Lecture: AI in Healthcare",
    message:
      "Join us for an exclusive guest lecture by Dr. Emily Zhang from Mayo Clinic on Feb 28. Registration is mandatory.",
    type: "info",
    date: "Feb 25, 2025",
    category: "Guest Lecture",
  },
  {
    id: "ann-2",
    title: "Project 2 Deadline Extended",
    message:
      "The deadline for Sentiment Analysis project has been extended to Mar 15. Use the extra time to refine your models.",
    type: "success",
    date: "Mar 5, 2025",
    category: "Academic",
  },
  {
    id: "ann-3",
    title: "Mock Interview Slots Open",
    message:
      "Mock interview slots for April are now open. Book your slot early as availability is limited.",
    type: "warning",
    date: "Mar 10, 2025",
    category: "Placement",
  },
  {
    id: "ann-4",
    title: "Platform Maintenance",
    message:
      "The learning platform will be under maintenance on Mar 18 from 2-4 AM EST. Plan accordingly.",
    type: "urgent",
    date: "Mar 15, 2025",
    category: "System",
  },
  {
    id: "ann-5",
    title: "New Resource: PyTorch Guide",
    message:
      "A comprehensive PyTorch guide has been added to the resources section. Check it out before the Neural Networks module.",
    type: "info",
    date: "Feb 26, 2025",
    category: "Resources",
  },
];

export interface Assessment {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  status: "completed" | "pending" | "upcoming";
  feedback?: string;
  date: string;
}

export const assessments: Assessment[] = [
  {
    id: "assess-1",
    name: "Python Fundamentals Quiz",
    score: 92,
    maxScore: 100,
    status: "completed",
    feedback: "Excellent grasp of Python basics. Minor issues with list comprehensions.",
    date: "Jan 25, 2025",
  },
  {
    id: "assess-2",
    name: "Data Structures Assessment",
    score: 85,
    maxScore: 100,
    status: "completed",
    feedback: "Good understanding. Practice more on tree traversals.",
    date: "Feb 1, 2025",
  },
  {
    id: "assess-3",
    name: "ML Concepts Test",
    score: 78,
    maxScore: 100,
    status: "completed",
    feedback: "Review ensemble methods and cross-validation techniques.",
    date: "Feb 20, 2025",
  },
  {
    id: "assess-4",
    name: "Project 1: Churn Prediction",
    score: 88,
    maxScore: 100,
    status: "completed",
    feedback: "Great feature engineering. Could improve model interpretation.",
    date: "Feb 28, 2025",
  },
  {
    id: "assess-5",
    name: "Deep Learning Mid-Term",
    score: 0,
    maxScore: 100,
    status: "upcoming",
    date: "Mar 20, 2025",
  },
];
