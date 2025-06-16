// GET /me/transactions Devuelve todas mis compras con sus status y productos pagados.
import { getMeMiddleware, getAllMeTransactions } from "controllers/me";
import { NextResponse } from "next/server";

async function getAllMeTransactionsHandler(req: Request, data) {
  try {
    const { searchParams } = new URL(req.url);
    const userIdParams = searchParams.get("userId");
    const { userId } = data; //Data que me devuelve mi middleware si sale todo bien

    const idParams = Number(userIdParams);
    if (idParams !== userId) {
      return NextResponse.json(
        "No puedes consultar transactions de otros users",
        { status: 401 }
      );
    }
    const results = await getAllMeTransactions(userIdParams);
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

//usare el middleware para que nadie pueda buscar las transactions de alguien sin estar autenticado
export const GET = getMeMiddleware(getAllMeTransactionsHandler);
