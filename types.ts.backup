export interface NodeData {
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
