import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white border-t border-zinc-800" aria-label="Contact">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#34d399] border-b border-zinc-800 pb-2">
          Contact
        </h2>
        <p className="text-gray-300 mb-4">
          <a href={`mailto:${siteConfig.email}`} className="text-[#34d399] hover:underline">
            {siteConfig.email}
          </a>
        </p>
        <div className="flex justify-center space-x-6">
          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#34d399] transition"
             >
              GitHub
            </a>
          )}
          {siteConfig.linkedin && (
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#34d399] transition"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
