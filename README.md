# Meal Plan App

A React + Vite meal discovery app that helps users search for meals, filter by category or cuisine, save favorites, and view full recipe details using data from [TheMealDB](https://www.themealdb.com/).

## What it does

This app lets users:

- Search meals by name
- Filter meals by **category**
- Filter meals by **cuisine/area**
- View meal cards in a responsive grid
- Open a **meal detail page** with:
    - image
    - category
    - area
    - ingredients
    - measurements
    - cooking instructions
- Save and remove **favorite meals**
- Persist favorites in **localStorage**
- Get a **random meal suggestion** with the “Surprise Me” feature

## Main features

- **React Router** for page navigation
    - `/` Home
    - `/favorites` Favorites page
    - `/random` Random meal redirect
    - `/meal/:mealId` Meal detail page
- **Custom hooks** for reusable logic
    - `useFetch`
    - `useDebounce`
    - `useLocalStorage`
    - `useMeals`
    - `useMealById`
    - `useRandomMeal`
- **API service layer** in `src/Services/MealAPI.js`
- **Favorites state** shared through context
- **Debounced search** to reduce unnecessary API calls

## Project structure

```text
src/
    Component/
        FavoritesView.jsx
        MealCard.jsx
        MealDetailView.jsx
        MealGrid.jsx
        NavBar.jsx
        RandomView.jsx
        SearchFilter.jsx
    CustomHook/
        useDebounce.js
        useFetch.js
        useLocalStorage.js
        useMealById.js
        useMeals.js
        useRandomMeal.js
    Services/
        MealAPI.js
    styles/
```

## Tech stack

- React
- Vite
- React Router DOM
- React Icons
- TheMealDB API

## How to run it

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Open the app

Vite will print a local URL in the terminal, usually:

```bash
http://localhost:5173
```

## Available scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run preview` — preview production build locally
- `npm run lint` — run linting

## How it works

- The home page uses `useMeals` to decide whether to fetch by:
    - search term
    - selected category
    - selected area
- `useDebounce` delays search requests by 500ms
- `useFetch` handles loading, error, and response state
- Clicking a meal card opens the detail page
- Favorites are stored in browser `localStorage` through `useLocalStorage`
- The random page fetches a random meal, then redirects to its detail page

## What I learned

While building this project, I learned how to:

- structure a React app into components, hooks, services, and styles
- use **React Router** for multi-page navigation
- build reusable **custom hooks**
- manage async API calls with loading and error states
- improve UX with **debounced search**
- persist user data with **localStorage**
- share state across components using **Context API**
- transform API response data into a cleaner UI, especially for ingredients and instructions
- separate API URL generation into a dedicated service file for cleaner code

## Future improvements

Possible next steps:

- add dark mode
- add pagination or “load more”
- improve favorites UI with cards instead of a text list
- add unit tests with Vitest and React Testing Library
- add better empty states and error screens
- add search suggestions
- improve accessibility and keyboard navigation
- use `useMemo` for derived values like sorted cuisine lists, ingredient parsing, and instruction step formatting
- optimize expensive render-time calculations by memoizing filtered, sorted, or transformed meal data

## API source

This project uses:

- [TheMealDB](https://www.themealdb.com/api.php)

## Notes

This project was built as a practice app to strengthen React fundamentals, including hooks, routing, API integration, and state management.
