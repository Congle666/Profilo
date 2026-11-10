// ============================================
// PORTFOLIO DATA
// Chỉnh sửa file này để thay đổi toàn bộ nội dung trang portfolio.
// Không cần sửa code component — chỉ cần thay data ở đây.
// Nội dung đồng bộ với CV (public/resume.pdf).
// ============================================

export const personalInfo = {
  name: "Lê Hồng Công",
  firstName: "Lê Hồng",
  lastName: "Công",
  role: "Go Backend Developer",
  // Các role xoay vòng hiệu ứng typing ở Hero
  roles: ["Go Backend Developer", "Technical Consultant", "Solutions Engineer"],
  tagline: "Go backend systems and integrations that ship to real users",
  description:
    "Software Engineering graduate building backend services in Go. I design APIs and data models, integrate payments and cloud storage, and help clients turn requirements into working solutions.",
  email: "lecong.work@gmail.com",
  phone: "0916640931",
  location: "Ho Chi Minh City, Vietnam",
  github: "https://github.com/Congle666",
  facebook: "https://www.facebook.com/cleee666",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/avatar.jpg",
};

// ============================================
// ABOUT SECTION
// ============================================
export const aboutData = {
  bio: `I'm a Software Engineering graduate (GPA 3.31/4.0) focused on Go backend development and system integration. I like owning a problem end to end, from the data model and API design to deployment and the conversation with the people who use it.

I built and still operate Junvite, an online wedding invitation platform written in Go (Gin, GORM, MySQL) that has served around 70 paying customers, with payments confirmed automatically through SePay webhooks and media stored on Cloudflare R2.

As a Technical Consultant / Solutions Engineer at Khoi Solutions, I delivered an enterprise AI rollout on Amazon Q Business, connected Microsoft 365 data sources with Entra ID access control, and built an internal ticketing tool in Go.

I'm looking for a Fresher Go Backend or Technical Consultant role where I can keep shipping production systems and grow toward solution architecture.`,

  // decimals: số chữ số thập phân hiển thị trong CountUp
  stats: [
    { value: 70, prefix: "~", suffix: "", label: "Paying customers on Junvite" },
    { value: 28, suffix: "", label: "AI use cases assessed" },
    { value: 2, suffix: "", label: "Go products shipped" },
    { value: 3.31, decimals: 2, suffix: "", label: "Final GPA (out of 4.0)" },
  ],

  services: [
    {
      icon: "Server",
      title: "Go Backend Development",
      description:
        "RESTful APIs with Go (Gin) and GORM: authentication with JWT, business logic, and MySQL schemas designed for the product's real workflows.",
    },
    {
      icon: "Database",
      title: "Payments & Cloud Integration",
      description:
        "Automated payment confirmation via SePay webhooks, media storage on Cloudflare R2 and AWS S3, and Docker-based deployments.",
    },
    {
      icon: "MessageSquare",
      title: "Technical Consulting",
      description:
        "Requirement analysis, use-case feasibility, demo/PoC environments, technical documentation and end-user training for enterprise rollouts.",
    },
  ],
};

// ============================================
// EXPERIENCE
// ============================================
export const experienceData = [
  {
    company: "Khoi Solutions",
    role: "Technical Consultant | Solutions Engineer",
    period: "07/2026 — 10/2026",
    tech: ["Go", "Wails", "MySQL", "Amazon S3", "Amazon Q Business", "Microsoft 365", "Microsoft Entra ID"],
    highlights: [
      "Built an internal ticket management tool with Go (Wails) and MySQL to standardize intake, triage and tracking of support requests, with request sync from Google Forms, AI-suggested resolutions and installers distributed via Amazon S3.",
      "Connected SharePoint Online and OneDrive data sources to Amazon Q Business, configuring authentication and access control through Microsoft Entra ID to meet client security requirements.",
      "Gathered business requirements, assessed feasibility and evaluated answer quality across 28 AI use cases; authored specifications, ran solution demos and trained end users.",
    ],
  },
];

// ============================================
// PROJECTS
// ============================================
export const projectsData = {
  categories: ["Web App", "Desktop"],

  projects: [
    {
      id: 1,
      title: "Junvite",
      description:
        "Online wedding invitation platform serving ~70 paying customers. Go (Gin) REST APIs for orders, templates and JWT auth, automated payment confirmation via SePay webhooks, media on Cloudflare R2, deployed with Docker.",
      category: "Web App",
      image: "/projects/junvite.jpg",
      tech: ["Go", "Gin", "GORM", "MySQL", "Docker", "Cloudflare R2", "SePay"],
      demoUrl: "https://junvite.com/",
      githubUrl: "https://github.com/Congle666/Wedding-web",
    },
    {
      id: 2,
      title: "SRT Go",
      description:
        "Desktop subtitle generator — download video, extract audio, transcribe with Whisper AI, and generate SRT files.",
      category: "Desktop",
      image: "/projects/srtgo.png",
      tech: ["Go", "Wails", "React", "FFmpeg", "Whisper AI"],
      demoUrl: "#",
      githubUrl: "https://github.com/Congle666/SRT_Go",
    },
  ],
};

// ============================================
// SKILLS
// ============================================
const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const skillsData = {
  radarSkills: [
    { label: "Go", value: 80 },
    { label: "REST API", value: 80 },
    { label: "MySQL", value: 75 },
    { label: "Docker", value: 65 },
    { label: "Cloud", value: 65 },
    { label: "Consulting", value: 75 },
  ],

  primary: [
    { name: "Go (Golang)", percentage: 80, level: "Proficient", icon: devicon("go/go-original-wordmark.svg") },
    { name: "Gin Framework", percentage: 75, level: "Proficient", icon: devicon("go/go-original.svg") },
    { name: "GORM", percentage: 70, level: "Intermediate", icon: devicon("go/go-original.svg") },
    { name: "Wails (Go desktop)", percentage: 65, level: "Intermediate", icon: devicon("go/go-original.svg") },
    { name: "REST API & JWT", percentage: 80, level: "Proficient", icon: null },
  ],
  primaryLabel: "Go Backend",

  secondary: [
    { name: "MySQL", percentage: 75, level: "Proficient", icon: devicon("mysql/mysql-original.svg") },
    { name: "SQL Server", percentage: 65, level: "Intermediate", icon: devicon("microsoftsqlserver/microsoftsqlserver-original.svg") },
    { name: "Docker", percentage: 65, level: "Intermediate", icon: devicon("docker/docker-original.svg") },
    { name: "AWS S3 / Cloudflare R2", percentage: 65, level: "Intermediate", icon: devicon("cloudflare/cloudflare-original.svg") },
    { name: "Amazon Q Business", percentage: 70, level: "Intermediate", icon: "/icons/aws.svg" },
  ],
  secondaryLabel: "Data, Cloud & Integration",

  // Tools — có icon
  tools: [
    { name: "Git", icon: devicon("git/git-original.svg") },
    { name: "Docker", icon: devicon("docker/docker-original.svg") },
    { name: "Postman", icon: devicon("postman/postman-original.svg") },
    { name: "VS Code", icon: devicon("vscode/vscode-original.svg") },
    { name: "Cloudflare", icon: devicon("cloudflare/cloudflare-original.svg") },
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "Microsoft 365", icon: null },
    { name: "SePay", icon: null },
  ],

  softSkills: [
    "Requirement Analysis",
    "Client Communication",
    "Technical Writing",
    "Product Ownership",
    "Fast Learner",
  ],
};

// ============================================
// EDUCATION & CERTIFICATIONS
// ============================================
export const educationData = {
  university: {
    name: "HUFLIT University",
    shortName: "HUFLIT",
    degree: "Software Engineering",
    period: "2023 — 2026",
    status: "Graduated",
    gpa: "3.31",
    gpaScale: "4.0",
    description:
      "Graduated with Very Good honors. Thesis: improved association-rule-based classification models, raising minority-class detection by an average of 26.67 percentage points.",
    highlights: [
      {
        icon: "Trophy",
        title: "Effort Scholarship",
        subtitle: "Academic Year 2025 – 2026",
      },
      {
        icon: "Award",
        title: "Google AI Essentials",
        subtitle: "Coursera · 05/2025",
      },
    ],
  },

  certifications: [
    {
      name: "Google AI Essentials",
      issuer: "Coursera",
      year: "2025",
      url: "#",
    },
  ],
};

// ============================================
// CONTACT
// ============================================
export const contactData = {
  heading: "Let's Work Together",
  subtitle:
    "Hiring a Fresher Go Backend Developer or Technical Consultant? I'd be glad to talk about how I can contribute to your team.",
  availability: "Open to full-time roles",
};

// ============================================
// NAVIGATION
// ============================================
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
