import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ameer Al.kholany | Freelance Web Developer",
  description:
    "Senior Next.js developer specializing in high-performance web applications. TypeScript, React, Tailwind CSS, and modern web technologies.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
    "Freelance",
    "Portfolio",
  ],
  authors: [{ name: "Ameer Al.kholany" }],
  openGraph: {
    title: "Ameer Al.kholany | Freelance Web Developer",
    description:
      "Senior Next.js developer specializing in high-performance web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ameer Al.kholany | Freelance Web Developer",
    description:
      "Senior Next.js developer specializing in high-performance web applications.",
  },
};

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#34d399]">
        <div className="flex flex-col flex-1">
          <Navbar />
          <Hero />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
