// Static Portfolio Data for Ashish Pal (ashupal86)
// Real data gathered from GitHub profile and LinkedIn

export const profileData = {
  name: "Ashish Pal",
  username: "ashupal86",
  title: "Aspiring Developer | 3+ Years Self-Learning | Python & Flask Enthusiast",
  bio: "💻 Self-taught Developer with 3+ years of learning journey | 🌐 Flask Enthusiast | 📦 Exploring DevOps 🚀 Passionate about building APIs, web apps, and continuous learning. 3rd Year CS Student at NIET",
  location: "Greater Noida, Uttar Pradesh, India",
  website: "https://ashu.devinit.in",
  github: "https://github.com/ashupal86",
  linkedin: "https://linkedin.com/in/ashish-pal-5725a6257",
  email: "palbro86@gmail.com",
  phone: "+91-7428450179",
  
  stats: {
    
    followers: 14,
    following: 26,
    publicRepos: 42,
    totalStars: 7
  },
  
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Noida Institute of Engineering and Technology (NIET)",
    location: "Greater Noida, Uttar Pradesh",
    year: "3rd Year (Currently Pursuing)",
    cgpa: "6.4/10",
    status: "Currently pursuing"
  }
};

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My portfolio is inspired from the appearance of bash terminal. I love terminals and that give me inspiration to build and deploy a web based terminal portfolio website.",
    fullDescription: "A modern, responsive portfolio website showcasing my skills and projects. Built with React and Vite, featuring a clean design inspired by terminal aesthetics.",
    category: "frontend",
    featured: true,
    technologies: ["React", "Vite", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ashupal86/portfolio",
    demo: "https://portfolio-9ucx.onrender.com/",
    status: "live",
    features: [
      "Responsive design for all devices",
      "Modern React architecture with Vite",
      "Terminal-inspired aesthetic",
      "Fast loading and optimized performance",
      "SEO optimized with meta tags"
    ],
    lastUpdated: "2024-12-15",
    stars: 0,
    forks: 0
  },
  {
    id: 2,
    title: "My Manager",
    description: "An Android app built with Java and SQLite database to digitalize the bookkeeping of shop owners. It replaces their daily basic calculator and helps them efficiently manage customer bills, daily profits, and track who is taking too much udhar (credit) from the shop.",
    fullDescription: "A comprehensive Android application designed specifically for small shop owners to modernize their business operations. Built with Java and SQLite, it serves as a complete business management solution.",
    category: "mobile",
    featured: true,
    technologies: ["Java", "Android Studio", "SQLite", "XML"],
    github: "https://github.com/ashupal86/my-manager",
    status: "completed",
    features: [
      "Digital bookkeeping system",
      "Built-in calculator replacement",
      "Customer bill management",
      "Daily profit tracking",
      "Credit (udhar) monitoring system",
      "Offline-first SQLite database",
      "User-friendly interface for shop owners"
    ],
    lastUpdated: "2024-09-30",
    stars: 0,
    forks: 0
  },
  {
    id: 3,
    title: "Notes API",
    description: "API for creating apps and storing notes on a server for syncing across all the devices",
    fullDescription: "A comprehensive RESTful API for note management with CRUD operations, structured JSON responses, and robust error handling. Perfect for building note-taking applications.",
    category: "backend",
    featured: true,
    technologies: ["Python", "Flask", "SQLite", "REST API"],
    github: "https://github.com/ashupal86/Notes-api",
    status: "active",
    features: [
      "Complete CRUD operations for notes",
      "Cross-device synchronization",
      "Structured JSON responses",
      "Error handling and validation",
      "SQLite database integration"
    ],
    lastUpdated: "2024-11-30",
    stars: 0,
    forks: 0
  },
  {
    id: 4,
    title: "Blog Website",
    description: "A dynamic blog platform featuring user authentication, post management, and responsive design.",
    fullDescription: "A full-featured blog website with user authentication, post creation, editing, and management capabilities. Built with Flask and featuring a responsive design.",
    category: "fullstack",
    featured: true,
    technologies: ["HTML", "CSS", "Python", "Flask", "SQLite"],
    github: "https://github.com/ashupal86/Blog-Website",
    status: "completed",
    features: [
      "User authentication system",
      "Create, edit, and delete posts",
      "Responsive design",
      "Comment system",
      "User dashboard"
    ],
    lastUpdated: "2024-09-15",
    stars: 1,
    forks: 0
  },
  {
    id: 5,
    title: "YouTube Video Downloader",
    description: "Download any youtube video using this docker image. This uses the pytube library of python to download the video.",
    fullDescription: "A dockerized YouTube video downloader that uses Python's pytube library to download videos in various formats and qualities.",
    category: "devops",
    featured: true,
    technologies: ["Python", "Docker", "PyTube"],
    github: "https://github.com/ashupal86/Youtube-Video",
    status: "active",
    features: [
      "Docker containerization",
      "Multiple video format support",
      "Quality selection options",
      "Batch download capability",
      "Easy deployment"
    ],
    lastUpdated: "2024-08-10",
    stars: 0,
    forks: 0
  },
  {
    id: 6,
    title: "Android Calculator",
    description: "This is an android calculator built in java. I learned a lot of java concepts while building this as this is pure array modification to solve the problem. This does not use any type of external library to solve the problem.",
    fullDescription: "A fully functional Android calculator application built in Java without external libraries, using pure array manipulation for mathematical operations.",
    category: "mobile",
    featured: false,
    technologies: ["Java", "Android Studio", "XML"],
    github: "https://github.com/ashupal86/Bharat_intern_calculator",
    status: "completed",
    features: [
      "Basic arithmetic operations",
      "Pure Java implementation",
      "No external dependencies",
      "Custom array-based calculation logic",
      "Android native UI"
    ],
    lastUpdated: "2024-07-20",
    stars: 0,
    forks: 0
  },
  {
    id: 7,
    title: "Self-Hosted Homelab",
    description: "A Proxmox server running multiple containers including a Windows 11 Pro VM with GPU passthrough as my daily driver, TrueNAS Scale for NAS storage, and multiple Linux VMs for self-hosted services, testing, and debugging with snapshot restore capabilities.",
    fullDescription: "A comprehensive homelab setup built on Proxmox virtualization platform, featuring enterprise-grade infrastructure for personal use, development, and learning.",
    category: "devops",
    featured: true,
    technologies: ["Proxmox", "Windows 11 Pro", "TrueNAS Scale", "Linux VMs", "GPU Passthrough", "Docker", "Virtualization"],
    github: "https://github.com/ashupal86/homelab-setup",
    status: "ongoing",
    features: [
      "Proxmox virtualization platform",
      "Windows 11 Pro VM with GPU passthrough",
      "Native OS speed with display connectivity",
      "TrueNAS Scale for NAS storage",
      "Self-hosted file management services",
      "Photo storage alternatives",
      "Linux testing and debugging environment",
      "VM snapshot and restore functionality",
      "Multiple containerized services"
    ],
    lastUpdated: "2024-12-01",
    stars: 2,
    forks: 1
  }
];

export const skillsData = {
  languages: [
    { name: "Python", level: 90, category: "backend", primary: true },
    { name: "JavaScript", level: 85, category: "frontend", primary: true },
    { name: "Java", level: 80, category: "backend", primary: true },
    { name: "HTML/CSS", level: 90, category: "frontend", primary: true },
    { name: "C++", level: 75, category: "programming", primary: false },
    { name: "SQL", level: 80, category: "database", primary: false }
  ],
  
  frameworks: [
    { name: "Flask", level: 90, category: "backend", primary: true },
    { name: "React", level: 65, category: "frontend", primary: true },
    { name: "Vite", level: 70, category: "build-tool", primary: false },
    { name: "Bootstrap", level: 85, category: "frontend", primary: false }
  ],
  
  tools: [
    { name: "Docker", level: 55, category: "devops", primary: true },
    { name: "Git", level: 90, category: "version-control", primary: true },
    { name: "Linux", level: 80, category: "os", primary: true },
    { name: "VS Code", level: 95, category: "editor", primary: false },
    { name: "Android Studio", level: 75, category: "mobile", primary: false },
    { name: "Figma", level: 70, category: "design", primary: false }
  ],
  
  databases: [
    { name: "SQLite", level: 85, category: "database", primary: true },
    { name: "MySQL", level: 80, category: "database", primary: true },
    { name: "PostgreSQL", level: 70, category: "database", primary: false }
  ],
  
  cloud: [
    { name: "Google Cloud", level: 65, category: "cloud", primary: false },
    { name: "Vercel", level: 80, category: "hosting", primary: true },
    { name: "Render", level: 85, category: "hosting", primary: true },
    { name: "GitHub", level: 90, category: "platform", primary: true }
  ]
};

export const experienceData = [
  {
    id: 1,
    role: "Python Developer Intern",
    company: "CodeClause",
    type: "Internship",
    location: "Remote",
    duration: "2024",
    period: "3 months",
    status: "completed",
    description: "First professional experience working on Python-based projects. Gained valuable exposure to development practices and collaborative workflows while contributing to real-world projects.",
    achievements: [
      "Applied self-taught Python skills to real-world projects",
      "Learned professional development practices and workflows",
      "Gained experience with code reviews and team collaboration",
      "Enhanced problem-solving abilities through mentorship"
    ],
    technologies: ["Python", "Flask", "Git", "REST APIs"],
    skills: ["Backend Development", "API Design", "Code Review", "Team Collaboration"]
  },
  {
    id: 2,
    role: "Technical Head",
    company: "Ekume Club, NIET",
    type: "Leadership",
    location: "Greater Noida, UP",
    duration: "2024 - Present",
    period: "Current",
    status: "active",
    description: "Leading technical initiatives and mentoring fellow students in programming and development practices. Responsible for organizing tech events and workshops at the campus.",
    achievements: [
      "Organized 5+ technical events including TEDx talks and coding competitions",
      "Conducted deployment workshop on Docker & Render",
      "Mentored students in web development and programming",
      "Managed technical aspects of club activities and events",
      "Received BharatXR recognition for successfully managing tech events"
    ],
    technologies: ["Event Management", "Docker", "Teaching", "Leadership"],
    skills: ["Team Leadership", "Event Organization", "Mentoring", "Public Speaking"]
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "1st Place - Website Bug Fixing Competition",
    event: "Web Showdown, ISTE NIET",
    type: "competition",
    date: "2024",
    icon: "🏆",
    description: "Won first place in a website debugging competition, demonstrating strong problem-solving skills and attention to detail."
  },
  {
    id: 2,
    title: "3rd Place - Website Building Competition",
    event: "Web Wizard, NIET",
    type: "competition", 
    date: "2024",
    icon: "🥉",
    description: "Secured third position in a website development competition, showcasing web development skills and creativity."
  },
  {
    id: 3,
    title: "BharatXR Recognition",
    event: "Tech Event Management",
    type: "recognition",
    date: "2024",
    icon: "🏅",
    description: "Received recognition from BharatXR for successfully organizing and managing technical events at college."
  },
  {
    id: 4,
    title: "GitHub Achievement: Pull Shark",
    event: "GitHub",
    type: "badge",
    date: "2024",
    icon: "🦈",
    description: "Earned GitHub's Pull Shark achievement for contributing to open source projects through pull requests."
  },
  {
    id: 5,
    title: "GitHub Achievement: Quickdraw",
    event: "GitHub", 
    type: "badge",
    date: "2024",
    icon: "⚡",
    description: "Earned GitHub's Quickdraw achievement for rapidly closing issues and pull requests."
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2024",
    type: "certification",
    skills: ["Python Programming", "Data Structures", "Algorithms"]
  },
  {
    id: 2,
    title: "Java (Basic)",
    issuer: "HackerRank", 
    date: "2024",
    type: "certification",
    skills: ["Java Programming", "OOP Concepts", "Basic Algorithms"]
  },
  {
    id: 3,
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "2024",
    type: "course",
    skills: ["Cloud Computing", "Google Cloud Platform", "Infrastructure"]
  }
];

export const hobbiesData = [
  { name: "Gaming", icon: "🎮", description: "PC and mobile gaming enthusiast" },
  { name: "Music", icon: "🎵", description: "Listening to various genres of music" },
  { name: "Skateboarding", icon: "🛹", description: "Recreational skateboarding (using friend's board 😁)" },
  { name: "Learning", icon: "📚", description: "Continuously learning new technologies" }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ashupal86",
    icon: "💻",
    username: "@ashupal86"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/ashish-pal-5725a6257",
    icon: "💼",
    username: "ashish-pal-5725a6257"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/aashish.pal.1", 
    icon: "📸",
    username: "@aashish.pal.1"
  },
  {
    name: "Email",
    url: "mailto:palbro86@gmail.com",
    icon: "📧",
    username: "palbro86@gmail.com"
  }
];

// Currently learning
export const currentlyLearning = [
  "Docker",
  "Advanced Flask",
  "Microservices",
  "CI/CD Pipelines",
  "React Advanced Patterns"
];

// Fun fact
export const funFact = "Skateboard dost ka hai 😁 (The skateboard belongs to my friend 😁)";

export default {
  profileData,
  projectsData,
  skillsData,
  experienceData,
  achievementsData,
  certificationsData,
  hobbiesData,
  socialLinks,
  currentlyLearning,
  funFact
}; 