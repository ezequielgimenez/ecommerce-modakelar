import { syncAllProductsController } from "controllers/products";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { destacados } = body;

  const result = await syncAllProductsController(destacados);
  if (!result.success) {
    return NextResponse.json(result, { status: 500 });
  } else {
    return NextResponse.json(result, { status: 200 });
  }
}
