import { BASE_URL } from "./app/api/api";
import { Champion } from "./types/champion";

export async function getChampions() {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "force-cache",
  });
  const data: Champion[] = await res.json();

  return { data };
}
