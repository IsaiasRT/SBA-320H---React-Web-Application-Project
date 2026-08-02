### Skilled Based Assessment (SBA) -React Web Application Project 
### Per Scholas Software Engineering Bootcamp

## 👤 GitHub

**GitHub Profile:**
https://github.com/IsaiasRT

---

# 📖 Description

**Hunter Journal** is a React single-page application built as a companion app for Monster Hunter: World hunters. It combines live monster data with a personal hunting journal so players can track the monsters they've encountered, defeated, and still want to hunt.

The app features a monster encyclopedia with search, filtering, and pagination, plus full detail pages showing weaknesses, resistances, elements, ailments, locations, breakable parts, and rewards. Hunters can:

-  Favorite monsters and build a hunting wishlist
-  Keep a journal of every hunt with weapon, result, difficulty, and notes
-  Track defeated monsters and rating their difficulty
-  Switch between dark and light themes

The project demonstrates React routing, Context API state management, external API integration, localStorage persistence, and modern React best practices.

---

# 🎯 Objectives

- Build a dynamic single-page application with React
- Manage global state using Context API and `useReducer`
- Consume live data from an external REST API
- Implement client-side routing with React Router
- Persist user data across sessions using localStorage
- Organize components, pages, hooks, and utilities cleanly
- Provide a polished, responsive user experience

---

## 📝 Requirements

- [x] Utilize reasonable component organization with reusable, functional components. 
- [x] Create GET-style data views for all data exposed to the user using appropriate API consumption. 
- [x] Create form submission for creating new data (journal entries). 
- [] Create update flows so users can edit existing data (edit journal entries). 
- [x] Create delete flows so users can remove data (delete journal entries).
- [] Include search and filtering for frequently queried data (search, species/type/element filters). 
- [x] Include input validation for at least one form.
- [x] Utilize reasonable code organization practices (pages, components, context, hooks, services, utils). 
- [x] Ensure the application runs without errors.
- [x] Commit frequently to the Git repository.
- [x] Include a README.md
- [X] Don't use redux
- [x] Demonstrate **creativity and effort** in the application's design and user experience. 

---

# 🧭 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | home page
| `/monsters` | Monsters | Browse all monsters with search, species/type/element filters, and pagination 
| `/monsters/:id` | MonsterDetails | Full monster profile: weaknesses, resistances, elements, ailments, locations, parts, rewards 
| `/journal` | Hunter Journal | Full CRUD journal with per-monster filtering and date sorting 
| `/favorites` | Favorites | Favorite monsters, weapon reference, and hunting wishlist 
| `/about` | About | Project overview, tech stack, and feature list 
| `*` | NotFound | 404 page 

## App State (Context)

| State Key | Purpose |
|-----------|---------|
| favorites | Monsters marked as favorites |
| wishlist | Monsters the hunter still wants to hunt |
| defeated | Monsters marked as defeated |
| journal | Hunting journal entries (monster, date, weapon, result, difficulty, notes) |
| ratings | Per-monster difficulty ratings (1–5 stars) |
| search | Global search query |
| filters | Species / type / element filter selections |
| theme | Dark or light theme |

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the local dev server (Vite defaults to `http://localhost:5173`).

> Note: Monster data is fetched live from [mhw-db.com](https://mhw-db.com). No backend or API keys are required.

---

# 📚 References
- https://react.dev/
- https://reactrouter.com/
- https://vitejs.dev/
- https://www.mongodb.com/docs/ (unused — project is client-side only)
- https://mhw-db.com
- https://nodejs.org/
- https://github.com/IsaiasRT

# 📅 Timeline

**Due Date:** 08/01/2026

