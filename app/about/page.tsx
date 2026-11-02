import { Metadata } from "next";
import About from "@/app/components/about";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "About Me | Ameer KH",
  description: "About Ameer Al.kholany - Senior Next.js Developer",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Footer />
    </>
  );
}
