import { getChampions } from "@/server-action";

export default async function ChampionListPage() {
  const champions = await getChampions();

  return (
    <section>
      <h1>챔피언목록</h1>
      {champions.map((champion) => {
        return (
          <div key={champion.id}>
            {/* <Image
              width={48}
              height={48}
              src={champion.image}
              alt={champion.title}
            /> */}
            <div>{champion.name}</div>
            <div>{champion.title}</div>
          </div>
        );
      })}
    </section>
  );
}
