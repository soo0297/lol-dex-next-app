import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center mt-28">
        <h1 className="text-red-500 text-3xl font-extrabold ">
          리그 오브 레전드 정보 앱
        </h1>
        <p className="mt-4 text-gray-500 mb-3">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Link href={"/champions"}>챔피언 목록보기</Link>
        <Link href={"/rotation"}>금주 로테이션 확인</Link>
        <Link href={"/items"}>아이템 목록 보기</Link>
      </div>
    </>
  );
}
