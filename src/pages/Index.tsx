import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Portrait from "@/components/Portrait";
import NavigationCard from "@/components/NavigationCard";
import ConnectDialog from "@/components/ConnectDialog";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import Footer from "@/components/Footer";

const Index = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  // Mouse glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      const bg = document.querySelector(".mouse-bg") as HTMLElement;
      if (bg) {
        bg.style.background = `
          radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.12) 0%, transparent 45%),
          radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
        `;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-luxury-base text-luxury-text min-h-screen flex flex-col items-center selection:bg-white/10 selection:text-white overflow-x-hidden relative">
      {/* Background Layers */}
      <div className="mouse-bg"></div>
      <div className="bg-grid-structure"></div>
      <div className="bg-grain"></div>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="absolute top-6 right-6 z-50 text-[10px] md:text-xs tracking-[0.2em] font-medium text-luxury-muted hover:text-white transition-colors uppercase backdrop-blur-sm"
      >
        {language === 'de' ? 'EN' : 'DE'}
      </button>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 flex-grow flex flex-col justify-center items-center">
        {/* Hero Section */}
        <section className="text-center flex flex-col items-center mb-16 md:mb-20 animate-fade-in">
          {/* Profile Image */}


          {/* Name (H1) */}
          <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.2em] uppercase text-white mb-4 leading-tight backdrop-blur-sm">
            Fabian Ruesken
          </h1>

          {/* Subline */}
          <div className="flex items-center space-x-3 text-[10px] md:text-xs font-medium tracking-[0.3em] text-luxury-muted uppercase mb-8 backdrop-blur-sm">
            <span>{t.hero.subline.founder}</span>
            <span className="w-1 h-1 bg-luxury-muted rounded-full opacity-50"></span>
            <span>{t.hero.subline.expert}</span>
            <span className="w-1 h-1 bg-luxury-muted rounded-full opacity-50"></span>
            <span>{t.hero.subline.engineer}</span>
          </div>

          {/* Intro */}
          <p className="max-w-xl text-center text-sm md:text-base font-light text-gray-400 leading-loose tracking-wide opacity-90 backdrop-blur-sm">
            {t.hero.intro}
          </p>
        </section>

        {/* Navigation (Grid Layout) */}
        <nav className="w-full animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
            <NavigationCard
              title={t.nav.engineering.title}
              subtitle={t.nav.engineering.subtitle}
              href="#"
            />
            <NavigationCard
              title={t.nav.additive.title}
              subtitle={t.nav.additive.subtitle}
              href="#"
            />

            <NavigationCard
              title={t.nav.connect.title}
              subtitle={t.nav.connect.subtitle}
              href="#"
              showArrow={true}
              onClick={() => setIsConnectOpen(true)}
            />
          </div>
        </nav>

        <ConnectDialog open={isConnectOpen} onOpenChange={setIsConnectOpen} />
      </main>

      {/* Footer */}
      <Footer className="pb-8 animate-slide-up" />
    </div>
  );
};

export default Index;
