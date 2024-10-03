import { getChampions, getVersion } from "@/server-action";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "../api/api";

export default async function ChampionListPage() {
  const version = await getVersion();
  const champions = await getChampions();

  return (
    <div>
      <h1 className="text-red-500 text-2xl font-bold mb-4">챔피언목록</h1>
      {champions.map((champion) => {
        return (
          <div key={champion.id} className="grid grid-cols-4 gap-4">
            <div className="border rounded p-4">
              <Link href={`/champions/${champion.id}`}>
                <Image
                  width={48}
                  height={48}
                  src={`${BASE_URL}/cdn/${version}/img/champion/${champion.image.full}`}
                  alt={champion.title}
                />
                <h2 className="mt-2 text-xl font-semibold">{champion.name}</h2>
                <p className="text-gray-500">{champion.title}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
