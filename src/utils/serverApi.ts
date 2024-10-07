"use server";

import { Champion, ChampionTable } from "../types/champion";
import { Item } from "../types/item";

// 버전정보 요청
export async function getVersion() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/versions.json`
  );
  const data = await res.json();
  return data[0];
}

// 챔피언 목록 데이터 요청
export async function getChampions() {
  const version = await getVersion();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cdn/${version}/data/ko_KR/champion.json`
  );
  const data: ChampionTable = await res.json();
  const champion: Champion[] = Object.values(data.data);

  if (!res.ok) {
    return { message: "에러가 났습니다.", status: res.status };
  }

  return champion;
}

// 챔피언 상세정보 요청
export async function getChampionsDetail(id: string) {
  const version = await getVersion();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const championDetail = data.data[id];

  if (!res.ok) {
    return { message: "에러가 났습니다.", status: res.status };
  }

  return championDetail;
}

// 아이템 목록 요청
export async function getItems() {
  const version = await getVersion();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cdn/${version}/data/ko_KR/item.json`
  );
  const data = await res.json();
  const item: Item[] = Object.values(data.data);

  if (!res.ok) {
    return { message: "에러가 났습니다.", status: res.status };
  }
  return item;
}
