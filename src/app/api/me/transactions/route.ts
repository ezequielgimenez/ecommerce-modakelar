// GET /me/transactions Devuelve todas mis compras con sus status y productos pagados.

import { getAllMeTransactions } from "controllers/me";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const results = await getAllMeTransactions(userId);
    if (!results.success) {
      return NextResponse.json(results, { status: 404 });
    } else {
      return NextResponse.json(results, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
