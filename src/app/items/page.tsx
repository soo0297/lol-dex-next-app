import { getItems, getVersion } from "@/server-action";
import { Item } from "@/types/item";
import Image from "next/image";

const ItemListPage = async () => {
  const version = await getVersion();
  const items: Item[] = await getItems();

  return (
    <div>
      <h1 className="text-red-500 text-2xl font-bold mb-4 mt-28">
        아이템 목록
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item) => {
          return (
            <div key={item.name}>
              <div className="border rounded p-4 min-h-[250px]">
                <Image
                  width={100}
                  height={100}
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cdn/${version}/img/item/${item.image.full}`}
                  alt={item.name}
                />
                <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.plaintext}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListPage;
