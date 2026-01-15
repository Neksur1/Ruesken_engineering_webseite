import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import { TrendingDown, Activity, Zap } from 'lucide-react';

const icons = [Activity, TrendingDown, Zap];

// --- Visualization Components ---

const ErrorMetric = ({ manualLabel, aiLabel }: { manualLabel: string, aiLabel: string }) => {
    return (
        <div className="flex flex-col h-full justify-between py-2">
            {/* Manual State */}
            <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>{manualLabel}</span>
                </div>
                <div className="h-8 flex items-end gap-[2px] overflow-hidden opacity-80">
                    {/* Simulated Random Errors */}
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full bg-red-500/40"
                            style={{
                                height: `${Math.random() * 100}%`,
                                animation: `pulse ${0.5 + Math.random()}s infinite`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Transition Arrow */}
            <div className="flex justify-center my-2">
                <div className="w-px h-4 bg-slate-700" />
            </div>

            {/* AI State */}
            <div className="space-y-1">
                <div className="flex justify-between text-xs text-emerald-400 font-mono">
                    <span>{aiLabel}</span>
                </div>
                <div className="h-8 flex items-end relative overflow-hidden bg-emerald-900/10 border border-emerald-500/20">
                    <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
                    <div className="w-full h-[2px] bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] self-center" />
                </div>
            </div>
        </div>
    );
};

const CapacityMetric = ({ manualLabel, aiLabel }: { manualLabel: string, aiLabel: string }) => {
    return (
        <div className="flex flex-col h-full justify-between py-2">
            {/* Manual State */}
            <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>{manualLabel}</span>
                </div>
                {/* Bottleneck Visual */}
                <div className="flex items-center gap-1 h-8">
                    <div className="h-full w-3/4 bg-slate-700/50 rounded-sm flex items-center justify-center text-[10px] text-slate-500">
                        Workload
                    </div>
                    <div className="h-full w-px bg-red-500/50" />
                    <div className="h-full w-1/4 border border-dashed border-red-500/30 rounded-sm flex items-center justify-center text-[8px] text-red-400">
                        Lost
                    </div>
                </div>
            </div>

            {/* Transition Arrow */}
            <div className="flex justify-center my-2">
                <div className="w-px h-4 bg-slate-700" />
            </div>

            {/* AI State */}
            <div className="space-y-1">
                <div className="flex justify-between text-xs text-emerald-400 font-mono">
                    <span>{aiLabel}</span>
                </div>
                {/* Scalable Visual */}
                <div className="h-8 w-full bg-emerald-900/10 border border-emerald-500/20 relative overflow-hidden">
                    {/* Moving stripes indicating flow */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(16,185,129,0.2)_50%,transparent_100%)] animate-slide-right w-[200%]" />
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-emerald-400 font-mono tracking-widest">
                        SCALING...
                    </div>
                </div>
            </div>
        </div>
    );
};

const SpeedMetric = ({ manualLabel, aiLabel }: { manualLabel: string, aiLabel: string }) => {
    return (
        <div className="flex flex-col h-full justify-between py-2">
            {/* Manual State */}
            <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>{manualLabel}</span>
                </div>
                {/* Long bar */}
                <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-slate-600 animate-pulse" />
                </div>
            </div>

            {/* Transition Arrow */}
            <div className="flex justify-center my-2">
                <div className="w-px h-4 bg-slate-700" />
            </div>

            {/* AI State */}
            <div className="space-y-1">
                <div className="flex justify-between text-xs text-emerald-400 font-mono">
                    <span>{aiLabel}</span>
                </div>
                {/* Short fast bar */}
                <div className="h-2 w-full bg-emerald-900/20 rounded-full overflow-hidden flex items-center">
                    <div className="h-full w-[2%] bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]" />
                </div>
            </div>
        </div>
    );
};

const ValueProposition = () => {
    const { language } = useLanguage();
    const t = translations[language].engineering.valueProposition;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let streams: any[] = [];

        const init = () => {
            // Ensure we use the parent's dimensions or the section's dimensions
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            const width = canvas.width;
            const height = canvas.height;

            streams = [];
            for (let i = 0; i < 20; i++) {
                streams.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    speed: 0.2 + Math.random() * 0.5,
                    length: 50 + Math.random() * 100,
                    opacity: 0.03 + Math.random() * 0.1,
                    width: 0.5 + Math.random() * 0.8,
                });
            }
        };

        const animate = () => {
            if (!ctx) return;
            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);

            streams.forEach(stream => {
                ctx.beginPath();
                const gradient = ctx.createLinearGradient(0, stream.y, 0, stream.y + stream.length);
                gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${stream.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = stream.width;
                ctx.moveTo(stream.x, stream.y);
                ctx.lineTo(stream.x, stream.y + stream.length);
                ctx.stroke();

                stream.y -= stream.speed;
                if (stream.y + stream.length < 0) {
                    stream.y = height;
                    stream.x = Math.random() * width;
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        const resizeObserver = new ResizeObserver(() => {
            init();
        });

        if (canvas.parentElement) {
            resizeObserver.observe(canvas.parentElement);
        }

        init();
        animate();

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animationId);
        };
    }, []);


    return (
        <section className="relative z-10 w-full px-[5%] md:px-[10%] pt-40 pb-32 bg-transparent text-luxury-text font-sans overflow-hidden">
            {/* Smooth transition gradient from hero (Fade-Out) */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-transparent pointer-events-none z-0" />

            {/* Background Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 z-[1] opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-[1200px] mx-auto">
                <div className="flex flex-col items-start mb-32 opacity-0 animate-slide-up fill-mode-forwards [view-timeline-name:--trigger] [animation-timeline:view()] [animation-range:entry_20%_cover_40%] text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        {t.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-60" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.cards.map((card, index) => {
                        const Icon = icons[index];
                        // Select visualization based on index strictly for this landing page logic
                        const Visualization = index === 0 ? ErrorMetric :
                            index === 1 ? CapacityMetric :
                                SpeedMetric;

                        const metricData = card.metric as any; // Cast because TS might complain about dynamic translation structure

                        return (
                            <div
                                key={index}
                                className="group relative bg-[#0a0f1e]/40 backdrop-blur-md border border-white/5 p-8 flex flex-col gap-6 transition-all duration-500 hover:bg-[#0a0f1e]/60"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/20 transition-colors duration-500 pointer-events-none" />

                                <div className="flex items-center gap-3">
                                    <Icon size={24} className="text-emerald-400" strokeWidth={2} />
                                    <h3 className="text-lg font-bold text-white tracking-tight">
                                        {card.title}
                                    </h3>
                                </div>

                                <div className="border-t border-b border-white/5 py-6 min-h-[140px]">
                                    {/* Render the specific visualizer */}
                                    <Visualization
                                        manualLabel={metricData.manual}
                                        aiLabel={metricData.ai}
                                    />
                                </div>

                                <div className="text-slate-400 text-sm leading-relaxed min-h-[3em]">
                                    <span dangerouslySetInnerHTML={{ __html: card.description }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
