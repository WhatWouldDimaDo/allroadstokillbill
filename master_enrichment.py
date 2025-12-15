#!/usr/bin/env python3
"""
Master Enrichment Script for Tarantino Graph
==============================================
Downloads posters and enriches all film data via TMDB API.
Zero LLM tokens - pure API calls.

Features:
- Downloads all missing posters (w500 quality)
- Adds runtime, ratings, IMDB IDs, trailers
- Rate limited (respects TMDB 4 req/sec)
- Caching to avoid re-queries
- Updates graphData_final_with_posters.ts

Usage:
    python3 master_enrichment.py

Cost: $0 (TMDB API is free)
Time: ~5-10 minutes for 257 films
"""

import os
import json
import re
import time
import requests
import concurrent.futures
from pathlib import Path
from typing import Dict, Optional, List, Any
from urllib.parse import quote
import hashlib

# Configuration
TMDB_API_KEY = os.getenv("TMDB_API_KEY", "7875c0f1dcca2cf2ac6546034122f026")
TMDB_BASE = "https://api.themoviedb.org/3"
POSTER_BASE = "https://image.tmdb.org/t/p/w500"

SCRIPT_DIR = Path(__file__).parent
DATA_FILE = SCRIPT_DIR / "graphData_final_with_posters.ts"
POSTERS_DIR = SCRIPT_DIR / "posters"
CACHE_FILE = SCRIPT_DIR / "tmdb_cache.json"
OUTPUT_FILE = SCRIPT_DIR / "graphData_enriched.ts"

# Rate limiting
REQUEST_DELAY = 0.26  # 4 requests per second max
last_request_time = 0

def rate_limit():
    """Ensure we don't exceed TMDB rate limits."""
    global last_request_time
    elapsed = time.time() - last_request_time
    if elapsed < REQUEST_DELAY:
        time.sleep(REQUEST_DELAY - elapsed)
    last_request_time = time.time()

def load_cache() -> Dict:
    """Load cached TMDB results."""
    if CACHE_FILE.exists():
        try:
            with open(CACHE_FILE, "r") as f:
                return json.load(f)
        except:
            return {}
    return {}

def save_cache(cache: Dict):
    """Save cache to file."""
    with open(CACHE_FILE, "w") as f:
        json.dump(cache, f, indent=2)

def parse_dataset() -> List[Dict]:
    """Parse the TypeScript dataset file and extract film data."""
    print("📖 Parsing dataset file...")

    with open(DATA_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # Find RAW_NODES array
    match = re.search(r'const RAW_NODES = (\[[\s\S]*?\]);', content)
    if not match:
        raise ValueError("Could not find RAW_NODES in dataset")

    # Parse the array (it's valid JSON-like)
    nodes_str = match.group(1)

    # Convert to valid JSON
    # Replace single quotes with double quotes in a smart way
    # First, let's extract each node object
    films = []

    # Split by opening braces for each node
    node_pattern = r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}'
    node_matches = re.findall(node_pattern, nodes_str)

    for node_str in node_matches:
        try:
            # Extract key fields using regex
            film = {}

            # ID
            id_match = re.search(r'"id":\s*"([^"]+)"', node_str)
            if id_match:
                film['id'] = id_match.group(1)

            # Name
            name_match = re.search(r'"name":\s*"([^"]+)"', node_str)
            if name_match:
                film['name'] = name_match.group(1)

            # Full title
            title_match = re.search(r'"fullTitle":\s*"([^"]+)"', node_str)
            if title_match:
                film['fullTitle'] = title_match.group(1)

            # Year
            year_match = re.search(r'"year":\s*(\d+)', node_str)
            if year_match:
                film['year'] = int(year_match.group(1))

            # Director
            director_match = re.search(r'"director":\s*"([^"]+)"', node_str)
            if director_match:
                film['director'] = director_match.group(1)

            # Country
            country_match = re.search(r'"country":\s*"([^"]+)"', node_str)
            if country_match:
                film['country'] = country_match.group(1)

            # Poster URL
            poster_match = re.search(r'"posterUrl":\s*"([^"]*)"', node_str)
            if poster_match:
                film['posterUrl'] = poster_match.group(1)

            # Genres (array)
            genres_match = re.search(r'"genres":\s*\[([^\]]*)\]', node_str)
            if genres_match:
                genres_str = genres_match.group(1)
                film['genres'] = re.findall(r'"([^"]+)"', genres_str)

            # Subclouds (array)
            subclouds_match = re.search(r'"subclouds":\s*\[([^\]]*)\]', node_str)
            if subclouds_match:
                subclouds_str = subclouds_match.group(1)
                film['subclouds'] = re.findall(r'"([^"]+)"', subclouds_str)

            # Color
            color_match = re.search(r'"color":\s*"([^"]+)"', node_str)
            if color_match:
                film['color'] = color_match.group(1)

            # Influence notes
            notes_match = re.search(r'"influenceNotes":\s*"([^"]*)"', node_str)
            if notes_match:
                film['influenceNotes'] = notes_match.group(1)

            # Influenced by (array)
            by_match = re.search(r'"influencedBy":\s*\[([^\]]*)\]', node_str)
            if by_match:
                by_str = by_match.group(1)
                film['influencedBy'] = re.findall(r'"([^"]+)"', by_str)

            # Influences (array)
            inf_match = re.search(r'"influences":\s*\[([^\]]*)\]', node_str)
            if inf_match:
                inf_str = inf_match.group(1)
                film['influences'] = re.findall(r'"([^"]+)"', inf_str)

            # Influence count
            count_match = re.search(r'"influenceCount":\s*(\d+)', node_str)
            if count_match:
                film['influenceCount'] = int(count_match.group(1))

            # Size
            size_match = re.search(r'"size":\s*(\d+)', node_str)
            if size_match:
                film['size'] = int(size_match.group(1))

            if film.get('id') and film.get('name'):
                films.append(film)

        except Exception as e:
            print(f"  ⚠️ Error parsing node: {e}")
            continue

    print(f"✅ Parsed {len(films)} films from dataset")
    return films

def search_tmdb(title: str, year: int, cache: Dict) -> Optional[Dict]:
    """Search TMDB for a movie and get full details."""
    cache_key = f"{title}_{year}"

    if cache_key in cache and cache[cache_key].get('tmdb_id'):
        print(f"  📦 [CACHED] {title} ({year})")
        return cache[cache_key]

    rate_limit()

    try:
        # Search for movie
        response = requests.get(
            f"{TMDB_BASE}/search/movie",
            params={
                "api_key": TMDB_API_KEY,
                "query": title,
                "year": year,
                "include_adult": False
            },
            timeout=10
        )

        if response.status_code != 200:
            print(f"  ❌ Search API error {response.status_code}: {title}")
            return None

        results = response.json().get("results", [])

        if not results:
            # Try without year
            rate_limit()
            response = requests.get(
                f"{TMDB_BASE}/search/movie",
                params={
                    "api_key": TMDB_API_KEY,
                    "query": title,
                    "include_adult": False
                },
                timeout=10
            )
            results = response.json().get("results", [])

            if not results:
                print(f"  ❌ Not found: {title} ({year})")
                cache[cache_key] = {"error": "not_found"}
                return None

        movie = results[0]
        tmdb_id = movie.get("id")

        # Get full movie details including videos and external IDs
        rate_limit()
        details_response = requests.get(
            f"{TMDB_BASE}/movie/{tmdb_id}",
            params={
                "api_key": TMDB_API_KEY,
                "append_to_response": "videos,external_ids"
            },
            timeout=10
        )

        if details_response.status_code != 200:
            print(f"  ⚠️ Details API error {details_response.status_code}: {title}")
            details = {}
        else:
            details = details_response.json()

        # Extract trailer
        trailer_url = None
        videos = details.get("videos", {}).get("results", [])
        for video in videos:
            if video.get("type") == "Trailer" and video.get("site") == "YouTube":
                trailer_url = f"https://www.youtube.com/watch?v={video.get('key')}"
                break

        # Build enriched data
        tmdb_data = {
            "tmdb_id": tmdb_id,
            "poster_path": movie.get("poster_path"),
            "poster_url": f"https://image.tmdb.org/t/p/w400{movie['poster_path']}" if movie.get("poster_path") else "",
            "rating": movie.get("vote_average"),
            "vote_count": movie.get("vote_count"),
            "runtime": details.get("runtime"),
            "overview": (movie.get("overview") or "")[:300],
            "imdb_id": details.get("external_ids", {}).get("imdb_id"),
            "trailer_url": trailer_url,
            "tagline": details.get("tagline"),
            "budget": details.get("budget"),
            "revenue": details.get("revenue"),
        }

        # Cache it
        cache[cache_key] = tmdb_data

        print(f"  ✅ {title} ({year}) - TMDB ID: {tmdb_id}")
        return tmdb_data

    except requests.exceptions.RequestException as e:
        print(f"  ❌ Request error for {title}: {e}")
        return None
    except Exception as e:
        print(f"  ❌ Unexpected error for {title}: {e}")
        return None

def download_poster(poster_path: str, film_id: str) -> bool:
    """Download a poster from TMDB."""
    if not poster_path:
        return False

    filename = POSTERS_DIR / f"{film_id}.jpg"

    if filename.exists():
        return True  # Already downloaded

    try:
        url = f"{POSTER_BASE}{poster_path}"
        response = requests.get(url, timeout=30)

        if response.status_code == 200:
            with open(filename, "wb") as f:
                f.write(response.content)
            return True
        else:
            return False
    except Exception as e:
        print(f"  ⚠️ Download error: {e}")
        return False

def generate_enriched_typescript(films: List[Dict]) -> str:
    """Generate the updated TypeScript file with enriched data."""

    # Read the original file to preserve the structure
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        original = f.read()

    # Extract the color palette and links
    color_match = re.search(r'export const COLOR_PALETTE: ColorPalette = ({[\s\S]*?});', original)
    links_match = re.search(r'const RAW_LINKS = (\[[\s\S]*?\]);', original)

    color_palette = color_match.group(1) if color_match else "{}"
    raw_links = links_match.group(1) if links_match else "[]"

    # Build the nodes array
    nodes_lines = []
    for film in films:
        node = {
            "id": film.get("id", ""),
            "name": film.get("name", ""),
            "fullTitle": film.get("fullTitle", ""),
            "year": film.get("year", 0),
            "director": film.get("director", ""),
            "country": film.get("country", ""),
            "genres": film.get("genres", []),
            "subclouds": film.get("subclouds", []),
            "posterUrl": film.get("posterUrl", ""),
            "color": film.get("color", "#7F8C8D"),
            "influenceNotes": film.get("influenceNotes", ""),
            "influencedBy": film.get("influencedBy", []),
            "influences": film.get("influences", []),
            "influenceCount": film.get("influenceCount", 0),
            "size": film.get("size", 10),
        }

        # Add enriched fields if available
        if film.get("runtime"):
            node["runtime"] = film["runtime"]
        if film.get("rating"):
            node["rating"] = film["rating"]
        if film.get("imdb_id"):
            node["imdbId"] = film["imdb_id"]
        if film.get("trailer_url"):
            node["trailerUrl"] = film["trailer_url"]
        if film.get("overview"):
            node["overview"] = film["overview"]
        if film.get("tmdb_id"):
            node["tmdbId"] = film["tmdb_id"]

        nodes_lines.append(json.dumps(node, indent=2))

    nodes_str = ",\n".join(nodes_lines)

    # Build the output file
    output = f'''import {{ GraphData, ColorPalette }} from './types';

export const COLOR_PALETTE: ColorPalette = {color_palette};

const RAW_NODES = [
{nodes_str}
];

const RAW_LINKS = {raw_links};

// Process nodes to ensure all required fields
const processedNodes = RAW_NODES.map(node => ({{
  ...node,
  genres: node.genres || [],
  subclouds: node.subclouds || [],
  influencedBy: node.influencedBy || [],
  influences: node.influences || [],
  influenceCount: node.influenceCount || 0,
  size: node.size || 10
}}));

// Process links to match node IDs
const processedLinks = RAW_LINKS.map(link => ({{
  source: link.source,
  target: link.target,
  type: link.type || 'influence'
}}));

export const INITIAL_GRAPH_DATA: GraphData = {{
  nodes: processedNodes,
  links: processedLinks
}};

export default INITIAL_GRAPH_DATA;
'''

    return output

def main():
    print("=" * 60)
    print("🎬 TARANTINO GRAPH - MASTER ENRICHMENT SCRIPT")
    print("=" * 60)
    print(f"TMDB API Key: {'*' * 20}...")
    print(f"Data file: {DATA_FILE}")
    print(f"Posters dir: {POSTERS_DIR}")
    print("=" * 60)

    # Ensure posters directory exists
    POSTERS_DIR.mkdir(exist_ok=True)

    # Load cache
    cache = load_cache()
    print(f"📦 Cache has {len(cache)} entries")

    # Parse dataset
    films = parse_dataset()

    # Enrich each film
    print(f"\n🔄 Enriching {len(films)} films via TMDB API...")
    print("-" * 60)

    enriched_count = 0
    poster_count = 0
    trailer_count = 0

    for i, film in enumerate(films):
        progress = f"[{i+1}/{len(films)}]"
        title = film.get("name", "Unknown")
        year = film.get("year", 0)

        print(f"\n{progress} {title} ({year})")

        # Search TMDB
        tmdb_data = search_tmdb(title, year, cache)

        if tmdb_data and tmdb_data.get("tmdb_id"):
            enriched_count += 1

            # Update film data
            if tmdb_data.get("poster_url"):
                film["posterUrl"] = tmdb_data["poster_url"]
            if tmdb_data.get("runtime"):
                film["runtime"] = tmdb_data["runtime"]
            if tmdb_data.get("rating"):
                film["rating"] = round(tmdb_data["rating"], 1)
            if tmdb_data.get("imdb_id"):
                film["imdb_id"] = tmdb_data["imdb_id"]
            if tmdb_data.get("trailer_url"):
                film["trailer_url"] = tmdb_data["trailer_url"]
                trailer_count += 1
            if tmdb_data.get("overview"):
                film["overview"] = tmdb_data["overview"]
            if tmdb_data.get("tmdb_id"):
                film["tmdb_id"] = tmdb_data["tmdb_id"]

            # Download poster
            if tmdb_data.get("poster_path"):
                if download_poster(tmdb_data["poster_path"], film["id"]):
                    poster_count += 1

        # Save cache periodically
        if (i + 1) % 20 == 0:
            save_cache(cache)
            print(f"  💾 Cache saved ({len(cache)} entries)")

    # Final cache save
    save_cache(cache)

    # Generate enriched TypeScript
    print("\n" + "=" * 60)
    print("📝 Generating enriched TypeScript file...")

    enriched_ts = generate_enriched_typescript(films)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(enriched_ts)

    print(f"✅ Written to: {OUTPUT_FILE}")

    # Summary
    print("\n" + "=" * 60)
    print("📊 ENRICHMENT SUMMARY")
    print("=" * 60)
    print(f"Total films: {len(films)}")
    print(f"✅ Enriched: {enriched_count}")
    print(f"🖼️  Posters downloaded: {poster_count}")
    print(f"🎥 Trailers found: {trailer_count}")
    print(f"📦 Cache entries: {len(cache)}")
    print("=" * 60)

    print("\n📝 NEXT STEPS:")
    print("1. Review graphData_enriched.ts")
    print("2. If looks good, replace graphData_final_with_posters.ts")
    print("3. Run: npm run build")
    print("4. Commit and push to GitHub")
    print("5. Vercel will auto-deploy")

if __name__ == "__main__":
    main()
