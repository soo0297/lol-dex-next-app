import { Champion } from "@/types/champion";
import Image from "next/image";

const ChampionDetail = ({ data }: { data: Champion }) => {
  return (
    <div className="mt-28">
      <Image
        width={600}
        height={600}
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/cdn/img/champion/splash/${data.id}_0.jpg`}
        alt={data.title}
      />
      <div>
        <h1>{data.name}</h1>
        <h3>{data.title}</h3>
        <p>{data.lore}</p>
      </div>
      <div>
        <h3>스탯</h3>
        <ul
          role="list"
          className="marker:text-red-500 list-disc pl-5  text-red-500"
        >
          <li>공격력: {data.info.attack}</li>
          <li>방어력: {data.info.defense}</li>
          <li>마법력: {data.info.magic}</li>
          <li>난이도: {data.info.difficulty}</li>
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetail;
