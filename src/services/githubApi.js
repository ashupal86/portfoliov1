// GitHub API Service
// Fetches real data from GitHub to populate portfolio

const GITHUB_USERNAME = 'ashupal86';
const GITHUB_API_BASE = 'https://api.github.com';

// Cache for storing fetched data
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Helper function to check if cache is valid
const isCacheValid = (timestamp) => {
  return Date.now() - timestamp < CACHE_DURATION;
};

// Generic fetch function with caching
const fetchWithCache = async (url, cacheKey) => {
  // Check cache first
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (isCacheValid(cached.timestamp)) {
      return cached.data;
    }
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Cache the result
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
    
    return data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    
    // Return cached data if available, even if expired
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey).data;
    }
    
    throw error;
  }
};

// Fetch user profile information
export const fetchGitHubProfile = async () => {
  try {
    const profile = await fetchWithCache(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`,
      'github-profile'
    );
    
    return {
      name: profile.name || 'Ashish Pal',
      bio: profile.bio || 'Computer Science Student & Full Stack Developer',
      avatar_url: profile.avatar_url,
      followers: profile.followers,
      following: profile.following,
      public_repos: profile.public_repos,
      company: profile.company,
      location: profile.location || 'Greater Noida, UP',
      blog: profile.blog,
      twitter_username: profile.twitter_username,
      created_at: profile.created_at,
      updated_at: profile.updated_at
    };
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

// Fetch repositories with detailed information
export const fetchGitHubRepositories = async () => {
  try {
    const repos = await fetchWithCache(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      'github-repos'
    );
    
    // Filter and enhance repositories
    const filteredRepos = repos
      .filter(repo => !repo.fork && !repo.archived) // Only original, active repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // Sort by latest update
      .slice(0, 6) // Top 6 repositories
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description || 'No description available',
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        languages_url: repo.languages_url,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        watchers_count: repo.watchers_count,
        size: repo.size,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
        topics: repo.topics || [],
        default_branch: repo.default_branch,
        visibility: repo.visibility
      }));

    return filteredRepos;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

// Fetch languages used across repositories
export const fetchGitHubLanguages = async () => {
  try {
    const repos = await fetchGitHubRepositories();
    const languageStats = {};
    
    // Get detailed language stats for each repo
    for (const repo of repos) {
      if (repo.languages_url) {
        try {
          const languages = await fetchWithCache(
            repo.languages_url,
            `languages-${repo.id}`
          );
          
          // Aggregate language usage
          Object.entries(languages).forEach(([lang, bytes]) => {
            if (languageStats[lang]) {
              languageStats[lang] += bytes;
            } else {
              languageStats[lang] = bytes;
            }
          });
        } catch (error) {
          console.warn(`Error fetching languages for ${repo.name}:`, error);
        }
      }
    }
    
    // Convert to sorted array
    const totalBytes = Object.values(languageStats).reduce((sum, bytes) => sum + bytes, 0);
    const languagesArray = Object.entries(languageStats)
      .map(([language, bytes]) => ({
        language,
        bytes,
        percentage: ((bytes / totalBytes) * 100).toFixed(1)
      }))
      .sort((a, b) => b.bytes - a.bytes);
    
    return languagesArray;
  } catch (error) {
    console.error('Error fetching GitHub languages:', error);
    return [];
  }
};

// Fetch contribution activity (commit history)
export const fetchGitHubActivity = async () => {
  try {
    const events = await fetchWithCache(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/events/public?per_page=100`,
      'github-activity'
    );
    
    // Process events to get meaningful activity data
    const activityStats = {
      total_commits: 0,
      repositories_contributed: new Set(),
      recent_activity: [],
      languages_used: new Set()
    };
    
    events.forEach(event => {
      if (event.type === 'PushEvent') {
        activityStats.total_commits += event.payload.commits?.length || 0;
        activityStats.repositories_contributed.add(event.repo.name);
        
        // Add to recent activity
        if (activityStats.recent_activity.length < 10) {
          activityStats.recent_activity.push({
            type: 'commit',
            repo: event.repo.name,
            date: event.created_at,
            commits: event.payload.commits?.length || 0
          });
        }
      }
    });
    
    return {
      total_commits: activityStats.total_commits,
      repositories_count: activityStats.repositories_contributed.size,
      recent_activity: activityStats.recent_activity,
      last_active: events[0]?.created_at || null
    };
  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    return null;
  }
};

// Get repository README content
export const fetchRepositoryReadme = async (repoName) => {
  try {
    const readme = await fetchWithCache(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/readme`,
      `readme-${repoName}`
    );
    
    // Decode base64 content
    const content = atob(readme.content);
    return {
      content,
      download_url: readme.download_url,
      name: readme.name,
      path: readme.path
    };
  } catch (error) {
    console.error(`Error fetching README for ${repoName}:`, error);
    return null;
  }
};

// Enhanced project mapping with real GitHub data
export const getEnhancedProjects = async () => {
  try {
    const repos = await fetchGitHubRepositories();
    const languages = await fetchGitHubLanguages();
    
    // Map known projects to enhance with real data
    const projectMapping = {
      'notes-api': {
        title: 'Notes API',
        category: 'backend',
        featured: true,
        description: 'A comprehensive RESTful API for note management with CRUD operations, structured JSON responses, and robust error handling.'
      },
      'my-manager': {
        title: 'My Manager (Clear Ledger)',
        category: 'frontend',
        featured: true,
        description: 'A financial management system with an intuitive interface for tracking expenses, managing budgets, and generating financial reports.'
      },
      'blog-website': {
        title: 'Blog Website',
        category: 'fullstack',
        featured: true,
        description: 'A dynamic blog platform featuring user authentication, post management, and responsive design.'
      },
      'homelab': {
        title: 'Self-Hosted Homelab',
        category: 'devops',
        featured: true,
        description: 'Personal server infrastructure using Proxmox for virtualization, Docker for containerization, and Jellyfin for media streaming.'
      }
    };
    
    // Enhance projects with real GitHub data
    const enhancedProjects = repos.map(repo => {
      const projectKey = Object.keys(projectMapping).find(key => 
        repo.name.toLowerCase().includes(key) || key.includes(repo.name.toLowerCase())
      );
      
      const projectInfo = projectMapping[projectKey] || {
        title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        category: 'other',
        featured: false,
        description: repo.description || 'No description available'
      };
      
      return {
        ...projectInfo,
        ...repo,
        real_data: true,
        technologies: repo.topics.length > 0 ? repo.topics : [repo.language].filter(Boolean),
        last_updated: repo.updated_at,
        github_stats: {
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          watchers: repo.watchers_count,
          size: repo.size
        }
      };
    });
    
    return {
      projects: enhancedProjects,
      languages: languages.slice(0, 10), // Top 10 languages
      total_repos: repos.length
    };
  } catch (error) {
    console.error('Error getting enhanced projects:', error);
    return { projects: [], languages: [], total_repos: 0 };
  }
};

// Get overall GitHub stats
export const getGitHubStats = async () => {
  try {
    const [profile, repos, activity, languages] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepositories(),
      fetchGitHubActivity(),
      fetchGitHubLanguages()
    ]);
    
    return {
      profile,
      repository_count: repos.length,
      activity,
      top_languages: languages.slice(0, 5),
      last_updated: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error getting GitHub stats:', error);
    return null;
  }
};

// Clear cache (useful for development/debugging)
export const clearCache = () => {
  cache.clear();
  console.log('GitHub API cache cleared');
};

export default {
  fetchGitHubProfile,
  fetchGitHubRepositories,
  fetchGitHubLanguages,
  fetchGitHubActivity,
  fetchRepositoryReadme,
  getEnhancedProjects,
  getGitHubStats,
  clearCache
}; 