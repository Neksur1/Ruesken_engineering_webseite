export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: "AI Research" | "AI Projects" | "Industry News";
  readTime: string;
  content: string;
  language: "de" | "en";
}

// Automatically load all blog posts from the file system
const modules = import.meta.glob('./posts/*/*.ts', { eager: true }) as Record<string, { post: BlogPost }>;

export const BLOG_POSTS: BlogPost[] = Object.values(modules)
  .map((module) => module.post)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
