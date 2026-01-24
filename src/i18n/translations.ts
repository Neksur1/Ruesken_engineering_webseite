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
                title: "Wachstumsbremse Manuelle Prozesse",
                cards: [
                    {
                        title: "Fehleranfälligkeit",
                        description: "Flüchtigkeitsfehler in repetitiven Tasks kosten Geld.",
                        metric: {
                            label: "Fehlerquote",
                            manual: "Manuell: ~4-8%",
                            ai: "AI-System: 0%"
                        }
                    },
                    {
                        title: "Fachkräftemangel",
                        description: "Qualifizierte Ingenieure sind mit Admin-Aufgaben blockiert.",
                        metric: {
                            label: "Skalierbarkeit",
                            manual: "Flaschenhals Personal",
                            ai: "Unbegrenzt skalierbar"
                        }
                    },
                    {
                        title: "Reaktionszeit",
                        description: "Kunden warten Tage auf Angebote oder Support.",
                        metric: {
                            label: "Durchlaufzeit",
                            manual: "Manuell: >72h",
                            ai: "AI-System: < 2min"
                        }
                    }
                ]
            },
            solutions: {
                title: "Intelligente Automatisierung",
                subtitle: "Die technologische Antwort auf die Wachstumsgrenze.",
                features: [
                    {
                        title: "AGENTIC AI",
                        headline: "Prozesse, die mitdenken, statt nur abzuarbeiten.",
                        description: "Ersetzen Sie starre If-Then-Skripte durch *adaptive KI-Agenten*. Unsere Systeme verstehen Kontext, treffen Entscheidungen innerhalb definierter Leitplanken und lösen Ausnahmen *autonom*.",
                        comparison: {
                            from: "Manuelle Bearbeitung",
                            to: "Smarte Prozesse"
                        }
                    },
                    {
                        title: "COMPUTER VISION",
                        headline: "Vom Bild zur strukturierten Datenbank.",
                        description: "Die Brücke zwischen physischer und digitaler Welt. Wir extrahieren verwertbare Daten aus *technischen Zeichnungen*, R&I-Fließbildern und Kamerastreams für automatisierte *Qualitätskontrolle*.",
                        comparison: {
                            from: "Technische Zeichnung",
                            to: "Parametrisches 3D-Modell"
                        }
                    },
                    {
                        title: "RAG & KNOWLEDGE",
                        headline: "Wissen, das agiert, statt nur zu existieren.",
                        description: "Wissen sollte den *Arbeitsalltag* steuern. Wir integrieren *KI-Agenten* so, dass sie Mitarbeiter entlasten und *autonome Entscheidungen* auf Basis Ihrer Daten treffen.",
                        comparison: {
                            from: "Passive Datenablage",
                            to: "Autonome Expertise"
                        }
                    }
                ]
            },
            projects: {
                header: {
                    title: "Ergebnisse statt Versprechen",
                    subtitle: "Echte Projekte. Echter Impact."
                },
                labels: {
                    backToOverview: "Zurück zur Übersicht",
                    challenge: "Herausforderung",
                    solution: "Lösung",
                    impact: "Ergebnis & Impact",
                    result: "Ergebnis",
                    ready: "Bereit für ähnliche Ergebnisse?",
                    bookCall: "Erstgespräch buchen"
                },
                items: [
                    {
                        category: "Industriekonzern",
                        title: "Autonomous B2B Sales Intelligence",
                        challenge: "CRM-Daten veraltet. Vertrieb verliert 60% der Zeit mit Recherche.",
                        result: "4x Lead-Qualität",
                        details: "Vollautonomes Multi-Agenten-System",
                        slug: "sales-intelligence",
                        fullProblem: "Ein führender Industriekonzern im Antriebsbereich stand vor einer kritischen Herausforderung: Hochqualifizierte Vertriebsingenieure verbrachten bis zu 60% ihrer Arbeitszeit mit manueller Lead-Recherche. Die CRM-Daten waren chronisch veraltet, Buying-Center-Strukturen unvollständig, und der Datenbeschaffungsprozess blockierte die Skalierung datengetriebener Vertriebsprozesse.",
                        fullSolution: "Entwicklung eines vollautonomen KI-Agentensystems, das aus minimalen Eingaben (Name, E-Mail) komplette Lead-Profile anreichert. Das System identifiziert automatisch relevante Entscheider im Buying Center, verifiziert E-Mail-Adressen, ergänzt firmografische Daten (Umsatz, Mitarbeiterzahl, Standorte) und klassifiziert Unternehmen nach Potenzial. Das modulare Design ermöglicht Erweiterungen wie automatisierte Wettbewerbsanalyse und Outreach-Sequenzen.",
                        fullResult: "Der manuelle Rechercheaufwand wurde um über 90% reduziert. Die Datenqualität im CRM stieg signifikant, und das System bildet nun die Grundlage für vollständig automatisierte Lead-Generierung und personalisierte Ansprache im Enterprise-Scale.",
                        chartData: [
                            { name: "Manuell", value: 8, label: "Leads / Tag" },
                            { name: "AI-Agents", value: 120, label: "Leads / Tag" }
                        ]
                    },
                    {
                        category: "Internationaler Kreuzfahrtkonzern",
                        title: "Enterprise Content Automation",
                        challenge: "11.000 Texte manuell überarbeiten. Projektlaufzeit >12 Monate.",
                        result: "Fünfstellige Einsparung",
                        details: "Automatisierte Content-Pipeline mit QA",
                        slug: "content-automation",
                        fullProblem: "Ein internationaler Kreuzfahrtkonzern musste im Zuge eines Rebrandings rund 11.000 bestehende Bordtexte überarbeiten – von Restaurantbeschreibungen bis Ausflugsprogrammen. Der manuelle Prozess hätte über ein Jahr gedauert und sechsstellige Kosten verursacht. Jeder Text musste den neuen Markenrichtlinien und Kommunikationsstandards entsprechen.",
                        fullSolution: "Implementierung einer vollautomatisierten Content-Pipeline mit spezialisierten LLM-Prompts und mehrstufiger Qualitätssicherung. Das System analysiert bestehende Texte, generiert markenkonforme Neufassungen und prüft automatisch auf Konsistenz, Tonalität und Brand-Compliance. Die Integration in das interne CMS erfolgt nahtlos.",
                        fullResult: "Die Projektlaufzeit wurde um mehrere Monate verkürzt – bei Einsparungen im fünfstelligen Bereich. Die Texte erreichten eine messbar höhere Markenkonsistenz als zuvor mit manueller Bearbeitung.",
                        chartData: [
                            { name: "Manuell", value: 45, label: "Min / Text" },
                            { name: "AI-Pipeline", value: 3, label: "Min / Text" }
                        ]
                    },
                    {
                        category: "Immobilien-Investmentgesellschaft",
                        title: "Intelligent Document Processing",
                        challenge: "Hunderte Exposés täglich. Manuelle Bewertung nicht skalierbar.",
                        result: "Echtzeit-Analyse",
                        details: "Computer Vision & NLP Pipeline",
                        slug: "doc-processing",
                        fullProblem: "Ein Immobilien-Objektentwickler erhält täglich hunderte Exposés per E-Mail. Die manuelle Sichtung und Bewertung war extrem zeitaufwendig – relevante, lukrative Objekte wurden oft zu spät erkannt oder gingen im Rauschen unter. Die Time-to-Decision war kritisch für den Markterfolg.",
                        fullSolution: "Entwicklung einer automatisierten Lösung, die eingehende E-Mails intelligent auswertet, Exposé-Dokumente extrahiert und mittels Computer Vision und NLP strukturierte Daten gewinnt. Das System führt eine automatische Relevanzbewertung nach definierten Investitionskriterien durch und priorisiert Objekte in Echtzeit.",
                        fullResult: "Die Vorauswahl geeigneter Objekte erfolgt nun in Sekunden statt Stunden. Die Prozesskostenreduktion liegt bei über 85%. Das System bildet die Grundlage für datenbasiertes Objekt-Matching und präzise Investmententscheidungen.",
                        chartData: [
                            { name: "Manuell", value: 30, label: "Exposés / Tag" },
                            { name: "AI-System", value: 500, label: "Exposés / Tag" }
                        ]
                    },
                    {
                        category: "Event- & Redneragentur",
                        title: "Automated Speech Generation",
                        challenge: "Personalisierte Reden erfordern Stunden kreativer Arbeit.",
                        result: "80% Zeitersparnis",
                        details: "NLP-Plattform mit Transkription & Generation",
                        slug: "speech-automation",
                        fullProblem: "Eine führende Redneragentur im DACH-Raum stand vor dem Skalierungsproblem: Das Verfassen persönlicher Hochzeits- und Trauerreden auf Basis von Klientengesprächen ist extrem zeitintensiv und erfordert hohen kreativen Aufwand. Die Kapazitätsgrenzen begrenzen das Wachstum.",
                        fullSolution: "Entwicklung einer End-to-End-Plattform, die den gesamten Workflow automatisiert: Automatische Gesprächstranskription, KI-gestützte inhaltliche Strukturierung, Extraktion emotionaler Schlüsselmomente und Zitate, sowie vollautomatische Generierung personalisierter Reden im gewünschten Stil und Tonalität.",
                        fullResult: "Die Zeitersparnis pro Rede beträgt bis zu 80%. Die Plattform gewährleistet einen einheitlich hohen Qualitätsstandard und ermöglicht die skalierbare Nutzung für mehrere Redner gleichzeitig – ohne Qualitätsverlust.",
                        chartData: [
                            { name: "Manuell", value: 6, label: "Stunden / Rede" },
                            { name: "AI-Plattform", value: 1.2, label: "Stunden / Rede" }
                        ]
                    },
                    {
                        category: "Forschungsinstitut",
                        title: "Academic Research Intelligence",
                        challenge: "Hunderte Paper sichten. 80% der Zeit ist Filterarbeit.",
                        result: "50%+ Zeitersparnis",
                        details: "Automatisierte Relevanzanalyse & Synthese",
                        slug: "research-intelligence",
                        fullProblem: "Ein renommiertes Forschungsinstitut kämpfte mit dem exponentiellen Wachstum wissenschaftlicher Publikationen. Forschende verbrachten den Großteil ihrer Zeit mit dem Sichten irrelevanter Paper, anstatt sich auf die eigentliche Forschungsarbeit zu konzentrieren. Die Identifikation relevanter Ergebnisse war ein manueller, frustrierender Prozess.",
                        fullSolution: "Entwicklung eines intelligenten Research-Tools, das wissenschaftliche Publikationen automatisch nach Relevanz bewertet, Kernaussagen extrahiert und strukturierte Zusammenfassungen generiert. Das System ermöglicht gezieltes Identifizieren relevanter Paper ohne hunderte Abstracts manuell lesen zu müssen.",
                        fullResult: "Die Zeitersparnis in der Literaturrecherche liegt bei über 50%. Forschende erhalten direkten Überblick über Forschungsinhalte, Methoden und Ergebnisse – für effizientere Themenfindung und beschleunigte Wissensaufbereitung.",
                        chartData: [
                            { name: "Manuell", value: 100, label: "Paper / Woche" },
                            { name: "AI-Tool", value: 500, label: "Paper / Woche" }
                        ]
                    },
                    {
                        category: "Fertigungsindustrie",
                        title: "Computer Vision Quality Control",
                        challenge: "Manuelle Teilerkennung fehleranfällig und kostenintensiv.",
                        result: "Präzision >99%",
                        details: "Deep Learning & Sensor Fusion",
                        slug: "vision-qc",
                        fullProblem: "In modernen Fertigungsumgebungen müssen verschiedene Bauteile visuell erkannt, klassifiziert und sortiert werden. Der manuelle Prozess birgt hohe Fehler- und Kostenrisiken, limitiert den Durchsatz und ist nicht skalierbar für Industrie-4.0-Anforderungen.",
                        fullSolution: "Training eines spezialisierten neuronalen Netzwerks zur automatisierten Teilerkennung über verschiedene Sensormodalitäten. Das Deep-Learning-Modell erkennt und klassifiziert Bauteile mit höchster Präzision in Echtzeit und ermöglicht die vollautomatische Sortierung im Produktionsfluss.",
                        fullResult: "Die Objekterkennung erreicht Präzisionswerte von über 99%. Menschliche Fehlerquellen wurden eliminiert, und das System bildet die Grundlage für flexible, vollautomatisierte Fertigungsprozesse nach Industrie-4.0-Standard.",
                        chartData: [
                            { name: "Manuell", value: 92, label: "Präzision %" },
                            { name: "AI-Vision", value: 99.4, label: "Präzision %" }
                        ]
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
                title: "Growth Brake: Manual Processes",
                cards: [
                    {
                        title: "Error Rate",
                        description: "Careless errors in repetitive tasks cost money.",
                        metric: {
                            label: "Error Rate",
                            manual: "Manual: ~4-8%",
                            ai: "AI System: 0%"
                        }
                    },
                    {
                        title: "Labor Shortage",
                        description: "Qualified engineers are blocked with admin tasks.",
                        metric: {
                            label: "Scalability",
                            manual: "Limited by Staff",
                            ai: "Unlimited & Instant"
                        }
                    },
                    {
                        title: "Response Time",
                        description: "Customers wait days for quotes or support.",
                        metric: {
                            label: "Processing Time",
                            manual: "Manual: >72h",
                            ai: "AI System: < 2min"
                        }
                    }
                ]
            },
            solutions: {
                title: "Intelligent Automation",
                subtitle: "The technological answer to the scaling limit.",
                features: [
                    {
                        title: "AGENTIC AI",
                        headline: "Processes that think, not just execute.",
                        description: "Replace rigid if-then scripts with adaptive AI agents. Our systems understand context, make decisions within defined guardrails, and handle exceptions autonomously.",
                        comparison: {
                            from: "Static Scripts",
                            to: "Adaptive Agents"
                        }
                    },
                    {
                        title: "COMPUTER VISION",
                        headline: "Turning visual data into structured insights.",
                        description: "Bridging the gap between the physical and digital world. We extract actionable data from technical drawings, P&IDs, and camera feeds to automate quality control and data entry.",
                        comparison: {
                            from: "Manual Review",
                            to: "Parametric 3D Model"
                        }
                    },
                    {
                        title: "RAG & KNOWLEDGE",
                        headline: "Secure intelligence for your enterprise data.",
                        description: "Empower your team with instant access to ISO norms, internal documentation, and project history. No hallucinations, just cited, reliable facts from your own secure database.",
                        comparison: {
                            from: "Data Silos",
                            to: "Instant Knowledge"
                        }
                    }
                ]
            },
            projects: {
                header: {
                    title: "Results, not Promises",
                    subtitle: "Real projects. Real impact."
                },
                labels: {
                    backToOverview: "Back to Overview",
                    challenge: "Challenge",
                    solution: "Solution",
                    impact: "Impact Analysis",
                    result: "Result",
                    ready: "Ready to achieve similar results?",
                    bookCall: "Book Discovery Call"
                },
                items: [
                    {
                        category: "Industrial Corporation",
                        title: "Autonomous B2B Sales Intelligence",
                        challenge: "CRM data outdated. Sales loses 60% of time on research.",
                        result: "4x Lead Quality",
                        details: "Fully Autonomous Multi-Agent System",
                        slug: "sales-intelligence",
                        fullProblem: "A leading industrial corporation in the drive technology sector faced a critical challenge: Highly qualified sales engineers spent up to 60% of their working time on manual lead research. CRM data was chronically outdated, buying center structures incomplete, and the data acquisition process blocked the scaling of data-driven sales processes.",
                        fullSolution: "Development of a fully autonomous AI agent system that enriches complete lead profiles from minimal inputs (name, email). The system automatically identifies relevant decision-makers in the buying center, verifies email addresses, supplements firmographic data (revenue, employee count, locations), and classifies companies by potential. The modular design enables extensions such as automated competitor analysis and outreach sequences.",
                        fullResult: "Manual research effort was reduced by over 90%. CRM data quality increased significantly, and the system now forms the foundation for fully automated lead generation and personalized outreach at enterprise scale.",
                        chartData: [
                            { name: "Manual", value: 8, label: "Leads / Day" },
                            { name: "AI Agents", value: 120, label: "Leads / Day" }
                        ]
                    },
                    {
                        category: "International Cruise Corporation",
                        title: "Enterprise Content Automation",
                        challenge: "11,000 texts to revise manually. Project duration >12 months.",
                        result: "Five-Figure Savings",
                        details: "Automated Content Pipeline with QA",
                        slug: "content-automation",
                        fullProblem: "An international cruise corporation needed to revise approximately 11,000 existing shipboard texts as part of a rebranding – from restaurant descriptions to excursion programs. The manual process would have taken over a year and caused six-figure costs. Every text had to comply with new brand guidelines and communication standards.",
                        fullSolution: "Implementation of a fully automated content pipeline with specialized LLM prompts and multi-stage quality assurance. The system analyzes existing texts, generates brand-compliant new versions, and automatically checks for consistency, tonality, and brand compliance. Integration into the internal CMS is seamless.",
                        fullResult: "Project duration was shortened by several months – with savings in the five-figure range. The texts achieved measurably higher brand consistency than with previous manual editing.",
                        chartData: [
                            { name: "Manual", value: 45, label: "Min / Text" },
                            { name: "AI Pipeline", value: 3, label: "Min / Text" }
                        ]
                    },
                    {
                        category: "Real Estate Investment Company",
                        title: "Intelligent Document Processing",
                        challenge: "Hundreds of exposés daily. Manual evaluation not scalable.",
                        result: "Real-time Analysis",
                        details: "Computer Vision & NLP Pipeline",
                        slug: "doc-processing",
                        fullProblem: "A real estate developer receives hundreds of exposés by email daily. Manual screening and evaluation was extremely time-consuming – relevant, lucrative properties were often recognized too late or got lost in the noise. Time-to-decision was critical for market success.",
                        fullSolution: "Development of an automated solution that intelligently evaluates incoming emails, extracts exposé documents, and gains structured data using Computer Vision and NLP. The system performs automatic relevance assessment according to defined investment criteria and prioritizes properties in real-time.",
                        fullResult: "Pre-selection of suitable properties now takes seconds instead of hours. Process cost reduction is over 85%. The system forms the foundation for data-based property matching and precise investment decisions.",
                        chartData: [
                            { name: "Manual", value: 30, label: "Exposés / Day" },
                            { name: "AI System", value: 500, label: "Exposés / Day" }
                        ]
                    },
                    {
                        category: "Event & Speaker Agency",
                        title: "Automated Speech Generation",
                        challenge: "Personalized speeches require hours of creative work.",
                        result: "80% Time Savings",
                        details: "NLP Platform with Transcription & Generation",
                        slug: "speech-automation",
                        fullProblem: "A leading speaker agency in the DACH region faced a scaling problem: Writing personal wedding and funeral speeches based on client conversations is extremely time-intensive and requires high creative effort. Capacity limits constrain growth.",
                        fullSolution: "Development of an end-to-end platform that automates the entire workflow: Automatic conversation transcription, AI-powered content structuring, extraction of emotional key moments and quotes, as well as fully automatic generation of personalized speeches in the desired style and tonality.",
                        fullResult: "Time savings per speech is up to 80%. The platform ensures a consistently high quality standard and enables scalable use for multiple speakers simultaneously – without quality loss.",
                        chartData: [
                            { name: "Manual", value: 6, label: "Hours / Speech" },
                            { name: "AI Platform", value: 1.2, label: "Hours / Speech" }
                        ]
                    },
                    {
                        category: "Research Institute",
                        title: "Academic Research Intelligence",
                        challenge: "Screening hundreds of papers. 80% of time is filtering.",
                        result: "50%+ Time Savings",
                        details: "Automated Relevance Analysis & Synthesis",
                        slug: "research-intelligence",
                        fullProblem: "A renowned research institute struggled with the exponential growth of scientific publications. Researchers spent most of their time screening irrelevant papers instead of focusing on actual research work. Identifying relevant results was a manual, frustrating process.",
                        fullSolution: "Development of an intelligent research tool that automatically evaluates scientific publications for relevance, extracts key statements, and generates structured summaries. The system enables targeted identification of relevant papers without having to manually read hundreds of abstracts.",
                        fullResult: "Time savings in literature research is over 50%. Researchers get direct overview of research content, methods, and results – for more efficient topic finding and accelerated knowledge preparation.",
                        chartData: [
                            { name: "Manual", value: 100, label: "Papers / Week" },
                            { name: "AI Tool", value: 500, label: "Papers / Week" }
                        ]
                    },
                    {
                        category: "Manufacturing Industry",
                        title: "Computer Vision Quality Control",
                        challenge: "Manual part recognition error-prone and costly.",
                        result: "Precision >99%",
                        details: "Deep Learning & Sensor Fusion",
                        slug: "vision-qc",
                        fullProblem: "In modern manufacturing environments, various components must be visually recognized, classified, and sorted. The manual process carries high error and cost risks, limits throughput, and is not scalable for Industry 4.0 requirements.",
                        fullSolution: "Training of a specialized neural network for automated part recognition across various sensor modalities. The deep learning model recognizes and classifies components with highest precision in real-time and enables fully automatic sorting in the production flow.",
                        fullResult: "Object recognition achieves precision values of over 99%. Human error sources have been eliminated, and the system forms the foundation for flexible, fully automated manufacturing processes according to Industry 4.0 standards.",
                        chartData: [
                            { name: "Manual", value: 92, label: "Precision %" },
                            { name: "AI Vision", value: 99.4, label: "Precision %" }
                        ]
                    }
                ]
            }
        }
    },
};

export type TranslationKey = keyof typeof translations.de;
