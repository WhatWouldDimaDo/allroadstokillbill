import { NodeData, Scene, VisualStyle, Award } from './types';

export const KILL_BILL_ENRICHED_EXAMPLE: Partial<NodeData> = {
  // Existing basic data
  id: 'kill-bill-vol-1',
  name: 'Kill Bill: Vol. 1',
  year: 2003,
  director: 'Quentin Tarantino',
  rating: 8.2,
  runtime: 111,
  overview: 'A former assassin seeks revenge...',

  // NEW: Rich metadata
  tagline: 'Revenge is a dish best served cold',
  budget: 30000000,
  boxOffice: 180949000,
  cinematographer: 'Robert Richardson',
  composer: 'RZA',

  // NEW: Cast
  cast: [
    { name: 'Uma Thurman', character: 'The Bride', order: 1 },
    { name: 'Lucy Liu', character: "O-Ren Ishii", order: 2 },
    { name: 'Vivica A. Fox', character: 'Vernita Green', order: 3 }
  ],

  // NEW: Awards
  awards: [
    { name: 'Golden Globe', category: 'Best Actress', result: 'nominated', year: 2004 },
    { name: 'BAFTA', category: 'Best Editing', result: 'won', year: 2004 }
  ],

  // NEW: Notable scenes (will be populated by research pipeline)
  notableScenes: [
    {
      id: 'houseofblueleaves',
      title: 'House of Blue Leaves Fight',
      timestamp: '~01:34:20',
      description: 'The Bride battles the Crazy 88 gang in snow-covered garden. Long tracking shots, vivid yellow costume against white snow, one warrior vs many.',
      influences: [
        {
          film: 'Lady Snowblood',
          scene: 'Final sword fight in snow',
          type: 'visual_homage',
          details: 'Yellow outfit, blood on white snow, single warrior against many enemies. Direct homage to Meiko Kaji\'s character.',
          confidence: 'high',
          sourceUrl: 'https://www.rogerebert.com/reviews/kill-bill-vol-1-2003'
        },
        {
          film: 'Game of Death',
          type: 'character_archetype',
          details: 'Yellow tracksuit as direct homage to Bruce Lee\'s character in Game of Death',
          confidence: 'high'
        }
      ],
      keywords: ['sword fight', 'revenge', 'snow', 'martial arts', 'one vs many', 'yellow costume'],
      technicalNotes: 'Long tracking shots, vivid color contrast (yellow/red/white), switches between color and black & white',
      culturalSignificance: 'One of the most iconic scenes in modern action cinema'
    },
    {
      id: 'opening-credits',
      title: 'Opening Credits Fight',
      timestamp: '~00:02:30',
      description: 'The Bride\'s brutal fight with Vernita Green in suburban home, intercut with anime-style credits.',
      influences: [
        {
          film: 'The Good, the Bad and the Ugly',
          type: 'technique',
          details: 'Extreme close-ups on eyes and gun barrels, stylized violence presentation',
          confidence: 'high'
        },
        {
          film: 'City on Fire',
          type: 'narrative_parallel',
          details: 'Wife betrayed by husband\'s lover, seeking revenge while pregnant',
          confidence: 'medium'
        }
      ],
      keywords: ['opening scene', 'brutal fight', 'anime credits', 'domestic setting', 'revenge'],
      technicalNotes: 'Split-screen animation, extreme close-ups, color-coded blood',
      culturalSignificance: 'Set the tone for Tarantino\'s revenge saga and influenced countless action films'
    }
    // More scenes will be added by research pipeline...
  ],

  // NEW: Visual style analysis
  visualStyle: {
    colorPalette: ['#FFD700', '#FF0000', '#FFFFFF', '#000000'],
    cinematography: ['Wide shots', 'Low angles', 'Split screen', 'Crash zooms'],
    lighting: 'High contrast, theatrical',
    cameraWork: ['Handheld', 'Long takes', 'Whip pans'],
    aspectRatio: '2.35:1'
  },

  // NEW: Cultural impact
  culturalImpact: 'Revitalized martial arts cinema in Western mainstream. Influenced entire generation of action filmmakers. Popularized the "revenge saga" format.',

  // NEW: Critical reception
  criticalReception: {
    metascore: 69,
    rottenTomatoes: 85,
    criticsConsensus: 'Kill Bill is a bloody, action-packed thrill ride with a personal twist.'
  },

  // NEW: Content advisory
  contentRating: 'R',
  contentWarnings: ['Violence', 'Language', 'Drug Use'],

  // Metadata
  dataSource: 'mixed',
  lastEnriched: '2025-12-15',
  enrichmentQuality: 'comprehensive'
};

// Export additional examples for testing
export const PULP_FICTION_ENRICHED_EXAMPLE: Partial<NodeData> = {
  id: 'pulp-fiction',
  name: 'Pulp Fiction',
  year: 1994,
  director: 'Quentin Tarantino',
  rating: 8.9,
  runtime: 154,

  tagline: 'You won\'t know the facts until you\'ve seen the fiction.',
  budget: 8000000,
  boxOffice: 214179088,
  cinematographer: 'Andrzej Sekula',

  cast: [
    { name: 'John Travolta', character: 'Vincent Vega', order: 1 },
    { name: 'Samuel L. Jackson', character: 'Jules Winnfield', order: 2 },
    { name: 'Uma Thurman', character: 'Mia Wallace', order: 3 }
  ],

  awards: [
    { name: 'Academy Award', category: 'Best Original Screenplay', result: 'won', year: 1995 },
    { name: 'Golden Globe', category: 'Best Screenplay', result: 'won', year: 1995 }
  ],

  visualStyle: {
    colorPalette: ['#FF6B35', '#F7931E', '#FFD23F'],
    cinematography: ['Dutch angles', 'Freeze frames', 'Split screen'],
    lighting: 'Neon and practical lighting',
    cameraWork: ['Tracking shots', 'Static wide shots'],
    aspectRatio: '2.35:1'
  },

  culturalImpact: 'Revolutionized narrative structure in mainstream cinema. Popularized non-linear storytelling and became cultural touchstone.',

  criticalReception: {
    metascore: 94,
    rottenTomatoes: 92,
    criticsConsensus: 'One of the most influential films of the 1990s, Pulp Fiction is a masterpiece of postmodern cinema.'
  },

  dataSource: 'mixed',
  lastEnriched: '2025-12-15',
  enrichmentQuality: 'comprehensive'
};
