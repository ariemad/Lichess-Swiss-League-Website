export async function GET(req) {
  try {
    const response = await fetch(
      "https://lichess.org/api/team/chess-swiss-league/swiss?max=2"
    );

    let text = (await response.text()).split("\n");
    text.pop(); //Remove empty string
    let data = text.map((element) => JSON.parse(element));

    return new Response(JSON.stringify(data));
  } catch (error) {
    const message = { error: "Internal error" };
    return new Response(JSON.stringify(message));
  }
}
