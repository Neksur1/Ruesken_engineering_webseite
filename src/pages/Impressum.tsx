import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import Footer from "@/components/Footer";

const Impressum = () => {
    const { language } = useLanguage();
    const t = translations[language];

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

            {/* Main Content */}
            <main className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12 md:py-24 flex flex-col animate-fade-in">

                {/* Navigation */}
                <Link to="/" className="inline-block mb-12 text-[10px] tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors">
                    &larr; {language === 'de' ? 'Zurück' : 'Back'}
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <h1 className="text-3xl md:text-5xl font-extralight tracking-wide text-white leading-tight mb-4 uppercase">
                        {t.footer.imprint}
                    </h1>
                    <div className="h-px w-20 bg-white/10"></div>
                </header>

                {/* Content */}
                <section className="space-y-8 text-sm md:text-base font-light text-gray-400 leading-relaxed">
                    <p className="text-white">Angaben gemäß § 5 DDG</p>

                    <p>
                        Fabian Rüsken<br />
                        <br />
                        Hülshorst 7<br />
                        46499 Hamminkeln
                    </p>

                    <p>
                        <strong className="text-white font-medium">Vertreten durch:</strong><br />
                        Fabian Rüsken
                    </p>

                    <p>
                        <strong className="text-white font-medium">Kontakt:</strong><br />
                        Telefon: +49 157 - 86541838<br />
                        E-Mail: <a href="mailto:kontakt@fabian-ruesken.de" className="text-white hover:text-white/80 transition-colors">kontakt@fabian-ruesken.de</a>
                    </p>

                    <p>
                        <strong className="text-white font-medium">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />
                        Fabian Rüsken<br />
                        Hülshorst 7<br />
                        46499 Hamminkeln
                    </p>

                    <div>
                        <strong className="text-white font-medium block mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</strong>
                        <p>Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil und sind dazu auch nicht verpflichtet.</p>
                    </div>

                    <div>
                        <strong className="text-white font-medium block mb-2">Datenschutzerklärung</strong>
                        <p>Unter dem folgenden Link finden Sie unsere <Link to="/datenschutz" className="text-white hover:text-white/80 transition-colors underline decoration-white/10 underline-offset-4">Datenschutzerklärung</Link>.</p>
                    </div>

                    <div className="space-y-4">
                        <strong className="text-white font-medium block text-lg">Haftungsausschluss:</strong>

                        <div>
                            <strong className="text-white font-medium block mb-1">Haftung für Inhalte</strong>
                            <p>
                                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                            </p>
                        </div>

                        <div>
                            <strong className="text-white font-medium block mb-1">Haftung für Links</strong>
                            <p>
                                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                            </p>
                        </div>

                        <div>
                            <strong className="text-white font-medium block mb-1">Urheberrecht</strong>
                            <p>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                            </p>
                        </div>
                    </div>

                    <p className="text-xs opacity-50">
                        Erstell nach einer Vorlage der <a href="https://www.kanzlei-hasselbach.de/" rel="dofollow" className="hover:text-white transition-colors">Kanzlei Hasselbach</a>.
                    </p>
                </section>

                {/* Footer */}
                <Footer className="mt-24" showDivider={true} />
            </main>
        </div>
    );
};

export default Impressum;
