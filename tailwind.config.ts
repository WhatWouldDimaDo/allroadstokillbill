import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./components/**/*.{ts,tsx}",
    "./contexts/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Your custom theme extensions here
    },
  },
  plugins: [],
} satisfies Config