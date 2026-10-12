// Role-based portfolio data.
// Each role is a self-contained content pack that drives:
//   - The role selector card
//   - Hero / About / Tech Stack / Experience / Projects / Education / Contact sections
//   - The ATS-friendly PDF resume download
//
// Add or edit roles here — the UI and PDF generator both read from this file.

// -----------------------------------------------------------------------------
// Shared profile (name, GitHub, portfolio URL, etc.)
// -----------------------------------------------------------------------------

export const profile = {
  name: 'Miracle Agha',
  fullName: 'Miracle Uzoewulu Agha',
  email: 'aghamiracle123@gmail.com',
  github: 'https://github.com/miracleagha',
  githubHandle: 'miracleagha',
  portfolio: 'https://thalvor.onrender.com',
  portfolioLabel: 'thalvor.onrender.com',
  // WhatsApp uses an international format with no "+" or spaces.
  whatsapp: '2349160795546',
  photo: '/myphoto.jpg',
}

// -----------------------------------------------------------------------------
// Reusable building blocks
// -----------------------------------------------------------------------------

const SHARED_EDUCATION = {
  degree: 'B.Sc. Computer Science',
  school: 'Chukwuemeka Odumegwu Ojukwu University',
  location: 'Uli, Anambra State, Nigeria',
  period: '2022 — 2026',
  detail:
    'Coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Web Development, Computer Networks, Cybersecurity.',
}

const BASE_NAV = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'stack', label: 'Stack' },
  { to: 'experience', label: 'Experience' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
]

const DEV_NAV = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'stack', label: 'Stack' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
]

// -----------------------------------------------------------------------------
// ROLE 1 — Full-Stack Developer
// -----------------------------------------------------------------------------

const FULL_STACK = {
  id: 'full-stack',
  slug: 'full-stack',
  // --- Role selector card ---
  icon: 'Code2',
  accent: 'cyan',
  cardTitle: 'Full-Stack Developer',
  cardSubtitle: 'Node.js · React · TypeScript · Python',
  cardDescription:
    'Secure, scalable REST APIs and full-stack systems across fintech, healthcare and public safety.',
  cardChips: ['Node.js', 'React', 'TypeScript', 'AWS', 'MongoDB'],
  // --- Navbar ---
  navLabel: 'Full-Stack Dev',
  navLinks: DEV_NAV,
  // --- Hero ---
  heroTitle: 'Full-Stack Developer',
  heroSubtitle: 'Node.js, React, TypeScript & APIs, Python',
  heroShort: 'Backend Software Engineer',
  heroTagline:
    'Backend Software Engineer with 3+ years shipping secure, scalable REST APIs across fintech, healthcare, education and public-safety. I design systems end-to-end — from schema to deployment.',
  heroChips: ['Node.js', 'TypeScript', 'React', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
  // --- About ---
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
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Shipped', value: '15+' },
    { label: 'API Response Time Cut', value: '40%' },
    { label: 'DB Load Reduced', value: '60%' },
  ],
  pillars: [
    { icon: 'Server', title: 'APIs & Services', desc: 'REST, auth, caching, observability.' },
    { icon: 'Database', title: 'Data Modelling', desc: 'Schema design, indexing, query tuning.' },
    { icon: 'ShieldCheck', title: 'Security First', desc: 'OWASP, input validation, JWT/OIDC.' },
    { icon: 'Cloud', title: 'Cloud & CI/CD', desc: 'AWS, Terraform, Docker, GitHub Actions.' },
    { icon: 'BrainCircuit', title: 'AI-Assisted Dev', desc: 'Claude, Copilot, Ollama, Gemma.' },
    { icon: 'Code2', title: 'Full-Stack Delivery', desc: 'React + Node/Python, end-to-end.' },
  ],
  // --- Tech Stack ---
  stackEyebrow: 'Tech Stack',
  stackHeading: 'Tools I ship production systems with',
  stackBody:
    'A pragmatic toolkit tuned for backend-heavy, security-aware, cloud-deployed products.',
  stack: [
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
  ],
  // --- Experience ---
  experience: [
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
      tags: ['Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Terraform', 'Redis'],
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
  ],
  // --- Projects ---
  projectsEyebrow: 'Projects',
  projectsHeading: 'Selected work',
  projectsBody:
    'A mix of production systems, client builds, and open-source projects — from fintech wallets to offline-first AI assistants.',
  projectCategories: [
    { value: 'all', label: 'All' },
    { value: 'featured', label: 'Featured' },
    { value: 'fullstack', label: 'Full-Stack' },
    { value: 'backend', label: 'Backend' },
    { value: 'ai', label: 'AI' },
    { value: 'security', label: 'Security' },
    { value: 'tooling', label: 'Tooling' },
  ],
  projects: [
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
  ],
  // --- Education / Certifications / Interests ---
  education: [SHARED_EDUCATION],
  certifications: [
    { title: 'TryHackMe — Junior Penetration Tester', issuer: 'TryHackMe' },
    { title: 'Cisco Introduction to Cybersecurity', issuer: 'Cisco' },
    { title: 'Full-Stack JavaScript Development', issuer: 'Coursera · freeCodeCamp · BroCode' },
    { title: 'Google Search Ads Certification', issuer: 'Google' },
    { title: 'Google Ads Measurement Certification', issuer: 'Google' },
    { title: '120-Hour International TEFL Certificate (Distinction)', issuer: 'TEFL' },
  ],
  interests: [
    'Backend Engineering',
    'AI Engineering',
    'Distributed Systems',
    'Cloud Computing',
    'System Design',
    'Cybersecurity',
  ],
  // --- Contact ---
  phone: '+2349160795546',
  location: 'Remote · Nigeria',
  // --- Resume PDF ---
  resumeFileName: 'Full Stack Developer Miracle Agha.pdf',
  resumeTitle: 'Full-Stack Developer | Node.js, React, TypeScript & APIs, Python',
  resumeKeywords: [
    'Full-Stack Developer',
    'Backend Engineer',
    'Node.js',
    'React',
    'TypeScript',
    'Python',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Docker',
    'REST APIs',
  ],
}

// -----------------------------------------------------------------------------
// ROLE 2 — Coding Tutor
// -----------------------------------------------------------------------------

const CODING_TUTOR = {
  id: 'coding-tutor',
  slug: 'coding-tutor',
  icon: 'GraduationCap',
  accent: 'emerald',
  cardTitle: 'Coding Tutor',
  cardSubtitle: 'Programming · CS Fundamentals · Project-Based Learning',
  cardDescription:
    'Teaching Python, JavaScript, TypeScript, databases and web development with practical, project-based lessons.',
  cardChips: ['Python', 'JavaScript', 'React', 'Node.js', '1-on-1 Teaching'],
  navLabel: 'Coding Tutor',
  navLinks: DEV_NAV,
  heroTitle: 'Coding Tutor',
  heroSubtitle: 'Software Engineer · Computer Science Educator',
  heroShort: 'Patient, project-based tutor',
  heroTagline:
    'Patient, practical Coding Tutor and Software Engineer with 3+ years of teaching experience. I help learners understand not just what code does, but why it works — through step-by-step explanations, exercises, debugging, and real projects.',
  heroChips: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Node.js', 'React', 'SQL', 'HTML / CSS'],
  summary: `Patient and practical Coding Tutor and Software Engineer with 3+ years of teaching experience
and a Computer Science background. Experienced in teaching programming, mathematics, physics, computer
applications, and technology-related subjects to learners with different levels of technical knowledge.
Skilled across Python, JavaScript, TypeScript, Java, Kotlin, PHP, SQL, HTML, CSS, and backend
development with Node.js and Express.js.`,
  focus: `My approach is project-based and adaptive. I break complex concepts into simple, understandable
steps for students with limited technical experience and progressively challenge stronger students with
real-world examples. I help learners build the habits — reading code, debugging, breaking problems down —
that make them independent engineers.`,
  stats: [
    { label: 'Years Teaching', value: '3+' },
    { label: 'Languages Taught', value: '10+' },
    { label: 'Online 1-on-1', value: '100%' },
    { label: 'Student Projects', value: '20+' },
  ],
  pillars: [
    { icon: 'Users', title: 'One-on-One Teaching', desc: 'Lessons tailored to each learner.' },
    { icon: 'BookOpen', title: 'Project-Based', desc: 'Learn by building real applications.' },
    { icon: 'MessageCircle', title: 'Clear Explanations', desc: 'Break down the “why”, not just the “what”.' },
    { icon: 'Target', title: 'Goal-Oriented', desc: 'Pace adjusted to the student\'s goals.' },
    { icon: 'Code2', title: 'Full-Stack Range', desc: 'From HTML/CSS to backend APIs.' },
    { icon: 'HandHelping', title: 'Debugging Support', desc: 'Hands-on help with assignments & projects.' },
  ],
  stackEyebrow: 'Teaching Stack',
  stackHeading: 'What I teach',
  stackBody:
    'Programming languages, frameworks and tools I use with students — from first-code beginners to intermediate developers shipping real projects.',
  stack: [
    {
      title: 'Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'PHP', 'SQL', 'HTML', 'CSS', 'Bash'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Vite', 'Tailwind CSS', 'SCSS', 'Responsive Design', 'DOM & Events'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC', 'bcrypt', 'File Uploads', 'AI API Integration'],
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'Mongoose', 'SQL', 'Schema Design', 'CRUD', 'Query Basics'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Render', 'Vercel', 'AWS basics', 'GitHub Actions'],
    },
    {
      title: 'Computer Science',
      items: [
        'Programming Fundamentals',
        'Object-Oriented Programming',
        'Algorithms & Data Structures',
        'Debugging',
        'Problem Solving',
        'Web Development',
      ],
    },
    {
      title: 'Cybersecurity & IT (Intro)',
      items: ['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'Splunk', 'Kali Linux', 'TCP/IP · OSI'],
    },
  ],
  experience: [
    {
      role: 'Online Tutor / Private Instructor',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2024 — Ongoing',
      highlights: [
        'Provide online one-on-one and group instruction in programming, mathematics, physics, computer applications, and technology-related subjects.',
        'Teach programming concepts from beginner to intermediate level using practical examples and guided exercises.',
        'Break complex concepts into simple, understandable steps for students with limited technical experience.',
        'Help learners understand programming logic, variables, functions, loops, conditionals, data structures, debugging, and problem-solving.',
        'Teach Microsoft Excel and other Microsoft tools alongside computer and technology subjects.',
        'Support learners with programming assignments, projects, debugging, and technical questions.',
      ],
      tags: ['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'HTML/CSS'],
    },
    {
      role: 'Mathematics Tutor',
      company: 'Online & Secondary School',
      location: 'Remote / Nigeria',
      period: '2022 — Ongoing',
      highlights: [
        'Teach mathematics through online and in-person lessons using structured, step-by-step explanations.',
        'Develop exercises based on individual student needs and learning levels.',
        'Help students strengthen analytical reasoning and problem-solving skills.',
      ],
      tags: ['Mathematics', 'Problem Solving', '1-on-1'],
    },
    {
      role: 'Mathematics Teacher',
      company: 'Secondary School',
      location: 'Nigeria',
      period: '6 Months',
      highlights: [
        'Taught mathematics to secondary-school students and prepared lessons and exercises for different learning levels.',
        'Assisted students with problem-solving and examination preparation.',
      ],
      tags: ['Classroom Teaching', 'Curriculum', 'Exam Prep'],
    },
    {
      role: 'Assistant Intern — Administration / Customer Support',
      company: 'Saint Patrick\u2019s Secondary School, Ichi',
      location: 'Nigeria',
      period: '2020 — 2021',
      highlights: [
        'Provided administrative and customer support assistance and communicated with students, staff, parents and visitors.',
        'Assisted with documentation, organization, and day-to-day administrative activities.',
      ],
      tags: ['Admin Support', 'Communication', 'Documentation'],
    },
  ],
  projectsEyebrow: 'Teaching Projects',
  projectsHeading: 'Projects I use for teaching',
  projectsBody:
    'Real applications I\'ve built and that I use with students to make concepts concrete — not just toy examples.',
  projectCategories: [
    { value: 'all', label: 'All' },
    { value: 'featured', label: 'Featured' },
    { value: 'fullstack', label: 'Full-Stack' },
    { value: 'backend', label: 'Backend' },
    { value: 'ai', label: 'AI' },
  ],
  projects: [
    {
      name: 'Crime Reporting & Control System',
      tagline: 'Database-driven reporting with auth and workflow tracking.',
      description:
        'Database-driven application for managing crime-related reports and information. Great teaching example for authentication, role management, and workflow tracking.',
      stack: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      categories: ['fullstack', 'backend'],
      featured: true,
      github: 'https://github.com/miracleagha/Crime-Reporting-and-Control-System',
      demo: null,
    },
    {
      name: 'MedFlow — Patient Management',
      tagline: 'Patient-management app teaching healthcare workflows.',
      description:
        'Patient-management application for organizing patient information and healthcare workflows. Useful for teaching RBAC and secure API design.',
      stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      categories: ['fullstack', 'backend'],
      featured: true,
      github: 'https://github.com/miracleagha/MedFlow-Patient-Management-System',
      demo: null,
    },
    {
      name: 'Computer-Based Result Management',
      tagline: 'Student result management and workflow automation.',
      description:
        'Application for managing student academic results and automating result-related workflows. Good showcase of CRUD, forms, and database modelling.',
      stack: ['JavaScript', 'Node.js', 'MongoDB'],
      categories: ['fullstack'],
      featured: true,
      github: 'https://github.com/miracleagha/Computer-Based-Result-Management-System',
      demo: 'https://computer-based-result-management-sy.vercel.app',
    },
    {
      name: 'Smart Exam Hall Entry Verification',
      tagline: 'QR-code-based entry verification concept.',
      description:
        'QR-code-based examination entry verification concept for student identification and access management.',
      stack: ['JavaScript', 'Node.js'],
      categories: ['fullstack'],
      featured: false,
      github: 'https://github.com/miracleagha/Smart-Exam-Hall-Entry-System',
      demo: 'https://smart-exam-hall-entry-system-instit.vercel.app',
    },
    {
      name: 'The Focused Tab Enforcer',
      tagline: 'Productivity-focused web app for staying on task.',
      description:
        'Productivity-focused web application designed to help users maintain focus while working online.',
      stack: ['JavaScript', 'React'],
      categories: ['fullstack'],
      featured: false,
      github: 'https://github.com/miracleagha/The-Focused-Tab-Enforcer',
      demo: null,
    },
    {
      name: 'VillageCare AI',
      tagline: 'Offline AI concept for Community Health Officers.',
      description:
        'Offline AI-assisted concept intended to support Community Health Officers in environments with limited connectivity.',
      stack: ['Python', 'AI / LLM', 'Ollama'],
      categories: ['ai'],
      featured: false,
      github: 'https://github.com/miracleagha/VillageCare-AI',
      demo: null,
    },
  ],
  education: [SHARED_EDUCATION],
  certifications: [
    { title: '120-Hour International TEFL Certificate (Distinction)', issuer: 'TEFLProfessional Institute' },
    { title: 'TryHackMe — Pre-Security Path', issuer: 'TryHackMe' },
    { title: 'TryHackMe — Junior Penetration Tester Path', issuer: 'TryHackMe' },
    { title: 'Google Ads — Search & Measurement', issuer: 'Google' },
  ],
  interests: [
    'Patient Explanations',
    'Project-Based Learning',
    'Debugging Support',
    'Adaptive Teaching',
    'Problem Solving',
    'Mentoring',
  ],
  phone: '+2349160795546',
  location: 'Remote · Nigeria',
  resumeFileName: 'Coding Tutor Miracle Agha.pdf',
  resumeTitle: 'Coding Tutor | Software Engineer | Computer Science Educator',
  resumeKeywords: [
    'Coding Tutor',
    'Software Engineer',
    'Computer Science Educator',
    'Python',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'React',
    'SQL',
    'Online Tutor',
  ],
  // PDF-only extras
  teachingApproach: [
    'Patient — explains concepts without assuming prior knowledge.',
    'Practical — uses projects and real-world examples alongside theory.',
    'Adaptive — adjusts lessons to the student\u2019s level and goals.',
    'Problem-solving focused — encourages independent problem solving.',
    'Project-based — progressively challenging projects turn concepts into practical skills.',
    'Technology-focused — connects programming to the tools used in real software development.',
  ],
  strengths: [
    'Communication',
    'Patience',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
    'Technical Writing',
    'Time Management',
    'Mentoring',
    'Team Collaboration',
    'Independent Learning',
  ],
}

// -----------------------------------------------------------------------------
// ROLE 3 — Benefits Coordinator
// -----------------------------------------------------------------------------

const BENEFITS_COORDINATOR = {
  id: 'benefits-coordinator',
  slug: 'benefits-coordinator',
  icon: 'HeartHandshake',
  accent: 'amber',
  cardTitle: 'Benefits Coordinator',
  cardSubtitle: 'Client Success · Benefits Education · Remote',
  cardDescription:
    'Client-focused remote professional guiding people through benefits, onboarding and enrollment.',
  cardChips: ['Client Success', 'CRM', 'Remote', 'Virtual Meetings'],
  navLabel: 'Benefits Coordinator',
  navLinks: BASE_NAV,
  heroTitle: 'Benefits Coordinator',
  heroSubtitle: 'Client Success · Benefits Education · Remote Support',
  heroShort: 'Client-focused remote professional',
  heroTagline:
    'Detail-oriented and client-focused Benefits Coordinator with proven ability to explain complex information clearly, guide clients through decision-making, and deliver exceptional customer experiences across virtual channels.',
  heroChips: [
    'Client Success',
    'Benefits Education',
    'CRM Systems',
    'Virtual Meetings',
    'Email / Chat / Phone',
    'Onboarding',
  ],
  summary: `Detail-oriented and client-focused Benefits Coordinator with strong communication, customer
support, and remote collaboration experience. Proven ability to explain complex information clearly,
guide clients through decision-making, and deliver exceptional customer experiences. Experienced in
virtual communication, onboarding, CRM tools, and managing multiple client relationships simultaneously.`,
  focus: `Background in teaching, customer support, and technical environments strengthens my ability to
educate clients about benefits and provide tailored solutions. I am self-motivated and comfortable
working independently, with excellent organizational skills and strong attention to detail — focused on
building long-term client relationships and ensuring smooth enrollment and onboarding processes.`,
  stats: [
    { label: 'Client Focus', value: '100%' },
    { label: 'Remote Experience', value: '3+ yrs' },
    { label: 'Response Style', value: 'Fast · Clear' },
    { label: 'Availability', value: 'Full-Time' },
  ],
  pillars: [
    { icon: 'HeartHandshake', title: 'Client Relationship', desc: 'Build long-term, trust-based relationships.' },
    { icon: 'MessageCircle', title: 'Clear Communication', desc: 'Explain complex info simply and calmly.' },
    { icon: 'Headset', title: 'Multi-Channel Support', desc: 'Email, chat and phone, handled with care.' },
    { icon: 'ClipboardList', title: 'Onboarding & Enrollment', desc: 'Smooth, documented, friendly process.' },
    { icon: 'Target', title: 'Attention to Detail', desc: 'Accurate records, no missed steps.' },
    { icon: 'Zap', title: 'Fast Learner', desc: 'Pick up new CRMs and tools quickly.' },
  ],
  stackEyebrow: 'Tools & Competencies',
  stackHeading: 'Tools I work with and how I show up',
  stackBody:
    'Tools, platforms, and client-facing competencies I bring to a benefits and client-success role.',
  stack: [
    {
      title: 'Core Competencies',
      items: [
        'Client Relationship Management',
        'Benefits Communication & Education',
        'Customer Support & Client Success',
        'Client Onboarding & Enrollment Support',
        'Problem Solving & Decision Guidance',
        'Client Retention & Relationship Building',
        'Process Improvement & Documentation',
        'Multi-Client Management',
      ],
    },
    {
      title: 'CRM & Platforms',
      items: ['Salesforce (Familiar)', 'Gusto (Familiar)', 'Ease (Quick Learner)', 'Email Management', 'Online Collaboration Tools'],
    },
    {
      title: 'Virtual Meetings',
      items: ['Zoom', 'Google Meet', 'Virtual Presentations', 'Virtual Onboarding'],
    },
    {
      title: 'Office & Productivity',
      items: ['Google Workspace (Docs, Sheets, Drive)', 'Microsoft Office (Word, Excel, PowerPoint)', 'Calendar & Scheduling'],
    },
    {
      title: 'Communication',
      items: ['Email', 'Chat', 'Phone Support', 'Clear Communication of Complex Info'],
    },
    {
      title: 'Remote Work',
      items: ['Independent Work Environment', 'Time Management', 'Virtual Collaboration', 'Performance-Based Delivery'],
    },
  ],
  experience: [
    {
      role: 'Client Support Specialist / Chat Operator (Remote)',
      company: 'Dating Platform Industry',
      location: 'Remote',
      period: '2025 — 2025',
      highlights: [
        'Served as primary point of contact for clients, providing guidance and support.',
        'Built strong client relationships and improved user retention.',
        'Communicated clearly with clients to understand needs and recommend solutions.',
        'Managed multiple conversations simultaneously while maintaining high quality service.',
        'Worked independently in a fully remote environment while meeting performance targets.',
        'Maintained client satisfaction through responsive communication and support.',
      ],
      tags: ['Chat Support', 'CRM Tools', 'Remote', 'Retention'],
    },
    {
      role: 'English Language Instructor (Online & Individual Lessons)',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 — Ongoing',
      highlights: [
        'Conducted one-on-one virtual sessions explaining complex concepts clearly.',
        'Hosted virtual meetings via Zoom and other online platforms.',
        'Guided clients (students) through learning plans and progress reviews.',
        'Created structured onboarding experience for new learners.',
        'Managed scheduling, communication, and client relationships.',
        'Customized solutions based on individual client needs.',
      ],
      tags: ['Zoom', 'Onboarding', 'Client Mgmt', 'Scheduling'],
    },
    {
      role: 'High School Mathematics & English Instructor',
      company: 'Secondary School',
      location: 'Nigeria',
      period: '6 Months',
      highlights: [
        'Delivered structured lessons and guided students through complex topics.',
        'Explained technical concepts in clear, simple language.',
        'Built supportive relationships with students.',
        'Managed classroom organization and scheduling.',
      ],
      tags: ['Classroom', 'Communication', 'Mentoring'],
    },
  ],
  projects: [],
  education: [
    {
      degree: 'Bachelor\u2019s Degree in Computer Science',
      school: 'Chukwuemeka Odumegwu Ojukwu University',
      location: 'Uli, Anambra State, Nigeria',
      period: 'Expected 2026',
      detail:
        'Relevant Coursework: Database Design and Management, Linear Algebra, Operations Research, Cybersecurity Fundamentals.',
    },
  ],
  certifications: [
    { title: 'TEFL Certificate (Teaching English as a Foreign Language)', issuer: 'TEFLProfessional Institute' },
    { title: 'Cisco Introduction to Cybersecurity', issuer: 'Cisco' },
    { title: 'TryHackMe — Pre-Security Path', issuer: 'TryHackMe' },
  ],
  interests: [
    'Client-First Approach',
    'Strong Listening',
    'Problem Solving',
    'Professional Communication',
    'Relationship Building',
    'Positive Attitude',
  ],
  phone: '+2349160795546',
  location: 'Remote',
  resumeFileName: 'Benefits Coordinator Miracle Agha.pdf',
  resumeTitle: 'Benefits Coordinator | Client Success | Remote',
  resumeKeywords: [
    'Benefits Coordinator',
    'Client Success',
    'Customer Support',
    'Remote',
    'CRM',
    'Salesforce',
    'Gusto',
    'Virtual Meetings',
    'Onboarding',
    'Enrollment',
  ],
  // PDF-only extras
  keyStrengths: [
    'Strong Communication Skills',
    'Client-Focused Mindset',
    'Remote Work Discipline',
    'Fast Learner & Adaptable',
    'Professional & Reliable',
    'Excellent Organization Skills',
    'Strong Attention to Detail',
    'Self-Motivated & Independent',
  ],
  availability: 'Available for Full-Time Remote Role · Flexible Schedule · Immediate Start Available.',
}

// -----------------------------------------------------------------------------
// ROLE 4 — Administrative & HR Assistant
// -----------------------------------------------------------------------------

const ADMIN_HR = {
  id: 'admin-hr',
  slug: 'admin-hr',
  icon: 'FileSpreadsheet',
  accent: 'violet',
  cardTitle: 'Administrative & HR Assistant',
  cardSubtitle: 'Administration · Records · Excel & Google Sheets',
  cardDescription:
    'Organised, detail-oriented support for admin, HR, records management and documentation.',
  cardChips: ['MS Office', 'Google Sheets', 'Records', 'Documentation'],
  navLabel: 'Admin & HR',
  navLinks: BASE_NAV,
  heroTitle: 'Administrative & HR Assistant',
  heroSubtitle: 'Administration · Records Management · Excel & Google Sheets',
  heroShort: 'Organised & dependable admin support',
  heroTagline:
    'Organised and detail-oriented administrative professional experienced in records management, documentation, Microsoft Office, Excel and Google Sheets — supporting day-to-day operations and keeping information accurate and accessible.',
  heroChips: [
    'Microsoft Excel',
    'Microsoft Word',
    'PowerPoint',
    'Google Sheets',
    'Records Management',
    'Documentation',
  ],
  summary: `Organised and detail-oriented administrative professional with experience in administration,
customer support, documentation, record management, Microsoft Office, Excel and Google Sheets.
Experienced in supporting day-to-day administrative operations, handling information accurately,
communicating professionally, and maintaining organised records.`,
  focus: `Strong ability to manage multiple tasks, create and maintain spreadsheets, organise documents,
track information, and provide reliable administrative support. A fast learner with a strong work
ethic and genuine interest in contributing to HR and administrative operations within a professional
organisation.`,
  stats: [
    { label: 'Admin Experience', value: '3+ yrs' },
    { label: 'Primary Tool', value: 'Excel' },
    { label: 'Work Style', value: 'Organised' },
    { label: 'Attention', value: 'Detail-First' },
  ],
  pillars: [
    { icon: 'FileSpreadsheet', title: 'Spreadsheets', desc: 'Excel & Google Sheets for daily tracking.' },
    { icon: 'ClipboardList', title: 'Records Management', desc: 'Organised, searchable documentation.' },
    { icon: 'MessageCircle', title: 'Professional Communication', desc: 'Written and verbal, with care.' },
    { icon: 'Target', title: 'Attention to Detail', desc: 'Accurate information, every time.' },
    { icon: 'Zap', title: 'Fast Learner', desc: 'Quick to pick up new admin systems.' },
    { icon: 'CheckCircle2', title: 'Dependable', desc: 'Deadlines met, tasks completed.' },
  ],
  stackEyebrow: 'Tools & Skills',
  stackHeading: 'Tools I use every day',
  stackBody:
    'Office productivity, documentation, and administrative tools I use to keep operations organised and information flowing.',
  stack: [
    {
      title: 'Microsoft Office',
      items: ['Excel', 'Word', 'PowerPoint'],
    },
    {
      title: 'Google Workspace',
      items: ['Google Sheets', 'Google Docs', 'Google Drive'],
    },
    {
      title: 'Records & Data',
      items: ['Data Entry', 'Digital File Management', 'Spreadsheets', 'Basic Database Management'],
    },
    {
      title: 'Collaboration',
      items: ['Online Collaboration Tools', 'Scheduling & Calendar', 'Email Management'],
    },
    {
      title: 'Core Skills',
      items: [
        'Information Management',
        'Documentation',
        'Problem Solving',
        'Data Management',
        'Computer Applications',
      ],
    },
    {
      title: 'Soft Skills',
      items: [
        'Highly Organised',
        'Attention to Detail',
        'Written & Verbal Communication',
        'Multi-Tasking',
        'Deadline-Oriented',
      ],
    },
  ],
  experience: [
    {
      role: 'Online Tutor / Independent Educator',
      company: 'Online & Private Lessons',
      location: 'Remote',
      period: '2024 — Ongoing',
      highlights: [
        'Manage lesson schedules, student information and learning materials in an organised manner.',
        'Use Microsoft Excel, Google Sheets and other digital tools to organise information and track activities.',
        'Communicate regularly with students and maintain professional relationships.',
        'Plan and coordinate lessons according to individual goals and schedules.',
        'Manage multiple students and responsibilities while maintaining attention to detail.',
        'Develop and maintain digital documents, spreadsheets and learning resources.',
      ],
      tags: ['Excel', 'Google Sheets', 'Scheduling', 'Documentation'],
    },
    {
      role: 'Customer Support / Administrative Support',
      company: 'Saint Patrick\u2019s Secondary School, Ichi',
      location: 'Nigeria',
      period: '1 Year',
      highlights: [
        'Provided professional support and assistance to students, staff and other stakeholders.',
        'Responded to enquiries and helped resolve routine issues efficiently.',
        'Maintained accurate information while handling multiple requests and responsibilities.',
        'Communicated clearly with different individuals and maintained a professional attitude.',
        'Supported administrative processes through documentation, coordination and information management.',
      ],
      tags: ['Customer Support', 'Admin', 'Documentation'],
    },
    {
      role: 'Administrative Intern',
      company: 'Saint Patrick\u2019s Secondary School, Ichi',
      location: 'Nigeria',
      period: '2020 — 2021',
      highlights: [
        'Supported the administration department with day-to-day office and administrative activities.',
        'Assisted with organising, updating and maintaining records and documents.',
        'Handled administrative information accurately and helped ensure documents were properly organised and accessible.',
        'Assisted with communication and coordination of routine administrative activities.',
        'Provided support to staff and visitors while maintaining a professional and helpful approach.',
        'Worked with Microsoft Office tools for documentation and administrative tasks.',
      ],
      tags: ['Admin', 'Records', 'MS Office'],
    },
  ],
  projects: [],
  education: [
    {
      degree: 'B.Sc. Computer Science',
      school: 'Chukwuemeka Odumegwu Ojukwu University',
      location: 'Uli, Anambra State, Nigeria',
      period: 'Expected 2026',
      detail:
        'Relevant strengths: Information Management, Computer Applications, Data Management, Documentation, Problem Solving, Microsoft Office & Digital Tools.',
    },
  ],
  certifications: [
    {
      title: '120-Hour International TEFL Certificate — Distinction in all modules',
      issuer: 'TEFLProfessional Institute · October 2024',
    },
    { title: 'Google Ads Search Certification', issuer: 'Google' },
    { title: 'Google Ads Measurement Certification', issuer: 'Google' },
  ],
  interests: [
    'Highly Organised',
    'Attention to Detail',
    'Service-Oriented',
    'Patient',
    'Professional',
    'Fast Learner',
  ],
  phone: '+2349160795546',
  location: 'Nigeria',
  resumeFileName: 'Administrative HR Assistant Miracle Agha.pdf',
  resumeTitle: 'Administrative & HR Assistant | Records | Excel & Google Sheets',
  resumeKeywords: [
    'Administrative Assistant',
    'HR Assistant',
    'Records Management',
    'Excel',
    'Google Sheets',
    'Documentation',
    'Microsoft Office',
    'Data Entry',
  ],
  additionalStrengths: [
    'Highly organised and dependable',
    'Strong attention to detail',
    'Good written and verbal communication',
    'Comfortable working with spreadsheets and digital records',
    'Quick to learn new administrative systems and software',
    'Able to handle multiple tasks and meet deadlines',
    'Professional, patient and service-oriented',
  ],
}

// -----------------------------------------------------------------------------
// Export
// -----------------------------------------------------------------------------

export const roles = [FULL_STACK, CODING_TUTOR, BENEFITS_COORDINATOR, ADMIN_HR]

export const rolesById = Object.fromEntries(roles.map((r) => [r.id, r]))

export function getRole(id) {
  return rolesById[id] ?? null
}

export const DEFAULT_ROLE_ID = 'full-stack'
