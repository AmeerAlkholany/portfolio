"use client";

import { motion } from "framer-motion";
import { defaultSkills } from "@/lib/skills";
import ScrollReveal from "./scroll-reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 border-l-4 border-emerald-400 pl-4">
            Skills
          </h2>
          <p className="text-gray-400">Continuously learning, refining skills, delivering quality code</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {defaultSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(52, 211, 153, 0.2)",
                }}
                className="px-4 py-2 bg-zinc-900 text-emerald-400 rounded-full text-sm font-medium border border-zinc-800 hover:border-emerald-400/50 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
