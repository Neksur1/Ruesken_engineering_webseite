import { BlogPost } from "../../blogPosts";

export const post: BlogPost = {
    id: "2025-02-28-automated-quality-control",
    title: "Automatisierte Qualitätskontrolle",
    date: "2025-02-28",
    excerpt: "Fallstudie: Implementierung von Computer Vision zur Echtzeit-Fehlererkennung in der Hochgeschwindigkeitsmontage.",
    category: "AI Projects",
    readTime: "3 Min. Lesezeit",
    language: "de",
    content: `
      <p>In Hochgeschwindigkeitsmontagelinien ist das menschliche Auge oft der Engpass. Wir haben kürzlich ein benutzerdefiniertes Computer-Vision-System für einen Tier-1-Automobilzulieferer implementiert, das die Gleichung komplett verändert hat.</p>

      <h3>Die Herausforderung</h3>
      <p>Der Kunde hatte eine Fehlerrate von 3% in seiner Mikrostecker-Montagelinie. Bei 1200 Einheiten pro Minute war eine manuelle Inspektion unmöglich, und bestehende AOI-Systeme (Automatische Optische Inspektion) produzierten zu viele Fehlalarme.</p>

      <h3>Die Lösung</h3>
      <p>Wir haben eine hybride Edge-Cloud-Architektur mit einem fein abgestimmten Vision Transformer (ViT) eingesetzt. Durch das Training des Modells mit synthetischen Daten, die aus CAD-Dateien generiert wurden, erreichten wir innerhalb von zwei Wochen nach der Bereitstellung eine Genauigkeitsrate von 99,98%.</p>

      <p>Das System ermöglicht nun Echtzeit-Feedbackschleifen, die die Armspannung und Positionierung im laufenden Betrieb anpassen, um Abweichungen zu korrigieren, bevor sie zu einem Fehler führen. Das ist die Kraft der geschlossenen Schleife zwischen Wahrnehmung und Handlung.</p>
    `
};
