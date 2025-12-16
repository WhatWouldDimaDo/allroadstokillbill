import React, { createContext, useContext, useState, ReactNode } from 'react'
import { FilmTheme, getThemeByFilmId, defaultTheme } from '../themes'

interface ThemeContextType {
  currentTheme: FilmTheme
  setThemeByFilm: (filmId: string) => void
  resetToDefault: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<FilmTheme>(defaultTheme)

  const setThemeByFilm = (filmId: string) => {
    const theme = getThemeByFilmId(filmId)
    setCurrentTheme(theme)

    // Update CSS custom properties for global theming
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      root.style.setProperty('--color-primary', theme.colors.primary)
      root.style.setProperty('--color-secondary', theme.colors.secondary)
      root.style.setProperty('--color-background', theme.colors.background)
      root.style.setProperty('--color-text', theme.colors.text)
      root.style.setProperty('--color-accent', theme.colors.accent)

      // Update body background
      document.body.style.backgroundColor = theme.colors.background
      document.body.style.color = theme.colors.text
    }
  }

  const resetToDefault = () => {
    setCurrentTheme(defaultTheme)
    setThemeByFilm('kill-bill-vol-1-2003') // Trigger CSS updates
  }

  const contextValue: ThemeContextType = {
    currentTheme,
    setThemeByFilm,
    resetToDefault
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
