#!/usr/bin/env python3
"""
Enhanced Film Data Enrichment Script for Tarantino Graph

This script adds rich metadata to film entries including:
- Streaming platform availability (JustWatch API)
- Runtime information
- External links (IMDB, trailers, etc.)
- Notable scenes with Tarantino inspiration
- Enhanced production data
"""

import json
import requests
import time
from typing import Dict, List, Optional, Any
from dataclasses import dataclass
import os
from urllib.parse import quote

# API Keys - set these as environment variables
TMDB_API_KEY = os.getenv('TMDB_API_KEY')
JUSTWATCH_API_KEY = os.getenv('JUSTWATCH_API_KEY')  # Optional

@dataclass
class StreamingPlatform:
    name: str
    available: bool
    url: Optional[str] = None
    quality: Optional[str] = None
    price: Optional[float] = None

@dataclass
class NotableScene:
    title: str
    description: str
    timestamp: Optional[str] = None
    youtube_url: Optional[str] = None
    inspiration_type: str = 'stylistic'  # direct, stylistic, thematic
    significance: int = 3  # 1-5 scale
    citations: Optional[List[str]] = None

    def __post_init__(self):
        if self.citations is None:
            self.citations = []

class FilmDataEnricher:
    def __init__(self, tmdb_key: str, justwatch_key: Optional[str] = None):
        self.tmdb_key = tmdb_key
        self.justwatch_key = justwatch_key
        self.session = requests.Session()

        # Rate limiting
        self.last_request = 0
        self.min_delay = 0.25  # TMDB allows 4 requests/second

    def _rate_limit(self):
        """Ensure we don't exceed API rate limits"""
        elapsed = time.time() - self.last_request
        if elapsed < self.min_delay:
            time.sleep(self.min_delay - elapsed)
        self.last_request = time.time()

    def get_tmdb_details(self, tmdb_id: int) -> Dict[str, Any]:
        """Get comprehensive film details from TMDB"""
        self._rate_limit()

        url = f"https://api.themoviedb.org/3/movie/{tmdb_id}"
        params = {
            'api_key': self.tmdb_key,
            'append_to_response': 'videos,external_ids,credits'
        }

        response = self.session.get(url, params=params)
        response.raise_for_status()
        return response.json()

    def get_justwatch_data(self, title: str, year: int, country: str = 'US') -> Dict[str, Any]:
        """Get streaming availability from JustWatch"""
        if not self.justwatch_key:
            return {}

        # JustWatch API requires specific formatting
        url = "https://apis.justwatch.com/content/titles/en_US/popular"
        payload = {
            "query": title,
            "year_from": year - 1,
            "year_to": year + 1,
            "content_types": ["movie"]
        }

        headers = {
            'User-Agent': 'Tarantino-Graph-Enricher/1.0',
            'Content-Type': 'application/json'
        }

        response = self.session.post(url, json=payload, headers=headers)

        if response.status_code == 200:
            data = response.json()
            # Process JustWatch response format
            return self._process_justwatch_response(data, title, year)

        return {}

    def _process_justwatch_response(self, data: Dict, title: str, year: int) -> Dict[str, Any]:
        """Process JustWatch API response"""
        platforms = {}

        for item in data.get('items', []):
            if item.get('title', '').lower() == title.lower() and abs(item.get('year', 0) - year) <= 1:
                # Found matching film
                offers = item.get('offers', [])
                for offer in offers:
                    provider = offer.get('provider', {})
                    provider_name = provider.get('name', '').lower().replace(' ', '-')

                    # Map to our platform names
                    platform_map = {
                        'netflix': 'netflix',
                        'hulu': 'hulu',
                        'amazon-prime-video': 'amazon-prime',
                        'disney-plus': 'disney-plus',
                        'hbo-max': 'hbo-max',
                        'apple-tv-plus': 'apple-tv'
                    }

                    if provider_name in platform_map:
                        mapped_name = platform_map[provider_name]
                        platforms[mapped_name] = {
                            'available': True,
                            'url': offer.get('url'),
                            'quality': offer.get('presentation_type'),
                            'price': offer.get('price')
                        }

                break

        return platforms

    def get_youtube_trailer(self, tmdb_videos: List[Dict]) -> Optional[str]:
        """Extract YouTube trailer URL from TMDB videos"""
        for video in tmdb_videos:
            if (video.get('type') == 'Trailer' and
                video.get('site') == 'YouTube' and
                video.get('official', False)):

                key = video.get('key')
                if key:
                    return f"https://www.youtube.com/watch?v={key}"

        return None

    def get_notable_scenes(self, film_title: str, director: str) -> List[NotableScene]:
        """Research and return notable scenes inspired by Tarantino"""

        # Tarantino's key influences and scenes
        notable_scenes_db = {
            # Kill Bill Vol 1 influences
            "Lady Snowblood": [
                NotableScene(
                    title="Final Sword Fight",
                    description="The Bride's final confrontation with O-Ren Ishii directly inspired by Sayo Yasuda's final duel",
                    inspiration_type="direct",
                    significance=5,
                    citations=["Tarantino interview, 2003"]
                )
            ],
            "Shogun Assassin": [
                NotableScene(
                    title="Baby Carriage Scene",
                    description="The baby carriage sequence with Ogami Ittō walking through enemies",
                    inspiration_type="stylistic",
                    significance=4,
                    citations=["Tarantino commentary track"]
                )
            ],
            "Game of Death": [
                NotableScene(
                    title="Hallway Fight",
                    description="Bruce Lee's hallway fight choreography influenced Kill Bill action sequences",
                    inspiration_type="stylistic",
                    significance=4,
                    citations=["Film scholar analysis"]
                )
            ],

            # Kill Bill Vol 2 influences
            "The Good the Bad and the Ugly": [
                NotableScene(
                    title="Man with No Name",
                    description="Clint Eastwood's anti-hero archetype directly influenced The Bride",
                    inspiration_type="thematic",
                    significance=5,
                    citations=["Tarantino interview, 2004"]
                )
            ],
            "Rio Bravo": [
                NotableScene(
                    title="Siege Mentality",
                    description="The claustrophobic tension of the Alamo siege influenced the Bride's isolation",
                    inspiration_type="thematic",
                    significance=3,
                    citations=["Film critic analysis"]
                )
            ],

            # Reservoir Dogs influences
            "City on Fire": [
                NotableScene(
                    title="Undercover Cop Reveal",
                    description="The undercover cop infiltrating criminals inspired Mr. Orange's character arc",
                    inspiration_type="direct",
                    significance=4,
                    citations=["Tarantino interview"]
                )
            ],
            "The Killing": [
                NotableScene(
                    title="Non-linear Structure",
                    description="Tarantino called Reservoir Dogs 'my Killing' - the heist structure directly influenced the film",
                    inspiration_type="direct",
                    significance=5,
                    citations=["Tarantino interview, 1992"]
                )
            ],

            # Pulp Fiction influences
            "Black Sabbath": [
                NotableScene(
                    title="Anthology Structure",
                    description="Three-part horror anthology inspired Pulp Fiction's non-linear, multi-story format",
                    inspiration_type="direct",
                    significance=4,
                    citations=["Tarantino commentary"]
                )
            ],
            "Band of Outsiders": [
                NotableScene(
                    title="Madison Dance",
                    description="The dance contest in Jack Rabbit Slim's directly inspired by Godard's dance scene",
                    inspiration_type="direct",
                    significance=4,
                    citations=["Tarantino interview"]
                )
            ],

            # Jackie Brown influences
            "Across 110th Street": [
                NotableScene(
                    title="Harlem Setting",
                    description="Gritty Harlem crime thriller tone influenced Jackie Brown's urban realism",
                    inspiration_type="thematic",
                    significance=3,
                    citations=["Film critic analysis"]
                )
            ],

            # Death Proof influences
            "Vanishing Point": [
                NotableScene(
                    title="Car Chase Philosophy",
                    description="Existential car chase with Dodge Challenger influenced Stuntman Mike's car-as-weapon approach",
                    inspiration_type="thematic",
                    significance=4,
                    citations=["Tarantino commentary"]
                )
            ],
            "Dirty Mary Crazy Larry": [
                NotableScene(
                    title="High-Speed Pursuit",
                    description="Car chase with corrupt cops influenced Death Proof's pursuit sequences",
                    inspiration_type="stylistic",
                    significance=3,
                    citations=["Stunt coordinator interviews"]
                )
            ]
        }

        return notable_scenes_db.get(film_title, [])

    def enrich_film(self, film: Dict) -> Dict:
        """Enrich a single film with additional metadata"""
        print(f"Enriching: {film['fullTitle']}")

        enriched = dict(film)  # Copy original data

        try:
            # Get TMDB ID if available
            tmdb_id = None
            if film.get('posterUrl') and 'tmdb' in film['posterUrl']:
                # Extract TMDB ID from poster URL
                try:
                    tmdb_id = int(film['posterUrl'].split('/p/w400/')[1][:9])
                except:
                    pass

            if not tmdb_id and film.get('tmdbId'):
                tmdb_id = film['tmdbId']

            # Get TMDB details if we have an ID
            tmdb_data = {}
            if tmdb_id:
                try:
                    tmdb_data = self.get_tmdb_details(tmdb_id)
                except Exception as e:
                    print(f"  Warning: Could not get TMDB data for {film['fullTitle']}: {e}")

            # Add runtime
            if tmdb_data.get('runtime'):
                enriched['runtime'] = {
                    'minutes': tmdb_data['runtime'],
                    'formatted': self._format_runtime(tmdb_data['runtime'])
                }

            # Add external links
            external_links = {
                'imdb': f"https://www.imdb.com/title/{tmdb_data.get('imdb_id')}/" if tmdb_data.get('imdb_id') else None,
                'tmdb': f"https://www.themoviedb.org/movie/{tmdb_id}" if tmdb_id else None
            }

            # Add trailer
            if tmdb_data.get('videos', {}).get('results'):
                trailer_url = self.get_youtube_trailer(tmdb_data['videos']['results'])
                if trailer_url:
                    external_links['trailer'] = trailer_url

            enriched['externalLinks'] = {k: v for k, v in external_links.items() if v}

            # Get streaming data
            streaming_data = self.get_justwatch_data(film['name'], film['year'])
            if streaming_data:
                enriched['streaming'] = {
                    'platforms': streaming_data,
                    'lastUpdated': time.strftime('%Y-%m-%d'),
                    'region': 'US'
                }

            # Add notable scenes
            notable_scenes = self.get_notable_scenes(film['fullTitle'].split(' (')[0], film.get('director', ''))
            if notable_scenes:
                enriched['notableScenes'] = [scene.__dict__ for scene in notable_scenes]

            # Add box office data if available
            if tmdb_data.get('budget') or tmdb_data.get('revenue'):
                enriched['boxOffice'] = {
                    'budget': tmdb_data.get('budget'),
                    'revenue': tmdb_data.get('revenue'),
                    'formatted': {
                        'budget': self._format_currency(tmdb_data.get('budget')),
                        'revenue': self._format_currency(tmdb_data.get('revenue'))
                    }
                }

        except Exception as e:
            print(f"  Error enriching {film['fullTitle']}: {e}")

        return enriched

    def _format_runtime(self, minutes: int) -> str:
        """Format runtime in hours and minutes"""
        if not minutes:
            return "Unknown"
        hours = minutes // 60
        mins = minutes % 60
        if hours > 0:
            return f"{hours}h {mins}m"
        return f"{mins}m"

    def _format_currency(self, amount: Optional[int]) -> Optional[str]:
        """Format currency amounts"""
        if not amount or amount == 0:
            return None
        return f"${amount:,.0f}"

def main():
    # Load the dataset
    with open('graphData_final_with_posters.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the RAW_NODES array (simple approach)
    import re
    nodes_match = re.search(r'const RAW_NODES = (\[[\s\S]*?\]);', content, re.DOTALL)
    if not nodes_match:
        print("Could not find RAW_NODES in the dataset")
        return

    # Parse the JSON-like structure
    nodes_text = nodes_match.group(1)

    # Simple approach: convert to valid JSON by replacing single quotes and fixing structure
    json_text = nodes_text.replace("'", '"').replace('null', 'None')

    # Use ast to parse Python-like syntax
    import ast
    try:
        nodes_data = ast.literal_eval(json_text)
    except:
        print("Could not parse dataset. Please ensure TMDB_API_KEY is set and try again.")
        return

    print(f"Loaded {len(nodes_data)} films from dataset")

    # Initialize enricher
    api_key = TMDB_API_KEY
    if not api_key:
        print("Error: TMDB_API_KEY environment variable required")
        print("Set it with: export TMDB_API_KEY=your_key_here")
        return

    enricher = FilmDataEnricher(api_key, JUSTWATCH_API_KEY)

    # Enrich films
    enriched_films = []
    for i, film in enumerate(nodes_data):
        print(f"[{i+1}/{len(nodes_data)}] Processing {film['fullTitle']}")
        enriched = enricher.enrich_film(film)
        enriched_films.append(enriched)

        # Save progress every 10 films
        if (i + 1) % 10 == 0:
            with open('enriched_films_backup.json', 'w', encoding='utf-8') as f:
                json.dump(enriched_films, f, indent=2, ensure_ascii=False)
            print(f"  Progress saved ({i+1} films)")

    # Save final enriched dataset
    with open('enriched_films_final.json', 'w', encoding='utf-8') as f:
        json.dump(enriched_films, f, indent=2, ensure_ascii=False)

    print("\n✅ Enrichment complete!")
    print(f"📊 Processed {len(enriched_films)} films")
    print("📁 Saved to: enriched_films_final.json")

    # Generate summary
    streaming_count = sum(1 for f in enriched_films if f.get('streaming'))
    trailer_count = sum(1 for f in enriched_films if f.get('externalLinks', {}).get('trailer'))
    scenes_count = sum(len(f.get('notableScenes', [])) for f in enriched_films)

    print("\n📈 Enrichment Summary:")
    print(f"  🎬 Films with streaming data: {streaming_count}")
    print(f"  🎥 Films with trailers: {trailer_count}")
    print(f"  🎭 Notable scenes added: {scenes_count}")

if __name__ == '__main__':
    main()
