import React from 'react';

interface GestureTutorialProps {
  onDismiss: () => void;
}

export function GestureTutorial({ onDismiss }: GestureTutorialProps) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="max-w-md bg-red-900 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Touch Gestures</h2>

        <div className="space-y-4">
          <div>
            <span className="text-3xl">👆</span>
            <p className="mt-2">Tap a film to see details</p>
          </div>

          <div>
            <span className="text-3xl">🤏</span>
            <p className="mt-2">Pinch to zoom in/out</p>
          </div>

          <div>
            <span className="text-3xl">☝️</span>
            <p className="mt-2">Drag to rotate the graph</p>
          </div>

          <div>
            <span className="text-3xl">👉👈</span>
            <p className="mt-2">Two fingers to pan camera</p>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-yellow-500 text-black py-3 rounded-lg font-bold"
          onClick={onDismiss}
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
