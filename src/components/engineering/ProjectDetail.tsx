import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import EngineeringNavigation from "./EngineeringNavigation";
import Footer from "./Footer";
import Contact from "./Contact";
import { ArrowLeft, CheckCircle2, TrendingUp, Clock, Zap } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();
    const t = translations[language].engineering.projects;

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

    // Helper to render text with markdown-like features (bold **, list -)
    const renderFormattedText = (text: string) => {
        if (!text) return null;
        const lines = text.split('\n');

        return lines.map((line, i) => {
            const isListItem = line.trim().startsWith('-');
            const content = isListItem ? line.trim().substring(1).trim() : line;

            // Parse bold text **...**
            const parts = content.split(/(\*\*.*?\*\*)/g).map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j} className="font-bold text-slate-800">{part.slice(2, -2)}</strong>;
                }
                return part;
            });

            if (isListItem) {
                return (
                    <div key={i} className="flex items-start mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                        <p className="text-base leading-relaxed text-slate-600">{parts}</p>
                    </div>
                );
            }

            return (
                <p key={i} className="text-base leading-relaxed text-slate-600 mb-3">
                    {parts}
                </p>
            );
        });
    };

    // Chart customization
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-slate-200 shadow-xl rounded-sm">
                    <p className="font-mono text-[10px] text-slate-500 uppercase mb-1">{label}</p>
                    <div className="flex items-end gap-2">
                        <span className="text-lg font-bold text-[#0B1120]">{payload[0].value}</span>
                        <span className="text-emerald-600 font-mono text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded-sm mb-0.5">
                            {payload[0].payload.label}
                        </span>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#0B1120]">
            <EngineeringNavigation forceDark={true} />

            <article>
                {/* HERO SECTION - Technical/Abstract */}
                <div className="w-full relative bg-[#0B1120] overflow-hidden">
                    {/* Abstract Tech Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                                backgroundSize: '40px 40px'
                            }}
                        />
                        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-500/10 blur-[120px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-blue-500/10 blur-[100px] rounded-full" />
                    </div>

                    <div className="relative z-10 w-full px-[5%] md:px-[10%] pt-32 pb-16">
                        <Link to="/projects" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-6 transition-colors group">
                            <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Overview
                        </Link>

                        <div className="max-w-4xl">
                            <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#10B981] mb-4 border border-[#10B981]/30 bg-[#10B981]/10 px-2 py-1 rounded-sm">
                                {project.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                                {project.title}
                            </h1>

                            {/* Key Metrics Hero Cards */}
                            {project.metrics && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 w-full max-w-2xl">
                                    {project.metrics.map((metric: any, idx: number) => (
                                        <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm hover:bg-white/10 transition-colors">
                                            <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">{metric.value}</div>
                                            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="px-[5%] md:px-[10%] py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
                        style={{ backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />

                    {/* LEFT COLUMN: Main Story */}
                    <div className="lg:col-span-7 space-y-4 relative z-10">
                        <section className="bg-white p-6 md:p-8 border-t-4 border-t-slate-200 shadow-sm">
                            <div className="flex items-center gap-2.5 mb-3">
                                <div className="p-1.5 bg-red-50 rounded-sm">
                                    <TrendingUp className="w-4 h-4 text-red-500" />
                                </div>
                                <h2 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{t.labels?.challenge || "CHALLENGE"}</h2>
                            </div>
                            <div className="prose prose-slate prose-p:text-sm prose-p:leading-relaxed max-w-none">
                                {renderFormattedText(project.fullProblem || project.challenge)}
                            </div>
                        </section>

                        <section className="bg-white p-6 md:p-8 border-t-4 border-t-[#10B981] shadow-xl shadow-emerald-900/5">
                            <div className="flex items-center gap-2.5 mb-3">
                                <div className="p-1.5 bg-emerald-50 rounded-sm">
                                    <Zap className="w-4 h-4 text-emerald-500" />
                                </div>
                                <h2 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{t.labels?.solution || "SOLUTION"}</h2>
                            </div>
                            <div className="prose prose-slate prose-p:text-sm prose-p:leading-relaxed max-w-none">
                                {renderFormattedText(project.fullSolution || project.details)}
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: Results & Data */}
                    <div className="lg:col-span-5 space-y-4 sticky top-24 h-fit relative z-10">
                        {/* Impact Card - Light Theme */}
                        <div className="bg-white border border-[#E2E8F0] p-6 md:p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] relative overflow-hidden group hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] transition-all duration-500">

                            <div className="relative z-10">
                                <div className="flex items-center gap-2.5 mb-5 border-b border-slate-100 pb-3">
                                    <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                                    <h3 className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold">{t.labels?.impact || "IMPACT ANALYSIS"}</h3>
                                </div>

                                <div className="mb-5">
                                    <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mb-1">{t.labels?.result || "RESULT"}</div>
                                    {/* PRIORITIZE COST REDUCTION */}
                                    <div className="text-3xl lg:text-4xl font-bold text-[#10B981] tracking-tight">
                                        {project.metrics?.find((m: any) => m.label.includes('Cost') || m.label.includes('Kosten'))?.value || project.result}
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1 font-medium bg-emerald-50 inline-block px-1.5 py-0.5 rounded-sm">
                                        {project.metrics?.find((m: any) => m.label.includes('Cost') || m.label.includes('Kosten'))?.label || "Efficiency Boost"}
                                    </div>
                                </div>

                                <div className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    {renderFormattedText(project.fullResult)}
                                </div>

                                {/* CHART AREA */}
                                {project.chartData && (
                                    <div className="w-full mt-5">
                                        <div className="text-[10px] font-mono text-slate-400 mb-2.5 uppercase tracking-widest">Performance Comparison</div>
                                        <div className="h-40 bg-slate-50 border border-slate-100 p-3 rounded-sm">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={project.chartData} barSize={32}>
                                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                                    <XAxis
                                                        dataKey="name"
                                                        stroke="#94A3B8"
                                                        fontSize={10}
                                                        tickLine={false}
                                                        axisLine={false}
                                                        dy={5}
                                                    />
                                                    <YAxis
                                                        stroke="#94A3B8"
                                                        fontSize={10}
                                                        tickLine={false}
                                                        axisLine={false}
                                                    />
                                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F1F5F9' }} />
                                                    <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                                                        {project.chartData.map((entry: any, index: number) => (
                                                            <Cell
                                                                key={`cell-${index}`}
                                                                fill={index === 1 ? '#10B981' : '#CBD5E1'}
                                                            />
                                                        ))}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-[#0B1120] p-5 text-center shadow-lg group cursor-pointer transition-transform hover:-translate-y-1">
                            <h4 className="font-bold text-white text-sm mb-2.5">{t.labels?.ready || "Ready for similar results?"}</h4>
                            <a href="#contact" className="inline-flex items-center justify-center gap-2 w-full bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-white hover:text-[#0B1120] transition-all group-hover:border-white">
                                {t.labels?.bookCall || "Book Discovery Call"}
                                <ArrowLeft className="w-3.5 h-3.5 rotate-180 transition-transform group-hover:translate-x-1" />
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
