import React, { useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import EngineeringNavigation from "../components/engineering/EngineeringNavigation";
import Footer from "../components/engineering/Footer";
import Contact from "../components/engineering/Contact";

const ProjectsPage = () => {
    const { language } = useLanguage();
    const t = translations[language].engineering.projects;

    // Image mappings for the projects (Same as Projects.tsx)
    const projectImages = [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", // Industrial Corp (B2B Sales)
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2064&auto=format&fit=crop", // Cruise (Ship/Travel)
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Real Estate (Architecture)
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", // Event/Speaker (Wedding/Celebration)
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop", // Research (Lab/Science)
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Manufacturing (Industry 4.0)
    ];

    // Combine translation items with images
    const allProjects = t.items.map((item: any, index: number) => ({
        ...item,
        image: projectImages[index % projectImages.length],
    }));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#0B1120]">
            <EngineeringNavigation forceDark={true} />

            <section className="relative w-full pt-40 pb-32">
                {/* Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0 fixed"
                    style={{ backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                <div className="relative z-10 w-full px-[5%] md:px-[10%]">
                    {/* Header */}
                    <div className="max-w-3xl mb-16">
                        <span className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-4">
                            All Success Stories
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#0B1120] tracking-tight leading-[1.1] mb-4">
                            {t.header.title}
                        </h2>
                        <p className="text-lg text-[#334155] leading-relaxed max-w-xl">
                            {t.header.subtitle}
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProjects.map((project: any, i: number) => (
                            <Link
                                to={`/projects/${project.slug}`}
                                key={`${project.slug}-${i}`}
                                className="group flex flex-col bg-white border border-[#E2E8F0] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                {/* IMAGE AREA */}
                                <div className="h-56 border-b border-[#E2E8F0] relative overflow-hidden bg-slate-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-all duration-700 filter grayscale contrast-[1.1] brightness-[0.9] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] bg-slate-100 px-2 py-1 rounded-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0B1120] mb-3 leading-tight group-hover:text-blue-900 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="space-y-4 mb-8">
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-[#94A3B8] font-bold mb-1">Challenge</p>
                                            <p className="text-sm text-[#475569] leading-relaxed">{project.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-[#94A3B8] font-bold mb-1">Solution</p>
                                            <p className="text-sm text-[#475569] leading-relaxed">{project.details}</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-6 border-t border-[#F1F5F9] flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold mb-1">Impact</span>
                                            <span className="text-xl font-mono font-bold text-[#10B981] tracking-tight">{project.result}</span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-[#CBD5E1] group-hover:text-[#10B981] transition-colors duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default ProjectsPage;
