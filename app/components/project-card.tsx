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
    <div className="bg-zinc-900/60 rounded-xl p-5 sm:p-6 border border-zinc-800 hover:border-emerald-400/40 transition-colors duration-200 group">
      <h3 className="text-base sm:text-lg font-semibold text-emerald-400 mb-2">
        <a
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded"
        >
          {name}
        </a>
      </h3>
      <p className="text-gray-400 text-sm sm:text-base mb-4 min-h-[2.5em] leading-relaxed">
        {description ?? "No description provided."}
      </p>
      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 pt-3 border-t border-zinc-800/50">
        <span className="flex items-center gap-1.5">
          {language && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          )}
          {language ?? "—"}
        </span>
        <span className="flex items-center gap-1" aria-label={`${stargazersCount} stars`}>
          <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {stargazersCount}
        </span>
      </div>
    </div>
  );
}
