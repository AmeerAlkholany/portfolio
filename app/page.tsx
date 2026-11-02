import About from "./components/about";
import ProjectsSection from "./components/projects-section";
import Gallery from "./components/gallery";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <About />
      <ProjectsSection />
      <Gallery />
      <Skills />
      <Contact />
    </main>
  );
}
