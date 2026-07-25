# serkanakman.dev

Serkan Akman's personal portfolio site. A single-page React application showcasing full-stack engineering and AI systems work, with support for 6 languages (EN, TR, DE, SR, FR, IT).

## Stack

- React 19 + TypeScript + Vite 8 + Tailwind CSS 4
- `framer-motion` for scroll/transition animations
- `lucide-react` for icons
- `vitest` + `@testing-library/react` for tests
- Canvas-based animated star network background
- No backend, no database

## Commands

```
npm run dev         # dev server
npm run build       # TypeScript check + Vite production build (output: dist/)
npm run typecheck   # tsc --noEmit
npm run test        # Vitest test suite (jsdom)
npm run preview     # serve production build locally
```

## Content & i18n

All visible text lives in `src/content/translations.ts` — six objects (`en`, `tr`, `de`, `sr`, `fr`, `it`) sharing a typed `TranslationContent` interface. Language state is managed via React Context in `src/context/LanguageContext.tsx`, persisted to `localStorage` key `portfolio-lang`, and reflected in the URL (e.g., `/#/tr`).

To add or edit content, edit all language objects in the translations file. No hardcoded text in components.

## Structure

```
src/
  content/translations.ts       # all bilingual content
  context/LanguageContext.tsx   # shared language state
  components/
    HeroSection.tsx
    AboutSection.tsx
    ExpertiseSection.tsx
    AILabSection.tsx            # AI Systems section
    WorkSection.tsx
    ExperienceSection.tsx
    PrinciplesSection.tsx
    ContactSection.tsx
    Header.tsx
    Footer.tsx
    BackgroundEffects.tsx       # Canvas star network
    LanguageSwitcher.tsx
  test/
    setup.ts
    language.test.tsx
```

## SEO

Open Graph and Twitter card meta tags in `index.html`. Update URL/description before deployment.