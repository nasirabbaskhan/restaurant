import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import dbConnect from "@/lib/db";
import { userSchema } from "@/model/userModel";
import { Result } from "postcss";

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

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  let result;
  let success = false;
  if (body.logIn) {
    result = await userSchema.findOne({
      email: body.email,
      password: body.password,
    });
    if (result) {
      success = true;
    }
  } else {
    let user = new userSchema(body);
    result = await user.save();
    if (result) {
      success = true;
    }
  }

  return NextResponse.json({ result, success });
}
