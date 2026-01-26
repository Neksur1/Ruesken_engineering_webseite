import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import EngineeringNavigation from "./EngineeringNavigation";
import Footer from "./Footer";
import Contact from "./Contact";
import { ArrowLeft } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();
    const t = translations[language].engineering.projects;

    const projectImages = [
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop", // Industrial Corp (B2B Sales)
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2064&auto=format&fit=crop", // Cruise (Ship/Travel)
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Real Estate (Architecture)
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", // Event/Speaker (Wedding/Celebration)
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop", // Research (Lab/Science)
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Manufacturing (Industry 4.0)
    ];

    // Find project
    const projectIndex = t.items.findIndex((item: any) => item.slug === slug);
    const project = projectIndex !== -1 ? t.items[projectIndex] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Project not found</h1>
                <Link to="/projects" className="text-blue-600 hover:underline">Back to Projects</Link>
            </div>
        );
    }

    const image = projectImages[projectIndex % projectImages.length];

    // Chart customization
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-slate-200 shadow-lg rounded-sm">
                    <p className="font-mono text-xs text-slate-500 uppercase mb-1">{label}</p>
                    <p className="font-bold text-[#0B1120]">
                        {payload[0].value} <span className="text-emerald-500 font-mono text-xs">{payload[0].payload.label}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#0B1120]">
            <EngineeringNavigation forceDark={true} />

            <article className="">
                {/* HERO SECTION */}
                <div className="w-full h-[50vh] relative bg-[#0B1120] overflow-hidden">
                    <img
                        src={image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full px-[5%] md:px-[10%] pb-16">
                        <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Overview
                        </Link>
                        <span className="block text-xs font-mono uppercase tracking-widest text-[#10B981] mb-2 bg-[#0B1120]/80 w-fit px-2 py-1 rounded-sm backdrop-blur-sm">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#0B1120] md:text-white tracking-tight leading-[1.1] max-w-4xl shadow-black drop-shadow-sm">
                            {project.title}
                        </h1>
                    </div>
                </div>

                <div className="px-[5%] md:px-[10%] pt-20 pb-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
                        style={{ backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />

                    {/* LEFT COLUMN: Main Story */}
                    <div className="lg:col-span-7 space-y-8 relative z-10">

                        <section className="bg-white p-8 md:p-12 border border-[#E2E8F0] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] group transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">
                            <h2 className="text-xs uppercase tracking-wider text-[#94A3B8] font-bold mb-4">{t.labels?.challenge || "CHALLENGE"}</h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                {project.fullProblem || project.challenge}
                            </p>
                        </section>

                        <section className="bg-white p-8 md:p-12 border border-[#E2E8F0] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] group transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">
                            <h2 className="text-xs uppercase tracking-wider text-[#94A3B8] font-bold mb-4">{t.labels?.solution || "SOLUTION"}</h2>
                            <p className="text-lg leading-relaxed text-slate-600">
                                {project.fullSolution || project.details}
                            </p>
                        </section>

                    </div>

                    {/* RIGHT COLUMN: Results & Data */}
                    <div className="lg:col-span-5 space-y-8 sticky top-32 h-fit relative z-10">
                        <div className="bg-white border border-[#E2E8F0] p-8 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] group transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">
                            <div className="mb-8 border-b border-slate-100 pb-4">
                                <h3 className="text-xs uppercase tracking-wider text-[#94A3B8] font-bold mb-1">{t.labels?.impact || "IMPACT ANALYSIS"}</h3>
                            </div>

                            <div className="mb-8">
                                <div className="text-sm text-slate-500 font-mono uppercase tracking-widest mb-1">{t.labels?.result || "RESULT"}</div>
                                <div className="text-4xl font-bold text-[#10B981]">{project.result}</div>
                            </div>

                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {project.fullResult}
                            </p>

                            {/* CHART AREA */}
                            {project.chartData && (
                                <div className="w-full h-64 mt-8 bg-slate-50 border border-slate-100 p-4 rounded-sm">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={project.chartData}>
                                            <XAxis
                                                dataKey="name"
                                                stroke="#94A3B8"
                                                fontSize={12}
                                                tickLine={false}
                                                axisLine={false}
                                            />
                                            <YAxis
                                                stroke="#94A3B8"
                                                fontSize={12}
                                                tickLine={false}
                                                axisLine={false}
                                            />
                                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                                            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                                                {project.chartData.map((entry: any, index: number) => (
                                                    <Cell key={`cell-${index}`} fill={index === 1 ? '#10B981' : '#CBD5E1'} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            )}
                        </div>

                        <div className="bg-slate-100 p-6 border border-slate-200 text-center">
                            <h4 className="font-bold text-[#0B1120] mb-2">{t.labels?.ready || "Ready to achieve similar results?"}</h4>
                            <a href="#contact" className="inline-block mt-2 bg-[#0B1120] text-white px-6 py-3 rounded-sm font-medium hover:bg-slate-800 transition-colors w-full">
                                {t.labels?.bookCall || "Book Discovery Call"}
                            </a>
                        </div>
                    </div>
                </div>

            </article >

            <Contact />
            <Footer />
        </div >
    );
};

export default ProjectDetail;
