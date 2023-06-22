import connectDB from "@/db";

import mongoose from "mongoose";

export const revalidate = 0;

export async function GET(req) {
  try {
    //Mongo connection
    const db = await connectDB();

    //Get data

    const collection = mongoose.connection.db.collection("players");
    const count = await collection.estimatedDocumentCount({});

    return new Response(count);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal error" }));
  }
}
