import { useEffect, useMemo, useReducer } from "react";
import { HunterContext } from "./HunterContext.jsx";
import { hunterReducer, initialState } from "./hunterReducer.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const STORAGE_KEY = "hunter-journal:v1";

const PERSISTED_KEYS = [
  "favorites",
  "wishlist",
  "defeated",
  "journal",
  "ratings",
  "filters",
  "theme",
];

export default function HunterProvider({ children }) {
  const [stored, setStored] = useLocalStorage(STORAGE_KEY, null);

  const [state, dispatch] = useReducer(hunterReducer, stored, (seed) => ({
    ...initialState,
    ...(seed ?? {}),
  }));

  useEffect(() => {
    const snapshot = {};
    for (const key of PERSISTED_KEYS) snapshot[key] = state[key];
    setStored(snapshot);
  }, [state, setStored]);

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
  }, [state.theme]);

  const helpers = useMemo(() => {
    const isFavorite = (id) => state.favorites.some((m) => m.id === Number(id));
    const isWishlist = (id) => state.wishlist.some((m) => m.id === Number(id));
    const isDefeated = (id) => state.defeated.some((m) => m.id === Number(id));
    const getRating = (id) => state.ratings[Number(id)] ?? null;
    return { isFavorite, isWishlist, isDefeated, getRating };
  }, [state.favorites, state.wishlist, state.defeated, state.ratings]);

  const value = useMemo(
    () => ({ state, dispatch, ...helpers }),
    [state, dispatch, helpers],
  );

  return (
    <HunterContext.Provider value={value}>{children}</HunterContext.Provider>
  );
}
