// Script to analyze missing posters in the Tarantino Graph dataset
const fs = require('fs');
const path = require('path');

// Read the dataset
const dataPath = './graphData_final_with_posters.ts';
let dataContent;

try {
  dataContent = fs.readFileSync(dataPath, 'utf8');
} catch (error) {
  console.error('Error reading dataset file:', error);
  process.exit(1);
}

// Extract the data (simple approach - find the export)
const dataMatch = dataContent.match(/export const INITIAL_GRAPH_DATA = ({[\s\S]*?});/);
if (!dataMatch) {
  console.error('Could not find INITIAL_GRAPH_DATA in the file');
  process.exit(1);
}

// Parse the data (this is a simplified approach)
let films = [];
try {
  // Extract just the nodes array
  const nodesMatch = dataMatch[1].match(/nodes: (\[[\s\S]*?\])/);
  if (nodesMatch) {
    // Very basic parsing - look for posterUrl properties
    const nodesText = nodesMatch[1];
    const posterUrlMatches = [...nodesText.matchAll(/posterUrl:\s*["']([^"']*)["']/g)];

    films = posterUrlMatches.map(match => ({
      posterUrl: match[1]
    }));
  }
} catch (error) {
  console.error('Error parsing dataset:', error);
  process.exit(1);
}

// Alternative approach: count films with and without posterUrl
const withPosters = dataContent.match(/posterUrl:\s*["'][^"']+["']/g) || [];
const withoutPosters = dataContent.match(/posterUrl:\s*(null|undefined)/g) || [];

// Count total films (rough estimate)
const totalFilms = dataContent.split('posterUrl:').length - 1;

// Get list of poster files
const posterFiles = fs.readdirSync('.').filter(file => file.endsWith('.jpg'));

console.log('=== POSTER ANALYSIS ===');
console.log('Total films in dataset:', totalFilms);
console.log('Films with posterUrl:', withPosters.length);
console.log('Films without posterUrl:', withoutPosters.length);
console.log('Poster files found:', posterFiles.length);
console.log('Coverage:', ((withPosters.length / totalFilms) * 100).toFixed(1) + '%');

// Extract film titles without posters (rough approach)
const filmBlocks = dataContent.split(/{\s*id:/);
const missingPosters = [];

for (let i = 1; i < filmBlocks.length; i++) {
  const block = filmBlocks[i];
  if (block.includes('posterUrl: null') || block.includes('posterUrl: undefined') ||
      (!block.includes('posterUrl:') && block.includes('fullTitle:'))) {

    // Extract title
    const titleMatch = block.match(/fullTitle:\s*["']([^"']+)["']/);
    const yearMatch = block.match(/year:\s*(\d+)/);

    if (titleMatch) {
      missingPosters.push({
        title: titleMatch[1],
        year: yearMatch ? yearMatch[1] : 'Unknown'
      });
    }
  }
}

console.log('\n=== FILMS MISSING POSTERS ===');
console.log('Count:', missingPosters.length);

if (missingPosters.length > 0) {
  console.log('\nFirst 20 missing posters:');
  missingPosters.slice(0, 20).forEach((film, index) => {
    console.log(`${index + 1}. ${film.title} (${film.year})`);
  });

  // Save full list to file
  const output = missingPosters.map((film, index) =>
    `${index + 1}. ${film.title} (${film.year})`
  ).join('\n');

  fs.writeFileSync('missing_posters_list.txt', output);
  console.log('\nFull list saved to: missing_posters_list.txt');
}
