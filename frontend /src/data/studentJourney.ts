export interface JourneyStage {
  id: string;
  label: string;
  description: string;
  status: "completed" | "in-progress" | "action-needed" | "locked";
  date?: string;
  details?: string;
}

export interface StudentProfile {
  name: string;
  email: string;
  tier: "Gold" | "Silver" | "Bronze";
  batch: string;
  mentor: string;
  startDate: string;
  status: string;
}

export const studentProfile: StudentProfile = {
  name: "Aarav Sharma",
  email: "aarav.sharma@email.com",
  tier: "Gold",
  batch: "GFF-AI-2025-B3",
  mentor: "Dr. Sarah Chen",
  startDate: "Jan 15, 2025",
  status: "Learning in Progress",
};

export const journeyStages: JourneyStage[] = [
  {
    id: "registered",
    label: "Registered",
    description: "Account created successfully",
    status: "completed",
    date: "Jan 10, 2025",
  },
  {
    id: "intake-submitted",
    label: "Intake Submitted",
    description: "Application form submitted with all required documents",
    status: "completed",
    date: "Jan 12, 2025",
  },
  {
    id: "assessment",
    label: "Assessment",
    description: "Aptitude and technical screening test",
    status: "completed",
    date: "Jan 14, 2025",
    details: "Score: 87/100",
  },
  {
    id: "interview",
    label: "Interview",
    description: "One-on-one mentor interview",
    status: "completed",
    date: "Jan 15, 2025",
    details: "Panel: Dr. Sarah Chen, James Wilson",
  },
  {
    id: "tier-allocation",
    label: "Tier Allocation",
    description: "Gold Tier assigned based on assessment performance",
    status: "completed",
    date: "Jan 16, 2025",
    details: "Assigned Tier: Gold",
  },
  {
    id: "onboarding",
    label: "Onboarding",
    description: "Orientation, platform walkthrough, goal setting",
    status: "completed",
    date: "Jan 18, 2025",
  },
  {
    id: "learning",
    label: "Learning",
    description: "Active learning phase - modules in progress",
    status: "in-progress",
    details: "Progress: 65% (26/40 sessions)",
  },
  {
    id: "certification",
    label: "Certification",
    description: "Final assessment and certification exam",
    status: "locked",
  },
  {
    id: "placement-readiness",
    label: "Placement Readiness",
    description: "Resume review, mock interviews, portfolio building",
    status: "locked",
  },
  {
    id: "placed",
    label: "Placed",
    description: "Successfully placed at partner company",
    status: "locked",
  },
  {
    id: "alumni",
    label: "Alumni",
    description: "Lifetime alumni network access",
    status: "locked",
  },
];

export const statusColors = {
  completed: {
    bg: "#DCFCE7",
    text: "#166534",
    border: "#86EFAC",
    dot: "#22C55E",
  },
  "in-progress": {
    bg: "#FEF3C7",
    text: "#92400E",
    border: "#FCD34D",
    dot: "#F5B53F",
  },
  "action-needed": {
    bg: "#FEE2E2",
    text: "#991B1B",
    border: "#FCA5A5",
    dot: "#EF4444",
  },
  locked: {
    bg: "#F5F5F5",
    text: "#737373",
    border: "#E4EAF5",
    dot: "#9AA3B5",
  },
};
