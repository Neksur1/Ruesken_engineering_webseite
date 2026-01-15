import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <section className="relative w-full bg-[#030712] py-24 md:py-32 px-[10%] z-50 overflow-hidden">
            {/* Solid Background to hide global grid */}
            <div className="absolute inset-0 bg-[#030712] z-0"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* LEFT COLUMN: Info */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-12">
                            KONTAKT
                        </h2>

                        <div className="space-y-8 text-[#B0B8C4]">
                            <div className="space-y-1">
                                <p className="text-xl font-bold text-white">Rüsken Engineering</p>
                                <p className="text-lg">Musterstraße 123</p>
                                <p className="text-lg">12345 Musterstadt</p>
                                <p className="text-lg">Germany</p>
                            </div>

                            <div className="pt-4">
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
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white h-12 rounded-none"
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
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white h-12 rounded-none"
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
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white h-12 rounded-none"
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
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white min-h-[150px] rounded-none resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-14 bg-white text-[#030712] hover:bg-[#10B981] hover:text-white font-bold uppercase tracking-widest text-sm rounded-none transition-all duration-300 mt-4"
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
