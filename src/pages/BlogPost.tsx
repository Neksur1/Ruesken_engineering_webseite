import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blogPosts";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import Footer from "@/components/Footer";

const BlogPost = () => {
    const { id } = useParams();
    const { language } = useLanguage();
    const t = translations[language];

    const post = BLOG_POSTS.find((p) => p.id === id);

    // Mouse glow effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;

            const bg = document.querySelector(".mouse-bg") as HTMLElement;
            if (bg) {
                bg.style.background = `
              radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
            `;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="bg-luxury-base text-luxury-text min-h-screen flex flex-col items-center selection:bg-white/10 selection:text-white overflow-x-hidden relative">
            {/* Background Layers */}
            <div className="mouse-bg"></div>
            <div className="bg-grid-structure"></div>
            <div className="bg-grain"></div>

            {/* Main Content */}
            <article className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12 md:py-24 flex flex-col animate-fade-in">

                {/* Navigation */}
                <Link to="/blog" className="inline-block mb-12 text-[10px] tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors">
                    &larr; {t.blog.backToInsights}
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-luxury-muted">
                            {post.category}
                        </span>
                        <span className="w-1 h-1 bg-luxury-muted rounded-full opacity-30"></span>
                        <span className="text-[10px] font-light tracking-widest text-white/20">
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extralight tracking-wide text-white leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="text-[10px] tracking-widest uppercase text-white/30 border-b border-white/5 pb-8">
                        {t.blog.publishedOn} {post.date}
                    </div>
                </header>

                {/* Content */}
                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-light prose-headings:tracking-wide prose-p:font-light prose-p:text-gray-400 prose-p:leading-loose prose-a:text-white prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer Navigation */}
                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-8">
                    <Link to="/blog" className="text-[10px] tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors">
                        {t.blog.viewAll}
                    </Link>
                    <Footer className="opacity-60" />
                </div>

            </article>
        </div>
    );
};

export default BlogPost;
