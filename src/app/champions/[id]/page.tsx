import ChampionDetail from "@/components/ChampionDetail";
import { Champion } from "@/types/champion";
import { getChampionsDetail } from "@/server-action";

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const data: Champion = await getChampionsDetail(params.id);

  return (
    <div>
      <ChampionDetail data={data} />
    </div>
  );
};

export default ChampionDetailPage;
