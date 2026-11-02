import { Metadata } from "next";
import ProjectsSection from "@/app/components/projects-section";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Projects | Ameer KH",
  description: "View my projects and development work",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsSection />
      <Footer />
    </>
  );
}
