export interface Skill {
    name: string;
    description: string;
    tags: string[];
    icon: React.ComponentType<any>;
    color: string;
    category: 'frontend' | 'backend' | 'database' | 'tools';
}

// Updated interface to include url property
export interface Project {
    title: string;
    description: string;
    tech: string[];
    status?: string;
    period?: string;
    image: string;
    demoUrl?: string; // Made optional
    githubUrl?: string; // Made optional
    url?: string; // New optional URL property
    highlights: string[];
    category: 'professional' | 'personal';
    company?: string;
    role?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Full content for the blog post
  date: string;
  readTime: string;
  tags: string[];
  author?: string;
  coverImage?: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Counters {
  projects: number;
  experience: number;
  technologies: number;
}

