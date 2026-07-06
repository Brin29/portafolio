# Portafolio — Agent instructions

## Stack
- **Next.js 15** (App Router), **React 19**, **TypeScript 5**, **Tailwind CSS v4**
- **3D**: `@react-three/fiber` + `@react-three/drei` + `three`
- **Animation**: `framer-motion` (imported in code; provided via `motion` package in deps — both resolve)
- **Theme**: `next-themes` with `class` strategy (dark variant via `@custom-variant dark`)
- **Forms**: `@emailjs/browser` (Contact section)
- **Analytics**: `@vercel/analytics`
- **Path alias**: `@/*` → project root

## Commands
```sh
npm run dev        # next dev --turbopack
npm run build      # next build
npm run start      # next start
npm run lint       # next lint
```
No test framework is configured.

## Env vars (required for contact form)
```
NEXT_PUBLIC_SERVICE_ID
NEXT_PUBLIC_TEMPLATE_ID
NEXT_PUBLIC_KEY
```

## Project structure
```
app/                        # Next.js App Router (layout, page, globals.css)
  layout.tsx               # Root layout: ThemeProvider, Sora + DM Sans, Vercel Analytics
  page.tsx                 # Home page: Hero → Timeline → Projects → Skills → Contact
components/                 # Page sections (Hero, Projects, Contact, skills, etc.)
  ui/                      # Reusable primitives (floating-navbar, timeline, input, label, 3d-pin)
  canvas/                  # Three.js Canvas wrappers (PlanetCanva — includes GoldenRing)
  renders/                 # 3D model components (Planet — uses /models/planet.glb)
data/index.ts               # All portfolio data (experience, projects, skills, nav items, contact info)
assets/index.js             # SVG/PNG asset barrel export
utils/cn.ts                 # cn() helper: clsx + tailwind-merge
translations/{es,en}/global.json  # i18n JSON files (NOT wired to any i18n library)
public/models/planet.glb    # 3D model (load from /models/planet.glb)
```

## Design system — "Órbita Colombia"

### Palette
| Token   | Hex       | Usage                          |
|---------|-----------|--------------------------------|
| void    | `#0B0D1A` | Dark background                |
| deep    | `#151B2E` | Dark card surfaces             |
| surface | `#1E2440` | Dark input surfaces            |
| cream   | `#F2EFE8` | Light background               |
| gold    | `#E8B84B` | Primary accent (Colombian gold)|
| ember   | `#D14836` | Energy accent (Colombian red)  |
| blue-giant | `#3B82C4` | Secondary accent (Colombian blue) |

### Typography
| Role   | Font     | CSS variable       |
|--------|----------|--------------------|
| Display| Sora     | `--font-sora`      |
| Body   | DM Sans  | `--font-dm-sans`   |
| Mono   | Geist Mono | `--font-geist-mono` |

Usage: `font-display` for hero name + major headings, `font-sans` (default) for everything else, `font-mono` for code/tech labels.

## Notable conventions
- **Tailwind v4**: Uses `@import "tailwindcss"`, `@custom-variant dark`, and `@theme inline` — NOT `tailwind.config.js`.
- **Dark mode**: Toggled via `class` strategy; components use `dark:` prefix and `useTheme()` from `next-themes`.
- **Data flow**: All content is hardcoded in `data/index.ts` (no CMS or API). Translations are static JSON files not connected to any i18n library.
- **3D signature**: Planet model in contact section has two rotating golden rings (GoldenRing, GoldenRingInner) — slow rotation at different speeds.
- **Hero**: Typography-focused — name in massive Sora gold font, no photo, no spotlight, no entrance splash.
- **Deployment**: Vercel at `breinerdev-portafolio.vercel.app`; no CI/CD workflows in repo.

## Removed files
- `entrance-animation.tsx` (was one-time splash "Bienvenido a mi portafolio")
- `Planet.jsx` at root (stray file, wrong path `/planet.glb`)
- `components/ui/Spotlight.tsx` is unused but still in the tree (removed from Hero)
