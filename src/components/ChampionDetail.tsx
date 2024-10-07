import { Champion } from "@/types/champion";

const ChampionDetail = ({ data }: { data: Champion }) => {
  return (
    <div
      className="relative w-full h-[650px] bg-cover"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/cdn/img/champion/splash/${data.id}_0.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end pl-12 pb-11">
        <h1 className="text-white text-5xl font-extrabold">{data.name}</h1>
        <h3 className="text-white text-xl my-2">{data.title}</h3>
        <p className="text-white text-base mb-4 max-w-2xl">{data.lore}</p>
        <h3 className="text-white text-2xl">스탯</h3>
        <ul role="list" className="text-white text-base list-disc pl-5 ">
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
