import { siteConfig } from "@/lib/site-config";
import ScrollReveal from "./scroll-reveal";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12 border-t border-zinc-800" aria-label="Footer">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal delay={0.1}>
          <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
            &copy; {year} Ameer Al.kholany &middot; Building value through code
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {siteConfig.github && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm focus:outline-none focus:text-emerald-400"
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
            )}
            {siteConfig.linkedin && (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm focus:outline-none focus:text-emerald-400"
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
            )}
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
