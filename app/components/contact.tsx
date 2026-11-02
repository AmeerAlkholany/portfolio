import { siteConfig } from "@/lib/site-config";
import ScrollReveal from "./scroll-reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 border-l-4 border-emerald-400 pl-4">
            Contact
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-zinc-900/80 rounded-xl p-6 sm:p-8 border border-zinc-800 hover:border-emerald-400/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-emerald-400 font-semibold mb-4 text-lg">Get in Touch</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Have a project in mind? Let&apos;s talk about how we can bring it to life.
              </p>
              <div className="space-y-4">
                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                      <svg
                        className="w-5 h-5 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                      <span className="text-sm sm:text-base break-all">{siteConfig.email}</span>
                    </div>
                  </a>
                )}
              </div>
            </div>

            <div className="bg-zinc-900/80 rounded-xl p-6 sm:p-8 border border-zinc-800 hover:border-emerald-400/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-emerald-400 font-semibold mb-4 text-lg">Connect</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Follow my work and join the conversation on social platforms.
              </p>
              <div className="flex flex-wrap gap-3">
                {siteConfig.github && (
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-zinc-700 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
                {siteConfig.linkedin && (
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-zinc-700 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
