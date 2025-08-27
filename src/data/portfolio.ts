import { Skill, Project, Experience, BlogPost } from '../types';
import { Code, Globe, Database, Server, Palette, GitBranch, Layers, Zap, Box } from 'lucide-react';


export const skillsCategory: Skill[] = [
    // Frontend
    {
        name: 'JavaScript',
        description: 'Modern ES6+ development with async/await',
        tags: ['ES6+', 'TypeScript', 'DOM API'],
        icon: Box,
        color: 'text-yellow-400',
        category: 'frontend'
    },
    {
        name: 'React.js',
        description: 'Building responsive SPAs with React Hooks',
        tags: ['Redux', 'Next.js', 'Router'],
        icon: Code,
        color: 'text-cyan-400',
        category: 'frontend'
    },
    {
        name: 'HTML5',
        description: 'Semantic and accessible web structures',
        tags: ['SEO', 'A11y', 'Forms'],
        icon: Globe,
        color: 'text-red-400',
        category: 'frontend'
    },
    {
        name: 'CSS3',
        description: 'Modern layouts and animations',
        tags: ['Flexbox', 'Grid', 'SASS'],
        icon: Palette,
        color: 'text-blue-400',
        category: 'frontend'
    },
    {
        name: 'Tailwind',
        description: 'Utility-first CSS framework',
        tags: ['PostCSS', 'Design', 'UI'],
        icon: Zap,
        color: 'text-teal-400',
        category: 'frontend'
    },
    {
        name: 'TypeScript',
        description: 'Type-safe JavaScript development',
        tags: ['Types', 'Interfaces', 'Generics'],
        icon: Code,
        color: 'text-blue-500',
        category: 'frontend'
    },
    // Backend
    {
        name: 'Node.js',
        description: 'Server-side JavaScript development',
        tags: ['Express', 'REST', 'GraphQL'],
        icon: Server,
        color: 'text-green-400',
        category: 'backend'
    },
    {
        name: 'Java',
        description: 'Enterprise application development',
        tags: ['Spring', 'JVM', 'OOP'],
        icon: Box,
        color: 'text-orange-400',
        category: 'backend'
    },
    {
        name: 'Spring Boot',
        description: 'Java framework for microservices',
        tags: ['REST', 'JPA', 'Security'],
        icon: Server,
        color: 'text-green-500',
        category: 'backend'
    },
    {
        name: 'Ethereum',
        description: 'Blockchain and smart contract development',
        tags: ['Solidity', 'Web3', 'DeFi'],
        icon: Layers,
        color: 'text-purple-400',
        category: 'backend'
    },
    // Database
    {
        name: 'MySQL',
        description: 'Relational database management',
        tags: ['Queries', 'Indexing', 'Optimization'],
        icon: Database,
        color: 'text-blue-600',
        category: 'database'
    },
    {
        name: 'PostgreSQL',
        description: 'Advanced relational database',
        tags: ['ACID', 'JSON', 'Performance'],
        icon: Database,
        color: 'text-blue-500',
        category: 'database'
    },
    // Tools
    {
        name: 'Git & GitHub',
        description: 'Version control and collaboration',
        tags: ['CI/CD', 'Actions', 'Git Flow'],
        icon: GitBranch,
        color: 'text-orange-500',
        category: 'tools'
    },
    {
        name: 'VS Code',
        description: 'Modern code editor with extensions',
        tags: ['Extensions', 'Debugging', 'IntelliSense'],
        icon: Code,
        color: 'text-blue-400',
        category: 'tools'
    },
    {
        name: 'IntelliJ IDEA',
        description: 'Powerful IDE for Java development',
        tags: ['Refactoring', 'Debugging', 'Spring'],
        icon: Box,
        color: 'text-purple-500',
        category: 'tools'
    },
    {
        name: 'Vite',
        description: 'Fast build tool for modern web development',
        tags: ['HMR', 'ESM', 'Bundling'],
        icon: Zap,
        color: 'text-yellow-500',
        category: 'tools'
    }
];

export const projects: Project[] = [
  {
    title: 'SalanaPay - Employee Payroll System',
    description: 'Leading frontend development of a comprehensive employee payroll management system that automates salary calculations, bonuses, deductions, and generates digital payslips with real-time data synchronization.',
    tech: ['React', 'TypeScript', 'Vite', 'React Router', 'React Query', 'React Hook Form', 'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    status: 'Current Project',
    image: '💰',
    githubUrl: '#', // Keep as # if private repository
    highlights: ['Real-time Data Sync', 'Automated Payroll', 'Frontend Leadership', 'Backend Integration'],
    category: 'professional',
    company: 'StarSoftech',
    role: 'Frontend Lead Developer'
  },
  {
    title: 'ChampionXI - Fantasy Sports App',
    description: 'Led full-stack development of a future-ready fantasy app with 30% UI performance improvement and 20% increase in user engagement, handling both frontend architecture and backend API development.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    status: 'In Review',
    image: '🏆',
    url: 'https://championxi.com/', // Live project URL
    githubUrl: '#', // Keep as # if private repository
    highlights: ['30% Performance Boost', '20% User Engagement', 'Full-stack Development', 'Scalable Architecture'],
    category: 'professional',
    company: 'StarSoftech',
    role: 'Full-stack Developer'
  },
  {
    title: 'DiGiLend - Decentralized Loan Platform',
    description: 'Blockchain-based P2P loan platform with digital mortgages built on Ethereum, connecting lenders to borrowers directly.',
    tech: ['React', 'Node.js', 'Ethereum', 'Blockchain', 'Smart Contracts'],
    period: 'Nov 2023 - Mar 2024',
    image: '🔗',
    githubUrl: 'https://github.com/thanseerjelani/DiGiLend-DApp',
    // No url property - will show "Deploying soon..." for live demo
    highlights: ['Blockchain Integration', 'Smart Contracts', 'P2P Architecture'],
    category: 'personal'
  },
  {
    title: 'Developer Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing projects, skills, and professional experience with clean UI design and smooth animations.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    period: 'Deployed',
    image: '🌐',
    url: 'https://thanseer-portfolio.netlify.app/',
    githubUrl: 'https://github.com/thanseerChampionXI/my-portfolio',
    highlights: ['Modern UI/UX', 'Responsive Design', 'Clean Architecture', 'Fast Performance'],
    category: 'personal'
  },
  {
    title: 'DashForge',
    description: 'Comprehensive dashboard application featuring real-time weather updates, latest news feed, and interactive todo list management in a unified interface.',
    tech: ['React', 'TypeScript', 'Vite', 'Weather API', 'News API'],
    status: 'Deployed',
    image: '📊',
    url: 'https://dashforge.netlify.app/',
    githubUrl: 'https://github.com/thanseerjelani/dashforge-dashboard',
    highlights: ['Real-time Data', 'API Integration', 'Modern Dashboard UI', 'Multi-feature App'],
    category: 'personal'
  },
  {
    title: 'Expense Tracker',
    description: 'Smart budget management application for tracking daily expenses, categorizing transactions, and visualizing spending patterns with interactive charts.',
    tech: ['React', 'TypeScript', 'Vite', 'Chart.js', 'Local Storage'],
    status: 'In Development',
    image: '💳',
    githubUrl: '#',
    highlights: ['Budget Management', 'Data Visualization', 'Category Tracking', 'Financial Analytics'],
    category: 'personal'
  },
  {
    title: 'Recipe Finder',
    description: 'Food discovery application that allows users to search, explore, and save favorite recipes using external APIs with detailed nutritional information.',
    tech: ['React', 'TypeScript', 'Vite', 'Recipe API', 'Responsive Design'],
    status: 'In Development',
    image: '🍳',
    githubUrl: '#',
    highlights: ['Recipe Search', 'API Integration', 'Save Favorites', 'Nutritional Data'],
    category: 'personal'
  },
  {
    title: 'Student Management System',
    description: 'Multi-role desktop application supporting Administrator, Faculty, and Student roles for institutional operations.',
    tech: ['Java', 'Java Swing', 'MySQL', 'JDBC'],
    period: 'Sep 2022 - Dec 2022',
    image: '🎓',
    githubUrl: 'https://github.com/thanseerjelani/SMS',
    // No url property - will show "Deploying soon..." for live demo (desktop app)
    highlights: ['Multi-role System', 'Desktop Application', 'Database Integration'],
    category: 'personal'
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

// Updated skills array with recommended approach
export const skills = ['Full-Stack Development', 'Frontend Development', 'Backend Development', 'Reactjs Development', 'UI/UX Design'];
export const techStack = ['React', 'TypeScript', 'Next.js', 'Java', 'Spring Boot', 'AWS', 'Docker', 'GraphQL'];

// Simple blog data structure - you can replace this with your actual data
export const blogPosts: BlogPost[] = [
    {
        id: 'react-vite-perfect-stack',
        title: 'React + Vite: The Perfect Development Stack',
        excerpt: 'Discover why React + Vite has become the go-to combination for building lightning-fast, modern web applications with superior developer experience.',
        content: '', // Empty - you'll add content later
        date: '2024-01-20',
        readTime: '7 min read',
        tags: ['React', 'Vite', 'JavaScript', 'Development', 'Build Tools'],
        author: 'Author Name',
        coverImage: '/images/reactvite.png' 
    },
    {
        id: 'building-scalable-react-applications',
        title: 'Building Scalable React Applications',
        excerpt: 'Best practices for creating maintainable and scalable React applications with modern tooling.',
        content: '', // Empty - you'll add content later
        date: '2024-01-15',
        readTime: '8 min read',
        tags: ['React', 'JavaScript', 'Best Practices', 'Architecture'],
        author: 'Author Name',
        coverImage: '/images/react.png'
    },
    {
        id: 'blockchain-development-guide',
        title: 'Getting Started with Blockchain Development',
        excerpt: 'A comprehensive guide to understanding blockchain development and building your first dApp.',
        content: '', // Empty - you'll add content later
        date: '2024-01-10',
        readTime: '10 min read',
        tags: ['Blockchain', 'Ethereum', 'Web3', 'Smart Contracts'],
        author: 'Author Name',
        coverImage: '/images/blockchain.png'
    },
    {
        id: 'typescript-tips-better-code',
        title: 'TypeScript Tips for Better Code',
        excerpt: 'Advanced TypeScript techniques that will make your code more robust and maintainable.',
        content: '', // Empty - you'll add content later
        date: '2024-01-05',
        readTime: '9 min read',
        tags: ['TypeScript', 'Development', 'Tips', 'Best Practices'],
        author: 'Author Name',
        coverImage: '/images/typescript.png'
    }
];
