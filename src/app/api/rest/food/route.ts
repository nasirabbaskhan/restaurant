import dbConnect from "@/lib/db";
import { foodSchema } from "@/model/foodModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const data = await foodSchema.find();
    // console.log("data", data);
    return NextResponse.json(data);
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();
  let success = false;
  const body = await req.json();
  console.log("body", body);
  let foodItems = new foodSchema(body);
  const result = await foodItems.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
