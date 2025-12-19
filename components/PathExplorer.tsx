import React from 'react';
import { NodeData } from '../types';
import { PathResult } from '../utils/pathFinder';

interface PathExplorerProps {
  pathMode: 'browse' | 'select-start' | 'select-end' | 'view-path';
  pathStartNode: NodeData | null;
  pathEndNode: NodeData | null;
  currentPath: PathResult | null;
  onStartExploration: () => void;
  onCancelExploration: () => void;
}

const PathExplorer: React.FC<PathExplorerProps> = ({
  pathMode,
  pathStartNode,
  pathEndNode,
  currentPath,
  onStartExploration,
  onCancelExploration
}) => {
  const getNodeName = (nodeId: string): string => {
    // Simple node name extraction - could be enhanced
    return nodeId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 z-20 max-w-xs">
      <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
        <span>🔍</span> Influence Path Explorer
      </h3>
      
      {pathMode === 'browse' && (
        <button
          onClick={onStartExploration}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          Trace Influence Path
        </button>
      )}
      
      {pathMode === 'select-start' && (
        <div className="text-yellow-400 text-sm">
          👆 Click a film to set as <strong>starting point</strong>
          <button onClick={onCancelExploration} className="mt-2 text-gray-400 text-xs underline block">
            Cancel
          </button>
        </div>
      )}
      
      {pathMode === 'select-end' && (
        <div className="text-yellow-400 text-sm">
          <div className="mb-2">
            Start: <span className="text-white">{pathStartNode?.name}</span>
          </div>
          👆 Click a film to set as <strong>destination</strong>
        </div>
      )}
      
      {pathMode === 'view-path' && currentPath && (
        <div className="space-y-3">
          <div className="text-green-400 text-sm">
            ✓ Path found: {currentPath.distance} hop{currentPath.distance !== 1 ? 's' : ''}
          </div>
          
          {/* Path visualization */}
          <div className="text-xs text-gray-300 space-y-1 max-h-40 overflow-y-auto">
            {currentPath.path.map((nodeId, i) => (
              <div key={nodeId} className="flex items-center gap-2">
                {i > 0 && <span className="text-yellow-500">↓</span>}
                <span className="truncate">{getNodeName(nodeId)}</span>
              </div>
            ))}
          </div>
          
          <button
            onClick={onCancelExploration}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded text-sm"
          >
            Clear Path
          </button>
        </div>
      )}
    </div>
  );
};

export default PathExplorer;
