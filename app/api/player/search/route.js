import connectDB from "@/db";

const mongoose = require("mongoose");

export async function GET(req) {
  try {
    //Mongo connection
    const db = await connectDB();

    //Format request

    let url = new URL(req.url);
    const params = url.searchParams;
    const rowsPerPage = params.get("rowsPerPage");
    const page = params.get("page");
    const timeFilter = params.get("timeFilter");
    const order = params.get("order");
    const orderBy = params.get("orderBy");

    const collection = mongoose.connection.db.collection("players");

    //Get Data

    let sortString;
    if (orderBy == "_id") {
      sortString = [`_id`, order];
    } else {
      sortString = [`stats.${timeFilter}.${orderBy}`, order];
    }

    let cursor = collection
      .find({})
      .sort([sortString])
      .skip(page * rowsPerPage)
      .limit(Number(rowsPerPage));

    let data = await cursor.toArray();

    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify({ error: "Internal Error" }));
  }
}
