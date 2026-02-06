import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import EngineeringNavigation from '../components/engineering/EngineeringNavigation';
import Footer from '../components/engineering/Footer';
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, Globe, UserCheck, Users } from 'lucide-react';

const Academy = () => {
    const { language } = useLanguage();

    const courses = [
        {
            title: language === 'de' ? "Prompt Engineering" : "Prompt Engineering",
            description: language === 'de'
                ? "Lernen Sie die Kunst der präzisen Kommunikation mit KI-Modellen. Maximieren Sie Output-Qualität und Effizienz durch strukturierte Prompting-Techniken."
                : "Master the art of precise communication with AI models. Maximize output quality and efficiency through structured prompting techniques.",
            icon: <Code className="w-6 h-6" />,
            status: "Coming Soon"
        },
        {
            title: language === 'de' ? "Agentic AI & Automation" : "Agentic AI & Automation",
            description: language === 'de'
                ? "Bauen Sie autonome Agenten, die komplexe Aufgabenketten selbstständig lösen. Von der Konzeption bis zur Implementierung robuster Multi-Agent-Systeme."
                : "Build autonomous agents that solve complex task chains independently. From conception to implementation of robust multi-agent systems.",
            icon: <Brain className="w-6 h-6" />,
            status: "Coming Soon"
        },
        {
            title: language === 'de' ? "KI-Experte im Unternehmen" : "Corporate AI Expert",
            description: language === 'de'
                ? "Umfassende Ausbildung für interne KI-Verantwortliche. Strategie, Tool-Auswahl, Datenschutz und Change Management für die KI-Transformation."
                : "Comprehensive training for internal AI leads. Strategy, tool selection, data privacy, and change management for AI transformation.",
            icon: <UserCheck className="w-6 h-6" />,
            status: "Coming Soon"
        },
        {
            title: language === 'de' ? "Center of Excellence (CoE) Aufbau" : "Center of Excellence (CoE) Setup",
            description: language === 'de'
                ? "Strukturierter Aufbau eines internen KI-Kompetenzzentrums. Skalierung von KI-Wissen und Governance im gesamten Unternehmen."
                : "Structured setup of an internal AI Competence Center. Scaling AI knowledge and governance throughout the entire organization.",
            icon: <Globe className="w-6 h-6" />,
            status: "Coming Soon"
        }
    ];

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#030712] text-luxury-text font-sans selection:bg-white/20">
            {/* Premium Noise Overlay */}
            <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Ambient Glows */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[120px] pointer-events-none" />


            <EngineeringNavigation forceDark={true} />

            <main className="relative z-10 pt-32 pb-20 px-[5%] md:px-[10%] min-h-screen flex flex-col items-center">

                {/* Header Section */}
                <div className="max-w-4xl w-full text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            Ruesken <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400">Academy</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                            {language === 'de'
                                ? "Die nächste Generation der KI-Ausbildung. Praxisnahes Wissen für Ingenieure, Führungskräfte und Unternehmen."
                                : "The next generation of AI training. Practical knowledge for engineers, leaders, and enterprises."}
                        </p>
                    </motion.div>
                </div>

                {/* Coming Soon Teaser Grid */}
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
                        >
                            <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                    {course.status}
                                </span>
                            </div>

                            <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit text-indigo-300 group-hover:text-indigo-200 transition-colors">
                                {course.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-200 transition-colors">
                                {course.title}
                            </h3>

                            <p className="text-white/50 leading-relaxed mb-6">
                                {course.description}
                            </p>

                            <div className="flex items-center text-sm font-bold text-white/40 group-hover:text-white transition-colors">
                                {language === 'de' ? "Mehr erfahren" : "Learn more"}
                                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter / Notification Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-32 w-full max-w-xl text-center"
                >
                    <h3 className="text-2xl font-bold mb-4">
                        {language === 'de' ? "Bleiben Sie informiert" : "Stay Informed"}
                    </h3>
                    <p className="text-white/50 mb-8">
                        {language === 'de'
                            ? "Melden Sie sich an, um benachrichtigt zu werden, wenn die Kurse starten."
                            : "Sign up to be notified when courses launch."}
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder={language === 'de' ? "Ihre E-Mail Adresse" : "Your email address"}
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                        />
                        <button className="px-8 py-3 bg-white text-[#0B1120] font-bold rounded-lg hover:bg-indigo-50 transition-colors">
                            {language === 'de' ? "Benachrichtigen" : "Notify Me"}
                        </button>
                    </form>
                </motion.div>

            </main>

            <Footer />
        </div>
    );
};

export default Academy;
