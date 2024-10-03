import { ChampionTable } from "./types/champion";

export async function getVersion() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/versions.json`
  );
  const data = await res.json();
  return data[0];
}

export async function getChampions() {
  const version = await getVersion();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cdn/${version}/data/ko_KR/champion.json`
  );
  const data: ChampionTable = await res.json();
  const champion = Object.values(data.data);
  return champion;
}

export async function getChampionsDetail(id: string) {
  const version = await getVersion();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  const data = await res.json();
  const championDetail = data.data[id];

  return championDetail;
}

export async function getItems() {
  const version = await getVersion();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cdn/${version}/data/ko_KR/item.json`
  );
  const data = await res.json();
  console.log("data", data);
  const item = Object.values(data.data);
  //   console.log("item", item);
  return item;
}
