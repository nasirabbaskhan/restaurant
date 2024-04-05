import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import dbConnect from "@/lib/db";
import { userSchema } from "@/model/usersModel";

export async function GET() {
  try {
    await dbConnect(); // Connect to the database

    // Find documents using the userSchema
    const data = await userSchema.find();
    console.log("nasir aneela:", data);
    return NextResponse.json({ result: data });
    // Return JSON response
  } catch (error) {
    console.log("db is not conneted");
    console.log("SOMTHING WRONG", error);
  }
}
