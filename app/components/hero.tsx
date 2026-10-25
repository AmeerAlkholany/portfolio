"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-emerald-400 font-medium text-sm md:text-base uppercase tracking-widest mb-4"
        >
          {siteConfig.title}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          让技术成为你的竞争优势
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#projects"
            className="px-8 py-4 bg-emerald-400 text-black font-semibold rounded-lg hover:bg-emerald-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            查看项目
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            联系我
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex justify-center"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
            aria-label="GitHub Profile"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="text-sm">在 GitHub 关注我</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
