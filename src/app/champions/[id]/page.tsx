import ChampionDetail from "@/components/ChampionDetail";
import { getChampionsDetail } from "@/server-action";

// type Props = {
//   params: {
//     id: string;
//   };
// };

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getChampionsDetail(params.id);
  //   console.log("data", data);
  return (
    <div>
      <ChampionDetail data={[data]} />
    </div>
  );
};

export default ChampionDetailPage;
