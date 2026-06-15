# Build Personal Portfolio App

## Context
Repo nearly empty. Only `package.json` (shadcn devDep), `app_summary.md` (spec), `profile_picture.jpg` exist. Need full React app scaffold. Master branch has static "under construction" HTML.

## Tech Stack
- **React 18** + **Vite** (fast dev, modern bundler)
- **Tailwind CSS v4** (utility-first styling)
- **shadcn/ui** (pre-built accessible components)
- **React Router v7** (client-side routing)
- **Lucide React** (icons)

## Pages (from app_summary.md)
1. **Landing/Home** — hero section, nav to other sections
2. **GridScan** — interactive grid scanner tool (canvas-based visualization)
3. **Profile** — personal info, bio, skills, contact
4. **Portfolio** — project showcase cards

## File Structure
```
src/
  main.jsx              — app entry, router setup
  App.jsx               — layout wrapper with nav
  index.css             — tailwind imports + global styles
  pages/
    Home.jsx            — landing/hero
    GridScan.jsx        — grid scanner tool
    Profile.jsx         — personal profile
    Portfolio.jsx       — project showcase
  components/
    Navbar.jsx          — shared navigation
    Footer.jsx          — shared footer
public/
  profile_picture.jpg   — (move from root)
index.html              — vite entry HTML
vite.config.js          — vite config
tailwind.config.js      — tailwind config
postcss.config.js       — postcss config
components.json         — shadcn config
```

## Steps

### 1. Scaffold Vite + React
- Create `vite.config.js`, `index.html`, `postcss.config.js`
- Update `package.json` with all deps
- Run `npm install`

### 2. Init Tailwind + shadcn
- Create `tailwind.config.js`, update `src/index.css`
- Create `components.json` for shadcn
- Add shadcn components: button, card, badge

### 3. Create core files
- `src/main.jsx` — React root with BrowserRouter
- `src/App.jsx` — layout with Navbar + Outlet + Footer
- `src/components/Navbar.jsx` — nav links
- `src/components/Footer.jsx` — footer

### 4. Create pages
- `src/pages/Home.jsx` — hero with name, tagline, CTA buttons
- `src/pages/GridScan.jsx` — interactive grid canvas tool
- `src/pages/Profile.jsx` — bio, skills, contact info
- `src/pages/Portfolio.jsx` — project cards grid

### 5. Assets
- Move `profile_picture.jpg` to `public/`

### 6. Verify
- `npm run dev` — check all pages render
- Test navigation between routes

## Verification
- All 4 pages accessible via nav
- GridScan has working interactive canvas
- Profile shows photo + bio
- Portfolio renders project cards
- Responsive layout on mobile/desktop
