import connectDB from "@/db";
import { getStartOfMonth, getStartOfWeek } from "@/utils/getStartOf";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req) {
  let url = new URL(req.url);
  let params = url.searchParams;
  let asd = params.get("asd");
  let sdf = params.get("sdf");
  return new NextResponse(JSON.stringify({ asd, sdf }));
}
