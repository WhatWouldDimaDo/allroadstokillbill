import React, { useRef, useState, useMemo, useCallback, useEffect, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import Fuse from 'fuse.js';
import { INITIAL_GRAPH_DATA, COLOR_PALETTE } from "./graphData_final_with_posters";
import { NodeData } from "./types";

// Lazy load the Graph component for better performance
const Graph = lazy(() => import("./components/Graph"));

// --- Film Detail Panel Component ---
const FilmDetailPanel = ({
  node,
  onClose
}: {
  node: NodeData | null;
  onClose: () => void;
}) => {
  if (!node) return null;

  const formatRuntime = (minutes?: number) => {
    if (!minutes) return null;
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="absolute bottom-4 right-4 w-80 md:w-96 bg-black/95 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl z-30 overflow-hidden">
      {/* Header with poster thumbnail */}
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

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Director & Country */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">Director:</span>
          <span className="text-white font-medium">{node.director || 'Unknown'}</span>
        </div>

        {/* Rating & Runtime */}
        <div className="flex items-center gap-4">
          {node.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-white font-bold">{node.rating.toFixed(1)}</span>
              <span className="text-gray-500 text-xs">/10</span>
            </div>
          )}
          {node.runtime && (
            <div className="text-gray-300 text-sm">
              {formatRuntime(node.runtime)}
            </div>
          )}
        </div>

        {/* Overview */}
        {node.overview && (
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
            {node.overview}
          </p>
        )}

        {/* Genres */}
        {node.genres && node.genres.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {node.genres.slice(0, 4).map((genre, i) => (
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
        <div className="flex gap-2 pt-2 border-t border-gray-800">
          {node.trailerUrl && (
            <a
              href={node.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase text-center rounded transition-colors"
            >
              ▶ Trailer
            </a>
          )}
          {node.imdbId && (
            <a
              href={`https://www.imdb.com/title/${node.imdbId}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold uppercase text-center rounded transition-colors"
            >
              IMDb
            </a>
          )}
          {node.tmdbId && (
            <a
              href={`https://www.themoviedb.org/movie/${node.tmdbId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase text-center rounded transition-colors"
            >
              TMDB
            </a>
          )}
        </div>

        {/* Influence Info */}
        {(node.influencedBy && node.influencedBy.length > 0) || (node.influences && node.influences.length > 0) ? (
          <div className="pt-2 border-t border-gray-800 text-xs">
            {node.influencedBy && node.influencedBy.length > 0 && (
              <div className="mb-2">
                <span className="text-gray-500 uppercase text-[10px]">Influenced by: </span>
                <span className="text-gray-300">{node.influencedBy.slice(0, 3).join(', ')}</span>
              </div>
            )}
            {node.influences && node.influences.length > 0 && (
              <div>
                <span className="text-gray-500 uppercase text-[10px]">Influenced: </span>
                <span className="text-gray-300">{node.influences.slice(0, 3).join(', ')}</span>
              </div>
            )}
          </div>
        ) : null}
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

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);
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
  const [graphRef, setGraphRef] = useState<any>(null);

  // Complete intro after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setIntroComplete(true), 100);
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
  }, [filteredData.links]);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Loading Screen */}
      {!introComplete && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-center">
            <h1 className="text-yellow-400 text-4xl font-black font-mono mb-4">ALL ROADS TO KILL BILL</h1>
            <div className="text-gray-400 text-lg">Loading Film Network...</div>
          </div>
        </div>
      )}

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

      {/* Timeline Axis */}
      <TimelineAxis viewMode={viewMode} />

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

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
