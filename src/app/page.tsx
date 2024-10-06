import Image from "next/image";
import bloodPic from "../public/blood_moon_sivir.jpg";
import sivirPic from "../public/sivir.jpg";
import snowPic from "../public/snowstorm_sivir.jpg";
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
      <div className="flex justify-center items-center gap-6 mt-10">
        <Link href={"/champions"}>
          <Image src={bloodPic} alt="Blood moon sivir" className="w-[800px]" />
          <p className="mt-3 text-center text-xl font-semibold">
            챔피언 목록보기
          </p>
        </Link>
        <Link href={"/rotation"}>
          <Image src={sivirPic} alt="Blood moon sivir" className="w-[800px]" />
          <p className="mt-3 text-center text-xl font-semibold">
            금주 로테이션 확인
          </p>
        </Link>
        <Link href={"/items"}>
          <Image src={snowPic} alt="Blood moon sivir" className="w-[800px]" />
          <p className="mt-3 text-center text-xl font-semibold">
            아이템 목록 보기
          </p>
        </Link>
      </div>
    </>
  );
}
