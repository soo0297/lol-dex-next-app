import { GET } from "../api/rotation/route";

const ChampionRotationPage = async () => {
  const data = await GET();
  return <div>ChampionRotationPage</div>;
};

export default ChampionRotationPage;
