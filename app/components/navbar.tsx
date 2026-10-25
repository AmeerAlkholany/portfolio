import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-zinc-800" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="text-emerald-400 font-semibold text-xl" aria-label="Home">AmeerKH</Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-emerald-400"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pb-4 bg-background"
          >
            <div className="flex flex-col space-y-1 px-2 sm:px-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-foreground hover:text-emerald-400 py-2 px-3 rounded-md text-base" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
