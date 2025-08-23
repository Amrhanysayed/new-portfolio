export const portfolioData = {
  hero: {
    name: "Amr Hany",
    title: "Software Engineer",
    location: "Cairo, Egypt",
    tagline:
      "Full-stack developer passionate about building scalable systems and impactful solutions.",
    resumeLink:
      "https://drive.google.com/uc?export=download&id=12hGvShx2s_wDt6dQ2t_7kraKG8NLbnPV",
    contactLink: "mailto:amrhanyseed@gmail.com",
  },
  about: {
    bio: "Computer Engineering student at Cairo University with strong experience in full-stack web development, databases, and scalable architectures. Skilled in React.js, Vue.js, Next.js, Nest.js, and SQL/NoSQL databases. Experienced in leading teams and building real-world applications.",
  },
  experience: [
    {
      company: "Rawmart",
      role: "Software Developer Intern – Frontend Team",
      period: "Aug 2025 – Present",
      location: "Cairo, Egypt",
      description: [
        "Working on Rawmart's e-commerce platform as part of the frontend team.",
        "Building and optimizing UI components using Next.js, Tailwind CSS, and Styled Components.",
        "Implementing global state management with Redux for scalable frontend workflows.",
      ],
      link: "https://www.linkedin.com/company/rawmartapp/",
    },
    {
      company: "Cairo University Racing Team (CURT)",
      role: "Front-End Developer",
      period: "Sep 2024 – Present",
      location: "Cairo, Egypt",
      description: [
        "Led a 5-member team to design and deploy an inventory management system for 50+ users.",
        "Integrated 30+ REST APIs, reducing UI latency by 20%.",
        "Implemented CRUD operations, role management, notifications, and admin dashboard.",
      ],
    },
    {
      company: "Cairo University Eco Racing Team (CUERT)",
      role: "Head of Web Development",
      period: "Aug 2024 – Present",
      location: "Cairo, Egypt",
      description: [
        "Led a 6-member team to design and implement an internal CMS and Careers page.",
        "Worked full-stack with React.js, Node.js, and Express.js.",
        "Built an admin dashboard for content management and recruitment workflows.",
      ],
    },
    {
      company: "Summit Technology Solutions",
      role: "Oracle Database Developer Intern",
      period: "Jul 2024 – Aug 2024",
      location: "Cairo, Egypt",
      description: [
        "Designed ER diagrams for a real-world banking system.",
        "Wrote analytical SQL queries to support reporting and visualizations.",
        "Collaborated with stakeholders to align schema design with performance goals.",
      ],
    },
  ],
  projects: [
    {
      name: "Falcony Search Engine",
      tech: ["Java", "Spring Boot", "React.js", "Tailwind CSS", "MongoDB"],
      description:
        "Scalable crawler processing 6000+ pages in under 10 minutes with multithreading and AI-powered search.",
      link: "https://github.com/Amrhanysayed/Falcony-Search-engine",
    },
    {
      name: "Sayeh-Fi-Misr",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
      description:
        "Travel platform for 500+ users with personalized tours, reviews, galleries, and role-based access control (RBAC).",
      link: "https://github.com/Amrhanysayed/sayeh-fi-misr",
    },
    {
      name: "Global Goal Galaxy",
      tech: ["React.js", "Tailwind CSS", "Node.js", "WebSockets"],
      description:
        "Educational platform on UN SDGs with interactive content, quizzes, and real-time messaging between students and teachers.",
      link: "https://github.com/Amrhanysayed/GlobalGoalsGalaxy",
    },
    {
      name: "Earth vs. Alien's War Simulation",
      tech: ["C++", "OOP", "Data Structures"],
      description:
        "CLI-based simulation of battle logic using queues and graphs in a multi-agent gaming environment.",
      link: "https://github.com/Amrhanysayed/7rb-imbaba",
    },
  ],
  skills: {
    languages: ["C/C++", "Java", "JavaScript", "TypeScript", "Python", "SQL"],
    frontend: [
      "Next.js",
      "Vue.js",
      "React.js",
      "Tailwind CSS",
      "Styled Components",
      "Redux",
      "Zustand",
      "React Query",
    ],
    backend: ["Nest.js", "Node.js", "Express.js"],
    databases: ["PostgreSQL", "MongoDB", "Oracle DB"],
    concepts: [
      "OOP",
      "Algorithms",
      "Data Structures",
      "DBMS",
      "Operating Systems",
      "Git",
    ],
  },
  contact: {
    email: "amrhanyseed@gmail.com",
    phone: "+20 111 146 6127",
    linkedin: "https://www.linkedin.com/in/amr-hany-61b544267/",
    github: "https://github.com/Amrhanysayed",
  },
};

export type PortfolioData = typeof portfolioData;
