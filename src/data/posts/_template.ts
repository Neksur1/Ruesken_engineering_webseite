import { BlogPost } from "../blogPosts";

// 1. Copy this file and rename it to format: YYYY-MM-DD-your-slug.ts
// 2. Place it in the correct year folder (e.g., src/data/posts/2026/)
// 3. Fill in the details below

export const post: BlogPost = {
    id: "YYYY-MM-DD-your-slug", // Must match filename (without .ts)
    title: "Your Title Here",
    date: "YYYY-MM-DD",
    excerpt: "A short summary of the post (1-2 sentences).",
    category: "Industry News", // Options: "AI Research" | "AI Projects" | "Industry News"
    readTime: "5 min read", // Estimate reading time
    language: "en", // Options: "de" | "en"
    content: `
    <p>Your content here.</p>
    
    <h3>Subheading</h3>
    <p>More content.</p>
  `,
};
