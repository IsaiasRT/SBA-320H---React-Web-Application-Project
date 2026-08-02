export const WEAPONS = [
  "Great Sword",
  "Long Sword",
  "Sword & Shield",
  "Dual Blades",
  "Hammer",
  "Hunting Horn",
  "Lance",
  "Gunlance",
  "Switch Axe",
  "Charge Blade",
  "Insect Glaive",
  "Light Bowgun",
  "Heavy Bowgun",
  "Bow",
];

export const RESULTS = ["Slayed", "Captured", "Failed", "Repelled", "Abandoned"];

export function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}

export function formatDate(input) {
  if (!input) return "—";
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return String(input);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function stars(count, max = 5) {
  const safe = Math.max(0, Math.min(Number(count) || 0, max));
  return "★".repeat(safe) + "☆".repeat(max - safe);
}

export function capitalize(str) {
  if (!str) return "";
  return str
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function average(values) {
  const nums = values.filter((n) => typeof n === "number" && !Number.isNaN(n));
  if (!nums.length) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

const PALETTE = [
  "#2b5876",
  "#134e5e",
  "#7b4397",
  "#f7971e",
  "#c94b4b",
  "#1d976c",
  "#3a1c71",
  "#0f2027",
];

export function monsterImageStyle(monster) {
  const index = (monster?.id ?? 0) % PALETTE.length;
  return { background: PALETTE[index] };
}

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
