const BASE_URL = "https://mhw-db.com";

export async function getMonsters() {
  const response = await fetch(`${BASE_URL}/monsters`);
  if (!response.ok) throw new Error("Failed to fetch monsters");
  return response.json();
}

export async function getMonsterById(id) {
  const response = await fetch(`${BASE_URL}/monsters/${id}`);
  if (!response.ok) throw new Error("Failed to fetch monster");
  return response.json();
}
