import { createContext, useContext } from "react";

export const HunterContext = createContext(null);

export function useHunter() {
  const ctx = useContext(HunterContext);
  if (!ctx) throw new Error("useHunter must be used within a HunterProvider");
  return ctx;
}
