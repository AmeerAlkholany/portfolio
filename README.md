# Ameer KH - Portfolio

A modern, high-performance portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features an animated hero, project showcase, skills overview, gallery, and contact section.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- `/` — Home (hero, about section, projects, gallery, skills)
- `/about` — About page
- `/projects` — Projects page (from GitHub)
- `/gallery` — Gallery page (screenshots)
- `/skills` — Skills page
- `/contact` — Contact page

### Environment Variables

Set `GITHUB_USERNAME` in `.env.local` to pull your public repositories into the Projects section:

```env
GITHUB_USERNAME=your-github-username
```

## Adding Gallery Screenshots

The Gallery page (`/gallery`) displays screenshots of websites and systems you've developed.

1. **Save your screenshot** into the `public/gallery/` folder (e.g., `public/gallery/website-name.png`). PNG or JPG works best.

2. **Add an entry** to `lib/site-config.ts` in the `gallery` array:

```ts
{
  id: "1",                       // unique identifier
  title: "My Project Name",       // project title shown in modal
  description: "A brief description of what this project does and the tech used.",
  category: "Website",            // used for filtering (e.g. "Website", "App", "System")
  src: "/gallery/website-name.png", // path relative to public/
  width: 1920,                    // original image width (optional)
  height: 1080,                   // original image height (optional)
}
```

3. **Restart the dev server** if it's already running so Next.js picks up the new image.

> Tip: Keep screenshots consistent (same aspect ratio) for the best grid appearance. A width of 1280px or higher is recommended for crisp display.

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy to Vercel for the best experience.
