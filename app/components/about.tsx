import ScrollReveal from "./scroll-reveal";
import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-emerald-400 pl-4">
            关于我
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-emerald-400 font-semibold mb-3">服务内容</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Next.js 应用开发与性能优化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>TypeScript 类型安全架构</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>响应式设计与用户体验优化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>API 集成与数据管理</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-emerald-400 font-semibold mb-3">专业优势</h3>
              <p className="text-gray-300 leading-relaxed">
                {siteConfig.bio} 专注于构建高性能、可维护的 Web 应用。
                每一个项目都经过精心打磨，确保最佳用户体验和业务价值。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
