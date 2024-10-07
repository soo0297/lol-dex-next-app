"use client";

import { Champion } from "@/types/champion";
import { championRotation } from "@/types/championRotation";
import { getChampions, getVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ChampionRotationPage = () => {
  const [version, setVersion] = useState();
  const [champions, setChampions] = useState<Champion[]>([]);
  const [rotation, setRotation] = useState<number[]>([]);

  useEffect(() => {
    const getChampionRotation = async () => {
      const data = await fetch(`/api/rotation`);
      const result: championRotation = await data?.json();

      return result.freeChampionIds;
    };

    const handleSetData = async () => {
      const version = await getVersion();
      const data = await getChampions();
      const rotation = await getChampionRotation();
      if (data && "message" in data) {
        return alert(data.message);
      }
      console.log("rotation", rotation);
      if (rotation && "message" in rotation) {
        return alert(rotation.message);
      }
      setChampions(data);
      setVersion(version);
      setRotation(rotation);
    };

    handleSetData();
    getChampionRotation();
  }, []);

  const test = Object.values(champions).filter((champion) => {
    // rotation이 undefined나 null일 경우 빈 배열을 사용
    return (rotation ?? []).includes(Number(champion.key));
  });

  return (
    <div>
      <h2 className="text-red-500 text-2xl font-bold mb-4 mt-28">
        무료 챔피언 목록
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {test.map((champion) => {
          return (
            <div key={champion.id}>
              <div className="border rounded p-4">
                <Link href={`/champions/${champion.id}`}>
                  <Image
                    width={150}
                    height={100}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/cdn/${version}/img/champion/${champion.image.full}`}
                    alt={champion.title}
                  />
                  <h2 className="mt-2 text-xl font-semibold">
                    {champion.name}
                  </h2>
                  <p className="text-gray-500">{champion.title}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionRotationPage;
