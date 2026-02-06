import React from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import AgenticAnimation from "./visuals/AgenticAnimation";
import ComputerVisionAnimation from "./visuals/ComputerVisionAnimation";
import RagAnimation from "./visuals/RagAnimation";
import Reveal from "@/components/ui/Reveal";

// --- VISUAL SCHEMATICS (Engineering Style) ---

// AgenticAiComparison replaced by AgenticAnimation
// RagSchematic replaced by RagAnimation


const Solutions = () => {
    const { language } = useLanguage();
    const t = translations[language].engineering.solutions;

    const visuals = [
        null, // Index 0 handled separately
        <ComputerVisionAnimation />,
        <RagAnimation />
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
                    <Reveal width="100%">
                        <span className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3">
                            Solution Stack
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-[1.1] mb-4">
                            {t.title}
                        </h2>
                        <p className="text-lg md:text-xl text-[#334155] leading-relaxed max-w-2xl">
                            {t.subtitle}
                        </p>
                    </Reveal>
                </div>

                {/* Central Infrastructure Axis - Engineering Pipeline */}


                {/* Features Loop */}
                <div className="flex flex-col gap-20">
                    {t.features.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <Reveal key={index} width="100%">
                                <div className="w-full bg-white rounded-sm border border-slate-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 overflow-visible relative group z-10">



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
                            </Reveal>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Solutions;
