import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <Link to={`/blog/${post.id}`} className="block h-full">
            <article className="glass-card p-6 md:p-8 flex flex-col justify-between h-full group hover:border-white/10 transition-colors duration-500">
                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-luxury-muted">
                            {post.category}
                        </span>
                        <span className="text-[10px] font-light tracking-widest text-white/20">
                            {post.readTime}
                        </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-light text-white leading-tight">
                        {post.title}
                    </h3>

                    <p className="text-sm text-gray-400 font-light leading-relaxed opacity-80">
                        {post.excerpt}
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] tracking-widest uppercase text-white/30">
                    <span>{post.date}</span>
                    <span className="group-hover:text-white/60 transition-colors duration-300">Read Article</span>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
