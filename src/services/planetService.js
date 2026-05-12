export async function fetchPlanets() {
  const response = await fetch(import.meta.env.VITE_API_BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch planets");
  }
  return response.json();
}
