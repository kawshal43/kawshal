import thumbMe from "../assets/me.png";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";

/**
 * type:
 * - "slideshow" => show fluid slideshow
 * - "youtube"   => show YouTube embed (youtubeId later)
 * - "software"  => show details + optional links
 */

export const projects = [
  // ==========================
  // Photography (Slideshows)
  // ==========================
  {
    slug: "babyshoot-1-year-birthday",
    title: "Baby Shoot (1 Year Birthday)",
    category: "Photography",
    type: "slideshow",
    thumbnail: a,
    tags: ["Photography", "Retouching", "Color Grading"],
    images: [a, b, c, d, a, b, c, d], // use your photos now; replace later
    description:
      "A curated baby birthday photo collection with premium retouching and cinematic grading.",
  },
  {
    slug: "graduation-shoot",
    title: "Graduation Shoot",
    category: "Photography",
    type: "slideshow",
    thumbnail: b,
    tags: ["Photography", "Lightroom", "Photoshop"],
    images: [b, c, d, a, b, c, d, a],
    description:
      "Graduation shoot set with high-end retouching, consistent tones, and professional color work.",
  },
  {
    slug: "pre-shoot",
    title: "Pre Shoot",
    category: "Photography",
    type: "slideshow",
    thumbnail: c,
    tags: ["Photography", "Cinematic", "Editing"],
    images: [c, d, a, b, c, d, a, b],
    description:
      "Pre-shoot photo session edited with cinematic mood, clean skin tones, and premium finishing.",
  },

  // ==========================
  // 3D / Video (YouTube later)
  // ==========================
  {
    slug: "the-seed-animation",
    title: "The Seed (Animation Film)",
    category: "3D Animation",
    type: "youtube",
    thumbnail: d,
    tags: ["Blender", "Animation", "Cinematic"],
    youtubeId: "", // TODO: paste YouTube ID after upload
    description:
      "Original animation project. YouTube preview will be added after uploading.",
  },
  {
    slug: "advertisement-video",
    title: "Advertisement Video",
    category: "Design",
    type: "youtube",
    thumbnail: a,
    tags: ["Editing", "VFX", "Promo"],
    youtubeId: "", // TODO: paste YouTube ID
    description:
      "Commercial advertisement project with professional editing and polishing.",
  },
  {
    slug: "3d-advertisement-video",
    title: "3D Animated Advertisement",
    category: "3D Animation",
    type: "youtube",
    thumbnail: b,
    tags: ["Blender", "3D", "Product Ad"],
    youtubeId: "", // TODO: paste YouTube ID
    description:
      "3D product advertisement with animation, lighting, and final delivery polish.",
  },

  // ==========================
  // Design / Posters (Slideshow)
  // ==========================
  {
    slug: "social-media-posters",
    title: "Social Media Posters (Carousel)",
    category: "Design",
    type: "slideshow",
    thumbnail: c,
    tags: ["Design", "Branding", "Social Media"],
    images: [a, b, c, d, a, b, c, d],
    description:
      "A premium carousel of social media poster designs (10+ designs).",
  },

  // ==========================
  // Software
  // ==========================
  {
    slug: "singlish-to-sinhala-unicode-translator",
    title: "Singlish → Sinhala Unicode Translator",
    category: "Software",
    type: "software",
    thumbnail: d,
    tags: ["Java Swing", "Unicode", "Desktop App"],
    description:
      "A Java Swing desktop application that converts Singlish into Sinhala Unicode accurately.",
    links: {
      github: "https://github.com/kawshal43",
    },
  },
  {
    slug: "nuranova-website",
    title: "NuraNova Technology Website (In Progress)",
    category: "Software",
    type: "software",
    thumbnail: a,
    tags: ["React", "Vite", "Premium UI"],
    description:
      "Official website for NuraNova Technology with a modern dark premium UI and modular architecture.",
    links: {
      github: "https://github.com/kawshal43/nuranovasolutions",
    },
  },
  {
    slug: "blender-live-face-mocap-addon",
    title: "Blender Live Face Mocap Add-on (MediaPipe)",
    category: "Software",
    type: "software",
    thumbnail: b,
    tags: ["Python", "MediaPipe", "Blender Add-on", "DroidCam"],
    description:
      "Real-time facial expression capture for Blender using MediaPipe with webcam or mobile camera via DroidCam.",
    links: {
      github: "https://github.com/kawshal43",
    },
  },
];
