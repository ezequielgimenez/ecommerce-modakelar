import { createTransactionController } from "controllers/transaction";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { productId, email } = body;
  try {
    const transaction = await createTransactionController(productId, email);
    if (!transaction.success) {
      return NextResponse.json(transaction, { status: 404 });
    } else {
      return NextResponse.json(transaction, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
