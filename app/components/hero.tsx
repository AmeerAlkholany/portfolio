import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="py-20 text-center bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-[#34d399]">
          {siteConfig.title}
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          {siteConfig.bio}
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="#projects"
            className="px-6 py-3 bg-[#34d399] text-black font-semibold rounded-lg hover:bg-[#2fb284] transition"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-[#34d399] text-[#34d399] font-semibold rounded-lg hover:bg-[#34d399] hover:text-black transition"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex justify-center">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#34d399] transition"
            aria-label="GitHub Profile"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
