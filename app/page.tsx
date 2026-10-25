import About from "./components/about";
import ProjectsSection from "./components/projects-section";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <About />
      <ProjectsSection />
      <Skills />
    </main>
  );
}
