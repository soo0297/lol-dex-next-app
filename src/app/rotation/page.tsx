import { getChampions, getVersion } from "@/server-action";
import Image from "next/image";
import Link from "next/link";

const getChampionRotation = async () => {
  const data = await fetch(`http://localhost:3000/api/rotation`);
  const result = await data?.json();
  return result.freeChampionIds;
};

const ChampionRotationPage = async () => {
  const version = await getVersion();
  const champions = await getChampions();
  const rotation = await getChampionRotation();

  const test = Object.values(champions).filter((champion) => {
    return rotation.includes(Number(champion.key));
  });

  // console.log("test", test);

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
                    width={100}
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
