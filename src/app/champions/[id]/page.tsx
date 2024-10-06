import ChampionDetail from "@/components/ChampionDetail";
import { Champion } from "@/types/champion";
import { getChampionsDetail } from "@/utils/serverApi";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data: Champion = await getChampionsDetail(params.id);
  return {
    title: `${data.name}-My Riot App`,
    description: `${data.name}의 상세 정보를 나타내는 페이지입니다.`,
  };
}

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const data: Champion = await getChampionsDetail(params.id);

  return (
    <div className="mt-[60px]">
      <ChampionDetail data={data} />
    </div>
  );
};

export default ChampionDetailPage;
