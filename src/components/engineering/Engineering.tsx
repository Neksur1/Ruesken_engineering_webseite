import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import EngineeringNavigation from './EngineeringNavigation';
import ValueProposition from './ValueProposition';

const Engineering = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { language, setLanguage } = useLanguage();
    const t = translations[language].engineering;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        interface Stream {
            x: number;
            y: number;
            speed: number;
            length: number;
            opacity: number;
            width: number;
        }

        let streams: Stream[] = [];

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            streams = [];
            for (let i = 0; i < 40; i++) {
                streams.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    speed: 0.5 + Math.random() * 2,
                    length: 100 + Math.random() * 300,
                    opacity: 0.1 + Math.random() * 0.4,
                    width: 0.5 + Math.random() * 1.5,
                });
            }
        };

        const animate = () => {
            if (!ctx) return;
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

            requestAnimationFrame(animate);
        };

        init();
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => init();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#030712] text-luxury-text font-sans selection:bg-white/20">

            {/* Premium Noise Overlay - Fixed for entire page */}
            <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Fixed Background Grid/Lines - Remains fixed for continuity */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Ambient Glow Spots - Fixed */}
            <div className="fixed top-1/4 -right-20 w-[600px] h-[550px] bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="fixed -bottom-20 -left-20 w-[500px] h-[500px] bg-slate-700/30 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="fixed top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* Navigation / Toolbar */}
            <EngineeringNavigation />

            {/* Main Content Scrollable Wrapper */}
            <div className="relative w-full">
                {/* Hero Section */}
                <main className="relative z-10 min-h-screen flex flex-col justify-center px-[10%] pb-32 pt-20 overflow-hidden">
                    {/* Matrix Rain Animation - Absolute to Hero Area so it scrolls */}
                    <canvas ref={canvasRef} className="absolute inset-0 z-[1] opacity-40 pointer-events-none" />

                    <div className="relative z-10 max-w-[1200px]">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-10 tracking-[-0.05em] opacity-0 animate-slide-up [animation-delay:0.4s] fill-mode-forwards">
                            {language === 'de' ? (
                                <>
                                    Vom manuellen Prozess zur{' '}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#94a3b8] via-[#f1f5f9] to-[#94a3b8] animate-gradient">
                                        autonomen Wertschöpfung.
                                    </span>
                                </>
                            ) : (
                                <>
                                    From manual process to{' '}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#94a3b8] via-[#f1f5f9] to-[#94a3b8] animate-gradient">
                                        autonomous value creation.
                                    </span>
                                </>
                            )}
                        </h1>

                        <h2 className="text-lg md:text-xl font-medium text-[#E0E0E0] max-w-[700px] mb-14 leading-relaxed opacity-0 animate-slide-up [animation-delay:0.6s] fill-mode-forwards">
                            {t.hero.subtitle}
                        </h2>

                        <div className="flex flex-col gap-2 opacity-0 animate-slide-up [animation-delay:0.8s] fill-mode-forwards">
                            <div className="flex flex-col md:flex-row gap-6">
                                <a
                                    href="#"
                                    className="px-10 py-5 bg-white text-[#030712] border border-white font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 text-center"
                                >
                                    {t.hero.cta.analyze}
                                </a>
                                <a
                                    href="#"
                                    className="px-10 py-5 bg-transparent text-white border border-white/10 backdrop-blur-md font-bold uppercase tracking-widest text-sm hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 text-center"
                                >
                                    {t.hero.cta.solutions}
                                </a>
                            </div>
                            {/* Micro-Copy */}
                            <div className="text-[10px] uppercase tracking-widest text-white/40 pl-1">
                                {t.hero.cta.microCopy}
                            </div>
                        </div>
                    </div>

                    {/* Fixed Social Proof Banner at Bottom of Hero */}
                    <div className="absolute bottom-0 left-0 w-full pb-12 opacity-0 animate-slide-up [animation-delay:1.0s] fill-mode-forwards overflow-hidden z-20">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-6 font-mono px-[10%]">
                            {t.hero.socialProof}
                        </p>

                        <div className="relative w-full overflow-hidden mask-linear-fade">
                            <div className="flex gap-16 items-center animate-infinite-scroll w-max">
                                {[...Array(2)].map((_, setIndex) => (
                                    <React.Fragment key={setIndex}>
                                        {[
                                            { name: 'Python', slug: 'python' },
                                            { name: 'OpenAI', slug: 'openai' },
                                            { name: 'Anthropic', slug: 'anthropic' },
                                            { name: 'Gemini', slug: 'googlegemini' },
                                            { name: 'Azure', slug: 'azure' },
                                            { name: 'AWS', slug: 'amazonaws' },
                                            { name: 'TensorFlow', slug: 'tensorflow' },
                                            { name: 'LangChain', slug: 'langchain' }
                                        ].map((icon) => (
                                            <div key={`${setIndex}-${icon.slug}`} className="flex items-center justify-center w-[120px]">
                                                <img
                                                    src={`https://cdn.simpleicons.org/${icon.slug}/white`}
                                                    alt={icon.name}
                                                    className="h-7 w-auto object-contain opacity-30 hover:opacity-100 transition-opacity duration-300"
                                                    title={icon.name}
                                                />
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <ValueProposition />
            </div>

            <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 5s linear infinite;
        }
        .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite;
        }
        .mask-linear-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        /* Pause animation on hover for better UX */
        .animate-infinite-scroll:hover {
            animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default Engineering;
