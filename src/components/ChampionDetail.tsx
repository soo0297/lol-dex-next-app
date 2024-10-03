import { ChampionTable } from "@/types/champion";

const ChampionDetail = ({ data }: { data: ChampionTable[] }) => {
  console.log("data", data);
  return <div>ChampionDetail</div>;
};

export default ChampionDetail;
