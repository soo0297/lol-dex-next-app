import { NextResponse } from "next/server";

// 챔피언 로테이션 요청
export async function GET() {
  try {
    if (!process.env.NEXT_PUBLIC_RIOT_API_KEY) {
      throw new Error("api key undefind");
    }
    const res = await fetch(
      `https://br1.api.riotgames.com/lol/platform/v3/champion-rotations`,
      {
        method: "GET",
        headers: {
          "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY,
        },
      }
    );
    const result = await res.json();
    // console.log("성공:", result);
    return NextResponse.json(result);
  } catch (error) {
    return console.error("실패:", error);
  }
}
