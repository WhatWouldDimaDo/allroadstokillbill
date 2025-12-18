# All Roads to Kill Bill - OpenCode Context

**Project:** Interactive 3D Tarantino Film Influence Network
**Owner:** Dima Perkis
**Status:** Phase 1 Complete - Production Deployed
**Live URL:** https://allroadstokillbill.vercel.app
**GitHub:** https://github.com/WhatWouldDimaDo/allroadstokillbill

---

## What This Project Is

A **production React + Three.js web application** that visualizes Quentin Tarantino's film influence network as an interactive 3D force-directed graph. Started with Kill Bill focus, expanded to 257 films across Tarantino's entire filmography with visual connections showing influence relationships.

**Key Achievement:** Live on Vercel with full feature set, 358 posters loaded, advanced search, timeline view, and Kill Bill theming.

---

## Tech Stack

### Frontend
- **React 19.2.3** with TypeScript 5.8.2
- **Three.js 0.182.0** + react-force-graph-3d 1.29.0
- **Vite 6.4.1** (build tool with advanced optimizations)
- **Tailwind CSS** (utility classes for styling)

### Key Libraries
- **Fuse.js** - Fuzzy search
- **@react-three/fiber** - React renderer for Three.js
- **three-spritetext** - Text labels on 3D nodes

### Development
- **TypeScript** with strict mode
- **ESLint** for code quality
- **Git** with active repository
- **Vercel** for hosting and deployment

---

## Project Structure

```
allroadstokillbill/
├── components/
│   └── Graph.tsx                    # 3D force-directed graph component
├── contexts/
│   └── filmThemes.ts               # Film-specific color theming
├── utils/
│   ├── nodeHelpers.ts              # Three.js node rendering (billboard rotation)
│   └── posterLoader.ts             # Dynamic poster loading with caching
├── index.tsx                        # Main React app (12KB, all UI components)
├── graphData_final_with_posters.ts  # Film dataset (257 films, 230 relationships)
├── types.ts                         # TypeScript definitions
├── themes.ts                        # Film-specific theming system
├── posters/                         # 358 poster images
├── public/                          # Static assets for deployment
├── dist/                            # Production build output
├── vite.config.ts                   # Build configuration
├── tsconfig.json                    # TypeScript config
├── package.json                     # Dependencies
└── vercel.json                      # Vercel deployment config
```

---

## Key Files

### Core Application
| File | Purpose | Size |
|------|---------|------|
| `index.tsx` | Main app with state management, UI, filtering | 67KB |
| `components/Graph.tsx` | 3D force graph visualization | ~8KB |
| `graphData_final_with_posters.ts` | 257 films + relationships | 177KB |
| `utils/nodeHelpers.ts` | 3D node rendering, billboard rotation | ~9KB |
| `types.ts` | TypeScript type definitions | ~6KB |

### Documentation
| File | Purpose |
|------|---------|
| `PROJECT-STATUS-2025-12-15.md` | Phase 1 completion report, feature list |
| `TROUBLESHOOTING-DOCUMENTATION.md` | Common issues and fixes |
| `ROADMAP-TECHNICAL-PLANS.md` | Future phases and features |
| `MULTI-DIRECTOR-PLAYBOOK.md` | Strategy for expanding beyond Tarantino |
| `UX-TESTING-RESULTS-2025-12-15.md` | User testing findings |

---

## Data Schema

### Film Node
```typescript
interface Film {
  id: string;
  title: string;
  year: number;
  director: string;
  poster_path?: string;
  genres: string[];
  subclouds: string[];
  influenced_by: string[];  // Array of film IDs
  influences: string[];     // Array of film IDs
  runtime?: number;
  vote_average?: number;
  overview?: string;
  imdb_id?: string;
}
```

### Relationship
```typescript
interface Link {
  source: string;  // Film ID
  target: string;  // Film ID
}
```

---

## Current Features

### ✅ Completed (Phase 1)
- **3D Force-Directed Graph** - Interactive visualization with Three.js
- **257 Films Loaded** - Complete dataset with metadata
- **358 Posters** - Visual nodes with TMDB poster images
- **Advanced Search** - Fuzzy search across titles, directors, genres
- **Timeline View** - Chronological arrangement with decade markers
- **Film Details Panel** - Rich metadata, posters, ratings, links
- **Kill Bill Theming** - Blood effects, animations, custom styling
- **Multi-View Modes** - 3D, 2D, Timeline layouts
- **Filtering** - By directors, genres, years, categories
- **Presets** - Quick access to Tarantino films and genre groups
- **Production Deployment** - Live on Vercel

### 🔄 In Progress / Roadmap
- Mobile touch optimization and gestures
- Enhanced search functionality
- Dynamic poster loading for missing films
- Performance monitoring and analytics
- Accessibility improvements (ARIA labels, keyboard nav)

---

## Development Workflow

### Local Development
```bash
cd ~/Documents/Coding/projects/active/allroadstokillbill
npm install
npm run dev
# Open http://localhost:5173
```

### Production Build
```bash
npm run build   # Creates dist/ folder
npm run preview # Preview production build locally
```

### Deployment
```bash
git add .
git commit -m "Description"
git push origin main
# Vercel auto-deploys from main branch
```

---

## Code Style & Constraints

### DO:
- ✅ Use TypeScript with strict typing
- ✅ Follow React 19 best practices (no class components)
- ✅ Use functional components with hooks
- ✅ Optimize Three.js memory (dispose textures/geometries)
- ✅ Keep bundle size small (code splitting, lazy loading)
- ✅ Test with 257 films before committing
- ✅ Update documentation when adding features

### DON'T:
- ❌ Break TypeScript types (validate with `npm run build`)
- ❌ Add heavy dependencies without justification
- ❌ Remove existing features without documenting
- ❌ Commit broken builds (test locally first)
- ❌ Modify graphData schema without migration plan

### Preferences
- **Descriptive variable names** over brevity
- **Comments for complex Three.js logic** (force simulation, shaders)
- **Modular components** (keep components focused)
- **Error handling** with graceful degradation
- **Performance-first** (257 nodes = challenging)

---

## Common Operations

### Adding New Films
1. Add film object to `graphData_final_with_posters.ts`
2. Add poster to `posters/` directory (filename format: `title_year.jpg`)
3. Update `influenced_by` and `influences` arrays
4. Rebuild: `npm run build`
5. Test graph visualization

### Fixing Three.js Issues
- Check browser console for WebGL errors
- Verify texture disposal (memory leaks common)
- Review force simulation parameters in `Graph.tsx`
- Test on different devices (desktop, mobile, tablet)

### Updating Film Theming
- Edit `themes.ts` for film-specific color schemes
- Update `contexts/filmThemes.ts` for dynamic theming
- Test theme transitions between films

### Performance Optimization
- Profile with Chrome DevTools (Performance tab)
- Check bundle size: `npm run build` (shows chunk sizes)
- Review Vite config for optimization opportunities
- Test with Network throttling (mobile simulation)

---

## API Keys & Environment

### Git Repository
- ✅ Active repository with recent commits
- Remote: https://github.com/WhatWouldDimaDo/allroadstokillbill
- Main branch deploys to Vercel automatically

### Optional APIs
- **TMDB API** - For dynamic poster fetching (not required, posters bundled)
- No other API keys needed for core functionality

---

## Known Issues & Fixes

### Common Issues
See `TROUBLESHOOTING-DOCUMENTATION.md` for detailed fixes.

**Graph not loading:**
- Check browser WebGL support (Three.js requirement)
- Verify console for errors

**Posters not displaying:**
- Check poster file paths in `graphData_final_with_posters.ts`
- Verify files exist in `posters/` directory

**Performance lag:**
- Reduce visible nodes (use filters)
- Switch to 2D mode (lighter rendering)
- Check for memory leaks (texture disposal)

---

## Testing Checklist

Before considering changes "done":
1. ✅ Graph renders with 257 films
2. ✅ All posters load correctly
3. ✅ Search functionality works
4. ✅ Timeline view displays properly
5. ✅ Film details panel shows data
6. ✅ No TypeScript errors (`npm run build` succeeds)
7. ✅ Performance acceptable (no lag on interactions)
8. ✅ Mobile responsive (test on phone/tablet)
9. ✅ Update relevant documentation
10. ✅ Test deployment preview before pushing

---

## Project Philosophy

**Visual Storytelling First**
- Every feature should enhance the film influence narrative
- Beautiful > functional-but-ugly
- Interactive exploration > static display

**Performance Matters**
- 257 nodes + 358 posters = heavy load
- Optimize before adding features
- Code splitting and lazy loading essential

**User Experience**
- ADHD-friendly (clear UI, immediate feedback)
- Accessible (keyboard nav, screen readers)
- Mobile-first (touch gestures critical)

**Data Integrity**
- Film relationships must be accurate
- Metadata validated against TMDB
- Source citations for influence claims

---

## Roadmap Context

### Phase 1: Quick Wins ✅ COMPLETE
- Basic graph visualization
- Poster loading
- Search and filtering
- Timeline view
- Production deployment

### Phase 2: Polish & Performance (Next)
- Mobile touch gestures
- Enhanced search (multi-criteria)
- Performance monitoring
- Accessibility improvements
- Loading optimizations

### Phase 3: Advanced Features (Future)
- Multi-director support (expand beyond Tarantino)
- User-generated influence maps
- Social features and discussions
- AR/VR viewing modes

---

## Quick Reference Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production locally
```

### Git Operations
```bash
git status           # Check status
git add .            # Stage changes
git commit -m "msg"  # Commit
git push origin main # Deploy to Vercel
```

### Debugging
```bash
# Check TypeScript errors
npm run build

# View bundle analysis
npm run build -- --mode production

# Check for unused dependencies
npx depcheck
```

---

## Success Metrics

**Phase 1 Achievements:**
- ✅ 257 films visualized
- ✅ 358 posters loaded (139% coverage)
- ✅ Production deployment
- ✅ Advanced search implemented
- ✅ Timeline view functional
- ✅ Kill Bill theming complete
- ✅ Zero critical bugs

**Next Goals (Phase 2):**
- Mobile touch optimization
- Performance <2s load time
- Accessibility score >90
- Multi-director expansion ready

---

**Last Updated:** 2025-12-17 (Moved to Coding/projects/active, configured for OpenCode)
**Phase:** 1 Complete, Phase 2 Planning
