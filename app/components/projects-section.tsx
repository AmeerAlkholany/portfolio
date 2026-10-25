// GitHubRepo import removed as unused
import { getRepositories, GitHubRepo } from "@/lib/github";
import ProjectCard from "./project-card";
import { siteConfig } from "@/lib/site-config";

export default async function ProjectsSection() {
  const username = process.env.GITHUB_USERNAME ?? "";
  const repos = await getRepositories(username);

  if (!username) {
    return (
      <section id="projects" className="py-16 bg-black text-white" aria-label="Projects">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">GitHub username not configured. Set GITHUB_USERNAME in your .env.local file.</p>
        </div>
      </section>
    );
  }

  if (repos.length === 0) {
    return (
      <section id="projects" className="py-16 bg-black text-white" aria-label="Projects">
        <div className="max-w-4xl mx-auto px-4 text-center border-t border-zinc-800 pt-8">
          <p className="text-gray-400">No public repositories found.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 bg-black text-white" aria-label="Projects">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-[#34d399] border-b border-zinc-800 pb-2">
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
        <div className="flex justify-center mt-8">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#34d399] text-black font-semibold rounded-lg hover:bg-[#2fb284] transition"
          >
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
