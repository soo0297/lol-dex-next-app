import { getChampions, getVersion } from "@/server-action";
import Image from "next/image";
import Link from "next/link";

const getChampionRotation = async () => {
  const data = await fetch(`http://localhost:3000/api/rotation`);
  const result = await data?.json();
  return result.freeChampionIds;
};

const ChampionRotationPage = async () => {
  const champions = await getChampions();
  const rotation = await getChampionRotation();

  const test = Object.values(champions).filter((champion) => {
    return rotation.includes(Number(champion.key));
  });

  const version = getVersion();
  // console.log("test", test);

  return (
    <div>
      <div>
        <h2>무료 챔피언 목록</h2>
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
      {/* <div>
        <h2>새로운 유저를 위한 무료 챔피언 목록</h2>
      </div> */}
    </div>
  );
};

export default ChampionRotationPage;
