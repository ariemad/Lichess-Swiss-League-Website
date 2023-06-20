import connectDB from "@/db";
import { getStartOfMonth, getStartOfWeek } from "@/utils/getStartOf";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";

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

    const collection = mongoose.connection.db.collection("tournaments");

    //Prepare query

    let filterString;
    let targetDate;
    if (timeFilter == "allTime") {
      filterString = {};
    } else if (timeFilter == "monthly") {
      targetDate = getStartOfMonth();
      filterString = { dateField: { $gt: targetDate } };
    } else if (timeFilter == "weekly") {
      targetDate = getStartOfWeek();
      filterString = { dateField: { $gt: targetDate } };
    }

    let sortString = [`${orderBy}`, order];

    //Get Data

    let cursor = collection
      .find(filterString)
      .sort([sortString])
      .skip(page * rowsPerPage)
      .limit(Number(rowsPerPage));

    let data = await cursor.toArray();

    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: "Internal Error",
        message: String(error),
      })
    );
  }
}
