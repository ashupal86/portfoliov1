import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'ashupal86';

export const useGitHubData = () => {
  const [data, setData] = useState({
    user: null,
    repos: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const user = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        const repos = await reposResponse.json();

        // Filter to get only original repositories (not forks)
        const originalRepos = repos
          .filter(repo => !repo.fork)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            topics: repo.topics || [],
            updated_at: repo.updated_at,
            created_at: repo.created_at
          }));

        setData({
          user: {
            name: user.name || 'Ashish Pal',
            bio: user.bio || 'Computer Science Student & Full Stack Developer',
            avatar_url: user.avatar_url,
            followers: user.followers,
            following: user.following,
            public_repos: user.public_repos,
            location: user.location || 'Greater Noida, UP',
            blog: user.blog,
            company: user.company,
            created_at: user.created_at
          },
          repos: originalRepos,
          loading: false,
          error: null
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setData(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }));
      }
    };

    fetchGitHubData();
  }, []);

  return data;
};

// Enhanced project mapping
export const enhanceProjectsWithGitHub = (repos) => {
  const projectMapping = {
    'notes-api': {
      title: 'Notes API',
      category: 'backend',
      featured: true,
      description: 'A comprehensive RESTful API for note management with CRUD operations, structured JSON responses, and robust error handling.',
      features: [
        'Complete CRUD operations for notes',
        'Structured JSON responses', 
        'Error handling and validation',
        'SQLite database integration'
      ]
    },
    'my-manager': {
      title: 'My Manager (Clear Ledger)',
      category: 'frontend',
      featured: true,
      description: 'A financial management system with an intuitive interface for tracking expenses, managing budgets, and generating financial reports.',
      features: [
        'Expense tracking and categorization',
        'Budget management tools',
        'Financial report generation',
        'User-friendly dashboard'
      ]
    },
    'blog-website': {
      title: 'Blog Website',
      category: 'fullstack', 
      featured: true,
      description: 'A dynamic blog platform featuring user authentication, post management, and responsive design.',
      features: [
        'User authentication system',
        'Create, edit, and delete posts',
        'Responsive design',
        'Comment system'
      ]
    },
    'homelab': {
      title: 'Self-Hosted Homelab',
      category: 'devops',
      featured: true,
      description: 'Personal server infrastructure using Proxmox for virtualization, Docker for containerization, and Jellyfin for media streaming.',
      features: [
        'Proxmox virtualization setup',
        'Docker container orchestration',
        'Jellyfin media server',
        'Remote access and management'
      ]
    }
  };

  return repos.map(repo => {
    const projectKey = Object.keys(projectMapping).find(key => 
      repo.name.toLowerCase().includes(key) || key.includes(repo.name.toLowerCase())
    );
    
    const projectInfo = projectMapping[projectKey] || {
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      category: 'other',
      featured: false,
      description: repo.description,
      features: []
    };
    
    // Get technologies from language and topics
    const technologies = [
      repo.language,
      ...repo.topics
    ].filter(Boolean);

    return {
      ...projectInfo,
      github: repo.html_url,
      demo: repo.homepage,
      technologies,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      lastUpdated: repo.updated_at,
      created: repo.created_at,
      realData: true
    };
  });
}; 