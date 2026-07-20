export interface Project {
  _id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  details: string;
  features: string[];
  techStack: string[];
  image: any;
  githubUrl: string;
  liveUrl: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  avatar: any;
  rating: number;
  featured?: boolean;
  order?: number;
}

export interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: any;
  date: string;
  category: string;
  image: any;
  slug: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
