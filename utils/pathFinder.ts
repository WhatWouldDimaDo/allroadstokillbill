import { NodeData, GraphData, LinkData } from '../types';

export interface PathResult {
  path: string[];
  distance: number;
  nodes: NodeData[];
}

export function findShortestPath(
  graph: GraphData,
  startId: string,
  endId: string
): PathResult | null {
  const visited = new Set<string>();
  const queue: { node: string; path: string[]; distance: number }[] = [
    { node: startId, path: [startId], distance: 0 }
  ];
  
  while (queue.length > 0) {
    const current = queue.shift()!;
    const { node, path, distance } = current;
    
    if (node === endId) {
      return {
        path,
        distance,
        nodes: path.map(id => graph.nodes.find(n => n.id === id)!).filter(Boolean)
      };
    }
    
    if (visited.has(node)) continue;
    visited.add(node);
    
    const neighbors = graph.links
      .filter(link => {
        const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
        const targetId = typeof link.target === 'string' ? link.target : link.target.id;
        return sourceId === node || targetId === node;
      })
      .map(link => {
        const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
        const targetId = typeof link.target === 'string' ? link.target : link.target.id;
        return sourceId === node ? targetId : sourceId;
      })
      .filter(n => !visited.has(n));
    
    for (const neighbor of neighbors) {
      queue.push({
        node: neighbor,
        path: [...path, neighbor],
        distance: distance + 1
      });
    }
  }
  
  return null;
}