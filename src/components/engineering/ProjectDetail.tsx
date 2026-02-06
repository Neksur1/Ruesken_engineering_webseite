import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import EngineeringNavigation from "./EngineeringNavigation";
import Footer from "./Footer";
import Contact from "./Contact";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ── helpers ─────────────────────────────────────────────── */

const FadeIn = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);
    return (
        <div ref={ref} className={`transition-all duration-700 ease-out ${className}`}
            style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(20px)', transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

const splitText = (text: string) => {
    const m = text.match(/^(.+?[.!:])(\s+[A-ZÄÖÜ].*)/s);
    return m ? { lead: m[1], body: m[2].trim() } : { lead: text, body: '' };
};

// isLead: in headlines, numbers get bold+color, terms get semibold — rest stays normal weight
// in body: numbers get semibold+dark, terms get medium — rest stays light
const Hl = ({ text, isLead = false }: { text: string; isLead?: boolean }) => {
    const parts = text.split(/(\d+[\d.,]*\s*%?x?|\b(?:CRM|AI|KI|NLP|LLM|API|CMS|ISO|B2B|R&I|DACH|Deep.?Learning|Buying.?Center)\b)/gi);
    return <>
        {parts.map((p, i) => {
            if (/^\d+[\d.,]*\s*%?x?$/.test(p)) {
                return <span key={i} className={isLead ? "font-bold text-[#0B1120]" : "font-semibold text-[#0B1120]"}>{p}</span>;
            }
            if (/^(?:CRM|AI|KI|NLP|LLM|API|CMS|ISO|B2B|R&I|DACH|Deep.?Learning|Buying.?Center)$/i.test(p)) {
                return <span key={i} className={isLead ? "font-semibold text-[#0B1120]" : "font-medium text-[#0B1120]"}>{p}</span>;
            }
            return <span key={i}>{p}</span>;
        })}
    </>;
};

/* ── animated horizontal bars (light) ────────────────────── */

const ComparisonBars = ({ before, after, animate }: {
    before: { name: string; value: number; label: string };
    after: { name: string; value: number; label: string };
    animate: boolean;
}) => {
    const max = Math.max(before.value, after.value);
    return (
        <div className="space-y-4">
            {/* Before */}
            <div>
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">{before.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">{before.label}</span>
                </div>
                <div className="relative h-9 bg-slate-50 border border-slate-100 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-slate-200/70 transition-all duration-[1.4s] ease-out"
                        style={{ width: animate ? `${(before.value / max) * 100}%` : '0%' }} />
                    <div className="absolute inset-0 flex items-center px-3">
                        <span className="text-sm font-bold text-slate-400">{before.value}</span>
                    </div>
                </div>
            </div>
            {/* After */}
            <div>
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#10B981]">{after.name}</span>
                    <span className="text-[10px] font-mono text-[#10B981]/60">{after.label}</span>
                </div>
                <div className="relative h-9 bg-[#10B981]/[0.06] border border-[#10B981]/10 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#10B981] transition-all duration-[1.8s] ease-out"
                        style={{ width: animate ? `${(after.value / max) * 100}%` : '0%' }} />
                    <div className="absolute inset-0 flex items-center px-3">
                        <span className="text-sm font-bold text-white">{after.value}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ── main component ──────────────────────────────────────── */

const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();
    const t = translations[language].engineering.projects;

    const projectImages = [
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    ];

    const idx = t.items.findIndex((item: any) => item.slug === slug);
    const project = idx !== -1 ? t.items[idx] : null;
    const prev = idx > 0 ? t.items[idx - 1] : null;
    const next = idx < t.items.length - 1 ? t.items[idx + 1] : null;

    const chartRef = useRef<HTMLDivElement>(null);
    const [chartVis, setChartVis] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, [slug]);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setChartVis(true); }, { threshold: 0.15 });
        if (chartRef.current) o.observe(chartRef.current);
        return () => o.disconnect();
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4 text-[#0B1120]">Project not found</h1>
                <Link to="/projects" className="text-[#10B981] hover:underline">Back to Projects</Link>
            </div>
        );
    }

    const image = projectImages[idx % projectImages.length];
    const bef = project.chartData?.[0];
    const aft = project.chartData?.[1];
    const factor = bef && aft
        ? (aft.value > bef.value ? Math.round(aft.value / bef.value) : Math.round(bef.value / aft.value))
        : null;

    const ch = splitText(project.fullProblem || project.challenge);
    const sol = splitText(project.fullSolution || project.details);
    const res = splitText(project.fullResult || '');

    return (
        <div className="min-h-screen font-sans">
            <EngineeringNavigation forceDark={true} />

            <article>
                {/* ─── HERO ─── */}
                <div className="w-full h-[55vh] md:h-[65vh] relative bg-[#0B1120] overflow-hidden">
                    <img src={image} alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-[#0B1120]/20" />

                    <div className="absolute bottom-0 left-0 w-full px-[5%] md:px-[10%] pb-10 md:pb-14">
                        <Link to="/projects"
                            className="inline-flex items-center gap-2 text-xs text-white/35 hover:text-white/70 transition-colors mb-5 font-mono uppercase tracking-widest group">
                            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                            {t.labels?.backToOverview || "Back to Overview"}
                        </Link>
                        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#10B981]/80 mb-2.5">{project.category}</div>
                        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.1] max-w-3xl">
                            {project.title}
                        </h1>
                    </div>
                </div>

                {/* ─── CONTENT AREA ─── */}
                <div className="bg-[#F3F4F6]">
                    <div className="px-[5%] md:px-[10%]">
                        <div className="max-w-[1300px] mx-auto">

                            {/* Two-column layout: narrative (left) + sticky data panel (right) */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10">

                                {/* ─── LEFT: Narrative ─── */}
                                <div className="lg:col-span-7 xl:col-span-8">

                                    {/* Key facts row (overlapping hero) */}
                                    <FadeIn>
                                        <div className="bg-white border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] -mt-7 mb-10 grid grid-cols-2 divide-x divide-slate-100">
                                            <div className="p-4 md:p-5">
                                                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-0.5">{t.labels?.result || "Result"}</div>
                                                <div className="text-base md:text-lg font-bold text-[#10B981]">{project.result}</div>
                                            </div>
                                            <div className="p-4 md:p-5">
                                                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-0.5">System</div>
                                                <div className="text-sm font-semibold text-[#0B1120] leading-snug">{project.details}</div>
                                            </div>
                                        </div>
                                    </FadeIn>

                                    {/* Challenge */}
                                    <FadeIn>
                                        <section className="mb-12">
                                            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4">
                                                {t.labels?.challenge || "Challenge"}
                                            </h2>
                                            <p className="text-xl md:text-2xl font-normal text-[#1a2332] leading-[1.45] tracking-tight mb-4">
                                                <Hl text={ch.lead} isLead />
                                            </p>
                                            {ch.body && (
                                                <p className="text-[15px] leading-[1.85] text-slate-500">
                                                    <Hl text={ch.body} />
                                                </p>
                                            )}
                                        </section>
                                    </FadeIn>

                                    <div className="h-[1px] bg-slate-200/80 mb-12" />

                                    {/* Solution */}
                                    <FadeIn>
                                        <section className="mb-12">
                                            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#10B981] mb-4">
                                                {t.labels?.solution || "Solution"}
                                            </h2>
                                            <p className="text-xl md:text-2xl font-normal text-[#1a2332] leading-[1.45] tracking-tight mb-4">
                                                <Hl text={sol.lead} isLead />
                                            </p>
                                            {sol.body && (
                                                <p className="text-[15px] leading-[1.85] text-slate-500">
                                                    <Hl text={sol.body} />
                                                </p>
                                            )}
                                        </section>
                                    </FadeIn>

                                    <div className="h-[1px] bg-slate-200/80 mb-12" />

                                    {/* Result narrative */}
                                    <FadeIn>
                                        <section className="pb-16 md:pb-24">
                                            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#10B981] mb-4">
                                                {t.labels?.impact || "Ergebnis"}
                                            </h2>
                                            <p className="text-xl md:text-2xl font-normal text-[#1a2332] leading-[1.45] tracking-tight mb-4">
                                                <Hl text={res.lead} isLead />
                                            </p>
                                            {res.body && (
                                                <p className="text-[15px] leading-[1.85] text-slate-500">
                                                    <Hl text={res.body} />
                                                </p>
                                            )}
                                        </section>
                                    </FadeIn>
                                </div>

                                {/* ─── RIGHT: Sticky data panel ─── */}
                                <div className="lg:col-span-5 xl:col-span-4">
                                    <div ref={chartRef} className="lg:sticky lg:top-24 pt-6 lg:pt-0 pb-16 lg:pb-24">
                                        <FadeIn delay={150}>
                                            <div className="bg-white border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] -mt-0 lg:-mt-7">

                                                {/* Header */}
                                                <div className="p-5 md:p-6 border-b border-slate-100">
                                                    <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-slate-400 mb-1">
                                                        Impact
                                                    </div>
                                                    <div className="text-3xl md:text-4xl font-bold text-[#0B1120] tracking-tight leading-none">
                                                        {project.result}
                                                    </div>
                                                </div>

                                                {/* Chart */}
                                                {bef && aft && (
                                                    <div className="p-5 md:p-6 border-b border-slate-100">
                                                        <ComparisonBars before={bef} after={aft} animate={chartVis} />
                                                    </div>
                                                )}

                                                {/* Factor + metrics */}
                                                <div className="p-5 md:p-6">
                                                    {factor && factor > 1 && (
                                                        <div className="flex items-baseline gap-2.5 mb-4">
                                                            <span className="text-2xl font-bold text-[#10B981]">{factor}x</span>
                                                            <span className="text-xs font-mono text-slate-400">{language === 'de' ? 'Verbesserung' : 'Improvement'}</span>
                                                        </div>
                                                    )}
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {bef && (
                                                            <div>
                                                                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-0.5">{bef.name}</div>
                                                                <div className="text-lg font-bold text-slate-300">{bef.value}</div>
                                                                <div className="text-[10px] font-mono text-slate-400">{bef.label}</div>
                                                            </div>
                                                        )}
                                                        {aft && (
                                                            <div>
                                                                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-0.5">{aft.name}</div>
                                                                <div className="text-lg font-bold text-[#0B1120]">{aft.value}</div>
                                                                <div className="text-[10px] font-mono text-slate-400">{aft.label}</div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* CTA inside panel */}
                                                <div className="px-5 md:px-6 pb-5 md:pb-6">
                                                    <a href="#contact"
                                                        className="w-full flex items-center justify-center gap-2 bg-[#0B1120] text-white px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#10B981] transition-colors duration-300 group">
                                                        {t.labels?.bookCall || "Book Discovery Call"}
                                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                                                    </a>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── Prev / Next ─── */}
                    <div className="border-t border-slate-200/80 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            <div className="group">
                                {prev ? (
                                    <Link to={`/projects/${prev.slug}`}
                                        className="flex items-center gap-5 px-[5%] md:px-[10%] py-7 md:py-9 hover:bg-slate-50 transition-colors">
                                        <ArrowLeft className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-all group-hover:-translate-x-1 shrink-0" />
                                        <div className="min-w-0">
                                            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                                                {language === 'de' ? 'Vorheriges Projekt' : 'Previous'}
                                            </div>
                                            <div className="text-sm font-semibold text-slate-400 group-hover:text-[#0B1120] transition-colors truncate">
                                                {prev.title}
                                            </div>
                                        </div>
                                    </Link>
                                ) : <div className="py-7 md:py-9" />}
                            </div>
                            <div className="group">
                                {next ? (
                                    <Link to={`/projects/${next.slug}`}
                                        className="flex items-center justify-end gap-5 px-[5%] md:px-[10%] py-7 md:py-9 hover:bg-slate-50 transition-colors text-right">
                                        <div className="min-w-0">
                                            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                                                {language === 'de' ? 'Nächstes Projekt' : 'Next'}
                                            </div>
                                            <div className="text-sm font-semibold text-slate-400 group-hover:text-[#0B1120] transition-colors truncate">
                                                {next.title}
                                            </div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-all group-hover:translate-x-1 shrink-0" />
                                    </Link>
                                ) : <div className="py-7 md:py-9" />}
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Contact />
            <Footer />
        </div>
    );
};

export default ProjectDetail;
