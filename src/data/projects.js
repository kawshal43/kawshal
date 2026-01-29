// src/data/projects.js

function sortByNumber(filesObj) {
  const items = Object.entries(filesObj).map(([path, mod]) => {
    const url = mod?.default ?? mod;
    const file = path.split("/").pop() || path;
    const numMatch = file.match(/(\d+)/);
    const n = numMatch ? parseInt(numMatch[1], 10) : 99999;
    return { path, url, n };
  });

  items.sort((a, b) => a.n - b.n);
  return items.map((x) => x.url);
}

/* ====== Auto load galleries ====== */

// JPG sets
const babyShootGlob = import.meta.glob("../assets/babyShoot/*.jpg", { eager: true });
const graduationGlob = import.meta.glob("../assets/graduation/*.jpg", { eager: true });
const preshootGlob = import.meta.glob("../assets/preshoot/*.jpg", { eager: true });

// PNG sets
const faceMocapGlob = import.meta.glob("../assets/faceMocap/*.png", { eager: true });
const nuraNovaGlob = import.meta.glob("../assets/nuraNova/*.png", { eager: true });
const unicodeGlob = import.meta.glob("../assets/unicordTranslator/*.png", { eager: true });

// socialMedia could be png or jpg
const socialMediaGlob = import.meta.glob("../assets/socialMedia/*.{png,jpg,jpeg}", { eager: true });

// Optional fallback thumbnail
import meThumb from "../assets/me.png";

export const galleries = {
  babyShoot: sortByNumber(babyShootGlob),
  graduation: sortByNumber(graduationGlob),
  preshoot: sortByNumber(preshootGlob),
  faceMocap: sortByNumber(faceMocapGlob),
  nuraNova: sortByNumber(nuraNovaGlob),
  unicodeTranslator: sortByNumber(unicodeGlob),
  socialMedia: sortByNumber(socialMediaGlob),
};

export const projects = [
  /* ===== VIDEO PROJECTS ===== */
  {
    id: "the-seed-animation",
    title: "The Seed (Animation Film)",
    category: "3D Animation",
    description: "An original animation film showcasing cinematic lighting, mood, and storytelling.",
    tags: ["Blender", "Animation", "Cinematic"],
    type: "video",
    youtube: "https://youtu.be/zGjZS5xnH1A",
    youtubeId: "zGjZS5xnH1A",
    thumbnail: meThumb,
    details: {
      long:
        "A cinematic animation short focused on mood, lighting, pacing, and storytelling. Built with a production-style workflow from scene setup to final render and edit."
    }
  },
  {
    id: "advertisement-video",
    title: "Advertisement Video",
    category: "Design",
    description: "A commercial-style video with clean visuals and polished editing.",
    tags: ["Editing", "Color", "Commercial"],
    type: "video",
    youtube: "https://youtu.be/Zxtwp48_xn0",
    youtubeId: "Zxtwp48_xn0",
    thumbnail: meThumb,
    details: {
      long:
        "A polished advertisement edit with clean pacing, professional color, and refined visuals. Designed to feel premium and brand-ready."
    }
  },
  {
    id: "3d-animated-advertisement",
    title: "3D Animated Advertisement",
    category: "3D Animation",
    description: "3D animated advertisement with premium motion, lighting, and final edit.",
    tags: ["Blender", "3D", "VFX"],
    type: "video",
    youtube: "https://youtu.be/nnbeGfgj7M4?si=om8K1d-DuND3J98T",
    youtubeId: "nnbeGfgj7M4",
    thumbnail: meThumb,
    details: {
      long:
        "A full 3D animated commercial-style sequence with premium motion, lighting, and final post-processing/editing for an ad-ready output."
    }
  },

  /* ===== PHOTO SHOOTS ===== */
  {
    id: "baby-shoot",
    title: "Baby Shoot (1 Year Birthday)",
    category: "Photography",
    description: "A curated baby shoot set with consistent tones and premium retouching.",
    tags: ["Photography", "Lightroom", "Retouch"],
    type: "photos",
    gallery: galleries.babyShoot,
    details: {
      long:
        "A 1-year birthday baby shoot edited with consistent skin tones, gentle highlights, and premium retouching. Built for clean, client-ready delivery."
    }
  },
  {
    id: "graduation-shoot",
    title: "Graduation Shoot",
    category: "Photography",
    description: "High-end graduation shoot retouching and cinematic color grading.",
    tags: ["Photography", "Lightroom", "Photoshop"],
    type: "photos",
    gallery: galleries.graduation,
    details: {
      long:
        "A high-end graduation shoot with consistent color science, professional skin retouching, and cinematic grading for a premium final look."
    }
  },
  {
    id: "pre-shoot",
    title: "Pre Shoot",
    category: "Photography",
    description: "A cinematic pre-shoot collection with premium edits and mood.",
    tags: ["Photography", "Color Grade", "Retouch"],
    type: "photos",
    gallery: galleries.preshoot,
    details: {
      long:
        "A cinematic pre-shoot set with premium edits, clean tones, and mood-driven grading. Focused on consistency and storytelling."
    }
  },

  /* ===== SOFTWARE / TOOLS ===== */
  {
    id: "face-controller-rig-builder",
    title: "Face Controller Rig Builder (Blender Add-on)",
    category: "Software",
    description:
      "A Blender add-on that generates a custom facial controller rig with artist-friendly controls, ready for live mocap pipelines.",
    tags: ["Python", "Blender API", "Rigging"],
    type: "photos",
    gallery: galleries.faceMocap,
    github: "https://github.com/kawshal43",
    details: {
      long:
        "Face Controller Rig Builder is a Blender add-on designed to simplify facial rigging and facial motion capture workflows.\n\n" +
        "Instead of relying on complex or locked auto-rig systems, this project generates a custom face controller rig with intuitive, face-shaped controls for eyes, mouth, brows, jaw, cheeks, and nose.\n\n" +
        "How it works:\n" +
        "• Analyzes the selected face mesh using its bounding box\n" +
        "• Creates a controller armature (CTRL bones) positioned around key facial areas\n" +
        "• Generates matching deform bones (DEF bones) constrained to controllers\n" +
        "• Creates custom controller shapes (eye rings, mouth curves, brow arcs)\n" +
        "• Mesh can be bound and weight-painted for deformation\n" +
        "• Future-ready for live facial mocap data (webcam / MediaPipe)\n\n" +
        "Current progress:\n" +
        "• Face-feature-shaped controllers implemented\n" +
        "• Automatic rig placement and binding\n" +
        "• Clean separation between control and deform layers\n" +
        "• Compatible foundation for live face capture pipelines\n\n" +
        "Technologies:\n" +
        "• Python (Blender Add-on API)\n" +
        "• Blender Armature & Rigging System\n" +
        "• Custom Curve-based Controller Shapes\n" +
        "• Planned MediaPipe/webcam tracking integration\n\n" +
        "Goal:\n" +
        "A reliable, artist-friendly facial rig foundation that works with any character, avoids rig conflicts, and is ready for real-time facial animation and cinematic production."
    }
  },
  {
    id: "bysuct-unicode-translator",
    title: "bySUCT (Singlish → Sinhala Unicode Translator)",
    category: "Software",
    description:
      "A Sinhala Unicode typing solution for designers who type Singlish and need proper Sinhala Unicode for design tools.",
    tags: ["Java", "Swing", "Unicode"],
    type: "photos",
    gallery: galleries.unicodeTranslator,
    github: "https://github.com/kawshal43",
    details: {
      long:
        "bySUCT is a Sinhala Unicode typing solution developed specially for Sri Lankan designers and content creators who are not familiar with traditional Sinhala Unicode keyboard layouts.\n\n" +
        "With bySUCT, users can type Sinhala words using Singlish (English letters), and the software automatically converts them into proper Sinhala Unicode text. The converted text can be copied and pasted into any design or document.\n\n" +
        "Why bySUCT?\n" +
        "Most design software (Photoshop, Illustrator, InDesign, etc.) works properly with Sinhala Unicode for font styling and effects. Traditional Sinhala typing methods can be difficult for many users.\n\n" +
        "Key Features:\n" +
        "✅ Type Sinhala using Singlish\n" +
        "✅ Automatic conversion to Sinhala Unicode\n" +
        "✅ One-click copy & paste\n" +
        "✅ Works perfectly with design tools\n" +
        "✅ No need to learn complex Unicode keyboards\n" +
        "✅ Clean UI\n" +
        "✅ Built using Java for stable performance\n\n" +
        "Who is it for?\n" +
        "• Graphic designers\n" +
        "• Video editors\n" +
        "• Social media creators\n" +
        "• Students and educators\n" +
        "• Anyone who needs Sinhala Unicode quickly\n\n" +
        "Conclusion:\n" +
        "bySUCT bridges creativity and language—making Sinhala Unicode fast, easy, and accessible."
    }
  },
  {
    id: "nuranova-solutions-website",
    title: "Nuranova Solutions (Full-Stack Website)",
    category: "Software",
    description:
      "Full-stack company website built with React + Vite frontend and Spring Boot backend, scalable and production-ready.",
    tags: ["React", "Vite", "Spring Boot", "REST"],
    type: "photos",
    gallery: galleries.nuraNova,
    github: "https://github.com/kawshal43",
    details: {
      long:
        "Nuranova Solutions – Full-Stack Company Website\n\n" +
        "I designed and developed a full-stack company website for Nuranova Solutions using React + Vite for the frontend and Spring Boot for the backend.\n\n" +
        "My Role:\n" +
        "• UI/UX design\n" +
        "• Frontend development (React + Vite)\n" +
        "• Backend development (Spring Boot)\n" +
        "• API integration and data handling\n" +
        "• Deployment-ready architecture\n\n" +
        "Frontend (React + Vite):\n" +
        "• Modern component-based UI\n" +
        "• Vite for fast development + optimized builds\n" +
        "• Fully responsive layout\n" +
        "• Clean navigation (Hero / Services / CTA / Footer)\n" +
        "• Reusable components\n" +
        "• Performance-focused structure\n\n" +
        "Backend (Spring Boot):\n" +
        "• RESTful backend\n" +
        "• Clean architecture following best practices\n" +
        "• Extendable for auth/admin/DB\n" +
        "• Production-ready foundation\n\n" +
        "Outcome:\n" +
        "Shows real-world full-stack ability with modern frontend + robust backend architecture."
    }
  },

  /* ===== DESIGN / SOCIAL ===== */
  {
    id: "social-media-design-pack",
    title: "Social Media Posters (Slideshow)",
    category: "Design",
    description: "A set of social media poster designs presented as a slideshow collection.",
    tags: ["Design", "Branding", "Posters"],
    type: "photos",
    gallery: galleries.socialMedia,
    details: {
      long:
        "A curated collection of social media poster designs presented as a slideshow. Designed with clean branding, composition, and consistency."
    }
  },
];

export const categories = ["All", "3D Animation", "Software", "Design", "Photography"];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
