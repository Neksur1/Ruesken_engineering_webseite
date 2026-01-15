import React from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import { ArrowRight } from "lucide-react";

// --- VISUAL SCHEMATICS (Engineering Style) ---

const AgenticAiSchematic = () => {
    return (
        <div className="relative w-full h-[320px] bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
            {/* Blueprint Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Logic Tree Diagram */}
            <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-[300px]">
                {/* Input Node */}
                <div className="w-full flex justify-center">
                    <div className="px-6 py-3 border border-slate-900 bg-slate-50 text-[10px] font-mono tracking-widest text-slate-900 uppercase">
                        Input: Trigger
                    </div>
                </div>

                {/* Vertical Line */}
                <div className="h-8 w-[1px] bg-slate-300" />

                {/* Decision Node (Diamond Shape simulation via Box) */}
                <div className="relative flex items-center justify-center w-32 h-16 border border-slate-900 bg-white">
                    <span className="text-[10px] font-mono text-slate-900 font-bold">ANALYSIS</span>
                </div>

                {/* Branches */}
                <div className="relative flex w-full justify-between px-4">
                    {/* Branch Lines */}
                    <div className="absolute top-0 left-1/2 -mt-4 w-[1px] h-4 bg-slate-300" /> {/* Top connector */}
                    <div className="absolute top-0 left-10 right-10 h-[1px] bg-slate-300" /> {/* Horizontal */}
                    <div className="absolute top-0 left-10 h-4 w-[1px] bg-slate-300" /> {/* Left Drop */}
                    <div className="absolute top-0 right-10 h-4 w-[1px] bg-slate-300" /> {/* Right Drop */}

                    <div className="mt-4 px-4 py-2 border border-slate-300 bg-white text-[10px] text-slate-500 font-mono">
                        Path A
                    </div>
                    <div className="mt-4 px-4 py-2 border border-slate-900 bg-slate-900 text-[10px] text-white font-mono shadow-md">
                        Action B
                    </div>
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-400">
                FIG 1.0: ADAPTIVE LOGIC
            </div>
        </div>
    );
};

const ComputerVisionSchematic = () => {
    return (
        <div className="relative w-full h-[320px] bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
            {/* Crosshairs */}
            <div className="absolute inset-0">
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-slate-100" />
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-slate-100" />
            </div>

            {/* Object Geometry (simulating a technical drawing) */}
            <div className="relative z-10 border border-slate-900 w-40 h-40 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 border border-dashed border-slate-300 rounded-full" />
                <div className="w-2 h-2 bg-slate-900 rounded-full" />

                {/* Measurements */}
                <div className="absolute -right-4 top-1/2 w-4 h-[1px] bg-slate-900" />
                <div className="absolute right-[-40px] top-[45%] text-[9px] font-mono text-slate-900">Ø 120mm</div>
            </div>

            {/* Bounding Box Overlay */}
            <div className="absolute z-20 w-48 h-48 border border-slate-400 opacity-50">
                <div className="absolute -top-2 -left-[1px] w-2 h-[1px] bg-slate-900" />
                <div className="absolute -top-[1px] -left-2 h-2 w-[1px] bg-slate-900" />
                <div className="absolute top-2 left-2 text-[9px] font-mono bg-slate-900 text-white px-1">
                    OBJ_DETECT
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-400">
                FIG 2.0: GEOMETRY EXTRACTION
            </div>
        </div>
    );
};

const RagSchematic = () => {
    return (
        <div className="relative w-full h-[320px] bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">

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
                    <div className="w-24 h-6 border border-slate-900 bg-slate-50 rounded-[100%] absolute -top-3 z-20" />
                    <div className="w-24 h-24 border-x border-b border-slate-900 bg-white rounded-b-xl flex flex-col items-center justify-center gap-1 z-10 relative">
                        <div className="w-16 h-[1px] bg-slate-100" />
                        <div className="w-16 h-[1px] bg-slate-100" />
                        <div className="w-16 h-[1px] bg-slate-100" />

                        <div className="mt-2 text-[9px] font-mono font-bold tracking-widest text-slate-900">VECTOR</div>
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
        <AgenticAiSchematic />,
        <ComputerVisionSchematic />,
        <RagSchematic />
    ];

    return (
        <section className="relative w-full pb-32 pt-24 bg-[#F1F5F9] text-[#0F172A] border-t border-transparent -mt-1 shadow-[inset_0_20px_20px_-20px_rgba(0,0,0,0.05)]">
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
                <div className="mb-24 relative max-w-4xl">
                    <span className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-4">
                        Solution Stack
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-xl text-[#334155] leading-relaxed max-w-2xl">
                        {t.subtitle}
                    </p>
                </div>

                {/* Features Loop */}
                <div className="flex flex-col gap-32">
                    {t.features.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className="w-full bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] overflow-hidden relative group">
                                {/* Styleguide Accent: Vertical bar for active/solved state */}
                                <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#10B981] shadow-[4px_0_15px_rgba(16,185,129,0.2)]" />

                                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch w-full`}>

                                    {/* Text Content - Now part of the unified card */}
                                    <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="text-sm font-mono font-bold text-[#0F172A] border border-[#0F172A] px-3 py-1 scale-110 origin-left">
                                                0{index + 1}
                                            </span>
                                            <span className="text-sm uppercase tracking-[0.3em] text-[#64748B] font-bold">
                                                {feature.title}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-5 leading-tight tracking-tight max-w-xl">
                                            {feature.headline}
                                        </h3>
                                        <p className="text-lg text-[#334155] mb-8 leading-relaxed max-w-xl">
                                            {feature.description}
                                        </p>

                                        {/* Comparison - Styled purely technical with Styleguide Impacts */}
                                        <div className="flex flex-col border-l-2 border-[#E2E8F0] pl-6 py-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] uppercase tracking-wider text-[#94A3B8]">FROM:</span>
                                                <span className="text-base font-medium text-[#64748B] line-through decoration-slate-400/50">{feature.comparison.from}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm uppercase tracking-wider text-[#10B981] font-bold">TO:</span>
                                                <span className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                                                    {feature.comparison.to}
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual Content - Integrated into the same card */}
                                    <div className="flex-1 relative flex items-center justify-center p-6 md:p-12 lg:p-16 min-h-[400px]">
                                        <div className="w-full">
                                            {visuals[index]}
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
