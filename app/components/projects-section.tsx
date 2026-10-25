import { getRepositories } from "@/lib/github";
import ProjectCard from "./project-card";
import { siteConfig } from "@/lib/site-config";

export default async function ProjectsSection() {
  const username = process.env.GITHUB_USERNAME ?? "";
  const repos = await getRepositories(username);

  if (!username) {
    return (
      <section id="projects" className="py-16 bg-[#0a0a0a] text-white" aria-label="Projects">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">Projects</h2>
          <p className="text-gray-400">
            GitHub username not configured. Set GITHUB_USERNAME in your .env.local file.
          </p>
        </div>
      </section>
    );
  }

  if (repos.length === 0) {
    return (
      <section id="projects" className="py-16 bg-[#0a0a0a] text-white" aria-label="Projects">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">Projects</h2>
          <p className="text-gray-400">No public repositories found.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 bg-[#0a0a0a] text-white" aria-label="Projects">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-emerald-400 border-l-4 border-emerald-400 pl-4">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              htmlUrl={repo.html_url}
              language={repo.language}
              stargazersCount={repo.stargazers_count}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-400 text-black font-semibold rounded-lg hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          >
            View all on GitHub
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
