import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t border-zinc-800" aria-label="Footer">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-sm text-gray-400 mb-2">© {year} Ameer Al.kholany – Powered by Next.js</p>
        <div className="flex justify-center space-x-4">
          {siteConfig.github ? (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#34d399] transition"
            >
              GitHub
            </a>
          ) : null}
          {siteConfig.linkedin ? (
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#34d399] transition"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
