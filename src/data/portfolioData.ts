import { SkillCategory, ExperienceItem, ProjectData, SecondaryProject, EducationItem, CertificationItem } from '../types/portfolio';

export const personalInfo = {
  name: 'Fareed Khan',
  role: 'Full Stack Developer',
  email: 'fareedfk4747@gmail.com',
  phone: '+91-9352818370',
  github: 'https://github.com/fareedfk47',
  linkedin: 'https://linkedin.com/in/fareed-khan-174141246',
  avatarUrl: 'https://avatars.githubusercontent.com/u/134729841?v=4',
  linkedinConnections: '', // Awaiting user's exact verified connection count
  resumeUrl: '/Fareed_Khan_Resume.pdf',
  location: 'Sikar, Rajasthan, India',
  availability: 'Seeking Entry-Level Software Engineer & Full Stack Developer Roles',
  heroIntro: "I'm a Full Stack Developer working with React, Node.js, Express, and MongoDB. I focus on building responsive web applications, designing RESTful APIs, and solving practical engineering problems with clean, maintainable code.",
  aboutParagraphs: [
    "I am a Computer Science graduate with hands-on experience in modern full-stack web development. My primary technical stack centers around React, Node.js, Express.js, and MongoDB, backed by a strong foundation in Java and core computer science fundamentals.",
    "Through my ongoing internship as a Full Stack Developer Intern at HostLelo and personal project engineering, I have focused on building end-to-end applications—from structuring scalable RESTful endpoints and securing authentication flows to creating responsive, component-driven user interfaces.",
    "I care deeply about software reliability, database schema design, and writing clean, readable code. I am actively looking for an entry-level Software Engineer or Full Stack Developer position where I can contribute to production systems and continue growing alongside experienced engineering teams."
  ]
};

export const technicalSkills: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building modular, responsive, and state-driven web interfaces.',
    skills: [
      { name: 'React', isKey: true, note: 'Component architecture, Hooks, SPAs' },
      { name: 'JavaScript (ES6+)', isKey: true, note: 'Modern syntax, async patterns, DOM' },
      { name: 'Redux / Redux Toolkit', isKey: true, note: 'Predictable global state management' },
      { name: 'HTML5', note: 'Semantic structure, accessibility' },
      { name: 'CSS3', note: 'Responsive design, Flexbox, Grid' },
    ]
  },
  {
    title: 'Backend Development',
    description: 'Architecting RESTful APIs, business logic, and secure authentication.',
    skills: [
      { name: 'Node.js', isKey: true, note: 'Event-driven runtime & asynchronous I/O' },
      { name: 'Express.js', isKey: true, note: 'REST API routing, middleware pipeline' },
      { name: 'REST APIs', isKey: true, note: 'Resource modeling, status codes, JSON' },
      { name: 'JWT Authentication', isKey: true, note: 'HTTP-only cookie sessions, RBAC' },
      { name: 'Mongoose', note: 'ODM schema modeling & validation' },
    ]
  },
  {
    title: 'Databases',
    description: 'Document-oriented data storage, indexing, and transactional operations.',
    skills: [
      { name: 'MongoDB', isKey: true, note: 'Document schemas, aggregations, queries' },
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Core languages utilized for system logic and algorithmic problem-solving.',
    skills: [
      { name: 'JavaScript', isKey: true, note: 'Full-stack application development' },
      { name: 'Java', isKey: true, note: 'OOP fundamentals, data structures, algorithms' },
    ]
  },
  {
    title: 'Tools & Workflow',
    description: 'Modern version control, development environments, and API testing.',
    skills: [
      { name: 'Git', isKey: true, note: 'Branching, commits, merge workflows' },
      { name: 'GitHub', isKey: true, note: 'Collaboration, pull requests, issue tracking' },
      { name: 'Postman', isKey: true, note: 'API testing, request collections, debugging' },
      { name: 'VS Code', note: 'Configured development environment' },
    ]
  }
];

export const workExperience: ExperienceItem[] = [
  {
    role: 'Full Stack Developer Intern',
    company: 'HostLelo',
    period: 'March 2026 – Present',
    statusText: 'Current Position',
    summary: 'Contributing to production web applications, building reusable user interfaces with React, and integrating backend REST services.',
    contributions: [
      'Built responsive web applications using React and integrated REST APIs to fetch, format, and display dynamic data.',
      'Developed reusable, modular UI components using React, HTML5, and CSS3 following clean design specifications.',
      'Implemented Redux for predictable centralized application state management across multi-view workflows.',
      'Integrated REST APIs and backend services, handling asynchronous request lifecycles and error states.',
      'Utilized Git and GitHub for version control, code review collaboration, and branch management.'
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'REST APIs', 'HTML5', 'CSS3', 'Git', 'GitHub']
  }
];

export const featuredProject: ProjectData = {
  title: 'FinLedger',
  tagline: 'Full-Stack Banking Management System & Financial Ledger',
  summary: 'A full-stack banking management system engineered to handle multi-account administration, instant deposits, cash withdrawals, and account-to-account funds transfers with strict transactional integrity.',
  status: 'In Active Development (Live Preview Deployed)',
  statusType: 'in-development',
  technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT', 'Tailwind CSS'],
  liveUrl: 'https://fin-ledger-kappa.vercel.app/',
  githubUrl: 'https://github.com/fareedfk47/FinLedger',
  architectureBlocks: [
    {
      title: 'Banking Operations',
      items: [
        'Multi-account management (Savings and Current Checking accounts) per authenticated user.',
        'Instant deposit mechanism with non-negative balance constraints.',
        'Withdrawal processing with balance validation to prevent overdrafts.',
        'Account-to-account funds transfers with balance verification.'
      ],
      whyItMatters: 'Provides standard banking primitives while enforcing business constraints at the data layer.'
    },
    {
      title: 'Authentication & Access Control',
      items: [
        'Session security with JSON Web Tokens (JWT) stored in HTTP-only cookies.',
        'Zero client-side token exposure to protect against XSS token harvesting.',
        'Protected API routes with authentication middleware verification.',
        'Role-Based Access Control (RBAC) structuring permissions for users and administrative roles.'
      ],
      whyItMatters: 'HTTP-only cookies isolate credentials from client scripts, establishing a reliable security perimeter.'
    },
    {
      title: 'Transaction Integrity & Double-Entry',
      items: [
        'Cryptographic idempotency keys passed via HTTP headers on mutating transfer requests.',
        'Protection against accidental duplicate transfers caused by network timeouts or retry loops.',
        'Double-entry ledger model where funds leaving one account debit and credit the destination.',
        'Immutable transaction records preserving chronological debit/credit classifications.'
      ],
      whyItMatters: 'Idempotency ensures network retries execute safely once, and double-entry bookkeeping guarantees balanced accounting.'
    },
    {
      title: 'Auditability & Event Logging',
      items: [
        'Security audit trail logging critical user actions (logins, account creation, transfers).',
        'Timestamped event records capturing action types, user references, and outcome status.'
      ],
      whyItMatters: 'Audit logging enables forensic visibility into account modifications and transaction history.'
    }
  ],
  keyCapabilities: [
    {
      category: 'Banking Architecture',
      items: ['Multi-Account Support', 'Instant Balance Updates', 'Overdraft Prevention', 'Account Masking']
    },
    {
      category: 'Security & Auth',
      items: ['JWT via HTTP-only Cookies', 'Role-Based Access (RBAC)', 'Input Sanitization', 'Password Hashing (bcrypt)']
    },
    {
      category: 'Financial Reliability',
      items: ['UUID Idempotency Keys', 'Double-Entry Ledger', 'Audit Event Logs', 'RESTful API Architecture']
    }
  ]
};

export const secondaryProjects: SecondaryProject[] = [
  {
    title: 'melodex-api',
    type: 'Backend REST API',
    description: 'A RESTful backend API designed for a music streaming platform, implementing resource endpoints for tracks, playlists, user collections, and media metadata management.',
    technologies: ['Node.js', 'Express.js', 'JavaScript', 'REST APIs', 'Postman'],
    githubUrl: 'https://github.com/fareedfk47/melodex-api'
  },
  {
    title: 'snake-arcade',
    type: 'Interactive Web Application',
    description: 'A retro-inspired Snake arcade game engineered using vanilla JavaScript, HTML5 Canvas/DOM, and CSS3, demonstrating core game-loop logic, collision detection, and responsive controls.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Game Loop Logic'],
    githubUrl: 'https://github.com/fareedfk47/snake-arcade'
  },
  {
    title: 'GitHub-ProfileViewer',
    type: 'Frontend Web Application',
    description: 'A responsive profile explorer that consumes the public GitHub REST API to search developers, inspect public repositories, and visualize profile details with async error handling.',
    technologies: ['JavaScript', 'REST APIs', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/fareedfk47/GitHub-ProfileViewer'
  }
];

export const educationData: EducationItem = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'Sobhasaria Group of Institutions, Sikar',
  university: 'Affiliated with Bikaner Technical University (BTU)',
  period: '2021 – 2025',
  graduationYear: '2025',
  cgpa: '6.8'
};

export const certificationsData: CertificationItem[] = [
  {
    title: 'Core Java Programming Certification',
    issuer: 'Internshala'
  },
  {
    title: 'Full Stack Web Development Certification',
    issuer: 'HostLelo'
  }
];
