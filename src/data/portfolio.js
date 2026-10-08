// Centralized portfolio data (sourced from master & ATS resumes + GitHub @miracleagha).

export const profile = {
  name: 'Miracle Agha',
  title: 'Full-Stack Developer | Node.js, React, TypeScript & APIs, Python',
  shortTitle: 'Backend Software Engineer',
  location: 'Remote · Nigeria',
  email: 'aghamiracle123@gmail.com',
  phone: '+2349160795546',
  github: 'https://github.com/miracleagha',
  githubHandle: 'miracleagha',
  portfolio: 'https://thalvor.onrender.com',
  tagline:
    'Backend Software Engineer with 3+ years shipping secure, scalable REST APIs across fintech, healthcare, education and public-safety. I design systems end-to-end — from schema to deployment.',
}

export const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Shipped', value: '15+' },
  { label: 'API Response Time Cut', value: '40%' },
  { label: 'DB Load Reduced', value: '60%' },
]

export const about = {
  summary: `Backend Software Engineer with 3 years hands-on experience designing and shipping secure,
scalable REST APIs and production systems across fintech, healthcare, education, and public-safety
domains. Core expertise in Node.js, Express.js, and TypeScript, with working proficiency in
Python (Django, Flask) and a strong foundation in database design (MongoDB, PostgreSQL, MySQL,
Redis), authentication/identity protocols (JWT, RBAC, SAML, OIDC), and cloud infrastructure
(AWS, Terraform, Docker, CI/CD).`,
  focus: `A cybersecurity background (TryHackMe, Cisco Introduction to Cybersecurity) informs a
security-first approach to API design, input validation, and OWASP-compliant architecture.
I use AI-assisted tools (Claude, GitHub Copilot, Ollama, Gemma) to accelerate delivery without
compromising code quality — and I own systems end-to-end, from schema design to deployment and
monitoring.`,
}

export const techStack = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'PHP', 'Java', 'Kotlin', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & APIs',
    items: [
      'Node.js',
      'Express.js',
      'Django',
      'Flask',
      'REST API Design',
      'JWT · SAML · OIDC',
      'RBAC',
      'Microservices',
      'Middleware',
    ],
  },
  {
    title: 'Databases',
    items: [
      'MongoDB (Mongoose)',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Schema Design',
      'Aggregation Pipelines',
      'Query Optimization',
      'Indexing',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'AWS',
      'Terraform (IaC)',
      'Docker',
      'Linux',
      'GitHub Actions CI/CD',
      'Render',
      'Vercel',
      'Cloudflare',
    ],
  },
  {
    title: 'Security & Testing',
    items: [
      'OWASP Best Practices',
      'Input Validation',
      'XSS / SQLi Prevention',
      'Secure Headers · CORS',
      'Jest · Mocha',
      'Swagger / OpenAPI',
    ],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'SCSS', 'Responsive UI'],
  },
  {
    title: 'AI-Assisted Engineering',
    items: ['Claude', 'GitHub Copilot', 'Ollama', 'Gemma', 'DeepSeek', 'Prompt Engineering'],
  },
]

export const experience = [
  {
    role: 'Backend Developer',
    company: 'Impact Team',
    location: 'Remote',
    period: 'Apr 2024 — Ongoing',
    highlights: [
      'Architected and maintained RESTful APIs serving a growing base of daily active users with Node.js, TypeScript, and Express.js.',
      'Designed and optimized MongoDB schemas, improving query performance with indexing and aggregation pipelines.',
      'Implemented secure auth flows using JWT, SAML, and OIDC, ensuring OWASP-compliant handling of user data.',
      'Collaborated with the frontend team to define API contracts and integrate React components end-to-end.',
      'Deployed and monitored applications on AWS and Render using Terraform IaC, maintaining high uptime.',
      'Documented APIs with Swagger/OpenAPI and built GitHub Actions CI/CD pipelines for automated testing and deploys.',
    ],
    achievement:
      'Cut API response time by 40% and introduced a Redis caching layer that reduced database load by 60%.',
    tags: ['Node.js', 'TypeScript', 'Python','MongoDB', 'AWS', 'Terraform', 'Redis'],
  },
  {
    role: 'Software Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Jan 2025 — Ongoing',
    highlights: [
      'Built full-stack solutions with Node.js, TypeScript, and React for 5 clients across multiple industries.',
      'Designed SQL and NoSQL database architectures with efficient querying and indexing.',
      'Integrated third-party APIs including payment gateways, email services, and SMS providers.',
      'Delivered 100% of projects on deadline with a 95% client satisfaction rate.',
    ],
    tags: ['Full-Stack', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Stripe', 'Paystack'],
  },
]

// category keys: backend | fullstack | ai | security | tooling
export const projects = [
  {
    name: 'Q Bank',
    tagline: 'Full-stack financial system with digital wallet, auth and transaction logs.',
    description:
      'Architected a secure digital wallet system with real-time balance tracking and transaction history. JWT auth with role-based access control, hardened token management, and MongoDB schemas for users, wallets, and transaction logs with referential integrity.',
    stack: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'JWT', 'Render'],
    categories: ['fullstack', 'backend'],
    featured: true,
    github: null,
    demo: null,
    private: true,
  },
  {
    name: 'JobConnect',
    tagline: 'Multi-role job marketplace with dual dashboards and file uploads.',
    description:
      'Full-stack dual-role platform with separate dashboards and role-based permissions. Resume & portfolio uploads via Cloudinary and RESTful endpoints for job postings and applications.',
    stack: ['Node.js', 'Express', 'React', 'MongoDB', 'Cloudinary'],
    categories: ['fullstack'],
    featured: true,
    github: null,
    demo: null,
    private: true,
  },
  {
    name: 'Subscription Management Tool',
    tagline: 'Automated subscription billing with cron-based cycles and tiered pricing.',
    description:
      'Developed automated subscription tracking with cron-based billing cycles and reminder logic. Built tiered pricing and feature-gating business logic — SaaS product thinking end-to-end.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Node-Cron', 'Stripe API'],
    categories: ['backend', 'fullstack'],
    featured: true,
    github: null,
    demo: null,
    private: true,
  },
  {
    name: 'VillageCare AI',
    tagline: 'Offline-first AI healthcare assistant for Community Health Officers.',
    description:
      'Offline AI healthcare assistant built for low-connectivity environments. Local AI integration lets Community Health Officers get decision support without an internet connection.',
    stack: ['Node.js', 'Local AI', 'Ollama', 'JavaScript'],
    categories: ['ai', 'fullstack'],
    featured: true,
    github: 'https://github.com/miracleagha/VillageCare-AI',
    demo: null,
  },
  {
    name: 'MedFlow — Patient Management',
    tagline: 'Healthcare management system with secure APIs and RBAC.',
    description:
      'Healthcare management system handling patient records with secure APIs, role-based access control, and audit-friendly data flows.',
    stack: ['Node.js', 'Express', 'MongoDB', 'TypeScript', 'RBAC'],
    categories: ['backend', 'fullstack'],
    featured: true,
    github: 'https://github.com/miracleagha/MedFlow-Patient-Management-System',
    demo: null,
  },
  {
    name: 'Crime Reporting & Control System',
    tagline: 'Centralized incident-reporting platform with workflow tracking.',
    description:
      'Centralized reporting platform with authentication, role management, and workflow tracking for incidents from intake through resolution.',
    stack: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
    categories: ['backend', 'security'],
    featured: true,
    github: 'https://github.com/miracleagha/Crime-Reporting-and-Control-System',
    demo: null,
  },
  {
    name: 'Smart Exam Hall Entry System',
    tagline: 'QR-based student verification and attendance platform.',
    description:
      'QR-based student verification and attendance tracking for institutional exam halls. Fast scan-in flow with session-aware validation.',
    stack: ['JavaScript', 'React', 'Node.js', 'Vercel'],
    categories: ['fullstack'],
    featured: false,
    github: 'https://github.com/miracleagha/Smart-Exam-Hall-Entry-System',
    demo: 'https://smart-exam-hall-entry-system-instit.vercel.app',
  },
  {
    name: 'Computer-Based Result Management',
    tagline: 'Academic result management with efficient database design.',
    description:
      'Academic result management platform with efficient database design, result compilation, and student-facing viewer.',
    stack: ['JavaScript', 'React', 'Node.js'],
    categories: ['fullstack'],
    featured: false,
    github: 'https://github.com/miracleagha/Computer-Based-Result-Management-System',
    demo: 'https://computer-based-result-management-sy.vercel.app',
  },
  {
    name: 'Focused Tab Enforcer',
    tagline: 'Browser extension that acts as an online examiner.',
    description:
      'Browser extension for exam integrity and productivity — monitors tab focus and enforces single-task mode during timed sessions.',
    stack: ['JavaScript', 'Browser Extension API', 'Chrome APIs'],
    categories: ['tooling', 'security'],
    featured: false,
    github: 'https://github.com/miracleagha/The-Focused-Tab-Enforcer',
    demo: null,
  },
  {
    name: 'AI-Based Study Timetable',
    tagline: 'AI-generated personalized study schedules.',
    description:
      'TypeScript app that generates adaptive study timetables based on course load, available hours, and learning goals.',
    stack: ['TypeScript', 'React', 'AI'],
    categories: ['ai', 'fullstack'],
    featured: false,
    github: 'https://github.com/miracleagha/AI-Based-Study-Timetable',
    demo: null,
  },
  {
    name: 'AcademiaAI Student Companion',
    tagline: 'AI-powered tool for student academic activities.',
    description:
      'AI-powered companion for students covering summaries, Q&A, and study support across coursework.',
    stack: ['TypeScript', 'React', 'AI'],
    categories: ['ai'],
    featured: false,
    github: 'https://github.com/miracleagha/AcademiaAI-Student-Companion',
    demo: null,
  },
  {
    name: 'Shared Utility Bill Splitter',
    tagline: 'Group-aware bill splitting with fair-share logic.',
    description:
      'TypeScript app for splitting shared utility bills across group members, with per-member share tracking and settlement.',
    stack: ['TypeScript', 'React'],
    categories: ['fullstack'],
    featured: false,
    github: 'https://github.com/miracleagha/Shared-Utility-Bill-splitter',
    demo: null,
  },
  {
    name: 'Campus Map',
    tagline: 'Interactive campus navigation app.',
    description:
      'Interactive campus navigation application helping students locate buildings, lecture halls, and amenities.',
    stack: ['JavaScript', 'React'],
    categories: ['fullstack'],
    featured: false,
    github: 'https://github.com/miracleagha/Campus-Map',
    demo: null,
  },
]

export const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'Chukwuemeka Odumegwu Ojukwu University',
    location: 'Uli, Anambra State, Nigeria',
    period: '2022 — 2026',
    detail:
      'Coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Web Development, Computer Networks, Cybersecurity.',
  },
]

export const certifications = [
  { title: 'TryHackMe — Junior Penetration Tester', issuer: 'TryHackMe' },
  { title: 'Cisco Introduction to Cybersecurity', issuer: 'Cisco' },
  { title: 'Full-Stack JavaScript Development', issuer: 'Coursera · freeCodeCamp · BroCode' },
  { title: 'Google Search Ads Certification', issuer: 'Google' },
  { title: 'Google Ads Measurement Certification', issuer: 'Google' },
  { title: '120-Hour International TEFL Certificate (Distinction)', issuer: 'TEFL' },
]

export const interests = [
  'Backend Engineering',
  'AI Engineering',
  'Distributed Systems',
  'Cloud Computing',
  'System Design',
  'Cybersecurity',
]

export const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'stack', label: 'Stack' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
]
