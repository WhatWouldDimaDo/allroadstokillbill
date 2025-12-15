#!/usr/bin/env node

// Script to download posters from the enriched TMDB CSV
const fs = require('fs');
const https = require('https');
const path = require('path');
const csv = require('csv-parser');

const CSV_PATH = '../01_Projects/Tarantino-Graph/research/MASTER-MOVIE-LIST-enriched.csv';
const POSTERS_DIR = './posters';

if (!fs.existsSync(POSTERS_DIR)) {
  fs.mkdirSync(POSTERS_DIR);
  console.log('📁 Created posters directory');
}

let totalFilms = 0;
let filmsWithPosters = 0;
let downloaded = 0;
let errors = 0;

// Rate limiting
let lastRequest = 0;
const MIN_DELAY = 250; // 250ms between requests

function rateLimit() {
  const now = Date.now();
  const elapsed = now - lastRequest;
  if (elapsed < MIN_DELAY) {
    const waitTime = MIN_DELAY - elapsed;
    require('timers/promises').setTimeout(waitTime);
  }
  lastRequest = Date.now();
}

function downloadPoster(url, filename) {
  return new Promise((resolve, reject) => {
    rateLimit();

    const file = fs.createWriteStream(path.join(POSTERS_DIR, filename));

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(path.join(POSTERS_DIR, filename), () => {});
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }

      res.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(POSTERS_DIR, filename), () => {});
      reject(err);
    });
  });
}

async function processFilms() {
  const films = [];

  // Read CSV
  fs.createReadStream(CSV_PATH)
    .pipe(csv())
    .on('data', (data) => {
      totalFilms++;
      if (data.poster_url && data.poster_url !== '') {
        filmsWithPosters++;
        films.push({
          title: data.title,
          year: data.year,
          posterUrl: data.poster_url,
          filename: `${data.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${data.year}.jpg`
        });
      }
    })
    .on('end', async () => {
      console.log(`📊 Found ${totalFilms} films, ${filmsWithPosters} with poster URLs`);
      console.log('🚀 Starting downloads...\n');

      for (let i = 0; i < films.length; i++) {
        const film = films[i];
        const progress = `${i + 1}/${films.length}`;

        console.log(`[${progress}] Downloading: ${film.title} (${film.year})`);

        try {
          await downloadPoster(film.posterUrl, film.filename);
          console.log(`  ✅ Saved: ${film.filename}`);
          downloaded++;
        } catch (error) {
          console.log(`  ❌ Failed: ${error.message}`);
          errors++;
        }
      }

      console.log('\n📊 Download Summary:');
      console.log(`✅ Successfully downloaded: ${downloaded} posters`);
      console.log(`❌ Failed: ${errors} posters`);
      console.log(`📁 Posters saved to: ${POSTERS_DIR}/`);

      // Check existing posters
      const existingPosters = fs.readdirSync('.').filter(file => file.endsWith('.jpg')).length;
      console.log(`📦 Total posters in project: ${existingPosters}`);
    });
}

processFilms().catch(console.error);
