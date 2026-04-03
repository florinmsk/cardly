@AGENTS.md

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # Lint with Biome
pnpm format       # Auto-format with Biome
```

## Tech Stack

- **Next.js 16** (App Router) with React 19 and React Compiler enabled
- **Custom CSS** (no Tailwind) — all styles in `app/globals.css`
- **Biome 2** for linting and formatting (not ESLint/Prettier)
- **TypeScript** (strict mode)
- **pnpm** as package manager

## Code Style

- Biome enforces 2-space indentation, organized imports, and recommended lint rules for React/Next.js
- `@/*` path alias maps to project root
- CSS variables for theming defined in `app/globals.css`
- Outfit and Quicksand fonts exposed as CSS variables `--font-outfit` and `--font-quicksand`

## Architecture

Single-app Next.js App Router project. All routes live under `app/`. No `src/` directory. No test framework configured yet.
