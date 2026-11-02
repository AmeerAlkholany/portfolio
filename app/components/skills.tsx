"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./scroll-reveal";

export default function Skills() {
  const technologyGroups = [
    {
      title: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Backend",
      skills: ["Node.js", "API Integration", "GitHub API", "Data Management"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2-2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: "Design & Tools",
      skills: ["Responsive Design", "UX Optimization", "Performance", "Git"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 border-l-4 border-emerald-400 pl-4">
            Skills
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">Continuously learning, refining skills, delivering quality code</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {technologyGroups.map((group, groupIndex) => (
            <ScrollReveal key={group.title} delay={groupIndex * 0.1}>
              <div className="bg-zinc-900/80 rounded-xl p-6 border border-zinc-800 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/10 h-full">
                <div className="w-12 h-12 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-4">
                  {group.icon}
                </div>
                <h3 className="text-white text-lg font-semibold mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: groupIndex * 0.1 + group.skills.indexOf(skill) * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(52, 211, 153, 0.2)",
                      }}
                      className="px-3 py-1.5 bg-zinc-800 text-emerald-400 rounded-full text-sm font-medium border border-zinc-700 hover:border-emerald-400/50 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
