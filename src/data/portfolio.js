// ============================================
// PORTFOLIO DATA
// Chỉnh sửa file này để thay đổi toàn bộ nội dung trang portfolio.
// Không cần sửa code component — chỉ cần thay data ở đây.
// ============================================

export const personalInfo = {
  name: "Lê Hồng Công",
  firstName: "Lê Hồng",
  lastName: "Công",
  role: "Backend Developer Intern",
  // Các role xoay vòng hiệu ứng typing ở Hero
  roles: ["Backend Developer", "Problem Solver", "API Architect", "Code Enthusiast"],
  tagline: "Building robust backend systems with C# and Go",
  description:
    "I'm a Backend Developer Intern passionate about building scalable APIs, microservices, and database-driven applications. Experienced with C# (.NET ecosystem) and GoLang, I focus on writing clean, testable, and performant server-side code.",
  email: "lhc09062004@gmail.com",
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
  bio: `I'm a Backend Developer Intern with a strong foundation in C# and GoLang, currently pursuing my degree in Software Engineering. I love solving complex problems and building systems that handle real-world scale.

My experience spans from building RESTful APIs with ASP.NET to creating high-performance services with Go's Gin framework. I'm comfortable working with SQL Server, MySQL, and automating workflows with Selenium.

I'm eager to learn, grow fast, and contribute to production-grade backend systems. Always looking for opportunities to improve my skills and take on new challenges.`,

  stats: [
    { value: 1, suffix: "+", label: "Years Learning" },
    { value: 10, suffix: "+", label: "Projects" },
    { value: 5, suffix: "+", label: "Certificates" },
    { value: 3, suffix: "+", label: "Technologies" },
  ],

  services: [
    {
      icon: "Server",
      title: "Backend Development",
      description:
        "Building RESTful APIs and microservices with ASP.NET Core, Gin (Go), handling authentication, authorization, and business logic.",
    },
    {
      icon: "Database",
      title: "Database Design",
      description:
        "Designing efficient database schemas, writing optimized queries, and managing data with SQL Server and MySQL.",
    },
    {
      icon: "TestTube2",
      title: "Testing & Automation",
      description:
        "Writing unit tests, integration tests, and automating browser workflows with Selenium for quality assurance.",
    },
  ],
};

// ============================================
// PROJECTS
// ============================================
export const projectsData = {
  categories: ["Web App", "Desktop"],

  projects: [
    {
      id: 1,
      title: "News 24h",
      description:
        "News aggregation platform with 24-hour coverage, built with ASP.NET Core MVC and server-side rendering.",
      category: "Web App",
      image: "/projects/news24h.png",
      tech: ["C#", "ASP.NET Core", "MVC", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/Congle666/News_24h",
    },
    {
      id: 2,
      title: "JunTech Wedding",
      description:
        "Online wedding invitation platform with RSVP, guest management, photo galleries, QR payment, and admin dashboard.",
      category: "Web App",
      image: "/projects/wedding.png",
      tech: ["Go", "Gin", "Next.js", "TypeScript", "MySQL"],
      demoUrl: "#",
      githubUrl: "https://github.com/Congle666/Wedding-web",
    },
    {
      id: 3,
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
export const skillsData = {
  radarSkills: [
    { label: "C#", value: 85 },
    { label: "ASP.NET", value: 80 },
    { label: "GoLang", value: 70 },
    { label: "SQL Server", value: 75 },
    { label: "MySQL", value: 70 },
    { label: "Selenium", value: 65 },
  ],

  // Đổi tên nhóm cho phù hợp backend
  frontend: [
    { name: "C#", percentage: 85, level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "ASP.NET MVC", percentage: 80, level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "ASP.NET Web API", percentage: 80, level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Entity Framework", percentage: 75, level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "WinForms", percentage: 70, level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg" },
    { name: "Selenium", percentage: 65, level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
  ],
  frontendLabel: "C# / .NET",

  backend: [
    { name: "GoLang", percentage: 70, level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
    { name: "Gin Framework", percentage: 65, level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "SQL Server (SSMS)", percentage: 75, level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
    { name: "MySQL", percentage: 70, level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "REST API Design", percentage: 80, level: "Advanced", icon: null },
  ],
  backendLabel: "Go / Database",

  // Tools — có icon
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "SSMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
  ],

  softSkills: [
    "Problem Solving",
    "Teamwork",
    "Fast Learner",
    "Analytical Thinking",
    "Communication",
  ],
};

// ============================================
// EDUCATION & CERTIFICATIONS
// Redesigned: có transcript điểm từng môn
// ============================================
export const educationData = {
  // Thông tin trường — hiển thị dạng bento grid
  university: {
    name: "HUFLIT University",
    shortName: "HUFLIT",
    degree: "Software Engineering",
    period: "2022 — 2027",
    gpa: "3.17",
    gpaScale: "4.0",
    description:
      "Focused on backend development, database systems, and software architecture. Active member of the university's programming club.",
    creditsEarned: 117,
    creditsTotal: 141,
    highlights: [
      {
        icon: "Trophy",
        title: "Honor Student",
        subtitle: "Academic Year 2025 - 2026",
      },
      {
        icon: "Award",
        title: "Google Gemini Certificate",
        subtitle: "AI & Machine Learning Fundamentals",
      },
    ],
  },

  // GPA theo từng học kỳ — dùng cho GPA Mountain chart
  // gpa: hệ 4, cumulativeGpa: tích lũy, highlights: môn nổi bật
  semesters: [
    {
      label: "HK1",
      period: "2023-2024",
      gpa: 2.42,
      cumulativeGpa: 2.28,
      credits: 18,
      highlights: [
        { name: "Tiếng Anh TQ 1", score: 8.0, grade: "B+" },
        { name: "Toán rời rạc", score: 7.0, grade: "B" },
      ],
    },
    {
      label: "HK2",
      period: "2023-2024",
      gpa: 2.38,
      cumulativeGpa: 2.32,
      credits: 16,
      highlights: [
        { name: "Đại số tuyến tính", score: 10.0, grade: "A+" },
      ],
    },
    {
      label: "HK3",
      period: "2024-2025",
      gpa: 2.97,
      cumulativeGpa: 2.55,
      credits: 19,
      highlights: [
        { name: "Kỹ năng mềm", score: 8.8, grade: "A" },
        { name: "CTDL & Giải thuật", score: 8.1, grade: "B+" },
      ],
    },
    {
      label: "HK4",
      period: "2024-2025",
      gpa: 3.45,
      cumulativeGpa: 2.79,
      credits: 20,
      highlights: [
        { name: "Thuật toán đồ thị", score: 8.8, grade: "A" },
        { name: "LT Di động", score: 8.6, grade: "A" },
        { name: "Lịch sử Đảng", score: 8.8, grade: "A" },
      ],
    },
    {
      label: "HK5",
      period: "2024-2025",
      gpa: 3.74,
      cumulativeGpa: 3.01,
      credits: 23,
      highlights: [
        { name: "Xác suất thống kê", score: 9.6, grade: "A+" },
        { name: "Lập trình Java", score: 9.4, grade: "A+" },
        { name: "Web nâng cao", score: 9.0, grade: "A+" },
        { name: "Thiết kế giao diện", score: 9.2, grade: "A+" },
      ],
    },
    {
      label: "HK6",
      period: "2025-2026",
      gpa: 4.00,
      cumulativeGpa: 3.17,
      credits: 19,
      highlights: [
        { name: "Blockchain", score: 10.0, grade: "A+" },
        { name: "CSDL phân tán", score: 10.0, grade: "A+" },
        { name: "Kiểm định PM", score: 9.8, grade: "A+" },
        { name: "CN phần mềm NC", score: 9.0, grade: "A+" },
      ],
    },
  ],

  certifications: [
    {
      name: "Google Gemini Certificate",
      issuer: "Google",
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
    "Looking for a backend intern who's eager to learn and contribute? I'd love to hear from you. Let's build something great together.",
  availability: "Available for internship",

  emailjsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  emailjsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  emailjsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

// ============================================
// NAVIGATION
// ============================================
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
