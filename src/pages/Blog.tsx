import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import Footer from "@/components/Footer";

const Blog = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Filter posts by language
    const filteredPosts = BLOG_POSTS.filter(post => post.language === language);

    // Mouse glow effect (reused from Index)
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

    return (
        <div className="bg-luxury-base text-luxury-text min-h-screen flex flex-col items-center selection:bg-white/10 selection:text-white overflow-x-hidden relative">
            {/* Background Layers */}
            <div className="mouse-bg"></div>
            <div className="bg-grid-structure"></div>
            <div className="bg-grain"></div>

            {/* Main Content */}
            <main className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col">

                {/* Header */}
                <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
                    <div>
                        <Link to="/" className="inline-block mb-6 text-[10px] tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors">
                            &larr; {t.blog.back}
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.1em] uppercase text-white leading-tight">
                            Insights
                        </h1>
                    </div>
                    <p className="max-w-md text-sm font-light text-gray-400 leading-relaxed text-right md:text-left">
                        {language === 'de'
                            ? "Gedanken zu künstlicher Intelligenz, Engineering und der Zukunft automatisierter Unternehmen."
                            : "Thoughts on Artificial Intelligence, Engineering, and the future of automated enterprise."}
                    </p>
                </header>

                {/* Blog Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-white/30 font-light tracking-wide uppercase text-sm">
                            {t.blog.noPosts}
                        </div>
                    )}
                </section>

                {/* Footer */}
                <Footer className="mt-24 animate-slide-up-delayed" showDivider={true} />

            </main>
        </div>
    );
};

export default Blog;
