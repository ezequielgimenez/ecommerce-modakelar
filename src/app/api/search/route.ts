import { searchProductsController } from "controllers/products";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    const products = await searchProductsController(q, limit, offset);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
