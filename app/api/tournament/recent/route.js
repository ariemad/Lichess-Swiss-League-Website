import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const response = await fetch(
      "https://lichess.org/api/team/chess-swiss-league/swiss?max=5",
      { cache: "no-store" }
    );

    let text = (await response.text()).split("\n");
    text.pop(); //Remove empty string
    let data = text.map((element) => JSON.parse(element));

    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Internal error" }));
  }
}
