import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import Reveal from "@/components/ui/Reveal";


const ValueProposition = () => {
    const { language } = useLanguage();
    const t = translations[language].engineering.valueProposition;

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-[#E6EAF0] text-[#0B1120] border-t border-[#E2E8F0] overflow-hidden">
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
                <div className="mb-16 max-w-3xl relative">
                    <Reveal width="100%">
                        <span className="block text-xs font-mono uppercase tracking-widest text-slate-600 mb-3">
                            Problem Statement
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-[1.1]">
                            {t.title}
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
                    {t.cards.map((card, index) => (
                        <Reveal key={index} delay={index * 0.15} width="100%" className="h-full">
                            <div className="flex flex-col group relative p-7 min-h-[360px] bg-white rounded-sm border border-slate-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 h-full">

                                {/* Top Marker */}
                                <div className="w-8 h-[2px] bg-[#0B1120] mb-6 z-10" />

                                {/* Category Label */}
                                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-600 mb-3 font-bold z-10">
                                    {card.title}
                                </span>

                                {/* The Pain Description - Larger & Immersive */}
                                <p className="text-[#0B1120] text-2xl md:text-3xl font-bold leading-[1.25] tracking-tight z-10 mb-auto hyphens-auto">
                                    {card.description}
                                </p>

                                {/* STATUS QUO AREA - The Grounding Reality (Law of Proximity: tighter spacing) */}
                                <div className="w-full z-10 pt-4 mt-4 border-t border-[#E2E8F0]">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1 font-bold">
                                            Status Quo {card.metric.label}
                                        </span>
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl font-black text-[#EF4444] tracking-tighter">
                                                {card.metric.manual.replace('Manuell: ', '').replace('Manual: ', '')}
                                            </div>
                                            <div className="h-3 w-[1px] bg-[#E2E8F0]" />
                                            <span className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-bold">
                                                Manueller Prozess
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;