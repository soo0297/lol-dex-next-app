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
        <h1 className="text-white text-4xl font-bold">{data.name}</h1>
        <h3 className="text-white text-2xl">{data.title}</h3>
        <p className="text-white text-base mt-4 max-w-2xl">{data.lore}</p>
      </div>
    </div>
  );
};

export default ChampionDetail;
