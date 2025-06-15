import { authController } from "controllers/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await authController(body);
    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    } else {
      return NextResponse.json(result, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
