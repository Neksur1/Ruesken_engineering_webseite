import React, { useRef, useEffect } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import { ArrowUpRight, Cpu, Layers, FileText } from 'lucide-react';

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].engineering.projects;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Subtle background mesh animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width;
        let height = canvas.height;
        let animationId: number;

        const points: { x: number; y: number; vx: number; vy: number }[] = [];
        const numPoints = 20;

        const init = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
            width = canvas.width;
            height = canvas.height;
            points.length = 0;
            for (let i = 0; i < numPoints; i++) {
                points.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Update points
            points.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
            });

            // Draw connections
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 200) {
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);
                    }
                }
            }
            ctx.stroke();
            animationId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => init();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    const getIcon = (slug: string) => {
        switch (slug) {
            case 'content-automation': return Layers;
            case 'sales-agents': return Cpu;
            case 'doc-processing': return FileText;
            default: return Cpu;
        }
    };

    return (
        <section id="projects" className="relative w-full py-32 bg-[#020617] text-luxury-text font-sans overflow-hidden">
            {/* Background Mesh */}
            <canvas ref={canvasRef} className="absolute inset-0 z-[0] pointer-events-none" />

            {/* Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-[5%] md:px-[10%]">
                {/* Header */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <span className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Case Studies</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        {t.header.title}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-transparent mb-8" />
                    <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-2xl">
                        {t.header.subtitle}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((project, index) => {
                        const Icon = getIcon(project.slug);
                        return (
                            <div
                                key={index}
                                className="group relative bg-[#0f172a]/50 backdrop-blur-sm border border-white/5 hover:border-emerald-500/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] cursor-pointer overflow-hidden flex flex-col"
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Header: Category & Icon */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors">
                                        {project.category}
                                    </div>
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={20} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                    {project.challenge}
                                </p>

                                {/* Footer: Result & Link */}
                                <div className="mt-auto pt-6 border-t border-white/5 flex items-end justify-between">
                                    <div>
                                        <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Impact</div>
                                        <div className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                                            {project.result}
                                        </div>
                                    </div>

                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-black transition-all duration-300">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
