import { Metadata } from "next";
import Skills from "@/app/components/skills";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Skills | Ameer KH",
  description: "My technical skills and expertise",
};

export default function SkillsPage() {
  return (
    <>
      <Skills />
      <Footer />
    </>
  );
}
