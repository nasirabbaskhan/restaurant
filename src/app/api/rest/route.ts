import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import dbConnect from "@/lib/db";
import { userSchema } from "@/model/userModel";

export async function GET() {
  try {
    await dbConnect(); // Connect to the database
    console.log("Database is successfully connected");

    // Find documents using the userSchema
    const data = await userSchema.find();
    // console.log("nasir aneela:", data);
    return NextResponse.json(data);
    // Return JSON response
  } catch (error) {
    console.log("db is not conneted");
    console.log("SOMTHING WRONG", error);
  }
}
