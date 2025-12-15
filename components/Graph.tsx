import React, { useEffect, useCallback } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { GraphData, NodeData } from '../types';
import { createPosterNode, createGeometryNode } from '../utils/nodeHelpers';
import * as THREE from 'three';

interface GraphProps {
  data: GraphData;
  onNodeClick: (node: NodeData) => void;
  graphRef: React.MutableRefObject<any>;
  viewMode: '3d' | '2d' | 'timeline';
  showPosters: boolean;
  highlightedCategory: string | null;
  selectedNode: NodeData | null;
  neighbors: Set<string>; // IDs of neighbor nodes
  posterScale: number;
  lineOpacity: number;
}

// Subcloud cluster positions for better grouping - expanded for full Tarantino network
const SUBCLOUD_CLUSTERS: Record<string, { x: number; y: number }> = {
  // Core Tarantino
  'kill-bill-core': { x: 0, y: 0 },

  // Asian Cinema (left side)
  'samurai': { x: -200, y: 100 },
  'kung-fu': { x: -150, y: -50 },
  'wuxia': { x: -180, y: 20 },
  'anime': { x: -220, y: -80 },
  'anime-influenced': { x: -220, y: -80 },
  'hong-kong-action': { x: -120, y: -120 },
  'heroic-bloodshed': { x: -100, y: -150 },

  // Westerns (right side)
  'spaghetti-western': { x: 200, y: 100 },
  'western': { x: 180, y: 50 },
  'revisionist': { x: 220, y: 150 },

  // Exploitation/Grindhouse (bottom left)
  'exploitation': { x: -150, y: -180 },
  'grindhouse': { x: -180, y: -220 },
  'neo-grindhouse': { x: -100, y: -200 },
  'blaxploitation': { x: -50, y: -180 },

  // Crime/Noir (top)
  'noir': { x: 0, y: 200 },
  'film-noir': { x: 30, y: 220 },
  'neo-noir': { x: -30, y: 180 },
  'crime': { x: 50, y: 150 },
  'heist': { x: 80, y: 180 },

  // Modern Action (right bottom)
  'modern-revenge': { x: 200, y: -50 },
  'modern-action': { x: 180, y: -100 },

  // Female-led (bottom right)
  'female-action': { x: 150, y: -150 },
  'female-lead': { x: 130, y: -180 },
  'female-ensemble': { x: 170, y: -180 },
  'revenge': { x: 100, y: -120 },

  // Car chase/Road films (bottom)
  'car-chase': { x: 0, y: -250 },
  '70s-cinema': { x: -50, y: -230 },

  // War/WWII (top right)
  'wwii': { x: 250, y: 200 },
  'war': { x: 230, y: 180 },
  'men-on-mission': { x: 270, y: 220 },

  // French New Wave (top left)
  'french-new-wave': { x: -250, y: 180 },

  // Foundation/Default
  'foundation': { x: 0, y: -200 },
  'action': { x: 50, y: -50 },
};

const Graph: React.FC<GraphProps> = ({
  data,
  onNodeClick,
  graphRef,
  viewMode,
  showPosters,
  highlightedCategory,
  selectedNode,
  neighbors,
  posterScale,
  lineOpacity
}) => {

  // Debug logging
  useEffect(() => {
    console.log('Graph component mounted');
    console.log('Graph data received:', {
      nodes: data.nodes?.length || 0,
      links: data.links?.length || 0,
      viewMode,
      showPosters,
      posterScale,
      lineOpacity,
      dataKeys: Object.keys(data),
      hasNodes: Boolean(data.nodes),
      hasLinks: Boolean(data.links)
    });
  }, [data, viewMode, showPosters, posterScale, lineOpacity]);

  // Re-heat simulation when view mode changes
  useEffect(() => {
     if (graphRef.current) {
         console.log('Re-heating simulation for view mode:', viewMode);
         graphRef.current.d3ReheatSimulation();

         // Camera adjustments based on mode
         if (viewMode === '2d') {
            graphRef.current.cameraPosition({x: 0, y: 0, z: 700}, {x:0, y:0, z:0}, 1000);
         } else if (viewMode === 'timeline') {
             // Side view for timeline
            graphRef.current.cameraPosition({x: 0, y: 50, z: 900}, {x:0, y:0, z:0}, 1000);
         }
     }
  }, [viewMode, graphRef]);

  // Configure d3 forces
  useEffect(() => {
    const fg = graphRef.current;
    if (!fg) return;

    // Reset forces first
    fg.d3Force('timeline', null);
    fg.d3Force('cluster', null);

    // 1. LINK
    fg.d3Force('link')
      ?.distance((link: any) => {
          const s = (link.source as any).size || 10;
          const t = (link.target as any).size || 10;
          // Scale distance slightly with poster size to avoid overlaps
          return (s + t) * (viewMode === 'timeline' ? 0.8 : 1.0) * posterScale;
      })
      .strength(viewMode === 'timeline' ? 0.05 : 1.0); 

    // 2. CHARGE
    fg.d3Force('charge')
      ?.strength(viewMode === 'timeline' ? -200 : -600) // Stronger repulsion for clearer view
      .distanceMax(viewMode === 'timeline' ? 300 : 300);

    // 3. CENTER
    fg.d3Force('center')?.strength(viewMode === '3d' ? 0.6 : 0.1);

    // 4. TIMELINE FORCE (Custom X-Axis positioning)
    if (viewMode === 'timeline') {
        const timelineForce = (alpha: number) => {
            const k = alpha * 0.6;
            data.nodes.forEach((node: any) => {
                // Map 1946-2022 to X range
                const targetX = (node.year - 1980) * 15; 
                node.vx += (targetX - node.x) * k;
                node.vz -= node.z * k; // Flatten Z severely
                node.vy -= node.y * alpha * 0.01; 
            });
        };
        fg.d3Force('timeline', timelineForce);
    } 
    
    // 5. FLATTEN (For 2D mode)
    if (viewMode === '2d') {
        const flattenForce = (alpha: number) => {
          const k = alpha * 2.0; 
          data.nodes.forEach((node: any) => {
            node.vz -= node.z * k;
            node.z *= 0.1; 
          });
        };
        fg.d3Force('flatten', flattenForce);
    }

    // 6. CLUSTER (Only in Graph Modes)
    if (viewMode !== 'timeline') {
        const clusterForce = (alpha: number) => {
          const strength = alpha * 0.1;
          data.nodes.forEach((node: any) => {
            const primarySubcloud = node.subclouds?.[0];
            const cluster = SUBCLOUD_CLUSTERS[primarySubcloud];
            if (cluster && node.x !== undefined) {
              node.vx += (cluster.x - node.x) * strength;
              node.vy += (cluster.y - node.y) * strength;
            }
          });
        };
        fg.d3Force('cluster', clusterForce);
    }

    fg.d3ReheatSimulation();

  }, [graphRef, viewMode, data, posterScale]); // Re-run when poster scale changes

  const nodeThreeObject = useCallback((node: any) => {
    let isDimmed = false;

    if (selectedNode) {
        const isSelected = node.id === selectedNode.id;
        const isNeighbor = neighbors.has(node.id);
        if (!isSelected && !isNeighbor) {
            isDimmed = true;
        }
    } else if (highlightedCategory) {
        if (!node.subclouds.includes(highlightedCategory)) {
            isDimmed = true;
        }
    }

    if (showPosters) {
        return createPosterNode(node as NodeData, isDimmed, posterScale);
    } else {
        return createGeometryNode(node as NodeData, isDimmed);
    }
  }, [highlightedCategory, showPosters, selectedNode, neighbors, posterScale]);

  // Only render ForceGraph3D when we have actual data to prevent Three.js errors
  if (!data || !data.nodes || data.nodes.length === 0) {
    return null; // Don't render anything during loading
  }

  return (
    <div className="w-full h-screen">
      <ForceGraph3D
        ref={graphRef}
        graphData={data}
        nodeLabel={(node: any) => `${node.name} (${node.year})`}
        nodeThreeObject={nodeThreeObject}

        showNavInfo={false}

        linkWidth={link => {
            const sourceId = typeof link.source === 'object' ? (link.source as any).id : link.source;
            const targetId = typeof link.target === 'object' ? (link.target as any).id : link.target;

            if (selectedNode) {
                const isConnected =
                    (sourceId === selectedNode.id && neighbors.has(targetId)) ||
                    (targetId === selectedNode.id && neighbors.has(sourceId));
                return isConnected ? 6 : 0.5;
            }

            if (highlightedCategory) {
                const source = link.source as NodeData;
                const target = link.target as NodeData;
                const sMatch = source.subclouds && source.subclouds.includes(highlightedCategory);
                const tMatch = target.subclouds && target.subclouds.includes(highlightedCategory);
                return (sMatch && tMatch) ? 6 : 1;
            }
            return 3;
        }}

        linkResolution={10}

        linkColor={(link: any) => {
           const sourceId = typeof link.source === 'object' ? (link.source as any).id : link.source;
           const targetId = typeof link.target === 'object' ? (link.target as any).id : link.target;

           // Selected Node Logic
           if (selectedNode) {
                const isConnected =
                    (sourceId === selectedNode.id && neighbors.has(targetId)) ||
                    (targetId === selectedNode.id && neighbors.has(sourceId));

                return isConnected ? '#FFD700' : 'rgba(50,50,50,0.05)';
           }

           // Category Highlight Logic
           if (highlightedCategory) {
               const source = link.source as NodeData;
               const target = link.target as NodeData;
               const sourceMatch = source.subclouds && source.subclouds.includes(highlightedCategory);
               const targetMatch = target.subclouds && target.subclouds.includes(highlightedCategory);
               return (sourceMatch && targetMatch) ? '#FFD700' : 'rgba(50,50,50,0.05)';
           }

           // Default Logic (No Selection)
           // Use the user-defined opacity
           return `rgba(255,255,255,${lineOpacity})`;
        }}

        backgroundColor="#000000"

        numDimensions={3}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.3}

        onNodeClick={(node) => {
          const dist = viewMode === '2d' ? 200 : 150;
          if (graphRef.current) {
            const newPos = {
                x: node.x,
                y: node.y,
                z: (node.z || 0) + dist
            };
            graphRef.current.cameraPosition(newPos, node, 1000);
          }
          onNodeClick(node as NodeData);
        }}

        onNodeHover={(node) => {
           document.body.style.cursor = node ? 'pointer' : 'default';
        }}
      />
    </div>
  );
};

export default Graph;
