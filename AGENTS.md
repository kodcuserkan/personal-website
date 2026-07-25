# AGENTS.md

Serkan Akman's personal portfolio site (serkanakman.dev). Single-page React app with English/Turkish i18n.

## Commands

- `npm run dev` — dev server
- `npm run build` — TypeScript check + Vite production build (output: `dist/`)
- `npm run typecheck` — `tsc --noEmit`
- `npm run test` — Vitest test suite (jsdom, `src/test/`)
- `npm run preview` — serve production build locally

## Stack

- React 19 + TypeScript + Vite 8 + Tailwind CSS 4
- `framer-motion` for scroll/transition animations
- `lucide-react` for icons
- `vitest` + `@testing-library/react` for tests
- No backend, no database

## Content & i18n

- All text lives in `src/content/translations.ts` — two objects (`en`, `tr`) with a shared `TranslationContent` interface.
- To add or edit content, edit both `en` and `tr` objects in that file.
- Language state is managed via React Context in `src/context/LanguageContext.tsx` (`LanguageProvider` + `useLanguage()`), persisted to `localStorage` key `portfolio-lang`.
- `App.tsx` wraps the app in `<LanguageProvider>` — all components get shared state from `useLanguage()`.
- Default language is English; browser language (`navigator.language`) is used as initial fallback.
- **No hardcoded text in components** — every visible string must come from `t.xxx`.
- **No specific LLM/model names** (Qwen, Llama, Gemma, OpenAI) in visible content or metadata.
- **No chess references** — removed entirely.

## Component Structure

Each page section is its own component in `src/components/`:
- `HeroSection`, `AboutSection`, `ExpertiseSection`, `AILabSection` (AI Systems), `WorkSection`, `ExperienceSection`, `PrinciplesSection`, `ContactSection`, `Header`, `Footer`, `BackgroundEffects`, `LanguageSwitcher`
- `App.tsx` composes them in order.
- `BackgroundEffects` uses a Canvas-based animated node network (respects `prefers-reduced-motion`, simplified on mobile).

## Type Gotchas

- The `TranslationContent` interface uses `readonly` arrays. When adding new array fields, mark them `readonly` so `as const` objects assign correctly.
- `useLanguage()` returns `t` typed as `TranslationContent` — no generic type argument needed.
- `lucide-react` v1.26 does not export a `Linkedin` icon. Use a text fallback.

## Tailwind

- Uses `@tailwindcss/vite` plugin (Tailwind v4). CSS entry: `src/index.css` with `@import "tailwindcss"`.
- Dark theme hardcoded via `bg-slate-950` on `<body>` in `index.html`.

## Tests

- Vitest with jsdom. Test setup: `src/test/setup.ts` (mocks `localStorage`, `navigator.language`).
- Vitest config: `vitest.config.ts` (separate from `vite.config.ts` to avoid TypeScript conflicts).
- Run with `npm run test`.

## SEO

- Open Graph and Twitter card meta tags in `index.html`. Update URL/description before deployment.