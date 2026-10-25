import ScrollReveal from "./scroll-reveal";
import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-emerald-400 pl-4">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-emerald-400 font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Next.js Development & Performance Optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>TypeScript Type-Safe Architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Responsive Design & UX Optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>API Integration & Data Management</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-emerald-400 font-semibold mb-3">My Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                {siteConfig.bio} I specialize in building high-performance, maintainable web applications.
                Every project is carefully crafted to ensure the best user experience and business value.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
