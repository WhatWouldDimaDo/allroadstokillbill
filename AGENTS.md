# Agent Guidelines

## Commands
- `npm run dev` — Start dev server (localhost:5173)
- `npm run build` — Production build + TypeScript validation (use as lint check)
- `npm run preview` — Preview production build
- No test framework configured

## Code Style
- **TypeScript strict** — ES2022 target, no `any`/`@ts-ignore`
- **React 19** — Functional components + hooks only, no class components
- **Imports** — React first, then external libs, then local (relative paths or `@/*` alias)
- **Naming** — PascalCase components/types, camelCase functions/variables
- **Styling** — Tailwind CSS utility classes inline
- **Lazy loading** — Heavy components (Graph, Three.js) use `React.lazy()`

## Critical Constraints
- **Three.js memory** — Always dispose textures/geometries to prevent leaks
- **Bundle size** — Code-split large dependencies; avoid new heavy libs
- **Data schema** — Do not modify `graphData_final_with_posters.ts` schema without migration plan
- **Validation** — Run `npm run build` before committing; must pass with zero errors
- **257 film nodes** — Test rendering performance with full dataset
