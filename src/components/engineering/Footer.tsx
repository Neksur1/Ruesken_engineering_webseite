import React from 'react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#030712] py-12 px-[10%] z-50 border-t border-white/5">
            {/* Solid Background to hide global grid */}
            <div className="absolute inset-0 bg-[#030712] z-0"></div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Copyright */}
                <div className="text-[#B0B8C4] text-sm text-center md:text-left">
                    &copy; 2026 Rüsken Engineering. All rights reserved.
                </div>

                {/* Legal Links */}
                <div className="flex gap-8 text-[#B0B8C4] text-sm font-medium">
                    <a href="/impressum" className="hover:text-white transition-colors">
                        Impressum
                    </a>
                    <a href="/datenschutz" className="hover:text-white transition-colors">
                        Datenschutz
                    </a>
                    <a href="/agb" className="hover:text-white transition-colors">
                        AGB
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
