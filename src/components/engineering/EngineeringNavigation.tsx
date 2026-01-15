import React, { useState, useEffect } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import { Menu, X } from 'lucide-react';

const EngineeringNavigation = () => {
    const { language, setLanguage } = useLanguage();
    const t = translations[language].engineering.navigation;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll for background blur effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: t.solutions, href: '#solutions' },
        { label: t.projects, href: '#projects' },
        { label: t.academy, href: '#', badge: t.soon },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans
            ${scrolled ? 'bg-[#030712]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-gradient-to-b from-[#030712]/80 to-transparent py-6 md:py-10'}`}
        >
            <div className="w-full px-[5%] md:px-[10%] flex items-end justify-between">

                {/* Logo - Left Aligned */}
                <div className="flex items-center gap-4 group cursor-pointer pb-1" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="w-6 h-6 border-2 border-white/90 relative transition-transform duration-300 group-hover:rotate-45">
                        <div className="absolute -top-[4px] -right-[4px] w-1.5 h-1.5 bg-white/90" />
                    </div>
                    <span className="font-mono font-bold text-base tracking-tight text-white group-hover:text-white transition-colors">
                        RUESKEN ENGINEERING
                    </span>
                </div>

                {/* Right Side Container for all Nav Items */}
                <div className="hidden md:flex items-center gap-12">

                    {/* Main Navigation Links */}
                    <nav className="flex items-center gap-10">
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                className={`text-base font-medium tracking-wide transition-colors duration-300 flex items-center gap-2 relative group
                                    ${item.badge ? 'cursor-default text-white/40' : 'text-white/80 hover:text-white'}
                                `}
                                onClick={(e) => {
                                    if (item.badge) e.preventDefault();
                                }}
                            >
                                {item.label}
                                {item.badge && (
                                    <span className="text-[10px] text-white/50 font-mono tracking-wider opacity-80">
                                        // {item.badge.toUpperCase()}
                                    </span>
                                )}
                                {!item.badge && (
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full opacity-50" />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Separator */}
                    <div className="h-6 w-[1px] bg-white/10" />

                    {/* Contact Link */}
                    <a
                        href="#contact"
                        className="text-base font-medium text-white/80 hover:text-white transition-colors tracking-wide"
                    >
                        {t.contact}
                    </a>

                    {/* Minimalist Language Switch */}
                    <div className="flex items-center gap-3 text-sm font-mono ml-4">
                        <button
                            onClick={() => setLanguage('de')}
                            className={`transition-colors duration-300 ${language === 'de' ? 'text-white font-bold' : 'text-white/40 hover:text-white/80'}`}
                        >
                            DE
                        </button>
                        <span className="text-white/10 text-xs">/</span>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`transition-colors duration-300 ${language === 'en' ? 'text-white font-bold' : 'text-white/40 hover:text-white/80'}`}
                        >
                            EN
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Toggle - Right Aligned */}
                <button
                    className="md:hidden text-white hover:text-white/80 pb-1"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#030712] border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-2">
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className={`text-lg font-medium flex items-center gap-3
                                ${item.badge ? 'text-white/40' : 'text-white/80'}
                            `}
                            onClick={() => {
                                if (!item.badge) setMobileMenuOpen(false);
                            }}
                        >
                            {item.label}
                            {item.badge && (
                                <span className="text-[10px] text-white/40 font-mono">
                                    // {item.badge}
                                </span>
                            )}
                        </a>
                    ))}
                    <div className="h-[1px] w-full bg-white/10 my-2" />
                    <a href="#contact" className="text-lg font-medium text-white/80" onClick={() => setMobileMenuOpen(false)}>
                        {t.contact}
                    </a>
                    <div className="flex gap-4 pt-2">
                        <button onClick={() => setLanguage('de')} className={language === 'de' ? 'text-white font-bold' : 'text-white/40'}>DE</button>
                        <button onClick={() => setLanguage('en')} className={language === 'en' ? 'text-white font-bold' : 'text-white/40'}>EN</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default EngineeringNavigation;
