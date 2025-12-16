import React, { useState, useEffect } from "react";
import { FilmTheme } from "../themes";

interface LoadingScreenProps {
  show: boolean;
  progress?: number;
  theme?: FilmTheme;
}

export const LoadingScreen = ({ show, progress = 0, theme }: LoadingScreenProps) => {
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

  // Default theme (Kill Bill) if no theme provided
  const currentTheme = theme || {
    name: 'Kill Bill',
    colors: {
      primary: '#FFD700',
      secondary: '#FF0000',
      background: '#000000',
      text: '#FFFFFF',
      accent: '#FFD700'
    },
    particles: {
      type: 'blood',
      color: '#FF0000',
      count: 100
    },
    loading: {
      text: 'Kill Bill',
      animation: 'sword-slash'
    }
  };

  // Render theme-specific background
  const getBackgroundGradient = () => {
    switch (currentTheme.loading.animation) {
      case 'sword-slash':
        return `linear-gradient(to bottom, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary}, ${currentTheme.colors.background})`;
      case 'briefcase-glow':
        return `linear-gradient(45deg, ${currentTheme.colors.background}, ${currentTheme.colors.primary}20, ${currentTheme.colors.background})`;
      case 'western-text':
        return `linear-gradient(to bottom, ${currentTheme.colors.primary}40, ${currentTheme.colors.secondary}20, ${currentTheme.colors.background})`;
      case 'blood-stripes':
        return `linear-gradient(45deg, ${currentTheme.colors.background} 25%, ${currentTheme.colors.secondary}20 25%, ${currentTheme.colors.secondary}20 50%, ${currentTheme.colors.background} 50%, ${currentTheme.colors.background} 75%, ${currentTheme.colors.secondary}20 75%)`;
      case 'frozen-blood':
        return `linear-gradient(to bottom, ${currentTheme.colors.primary}60, ${currentTheme.colors.secondary}40, ${currentTheme.colors.background})`;
      case 'hollywood-sign':
        return `linear-gradient(135deg, ${currentTheme.colors.primary}40, ${currentTheme.colors.secondary}30, ${currentTheme.colors.background})`;
      case 'missing-reel':
        return `linear-gradient(to bottom, ${currentTheme.colors.primary}, ${currentTheme.colors.background}, ${currentTheme.colors.secondary}60)`;
      case 'record-spin':
        return `radial-gradient(circle, ${currentTheme.colors.primary}20, ${currentTheme.colors.background})`;
      case 'projector':
        return `linear-gradient(45deg, ${currentTheme.colors.background}, ${currentTheme.colors.secondary}10, ${currentTheme.colors.background})`;
      default:
        return `linear-gradient(to bottom, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary}, ${currentTheme.colors.background})`;
    }
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-50 overflow-hidden transition-opacity duration-300"
      style={{
        opacity,
        background: getBackgroundGradient(),
        color: currentTheme.colors.text
      }}
    >
      {/* Theme-specific background animations */}
      {currentTheme.loading.animation === 'sword-slash' && (
        <>
          {/* Animated blood splatters */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 rounded-full opacity-20 animate-ping"
                style={{
                  backgroundColor: currentTheme.colors.secondary,
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

          {/* Corner blood drips */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-red-600/30 to-transparent" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600/15 rounded-full blur-lg" />
        </>
      )}

      {currentTheme.loading.animation === 'briefcase-glow' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-yellow-400 rounded-lg opacity-20 animate-pulse"
               style={{ animationDuration: '2s' }} />
        </div>
      )}

      {currentTheme.loading.animation === 'western-text' && (
        <>
          <div className="absolute inset-0 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-6xl font-bold opacity-20 animate-bounce"
                style={{
                  color: currentTheme.colors.secondary,
                  left: `${10 + (i * 10)}%`,
                  top: `${30 + (i * 5)}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '3s'
                }}
              >
                ★
              </div>
            ))}
          </div>
        </>
      )}

      {currentTheme.loading.animation === 'blood-stripes' && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-2 animate-pulse"
              style={{
                backgroundColor: currentTheme.colors.secondary,
                top: `${20 + (i * 12)}%`,
                opacity: 0.1,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      )}

      {currentTheme.loading.animation === 'frozen-blood' && (
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 animate-pulse"
              style={{
                backgroundColor: currentTheme.colors.secondary,
                left: `${5 + (i * 6.5)}%`,
                top: `${60 + Math.sin(i) * 20}%`,
                transform: 'rotate(-15deg)',
                animationDelay: `${i * 0.05}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      )}

      {currentTheme.loading.animation === 'hollywood-sign' && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-4xl font-bold animate-pulse"
             style={{ color: currentTheme.colors.primary, opacity: 0.3 }}>
          HOLLYWOOD
        </div>
      )}

      {currentTheme.loading.animation === 'missing-reel' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-dashed animate-spin rounded-full"
               style={{ borderColor: currentTheme.colors.primary, animationDuration: '3s' }} />
        </div>
      )}

      {currentTheme.loading.animation === 'record-spin' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 border-8 border-dashed animate-spin rounded-full"
               style={{
                 borderColor: `${currentTheme.colors.primary}40`,
                 animationDuration: '2s'
               }} />
        </div>
      )}

      {currentTheme.loading.animation === 'projector' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-full animate-ping opacity-20"
               style={{ animationDuration: '1.5s' }} />
        </div>
      )}

      {/* Main content */}
      <div className="text-center z-10 relative">
        {/* Animated title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black font-mono tracking-wider animate-pulse"
              style={{ color: currentTheme.colors.text }}>
            ALL ROADS
          </h1>
          <h1 className="text-6xl md:text-8xl font-black font-mono tracking-wider animate-pulse"
              style={{
                color: currentTheme.colors.secondary,
                animationDelay: '0.3s'
              }}>
            {currentTheme.loading.text.toUpperCase()}
          </h1>
        </div>

        {/* Loading animation */}
        <div className="mb-6">
          <div className="flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full animate-bounce"
                style={{
                  backgroundColor: currentTheme.colors.secondary,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.6s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading text with typewriter effect */}
        <div className="font-bold text-xl md:text-2xl font-mono tracking-wide"
             style={{ color: currentTheme.colors.text }}>
          <span className="animate-pulse">Loading Film Network</span>
          <span className="animate-ping">.</span>
          <span className="animate-ping" style={{ animationDelay: '0.2s' }}>.</span>
          <span className="animate-ping" style={{ animationDelay: '0.4s' }}>.</span>
        </div>

        {/* Progress bar (optional) */}
        <div className="mt-6 w-64 mx-auto">
          <div className="rounded-full h-2 opacity-30"
               style={{ backgroundColor: currentTheme.colors.text + '20' }}>
            <div className="h-2 rounded-full transition-all duration-100"
                 style={{
                   backgroundColor: currentTheme.colors.secondary,
                   width: `${progress}%`,
                   opacity: progress > 0 ? 1 : 0
                 }} />
          </div>
          {progress > 0 && (
            <p className="mt-2 text-xs uppercase tracking-wider font-mono opacity-60"
                style={{ color: currentTheme.colors.text }}>
              {progress}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
