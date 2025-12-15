// Dynamic Poster Loading System
import { useState, useEffect } from 'react';

interface PosterCache {
  [filmId: string]: {
    url: string;
    timestamp: number;
    expires: number;
  };
}

interface TMDBPosterResponse {
  id: number;
  poster_path: string | null;
  backdrop_path: string | null;
  title: string;
  release_date: string;
}

class PosterLoader {
  private static readonly TMDB_BASE_URL = 'https://image.tmdb.org/t/p/';
  private static readonly TMDB_API_BASE = 'https://api.themoviedb.org/3';
  private static readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  private cache: PosterCache = {};
  private pendingRequests = new Map<string, Promise<string>>();
  private rateLimiter = new RateLimiter(4, 1000); // 4 requests per second

  constructor(private apiKey?: string) {
    this.loadCacheFromStorage();
  }

  async getPosterUrl(filmId: string, title: string, year: number): Promise<string> {
    // Check memory cache first
    const cached = this.cache[filmId];
    if (cached && Date.now() < cached.expires) {
      return cached.url;
    }

    // Check if request is already pending
    if (this.pendingRequests.has(filmId)) {
      return this.pendingRequests.get(filmId)!;
    }

    // Start new request
    const request = this.loadPoster(filmId, title, year);
    this.pendingRequests.set(filmId, request);

    try {
      const url = await request;
      this.cache[filmId] = {
        url,
        timestamp: Date.now(),
        expires: Date.now() + PosterLoader.CACHE_DURATION
      };
      this.saveCacheToStorage();
      return url;
    } finally {
      this.pendingRequests.delete(filmId);
    }
  }

  private async loadPoster(filmId: string, title: string, year: number): Promise<string> {
    if (!this.apiKey) {
      return this.getPlaceholderUrl(title);
    }

    try {
      // Rate limit the request
      await this.rateLimiter.waitForSlot();

      // Search for the movie
      const searchResults = await this.searchMovie(title, year);

      if (searchResults.length > 0) {
        const movie = searchResults[0];
        if (movie.poster_path) {
          const posterUrl = `${PosterLoader.TMDB_BASE_URL}w500${movie.poster_path}`;
          return posterUrl;
        }
      }

      // Fallback to placeholder
      return this.getPlaceholderUrl(title);
    } catch (error) {
      console.warn(`Failed to load poster for ${title}:`, error);
      return this.getPlaceholderUrl(title);
    }
  }

  private async searchMovie(title: string, year: number): Promise<TMDBPosterResponse[]> {
    const query = encodeURIComponent(title);
    const url = `${PosterLoader.TMDB_API_BASE}/search/movie?api_key=${this.apiKey}&query=${query}&year=${year}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results || [];
  }

  private getPlaceholderUrl(title: string): string {
    // Generate a simple text-based placeholder
    // Check if we're in browser environment
    if (typeof document === 'undefined') {
      return ''; // Return empty string during SSR/build
    }

    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 450;

    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('No Poster', canvas.width / 2, canvas.height / 2 - 20);

    ctx.font = '12px Arial';
    const words = title.split(' ');
    let line = '';
    let y = canvas.height / 2 + 20;

    for (const word of words) {
      const testLine = line + word + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > canvas.width - 20 && line !== '') {
        ctx.fillText(line, canvas.width / 2, y);
        line = word + ' ';
        y += 20;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, canvas.width / 2, y);

    return canvas.toDataURL('image/png');
  }

  private loadCacheFromStorage(): void {
    try {
      // Check if localStorage is available (browser environment)
      if (typeof localStorage === 'undefined') return;

      const stored = localStorage.getItem('posterCache');
      if (stored) {
        this.cache = JSON.parse(stored);
        // Clean expired entries
        const now = Date.now();
        Object.keys(this.cache).forEach(key => {
          if (this.cache[key].expires < now) {
            delete this.cache[key];
          }
        });
      }
    } catch (error) {
      console.warn('Failed to load poster cache from storage:', error);
    }
  }

  private saveCacheToStorage(): void {
    try {
      // Check if localStorage is available (browser environment)
      if (typeof localStorage === 'undefined') return;

      // Limit cache size to prevent localStorage bloat
      const entries = Object.entries(this.cache);
      if (entries.length > 500) { // Keep only 500 most recent
        const sorted = entries.sort((a, b) => b[1].timestamp - a[1].timestamp);
        this.cache = Object.fromEntries(sorted.slice(0, 500));
      }

      localStorage.setItem('posterCache', JSON.stringify(this.cache));
    } catch (error) {
      console.warn('Failed to save poster cache to storage:', error);
    }
  }
}

class RateLimiter {
  private requests: number[] = [];

  constructor(private limit: number, private window: number) {}

  async waitForSlot(): Promise<void> {
    const now = Date.now();

    // Remove old requests outside the window
    this.requests = this.requests.filter(time => now - time < this.window);

    if (this.requests.length >= this.limit) {
      // Wait until the oldest request expires
      const oldestRequest = Math.min(...this.requests);
      const waitTime = this.window - (now - oldestRequest);

      if (waitTime > 0) {
        await new Promise(resolve => setTimeout(resolve, waitTime));
        return this.waitForSlot(); // Recursively check again
      }
    }

    this.requests.push(now);
  }
}

// Global instance - API key will be set at runtime
let globalPosterLoader: PosterLoader | null = null;

export const getPosterLoader = (): PosterLoader => {
  if (!globalPosterLoader) {
    // Try to get API key from various sources
    const apiKey = (globalThis as any).VITE_TMDB_API_KEY ||
                   process.env.VITE_TMDB_API_KEY ||
                   process.env.TMDB_API_KEY;

    globalPosterLoader = new PosterLoader(apiKey);
  }
  return globalPosterLoader;
};

// Export for convenience
export const posterLoader = getPosterLoader();

// Utility function for React components
export const usePoster = (filmId: string, title: string, year: number) => {
  const [posterUrl, setPosterUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    posterLoader.getPosterUrl(filmId, title, year)
      .then(url => {
        if (mounted) {
          setPosterUrl(url);
          setLoading(false);
        }
      })
      .catch(error => {
        console.warn('Poster loading failed:', error);
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [filmId, title, year]);

  return { posterUrl, loading };
};
