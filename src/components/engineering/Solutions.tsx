import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import { Brain, Workflow, ScanEye, CheckCircle2, Terminal, Code2, Database, Network, Cpu, Activity } from 'lucide-react';

const CodeVisual = () => (
    <div className="relative w-full h-[260px] md:h-[300px] bg-[#0f172a] rounded-xl border border-white/10 overflow-hidden shadow-2xl font-mono text-sm">
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-4 text-xs text-white/30">agent_config.py</div>
        </div>

        {/* Code Content */}
        <div className="p-6 text-slate-300 leading-relaxed overflow-hidden">
            <div className="flex gap-4">
                <div className="flex flex-col text-right text-white/20 select-none">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => <span key={i}>{i}</span>)}
                </div>
                <div className="flex-1">
                    <div className="text-pink-400">class <span className="text-yellow-300">EnterpriseAgent</span>:</div>
                    <div className="pl-4">
                        <span className="text-blue-400">def</span> <span className="text-yellow-300">analyze_contract</span>(self, doc):
                    </div>
                    <div className="pl-8 text-white/50"># Secure local RAG execution</div>
                    <div className="pl-8">
                        <span className="text-cyan-400">risk_score</span> = self.model.evaluate(
                    </div>
                    <div className="pl-12">doc,
                    </div>
                    <div className="pl-12">policy=<span className="text-green-400">"strict"</span>
                    </div>
                    <div className="pl-8">)</div>
                    <div className="pl-8 mt-2">
                        <span className="text-purple-400">if</span> risk_score &gt; <span className="text-orange-400">0.8</span>:
                    </div>
                    <div className="pl-12">
                        <span className="text-blue-400">return</span> <span className="text-green-400">Alert.HIGH_PRIORITY</span>
                    </div>
                    <div className="pl-8 mt-2">
                        <span className="text-blue-400">return</span> risk_score
                    </div>
                </div>
            </div>

            {/* Blinking Cursor */}
            <div className="absolute top-[260px] left-[120px] w-2 h-4 bg-emerald-500 animate-pulse" />
        </div>

        {/* Floating Badge */}
        <div className="absolute bottom-6 right-6 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 text-xs font-bold">RAG ENGINE ACTIVE</span>
        </div>
    </div>
);

const ProcessVisual = () => {
    return (
        <div className="relative w-full h-[260px] md:h-[300px] bg-[#0b1120] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-50" />

            {/* Animated Nodes */}
            <div className="relative z-10 grid grid-cols-3 gap-8 md:gap-16">
                {/* Node 1: Input */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative group">
                        <Database className="text-blue-400" />
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500/20 blur-xl rounded-full" />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">ERP Data</span>
                </div>

                {/* Node 2: Processing (Center) */}
                <div className="flex flex-col items-center gap-2 relative">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                        <Workflow className="text-emerald-400 w-8 h-8" />
                    </div>
                    <span className="text-[10px] text-emerald-400/60 uppercase tracking-wider font-bold">Orchestrator</span>

                    {/* Connection Lines HTML/CSS only for simplicity */}
                    <div className="absolute top-1/2 -left-[60px] md:-left-[80px] w-[50px] md:w-[70px] h-[2px] bg-gradient-to-r from-blue-500/50 to-emerald-500/50 -translate-y-1/2 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-white/50 -translate-x-full animate-[shimmer_2s_infinite]" />
                    </div>
                    <div className="absolute top-1/2 -right-[60px] md:-right-[80px] w-[50px] md:w-[70px] h-[2px] bg-gradient-to-r from-emerald-500/50 to-purple-500/50 -translate-y-1/2 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-white/50 -translate-x-full animate-[shimmer_2s_infinite_1s]" />
                    </div>
                </div>

                {/* Node 3: Output */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Network className="text-purple-400" />
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-500/20 blur-xl rounded-full" />
                    </div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">CRM Sync</span>
                </div>
            </div>
        </div>
    );
};

const VisionVisual = () => {
    return (
        <div className="relative w-full h-[260px] md:h-[300px] bg-[#050910] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Simulated Camera Feed Background - Just noise/darkness for now */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-screen" />
            <div className="absolute inset-0 bg-[#000]/60" />

            {/* HUD Overlay */}
            <div className="absolute inset-8 border border-white/20 rounded-lg">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500" />

                {/* Center Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/10 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                </div>
            </div>

            {/* Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent animate-scan pointer-events-none" />

            {/* Analysis Data */}
            <div className="absolute top-10 right-10 flex flex-col gap-2 font-mono text-[10px] text-emerald-400">
                <div className="flex justify-between w-32 bg-black/50 p-1 border border-emerald-500/20">
                    <span>CONFIDENCE</span>
                    <span>99.8%</span>
                </div>
                <div className="flex justify-between w-32 bg-black/50 p-1 border border-emerald-500/20">
                    <span>LATENCY</span>
                    <span>12ms</span>
                </div>
                <div className="flex justify-between w-32 bg-black/50 p-1 border border-emerald-500/20">
                    <span>OBJECTS</span>
                    <span>14</span>
                </div>
            </div>

            {/* Detected Object Box */}
            <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-emerald-500/50 bg-emerald-500/5 flex items-end">
                <span className="bg-emerald-500 text-black text-[9px] font-bold px-1">QC: PASSED</span>
            </div>
        </div>
    );
};

const Solutions = () => {
    const { language } = useLanguage();
    const t = translations[language].engineering.solutions;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let streams: any[] = [];

        const init = () => {
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
            // Slightly fewer streams than hero to keep it subtle
            for (let i = 0; i < 30; i++) {
                streams.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    speed: 0.3 + Math.random() * 1.5,
                    length: 100 + Math.random() * 250,
                    opacity: 0.05 + Math.random() * 0.2,
                    width: 0.5 + Math.random() * 1.2,
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

    // Define features with their specific visuals
    const features = [
        {
            key: 'appliedAI',
            icon: Brain,
            visual: CodeVisual,
            data: t.appliedAI
        },
        {
            key: 'processOrchestration',
            icon: Workflow,
            visual: ProcessVisual,
            data: t.processOrchestration
        },
        {
            key: 'computerVision',
            icon: ScanEye,
            visual: VisionVisual,
            data: t.computerVision
        }
    ];

    return (
        <section id="solutions" className="relative z-10 w-full px-[5%] md:px-[10%] py-32 bg-[#080d1f]/90 text-luxury-text font-sans overflow-hidden">
            {/* Background Animation Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 z-[0] opacity-30 pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex flex-col items-start mb-32 text-left max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                    {t.header.title}
                </h2>
                <div className="w-20 h-1 bg-emerald-500/80 rounded-none mb-8" />
                <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
                    {t.header.subtitle}
                </p>
            </div>

            {/* Features Z-Pattern */}
            <div className="relative z-10 flex flex-col gap-12">
                {features.map((feature, index) => {
                    const VisualComponent = feature.visual;
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.key}
                            className="group relative bg-[#0f172a]/40 backdrop-blur-md border border-white/5 hover:border-emerald-500/20 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.1)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                                {/* Text Content */}
                                <div className="flex-1 space-y-8">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                            {feature.data.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        {feature.data.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                        {feature.data.features.map((item, i) => {
                                            const [title, ...rest] = item.split(':');
                                            const description = rest.join(':');

                                            return (
                                                <div key={i} className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-emerald-400/80 font-medium">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                        {title}
                                                    </div>
                                                    {description && (
                                                        <span className="text-sm text-slate-500 pl-3.5">
                                                            {description}
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Visual Content */}
                                <div className="flex-1 w-full lg:max-w-xl">
                                    <VisualComponent />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes scan {
                    0% { top: -100%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 200%; opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default Solutions;
