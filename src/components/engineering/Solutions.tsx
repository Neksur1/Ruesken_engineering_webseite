import React from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import { ArrowRight } from "lucide-react";
import AgenticAnimation from "./visuals/AgenticAnimation";

// --- VISUAL SCHEMATICS (Engineering Style) ---

// AgenticAiComparison replaced by AgenticAnimation


const ComparisonVisual = () => {
    return (
        <div className="relative w-full h-[260px] bg-white border border-slate-200 shadow-sm flex overflow-hidden group">
            {/* Problem Side (Left) */}
            <div className="relative w-1/2 h-full border-r border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 z-10 mix-blend-multiply" />
                <img
                    src="/assets/solution-stack/problem-manual.png"
                    alt="Manual Process"
                    className="w-full h-full object-cover grayscale contrast-125 scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-white/90 px-2 py-1 backdrop-blur-sm border border-slate-200 shadow-sm">
                        Manual Input
                    </div>
                </div>
            </div>

            {/* Solution Side (Right) */}
            <div className="relative w-1/2 h-full overflow-hidden">
                <img
                    src="/assets/solution-stack/solution-interface.png"
                    alt="Automated Solution"
                    className="w-full h-full object-cover"
                />

                {/* Success Toast */}
                <div className="absolute bottom-8 right-6 bg-white border border-emerald-500/20 shadow-[0_8px_16px_-4px_rgba(16,185,129,0.2)] p-3 rounded-sm flex items-center gap-3 animate-in slide-in-from-bottom-2 fade-in duration-700 delay-500 max-w-[180px]">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-900 leading-tight">Export Complete</span>
                        <span className="text-[9px] font-mono text-slate-500 leading-tight">142 dims in 0.3s</span>
                    </div>
                </div>
            </div>

            {/* Center Divisor */}
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/50 z-20"></div>

            {/* Label */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-mono text-slate-500 bg-white/95 px-3 py-1 rounded-full border border-slate-200 shadow-sm z-20 backdrop-blur-md">
                FIG 2.0: MANUAL VS AUTOMATED
            </div>
        </div>
    );
};

const RagSchematic = () => {
    return (
        <div className="relative w-full h-[260px] bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">

            {/* Database Cylinder */}
            <div className="relative z-10 flex items-center gap-12">

                {/* Source Doc */}
                <div className="w-24 h-32 border border-slate-300 bg-white p-2 flex flex-col gap-2 relative">
                    <div className="w-full h-1 bg-slate-200" />
                    <div className="w-full h-1 bg-slate-200" />
                    <div className="w-1/2 h-1 bg-slate-200" />
                    <div className="absolute -top-2 -right-2 text-[8px] font-mono bg-slate-100 border border-slate-300 px-1 text-slate-500">SRC</div>
                </div>

                {/* Arrow */}
                <ArrowRight className="text-slate-300 w-4 h-4" />

                {/* Indexing Stack */}
                <div className="relative">
                    <div className="w-24 h-6 border border-[#0B1120] bg-slate-50 rounded-[100%] absolute -top-3 z-20" />
                    <div className="w-24 h-24 border-x border-b border-[#0B1120] bg-white rounded-b-xl flex flex-col items-center justify-center gap-1 z-10 relative">
                        <div className="w-16 h-[1px] bg-slate-100" />
                        <div className="w-16 h-[1px] bg-slate-100" />
                        <div className="w-16 h-[1px] bg-slate-100" />

                        <div className="mt-2 text-[9px] font-mono font-bold tracking-widest text-[#0B1120]">VECTOR</div>
                    </div>
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-400">
                FIG 3.0: VECTORIZATION
            </div>
        </div>
    );
};


const Solutions = () => {
    const { language } = useLanguage();
    const t = translations[language].engineering.solutions;

    const visuals = [
        null, // Index 0 handled separately
        <ComparisonVisual />,
        <RagSchematic />
    ];

    return (
        <section id="solutions" className="relative w-full min-h-screen flex flex-col justify-center pb-20 pt-16 bg-[#F1F5F9] text-[#0B1120] border-t border-transparent -mt-1 shadow-[inset_0_20px_20px_-20px_rgba(0,0,0,0.05)]">
            {/* Continuous Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
                style={{
                    backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Main Container - Left Aligned Full Width */}
            <div className="relative z-10 w-full px-[10%]">

                {/* Header - Left Aligned & Adjusted Width */}
                <div className="mb-16 relative max-w-3xl">
                    <span className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3">
                        Solution Stack
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-[1.1] mb-4">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-xl text-[#334155] leading-relaxed max-w-2xl">
                        {t.subtitle}
                    </p>
                </div>

                {/* Central Infrastructure Axis - Engineering Pipeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-slate-200 hidden lg:block z-0 -translate-x-1/2" />

                {/* Features Loop */}
                <div className="flex flex-col gap-20">
                    {t.features.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className="w-full bg-white rounded-sm border border-slate-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 overflow-visible relative group z-10">

                                {/* Structural Connectors (Visual Link to the Axis) */}
                                <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-white border-4 border-slate-200 rounded-full hidden lg:block z-20" />
                                <div className="absolute -bottom-[16px] left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-white border-4 border-slate-200 rounded-full hidden lg:block z-20" />

                                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch w-full relative z-10 bg-white`}>

                                    {/* Text Content - Now part of the unified card */}
                                    <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="text-xl font-mono font-bold text-slate-300">
                                                0{index + 1}
                                            </span>
                                            <span className="text-sm uppercase tracking-[0.25em] text-[#64748B] font-bold">
                                                {feature.title}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-[#0B1120] mb-4 leading-tight tracking-tight max-w-xl">
                                            {feature.headline}
                                        </h3>
                                        <p className="text-lg text-[#334155] mb-6 leading-relaxed max-w-xl">
                                            {feature.description.split('*').map((part, i) =>
                                                i % 2 === 1 ? <strong key={i} className="font-bold text-[#0B1120]">{part}</strong> : part
                                            )}
                                        </p>

                                        {/* Comparison - Styled purely technical with Styleguide Impacts */}
                                        <div className="flex flex-col border-l-2 border-[#E2E8F0] pl-5 py-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">FROM:</span>
                                                <span className="text-xl font-medium text-slate-300 line-through decoration-slate-300/30">{feature.comparison.from}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm uppercase tracking-wider text-[#10B981] font-bold">TO:</span>
                                                <span className="text-3xl font-bold text-[#10B981] tracking-tight">
                                                    {feature.comparison.to}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual Content - Integrated into the same card */}
                                    <div className="flex-1 relative flex items-center justify-center p-4 md:p-8 lg:p-10 min-h-[320px]">
                                        <div className="w-full">
                                            {index === 0 ? (
                                                <AgenticAnimation />
                                            ) : visuals[index]}
                                        </div>
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

export default Solutions;
