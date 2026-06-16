export interface Blog {
  id: string;
  title: string;
  category: 'Beginner' | 'Advanced';
  thumbnail: string;
  excerpt: string;
  content: string[]; // multi-paragraph full article
  readTime: string;
  date: string;
  author: string;
}

export interface Ebook {
  id: string;
  title: string;
  category: 'Beginner' | 'Advanced';
  description: string;
  price: string;
  pages: number;
  rating: number;
  features: string[];
  coverColor: string; // Tailwind class for mockup bg
}

export interface Journal {
  id: string;
  title: string;
  category: 'Journal';
  abstract: string;
  author: string;
  publishedDate: string;
  readTime: string;
  documentSize: string;
  keyFindings: string[];
}
