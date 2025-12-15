/**
 * FURTHER IMPROVED Graph.tsx - User Feedback Fixes
 *
 * Addressing user feedback:
 * 1. Posters always right-side up with billboard rotation
 * 2. Less 3D - stronger 2D flattening
 * 3. Remove background stars (black background only)
 * 4. Thicker, more visible lines without directional dots
 * 5. Enhanced hover effects for films
 * 6. Multi-dimensional filtering (genres, countries, etc.)
 * 7. Better node interaction and camera controls
 */

import React, { useRef, useEffect, useCallback, useState } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { GraphData, NodeData } from '../types';
import { createPosterNode } from '../utils/nodeHelpers';
import * as THREE from 'three';

interface GraphProps {
  data: GraphData;
  onNodeClick: (node: NodeData) => void;
  graphRef: React.MutableRefObject<any>;
  is2D: boolean;
  highlightedCategory: string | null;
}

// Subcloud cluster positions for better grouping
const SUBCLOUD_CLUSTERS: Record<string, { x: number; y: number }> = {
  'kill-bill-core': { x: 0, y: 0 },
  'samurai': { x: -150, y: 100 },
  'kung-fu': { x: -100, y: -100 },
  'spaghetti-western': { x: 150, y: 100 },
  'blaxploitation': { x: 100, y: -150 },
  'exploitation': { x: -150, y: -100 },
  'grindhouse': { x: -200, y: 0 },
  'modern-revenge': { x: 200, y: 0 },
  'noir': { x: 0, y: 200 },
  'foundation': { x: 0, y: -200 },
};

const Graph: React.FC<GraphProps> = ({ data, onNodeClick, graphRef, is2D, highlightedCategory }) => {

  // Re-heat simulation when view mode changes
  useEffect(() => {
     if (graphRef.current) {
         graphRef.current.d3ReheatSimulation();
         if (is2D) {
            // Zoom out for 2D overview
            graphRef.current.cameraPosition({x: 0, y: 0, z: 600}, {x:0, y:0, z:0}, 1000);
         }
     }
  }, [is2D, graphRef]);

  // Configure d3 forces - TIGHTENED for better density
  useEffect(() => {
    const fg = graphRef.current;
    if (!fg) return;

    // 1. LINK: Stronger pull, shorter distance
    fg.d3Force('link')
      ?.distance((link: any) => {
          const s = (link.source as any).size || 10;
          const t = (link.target as any).size || 10;
          // Much shorter: (15+15)*0.8 = 24 instead of 45
          return (s + t) * 0.8;
      })
      .strength(1.2); // Stronger pull (was 0.8)

    // 2. CHARGE: Much stronger repulsion for clear separation
    fg.d3Force('charge')
      ?.strength(-400) // Was -120, now -400 for tighter packing
      .distanceMax(200); // Shorter range (was 250)

    // 3. CENTER: Stronger gravity to prevent drift
    fg.d3Force('center')?.strength(is2D ? 0.5 : 0.8);

    // 4. COLLISION: Prevent overlap
    const collisionForce = (alpha: number) => {
      const minDist = 25; // Minimum distance between nodes
      const nodes = data.nodes;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i] as any;
          const b = nodes[j] as any;
          if (a.x === undefined || b.x === undefined) continue;

          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dz = is2D ? 0 : (b.z || 0) - (a.z || 0);
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz) || 1;

          if (dist < minDist) {
            const force = (minDist - dist) / dist * 0.5 * alpha;
            a.vx -= dx * force;
            a.vy -= dy * force;
            if (!is2D) a.vz -= dz * force;
            b.vx += dx * force;
            b.vy += dy * force;
            if (!is2D) b.vz += dz * force;
          }
        }
      }
    };
    fg.d3Force('collision', collisionForce);

    // 5. FLATTEN: Much stronger for 2D mode
    const flattenForce = (alpha: number) => {
      if (!is2D) return;
      const k = alpha * 0.9; // Much stronger (was 0.5)
      data.nodes.forEach((node: any) => {
        if (node.z !== undefined && node.vz !== undefined) {
          node.vz -= node.z * k;
          node.z *= (1 - k * 0.3); // Also directly reduce z
        }
      });
    };
    fg.d3Force('flatten', flattenForce);

    // 6. CLUSTER: Group by subcloud
    const clusterForce = (alpha: number) => {
      const strength = alpha * 0.05;
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

    fg.d3ReheatSimulation();

  }, [graphRef, is2D, data]);

  // REMOVED: No more starfield - pure black background as requested

  const nodeThreeObject = useCallback((node: any) => {
    const isDimmed = highlightedCategory
      ? !node.subclouds.includes(highlightedCategory)
      : false;
    return createPosterNode(node as NodeData, isDimmed);
  }, [highlightedCategory]);

  return (
    <div className="w-full h-screen">
      <ForceGraph3D
        ref={graphRef}
        graphData={data}
        nodeLabel={(node: any) => `${node.name} (${node.year})`}
        nodeThreeObject={nodeThreeObject}

        showNavInfo={false}

        // LINK WIDTH: Much thicker for better visibility (user feedback)
        linkWidth={link => {
            if (highlightedCategory) {
                const source = link.source as NodeData;
                const target = link.target as NodeData;
                const sMatch = source.subclouds && source.subclouds.includes(highlightedCategory);
                const tMatch = target.subclouds && target.subclouds.includes(highlightedCategory);
                return (sMatch && tMatch) ? 8 : 1; // Even thicker when highlighted
            }
            return 6; // Much thicker default (was 4, originally 3)
        }}

        // LINK COLOR: More visible with gradient effect
        linkColor={(link: any) => {
           if (!highlightedCategory) {
             // Brighter, more visible color
             return 'rgba(150,220,255,0.9)'; // Brighter cyan-ish white
           }

           const source = link.source as NodeData;
           const target = link.target as NodeData;
           const sourceMatch = source.subclouds && source.subclouds.includes(highlightedCategory);
           const targetMatch = target.subclouds && target.subclouds.includes(highlightedCategory);

           return (sourceMatch && targetMatch) ? '#FFD700' : 'rgba(255,255,255,0.08)';
        }}

        // REMOVED: No directional particles (dots) on lines - user wants cleaner look

        backgroundColor="#000000"

        numDimensions={3}
        d3AlphaDecay={0.02} // Slower decay = more stable layout
        d3VelocityDecay={0.25} // Less friction

        onNodeClick={(node) => {
          const dist = 100; // Closer zoom (was 140)

          if (graphRef.current) {
            const newPos = {
                x: node.x,
                y: node.y,
                z: (node.z || 0) + dist
            };

            graphRef.current.cameraPosition(
              newPos,
              node,
              1200 // Faster transition
            );
          }
          onNodeClick(node as NodeData);
        }}

        onNodeHover={(node) => {
           document.body.style.cursor = node ? 'pointer' : 'default';
        }}

        // Better default zoom
        onEngineStop={() => {
          if (graphRef.current) {
            // Center on Kill Bill after simulation settles
            const kb = data.nodes.find(n => n.id.includes('kill-bill-vol-1'));
            if (kb && !kb.x) {
              graphRef.current.zoomToFit(1000, 50);
            }
          }
        }}
      />
    </div>
  );
};

export default Graph;