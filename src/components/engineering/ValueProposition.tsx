import React from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

const ValueProposition = () => {
    const { language } = useLanguage();
    const t = translations[language].engineering.valueProposition;

    return (
        <section className="relative w-full py-32 bg-[#F8F9FA] text-[#0F172A] border-t border-[#E2E8F0] overflow-hidden">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
                style={{
                    backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 w-full px-[10%]">

                {/* Headline */}
                <div className="mb-24 max-w-4xl relative">
                    <span className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-4">
                        Problem Statement
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.1]">
                        {t.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                    {t.cards.map((card, index) => (
                        <div key={index} className="flex flex-col group relative p-10 isolate min-h-[440px]">

                            {/* LIQUID GLASS CARD - Uniform & Grounded */}
                            <div
                                className="absolute inset-0 -z-10 rounded-sm"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)',
                                    border: '1px solid rgba(226, 232, 240, 1)',
                                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.02)',
                                }}
                            />

                            {/* Top Marker */}
                            <div className="w-10 h-[3px] bg-[#0F172A] mb-10 z-10" />

                            {/* Category Label */}
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#64748B] mb-4 font-bold opacity-60 z-10">
                                {card.title}
                            </span>

                            {/* The Pain Description - Larger & Immersive */}
                            <p className="text-[#0F172A] text-2xl md:text-3xl font-bold leading-[1.2] tracking-tight z-10 mb-auto">
                                {card.description}
                            </p>

                            {/* STATUS QUO AREA - The Grounding Reality */}
                            <div className="w-full z-10 pt-10 mt-10 border-t border-[#E2E8F0]">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] mb-2 font-bold">
                                        Status Quo {card.metric.label}
                                    </span>
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl font-black text-[#EF4444] tracking-tighter">
                                            {card.metric.manual.replace('Manuell: ', '').replace('Manual: ', '')}
                                        </div>
                                        <div className="h-4 w-[1px] bg-[#E2E8F0]" />
                                        <span className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-bold">
                                            Manueller Prozess
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;