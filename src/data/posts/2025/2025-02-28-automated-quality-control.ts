import { BlogPost } from "../../blogPosts";

export const post: BlogPost = {
  id: "2025-02-28-automated-quality-control",
  title: "Automated Quality Control Systems",
  date: "2025-02-28",
  excerpt: "Case study: Implementing computer vision for real-time defect detection in high-speed assembly.",
  category: "AI Projects",
  readTime: "3 min read",
  content: `
      <p>In high-speed assembly lines, the human eye is often the bottleneck. We recently implemented a custom Computer Vision system for a Tier-1 automotive supplier that changed the equation entirely.</p>

      <h3>The Challenge</h3>
      <p>The client was facing a 3% defect rate in their micro-connector assembly line. At 1200 units per minute, manual inspection was impossible, and existing AOI (Automated Optical Inspection) systems were producing too many false positives.</p>

      <h3>The Solution</h3>
      <p>We deployed a hybrid edge-cloud architecture using a fine-tuned vision transformer (ViT). By training the model on synthetic data generated from CAD files, we achieved a 99.98% accuracy rate within two weeks of deployment.</p>

      <p>The system now enables real-time feedback loops, adjusting arm tension and positioning on the fly to correct deviations before they result in a defect. This is the power of closing the loop between perception and action.</p>
    `,
  language: "en"
};
