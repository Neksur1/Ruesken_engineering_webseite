import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Database, ScanLine, Sparkles, MoreHorizontal } from 'lucide-react';

const RagAnimation = () => {
    return (
        <div className="w-full h-full flex items-center justify-center font-sans text-slate-900">
            {/* Die Haupt-Karte - Matching Agentic Layout */}
            <div className="relative z-10 w-full h-full flex flex-col">
                <div className="relative bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full w-full">

                    {/* Header - Same Style as Agentic & Computer Vision */}
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
                                RAG Knowledge Pipeline
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="text-[10px] md:text-xs font-medium px-2 py-0.5 bg-slate-50 rounded border border-slate-100">Active</span>
                            <MoreHorizontal className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="relative px-2 md:px-8 py-10 md:py-14 bg-white flex-1 flex flex-col items-center justify-center">

                        {/* Grid Pattern im Hintergrund */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                            style={{
                                backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}
                        />

                        {/* Haupt-Animationsebene */}
                        <div className="relative z-10 w-full px-4 md:px-12 h-32 flex items-center justify-between">

                            {/* Verbindungsstrahl - Background Layer */}
                            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 px-20 md:px-24 -z-10">
                                <div className="w-full h-[1px] bg-slate-100 relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent w-1/2"
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            </div>

                            {/* ---------------- SECTION 1: DATA INGESTION (Links) ---------------- */}
                            <div className="relative flex flex-col items-center justify-center w-24">
                                {/* Label - Absolute Top */}
                                <div className="absolute -top-14 text-[8px] md:text-[10px] font-semibold text-slate-400 tracking-wider uppercase bg-slate-50 px-2 py-0.5 rounded shadow-sm border border-slate-100 whitespace-nowrap">
                                    Source
                                </div>

                                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm z-10">
                                    {/* Statischer Stapel */}
                                    <FileText className="absolute text-slate-200 w-8 h-8 md:w-10 md:h-10 -translate-y-0.5 translate-x-0.5" strokeWidth={1.5} />
                                    <FileText className="relative text-slate-400 w-8 h-8 md:w-10 md:h-10 z-10" strokeWidth={1.5} />

                                    {/* Das fliegende Dokument (Loop) */}
                                    <motion.div
                                        className="absolute z-20 text-slate-600 bg-white p-2 rounded-xl border border-slate-200 shadow-md"
                                        initial={{ opacity: 0, x: 0, scale: 0.9 }}
                                        animate={{
                                            opacity: [0, 1, 1, 0],
                                            x: [0, 40, 100],
                                            scale: [0.9, 1, 0.8, 0.5],
                                            rotate: [0, 0, 5, 10]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.8, 1]
                                        }}
                                    >
                                        <FileText size={20} className="text-emerald-600" />
                                    </motion.div>
                                </div>

                                {/* Status - Absolute Bottom */}
                                <div className="absolute -bottom-10 h-1 w-10 md:w-12 bg-slate-100 rounded-full overflow-hidden opacity-50">
                                    <motion.div
                                        className="h-full bg-slate-300"
                                        animate={{ width: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            </div>


                            {/* ---------------- SECTION 2: VECTORIZATION (Mitte) ---------------- */}
                            <div className="relative flex flex-col items-center justify-center w-24">
                                {/* Scanner Circle */}
                                <motion.div
                                    className="w-16 h-16 md:w-20 md:h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center z-10 relative overflow-hidden shadow-sm"
                                    animate={{
                                        borderColor: ["#e2e8f0", "#10b981", "#e2e8f0"],
                                        boxShadow: ["0 4px 12px rgba(0,0,0,0.02)", "0 0 20px rgba(16, 185, 129, 0.15)", "0 4px 12px rgba(0,0,0,0.02)"]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
                                >
                                    <div className="absolute inset-0 bg-emerald-50/30" />
                                    <ScanLine className="text-emerald-500 w-8 h-8 md:w-10 md:h-10 relative z-10" strokeWidth={1.5} />

                                    {/* Scanner Light Beam */}
                                    <motion.div
                                        className="absolute w-full h-1 bg-emerald-400/30 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                                        animate={{ top: ["10%", "90%", "10%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.div>

                                {/* Partikel Stream (Chunks) */}
                                <div className="absolute left-1/2 top-1/2 pointer-events-none z-0">
                                    {[0, 1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute flex items-center justify-center"
                                            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                                            animate={{
                                                opacity: [0, 1, 1, 0],
                                                x: [0, 90 + (i * 12)],
                                                y: [0, (i % 2 === 0 ? -12 : 12) * Math.random()],
                                                scale: [0, 1, 0.5]
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                delay: 2.2 + (i * 0.1),
                                                ease: "easeOut"
                                            }}
                                        >
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_4px_rgba(16,185,129,0.5)]" />
                                        </motion.div>
                                    ))}
                                </div>

                                <span className="absolute -bottom-10 text-[8px] md:text-[9px] font-semibold text-emerald-600/60 tracking-wider animate-pulse whitespace-nowrap">
                                    PROCESSING
                                </span>
                            </div>


                            {/* ---------------- SECTION 3: KNOWLEDGE BASE (Rechts) ---------------- */}
                            <div className="relative flex flex-col items-center justify-center w-24">
                                {/* Label - Absolute Top */}
                                <div className="absolute -top-14 text-[8px] md:text-[10px] font-semibold text-slate-400 tracking-wider uppercase bg-slate-50 px-2 py-0.5 rounded shadow-sm border border-slate-100 whitespace-nowrap">
                                    Knowledge
                                </div>

                                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm z-10">

                                    {/* Database Icon */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            color: ["#94a3af", "#10b981", "#94a3af"]
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 3.2,
                                            repeat: Infinity,
                                            repeatDelay: 2.6
                                        }}
                                    >
                                        <Database className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                                    </motion.div>

                                    {/* Success Ring Animation */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl border-2 border-emerald-500/30"
                                        initial={{ opacity: 0, scale: 1 }}
                                        animate={{ opacity: [0, 1, 0], scale: [1, 1.15] }}
                                        transition={{ duration: 0.8, delay: 3.2, repeat: Infinity, repeatDelay: 2.2 }}
                                    />

                                    {/* "Insight" Tooltip/Badge */}
                                    <motion.div
                                        className="absolute -top-12 -right-10 md:-top-14 md:-right-12 bg-white border border-emerald-100 px-2 py-2 rounded-xl flex items-center gap-2 shadow-md whitespace-nowrap z-20"
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{
                                            opacity: [0, 1, 1, 0],
                                            y: [10, -3, -3, -8],
                                            scale: [0.9, 1, 1, 0.9]
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: 3.3,
                                            repeat: Infinity,
                                            repeatDelay: 1
                                        }}
                                    >
                                        <div className="p-1 bg-emerald-100 rounded-lg">
                                            <Sparkles size={10} className="text-emerald-600" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-bold text-slate-700 leading-none">Context Found</span>
                                            <span className="text-[8px] text-emerald-600 font-medium leading-none mt-0.5">98% Accuracy</span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Status Indicator - Absolute Bottom */}
                                <div className="absolute -bottom-10 flex items-center gap-1.5 whitespace-nowrap">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] animate-pulse" />
                                    <span className="text-[8px] md:text-[9px] text-slate-400 font-medium">Active</span>
                                </div>
                            </div>

                        </div>

                        {/* Footer Caption */}
                        <div className="absolute bottom-3 text-center w-full">
                            <p className="text-slate-400 text-[8px] md:text-[9px] font-medium tracking-wide">
                                AI Knowledge Retrieval System
                            </p>
                        </div>
                    </div>
                    {/* Footer Stats - Matching other animations */}
                    <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100 bg-slate-50/50">
                        <div className="p-3 md:p-4 flex items-center justify-center gap-2 md:gap-3">
                            <div className="p-1.5 md:p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <FileText className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                            </div>
                            <div>
                                <div className="text-[8px] md:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Docs Indexed</div>
                                <div className="text-xs md:text-sm font-bold text-slate-700">2,847</div>
                            </div>
                        </div>
                        <div className="p-3 md:p-4 flex items-center justify-center gap-2 md:gap-3">
                            <div className="p-1.5 md:p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Database className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
                            </div>
                            <div>
                                <div className="text-[8px] md:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Retrieval</div>
                                <div className="text-xs md:text-sm font-bold text-slate-700">&lt;200ms</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RagAnimation;
