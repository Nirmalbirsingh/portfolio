# ARCHITECTURE_MAP.md — Portfolio

> Quick-reference for file locations and project structure.

---

## Directory Tree

```
Portfolio/
├── .claude/
│   └── ARCHITECTURE_MAP.md         ← you are here
├── public/
├── src/
│   ├── components/
│   │   ├── About.tsx / .module.css
│   │   ├── Contact.tsx / .module.css
│   │   ├── Cursor.tsx
│   │   ├── Footer.tsx / .module.css
│   │   ├── Hero.tsx / .module.css
│   │   ├── Nav.tsx / .module.css
│   │   ├── Projects.tsx / .module.css
│   │   ├── Services.tsx / .module.css
│   │   ├── Stack.tsx / .module.css
│   │   ├── Ticker.tsx / .module.css
│   │   └── WhyMe.tsx / .module.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.css                   ← design tokens & global reset
│   └── main.tsx                    ← entry point
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

---

## Tech Stack

| Category | Tech |
|---|---|
| Framework | React 19, TypeScript 6 |
| Build | Vite 8 |
| Styling | CSS Modules + CSS Variables |
| Email | emailjs-com |
| Linting | ESLint 10 + typescript-eslint |

---

## Component Map

| File | Role |
|---|---|
| `src/main.tsx` | Mounts `<App>` in `#root` with StrictMode |
| `src/App.tsx` | Orchestrates sections; runs IntersectionObserver for `.reveal` elements |
| `src/index.css` | CSS variables (`--bg`, `--accent`, `--ink`, fonts, easing), global reset |
| `components/Nav.tsx` | Fixed header; smooth-scroll to sections |
| `components/Hero.tsx` | Landing section; animated headline, counters (Years/Lighthouse), CTA |
| `components/Ticker.tsx` | Infinite horizontal scroll of tech names |
| `components/Services.tsx` | 4 service cards with mouse-tracking glow (`--mx`, `--my`) |
| `components/Stack.tsx` | Two rows of colour-coded tech pills; row 2 reverses direction |
| `components/Projects.tsx` | Project list with status badges (Building / Open) |
| `components/WhyMe.tsx` | 3-column value proposition with numbered headings |
| `components/About.tsx` | Bio + capabilities checklist |
| `components/Contact.tsx` | Email / GitHub / LinkedIn link cards |
| `components/Cursor.tsx` | Custom cursor; lerp-smoothed tracking; enlarges on `a`, `button`, `[data-hover]` |
| `components/Footer.tsx` | Copyright line |

---

## Key Patterns

**Styling**
- CSS Modules per component — no global scope pollution
- Design tokens defined once in `index.css` as CSS custom properties
- No Tailwind, no CSS-in-JS

**Animation**
- Scroll reveals: `IntersectionObserver` adds `.visible` to `.reveal` elements (threshold 0.07)
- Counters: `requestAnimationFrame` easing loop in `Hero.tsx`
- Cursor: `requestAnimationFrame` lerp in `Cursor.tsx`
- GPU-friendly: all motion via `transform` / `opacity`

**Data**
- Services, projects, stack, checklist rendered from inline arrays — easy to update
- No external state management; local `useState` / `useRef` only

**TypeScript**
- `strict` mode; `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly` all on
- Build: `tsc -b && vite build` (type-checks before bundling)

---

## Common Commands

```bash
npm run dev       # dev server (HMR)
npm run build     # tsc -b && vite build
npm run preview   # preview production build
npm run lint      # ESLint
```
