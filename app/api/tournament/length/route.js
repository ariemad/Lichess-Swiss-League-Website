import connectDB from "@/db";
import { NextResponse } from "next/server";

const mongoose = require("mongoose");

export async function GET(req) {
  try {
    //Mongo connection
    const db = await connectDB();

    //Get data

    const collection = mongoose.connection.db.collection("tournaments");
    const count = await collection.estimatedDocumentCount({});

    return new NextResponse(count);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Internal error" }));
  }
}
