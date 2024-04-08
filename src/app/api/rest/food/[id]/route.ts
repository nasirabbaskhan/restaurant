import dbConnect from "@/lib/db";
import { foodSchema } from "@/model/foodModel";

import { NextRequest, NextResponse } from "next/server";

export async function GET(eeq: NextRequest, content: any) {
  const id = content.params.id;

  try {
    await dbConnect();

    const result = await foodSchema.find();

    return NextResponse.json(result);
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json(error);
  }
}
