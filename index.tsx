import React, { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Graph from "./components/Graph";
import { INITIAL_GRAPH_DATA, COLOR_PALETTE } from "./graphData_final_with_posters";
import { NodeData } from "./types";

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
    resetFilters
}: any) => {
  const [isOpen, setIsOpen] = useState(true); // Default open on desktop
  const [activeTab, setActiveTab] = useState<'controls' | 'filters'>('controls');
  const categories = Object.keys(COLOR_PALETTE).slice(0, 15);

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

                        {/* Presets */}
                        <div>
                            <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3 border-b border-red-900/30 pb-1">Scenarios</h3>
                            <div className="space-y-2 font-mono text-xs">
                                <button onClick={() => applyPreset('all')} className="w-full text-left px-4 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Show Full Network
                                </button>
                                <button onClick={() => applyPreset('kb-influences')} className="w-full text-left px-4 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Origins of Kill Bill
                                </button>
                                <button onClick={() => applyPreset('anime')} className="w-full text-left px-4 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Anime Influences
                                </button>
                                <button onClick={() => applyPreset('western')} className="w-full text-left px-4 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Westerns
                                </button>
                                <button onClick={() => applyPreset('femme')} className="w-full text-left px-4 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Femme Fatale
                                </button>
                                 <button onClick={() => applyPreset('crime')} className="w-full text-left px-4 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 border-l-2 border-transparent hover:border-yellow-400 transition-all uppercase">
                                    Crime & Noir
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
                                        className="opacity-0 group-hover:opacity-100 text-[9px] bg-gray-700 hover:bg-white hover:text-black text-white px-2 py-1 uppercase font-bold tracking-wider transition-all"
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

const DetailsPanel = ({ node, onClose, onNodeLinkClick }: { node: NodeData | null, onClose: () => void, onNodeLinkClick: (name: string) => void }) => {
  if (!node) return null;

  return (
    <div className="absolute top-0 md:top-4 right-0 md:right-4 w-full md:w-[400px] h-full md:h-auto md:max-h-[90vh] bg-black border-l md:border border-gray-800 md:rounded-lg z-30 overflow-hidden shadow-2xl animate-fade-in-right flex flex-col">
      <div className="relative h-96 shrink-0 bg-gray-900 overflow-hidden group border-b-4 border-yellow-400">
        {node.posterUrl ? (
            <img src={node.posterUrl} alt={node.name} className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <span className="text-gray-600 text-4xl font-bold opacity-30 font-mono">NO IMAGE</span>
            </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <h1 className="text-4xl font-black text-white mb-2 leading-none uppercase tracking-tighter drop-shadow-lg">{node.name}</h1>
            <div className="flex items-center gap-3 text-sm font-mono font-bold tracking-widest text-yellow-400">
                <span>{node.year}</span>
                <span className="text-gray-500">|</span>
                <span>{node.director?.split('|')[0]}</span>
            </div>
        </div>

        <button 
            className="absolute top-4 right-4 bg-black/50 hover:bg-red-600 text-white rounded-full p-2 transition-colors backdrop-blur-sm border border-white/20"
            onClick={onClose}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-black">
        <div className="mb-8 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-white text-black text-[10px] font-black uppercase tracking-wider">
                {node.country?.split('|')[0] || "UNKNOWN"}
            </span>
            {node.genres?.slice(0, 3).map(g => (
                <span key={g} className="px-2 py-1 border border-gray-700 text-gray-300 text-[10px] font-bold uppercase tracking-wider">
                    {g}
                </span>
            ))}
        </div>

        {node.influenceNotes && (
            <div className="mb-8 p-5 bg-gray-900 border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-yellow-500 mb-2 font-bold">The Connection</h4>
                <p className="text-gray-100 text-sm font-serif italic leading-relaxed opacity-90">"{node.influenceNotes}"</p>
            </div>
        )}

        <div className="grid grid-cols-1 gap-8">
            {node.influencedBy && node.influencedBy.length > 0 && (
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-red-500 mb-4 font-bold border-b border-gray-800 pb-2">Influenced By</h4>
                    <div className="flex flex-col gap-2">
                        {node.influencedBy.map((item, i) => (
                            <button 
                                key={i} 
                                onClick={() => onNodeLinkClick(item)}
                                className="text-left text-gray-400 hover:text-white hover:bg-gray-900 p-2 text-sm transition-colors border-l-2 border-transparent hover:border-yellow-400"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            
            {node.influences && node.influences.length > 0 && (
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-red-500 mb-4 font-bold border-b border-gray-800 pb-2">Influences</h4>
                    <div className="flex flex-col gap-2">
                        {node.influences.map((item, i) => (
                            <button 
                                key={i} 
                                onClick={() => onNodeLinkClick(item)}
                                className="text-left text-gray-400 hover:text-white hover:bg-gray-900 p-2 text-sm transition-colors border-l-2 border-transparent hover:border-yellow-400"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

const Legend = ({ onHighlight, showLegend }: { onHighlight: (cat: string | null) => void, showLegend: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const categories = Object.entries(COLOR_PALETTE);
  // On mobile show fewer
  const displayCats = expanded ? categories : categories.slice(0, 6);

  if (!showLegend) return null;

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none w-full px-4">
      <div className="flex flex-wrap justify-center gap-2 pointer-events-auto bg-black border border-gray-800 p-4 shadow-2xl max-w-4xl">
        {displayCats.map(([cat, color]) => (
          <div 
            key={cat} 
            className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 px-3 py-1.5 border border-gray-700 hover:border-yellow-400 transition-all cursor-pointer group"
            onMouseEnter={() => onHighlight(cat)}
            onMouseLeave={() => onHighlight(null)}
          >
            <div className="w-3 h-3" style={{ backgroundColor: color }}></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-white">{cat.replace(/-/g, ' ')}</span>
          </div>
        ))}
        
        {categories.length > 6 && (
            <button 
                onClick={() => setExpanded(!expanded)}
                className="px-4 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-[10px] font-black text-black uppercase tracking-wider"
            >
                {expanded ? '-' : '+'}
            </button>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const fgRef = useRef<any>(null);

  // Debug logging
  useEffect(() => {
    console.log('App component mounted');
    console.log('Color palette:', COLOR_PALETTE);
    console.log('Initial graph data nodes:', INITIAL_GRAPH_DATA.nodes.length);
    console.log('Initial graph data links:', INITIAL_GRAPH_DATA.links.length);
  }, []);

  // States
  const [filters, setFilters] = useState({
    subclouds: Object.keys(COLOR_PALETTE)
  });
  const [yearRange, setYearRange] = useState([1940, 2025]);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'3d' | '2d' | 'timeline'>('3d');
  const [showPosters, setShowPosters] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [posterScale, setPosterScale] = useState(1.0);
  const [lineOpacity, setLineOpacity] = useState(0.15); // Low default for less clutter

  // Intro Animation State
  const [introYear, setIntroYear] = useState(1940);
  const [introComplete, setIntroComplete] = useState(false);

  // Intro Animation Effect
  useEffect(() => {
    // Only run once on mount
    const interval = setInterval(() => {
        setIntroYear(prev => {
            if (prev >= 2025) {
                clearInterval(interval);
                setIntroComplete(true);
                return 2025;
            }
            // Speed up as we go
            const increment = prev < 1970 ? 1 : (prev < 2000 ? 2 : 3);
            return prev + increment;
        });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Filter Reset Logic
  const resetFilters = () => {
      setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
      setYearRange([1940, 2025]);
  };

  // Preset Logic
  const applyPreset = (preset: 'all' | 'kb-influences' | 'kb-influenced' | 'anime' | 'western' | 'exploitation' | 'femme' | 'crime') => {
      setSelectedNode(null);
      resetFilters();

      if (preset === 'all') {
          handleResetCamera();
      } else if (preset === 'kb-influences') {
          const kb1 = INITIAL_GRAPH_DATA.nodes.find(n => n.id.includes('kill-bill-vol-1'));
          if (kb1) handleNodeClick(kb1);
      } else if (preset === 'anime') {
          setFilters({ subclouds: ['anime', 'anime-influenced', 'sci-fi-action'] });
          handleResetCamera();
      } else if (preset === 'western') {
          setFilters({ subclouds: ['western', 'spaghetti-western'] });
          handleResetCamera();
      } else if (preset === 'exploitation') {
          setFilters({ subclouds: ['exploitation', 'grindhouse', 'neo-grindhouse', 'blaxploitation'] });
          handleResetCamera();
      } else if (preset === 'femme') {
          setFilters({ subclouds: ['female-action', 'female-lead', 'female-ensemble', 'revenge', 'modern-revenge'] });
          handleResetCamera();
      } else if (preset === 'crime') {
          setFilters({ subclouds: ['crime', 'noir', 'film-noir', 'yakuza', 'action'] });
          handleResetCamera();
      }
  };

  // Process data based on filters AND intro animation
  const filteredData = useMemo(() => {
    // 1. Filter by Intro Animation (Year)
    let activeNodes = INITIAL_GRAPH_DATA.nodes;
    if (!introComplete) {
        activeNodes = activeNodes.filter(n => n.year <= introYear);
    }

    // 2. Filter by Year Range (Slider)
    activeNodes = activeNodes.filter(n => n.year >= yearRange[0] && n.year <= yearRange[1]);

    // 3. Filter by Subclouds
    activeNodes = activeNodes.filter(node => 
      node.subclouds.some(sc => filters.subclouds.includes(sc))
    );
    
    const activeNodeIds = new Set(activeNodes.map(n => n.id));
    
    // 4. Filter links
    const activeLinks = INITIAL_GRAPH_DATA.links.filter(link => {
        const sourceId = typeof link.source === 'object' ? (link.source as any).id : link.source;
        const targetId = typeof link.target === 'object' ? (link.target as any).id : link.target;
        return activeNodeIds.has(sourceId) && activeNodeIds.has(targetId);
    });
    
    return { nodes: activeNodes, links: activeLinks };
  }, [filters, introYear, introComplete, yearRange]);

  // Determine neighbors for focus mode
  const neighbors = useMemo(() => {
      const set = new Set<string>();
      if (!selectedNode) return set;

      set.add(selectedNode.id);
      INITIAL_GRAPH_DATA.links.forEach(link => {
          const sourceId = typeof link.source === 'object' ? (link.source as any).id : link.source;
          const targetId = typeof link.target === 'object' ? (link.target as any).id : link.target;
          
          if (sourceId === selectedNode.id) set.add(targetId as string);
          if (targetId === selectedNode.id) set.add(sourceId as string);
      });
      return set;
  }, [selectedNode]);

  const handleNodeClick = useCallback((node: NodeData) => {
    setSelectedNode(node);
  }, []);

  const handleNodeLinkClick = (name: string) => {
      const targetNode = INITIAL_GRAPH_DATA.nodes.find(n => 
          n.name.toLowerCase() === name.toLowerCase() || 
          n.fullTitle?.toLowerCase() === name.toLowerCase() ||
          name.toLowerCase().includes(n.name.toLowerCase()) 
      );

      if (targetNode) {
          handleNodeClick(targetNode);
          if (fgRef.current) {
              const dist = viewMode === '2d' ? 200 : 100;
              const newPos = {
                  x: targetNode.x || 0,
                  y: targetNode.y || 0,
                  z: (targetNode.z || 0) + dist
              };
              fgRef.current.cameraPosition(newPos, targetNode, 1000);
          }
      }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const node = INITIAL_GRAPH_DATA.nodes.find(n => n.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (node) {
      handleNodeClick(node);
      if (fgRef.current) {
        const dist = viewMode === '2d' ? 200 : 100;
        const newPos = { x: node.x || 0, y: node.y || 0, z: (node.z || 0) + dist };
        fgRef.current.cameraPosition(newPos, node, 1500);
      }
    }
  };

  const handleResetCamera = () => {
    if (viewMode === 'timeline') {
        fgRef.current?.cameraPosition({x: 0, y: 50, z: 900}, {x:0, y:0, z:0}, 1500);
    } else if (viewMode === '2d') {
        fgRef.current?.cameraPosition({ x: 0, y: 0, z: 700 }, { x: 0, y: 0, z: 0 }, 1500);
    } else {
        fgRef.current?.cameraPosition({ x: 0, y: 0, z: 600 }, { x: 0, y: 0, z: 0 }, 1500);
    }
    setSelectedNode(null);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans text-white selection:bg-yellow-400 selection:text-black">
      
      {/* Intro Overlay */}
      {!introComplete && (
          <div className="absolute inset-0 pointer-events-none z-50 flex flex-col items-center justify-center bg-transparent">
              <div className="text-[120px] font-black text-yellow-400 opacity-20 tracking-tighter tabular-nums animate-pulse">
                  {introYear}
              </div>
          </div>
      )}

      {/* Graph Area */}
      <Graph 
        data={filteredData} 
        onNodeClick={handleNodeClick} 
        graphRef={fgRef}
        viewMode={viewMode}
        showPosters={showPosters}
        highlightedCategory={highlightedCategory}
        selectedNode={selectedNode}
        neighbors={neighbors}
        posterScale={posterScale}
        lineOpacity={lineOpacity}
      />

      {/* Control Panel (Left Sidebar / Drawer) */}
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
        onResetCamera={handleResetCamera}
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
      />
      
      {/* Floating Reset Button */}
      <button 
          onClick={handleResetCamera}
          className="absolute bottom-24 right-4 md:bottom-8 md:right-8 bg-red-600 hover:bg-red-500 text-white rounded-full p-4 shadow-2xl z-20 transition-transform hover:scale-110 group border-2 border-black"
          title="Reset View"
      >
          <svg className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
      </button>

      {/* Details Panel (Right Sidebar) */}
      <DetailsPanel 
        node={selectedNode} 
        onClose={() => setSelectedNode(null)} 
        onNodeLinkClick={handleNodeLinkClick}
      />
      
      {/* Bottom Legend */}
      <Legend onHighlight={setHighlightedCategory} showLegend={showLegend} />

    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

export default App;
