import { getProductByIdController } from "controllers/products";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
  const { id } = await context.params;
  try {
    const result = await getProductByIdController(id);
    if (!result.success) {
      return NextResponse.json(result, { status: 404 });
    } else {
      return NextResponse.json(result, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
