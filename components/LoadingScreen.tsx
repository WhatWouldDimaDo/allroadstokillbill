import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  show: boolean;
  progress?: number;
}

export const LoadingScreen = ({ show, progress = 0 }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(show);
  const [opacity, setOpacity] = useState(show ? 1 : 0);

  useEffect(() => {
    if (!show) {
      // Start fade-out animation
      setOpacity(0);

      // Remove from DOM after fade-out completes (300ms)
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
      setOpacity(1);
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <div
      className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center z-50 overflow-hidden transition-opacity duration-300"
      style={{ opacity }}
    >
      {/* Animated blood splatters */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 bg-red-600 rounded-full opacity-20 animate-ping"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i * 5)}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s',
              transform: `rotate(${i * 30}deg) scale(${0.5 + (i % 3) * 0.3})`
            }}
          />
        ))}
      </div>

      {/* Sword slash animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-64 bg-gradient-to-b from-transparent via-black to-transparent transform -rotate-12 animate-pulse opacity-30"
             style={{ animationDuration: '1.5s' }} />
      </div>

      {/* Main content */}
      <div className="text-center z-10 relative">
        {/* Animated title */}
        <div className="mb-8">
          <h1 className="text-black text-6xl md:text-8xl font-black font-mono tracking-wider animate-pulse">
            ALL ROADS
          </h1>
          <h1 className="text-red-800 text-6xl md:text-8xl font-black font-mono tracking-wider animate-pulse"
              style={{ animationDelay: '0.3s' }}>
            TO KILL BILL
          </h1>
        </div>

        {/* Loading animation */}
        <div className="mb-6">
          <div className="flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-red-600 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.6s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading text with typewriter effect */}
        <div className="text-black font-bold text-xl md:text-2xl font-mono tracking-wide">
          <span className="animate-pulse">Loading Film Network</span>
          <span className="animate-ping">.</span>
          <span className="animate-ping" style={{ animationDelay: '0.2s' }}>.</span>
          <span className="animate-ping" style={{ animationDelay: '0.4s' }}>.</span>
        </div>

        {/* Progress bar (optional) */}
        <div className="mt-6 w-64 mx-auto">
          <div className="bg-black/20 rounded-full h-2">
            <div className="bg-red-600 h-2 rounded-full transition-all duration-100"
                 style={{
                   width: `${progress}%`,
                   opacity: progress > 0 ? 1 : 0
                 }} />
          </div>
          {progress > 0 && (
            <p className="mt-2 text-black/60 text-xs uppercase tracking-wider font-mono">
              {progress}%
            </p>
          )}
        </div>
      </div>

      {/* Corner blood drips */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-red-600/30 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600/15 rounded-full blur-lg" />
    </div>
  );
};
