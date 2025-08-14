import { SkillCategory, Project, Experience, BlogPost } from '../types';

export const skills: SkillCategory = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML5/CSS3', level: 95 }
  ],
  backend: [
    { name: 'Java', level: 85 },
    { name: 'Spring Boot', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Ethereum', level: 70 }
  ],
  database: [
    { name: 'MySQL', level: 80 },
    { name: 'PostgreSQL', level: 75 }
  ],
  tools: [
    { name: 'Git/GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'IntelliJ IDEA', level: 90 }
  ]
};

export const projects: Project[] = [
  {
    title: 'ChampionXI - Fantasy Sports App',
    description: 'Led frontend development of a future-ready fantasy app with 30% UI performance improvement and 20% increase in user engagement.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Java', 'Spring Boot', 'PostgreSQL'],
    status: 'Current Project',
    image: '🏆',
    demoUrl: '#',
    githubUrl: '#',
    highlights: ['30% Performance Boost', '20% User Engagement', 'Scalable Architecture']
  },
  {
    title: 'DiGiLend - Decentralized Loan Platform',
    description: 'Blockchain-based P2P loan platform with digital mortgages built on Ethereum, connecting lenders to borrowers directly.',
    tech: ['React', 'Node.js', 'Ethereum', 'Blockchain', 'Smart Contracts'],
    period: 'Nov 2023 - Mar 2024',
    image: '🔗',
    demoUrl: '#',
    githubUrl: '#',
    highlights: ['Blockchain Integration', 'Smart Contracts', 'P2P Architecture']
  },
  {
    title: 'Student Management System',
    description: 'Multi-role desktop application supporting Administrator, Faculty, and Student roles for institutional operations.',
    tech: ['Java', 'Java Swing', 'MySQL', 'JDBC'],
    period: 'Sep 2022 - Dec 2022',
    image: '🎓',
    demoUrl: '#',
    githubUrl: '#',
    highlights: ['Multi-role System', 'Desktop Application', 'Database Integration']
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: 'React + Vite: The Perfect Development Stack',
    excerpt: 'Discover why React + Vite has become the go-to combination for building lightning-fast, modern web applications with superior developer experience.',
    date: '2024-01-20',
    readTime: '7 min read',
    tags: ['React', 'Vite', 'JavaScript', 'Development', 'Build Tools']
  },
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices for creating maintainable and scalable React applications with modern tooling.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'JavaScript', 'Best Practices', 'Architecture']
  },
  {
    title: 'Getting Started with Blockchain Development',
    excerpt: 'A comprehensive guide to understanding blockchain development and building your first dApp.',
    date: '2024-01-10',
    readTime: '10 min read',
    tags: ['Blockchain', 'Ethereum', 'Web3', 'Smart Contracts']
  },
  {
    title: 'TypeScript Tips for Better Code',
    excerpt: 'Advanced TypeScript techniques that will make your code more robust and maintainable.',
    date: '2024-01-05',
    readTime: '9 min read',
    tags: ['TypeScript', 'Development', 'Tips', 'Best Practices']
  }
];

export const experience: Experience[] = [
  {
    title: 'Junior Software Developer',
    company: 'ChampionXI',
    period: 'Dec 2024 - Present',
    location: 'Remote',
    achievements: [
      'Led frontend development achieving 30% UI performance improvement',
      'Built reusable UI components shortening development cycles by 25%',
      'Working on backend APIs with Java, Spring Boot, and PostgreSQL',
      'Driving 20% increase in user engagement through feature deployment'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Web Development Intern',
    company: 'PrinstonSMART.com',
    period: 'Nov 2022 - Jan 2023',
    location: 'Bengaluru, Karnataka',
    achievements: [
      'Developed dynamic, responsive web applications using modern technologies',
      'Ensured timely delivery following Agile methodologies',
      'Implemented debugging strategies improving application efficiency'
    ],
    color: 'from-cyan-500 to-blue-500'
  }
];