const BASE_URL = "https://mhw-db.com";

let monstersCache = null;
let monstersPromise = null;

function getMonsters() {
  if (monstersCache) return Promise.resolve(monstersCache);
  if (!monstersPromise) {
    monstersPromise = fetch(`${BASE_URL}/monsters`)
      .then((res) => {
        if (!res.ok) throw new Error(`Monster Hunter API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        monstersCache = Array.isArray(data) ? data : [];
        return monstersCache;
      })
      .catch((err) => {
        monstersPromise = null;
        throw err;
      });
  }
  return monstersPromise;
}

export async function getMonsterById(id) {
  const list = await getMonsters();
  return list.find((monster) => monster.id === Number(id)) ?? null;
}

export async function searchMonsters(query) {
  const list = await getMonsters();
  const q = (query ?? "").trim().toLowerCase();
  if (!q) return list;
  return list.filter((monster) => monster.name.toLowerCase().includes(q));
}

export async function getWeapons(type) {
  const url = type
    ? `${BASE_URL}/weapons?type=${encodeURIComponent(type)}`
    : `${BASE_URL}/weapons`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Monster Hunter API error: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default getMonsters;
