// Image and Link imports removed as unused

export interface ProjectCardProps {
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stargazersCount: number;
}

export default function ProjectCard({
  name,
  description,
  htmlUrl,
  language,
  stargazersCount,
}: ProjectCardProps) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-md hover:shadow-lg transition duration-200">
      <h3 className="text-xl font-semibold text-[#34d399] mb-2">
        <a href={htmlUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:underline">
          {name}
        </a>
      </h3>
      <p className="text-gray-400 mb-4">
        {description ?? "No description provided."}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{language ?? "—"}</span>
        <span>
          ⭐ {stargazersCount}
        </span>
      </div>
    </div>
  );
}
