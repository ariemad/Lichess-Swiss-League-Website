import connectDB from "@/db";

const mongoose = require("mongoose");

export async function GET(req) {
  try {
    //Mongo connection
    const db = await connectDB();

    //Get data

    const collection = mongoose.connection.db.collection("tournaments");
    const count = await collection.estimatedDocumentCount({});

    return new Response(count);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal error" }));
  }
}
