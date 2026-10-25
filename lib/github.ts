import { cache } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
}

export const getRepositories = cache(async (username: string): Promise<GitHubRepo[]> => {
  if (!username) {
    console.warn('GITHUB_USERNAME is not defined');
    return [];
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        console.error('GitHub API rate limit exceeded');
      } else {
        console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork && !repo.archived && !repo.private)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  } catch (error) {
    console.error('Failed to fetch GitHub repositories:', error);
    return [];
  }
});
