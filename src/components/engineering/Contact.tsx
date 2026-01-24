import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <section id="contact" className="relative w-full min-h-screen flex flex-col justify-center bg-[#030712] py-16 md:py-20 px-[10%] z-50 overflow-hidden">
            {/* Solid Background to hide global grid */}
            <div className="absolute inset-0 bg-[#030712] z-0"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* LEFT COLUMN: Info */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8">
                            KONTAKT
                        </h2>

                        <div className="space-y-6 text-[#B0B8C4]">
                            <div className="space-y-0.5">
                                <p className="text-xl font-bold text-white">Rüsken Engineering</p>
                                <p className="text-lg">Musterstraße 123</p>
                                <p className="text-lg">12345 Musterstadt</p>
                                <p className="text-lg">Germany</p>
                            </div>

                            <div className="pt-3">
                                <p className="text-lg">Fabian Rüsken</p>
                                <a href="mailto:info@ruesken-engineering.de" className="text-lg text-white hover:text-[#10B981] transition-colors">
                                    info@ruesken-engineering.de
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                {/* RIGHT COLUMN: Form */}
                <div className="w-full">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-mono uppercase tracking-widest text-[#B0B8C4]">
                                Name <span className="text-white">*</span>
                            </label>
                            <Input
                                id="name"
                                placeholder="Ihr Name"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white h-10 rounded-none text-sm"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-mono uppercase tracking-widest text-[#B0B8C4]">
                                Unternehmen
                            </label>
                            <Input
                                id="company"
                                placeholder="Ihr Unternehmen"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white h-10 rounded-none text-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-mono uppercase tracking-widest text-[#B0B8C4]">
                                E-Mail <span className="text-white">*</span>
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="ihre.email@beispiel.de"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white h-10 rounded-none text-sm"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-mono uppercase tracking-widest text-[#B0B8C4]">
                                Nachricht
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Wie können wir Ihnen helfen?"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white min-h-[120px] rounded-none resize-none text-sm"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-11 bg-white text-[#0B1120] hover:bg-[#10B981] hover:text-white font-bold uppercase tracking-widest text-sm rounded-none transition-all duration-300 mt-3"
                        >
                            Nachricht senden
                        </Button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
