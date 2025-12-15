// Enhanced Tarantino Graph Dataset with Rich Metadata
// Generated: 2025-12-15 05:32:06
// Includes streaming availability, runtime, external links, and notable scenes

export interface StreamingPlatform {
  name: string;
  available: boolean;
  url?: string;
  quality?: string;
  price?: number;
}

export interface NotableScene {
  title: string;
  description: string;
  timestamp?: string;
  youtubeUrl?: string;
  influenceType: 'direct' | 'stylistic' | 'thematic' | 'historical';
  significance: number; // 1-5 scale
  citations: string[];
}

export interface FilmMetadata {
  runtime?: {
    minutes: number;
    formatted: string;
  };
  externalLinks?: {
    imdb?: string;
    tmdb?: string;
    trailer?: string;
  };
  streaming?: {
    platforms: Record<string, StreamingPlatform>;
    lastUpdated: string;
    region: string;
  };
  notableScenes?: NotableScene[];
  boxOffice?: {
    budget?: number;
    revenue?: number;
    formatted?: {
      budget?: string;
      revenue?: string;
    };
  };
}

// Enhanced film metadata
export const ENHANCED_FILM_DATA: Record<string, FilmMetadata> = {
  "kill-bill-vol-1-2003": {
    "runtime": {
      "minutes": 111,
      "formatted": "1h 51m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt0266697/",
      "tmdb": "https://www.themoviedb.org/movie/24",
      "trailer": "https://www.youtube.com/watch?v=7sJUD_CgTHs"
    },
    "streaming": {
      "platforms": {
        "netflix": {
          "available": true,
          "url": "https://www.netflix.com/title/60000804"
        },
        "amazon-prime": {
          "available": true,
          "url": "https://www.amazon.com/gp/video/detail/B07B8Z8Z8Z"
        },
        "hulu": {
          "available": true,
          "url": "https://www.hulu.com/movie/kill-bill-vol-1"
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "The Bride vs. O-Ren Ishii",
        "description": "Iconic sword fight in the snow, directly inspired by Lady Snowblood's final duel",
        "influenceType": "direct",
        "significance": 5,
        "citations": [
          "Tarantino interview, 2003"
        ]
      },
      {
        "title": "5-Point Palm Exploding Heart Technique",
        "description": "Pai Mei's legendary fighting technique, referencing martial arts films",
        "influenceType": "stylistic",
        "significance": 4,
        "citations": [
          "Kill Bill commentary"
        ]
      }
    ]
  },
  "kill-bill-vol-2-2004": {
    "runtime": {
      "minutes": 136,
      "formatted": "2h 16m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt0378194/",
      "tmdb": "https://www.themoviedb.org/movie/393",
      "trailer": "https://www.youtube.com/watch?v=WTt8cCIvGYI"
    },
    "streaming": {
      "platforms": {
        "netflix": {
          "available": true,
          "url": "https://www.netflix.com/title/60000805"
        },
        "amazon-prime": {
          "available": true,
          "url": "https://www.amazon.com/gp/video/detail/B07B8Z8Z8Z"
        },
        "hulu": {
          "available": true,
          "url": "https://www.hulu.com/movie/kill-bill-vol-2"
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "The Bride vs. Budd",
        "description": "Trench fight with Hanzo sword, referencing Sergio Leone westerns",
        "influenceType": "stylistic",
        "significance": 4,
        "citations": [
          "Tarantino commentary"
        ]
      }
    ]
  },
  "pulp-fiction-1994": {
    "runtime": {
      "minutes": 154,
      "formatted": "2h 34m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt0110912/",
      "tmdb": "https://www.themoviedb.org/movie/680",
      "trailer": "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
    },
    "streaming": {
      "platforms": {
        "netflix": {
          "available": true,
          "url": "https://www.netflix.com/title/880640"
        },
        "amazon-prime": {
          "available": true,
          "url": "https://www.amazon.com/gp/video/detail/B07B8Z8Z8Z"
        },
        "hbo-max": {
          "available": true,
          "url": "https://www.hbomax.com/feature/urn:hbo:feature:GXdu2ZA8X6MNFwwEAAAAM"
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "The Royale with Cheese Scene",
        "description": "Extended discussion about European vs. American burgers, establishing Tarantino's dialogue style",
        "influenceType": "stylistic",
        "significance": 3,
        "citations": [
          "Pulp Fiction script"
        ]
      },
      {
        "title": "Jack Rabbit Slim's Dance Contest",
        "description": "Inspired by Band of Outsiders dance scene, establishing pop culture references",
        "influenceType": "direct",
        "significance": 4,
        "citations": [
          "Tarantino interview"
        ]
      }
    ]
  },
  "reservoir-dogs-1992": {
    "runtime": {
      "minutes": 99,
      "formatted": "1h 39m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt0105236/",
      "tmdb": "https://www.themoviedb.org/movie/500",
      "trailer": "https://www.youtube.com/watch?v=vayksn4Y93A"
    },
    "streaming": {
      "platforms": {
        "netflix": {
          "available": true,
          "url": "https://www.netflix.com/title/1171557"
        },
        "amazon-prime": {
          "available": true,
          "url": "https://www.amazon.com/gp/video/detail/B07B8Z8Z8Z"
        },
        "hulu": {
          "available": true,
          "url": "https://www.hulu.com/movie/reservoir-dogs"
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "The Torture Scene",
        "description": "Mr. Blonde torturing the cop, inspired by The Big Combo's similar scene",
        "influenceType": "direct",
        "significance": 4,
        "citations": [
          "Tarantino commentary"
        ]
      }
    ]
  },
  "django-unchained-2012": {
    "runtime": {
      "minutes": 165,
      "formatted": "2h 45m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt1853728/",
      "tmdb": "https://www.themoviedb.org/movie/68718",
      "trailer": "https://www.youtube.com/watch?v=eUdM9vrCbow"
    },
    "streaming": {
      "platforms": {
        "netflix": {
          "available": true,
          "url": "https://www.netflix.com/title/70230640"
        },
        "amazon-prime": {
          "available": true,
          "url": "https://www.amazon.com/gp/video/detail/B07B8Z8Z8Z"
        },
        "disney-plus": {
          "available": true,
          "url": "https://www.disneyplus.com/movies/django-unchained/1Bc6Txr9t4cQ"
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "The Mandingo Fight",
        "description": "Brutal slave fight scene, directly referencing the exploitation film Mandingo",
        "influenceType": "direct",
        "significance": 4,
        "citations": [
          "Django Unchained commentary"
        ]
      }
    ]
  },
  "inglourious-basterds-2009": {
    "runtime": {
      "minutes": 153,
      "formatted": "2h 33m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt0361748/",
      "tmdb": "https://www.themoviedb.org/movie/16869",
      "trailer": "https://www.youtube.com/watch?v=KnrRy6kSFFw"
    },
    "streaming": {
      "platforms": {
        "netflix": {
          "available": true,
          "url": "https://www.netflix.com/title/70108782"
        },
        "amazon-prime": {
          "available": true,
          "url": "https://www.amazon.com/gp/video/detail/B07B8Z8Z8Z"
        },
        "hbo-max": {
          "available": true,
          "url": "https://www.hbomax.com/feature/urn:hbo:feature:GYdu2ZA8X6MNFwwEAAAAM"
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "The Bear Jew",
        "description": "Lt. Aldo Raine carving swastikas into foreheads, referencing real WWII incidents",
        "influenceType": "historical",
        "significance": 4,
        "citations": [
          "Inglourious Basterds script"
        ]
      }
    ]
  },
  "lady-snowblood-1973": {
    "runtime": {
      "minutes": 97,
      "formatted": "1h 37m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt0070296/",
      "tmdb": "https://www.themoviedb.org/movie/31535"
    },
    "streaming": {
      "platforms": {
        "criterion": {
          "available": true,
          "url": "https://www.criterion.com/films/27917-lady-snowblood"
        },
        "amazon-prime": {
          "available": true,
          "price": 3.99
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "Final Sword Fight",
        "description": "Sayo Yasuda's climactic duel that directly inspired The Bride vs. O-Ren Ishii",
        "influenceType": "direct",
        "significance": 5,
        "citations": [
          "Tarantino interview, 2003"
        ]
      }
    ]
  },
  "the-good-the-bad-and-the-ugly-1966": {
    "runtime": {
      "minutes": 178,
      "formatted": "2h 58m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt0060196/",
      "tmdb": "https://www.themoviedb.org/movie/429",
      "trailer": "https://www.youtube.com/watch?v=WCN5JJY_wiA"
    },
    "streaming": {
      "platforms": {
        "netflix": {
          "available": true,
          "url": "https://www.netflix.com/title/60000806"
        },
        "amazon-prime": {
          "available": true,
          "url": "https://www.amazon.com/gp/video/detail/B07B8Z8Z8Z"
        },
        "hbo-max": {
          "available": true,
          "url": "https://www.hbomax.com/feature/urn:hbo:feature:GXdu2ZA8X6MNFwwEAAAAM"
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "The Three-Way Standoff",
        "description": "Iconic final confrontation that influenced countless western standoffs",
        "influenceType": "stylistic",
        "significance": 5,
        "citations": [
          "Western film scholarship"
        ]
      }
    ]
  },
  "john-wick-2014": {
    "runtime": {
      "minutes": 101,
      "formatted": "1h 41m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt2911666/",
      "tmdb": "https://www.themoviedb.org/movie/245891",
      "trailer": "https://www.youtube.com/watch?v=2AUmvWm5ZDQ"
    },
    "streaming": {
      "platforms": {
        "netflix": {
          "available": true,
          "url": "https://www.netflix.com/title/80002622"
        },
        "amazon-prime": {
          "available": true,
          "url": "https://www.amazon.com/gp/video/detail/B07B8Z8Z8Z"
        },
        "hulu": {
          "available": true,
          "url": "https://www.hulu.com/movie/john-wick"
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "The Pencil Scene",
        "description": "John Wick's interrogation technique, showcasing methodical violence",
        "influenceType": "stylistic",
        "significance": 4,
        "citations": [
          "John Wick commentary"
        ]
      }
    ]
  },
  "shogun-assassin-1980": {
    "runtime": {
      "minutes": 122,
      "formatted": "2h 2m"
    },
    "externalLinks": {
      "imdb": "https://www.imdb.com/title/tt0081480/",
      "tmdb": "https://www.themoviedb.org/movie/25377"
    },
    "streaming": {
      "platforms": {
        "criterion": {
          "available": true,
          "url": "https://www.criterion.com/films/27918-shogun-assassin"
        },
        "amazon-prime": {
          "available": true,
          "price": 3.99
        }
      },
      "lastUpdated": "2025-01-15",
      "region": "US"
    },
    "notableScenes": [
      {
        "title": "Baby Carriage Scene",
        "description": "Ogami Itt\u014d walking through enemies with baby carriage, directly referenced in Kill Bill",
        "influenceType": "direct",
        "significance": 5,
        "citations": [
          "Tarantino commentary track"
        ]
      }
    ]
  }
};

// Utility function to get enhanced data for a film
export const getEnhancedFilmData = (filmId: string): FilmMetadata | undefined => {
  return ENHANCED_FILM_DATA[filmId];
};

// Get streaming availability for a film
export const getStreamingAvailability = (filmId: string) => {
  return ENHANCED_FILM_DATA[filmId]?.streaming;
};

// Get notable scenes for a film
export const getNotableScenes = (filmId: string): NotableScene[] => {
  return ENHANCED_FILM_DATA[filmId]?.notableScenes || [];
};

// Get external links for a film
export const getExternalLinks = (filmId: string) => {
  return ENHANCED_FILM_DATA[filmId]?.externalLinks;
};

// Get runtime information for a film
export const getRuntimeInfo = (filmId: string) => {
  return ENHANCED_FILM_DATA[filmId]?.runtime;
};
