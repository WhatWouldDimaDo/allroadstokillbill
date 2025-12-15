# Tarantino Graph 🎬

<div align="center">
<img width="800" alt="Tarantino Graph" src="https://img.shields.io/badge/Interactive-3D%20Film%20Network-blue?style=for-the-badge&logo=react" />
<img width="800" alt="Built with" src="https://img.shields.io/badge/Built%20with-React%20%2B%20Three.js%20%2B%20TypeScript-black?style=for-the-badge&logo=typescript" />
</div>

## 🌟 Overview

An interactive 3D visualization of Quentin Tarantino's film influence network, exploring the connections between his movies and the films that shaped his cinematic vision. Navigate through a force-directed graph where each node represents a film, with posters as visual anchors and influence relationships as connecting lines.

**Live Demo:** [View on Vercel](https://allroadstokillbill.vercel.app)

## ✨ Features

- **🎯 Interactive 3D Graph**: Force-directed layout with Three.js and react-force-graph-3d
- **🎬 Film Posters**: Visual nodes with movie posters that always face the camera
- **🔗 Influence Network**: Explore connections between Tarantino films and their influences
- **🎛️ Advanced Controls**: Filter by directors, years, categories, and view modes
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **⚡ High Performance**: Lazy loading, code splitting, and optimized bundles

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/WhatWouldDimaDo/allroadstokillbill.git
   cd allroadstokillbill
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview  # Preview production build locally
```

## 📊 Dataset

The application visualizes **257 films** with **230 influence relationships**, including:

- **Quentin Tarantino's feature films** (9 films)
- **Direct influences and inspirations** from various directors and eras
- **Film categories**: Kill Bill universe, crime films, westerns, martial arts, etc.
- **Metadata**: Release years, directors, genres, and poster images

### Data Sources
- Film metadata from TMDB API
- Influence relationships researched and curated
- Poster images sourced from TMDB with fallbacks

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 19.2.3 + TypeScript 5.8.2
- **3D Graphics**: Three.js 0.182.0 + react-force-graph-3d 1.29.0
- **Build Tool**: Vite 6.4.1 with advanced optimizations
- **Styling**: Tailwind CSS (utility classes)
- **Hosting**: Vercel with automatic deployments

### Key Components
- **`index.tsx`**: Main application with state management and filtering
- **`components/Graph.tsx`**: 3D force-directed graph visualization
- **`utils/nodeHelpers.ts`**: 3D node rendering and billboard rotation
- **`graphData_final_with_posters.ts`**: Complete film dataset

### Performance Optimizations
- **Lazy Loading**: Graph component loaded on-demand
- **Code Splitting**: Manual chunks for React, Three.js, and data
- **Bundle Optimization**: Terser minification, tree shaking
- **Memory Management**: Efficient Three.js object cleanup

## 🎮 Usage Guide

### Navigation
- **Mouse**: Click and drag to rotate the graph
- **Scroll**: Zoom in/out
- **Click Nodes**: Select films to highlight connections
- **Double-click**: Focus on selected film

### Filtering
- **Directors**: Filter by specific filmmakers (100+ available)
- **Years**: Focus on particular eras
- **Categories**: Explore thematic groupings
- **Presets**: Quick access to curated views (Kill Bill, Reservoir Dogs, etc.)

### View Modes
- **3D Force**: Default force-directed layout
- **2D Force**: Flattened 2D representation
- **Timeline**: Chronological film progression

## 🔧 Development

### Project Structure
```
allroadstokillbill/
├── components/           # React components
│   ├── Graph.tsx        # Main 3D visualization
│   └── ...
├── utils/               # Utility functions
│   └── nodeHelpers.ts   # 3D rendering helpers
├── graphData_final_with_posters.ts  # Film dataset
├── types.ts             # TypeScript definitions
├── index.tsx            # Application entry point
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Build configuration
└── tsconfig.json        # TypeScript configuration
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

### Environment Variables
No environment variables required for basic functionality. Optional TMDB API key for dynamic poster fetching.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Adding New Films
1. Add film data to `graphData_final_with_posters.ts`
2. Include poster URL and metadata
3. Define influence relationships
4. Update categories and filtering options

## 📈 Roadmap

### High Priority
- [ ] Mobile touch optimization and responsive design
- [ ] Advanced search functionality
- [ ] Dynamic poster loading for missing films
- [ ] Enhanced filtering (multi-criteria combinations)

### Medium Priority
- [ ] Timeline view with chronological progression
- [ ] Export/share functionality
- [ ] Performance monitoring and analytics
- [ ] Accessibility improvements

### Future Enhancements
- [ ] Multi-director support (create similar apps for other filmmakers)
- [ ] User-generated influence maps
- [ ] Social features and film discussions
- [ ] AR/VR viewing modes

## 🐛 Troubleshooting

For detailed troubleshooting information, see [TROUBLESHOOTING-DOCUMENTATION.md](./TROUBLESHOOTING-DOCUMENTATION.md).

### Common Issues
- **Graph not loading**: Check browser WebGL support
- **Posters not displaying**: Verify poster URLs are accessible
- **Performance issues**: Reduce node visibility or use 2D mode

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Data Sources**: TMDB, IMDb, film critics, and academic research
- **Inspiration**: Film scholars and Tarantino's commentary on influences
- **Community**: Film enthusiasts and developers who contributed feedback

---

<div align="center">
Made with ❤️ for film lovers and data visualization enthusiasts
</div>
