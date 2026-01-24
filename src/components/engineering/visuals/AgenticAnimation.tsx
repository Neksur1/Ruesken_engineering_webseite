import React, { useState, useEffect } from 'react';
import { FileText, Cpu, CheckCircle2, Zap, Clock, UserX, MoreHorizontal, ArrowRight } from 'lucide-react';

const AgenticAnimation = () => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Sequenzielle Animation
        const timer1 = setTimeout(() => setStage(1), 500);
        const timer2 = setTimeout(() => setStage(2), 1200);
        const timer3 = setTimeout(() => setStage(3), 2200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center font-sans text-slate-900">
            {/* Die Haupt-Karte */}
            <div className="relative z-10 w-full h-full flex flex-col">
                <div className="relative bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full w-full">
                    {/* Header */}
                    <div className="px-4 py-3 md:px-6 md:py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                            </div>
                            <div className="h-4 w-px bg-slate-200 mx-2"></div>
                            <span className="text-xs md:text-sm font-semibold text-slate-600 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500"></div>
                                Auto-Processing Engine
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="text-[10px] md:text-xs font-medium px-2 py-0.5 bg-slate-50 rounded border border-slate-100">v2.4.0</span>
                            <MoreHorizontal className="w-4 h-4" />
                        </div>
                    </div>


                    {/* Main Content Area */}
                    <div className="relative px-2 md:px-8 py-8 md:py-12 bg-white flex-1 flex flex-col justify-center">

                        {/* Verbindungslinie (SVG) - Perfekt zentriert auf 2/3 der Breite */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 pointer-events-none z-0 w-3/4 md:w-2/3">
                            <svg width="100%" height="100%" viewBox="0 0 600 100" preserveAspectRatio="none" className="overflow-visible">
                                <defs>
                                    <linearGradient id="flowGradient" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* Basis Pfad (Grau) */}
                                <path d="M0,50 L200,50 C230,50 230,20 260,20 L340,20 C370,20 370,50 400,50 L600,50"
                                    stroke="#e2e8f0" strokeWidth="2" fill="none" />

                                <path d="M200,50 C230,50 230,80 260,80 L340,80 C370,80 370,50 400,50"
                                    stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="4 4" />

                                {/* Solide grüne Linie */}
                                <path d="M0,50 L200,50 C230,50 230,20 260,20 L340,20 C370,20 370,50 400,50 L600,50"
                                    stroke="#10b981" strokeWidth="2" fill="none"
                                    strokeDasharray="650"
                                    strokeDashoffset={stage >= 2 ? (stage >= 3 ? "0" : "300") : "650"}
                                    className="transition-all duration-[1500ms] ease-in-out"
                                    style={{ opacity: stage >= 1 ? 1 : 0 }}
                                />

                                {/* Flow Effekt */}
                                {stage >= 2 && (
                                    <path d="M0,50 L200,50 C230,50 230,20 260,20 L340,20 C370,20 370,50 400,50 L600,50"
                                        stroke="url(#flowGradient)"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeDasharray="150 800"
                                        className="animate-[softFlow_2.5s_linear_infinite]"
                                        style={{ filter: 'blur(2px)' }}
                                    />
                                )}
                            </svg>
                        </div>

                        {/* Grid Layout für perfekte Zentrierung: 3 gleich große Spalten - nach unten geschoben für Zentrierung auf der Linie */}
                        <div className="relative z-10 grid grid-cols-3 w-full gap-2 md:gap-4 translate-y-6">

                            {/* COL 1: INPUT - Zentriert */}
                            <div className="flex flex-col items-center justify-center">
                                <div className={`flex flex-col items-center gap-2 md:gap-4 transition-all duration-500 ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center relative z-10">
                                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                                        <FileText className="w-5 h-5 md:w-7 md:h-7 text-slate-500" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wide">Input</div>
                                        <div className="text-xs md:text-sm font-medium text-slate-900 mt-0.5">Invoice.pdf</div>
                                    </div>
                                </div>
                            </div>

                            {/* COL 2: AGENT - Zentriert */}
                            <div className="flex flex-col items-center justify-center -translate-y-6">
                                <div className={`flex flex-col items-center gap-2 md:gap-4 transition-all duration-500 delay-200 ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    <div className="relative">
                                        <div className={`absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 md:px-3 md:py-1 bg-slate-900 text-white text-[9px] md:text-[10px] font-medium rounded-full shadow-lg transition-all duration-300 transform ${stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                            Processing...
                                        </div>

                                        {stage === 2 && (
                                            <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping opacity-75"></div>
                                        )}

                                        <div className={`w-14 h-14 md:w-20 md:h-20 bg-white rounded-full shadow-[0_8px_16px_-4px_rgba(16,185,129,0.15)] border-2 flex items-center justify-center transition-colors duration-500 relative z-10 ${stage >= 2 ? 'border-emerald-500' : 'border-slate-100'}`}>
                                            <Cpu className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-500 ${stage >= 2 ? 'text-emerald-600' : 'text-slate-300'}`} />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-wide">AI Agent</div>
                                        <div className="text-xs md:text-sm font-medium text-slate-900 mt-0.5 flex items-center gap-1 justify-center">
                                            Auto-Approve <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* COL 3: RESULT - Zentriert */}
                            <div className="flex flex-col items-center justify-center">
                                <div className={`flex flex-col items-center gap-2 md:gap-4 transition-all duration-500 delay-500 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    <div className="relative group">
                                        <div className={`w-24 md:w-32 lg:w-44 h-12 md:h-16 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center gap-2 md:gap-3 shadow-sm relative overflow-hidden transition-all duration-300 ${stage >= 3 ? 'shadow-md ring-2 ring-emerald-500/20' : ''}`}>
                                            {/* Shine-Effekt */}
                                            <div className={`absolute inset-0 bg-white/40 -skew-x-12 translate-x-[-150%] ${stage >= 3 ? 'animate-[shine_1s_ease-in-out_forwards]' : ''}`}></div>

                                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm relative z-10 shrink-0">
                                                <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-white" />
                                            </div>
                                            <div className="flex flex-col relative z-10">
                                                <span className="text-[8px] md:text-[10px] font-bold text-emerald-600 uppercase tracking-wider leading-tight">Status</span>
                                                <span className="text-xs md:text-sm font-bold text-emerald-900 leading-tight">Processed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center opacity-0 hidden md:block">
                                        <div className="text-xs">Placeholder</div>
                                        <div className="text-sm">Placeholder</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Stats */}
                    <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100 bg-slate-50/50">
                        <div className="p-3 md:p-4 flex items-center justify-center gap-2 md:gap-3">
                            <div className="p-1.5 md:p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                            </div>
                            <div>
                                <div className="text-[8px] md:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Time Saved</div>
                                <div className="text-xs md:text-sm font-bold text-slate-700">25m 00s</div>
                            </div>
                        </div>
                        <div className="p-3 md:p-4 flex items-center justify-center gap-2 md:gap-3">
                            <div className="p-1.5 md:p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <UserX className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                            </div>
                            <div>
                                <div className="text-[8px] md:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Manual Work</div>
                                <div className="text-xs md:text-sm font-bold text-slate-700">0%</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AgenticAnimation;
