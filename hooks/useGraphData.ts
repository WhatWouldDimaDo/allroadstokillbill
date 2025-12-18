import React, { useState, useMemo, useCallback, useRef } from 'react';
import { INITIAL_GRAPH_DATA, COLOR_PALETTE } from '../graphData_final_with_posters';
import { NodeData } from '../types';

interface UseGraphDataProps {
  setThemeByFilm: (filmId: string) => void;
}

export const useGraphData = ({ setThemeByFilm }: UseGraphDataProps) => {
  // State
  const [viewMode, setViewMode] = useState<'3d' | '2d' | 'timeline'>('3d');
  const [showPosters, setShowPosters] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [posterScale, setPosterScale] = useState(1.0);
  const [lineOpacity, setLineOpacity] = useState(0.3);
  const [yearRange, setYearRange] = useState<[number, number]>([1940, 2025]);
  const [selectedDirectors, setSelectedDirectors] = useState<string[]>([]);
  const [filters, setFilters] = useState({ subclouds: Object.keys(COLOR_PALETTE) });
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [neighbors, setNeighbors] = useState<Set<string>>(new Set());
  const graphRef = useRef<any>(null);

  // Filtered data
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

  // Functions
  const applyPreset = useCallback((preset: string) => {
    switch (preset) {
      case 'all':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors([]);
        setHighlightedCategory(null);
        break;
      case 'kb-influences':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors([]);
        setHighlightedCategory('kill-bill-core');
        break;
      case 'reservoir-dogs':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'pulp-fiction':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'jackie-brown':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'death-proof':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'inglourious-basterds':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'django-unchained':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'hateful-eight':
        setFilters({ subclouds: Object.keys(COLOR_PALETTE) });
        setYearRange([1940, 2025]);
        setSelectedDirectors(['Quentin Tarantino']);
        setHighlightedCategory(null);
        break;
      case 'hollywood':
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
  }, []);

  const resetCamera = useCallback(() => {
    window.location.reload(); // Temporary solution
  }, []);

  const onNodeClick = useCallback((node: NodeData) => {
    setSelectedNode(node);
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
    setHighlightedCategory(null);
  }, [filteredData.links, setThemeByFilm]);

  return {
    // State
    viewMode,
    setViewMode,
    showPosters,
    setShowPosters,
    showLegend,
    setShowLegend,
    posterScale,
    setPosterScale,
    lineOpacity,
    setLineOpacity,
    yearRange,
    setYearRange,
    selectedDirectors,
    setSelectedDirectors,
    filters,
    setFilters,
    highlightedCategory,
    setHighlightedCategory,
    selectedNode,
    setSelectedNode,
    neighbors,
    setNeighbors,
    graphRef,
    
    // Computed
    filteredData,
    
    // Functions
    applyPreset,
    resetFilters,
    resetCamera,
    onNodeClick,
  };
};
