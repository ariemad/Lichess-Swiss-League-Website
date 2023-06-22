import connectDB from "@/db";
import { NextResponse } from "next/server";

import mongoose from "mongoose";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    //Mongo connection
    const db = await connectDB();

    //Get data

    const collection = mongoose.connection.db.collection("metas");

    let cursor = collection.find({});

    let data = await cursor.toArray();

    return new NextResponse(JSON.stringify(data[0]));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal error", message: String(error) })
    );
  }
}
