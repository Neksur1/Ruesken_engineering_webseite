import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import { Linkedin, Mail, Check, Copy } from "lucide-react";
import { useState } from "react";

interface ConnectDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ConnectDialog = ({ open, onOpenChange }: ConnectDialogProps) => {
    const { language } = useLanguage();
    const t = translations[language];
    const [copied, setCopied] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText("kontakt@fabian-ruesken.de");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-luxury-surface/95 backdrop-blur-xl border-luxury-muted/20 text-luxury-text sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-light tracking-wider text-center uppercase mb-6">
                        {language === 'en' ? 'Connect' : 'Kontakt'}
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    {/* LinkedIn Button */}
                    <a
                        href="https://www.linkedin.com/in/fabian-ruesken/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 rounded-lg border border-luxury-muted/20 bg-luxury-base/50 hover:bg-luxury-muted/10 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-full bg-[#0077b5]/10 text-[#0077b5] group-hover:bg-[#0077b5]/20 transition-colors">
                                <Linkedin size={20} />
                            </div>
                            <span className="text-sm tracking-wide font-light">LinkedIn</span>
                        </div>
                        <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <span className="text-xs text-luxury-muted uppercase tracking-widest">Open</span>
                        </div>
                    </a>

                    {/* Email Button */}
                    <button
                        onClick={handleEmailClick}
                        className="group w-full flex items-center justify-between p-4 rounded-lg border border-luxury-muted/20 bg-luxury-base/50 hover:bg-luxury-muted/10 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-full bg-white/5 text-gray-300 group-hover:bg-white/10 transition-colors">
                                <Mail size={20} />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-sm tracking-wide font-light">Email</span>
                                <span className="text-xs text-luxury-muted hidden sm:block">kontakt@fabian-ruesken.de</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-luxury-muted uppercase tracking-widest transition-all duration-300">
                                {copied ? (language === 'en' ? 'Copied' : 'Kopiert') : (language === 'en' ? 'Copy' : 'Kopieren')}
                            </span>
                            {copied ? (
                                <Check size={14} className="text-green-400" />
                            ) : (
                                <Copy size={14} className="text-luxury-muted group-hover:text-white transition-colors" />
                            )}
                        </div>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConnectDialog;
