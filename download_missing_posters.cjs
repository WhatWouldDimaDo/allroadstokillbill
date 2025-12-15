#!/usr/bin/env node

// Script to download missing posters for Tarantino Graph
const fs = require('fs');
const https = require('https');
const path = require('path');

// TMDB API configuration
const TMDB_API_KEY = process.env.TMDB_API_KEY || process.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

if (!TMDB_API_KEY) {
  console.error('Error: TMDB_API_KEY environment variable is required');
  console.error('Set it with: export TMDB_API_KEY=your_key_here');
  process.exit(1);
}

// Rate limiting: TMDB allows 4 requests per second
class RateLimiter {
  constructor(requestsPerSecond = 4) {
    this.requests = [];
    this.limit = requestsPerSecond;
    this.window = 1000; // 1 second
  }

  async waitForSlot() {
    const now = Date.now();

    // Remove old requests outside the window
    this.requests = this.requests.filter(time => now - time < this.window);

    if (this.requests.length >= this.limit) {
      // Wait until the oldest request expires
      const oldestRequest = Math.min(...this.requests);
      const waitTime = this.window - (now - oldestRequest);

      if (waitTime > 0) {
        console.log(`Rate limit reached, waiting ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        return this.waitForSlot(); // Recursively check again
      }
    }

    this.requests.push(now);
  }
}

const rateLimiter = new RateLimiter();

// Load the dataset
function loadDataset() {
  try {
    const dataPath = './graphData_final_with_posters.ts';
    const content = fs.readFileSync(dataPath, 'utf8');

    // Extract the RAW_NODES array
    const nodesMatch = content.match(/const RAW_NODES = (\[[\s\S]*?\]);/);
    if (!nodesMatch) {
      throw new Error('Could not find RAW_NODES in dataset');
    }

    // Simple parsing - look for films without posterUrl
    const films = [];
    const filmBlocks = content.split(/{\s*id:/);

    for (let i = 1; i < filmBlocks.length; i++) {
      const block = filmBlocks[i];
      const idMatch = block.match(/id:\s*["']([^"']+)["']/);
      const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
      const yearMatch = block.match(/year:\s*(\d+)/);
      const posterMatch = block.match(/posterUrl:\s*(null|["'][^"']*["'])/);

      if (idMatch && nameMatch && yearMatch) {
        const posterUrl = posterMatch && posterMatch[1] !== 'null' ? posterMatch[1].replace(/['"]/g, '') : null;

        films.push({
          id: idMatch[1],
          name: nameMatch[1],
          year: parseInt(yearMatch[1]),
          posterUrl: posterUrl
        });
      }
    }

    return films;
  } catch (error) {
    console.error('Error loading dataset:', error);
    process.exit(1);
  }
}

// Search for movie on TMDB
async function searchMovie(title, year) {
  await rateLimiter.waitForSlot();

  const query = encodeURIComponent(title);
  const url = `${TMDB_API_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&year=${year}`;

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve(response.results || []);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

// Download poster image
async function downloadPoster(posterPath, filename) {
  const url = `${POSTER_BASE_URL}${posterPath}`;

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(filename, () => {});
        reject(new Error(`Failed to download: ${res.statusCode}`));
        return;
      }

      res.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {});
      reject(err);
    });
  });
}

// Main execution
async function main() {
  console.log('🔍 Loading Tarantino Graph dataset...');
  const films = loadDataset();
  console.log(`📊 Found ${films.length} films in dataset`);

  const missingPosters = films.filter(film => !film.posterUrl);
  console.log(`🎬 Films missing posters: ${missingPosters.length}`);

  if (missingPosters.length === 0) {
    console.log('✅ All films have posters!');
    return;
  }

  // Ensure posters directory exists
  const postersDir = './posters';
  if (!fs.existsSync(postersDir)) {
    fs.mkdirSync(postersDir);
    console.log('📁 Created posters directory');
  }

  console.log('\n🚀 Starting poster download...');

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < missingPosters.length; i++) {
    const film = missingPosters[i];
    const progress = `${i + 1}/${missingPosters.length}`;

    console.log(`\n[${progress}] Searching for: "${film.name}" (${film.year})`);

    try {
      // Search for the movie
      const results = await searchMovie(film.name, film.year);

      if (results.length === 0) {
        console.log(`❌ No results found for "${film.name}" (${film.year})`);
        errorCount++;
        continue;
      }

      // Use the first result
      const movie = results[0];
      if (!movie.poster_path) {
        console.log(`⚠️ No poster available for "${film.name}" (TMDB ID: ${movie.id})`);
        errorCount++;
        continue;
      }

      // Download the poster
      const filename = `${film.id}.jpg`;
      const filepath = path.join(postersDir, filename);

      console.log(`📥 Downloading poster for "${film.name}"...`);
      await downloadPoster(movie.poster_path, filepath);

      console.log(`✅ Saved poster: ${filename}`);
      successCount++;

    } catch (error) {
      console.log(`❌ Error processing "${film.name}": ${error.message}`);
      errorCount++;
    }

    // Small delay between films
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n📊 Download Summary:');
  console.log(`✅ Successfully downloaded: ${successCount} posters`);
  console.log(`❌ Failed: ${errorCount} posters`);
  console.log(`📁 Posters saved to: ${postersDir}/`);

  if (successCount > 0) {
    console.log('\n📝 Next steps:');
    console.log('1. Update graphData_final_with_posters.ts to include poster URLs');
    console.log('2. Commit and push the new poster files');
    console.log('3. Test the application with dynamic poster loading');
  }
}

// Run the script
main().catch(console.error);
