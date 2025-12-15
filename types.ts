export interface NodeData {
  // ============================================
  // EXISTING FIELDS (Keep all of these)
  // ============================================
  id: string;
  name: string;
  fullTitle?: string;
  year: number;
  director?: string;
  country?: string;
  genres?: string[];
  subclouds: string[];
  posterUrl?: string | null;
  localPosterPath?: string;
  color: string;
  size?: number;
  influenceNotes?: string;
  influencedBy?: string[];
  influences?: string[];
  influenceCount?: number;
  // Enriched TMDB fields
  runtime?: number;
  rating?: number;
  imdbId?: string;
  tmdbId?: number;
  trailerUrl?: string;
  overview?: string;
  // Force graph positioning
  x?: number;
  y?: number;
  z?: number;
  vx?: number;
  vy?: number;
  vz?: number;

  // ============================================
  // NEW RICH METADATA FIELDS (Add these)
  // ============================================

  // Core Metadata Expansion
  tagline?: string;                    // Movie tagline
  budget?: number;                     // Production budget (USD)
  boxOffice?: number;                  // Worldwide gross (USD)
  cinematographer?: string;            // Director of photography
  composer?: string;                   // Music composer
  trivia?: string[];                   // Interesting facts

  // Cast & Crew
  cast?: CastMember[];                 // Top billed actors
  awards?: Award[];                    // Wins and nominations

  // Scene-Level Data
  notableScenes?: Scene[];             // Influential/important scenes
  visualStyle?: VisualStyle;           // Cinematographic analysis

  // Detailed Influence Analysis
  influenceMap?: DetailedInfluence[];  // Rich influence connections
  culturalImpact?: string;             // Historical context
  criticalReception?: CriticalData;    // Review scores

  // Content Advisory
  contentRating?: string;              // "R", "PG-13", etc.
  contentWarnings?: string[];          // Violence, language, etc.

  // Research Metadata
  dataSource?: 'manual' | 'tmdb' | 'perplexity' | 'firecrawl' | 'mixed';
  lastEnriched?: string;               // ISO date of last data update
  enrichmentQuality?: 'basic' | 'standard' | 'comprehensive';
}

export interface LinkData {
  source: string | NodeData;
  target: string | NodeData;
  type?: string;
}

export interface GraphData {
  nodes: NodeData[];
  links: LinkData[];
}

export type ColorPalette = Record<string, string>;

// ============================================
// EXPANDED DATA TYPES (Added 2025-12-15)
// ============================================

export interface Scene {
  id: string;                          // Unique scene ID
  title: string;                       // "House of Blue Leaves Fight"
  timestamp?: string;                  // "01:34:20" or "~01:30:00"
  description: string;                 // Rich text description
  thumbnail?: string;                  // Frame capture URL (optional)
  influences: SceneInfluence[];        // What this scene references
  keywords?: string[];                 // Searchable tags
  technicalNotes?: string;             // Cinematography details
  culturalSignificance?: string;       // Why this scene matters
  videoUrl?: string;                   // YouTube clip (if available)
}

export interface SceneInfluence {
  film: string;                        // Referenced film title
  scene?: string;                      // Specific scene (if applicable)
  type: InfluenceType;                 // Category of influence
  details: string;                     // Explanation
  confidence: 'high' | 'medium' | 'low'; // Research confidence
  sourceUrl?: string;                  // Citation
}

export type InfluenceType =
  | 'visual_homage'         // Shot composition, visual style
  | 'narrative_parallel'    // Story structure
  | 'soundtrack_reference'  // Music cues
  | 'character_archetype'   // Character traits
  | 'thematic_parallel'     // Themes, symbolism
  | 'technique';            // Camera/editing

export interface CastMember {
  name: string;
  character: string;
  order: number;                       // Billing order
  profileUrl?: string;                 // TMDB/IMDB profile
}

export interface Award {
  name: string;                        // "Academy Award"
  category: string;                    // "Best Original Screenplay"
  result: 'won' | 'nominated';
  year: number;
}

export interface VisualStyle {
  colorPalette?: string[];             // Dominant hex colors
  cinematography?: string[];           // Techniques used
  lighting?: string;                   // Lighting style description
  cameraWork?: string[];               // Shot types, movements
  aspectRatio?: string;                // "2.35:1"
}

export interface CriticalData {
  metascore?: number;                  // Metacritic score
  rottenTomatoes?: number;             // RT score
  criticsConsensus?: string;           // Summary quote
}

export interface DetailedInfluence {
  targetFilm: string;                  // Film being influenced
  strength: 'direct_homage' | 'indirect_influence' | 'thematic_parallel';
  evidence: string[];                  // Specific examples
  relatedScenes?: string[];            // Scene IDs from notableScenes
  analysisSource?: string;             // Research citation
}

// ============================================
// TYPE GUARDS AND UTILITIES
// ============================================

export function hasSceneData(node: NodeData): node is NodeData & { notableScenes: Scene[] } {
  return !!node.notableScenes && node.notableScenes.length > 0;
}

export function hasRichMetadata(node: NodeData): boolean {
  return !!(
    node.cast ||
    node.awards ||
    node.visualStyle ||
    node.notableScenes ||
    node.culturalImpact
  );
}

export function getEnrichmentLevel(node: NodeData): 'minimal' | 'basic' | 'rich' {
  if (hasRichMetadata(node)) return 'rich';
  if (node.overview && node.runtime && node.rating) return 'basic';
  return 'minimal';
}
