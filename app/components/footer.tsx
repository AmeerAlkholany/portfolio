import { siteConfig } from "@/lib/site-config";
import ScrollReveal from "@/components/scroll-reveal";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-12 border-t border-zinc-800" aria-label="Footer">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal delay={0.1}>
          <p className="text-sm text-gray-400 mb-4">
            © {year} Ameer Al.kholany · 用代码创造价值
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-6">
            {siteConfig.github && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors focus:outline-none focus:text-emerald-400"
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
                className="text-gray-400 hover:text-emerald-400 transition-colors focus:outline-none focus:text-emerald-400"
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
