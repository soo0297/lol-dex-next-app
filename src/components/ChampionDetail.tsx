import { getChampionsDetail } from "@/server-action";
import { ChampionTable } from "@/types/champion";
import Image from "next/image";

const ChampionDetail = ({ data }: { data: ChampionTable[] }) => {
  return (
    <div>
      <Image
        width={600}
        height={600}
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/cdn/img/champion/splash/${data[0].id}_0.jpg`}
        alt={data[0].title}
      />
      <div>
        <h1>{data[0].name}</h1>
        <h3>{data[0].title}</h3>
        <p>{data[0].lore}</p>
      </div>
      <div>
        <h3>스탯</h3>
        <ul
          role="list"
          className="marker:text-red-500 list-disc pl-5  text-red-500"
        >
          <li>공격력: {data[0].info.attack}</li>
          <li>방어력: {data[0].info.defense}</li>
          <li>마법력: {data[0].info.magic}</li>
          <li>난이도: {data[0].info.difficulty}</li>
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetail;
