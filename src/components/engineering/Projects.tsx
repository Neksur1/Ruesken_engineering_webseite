import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].engineering.projects;
    const [currentIndex, setCurrentIndex] = useState(0);

    // Image mappings for the projects - 6 projects now
    // High-quality Unsplash images matching each project category
    const projectImages = [
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop", // Industrial Corp (B2B Sales)
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2064&auto=format&fit=crop", // Cruise (Ship/Travel)
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Real Estate (Architecture)
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", // Event/Speaker (Wedding/Celebration)
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop", // Research (Lab/Science)
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Manufacturing (Industry 4.0)
    ];

    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % t.items.length);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? t.items.length - 1 : prev - 1));
    };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % t.items.length;
            items.push({
                ...t.items[index],
                image: projectImages[index],
                originalIndex: index
            });
        }
        return items;
    };

    const visibleItems = getVisibleItems();

    return (
        <section id="projects" className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-[#E6EAF0] text-[#0B1120] border-t border-[#E2E8F0]">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
                style={{ backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="relative z-10 w-full px-[5%] md:px-[10%]">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <Reveal width="100%">
                            <span className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3">
                                Success Stories
                            </span>
                            <a href="/projects" className="block hover:opacity-80 transition-opacity">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-[1.1] mb-3">
                                    {t.header.title}
                                </h2>
                            </a>
                            <p className="text-lg text-[#334155] leading-relaxed max-w-xl">
                                {t.header.subtitle}
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative group/carousel">

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-[#E2E8F0] bg-white/80 backdrop-blur text-[#0B1120] shadow-sm hover:bg-[#0B1120] hover:text-white transition-all duration-300 rounded-full md:rounded-none"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {visibleItems.map((project, i) => (
                            <Reveal key={`${project.slug}-${i}`} delay={i * 0.1} width="100%" className="h-full">
                                <Link
                                    to={`/projects/${project.slug}`}
                                    className="group flex flex-col bg-white rounded-sm border border-slate-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-right-4 h-full"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    {/* IMAGE AREA with B&W -> Color Effect */}
                                    <div className="h-40 border-b border-[#E2E8F0] relative overflow-hidden bg-slate-100">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-all duration-700 filter grayscale contrast-[1.1] brightness-[0.9] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
                                        />
                                        {/* Overlay Gradient for text readability/mood */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="mb-3 flex items-center justify-between">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] bg-slate-100 px-2 py-1 rounded-sm">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0B1120] mb-2 leading-tight group-hover:text-blue-900 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="space-y-3 mb-6">
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#94A3B8] font-bold mb-0.5">Challenge</p>
                                                <p className="text-sm text-[#475569] leading-relaxed">{project.challenge}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#94A3B8] font-bold mb-0.5">Solution</p>
                                                <p className="text-sm text-[#475569] leading-relaxed">{project.details}</p>
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold mb-0.5">Impact</span>
                                                <span className="text-xl font-mono font-bold text-[#10B981] tracking-tight">{project.result}</span>
                                            </div>
                                            <ArrowUpRight className="w-5 h-5 text-[#CBD5E1] group-hover:text-[#10B981] transition-colors duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-[#E2E8F0] bg-white/80 backdrop-blur text-[#0B1120] shadow-sm hover:bg-[#0B1120] hover:text-white transition-all duration-300 rounded-full md:rounded-none"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
