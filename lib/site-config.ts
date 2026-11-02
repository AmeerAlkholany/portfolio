export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  src: string;
  width?: number;
  height?: number;
}

export const siteConfig = {
  name: "Ameer Al.kholany",
  title: "Freelance Web Developer",
  email: "ameer@example.com", // Replace with your email
  github: "https://github.com/AmeerAlkholany",
  linkedin: "https://linkedin.com/in/ameeralkholany",
  bio: "I am a senior Next.js developer with a passion for building high-performance web applications.",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "GitHub API",
    "Responsive Design",
  ],
  featuredProjects: [], // Add repository names to feature them
  gallery: [
    // ===== HOW TO ADD YOUR SCREENSHOTS =====
    // 1. Save your screenshot image into the public/gallery/ folder
    //    (e.g., public/gallery/my-app.png)
    // 2. Add an entry below with these fields:
    //    - id: unique identifier (string)
    //    - title: project title (string)
    //    - description: brief description (string)
    //    - category: filter category (e.g. "Website", "App", "System")
    //    - src: path relative to public/ (e.g. "/gallery/my-app.png")
    //    - width/height: original image dimensions (optional, for image quality)
    //
    // EXAMPLE:
    // {
    //   id: "1",
    //   title: "E-Commerce Dashboard",
    //   description: "A full-featured admin dashboard built with Next.js and TypeScript.",
    //   category: "Dashboard",
    //   src: "/gallery/dashboard.png",
    //   width: 1920,
    //   height: 1080,
    // },

    // ===== DEMO PLACEHOLDER =====
    {
      id: "demo-placeholder",
      title: "Gallery Placeholder",
      description: "This is a placeholder. Replace it with screenshots of your projects by adding images to public/gallery/ and updating lib/site-config.ts with your entries.",
      category: "Placeholder",
      src: "/gallery/demo-placeholder.png",
      width: 1280,
      height: 720,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
