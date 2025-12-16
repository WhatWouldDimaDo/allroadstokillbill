import React, { useRef, useState, useMemo, useCallback, useEffect, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import Fuse from 'fuse.js';
import { INITIAL_GRAPH_DATA, COLOR_PALETTE } from "./graphData_final_with_posters";
import { NodeData, Scene, SceneInfluence, InfluenceType, hasSceneData, getEnrichmentLevel } from "./types";
import { GestureTutorial } from "./components/GestureTutorial";
import { LoadingScreen } from "./components/LoadingScreen";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

const Graph = lazy(() => import("./components/Graph"));

// --- Tab Components ---

const FilmHeader = ({ node, onClose }: { node: NodeData; onClose: () => void }) => (
  <div className="relative h-32 bg-gradient-to-b from-yellow-400/20 to-transparent">
    {node.posterUrl && (
      <img
        src={node.posterUrl}
        alt={node.name}
        className="absolute right-4 top-4 w-20 h-28 object-cover rounded shadow-lg border border-gray-600"
      />
    )}
    <button
      onClick={onClose}
      className="absolute top-2 left-2 text-gray-400 hover:text-white p-1"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div className="absolute bottom-2 left-4 right-28">
      <h3 className="text-white font-black text-lg leading-tight">{node.name}</h3>
      <p className="text-yellow-400 text-sm font-mono">{node.year}</p>
    </div>
  </div>
);

const TabNavigation = ({
  activeTab,
  onTabChange,
  hasScenes
}: {
  activeTab: string;
  onTabChange: (tab: 'overview' | 'scenes' | 'influences' | 'cast') => void;
  hasScenes: boolean;
}) => (
  <div className="flex border-b border-gray-800">
    {[
      { id: 'overview', label: 'Overview', always: true },
      { id: 'scenes', label: 'Scenes', always: hasScenes },
      { id: 'influences', label: 'Influences', always: true },
      { id: 'cast', label: 'Cast & Crew', always: true }
    ].filter(tab => tab.always).map(tab => (
      <button
        key={tab.id}
        onClick={() => onTabChange(tab.id as any)}
        className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
          activeTab === tab.id
            ? 'text-yellow-400 bg-gray-900 border-b-2 border-yellow-400'
            : 'text-gray-500 hover:text-white bg-black'
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

const OverviewTab = ({ node }: { node: NodeData }) => {
  const formatRuntime = (minutes?: number) => {
    if (!minutes) return null;
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  const formatCurrency = (amount?: number) => {
    if (!amount) return null;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(amount);
  };

  return (
    <div className="space-y-4">
      {/* Full-width Poster */}
      {node.posterUrl && (
        <div className="w-screen -ml-4 -mr-4 -mt-4 mb-4">
          <img
            src={node.posterUrl}
            alt={node.name}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Tagline */}
      {node.tagline && (
        <div className="border-l-4 border-yellow-400 pl-3">
          <p className="text-gray-300 italic text-sm">"{node.tagline}"</p>
        </div>
      )}

      {/* Core Info Grid */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        {node.director && (
          <InfoRow label="Director" value={node.director} />
        )}
        {node.cinematographer && (
          <InfoRow label="Cinematography" value={node.cinematographer} />
        )}
        {node.composer && (
          <InfoRow label="Music" value={node.composer} />
        )}
        {node.runtime && (
          <InfoRow label="Runtime" value={formatRuntime(node.runtime)} />
        )}
        {node.contentRating && (
          <InfoRow label="Rating" value={node.contentRating} />
        )}
        {node.year && (
          <InfoRow label="Release" value={node.year.toString()} />
        )}
      </div>

      {/* Rating & Box Office */}
      <div className="flex items-center gap-4 pt-2 border-t border-gray-800">
        {node.rating && (
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-white font-bold text-lg">{node.rating.toFixed(1)}</span>
            <span className="text-gray-500 text-xs">/10</span>
          </div>
        )}
        {node.boxOffice && (
          <div className="text-gray-300 text-sm">
            <span className="text-gray-500">Box Office:</span> {formatCurrency(node.boxOffice)}
          </div>
        )}
      </div>

      {/* Overview Text */}
      {node.overview && (
        <p className="text-gray-400 text-sm leading-relaxed">
          {node.overview}
        </p>
      )}

      {/* Cultural Impact */}
      {node.culturalImpact && (
        <div className="pt-3 border-t border-gray-800">
          <h4 className="text-yellow-400 text-xs uppercase font-bold mb-2">Cultural Impact</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{node.culturalImpact}</p>
        </div>
      )}

      {/* Genres */}
      {node.genres && node.genres.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {node.genres.map((genre, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-gray-800 text-gray-300 text-[10px] uppercase rounded"
            >
              {genre}
            </span>
          ))}
        </div>
      )}

      {/* External Links */}
      <div className="flex gap-2 pt-2">
        {node.trailerUrl && <ExternalLink href={node.trailerUrl} label="▶ Trailer" color="red" />}
        {node.imdbId && <ExternalLink href={`https://www.imdb.com/title/${node.imdbId}/`} label="IMDb" color="yellow" />}
        {node.tmdbId && <ExternalLink href={`https://www.themoviedb.org/movie/${node.tmdbId}`} label="TMDB" color="blue" />}
      </div>

      {/* Trivia */}
      {node.trivia && node.trivia.length > 0 && (
        <div className="pt-3 border-t border-gray-800">
          <h4 className="text-yellow-400 text-xs uppercase font-bold mb-2">Trivia</h4>
          <ul className="space-y-2">
            {node.trivia.slice(0, 3).map((fact, i) => (
              <li key={i} className="text-gray-400 text-xs leading-relaxed flex">
                <span className="text-yellow-400 mr-2">•</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ScenesTab = ({ node }: { node: NodeData }) => {
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);

  if (!node.notableScenes || node.notableScenes.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-sm">No scene data available yet.</p>
        <p className="text-xs mt-2">Check back after enrichment pipeline runs.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-yellow-400 text-sm uppercase font-bold">
        Notable Scenes ({node.notableScenes.length})
      </h3>

      {/* Scene List */}
      <div className="space-y-3">
        {node.notableScenes.map((scene) => (
          <div key={scene.id}>
            <SceneCard
              scene={scene}
              isExpanded={selectedScene?.id === scene.id}
              onClick={() => setSelectedScene(selectedScene?.id === scene.id ? null : scene)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const InfluencesTab = ({ node, onNavigateToFilm }: { node: NodeData; onNavigateToFilm: (filmName: string) => void }) => (
  <div className="space-y-4">
    {/* Influenced By */}
    {node.influencedBy && node.influencedBy.length > 0 && (
      <div>
        <h4 className="text-yellow-400 text-xs uppercase font-bold mb-3">Influenced By</h4>
        <div className="space-y-2">
          {node.influencedBy.map((filmName, i) => {
            const filmData = INITIAL_GRAPH_DATA.nodes.find(n => n.name === filmName);
            return (
              <div key={i} onClick={() => onNavigateToFilm(filmName)} className="cursor-pointer">
                <FilmRelationCard filmName={filmName} filmData={filmData} type="source" />
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* Influences */}
    {node.influences && node.influences.length > 0 && (
      <div className="pt-3 border-t border-gray-800">
        <h4 className="text-yellow-400 text-xs uppercase font-bold mb-3">Influences</h4>
        <div className="space-y-2">
          {node.influences.map((filmName, i) => {
            const filmData = INITIAL_GRAPH_DATA.nodes.find(n => n.name === filmName);
            return (
              <div key={i} onClick={() => onNavigateToFilm(filmName)} className="cursor-pointer">
                <FilmRelationCard filmName={filmName} filmData={filmData} type="target" />
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* Detailed Influence Map */}
    {node.influenceMap && node.influenceMap.length > 0 && (
      <div className="pt-3 border-t border-gray-800">
        <h4 className="text-yellow-400 text-xs uppercase font-bold mb-3">Detailed Analysis</h4>
        <div className="space-y-3">
          {node.influenceMap.map((influence, i) => (
            <div key={i} onClick={() => onNavigateToFilm(influence.targetFilm)} className="cursor-pointer">
              <div className="bg-gray-900/50 rounded-lg p-3 hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors">{influence.targetFilm}</p>
                  <StrengthBadge strength={influence.strength} />
                </div>
                {influence.evidence.length > 0 && (
                  <ul className="space-y-1">
                    {influence.evidence.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-xs flex">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const CastTab = ({ node }: { node: NodeData }) => (
  <div className="space-y-4">
    {/* Cast */}
    {node.cast && node.cast.length > 0 && (
      <div>
        <h4 className="text-yellow-400 text-xs uppercase font-bold mb-3">Cast</h4>
        <div className="space-y-2">
          {node.cast.map((member, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-2">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-xs font-bold">
                {member.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{member.name}</p>
                <p className="text-gray-500 text-xs">{member.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Awards */}
    {node.awards && node.awards.length > 0 && (
      <div className="pt-3 border-t border-gray-800">
        <h4 className="text-yellow-400 text-xs uppercase font-bold mb-3">Awards & Nominations</h4>
        <div className="space-y-2">
          {node.awards.map((award, i) => (
            <div key={i} className="flex items-start gap-2 bg-gray-900/50 rounded-lg p-2">
              <div className="text-lg flex-shrink-0">
                {award.result === 'won' ? '🏆' : '🎖️'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">{award.name}</p>
                <p className="text-gray-400 text-xs">{award.category}</p>
                <p className="text-gray-500 text-[10px] mt-0.5">{award.year} • {award.result === 'won' ? 'Winner' : 'Nominated'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// --- Helper Components ---

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-gray-500 text-xs">{label}:</span>
    <p className="text-white text-sm font-medium">{value}</p>
  </div>
);

const ExternalLink = ({ href, label, color }: { href: string; label: string; color: string }) => {
  const colorClasses = {
    red: 'bg-red-600 hover:bg-red-500',
    yellow: 'bg-yellow-500 hover:bg-yellow-400 text-black',
    blue: 'bg-blue-600 hover:bg-blue-500'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex-1 py-2 px-3 ${colorClasses[color as keyof typeof colorClasses]} text-white text-xs font-bold uppercase text-center rounded transition-colors`}
    >
      {label}
    </a>
  );
};

const SceneCard = ({ scene, isExpanded, onClick }: {
  scene: Scene;
  isExpanded: boolean;
  onClick: () => void;
}) => (
  <div
    className={`border border-gray-700 rounded-lg overflow-hidden cursor-pointer transition-all ${
      isExpanded ? 'bg-gray-900' : 'bg-gray-800/50 hover:bg-gray-800'
    }`}
    onClick={onClick}
  >
    {/* Scene Header */}
    <div className="p-3 flex items-start justify-between">
      <div className="flex-1">
        <h4 className="text-white font-bold text-sm">{scene.title}</h4>
        {scene.timestamp && (
          <p className="text-gray-500 text-xs font-mono mt-0.5">{scene.timestamp}</p>
        )}
      </div>
      <svg
        className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    {/* Expanded Content */}
    {isExpanded && (
      <div className="px-3 pb-3 space-y-3 border-t border-gray-700 pt-3">
        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed">{scene.description}</p>

        {/* Influences */}
        {scene.influences.length > 0 && (
          <div>
            <h5 className="text-yellow-400 text-[10px] uppercase font-bold mb-2">Influences</h5>
            <div className="space-y-2">
              {scene.influences.map((inf, idx) => (
                <div key={idx} className="bg-black/50 rounded p-2">
                  <div className="flex items-center justify-between">
                    <p className="text-white text-xs font-medium">{inf.film}</p>
                    <InfluenceTypeBadge type={inf.type} />
                  </div>
                  <p className="text-gray-400 text-[10px] mt-1">{inf.details}</p>
                  {inf.confidence && (
                    <div className="flex items-center gap-1 mt-1">
                      <div className={`w-2 h-2 rounded-full ${
                        inf.confidence === 'high' ? 'bg-green-500' :
                        inf.confidence === 'medium' ? 'bg-yellow-500' :
                        'bg-gray-500'
                      }`} />
                      <span className="text-gray-500 text-[9px] uppercase">{inf.confidence} confidence</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Keywords */}
        {scene.keywords && scene.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {scene.keywords.map((keyword, i) => (
              <span key={i} className="px-2 py-0.5 bg-gray-800 text-gray-400 text-[9px] rounded">
                {keyword}
              </span>
            ))}
          </div>
        )}

        {/* Video Link */}
        {scene.videoUrl && (
          <a
            href={scene.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-yellow-400 hover:text-yellow-300"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Watch Scene ▶</span>
          </a>
        )}
      </div>
    )}
  </div>
);

const FilmRelationCard = ({ filmName, filmData, type }: {
  filmName: string;
  filmData?: NodeData;
  type: 'source' | 'target';
}) => (
  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-2 hover:bg-yellow-900/30 transition-colors cursor-pointer group">
    {filmData?.posterUrl && (
      <img
        src={filmData.posterUrl}
        alt={filmName}
        className="w-10 h-14 object-cover rounded group-hover:ring-2 group-hover:ring-yellow-400 transition-all"
      />
    )}
    <div className="flex-1 min-w-0">
      <p className="text-yellow-400 text-sm font-medium truncate group-hover:text-yellow-300 transition-colors">{filmName}</p>
      {filmData && (
        <p className="text-gray-500 text-xs">{filmData.year} • {filmData.director}</p>
      )}
    </div>
    <svg className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const StrengthBadge = ({ strength }: { strength: string }) => {
  const colors = {
    direct_homage: 'bg-red-900 text-red-300',
    indirect_influence: 'bg-yellow-900 text-yellow-300',
    thematic_parallel: 'bg-blue-900 text-blue-300'
  };

  return (
    <span className={`px-2 py-0.5 rounded text-[9px] uppercase font-bold ${colors[strength as keyof typeof colors] || 'bg-gray-900 text-gray-300'}`}>
      {strength.replace('_', ' ')}
    </span>
  );
};

const InfluenceTypeBadge = ({ type }: { type: InfluenceType }) => {
  const colors = {
    visual_homage: 'bg-purple-900 text-purple-300',
    narrative_parallel: 'bg-blue-900 text-blue-300',
    soundtrack_reference: 'bg-green-900 text-green-300',
    character_archetype: 'bg-yellow-900 text-yellow-300',
    thematic_parallel: 'bg-pink-900 text-pink-300',
    technique: 'bg-gray-900 text-gray-300'
  };

  const labels = {
    visual_homage: 'Visual',
    narrative_parallel: 'Narrative',
    soundtrack_reference: 'Soundtrack',
    character_archetype: 'Character',
    thematic_parallel: 'Thematic',
    technique: 'Technique'
  };

  return (
    <span className={`px-1.5 py-0.5 rounded text-[9px] uppercase font-bold ${colors[type]}`}>
      {labels[type]}
    </span>
  );
};

const FilmDetailPanel = ({ node, onClose, onNavigateToFilm }: {
  node: NodeData | null;
  onClose: () => void;
  onNavigateToFilm: (filmName: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'scenes' | 'influences' | 'cast'>('overview');

  if (!node) return null;

  return (
    <div className="absolute bottom-4 right-4 w-full md:w-[600px] lg:w-[700px] xl:w-[800px] bg-black/95 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl z-30 overflow-hidden max-h-[85vh] flex flex-col">
      {/* Header (keep existing poster thumbnail design) */}
      <FilmHeader node={node} onClose={onClose} />

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} hasScenes={hasSceneData(node)} />

      {/* Tab Content (scrollable) */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'overview' && <OverviewTab node={node} />}
        {activeTab === 'scenes' && <ScenesTab node={node} />}
        {activeTab === 'influences' && <InfluencesTab node={node} onNavigateToFilm={onNavigateToFilm} />}
        {activeTab === 'cast' && <CastTab node={node} />}
      </div>
    </div>
  );
};

const SearchResults = ({
  searchResults,
  onSelectFilm,
  onClose
}: {
  searchResults: NodeData[];
  onSelectFilm: (film: NodeData) => void;
  onClose: () => void;
}) => {
  if (searchResults.length === 0) return null;

  return (
    <div className="absolute top-20 left-4 right-4 md:left-84 md:right-4 bg-black/95 backdrop-blur-xl border border-yellow-500/50 rounded-xl shadow-2xl z-30 max-h-96 overflow-y-auto">
      <div className="p-4 border-b border-yellow-500/30">
        <div className="flex items-center justify-between">
          <h3 className="text-yellow-400 font-bold text-lg">SEARCH RESULTS</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-400 text-sm mt-1">Found {searchResults.length} film{searchResults.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="p-2 space-y-1">
        {searchResults.slice(0, 10).map((film, index) => (
          <button
            key={film.id}
            onClick={() => onSelectFilm(film)}
            className="w-full text-left p-3 bg-gray-900 hover:bg-gray-800 rounded border border-gray-700 hover:border-yellow-400 transition-all group"
          >
            <div className="flex items-start gap-3">
              {film.posterUrl && (
                <img
                  src={film.posterUrl}
                  alt={film.name}
                  className="w-12 h-16 object-cover rounded border border-gray-600 flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-sm leading-tight truncate group-hover:text-yellow-400 transition-colors">
                  {film.name}
                </h4>
                <p className="text-gray-400 text-xs mt-1">
                  {film.director || 'Unknown Director'} • {film.year}
                </p>
                {film.rating && (
                  <p className="text-yellow-400 text-xs mt-1">
                    ★ {film.rating.toFixed(1)}
                  </p>
                )}
              </div>
            </div>
          </button>
        ))}
        {searchResults.length > 10 && (
          <div className="text-center text-gray-500 text-sm py-2">
            And {searchResults.length - 10} more results...
          </div>
        )}
      </div>
    </div>
  );
};

// --- Components ---

const ControlPanel = ({
    filters, 
    setFilters, 
    searchQuery, 
    setSearchQuery, 
    handleSearch, 
    viewMode, 
    setViewMode, 
    showPosters, 
    setShowPosters,
    onResetCamera,
    applyPreset,
    showLegend,
    setShowLegend,
    posterScale,
    setPosterScale,
    lineOpacity,
    setLineOpacity,
    yearRange,
    setYearRange,
    resetFilters,
    selectedDirectors,
    setSelectedDirectors
}: any) => {
  const [isOpen, setIsOpen] = useState(true); // Default open on desktop
  const [activeTab, setActiveTab] = useState<'controls' | 'filters'>('controls');
  const categories = Object.keys(COLOR_PALETTE).slice(0, 15);

  // Get unique directors from the dataset
  const allDirectors = useMemo(() => {
    const directors = new Set<string>();
    INITIAL_GRAPH_DATA.nodes.forEach(node => {
      if (node.director) {
        // Handle multiple directors separated by '|'
        node.director.split('|').forEach(dir => directors.add(dir.trim()));
      }
    });
    return Array.from(directors).sort();
  }, []);

  const toggleFilter = (cat: string) => {
    setFilters((prev: any) => ({
      ...prev,
      subclouds: prev.subclouds.includes(cat) 
        ? prev.subclouds.filter((c: string) => c !== cat)
        : [...prev.subclouds, cat]
    }));
  };

  const selectOnly = (cat: string) => {
      setFilters((prev: any) => ({ ...prev, subclouds: [cat] }));
  };

  const selectAll = () => {
      setFilters((prev: any) => ({ ...prev, subclouds: Object.keys(COLOR_PALETTE) }));
  };

  // Toggle Panel
  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <>
        {/* Toggle Button */}
        {!isOpen && (
            <button 
                onClick={togglePanel}
                className="absolute top-4 left-4 bg-yellow-400 border border-yellow-500 rounded-md p-3 text-black hover:bg-yellow-300 transition-colors z-30 shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        )}

        {/* Panel Container */}
        <div className={`absolute top-0 left-0 h-full bg-black/95 backdrop-blur-xl border-r border-gray-800 flex flex-col z-20 shadow-2xl transition-transform duration-300 transform 
            ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
            w-full md:w-80 md:h-auto md:max-h-[90vh] md:top-4 md:left-4 md:rounded-xl md:border md:border-gray-700
        `}>
            
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-800 bg-yellow-400">
                <div>
                    <h2 className="text-black font-black tracking-tighter text-lg uppercase font-mono leading-none">ALL ROADS TO</h2>
                    <h2 className="text-red-700 font-black tracking-tighter text-xl uppercase font-mono leading-none">KILL BILL</h2>
                </div>
                <button onClick={togglePanel} className="text-black hover:text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-800">
                <button 
                    className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'controls' ? 'text-yellow-400 bg-gray-900 border-b-2 border-yellow-400' : 'text-gray-500 hover:text-white bg-black'}`}
                    onClick={() => setActiveTab('controls')}
                >
                    Controls
                </button>
                <button 
                    className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'filters' ? 'text-yellow-400 bg-gray-900 border-b-2 border-yellow-400' : 'text-gray-500 hover:text-white bg-black'}`}
                    onClick={() => setActiveTab('filters')}
                >
                    Filters
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-8">
                
                {/* Search */}
                <form onSubmit={handleSearch} className="relative group">
                    <input
                        type="text"
                        className="w-full bg-gray-900 border-2 border-gray-700 rounded-none py-3 px-4 text-white focus:outline-none focus:border-yellow-400 transition-colors placeholder-gray-600 text-sm font-mono uppercase"
                        placeholder="Search Films..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="absolute right-3 top-3.5 text-gray-500 hover:text-yellow-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </form>

                {activeTab === 'controls' ? (
                    <>
                        {/* View Options */}
                        <div>
                            <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3 border-b border-red-900/30 pb-1">Perspective</h3>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="grid grid-cols-3 gap-1">
                                    <button onClick={() => setViewMode('3d')} className={`py-2 text-[10px] font-bold uppercase border border-gray-700 ${viewMode === '3d' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:border-yellow-400'}`}>3D Graph</button>
                                    <button onClick={() => setViewMode('2d')} className={`py-2 text-[10px] font-bold uppercase border border-gray-700 ${viewMode === '2d' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:border-yellow-400'}`}>2D Flat</button>
                                    <button onClick={() => setViewMode('timeline')} className={`py-2 text-[10px] font-bold uppercase border border-gray-700 ${viewMode === 'timeline' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:border-yellow-400'}`}>Timeline</button>
                                </div>
                                <div className="grid grid-cols-2 gap-1 mt-2">
                                     <button 
                                        onClick={() => setShowPosters(!showPosters)}
                                        className={`py-2 text-[10px] font-bold uppercase border border-gray-700 ${showPosters ? 'bg-gray-700 text-white' : 'text-gray-500'}`}
                                    >
                                        {showPosters ? 'Posters: ON' : 'Posters: OFF'}
                                    </button>
                                    <button 
                                        onClick={() => setShowLegend(!showLegend)}
                                        className={`py-2 text-[10px] font-bold uppercase border border-gray-700 ${showLegend ? 'bg-gray-700 text-white' : 'text-gray-500'}`}
                                    >
                                        {showLegend ? 'Legend: ON' : 'Legend: OFF'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Adjustments */}
                        <div>
                            <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3 border-b border-red-900/30 pb-1">Adjustments</h3>

                            {/* Reset Camera Button */}
                            <div className="mb-4">
                                <button
                                    onClick={onResetCamera}
                                    className="w-full py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold uppercase tracking-wider transition-colors"
                                >
                                    Reset Camera
                                </button>
                            </div>

                            <div className="mb-4">
                                <label className="flex justify-between text-[10px] font-bold text-gray-400 uppercase mb-1">
                                    <span>Poster Size</span>
                                    <span>{(posterScale * 100).toFixed(0)}%</span>
                                </label>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="2.0"
                                    step="0.1"
                                    value={posterScale}
                                    onChange={(e) => setPosterScale(parseFloat(e.target.value))}
                                    className="w-full accent-yellow-400 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-[10px] font-bold text-gray-400 uppercase mb-1">
                                    <span>Line Visibility</span>
                                    <span>{(lineOpacity * 100).toFixed(0)}%</span>
                                </label>
                                <input
                                    type="range"
                                    min="0.05"
                                    max="1.0"
                                    step="0.05"
                                    value={lineOpacity}
                                    onChange={(e) => setLineOpacity(parseFloat(e.target.value))}
                                    className="w-full accent-yellow-400 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Tarantino Films */}
                        <div>
                            <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3 border-b border-red-900/30 pb-1">Tarantino Films</h3>
                            <div className="space-y-1 font-mono text-xs">
                                <button onClick={() => applyPreset('reservoir-dogs')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Reservoir Dogs (1992)
                                </button>
                                <button onClick={() => applyPreset('pulp-fiction')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Pulp Fiction (1994)
                                </button>
                                <button onClick={() => applyPreset('jackie-brown')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Jackie Brown (1997)
                                </button>
                                <button onClick={() => applyPreset('kb-influences')} className="w-full text-left px-4 py-2.5 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 border-l-2 border-yellow-400 transition-all uppercase">
                                    Kill Bill (2003-04)
                                </button>
                                <button onClick={() => applyPreset('death-proof')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Death Proof (2007)
                                </button>
                                <button onClick={() => applyPreset('inglourious-basterds')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Inglourious Basterds (2009)
                                </button>
                                <button onClick={() => applyPreset('django-unchained')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Django Unchained (2012)
                                </button>
                                <button onClick={() => applyPreset('hateful-eight')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    The Hateful Eight (2015)
                                </button>
                                <button onClick={() => applyPreset('hollywood')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Hollywood (2019)
                                </button>
                            </div>
                        </div>

                        {/* Genre Presets */}
                        <div>
                            <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3 border-b border-red-900/30 pb-1">Genres</h3>
                            <div className="space-y-1 font-mono text-xs">
                                <button onClick={() => applyPreset('all')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Show Full Network
                                </button>
                                <button onClick={() => applyPreset('western')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Westerns
                                </button>
                                <button onClick={() => applyPreset('crime')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Crime & Noir
                                </button>
                                <button onClick={() => applyPreset('exploitation')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Exploitation
                                </button>
                                <button onClick={() => applyPreset('femme')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Femme Fatale
                                </button>
                                <button onClick={() => applyPreset('anime')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Anime
                                </button>
                                <button onClick={() => applyPreset('hong-kong')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Hong Kong Action
                                </button>
                                <button onClick={() => applyPreset('wwii')} className="w-full text-left px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    WWII Films
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Filter Actions */}
                        <div className="flex gap-2">
                            <button onClick={selectAll} className="flex-1 py-2 bg-gray-800 hover:bg-gray-700 text-xs text-white uppercase tracking-wider font-bold">All</button>
                            <button onClick={resetFilters} className="flex-1 py-2 bg-gray-800 hover:bg-gray-700 text-xs text-white uppercase tracking-wider font-bold">Reset</button>
                        </div>

                        {/* Director Filter */}
                        <div className="py-4 border-b border-gray-800">
                            <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-3">Directors</h4>
                            <div className="max-h-32 overflow-y-auto custom-scrollbar space-y-1">
                                {allDirectors.map(director => {
                                    const isSelected = selectedDirectors.includes(director);
                                    return (
                                        <button
                                            key={director}
                                            onClick={() => {
                                                setSelectedDirectors(prev =>
                                                    isSelected
                                                        ? prev.filter(d => d !== director)
                                                        : [...prev, director]
                                                );
                                            }}
                                            className={`w-full text-left px-3 py-1.5 text-[9px] font-mono uppercase transition-colors ${
                                                isSelected
                                                    ? 'bg-yellow-400 text-black'
                                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                            }`}
                                        >
                                            {director}
                                        </button>
                                    );
                                })}
                            </div>
                            {selectedDirectors.length > 0 && (
                                <button
                                    onClick={() => setSelectedDirectors([])}
                                    className="mt-2 w-full py-1 bg-red-600 hover:bg-red-500 text-[9px] text-white uppercase font-bold"
                                >
                                    Clear Directors
                                </button>
                            )}
                        </div>

                        {/* Decade Filter */}
                        <div className="py-4 border-b border-gray-800">
                            <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-3">Era: {yearRange[0]} - {yearRange[1]}</h4>
                            <div className="px-2">
                                <div className="flex justify-between gap-4">
                                    <div className="flex flex-col flex-1">
                                        <label className="text-[9px] text-gray-500 uppercase mb-1">From</label>
                                        <input 
                                            type="number" 
                                            min="1940" 
                                            max="2025" 
                                            value={yearRange[0]}
                                            onChange={(e) => setYearRange([parseInt(e.target.value), yearRange[1]])}
                                            className="bg-gray-800 border border-gray-600 text-white text-xs p-1 text-center font-mono focus:border-yellow-400 outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <label className="text-[9px] text-gray-500 uppercase mb-1">To</label>
                                        <input 
                                            type="number" 
                                            min="1940" 
                                            max="2025" 
                                            value={yearRange[1]}
                                            onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                                            className="bg-gray-800 border border-gray-600 text-white text-xs p-1 text-center font-mono focus:border-yellow-400 outline-none"
                                        />
                                    </div>
                                </div>
                                <input 
                                    type="range" 
                                    min="1940" 
                                    max="2025" 
                                    value={yearRange[1]} 
                                    onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                                    className="w-full accent-yellow-400 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-3"
                                />
                            </div>
                        </div>

                        {/* Filter List */}
                        <div className="space-y-1 mt-2">
                            {categories.map(cat => (
                                <div key={cat} className="group flex items-center justify-between p-2 rounded hover:bg-gray-800/50 transition-colors cursor-pointer" onClick={() => toggleFilter(cat)}>
                                    <div className="flex items-center space-x-3 flex-1">
                                        <div className={`w-4 h-4 border border-gray-500 flex items-center justify-center ${filters.subclouds.includes(cat) ? 'bg-yellow-400 border-yellow-400' : 'bg-transparent'}`}>
                                            {filters.subclouds.includes(cat) && <div className="w-2 h-2 bg-black"></div>}
                                        </div>
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLOR_PALETTE[cat] }}></span>
                                        <span className={`text-sm capitalize truncate ${filters.subclouds.includes(cat) ? 'text-white' : 'text-gray-500'}`}>{cat.replace(/-/g, ' ')}</span>
                                    </div>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); selectOnly(cat); }}
                                        className="opacity-0 group-hover:opacity-100 text-[9px] bg-gray-700 hover:bg-white hover:text-black px-2 py-1 uppercase font-bold tracking-wider transition-all"
                                    >
                                        Only
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    </>
  );
};

// --- Timeline Axis Component ---

const TimelineAxis = ({ viewMode }: { viewMode: '3d' | '2d' | 'timeline' }) => {
  if (viewMode !== 'timeline') return null;

  const years = [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2025];

  return (
    <>
      {/* Timeline Indicator Label */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-black/90 px-6 py-3 rounded-lg border-2 border-yellow-500/50 z-20 pointer-events-none shadow-2xl">
        <span className="text-yellow-500 font-black text-lg tracking-wider">TIMELINE VIEW</span>
        <div className="text-white/80 text-sm mt-1 text-center">Films arranged chronologically by release year</div>
      </div>

      {/* Timeline Axis - Enhanced with more visual elements */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center pointer-events-none z-20">
        <div className="bg-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 shadow-2xl">
          <div className="flex items-end gap-1" style={{ width: '85vw', maxWidth: '1200px' }}>
            {years.map((year, i) => {
              const decadeFilms = INITIAL_GRAPH_DATA.nodes.filter(node =>
                node.year >= year && node.year < year + 10
              ).length;

              return (
                <div
                  key={year}
                  className="flex-1 flex flex-col items-center group"
                >
                  {/* Main timeline bar */}
                  <div className="h-6 w-1 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t shadow-lg" />

                  {/* Year label with film count */}
                  <div className="mt-2 text-center">
                    <span className="text-yellow-400 font-bold text-sm block group-hover:text-yellow-300 transition-colors">
                      {year}
                    </span>
                    <span className="text-yellow-600/80 text-xs font-mono">
                      {decadeFilms}
                    </span>
                  </div>

                  {/* Decade separator line for non-last items */}
                  {i < years.length - 1 && (
                    <div className="absolute top-0 w-1 h-6 bg-yellow-500/20 translate-x-full -translate-y-6" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-3 text-center">
            <span className="text-yellow-500/70 text-xs uppercase tracking-wider">
              Year • Film Count
            </span>
          </div>
        </div>
      </div>

      {/* Floating year markers in 3D space */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {years.map((year, i) => {
          const xPos = (i / (years.length - 1)) * 100; // Percentage across screen
          return (
            <div
              key={`marker-${year}`}
              className="absolute bottom-32 text-yellow-500/30 font-bold text-xs"
              style={{
                left: `${10 + xPos * 0.8}%`,
                transform: 'translateX(-50%)'
              }}
            >
              {year}
            </div>
          );
        })}
      </div>
    </>
  );
};

// --- Main App Component ---

const AppContent = () => {
  const { currentTheme, setThemeByFilm } = useTheme();
  const [introComplete, setIntroComplete] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<NodeData[]>([]);
  const [viewMode, setViewMode] = useState<'3d' | '2d' | 'timeline'>('3d');
  const [showPosters, setShowPosters] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [posterScale, setPosterScale] = useState(1.0);
  const [lineOpacity, setLineOpacity] = useState(0.3);
  const [yearRange, setYearRange] = useState<[number, number]>([1940, 2025]);
  const [selectedDirectors, setSelectedDirectors] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    subclouds: [], // Start with no filters to debug
  });
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [neighbors, setNeighbors] = useState<Set<string>>(new Set());
  const [showGestureTutorial, setShowGestureTutorial] = useState(() => {
    // Show tutorial on first mobile visit
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent) ||
                     window.matchMedia('(max-width: 768px)').matches;
    const hasSeenTutorial = localStorage.getItem('gestureTutorialSeen');
    return isMobile && !hasSeenTutorial;
  });
  const graphRef = useRef<any>(null);

  // Animate progress bar during loading (fills 0-100% over 500ms)
  useEffect(() => {
    if (showLoading) {
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 95) {
            clearInterval(progressInterval);
            return 100;
          }
          // Increment by ~2% every 10ms to reach ~100% in 500ms
          return prev + 2;
        });
      }, 10);

      return () => clearInterval(progressInterval);
    }
  }, [showLoading]);

  // Complete intro with minimum 500ms duration
  useEffect(() => {
    const startTime = Date.now();
    const MIN_LOADING_TIME = 500; // 500ms minimum display time

    const timer = setTimeout(() => {
      setIntroComplete(true);

      // Calculate remaining time to hit the minimum duration
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

      // Set progress to 100% before hiding
      setLoadingProgress(100);

      // Hide loading screen after minimum duration
      const hideTimer = setTimeout(() => {
        setShowLoading(false);
      }, remaining);

      return () => clearTimeout(hideTimer);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Initialize Fuse search
  const fuse = useMemo(() => {
    const options = {
      keys: [
        { name: 'name', weight: 0.4 },
        { name: 'director', weight: 0.3 },
        { name: 'year', weight: 0.2 },
        { name: 'genres', weight: 0.1 }
      ],
      threshold: 0.3,
      includeScore: true,
    };
    return new Fuse(INITIAL_GRAPH_DATA.nodes, options);
  }, []);

  // Filtered data based on current filters
  const filteredData = useMemo(() => {
    console.log('Filtering data with:', {
      totalNodes: INITIAL_GRAPH_DATA.nodes?.length || 0,
      totalLinks: INITIAL_GRAPH_DATA.links?.length || 0,
      filters,
      yearRange,
      selectedDirectors
    });

    let nodes = INITIAL_GRAPH_DATA.nodes || [];
    let links = INITIAL_GRAPH_DATA.links || [];

    console.log('Initial nodes count:', nodes.length);

    // Filter by year range
    nodes = nodes.filter(node => {
      const year = node.year;
      return year >= yearRange[0] && year <= yearRange[1];
    });
    console.log('After year filter:', nodes.length);

    // Filter by directors
    if (selectedDirectors.length > 0) {
      nodes = nodes.filter(node => {
        if (!node.director) return false;
        return selectedDirectors.some(dir =>
          node.director!.toLowerCase().includes(dir.toLowerCase())
        );
      });
      console.log('After director filter:', nodes.length);
    }

    // Filter by subclouds (only if filters are selected)
    if (filters.subclouds.length > 0) {
      nodes = nodes.filter(node =>
        node.subclouds.some(subcloud => filters.subclouds.includes(subcloud))
      );
      console.log('After subcloud filter:', nodes.length);
    } else {
      console.log('No subcloud filters applied, keeping all nodes');
    }

    // Update links to only include filtered nodes
    const nodeIds = new Set(nodes.map(n => n.id));
    links = links.filter(link => {
      const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
      const targetId = typeof link.target === 'string' ? link.target : link.target.id;
      return nodeIds.has(sourceId) && nodeIds.has(targetId);
    });

    console.log('Final filtered data:', {
      nodes: nodes.length,
      links: links.length
    });

    return { nodes, links };
  }, [filters, yearRange, selectedDirectors]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery.trim()).map(result => result.item);
      setSearchResults(results);
      // Highlight the first result if any found
      if (results.length > 0) {
        setSelectedNode(results[0]);
      }
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, fuse]);

  const applyPreset = useCallback((preset: string) => {
    switch (preset) {
      case 'all':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors([]);
        setHighlightedCategory(null);
        break;
      case 'kb-influences':
        // Kill Bill influences - highlight Tarantino's Kill Bill films
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors([]);
        setHighlightedCategory('kill-bill-core');
        break;
      case 'reservoir-dogs':
        // Highlight Reservoir Dogs specifically
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'pulp-fiction':
        // Highlight Pulp Fiction specifically
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'jackie-brown':
        // Highlight Jackie Brown specifically
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'death-proof':
        // Highlight Death Proof specifically
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'inglourious-basterds':
        // Highlight Inglourious Basterds specifically
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'django-unchained':
        // Highlight Django Unchained specifically
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'hateful-eight':
        // Highlight The Hateful Eight specifically
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'hollywood':
        // Highlight Hollywood specifically
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'western':
        setFilters({ subclouds: ['western'] });
        setHighlightedCategory(null);
        break;
      case 'crime':
        setFilters({ subclouds: ['crime', 'noir', 'neo-noir'] });
        setHighlightedCategory(null);
        break;
      case 'exploitation':
        setFilters({ subclouds: ['exploitation'] });
        setHighlightedCategory(null);
        break;
      case 'femme':
        setFilters({ subclouds: ['femme-fatale'] });
        setHighlightedCategory(null);
        break;
      case 'anime':
        setFilters({ subclouds: ['anime'] });
        setHighlightedCategory(null);
        break;
      case 'hong-kong':
        setFilters({ subclouds: ['hong-kong-action'] });
        setHighlightedCategory(null);
        break;
      case 'wwii':
        setFilters({ subclouds: ['wwii'] });
        setHighlightedCategory(null);
        break;
      default:
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors([]);
        setHighlightedCategory(null);
    }
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
    setYearRange([1940, 2025]);
    setSelectedDirectors([]);
    setSearchQuery('');
  }, []);

  const resetCamera = useCallback(() => {
    // Camera reset logic would be implemented in Graph component
    window.location.reload(); // Temporary solution
  }, []);

  const onNodeClick = useCallback((node: NodeData) => {
    setSelectedNode(node);

    // Set theme based on selected film
    setThemeByFilm(node.id);

    // Find neighbors
    const nodeNeighbors = new Set<string>();
    filteredData.links.forEach(link => {
      const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
      const targetId = typeof link.target === 'string' ? link.target : link.target.id;

      if (sourceId === node.id) {
        nodeNeighbors.add(targetId);
      } else if (targetId === node.id) {
        nodeNeighbors.add(sourceId);
      }
    });

    setNeighbors(nodeNeighbors);
    setHighlightedCategory(null); // Clear category highlighting when selecting a node
  }, [filteredData.links, setThemeByFilm]);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Themed Loading Screen with Fade-Out Transition */}
      <LoadingScreen show={showLoading} progress={loadingProgress} theme={currentTheme} />

      {/* Main Graph */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-yellow-400 text-xl font-mono">Loading Graph...</div>
        </div>
      }>
        {introComplete && (
          <Graph
            data={filteredData}
            onNodeClick={onNodeClick}
            graphRef={graphRef}
            viewMode={viewMode}
            showPosters={showPosters}
            highlightedCategory={highlightedCategory}
            selectedNode={selectedNode}
            neighbors={neighbors}
            showLegend={showLegend}
            posterScale={posterScale}
            lineOpacity={lineOpacity}
          />
        )}
      </Suspense>

      {/* Film Detail Panel */}
      <FilmDetailPanel
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
        onNavigateToFilm={(filmName: string) => {
          // Close current card
          setSelectedNode(null);
          // Find and select the new film
          const newFilm = INITIAL_GRAPH_DATA.nodes.find(n => n.name === filmName);
          if (newFilm) {
            // Brief delay for animation
            setTimeout(() => setSelectedNode(newFilm), 300);
          }
        }}
      />

      {/* Search Results */}
      <SearchResults
        searchResults={searchResults}
        onSelectFilm={(film) => {
          setSelectedNode(film);
          setSearchResults([]);
        }}
        onClose={() => setSearchResults([])}
      />

      {/* Gesture Tutorial */}
      {showGestureTutorial && (
        <GestureTutorial
          onDismiss={() => {
            localStorage.setItem('gestureTutorialSeen', 'true');
            setShowGestureTutorial(false);
          }}
        />
      )}

      {/* Timeline Axis - No banner */}
      {viewMode === 'timeline' && (() => {
        const years = [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2025];
        return (
          <div className="fixed bottom-8 left-0 right-0 flex justify-center pointer-events-none z-20">
            <div className="bg-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 shadow-2xl">
              <div className="flex items-end gap-1" style={{ width: '85vw', maxWidth: '1200px' }}>
                {years.map((year, i) => {
                  const decadeFilms = INITIAL_GRAPH_DATA.nodes.filter(node =>
                    node.year >= year && node.year < year + 10
                  ).length;

                  return (
                    <div
                      key={year}
                      className="flex-1 flex flex-col items-center group"
                    >
                      {/* Main timeline bar */}
                      <div className="h-6 w-1 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t shadow-lg" />

                      {/* Year label with film count */}
                      <div className="mt-2 text-center">
                        <span className="text-yellow-400 font-bold text-sm block group-hover:text-yellow-300 transition-colors">
                          {year}
                        </span>
                        <span className="text-yellow-600/80 text-xs font-mono">
                          {decadeFilms}
                        </span>
                      </div>

                      {/* Decade separator line for non-last items */}
                      {i < years.length - 1 && (
                        <div className="absolute top-0 w-1 h-6 bg-yellow-500/20 translate-x-full -translate-y-6" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-3 text-center">
                <span className="text-yellow-500/70 text-xs uppercase tracking-wider">
                  Year • Film Count
                </span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Control Panel */}
      <ControlPanel
        filters={filters}
        setFilters={setFilters}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        viewMode={viewMode}
        setViewMode={setViewMode}
        showPosters={showPosters}
        setShowPosters={setShowPosters}
        onResetCamera={resetCamera}
        applyPreset={applyPreset}
        showLegend={showLegend}
        setShowLegend={setShowLegend}
        posterScale={posterScale}
        setPosterScale={setPosterScale}
        lineOpacity={lineOpacity}
        setLineOpacity={setLineOpacity}
        yearRange={yearRange}
        setYearRange={setYearRange}
        resetFilters={resetFilters}
        selectedDirectors={selectedDirectors}
        setSelectedDirectors={setSelectedDirectors}
      />
    </div>
  );
};

// --- Render App ---

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
