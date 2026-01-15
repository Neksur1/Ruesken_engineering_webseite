export const translations = {
    de: {
        footer: {
            blog: "Blog",
            imprint: "Impressum",
            privacy: "Datenschutz",
        },
        blog: {
            back: "Zurück zur Übersicht",
            readTime: "Lesezeit",
            min: "Min.",
            comingSoon: "Demnächst verfügbar",
            noPosts: "Keine Beiträge gefunden.",
            publishedOn: "Veröffentlicht am",
            viewAll: "Alle Artikel ansehen",
            backToInsights: "Zurück zu Insights",
        },
        engineering: {
            navigation: {
                solutions: "Lösungen",
                projects: "Projekte",
                academy: "Academy",
                contact: "Kontakt",
                soon: "Soon"
            },
            hero: {
                title: "Vom manuellen Prozess zur autonomen Wertschöpfung.",
                subtitle: "Wir ersetzen Ineffizienz durch intelligente Systeme. Ruesken Engineering entwickelt maßgeschneiderte KI-Automatisierungen für den deutschen Mittelstand – sicher, skalierbar und nahtlos integriert.",
                cta: {
                    analyze: "Erstgespräch buchen",
                    solutions: "Unsere Lösungen ansehen →",
                    microCopy: "Kostenlos & unverbindlich"
                },
                socialProof: "Tech Stack:"
            },
            valueProposition: {
                title: "Diagnose: Wo wertvolle Marge verloren geht.",
                cards: [
                    {
                        title: "Hohe Fehlerquote",
                        description: "Wo Menschen unter Zeitdruck Daten kopieren, entstehen <strong>Flüchtigkeitsfehler</strong>.",
                        metric: {
                            label: "Fehlerquote",
                            manual: "Manuell: ~4-8%",
                            ai: "AI-System: 0%"
                        }
                    },
                    {
                        title: "Fachkräftemangel",
                        description: "Sie müssen Aufträge ablehnen, weil <strong>qualifiziertes Personal</strong> fehlt.",
                        metric: {
                            label: "Skalierbarkeit",
                            manual: "Begrenzt durch Personal",
                            ai: "Unbegrenzt skalierbar"
                        }
                    },
                    {
                        title: "Langsame Reaktionszeiten",
                        description: "Manuelle Prozesse machen Sie unbeweglich. Der <strong>Wettbewerb</strong> ist schneller.",
                        metric: {
                            label: "Durchlaufzeit",
                            manual: "Manuell: 48h",
                            ai: "AI-System: < 2min"
                        }
                    }
                ]
            },
            solutions: {
                header: {
                    title: "Engineering-Lösungen nach Maß",
                    subtitle: "Keine Standard-Wrapper. Wir entwickeln tief integrierte Systeme, die Ihre spezifischen Prozesse verstehen und automatisieren."
                },
                appliedAI: {
                    badge: "SECURE LOCAL INTELLIGENCE",
                    title: "RAG & Agentic AI: Ihr Firmenwissen, operativ automatisiert.",
                    description: "Standard-LLMs sind für Unternehmen nutzlos, solange sie Ihre Daten nicht kennen. Wir bauen Retrieval-Augmented Generation (RAG) Systeme, die Ihr internes Expertenwissen (PDFs, Datenbanken, Wikis) sicher indexieren. Unsere Agenten \"raten\" nicht – sie suchen Fakten, zitieren Quellen und führen komplexe Aktionen autonom aus.",
                    features: [
                        "Autonome Operations: Agenten, die E-Mails nicht nur schreiben, sondern Vorgänge im ERP buchen.",
                        "Halluzinations-Schutz: Antworten basieren strikt auf Ihrer internen Wissensdatenbank.",
                        "Datensouveränität: Ihr Modell läuft in Ihrer Infrastruktur (Private Cloud / On-Premise)."
                    ]
                },
                processOrchestration: {
                    badge: "END-TO-END AUTOMATION",
                    title: "Deep Integration: Schluss mit manuellem „Copy & Paste“.",
                    description: "Ihre Mitarbeiter sind keine Schnittstellen. Wir verbinden Ihre isolierten Software-Inseln (ERP, CRM, Legacy-Systeme) zu einem synchronen Ökosystem. Statt fehleranfälliger Handarbeit entwickeln wir Event-basierte Pipelines, die Daten in Echtzeit validieren und übertragen – 24/7, ohne Pausen.",
                    features: [
                        "API-First Entwicklung: Direkte Datenbank-Transaktionen statt simulierter Mausklicks.",
                        "Zero-Error-Logic: Automatische Validierung verhindert, dass falsche Daten ins System gelangen.",
                        "System-Integration: Nahtlose Anbindung moderner Software-Stacks an Ihre bestehende IT-Infrastruktur."
                    ]
                },
                computerVision: {
                    badge: "OPTICAL DATA EXTRACTION & ANALYSIS",
                    title: "Computer Vision & Multimodality: Die analoge Welt wird digital.",
                    description: "Nicht alle Unternehmensdaten liegen strukturiert in einer Datenbank. Riesige Werte schlummern in analogen Quellen: Alte Baupläne, handschriftliche Wartungsprotokolle oder analoge Zählerstände. Wir nutzen multimodale KI-Modelle, die sehen und verstehen können. Wir verwandeln Pixel in verarbeitbare Datensätze und schließen die Lücke zwischen physischer Realität und digitalem Prozess.",
                    features: [
                        "Next-Gen OCR: Auslesen komplexer, unstrukturierter Dokumente und Handschriften (weit über Standard-Texterkennung hinaus).",
                        "Analog-to-Digital Bridge: Automatisches Ablesen von analogen Messinstrumenten, Zählern oder Displays via Kamera.",
                        "Visuelle Inventur: KI erkennt Bestand, Zustand oder Anordnung von Objekten im Raum und digitalisiert den Status Quo."
                    ]
                }
            },
            projects: {
                header: {
                    title: "Ergebnisse statt Versprechen",
                    subtitle: "Echte Projekte. Echter Impact."
                },
                items: [
                    {
                        category: "Touristik Konzern",
                        title: "Large-Scale Content Automation",
                        challenge: "Manuelle Überarbeitung von +10.000 Assets. Laufzeit >1 Jahr.",
                        result: "80% Zeitersparnis",
                        details: "Pipeline mit LLM & Konsistenz-Check",
                        slug: "content-automation"
                    },
                    {
                        category: "Maschinenbau",
                        title: "Autonomous Sales Agents",
                        challenge: "Vertrieb verliert Zeit mit manueller Lead-Recherche.",
                        result: "Datenqualität ↑",
                        details: "Autonome Webrecherche & CRM Eintrag",
                        slug: "sales-agents"
                    },
                    {
                        category: "Real Estate",
                        title: "Intelligent Doc Processing",
                        challenge: "PDF-Sichtung von Exposés zu langsam für den Markt.",
                        result: "Echtzeit-Bewertung",
                        details: "Unstructured Data zu Datenbank",
                        slug: "doc-processing"
                    }
                ]
            }
        }
    },
    en: {
        footer: {
            blog: "Blog",
            imprint: "Imprint",
            privacy: "Privacy Policy",
        },
        blog: {
            back: "Back to Overview",
            readTime: "Read time",
            min: "min.",
            comingSoon: "Coming soon",
            noPosts: "No posts found.",
            publishedOn: "Published on",
            viewAll: "View all articles",
            backToInsights: "Back to Insights",
        },
        engineering: {
            navigation: {
                solutions: "Solutions",
                projects: "Projects",
                academy: "Academy",
                contact: "Contact",
                soon: "Soon"
            },
            hero: {
                title: "From manual process to autonomous value creation.",
                subtitle: "We replace inefficiency with intelligent systems. Ruesken Engineering develops custom AI automations for the German Mittelstand – secure, scalable, and seamlessly integrated.",
                cta: {
                    analyze: "Book Discovery Call",
                    solutions: "View Our Solutions →",
                    microCopy: "Free & non-binding"
                },
                socialProof: "Tech Stack:"
            },
            valueProposition: {
                title: "Diagnosis: Where valuable margin is lost.",
                cards: [
                    {
                        title: "High Error Rate",
                        description: "Where humans copy data under time pressure, <strong>careless errors</strong> occur.",
                        metric: {
                            label: "Error Rate",
                            manual: "Manual: ~4-8%",
                            ai: "AI System: 0%"
                        }
                    },
                    {
                        title: "Labor Shortage",
                        description: "You have to reject orders because <strong>qualified personnel</strong> is missing.",
                        metric: {
                            label: "Scalability",
                            manual: "Limited by Staff",
                            ai: "Unlimited & Instant"
                        }
                    },
                    {
                        title: "Slow Response Times",
                        description: "Manual processes make you immobile. The <strong>competition</strong> is faster.",
                        metric: {
                            label: "Processing Time",
                            manual: "Manual: 48h",
                            ai: "AI System: < 2min"
                        }
                    }
                ]
            },
            solutions: {
                header: {
                    title: "Tailored Engineering Solutions",
                    subtitle: "No standard wrappers. We develop deeply integrated systems that understand and automate your specific processes."
                },
                appliedAI: {
                    badge: "APPLIED AI & LLMS",
                    title: "Your Own Corporate Brain.",
                    description: "Standard ChatGPT is not enough for complex processes. We integrate Large Language Models deeply into your infrastructure – secure, GDPR-compliant, and trained on your specific company knowledge (RAG).",
                    features: [
                        "Autonomous B2B Sales Agents",
                        "Intelligent Document Analysis (Contracts, Invoices)",
                        "Internal Knowledge Management Systems"
                    ]
                },
                processOrchestration: {
                    badge: "PROCESS ORCHESTRATION",
                    title: "Seamless System Integration.",
                    description: "We eliminate manual interfaces. Where humans still copy data today, we connect your software islands (ERP, CRM, Mail) into a flowing ecosystem.",
                    features: [
                        "API-First Development & Database Connection",
                        "Zero Error Rate through Validation Logic",
                        "System Integration: Seamless connection of modern software stacks to your existing IT infrastructure."
                    ]
                },
                computerVision: {
                    badge: "COMPUTER VISION",
                    title: "Automated Visual Inspection.",
                    description: "Algorithms that can see. We automate quality controls and image analyses in real-time – more precise and faster than the human eye.",
                    features: [
                        "Real-time Object Detection & Classification",
                        "Automated Quality Control (QA)",
                        "Full GDPR Compliance for Image Data"
                    ]
                }
            },
            projects: {
                header: {
                    title: "Results, not Promises",
                    subtitle: "Real projects. Real impact."
                },
                items: [
                    {
                        category: "Tourism Group",
                        title: "Large-Scale Content Automation",
                        challenge: "Manual revision of +10,000 assets. Duration >1 year.",
                        result: "80% Time Savings",
                        details: "Pipeline with LLM & Consistency Check",
                        slug: "content-automation"
                    },
                    {
                        category: "Mechanical Engineering",
                        title: "Autonomous Sales Agents",
                        challenge: "Sales losing time with manual lead research.",
                        result: "Data Quality ↑",
                        details: "Autonomous Web Research & CRM Entry",
                        slug: "sales-agents"
                    },
                    {
                        category: "Real Estate",
                        title: "Intelligent Doc Processing",
                        challenge: "PDF screening of exposés too slow for the market.",
                        result: "Real-time Evaluation",
                        details: "Unstructured Data to Database",
                        slug: "doc-processing"
                    }
                ]
            }
        }
    },
};

export type TranslationKey = keyof typeof translations.de;
