"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import ScrollReveal from "./scroll-reveal";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12 border-t border-zinc-800" aria-label="Footer">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal delay={0.1}>
          <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
            &copy; 2026 Ameer Al.kholany. All rights reserved &middot; Building value through code
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            <Link
              href="/about"
              className="text-gray-400 hover:text-emerald-400 transition-colors text-sm focus:outline-none focus:text-emerald-400"
              aria-label="About"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-400 hover:text-emerald-400 transition-colors text-sm focus:outline-none focus:text-emerald-400"
              aria-label="Projects"
            >
              Projects
            </Link>
            <Link
              href="/gallery"
              className="text-gray-400 hover:text-emerald-400 transition-colors text-sm focus:outline-none focus:text-emerald-400"
              aria-label="Gallery"
            >
              Gallery
            </Link>
            <Link
              href="/skills"
              className="text-gray-400 hover:text-emerald-400 transition-colors text-sm focus:outline-none focus:text-emerald-400"
              aria-label="Skills"
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-emerald-400 transition-colors text-sm focus:outline-none focus:text-emerald-400"
              aria-label="Contact"
            >
              Contact
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
