import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

interface FooterProps {
    className?: string;
    showDivider?: boolean;
}

const Footer = ({ className = "", showDivider = false }: FooterProps) => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <footer className={`text-center flex flex-col items-center gap-3 w-full ${className} ${showDivider ? "pt-12 border-t border-white/5" : ""}`}>
            <div className="flex gap-6 items-center">
                <Link
                    to="/"
                    className="text-[9px] text-white/10 tracking-widest uppercase hover:text-white/40 transition-colors backdrop-blur-sm"
                >
                    Home
                </Link>
                <Link
                    to="/blog"
                    className="text-[9px] text-white/10 tracking-widest uppercase hover:text-white/40 transition-colors backdrop-blur-sm"
                >
                    {t.footer.blog}
                </Link>
                <Link
                    to="/impressum"
                    className="text-[9px] text-white/10 tracking-widest uppercase hover:text-white/40 transition-colors backdrop-blur-sm"
                >
                    {t.footer.imprint}
                </Link>
                <a
                    href="#"
                    className="text-[9px] text-white/10 tracking-widest uppercase hover:text-white/40 transition-colors backdrop-blur-sm"
                >
                    {t.footer.privacy}
                </a>
                <span className="text-[9px] text-white/10 tracking-widest uppercase cursor-default backdrop-blur-sm">
                    2025
                </span>
            </div>
        </footer>
    );
};

export default Footer;
