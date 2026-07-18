/**
 * Blog / Insights content for GFF AI Academy.
 *
 * This module is the single source of truth for the /blog route and the
 * homepage BlogSection. It is intentionally shaped like a CMS response so the
 * static array below can later be swapped for a fetch (CMS, database, API,
 * LinkedIn feed, or the daily AI update automation) without touching any
 * component: keep the field names and `sourceType` union stable and the UI
 * will keep working.
 */

export type BlogSourceType =
  | "blog"
  | "newsletter"
  | "linkedin"
  | "daily-update"
  | "founder-note";

/**
 * Article body model. Rich enough for real editorial structure (section
 * headings, key takeaways, pull quotes, lists) and maps 1:1 onto the block
 * types most headless CMSs emit, so a future migration stays mechanical.
 */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  /** Long-form body. Optional so a feed item can exist without full content. */
  body?: ContentBlock[];
  category: BlogCategory;
  author: string;
  authorRole: string;
  /** Author headshot. Only set where we actually have rights to an image. */
  authorImage?: string;
  readTime: string;
  /** Absolute date, already formatted for display. */
  date: string;
  /** ISO date, used for sorting and <time dateTime>. */
  publishedAt: string;
  /** Optional hero image. When absent the UI renders a branded gradient tile. */
  image?: string;
  /** Describes what the image depicts; falls back to the title if omitted. */
  imageAlt?: string;
  featured?: boolean;
  sourceType: BlogSourceType;
}

export const blogCategories = [
  "All Insights",
  "Founder Notes",
  "Daily AI Updates",
  "AI News",
  "Academy Updates",
  "LinkedIn Posts",
  "Student Learning",
  "Career Readiness",
  "AI Tools",
  "Generative AI",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

/**
 * Per-category visual identity: the pill colours used on every card, plus a
 * gradient + icon used as the card visual whenever a post has no `image`
 * (so a future CMS entry without artwork still renders on-brand rather than
 * showing a broken image). `icon` maps to a lucide icon name resolved in
 * BlogCard.
 */
export const categoryStyles: Record<
  string,
  { from: string; to: string; icon: string; pillBg: string; pillText: string }
> = {
  "Founder Notes": {
    from: "#D91F2D",
    to: "#7C3AED",
    icon: "PenLine",
    pillBg: "#FFE4EC",
    pillText: "#B01824",
  },
  "Daily AI Updates": {
    from: "#155DFC",
    to: "#7C3AED",
    icon: "Sparkles",
    pillBg: "#EAF2FF",
    pillText: "#0F4BD8",
  },
  "AI News": {
    from: "#2563EB",
    to: "#155DFC",
    icon: "Newspaper",
    pillBg: "#EAF2FF",
    pillText: "#0F4BD8",
  },
  "Academy Updates": {
    from: "#7C3AED",
    to: "#2F6BFF",
    icon: "GraduationCap",
    pillBg: "#F1EAFF",
    pillText: "#6D28D9",
  },
  "LinkedIn Posts": {
    from: "#0F4BD8",
    to: "#2F6BFF",
    icon: "Linkedin",
    pillBg: "#EAF2FF",
    pillText: "#0F4BD8",
  },
  "Student Learning": {
    from: "#7C3AED",
    to: "#D91F2D",
    icon: "BookOpen",
    pillBg: "#F1EAFF",
    pillText: "#6D28D9",
  },
  "Career Readiness": {
    from: "#D91F2D",
    to: "#EF3B4D",
    icon: "Briefcase",
    pillBg: "#FFE4EC",
    pillText: "#B01824",
  },
  "AI Tools": {
    from: "#155DFC",
    to: "#9B5CF6",
    icon: "Wrench",
    pillBg: "#EAF2FF",
    pillText: "#0F4BD8",
  },
  "Generative AI": {
    from: "#9B5CF6",
    to: "#155DFC",
    icon: "Brain",
    pillBg: "#F1EAFF",
    pillText: "#6D28D9",
  },
};

/** Fallback so an unknown category from a future CMS never breaks the UI. */
export const defaultCategoryStyle = {
  from: "#155DFC",
  to: "#7C3AED",
  icon: "Sparkles",
  pillBg: "#EAF2FF",
  pillText: "#0F4BD8",
};

export function getCategoryStyle(category: string) {
  return categoryStyles[category] ?? defaultCategoryStyle;
}

const FOUNDER = {
  author: "Ashish Chandra",
  authorRole: "Founder, GFF AI",
  authorImage: "/images/AshishC.PNG",
};

export const blogPosts: BlogPost[] = [
  {
    id: "founder-building-future-ai-learning",
    title: "Founder Note: Building the Future of AI Learning",
    slug: "building-the-future-of-ai-learning",
    excerpt:
      "Why we started GFF AI Academy, what we believe practical AI education should look like, and the gap we are trying to close between classrooms and real engineering teams.",
    image: "/images/blog5.jpg",
    imageAlt: "VR headset user holding a glowing globe",
    body: [
      { type: "paragraph", text: "Most AI education today stops at explanation. Learners finish a course able to describe what a transformer is, but unable to ship anything that uses one. That gap is the reason GFF AI Academy exists." },
      { type: "heading", text: "Why We Started" },
      { type: "paragraph", text: "I kept meeting bright, motivated people who had completed four or five AI courses and still froze when asked to build something end to end. The problem was never intelligence or effort. It was that nothing they had studied ever had to survive contact with a real system." },
      { type: "paragraph", text: "We built the academy around a simple conviction: you learn AI by building with it, under people who have already shipped it. Every module ends in something that runs, and every learner leaves with work they can show." },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "Understanding is not the same as capability. The moment a concept has to work inside a system you own, it stops being trivia and becomes a skill." },
      { type: "heading", text: "What Practical AI Education Looks Like" },
      { type: "paragraph", text: "Practical does not mean shallow. It means the theory arrives when you need it, attached to a problem you are already trying to solve. Our learners meet the mathematics of gradient descent when their model will not converge \u2014 and it lands, because it explains something they can see." },
      {
        type: "list",
        items: [
        "Every module ends in a working artefact, not a quiz score",
        "Mentors are practitioners who still build, not just teach",
        "Feedback loops measured in days, not weeks",
        "A portfolio that accumulates from week one",
        ],
      },
      { type: "quote", text: "You do not learn AI by finishing courses. You learn it by shipping something that works, then finding out why it broke." },
      { type: "heading", text: "What Comes Next" },
      { type: "paragraph", text: "This space is where I will share what we are seeing \u2014 how teams actually adopt AI, which skills compound over time, and what we are changing inside the academy as the field moves. Some of it will be strategic. Much of it will be practical notes from the week." },
      { type: "paragraph", text: "If you are building a career in AI, or deciding whether to, I hope these notes save you some of the detours we have already taken." },
    ],
    category: "Founder Notes",
    ...FOUNDER,
    readTime: "6 min",
    date: "July 14, 2026",
    publishedAt: "2026-07-14",
    featured: true,
    sourceType: "founder-note",
  },
  {
    id: "what-students-learn-first",
    title: "What Students Should Learn First in AI",
    slug: "what-students-should-learn-first-in-ai",
    excerpt:
      "A practical sequence for beginners: the Python that actually matters, the maths you can defer, and the first project worth building in your first month.",
    image: "/images/blog11_book.jpg",
    imageAlt: "stack of books with a lightbulb",
    body: [
      { type: "paragraph", text: "The most common beginner mistake is starting with theory that will not be useful for another year. You do not need to derive backpropagation to build something valuable in your first month." },
      { type: "heading", text: "Start With Python That Actually Matters" },
      { type: "paragraph", text: "You need far less Python than most syllabi suggest. Data structures, functions, file and API handling, and comfort with libraries will carry you through your first several projects. Depth in decorators and metaclasses can wait." },
      {
        type: "list",
        items: [
        "Lists, dicts, comprehensions and iteration patterns",
        "Functions, modules and virtual environments",
        "Reading and writing real data \u2014 CSV, JSON, APIs",
        "pandas and numpy for anything data-shaped",
        ],
      },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "Learn the 20% of Python that appears in 80% of AI code, then move on. You can return for the rest when a project demands it." },
      { type: "heading", text: "The Maths You Can Safely Defer" },
      { type: "paragraph", text: "Linear algebra and statistics matter enormously \u2014 eventually. Front-loading them before you have written any models is how motivation dies. Build first, then let a concrete failure send you back to the theory." },
      { type: "quote", text: "Add the mathematics once you have a problem that demands it. It will stick far better than it ever does in the abstract." },
      { type: "heading", text: "Your First Project" },
      { type: "paragraph", text: "Pick something small, real, and yours: a classifier over data you personally care about, or a retrieval system across your own notes. Ownership is what turns a tutorial into a skill." },
    ],
    category: "Student Learning",
    author: "Dr. Sarah Chen",
    authorRole: "AI Research Lead",
    readTime: "8 min",
    date: "July 11, 2026",
    publishedAt: "2026-07-11",
    sourceType: "blog",
  },
  {
    id: "daily-ai-update-key-developments",
    title: "Daily AI Update: Key Developments This Week",
    slug: "daily-ai-update-key-developments-this-week",
    excerpt:
      "Model releases, tooling changes, and research worth your attention — summarised for learners who want signal without the noise.",
    image: "/images/blog10_hand.jpg",
    imageAlt: "robotic hand holding a crystal",
    body: [
      { type: "paragraph", text: "A short, opinionated digest of what moved this week and, more importantly, what it changes for people currently learning AI." },
      { type: "heading", text: "Model Releases" },
      { type: "paragraph", text: "Several frontier and open-weight releases landed this week with meaningful jumps in long-context reasoning and tool use. For learners, the practical effect is that context management matters less than it did six months ago, and evaluation matters more." },
      { type: "heading", text: "Tooling Shifts" },
      { type: "paragraph", text: "Agent frameworks continued consolidating around a smaller set of patterns: explicit state, typed tool definitions, and structured retries. If you are building agents, that convergence is good news \u2014 the patterns are becoming learnable rather than framework-specific." },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "Chasing every release is a poor use of your time. Track what changes the shape of the work, and ignore the rest until it does." },
      { type: "heading", text: "What This Means For You" },
      { type: "paragraph", text: "If you are mid-way through a learning path, none of this invalidates your plan. Fundamentals \u2014 data handling, evaluation, debugging \u2014 have survived every release cycle so far." },
      { type: "quote", text: "The tools change every quarter. The habits that make you effective with them do not." },
    ],
    category: "Daily AI Updates",
    ...FOUNDER,
    readTime: "4 min",
    date: "July 17, 2026",
    publishedAt: "2026-07-17",
    sourceType: "daily-update",
  },
  {
    id: "build-strong-ai-portfolio",
    title: "How to Build a Strong AI Portfolio",
    slug: "how-to-build-a-strong-ai-portfolio",
    excerpt:
      "Three projects beat ten tutorials. What hiring managers actually look for, how to document your work, and the portfolio mistakes that quietly cost interviews.",
    image: "/images/blog1_arrow.jpg",
    imageAlt: "arrow hitting the centre of a target",
    body: [
      { type: "paragraph", text: "A portfolio is not a list of courses completed. It is evidence that you can take an ambiguous problem and produce something that works." },
      { type: "heading", text: "Three Projects Beat Ten Tutorials" },
      { type: "paragraph", text: "Hiring managers skim. What stops them is depth: a project with a real problem statement, a decision you had to make, and an honest account of the trade-off. Ten notebook clones communicate the opposite." },
      {
        type: "list",
        items: [
        "One project that handles messy, real-world data",
        "One that puts a model behind an interface someone could use",
        "One that goes deep on a single technique you can defend",
        ],
      },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "Depth beats breadth. Three well-documented projects with clear trade-offs will outperform ten forked notebooks every time." },
      { type: "heading", text: "Document Like Someone Will Read It" },
      { type: "paragraph", text: "Most portfolios fail at the README, not the code. State the problem, your approach, what you tried that did not work, and what you would do with more time. That last section signals maturity more than any accuracy metric." },
      { type: "quote", text: "Your README is the interview before the interview. Most candidates skip it, which is exactly why it is an advantage." },
      { type: "heading", text: "Mistakes That Quietly Cost Interviews" },
      {
        type: "list",
        items: [
        "No live demo and no screenshots",
        "Accuracy numbers with no baseline for comparison",
        "Copied tutorial projects with the original variable names intact",
        "No mention of what failed",
        ],
      },
    ],
    category: "Career Readiness",
    author: "James Wilson",
    authorRole: "Senior ML Engineer",
    readTime: "7 min",
    date: "July 9, 2026",
    publishedAt: "2026-07-09",
    sourceType: "blog",
  },
  {
    id: "genai-tools-for-beginners",
    title: "Generative AI Tools Every Beginner Should Know",
    slug: "generative-ai-tools-every-beginner-should-know",
    excerpt:
      "A grounded tour of the generative AI stack — where each tool genuinely helps, where it gets in the way, and how to keep your fundamentals sharp while using them.",
    image: "/images/blog2.jpg",
    imageAlt: "floating UI panels and tool icons",
    body: [
      { type: "paragraph", text: "A grounded tour of the generative AI stack \u2014 where each tool genuinely helps, where it gets in the way, and how to keep your fundamentals sharp while using them." },
      { type: "heading", text: "The Layers Worth Knowing" },
      { type: "paragraph", text: "The stack looks crowded, but it collapses into a few layers: model access, orchestration, retrieval, and evaluation. Almost every tool you will encounter sits in one of them. Learn the layer and the tools become interchangeable." },
      {
        type: "list",
        items: [
        "Model access \u2014 the APIs and local runtimes you call",
        "Orchestration \u2014 chaining, routing, and agent control flow",
        "Retrieval \u2014 embeddings, vector stores, and ranking",
        "Evaluation \u2014 the layer beginners skip and regret skipping",
        ],
      },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "Learn the layer, not the logo. Tools churn constantly; the responsibilities they cover have been stable for years." },
      { type: "heading", text: "Where Tools Get In The Way" },
      { type: "paragraph", text: "Heavy frameworks can hide exactly the mechanics you are trying to learn. Early on, write the raw API call yourself at least once. Understanding what the abstraction is doing is what lets you debug it later." },
      { type: "quote", text: "Use the framework once you understand what it is saving you from. Before that, it is just a black box wrapping another black box." },
    ],
    category: "AI Tools",
    author: "Alex Thompson",
    authorRole: "Gen AI Specialist",
    readTime: "9 min",
    date: "July 7, 2026",
    publishedAt: "2026-07-07",
    sourceType: "blog",
  },
  {
    id: "classroom-to-career",
    title: "From Classroom to Career: Becoming AI Ready",
    slug: "from-classroom-to-career-becoming-ai-ready",
    excerpt:
      "The transition that trips people up. How to translate coursework into interview answers, and the readiness checklist we use inside the academy.",
    image: "/images/blog9.jpg",
    imageAlt: "tidy home-office desk setup",
    body: [
      { type: "paragraph", text: "Being able to do the work and being able to demonstrate it in a 45-minute interview are two different skills. Both are trainable, and most learners only practise the first." },
      { type: "heading", text: "Translating Coursework Into Answers" },
      { type: "paragraph", text: "Interviewers rarely ask what you studied. They ask what you built, what broke, and what you did about it. Coursework becomes an interview answer only when you can frame it as a problem, a decision, and an outcome." },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "For every project you finish, write down three sentences: the problem, the hardest decision, and the result. That is your interview answer, ready in advance." },
      { type: "heading", text: "The Readiness Checklist" },
      { type: "paragraph", text: "Inside the academy we treat placement readiness as its own discipline with its own milestones, not as something that happens automatically after the final module." },
      {
        type: "list",
        items: [
        "A portfolio with three defensible projects",
        "A r\u00e9sum\u00e9 written for the role, not for a course list",
        "Mock interviews with real, uncomfortable feedback",
        "The ability to explain a trade-off out loud, under time pressure",
        ],
      },
      { type: "quote", text: "The gap between capable and hired is almost always communication, not capability." },
    ],
    category: "Career Readiness",
    author: "Lisa Rodriguez",
    authorRole: "Placement Lead",
    readTime: "6 min",
    date: "July 4, 2026",
    publishedAt: "2026-07-04",
    sourceType: "blog",
  },
  {
    id: "linkedin-ai-skills-need-projects",
    title: "LinkedIn Reflection: Why AI Skills Need Projects",
    slug: "why-ai-skills-need-projects",
    excerpt:
      "A short reflection on why certificates alone rarely move the needle, and what changes the moment a learner ships their first working system.",
    image: "/images/blog6_linkedn.jpg",
    imageAlt: "LinkedIn app icon",
    body: [
      { type: "paragraph", text: "I keep meeting learners with impressive certificate walls and no working code. The moment they ship one real project, the way they talk about AI changes completely." },
      { type: "heading", text: "What Changes After The First Project" },
      { type: "paragraph", text: "Before: careful, borrowed vocabulary and hedged answers. After: specifics. They talk about the data that was messier than expected, the evaluation that flattered the model, the deployment step nobody warned them about." },
      { type: "quote", text: "A certificate says you attended. A project says you decided." },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "If you have to choose between one more course and one finished project, finish the project. It will teach you what the course was gesturing at." },
      { type: "paragraph", text: "None of this makes structured learning worthless \u2014 it makes it useful. Courses work best as scaffolding around something you are actually building." },
    ],
    category: "LinkedIn Posts",
    ...FOUNDER,
    readTime: "3 min",
    date: "July 15, 2026",
    publishedAt: "2026-07-15",
    sourceType: "linkedin",
  },
  {
    id: "academy-new-learning-journey",
    title: "Academy Update: New Learning Journey for AI Professionals",
    slug: "new-learning-journey-for-ai-professionals",
    excerpt:
      "We have restructured the academy path from registration to placement, with clearer milestones, tighter mentor feedback loops, and a stronger capstone.",
    image: "/images/blog12_calender.jpg",
    imageAlt: "calendar with an alarm clock",
    body: [
      { type: "paragraph", text: "We have restructured the academy path from registration to placement, with clearer milestones, tighter mentor feedback loops, and a stronger capstone." },
      { type: "heading", text: "What Changed" },
      { type: "paragraph", text: "The updated journey makes every stage visible: registration, intake, assessment, interview, tier allocation, onboarding, learning, certification, placement readiness, and finally placement and alumni access." },
      {
        type: "list",
        items: [
        "Milestones you can see and track in your dashboard",
        "Tier allocation based on assessment, not self-selection",
        "Mentor feedback loops measured in days",
        "A capstone that produces a portfolio-grade artefact",
        ],
      },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "Progress you cannot see is progress you cannot correct. Making the journey explicit is what lets learners and mentors intervene early." },
      { type: "heading", text: "Who This Affects" },
      { type: "paragraph", text: "Existing learners keep their current progress and are mapped onto the equivalent stage automatically. New cohorts start on the updated path from their first day." },
      { type: "quote", text: "Structure is not bureaucracy. It is what makes support arrive before someone falls behind." },
    ],
    category: "Academy Updates",
    author: "GFF AI Academy",
    authorRole: "Academy Team",
    readTime: "5 min",
    date: "July 2, 2026",
    publishedAt: "2026-07-02",
    sourceType: "blog",
  },
  {
    id: "techniques-learning-ai-faster",
    title: "Techniques for Learning AI Faster",
    slug: "techniques-for-learning-ai-faster",
    excerpt:
      "Spaced practice, building in public, and reading code before writing it — the study habits that consistently separate fast learners from stalled ones.",
    image: "/images/blog4.jpg",
    imageAlt: "calendar, clock and stacked coins",
    body: [
      { type: "paragraph", text: "Speed in learning AI comes less from talent than from feedback frequency. Shorten the loop between attempting something and finding out whether it worked." },
      { type: "heading", text: "Shorten The Loop" },
      { type: "paragraph", text: "The single highest-leverage change most learners can make is reducing the time between writing something and testing it. Long study sessions with no execution feel productive and rarely are." },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "If an hour passes without running code, you are studying, not learning. Both have a place, but only one builds capability." },
      { type: "heading", text: "Read Code Before Writing It" },
      { type: "paragraph", text: "Reading well-written implementations teaches structure faster than any tutorial. Pick a small, respected repository and trace one path through it end to end." },
      { type: "heading", text: "Build In Public" },
      { type: "paragraph", text: "Explaining what you built forces you to discover which parts you do not actually understand. It is the cheapest diagnostic available." },
      { type: "quote", text: "Spaced practice, visible work, and short feedback loops. Nothing exotic \u2014 just applied consistently." },
    ],
    category: "Student Learning",
    author: "Dr. Sarah Chen",
    authorRole: "AI Research Lead",
    readTime: "5 min",
    date: "June 30, 2026",
    publishedAt: "2026-06-30",
    sourceType: "blog",
  },
  {
    id: "what-changed-in-ai-this-week",
    title: "What Changed in AI This Week",
    slug: "what-changed-in-ai-this-week",
    excerpt:
      "Our weekly signal roundup: the releases that matter for practitioners, and the ones safe to ignore for now.",
    image: "/images/blog6.jpg",
    imageAlt: "video call grid of participants",
    body: [
      { type: "paragraph", text: "Our weekly signal roundup: the releases that matter for practitioners, and the ones safe to ignore for now." },
      { type: "heading", text: "Worth Your Attention" },
      { type: "paragraph", text: "Long-context handling and structured output reliability both improved measurably this week across several providers. If you have been working around unreliable JSON output, that workaround may now be unnecessary." },
      { type: "heading", text: "Safe To Ignore For Now" },
      { type: "paragraph", text: "Benchmark leapfrogging continued, with several announcements that move headline numbers without changing what is practical to build. Interesting to watch, not urgent to act on." },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "Ask one question of every release: does this change what I can build, or only what I can cite? Act on the first kind." },
      { type: "quote", text: "Signal is not the same as news. Most weeks produce plenty of the second and very little of the first." },
    ],
    category: "AI News",
    ...FOUNDER,
    readTime: "4 min",
    date: "July 12, 2026",
    publishedAt: "2026-07-12",
    sourceType: "daily-update",
  },
  {
    id: "newsletter-issue-prompting-that-scales",
    title: "Newsletter: Prompting Patterns That Actually Scale",
    slug: "prompting-patterns-that-actually-scale",
    excerpt:
      "This month's issue covers structured prompting, evaluation habits, and why your prompt library needs version control like any other codebase.",
    image: "/images/blog3.jpg",
    imageAlt: "3D code block icon",
    body: [
      { type: "paragraph", text: "This month's issue covers structured prompting, evaluation habits, and why your prompt library needs version control like any other codebase." },
      { type: "heading", text: "Prompting As Engineering" },
      { type: "paragraph", text: "Prompting stops being a trick and starts being engineering the moment you version it, test it, and measure it. Until then you are tuning by vibes and hoping the improvement was real." },
      {
        type: "list",
        items: [
        "Store prompts in the repository, not in a document",
        "Version them alongside the code that calls them",
        "Keep a fixed evaluation set you re-run on every change",
        "Record why a prompt changed, not just what changed",
        ],
      },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "If you cannot tell whether last week's prompt change helped, you do not have a prompting problem \u2014 you have a measurement problem." },
      { type: "heading", text: "Patterns That Survive" },
      { type: "paragraph", text: "Explicit role and task framing, structured output contracts, and few-shot examples drawn from real failures have all outlasted several model generations. Clever phrasing tricks generally have not." },
      { type: "quote", text: "Treat prompts like code, because that is what they have become." },
    ],
    category: "Generative AI",
    ...FOUNDER,
    readTime: "7 min",
    date: "July 6, 2026",
    publishedAt: "2026-07-06",
    sourceType: "newsletter",
  },
  {
    id: "ai-agents-what-beginners-miss",
    title: "AI Agents: What Beginners Consistently Miss",
    slug: "ai-agents-what-beginners-consistently-miss",
    excerpt:
      "Agents fail less on model quality than on state, tools, and error handling. A practical look at what to get right first.",
    image: "/images/blog8.jpg",
    imageAlt: "checklist with crossed-out items",
    body: [
      { type: "paragraph", text: "Agents fail less on model quality than on state, tools, and error handling. A practical look at what to get right first." },
      { type: "heading", text: "It Is Rarely The Model" },
      { type: "paragraph", text: "Most agent demos break in production for unglamorous reasons: no retry strategy, unclear state boundaries, and no observability into what the agent actually did. Swapping in a stronger model fixes none of these." },
      {
        type: "list",
        items: [
        "Explicit state \u2014 know what the agent remembers and why",
        "Typed tools with validated inputs and useful error messages",
        "Retries with backoff, and a hard stop condition",
        "Logging good enough to reconstruct any run",
        ],
      },
      { type: "subheading", text: "Key Takeaway:" },
      { type: "paragraph", text: "Design the failure paths before the happy path. Agents spend far more time in edge cases than demos suggest." },
      { type: "heading", text: "Start Smaller Than You Think" },
      { type: "paragraph", text: "A single-step tool call that works reliably is worth more than a five-step plan that works occasionally. Add steps only once the previous one is boring." },
      { type: "quote", text: "The hard part of agents was never the reasoning. It is everything around it." },
    ],
    category: "Generative AI",
    author: "Raj Patel",
    authorRole: "Deep Learning Expert",
    readTime: "8 min",
    date: "June 27, 2026",
    publishedAt: "2026-06-27",
    sourceType: "blog",
  },
];

/* ------------------------------------------------------------------ */
/* Selectors — components read through these, never by array index, so  */
/* swapping the source for a CMS fetch stays a one-file change.         */
/* ------------------------------------------------------------------ */

const byNewest = (a: BlogPost, b: BlogPost) =>
  b.publishedAt.localeCompare(a.publishedAt);

export const getFeaturedPost = (): BlogPost =>
  blogPosts.find((p) => p.featured) ?? [...blogPosts].sort(byNewest)[0];

export const getSortedPosts = (): BlogPost[] => [...blogPosts].sort(byNewest);

export const getPostsByCategory = (category: string): BlogPost[] =>
  category === "All Insights"
    ? getSortedPosts()
    : getSortedPosts().filter((p) => p.category === category);

export const getRecentPosts = (limit = 4): BlogPost[] =>
  getSortedPosts().slice(0, limit);

export const getPostsBySource = (types: BlogSourceType[]): BlogPost[] =>
  getSortedPosts().filter((p) => types.includes(p.sourceType));

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (post: BlogPost, limit = 3): BlogPost[] =>
  getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const score = (x: BlogPost) => (x.category === post.category ? 0 : 1);
      return score(a) - score(b);
    })
    .slice(0, limit);

/** Category counts for the sidebar. */
export const getCategoryCounts = (): Record<string, number> => {
  const counts: Record<string, number> = { "All Insights": blogPosts.length };
  for (const post of blogPosts) {
    counts[post.category] = (counts[post.category] ?? 0) + 1;
  }
  return counts;
};
