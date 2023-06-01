import connectDB from "@/db";

const mongoose = require("mongoose");

export async function GET(req) {
  try {
    //Mongo connection
    const db = await connectDB();

    //Get data

    const collection = mongoose.connection.db.collection("metas");

    let cursor = collection.find({});

    let data = await cursor.toArray();

    return new Response(JSON.stringify(data[0]));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal error" }));
  }
}
