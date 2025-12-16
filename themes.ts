export interface FilmTheme {
  name: string
  colors: {
    primary: string      // Main accent (buttons, highlights)
    secondary: string    // Supporting color
    background: string   // Background tone
    text: string         // Main text color
    accent: string       // Extra highlights
  }
  particles: {
    type: 'blood' | 'dust' | 'snow' | 'geometric' | 'film-grain' | 'retro' | 'vinyl' | 'sparkle' | 'scratch'
    color: string
    count: number
  }
  loading: {
    text: string         // Loading screen text
    animation: string    // Animation style
  }
}

export const filmThemes: Record<string, FilmTheme> = {
  'kill-bill-vol-1-2003': {
    name: 'Kill Bill',
    colors: {
      primary: '#FFD700',    // Yellow
      secondary: '#FF0000',  // Red
      background: '#000000', // Black
      text: '#FFFFFF',
      accent: '#FFD700'
    },
    particles: {
      type: 'blood',
      color: '#FF0000',
      count: 100
    },
    loading: {
      text: 'Kill Bill',
      animation: 'sword-slash'
    }
  },

  'kill-bill-vol-2-2004': {
    name: 'Kill Bill Vol. 2',
    colors: {
      primary: '#FFD700',    // Yellow
      secondary: '#FF0000',  // Red
      background: '#000000', // Black
      text: '#FFFFFF',
      accent: '#FFD700'
    },
    particles: {
      type: 'blood',
      color: '#FF0000',
      count: 100
    },
    loading: {
      text: 'Kill Bill Vol. 2',
      animation: 'sword-slash'
    }
  },

  'pulp-fiction-1994': {
    name: 'Pulp Fiction',
    colors: {
      primary: '#FF6B35',    // Orange
      secondary: '#8B4513',  // Brown
      background: '#1A1A1A',
      text: '#FFF8DC',       // Cream
      accent: '#FF6B35'
    },
    particles: {
      type: 'retro',
      color: '#FF6B35',
      count: 50
    },
    loading: {
      text: 'Pulp Fiction',
      animation: 'briefcase-glow'
    }
  },

  'django-unchained-2012': {
    name: 'Django Unchained',
    colors: {
      primary: '#8B4513',    // Brown
      secondary: '#D2B48C',  // Tan
      background: '#2C2416',
      text: '#F5E6D3',
      accent: '#8B4513'
    },
    particles: {
      type: 'dust',
      color: '#D2B48C',
      count: 75
    },
    loading: {
      text: 'Django Unchained',
      animation: 'western-text'
    }
  },

  'reservoir-dogs-1992': {
    name: 'Reservoir Dogs',
    colors: {
      primary: '#DC143C',    // Crimson red
      secondary: '#FFFFFF',  // White
      background: '#000000', // Black
      text: '#FFFFFF',
      accent: '#DC143C'
    },
    particles: {
      type: 'geometric',
      color: '#DC143C',
      count: 60
    },
    loading: {
      text: 'Reservoir Dogs',
      animation: 'blood-stripes'
    }
  },

  'inglourious-basterds-2009': {
    name: 'Inglourious Basterds',
    colors: {
      primary: '#4B5320',    // Army green
      secondary: '#8B0000',  // Dark red
      background: '#1C1C1C',
      text: '#F5F5DC',       // Beige
      accent: '#4B5320'
    },
    particles: {
      type: 'film-grain',
      color: '#8B0000',
      count: 80
    },
    loading: {
      text: 'Inglourious Basterds',
      animation: 'projector'
    }
  },

  'jackie-brown-1997': {
    name: 'Jackie Brown',
    colors: {
      primary: '#FF8C42',    // Funky orange
      secondary: '#008080',  // Teal
      background: '#1A1A1A',
      text: '#FFFFFF',
      accent: '#FF8C42'
    },
    particles: {
      type: 'vinyl',
      color: '#FF8C42',
      count: 40
    },
    loading: {
      text: 'Jackie Brown',
      animation: 'record-spin'
    }
  },

  'the-hateful-eight-2015': {
    name: 'The Hateful Eight',
    colors: {
      primary: '#4682B4',    // Steel blue
      secondary: '#FFFFFF',  // Snow white
      background: '#0F1419', // Dark blue-gray
      text: '#FFFFFF',
      accent: '#4682B4'
    },
    particles: {
      type: 'snow',
      color: '#FFFFFF',
      count: 120
    },
    loading: {
      text: 'The Hateful Eight',
      animation: 'frozen-blood'
    }
  },

  'once-upon-a-time-in-hollywood-2019': {
    name: 'Once Upon a Time in Hollywood',
    colors: {
      primary: '#FF6347',    // Tomato red
      secondary: '#FFD700',  // Gold
      background: '#1A0F00', // Dark amber
      text: '#FFFFFF',
      accent: '#FF6347'
    },
    particles: {
      type: 'sparkle',
      color: '#FFD700',
      count: 90
    },
    loading: {
      text: 'Once Upon a Time in Hollywood',
      animation: 'hollywood-sign'
    }
  },

  'death-proof-2007': {
    name: 'Death Proof',
    colors: {
      primary: '#FFA500',    // Orange
      secondary: '#000000',  // Black
      background: '#2C2C2C', // Dark gray
      text: '#FFFFFF',
      accent: '#FFA500'
    },
    particles: {
      type: 'scratch',
      color: '#FFA500',
      count: 70
    },
    loading: {
      text: 'Death Proof',
      animation: 'missing-reel'
    }
  }
}

// Default theme (Kill Bill)
export const defaultTheme = filmThemes['kill-bill-vol-1-2003']

// Helper function to get theme by film ID
export const getThemeByFilmId = (filmId: string): FilmTheme => {
  // Try exact match first
  if (filmThemes[filmId]) {
    return filmThemes[filmId]
  }

  // Try partial matches for different ID formats
  for (const [key, theme] of Object.entries(filmThemes)) {
    if (filmId.includes(key.replace(/-/g, '').toLowerCase()) ||
        key.includes(filmId.replace(/-/g, '').toLowerCase())) {
      return theme
    }
  }

  // Default fallback
  return defaultTheme
}
