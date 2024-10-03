import { BASE_URL } from "@/app/api/api";
import ChampionDetail from "@/components/ChampionDetail";
import { getChampionsDetail } from "@/server-action";

// type Props = {
//   params: {
//     id: string;
//   };
// };

// const fetchChampion = async (id: string) => {
//     const version = await getVersion()
//   const res = await fetch(`${BASE_URL}/cdn/${version}/champions/${id}`);
//   const data: Champion[] = await res.json();

//   return data;
// };

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getChampionsDetail(params.id);
  console.log("data", data);
  return <div>{/* <ChampionDetail champion={data} /> */}</div>;
};

export default ChampionDetailPage;
