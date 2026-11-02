import ScrollReveal from "./scroll-reveal";
import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-emerald-400 pl-4">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-6 sm:p-8 text-center lg:text-left h-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-sm mx-auto lg:mx-0 flex items-center justify-center text-3xl font-bold text-white mb-4 sm:mb-6">
                  AK
                </div>
                <h3 className="text-white text-lg sm:text-xl font-bold mb-3">Ameer Al.kholany</h3>
                <p className="text-emerald-100 text-xs sm:text-sm mb-4">Senior Next.js Developer</p>
                <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
                  Turning complex problems into elegant, performant web experiences.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-zinc-900/80 rounded-xl p-5 sm:p-6 border border-zinc-800 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/5 group h-full">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center mb-4 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                  <svg className="w-5 h-5 text-emerald-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-emerald-400 font-semibold mb-3 text-base">High Performance</h3>
                <p className="text-gray-400 text-sm">
                  Next.js Development & Performance Optimization with Core Web Vitals excellence.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-zinc-900/80 rounded-xl p-5 sm:p-6 border border-zinc-800 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/5 group h-full">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center mb-4 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                  <svg className="w-5 h-5 text-emerald-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-emerald-400 font-semibold mb-3 text-base">Type-Safe Code</h3>
                <p className="text-gray-400 text-sm">
                  TypeScript Type-Safe Architecture that scales with your business.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-zinc-900/80 rounded-xl p-5 sm:p-6 border border-zinc-800 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/5 group h-full">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center mb-4 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                  <svg className="w-5 h-5 text-emerald-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-emerald-400 font-semibold mb-3 text-base">Responsive Design</h3>
                <p className="text-gray-400 text-sm">
                  Responsive Design & UX Optimization across all devices.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-zinc-900/80 rounded-xl p-5 sm:p-6 border border-zinc-800 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/5 group h-full">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center mb-4 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                  <svg className="w-5 h-5 text-emerald-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10c0-4.42 5.37-8 12-8s12 3.58 12 8" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 14c0 4.42 5.37 8 12 8s12-3.58 12-8" />
                  </svg>
                </div>
                <h3 className="text-emerald-400 font-semibold mb-3 text-base">API Integration</h3>
                <p className="text-gray-400 text-sm">
                  API Integration & Data Management with robust security.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
