"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[75vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-4 -left-4 sm:top-10 sm:-left-10 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-emerald-400 font-medium text-xs sm:text-sm uppercase tracking-[0.2em] mb-4"
        >
          {siteConfig.title}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
        >
          Turn Technology Into Your Competitive Advantage
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4"
        >
          <Link
            href="#projects"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-emerald-400 text-black font-semibold rounded-lg hover:bg-emerald-500 active:bg-emerald-600 transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 sm:px-8 sm:py-4 border border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-black active:bg-emerald-500 transition-all duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-8 md:mt-10 flex justify-center"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 text-xs sm:text-sm focus:outline-none focus:text-emerald-400"
            aria-label="GitHub Profile"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Follow me on GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
